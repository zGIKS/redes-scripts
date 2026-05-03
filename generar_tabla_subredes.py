from __future__ import annotations

import ipaddress
from html import escape
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile


RED_PADRE = "10.192.0.0/16"
SUBREDES_REQUERIDAS = 8
PREFIJO_NUEVO = 19
SALIDA = Path("GENERADO-IA.xlsx")


def col_name(n: int) -> str:
    out = ""
    while n:
        n, rem = divmod(n - 1, 26)
        out = chr(65 + rem) + out
    return out


def ref(row: int, col: int) -> str:
    return f"{col_name(col)}{row}"


def cell_text(value: str, style: int | None = None) -> str:
    style_attr = f' s="{style}"' if style is not None else ""
    return f'{style_attr} t="inlineStr"><is><t>{escape(value)}</t></is>'


def cell_number(value: int, style: int | None = None) -> str:
    style_attr = f' s="{style}"' if style is not None else ""
    return f'{style_attr}><v>{value}</v>'


def row_xml(row: int, values: dict[int, tuple[str | int, int | None]]) -> str:
    cells = []
    for col, (value, style) in sorted(values.items()):
        content = cell_number(value, style) if isinstance(value, int) else cell_text(value, style)
        cells.append(f'<c r="{ref(row, col)}"{content}</c>')
    return f'<row r="{row}">{"".join(cells)}</row>'


def validar_subredes(parent: ipaddress.IPv4Network, subnets: list[ipaddress.IPv4Network]) -> None:
    assert len(subnets) == SUBREDES_REQUERIDAS, "No se generaron las 8 subredes requeridas"
    assert all(net.prefixlen == PREFIJO_NUEVO for net in subnets), "Alguna subred no es /19"
    assert all(net.subnet_of(parent) for net in subnets), "Alguna subred queda fuera de la red padre"

    for left, right in zip(subnets, subnets[1:]):
        assert left.broadcast_address + 1 == right.network_address, "Hay huecos o solapamiento"

    assert subnets[0].network_address == parent.network_address, "La primera subred no inicia en la red padre"
    assert subnets[-1].broadcast_address == parent.broadcast_address, "La ultima subred no cubre el final de la red padre"


def crear_excel() -> None:
    parent = ipaddress.ip_network(RED_PADRE)
    subnets = list(parent.subnets(new_prefix=PREFIJO_NUEVO))
    validar_subredes(parent, subnets)

    sedes = ["Reservado", "Perú", "Chile", "Argentina", "Ecuador", "Colombia", "Reserva", "Reserva"]

    rows: list[str] = [
        row_xml(1, {1: ("Caso Estudio:", 1), 2: ("MIEMPRESA - Grupo 2 / Caso Oracle", 2)}),
        row_xml(2, {1: ("Dirección IP (Padre):", 1), 2: (RED_PADRE, 2)}),
        row_xml(3, {1: ("Numero de Subredes Requeridas:", 1), 2: (SUBREDES_REQUERIDAS, 2)}),
        row_xml(4, {1: ("Cantidad de Bits para acomodar las subredes requeridas:", 1), 2: ("3 bits (2^3 = 8)", 2)}),
        row_xml(8, {3: ("Dirección IP padre en Binario", 3)}),
    ]

    headers = {
        1: "Subred",
        3: "Primer Octeto",
        4: "Segundo Octeto",
        5: "Tercer Octeto",
        6: "Cuarto Octeto",
        7: "Dirección de Red",
        8: "Mascara de subred",
        9: "Longitud de Prefijo (LP)",
        10: "Primer Host",
        11: "Ultimo Host",
        12: "Dirección de Broadcast",
        13: "Sede",
    }
    rows.append(row_xml(9, {c: (v, 4 if c not in (7, 10, 11, 12) else 5) for c, v in headers.items()}))

    for i, net in enumerate(subnets):
        row = 10 + i
        octets = str(net.network_address).split(".")
        binary_octets = [format(int(octet), "08b") for octet in octets]
        rows.append(
            row_xml(
                row,
                {
                    1: (f"S{i}", 6),
                    3: (binary_octets[0], 6),
                    4: (binary_octets[1], 6),
                    5: (binary_octets[2], 6),
                    6: (binary_octets[3], 6),
                    7: (str(net.network_address), 6),
                    8: (str(net.netmask), 6),
                    9: (f"/{net.prefixlen}", 6),
                    10: (str(net.network_address + 1), 6),
                    11: (str(net.broadcast_address - 1), 6),
                    12: (str(net.broadcast_address), 6),
                    13: (sedes[i], 6),
                },
            )
        )

    sheet = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
 <sheetViews><sheetView workbookViewId="0"><pane ySplit="9" topLeftCell="A10" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
 <cols>
  <col min="1" max="1" width="28" customWidth="1"/>
  <col min="2" max="2" width="18" customWidth="1"/>
  <col min="3" max="6" width="17" customWidth="1"/>
  <col min="7" max="12" width="20" customWidth="1"/>
  <col min="13" max="13" width="18" customWidth="1"/>
 </cols>
 <sheetData>{''.join(rows)}</sheetData>
 <mergeCells count="1"><mergeCell ref="C8:F8"/></mergeCells>
</worksheet>'''

    styles = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
 <fonts count="3">
  <font><sz val="11"/><name val="Calibri"/></font>
  <font><b/><sz val="11"/><name val="Calibri"/></font>
  <font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Calibri"/></font>
 </fonts>
 <fills count="5">
  <fill><patternFill patternType="none"/></fill>
  <fill><patternFill patternType="gray125"/></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="FF808080"/><bgColor indexed="64"/></patternFill></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="FF00B050"/><bgColor indexed="64"/></patternFill></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="FF595959"/><bgColor indexed="64"/></patternFill></fill>
 </fills>
 <borders count="2">
  <border><left/><right/><top/><bottom/><diagonal/></border>
  <border><left style="thin"/><right style="thin"/><top style="thin"/><bottom style="thin"/><diagonal/></border>
 </borders>
 <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
 <cellXfs count="7">
  <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyBorder="1"/>
  <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/>
  <xf numFmtId="0" fontId="2" fillId="4" borderId="1" xfId="0" applyFill="1" applyFont="1" applyBorder="1"><alignment horizontal="center" vertical="center"/></xf>
  <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyFill="1" applyFont="1" applyBorder="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFill="1" applyFont="1" applyBorder="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"><alignment horizontal="center" vertical="center"/></xf>
 </cellXfs>
 <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>'''

    files = {
        "[Content_Types].xml": '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
 <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
 <Default Extension="xml" ContentType="application/xml"/>
 <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
 <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
 <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>''',
        "_rels/.rels": '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
 <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>''',
        "xl/workbook.xml": '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
 <sheets><sheet name="Subredes" sheetId="1" r:id="rId1"/></sheets>
</workbook>''',
        "xl/_rels/workbook.xml.rels": '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
 <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
 <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>''',
        "xl/worksheets/sheet1.xml": sheet,
        "xl/styles.xml": styles,
    }

    with ZipFile(SALIDA, "w", ZIP_DEFLATED) as xlsx:
        for name, content in files.items():
            xlsx.writestr(name, content)

    print(f"OK: {SALIDA.resolve()}")
    print(f"Red padre: {parent}")
    print(f"Subredes generadas: {len(subnets)}")
    print(f"Nuevo prefijo: /{PREFIJO_NUEVO}")
    print(f"Mascara: {subnets[0].netmask}")
    print("Validacion: cubre toda la red padre, sin huecos y sin solapamientos.")


if __name__ == "__main__":
    crear_excel()
