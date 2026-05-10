from __future__ import annotations

import ipaddress
import math
from html import escape
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile


CRECIMIENTO = 0.25


def col_name(n: int) -> str:
    out = ""
    while n:
        n, rem = divmod(n - 1, 26)
        out = chr(65 + rem) + out
    return out


def ref(row: int, col: int) -> str:
    return f"{col_name(col)}{row}"


def cell(value: str | int, style: int | None = None) -> str:
    style_attr = f' s="{style}"' if style is not None else ""
    if isinstance(value, int):
        return f'{style_attr}><v>{value}</v>'
    return f'{style_attr} t="inlineStr"><is><t>{escape(value)}</t></is>'


def row_xml(row: int, values: dict[int, tuple[str | int, int | None]]) -> str:
    cells = []
    for col, (value, style) in sorted(values.items()):
        cells.append(f'<c r="{ref(row, col)}"{cell(value, style)}</c>')
    return f'<row r="{row}">{"".join(cells)}</row>'


def host_bits(hosts: int) -> int:
    h = 2
    while (2**h - 2) < hosts:
        h += 1
    return h


def validate_allocations(parent: ipaddress.IPv4Network, nets: list[ipaddress.IPv4Network]) -> None:
    assert all(net.subnet_of(parent) for net in nets), "Alguna VLAN queda fuera de la sede"
    for i, left in enumerate(nets):
        for right in nets[i + 1 :]:
            assert not left.overlaps(right), f"Solapamiento: {left} y {right}"


def allocate_vlsm(
    parent_cidr: str,
    unidades: list[tuple[str, int, str, int]],
) -> list[dict[str, str | int | ipaddress.IPv4Network]]:
    parent = ipaddress.ip_network(parent_cidr)
    current = int(parent.network_address)
    end = int(parent.broadcast_address)
    rows = []

    for unidad, actuales, vlan, vlan_id in unidades:
        proyectados = math.ceil(actuales * (1 + CRECIMIENTO))
        h = host_bits(proyectados)
        prefix = 32 - h
        block_size = 2**h
        if current % block_size:
            current += block_size - (current % block_size)
        net = ipaddress.ip_network((current, prefix))
        if int(net.broadcast_address) > end:
            raise ValueError(f"No hay espacio para {unidad} dentro de {parent}")
        rows.append(
            {
                "unidad": unidad,
                "actuales": actuales,
                "proyectados": proyectados,
                "vlan": vlan,
                "vlan_id": vlan_id,
                "h": h,
                "asignados": 2**h - 2,
                "prefix": prefix,
                "mask": str(net.netmask),
                "network": str(net.network_address),
                "first": str(net.network_address + 1),
                "last": str(net.broadcast_address - 1),
                "broadcast": str(net.broadcast_address),
                "net": net,
            }
        )
        current = int(net.broadcast_address) + 1

    validate_allocations(parent, [row["net"] for row in rows])  # type: ignore[list-item]
    return rows


def build_sheet(
    nombre_sede: str,
    estudiante: str,
    parent_cidr: str,
    unidades: list[tuple[str, int, str, int]],
) -> str:
    data = allocate_vlsm(parent_cidr, unidades)
    rows = [
        row_xml(1, {1: ("Apellidos y Nombre del estudiante:", 1), 2: (estudiante, 2)}),
        row_xml(2, {1: ("Nombre de la Sede:", 1), 2: (nombre_sede, 2)}),
        row_xml(3, {1: ("Direccion IP (subred):", 1), 2: (parent_cidr, 2)}),
    ]

    headers = {
        1: "Nombre de la Unidad Organizacional",
        2: "Requisitos de hosts Actuales",
        3: "Requisitos de hosts con crecimiento del 25% (x 1.25)",
        4: "Nombre de la VLAN",
        5: "VLAN ID",
        6: "h",
        7: "Hosts asignados (# hosts)",
        8: "Longitud de Prefijo (LP)",
        9: "Mascara de Subred",
        10: "Direccion de Red",
        11: "Primer Host",
        12: "Ultimo Host",
        13: "Direccion de Broadcast",
    }
    rows.append(row_xml(6, {col: (text, 4) for col, text in headers.items()}))

    for idx, item in enumerate(data, start=7):
        rows.append(
            row_xml(
                idx,
                {
                    1: (str(item["unidad"]), 6),
                    2: (int(item["actuales"]), 6),
                    3: (int(item["proyectados"]), 6),
                    4: (str(item["vlan"]), 6),
                    5: (int(item["vlan_id"]), 6),
                    6: (int(item["h"]), 6),
                    7: (int(item["asignados"]), 6),
                    8: (f"/{item['prefix']}", 6),
                    9: (str(item["mask"]), 6),
                    10: (str(item["network"]), 6),
                    11: (str(item["first"]), 6),
                    12: (str(item["last"]), 6),
                    13: (str(item["broadcast"]), 6),
                },
            )
        )

    total_row = 7 + len(data)
    rows.append(
        row_xml(
            total_row,
            {
                1: ("Total Host", 1),
                2: (sum(int(item["actuales"]) for item in data), 1),
                3: (sum(int(item["proyectados"]) for item in data), 1),
                7: (sum(int(item["asignados"]) for item in data), 1),
            },
        )
    )
    rows.append(row_xml(total_row + 2, {1: ("Validacion:", 1), 2: (f"Todas las VLAN quedan dentro de {parent_cidr} y no se solapan.", 2)}))

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
 <sheetViews><sheetView workbookViewId="0"><pane ySplit="6" topLeftCell="A7" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
 <cols>
  <col min="1" max="1" width="32" customWidth="1"/>
  <col min="2" max="3" width="22" customWidth="1"/>
  <col min="4" max="4" width="22" customWidth="1"/>
  <col min="5" max="8" width="16" customWidth="1"/>
  <col min="9" max="13" width="21" customWidth="1"/>
 </cols>
 <sheetData>{''.join(rows)}</sheetData>
 <mergeCells count="1"><mergeCell ref="B1:D1"/></mergeCells>
</worksheet>'''


def create_xlsx(
    salida: Path,
    sheet_name: str,
    nombre_sede: str,
    estudiante: str,
    parent_cidr: str,
    unidades: list[tuple[str, int, str, int]],
) -> None:
    styles = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
 <fonts count="3">
  <font><sz val="11"/><name val="Calibri"/></font>
  <font><b/><sz val="11"/><name val="Calibri"/></font>
  <font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Calibri"/></font>
 </fonts>
 <fills count="4">
  <fill><patternFill patternType="none"/></fill>
  <fill><patternFill patternType="gray125"/></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="FF808080"/><bgColor indexed="64"/></patternFill></fill>
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
  <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFill="1" applyFont="1" applyBorder="1"><alignment horizontal="center" vertical="center"/></xf>
  <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyFill="1" applyFont="1" applyBorder="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyFill="1" applyFont="1" applyBorder="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
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
        "xl/workbook.xml": f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
 <sheets><sheet name="{escape(sheet_name)}" sheetId="1" r:id="rId1"/></sheets>
</workbook>''',
        "xl/_rels/workbook.xml.rels": '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
 <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
 <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>''',
        "xl/worksheets/sheet1.xml": build_sheet(nombre_sede, estudiante, parent_cidr, unidades),
        "xl/styles.xml": styles,
    }

    with ZipFile(salida, "w", ZIP_DEFLATED) as xlsx:
        for name, content in files.items():
            xlsx.writestr(name, content)

    data = allocate_vlsm(parent_cidr, unidades)
    print(f"OK: {salida.resolve()}")
    print(f"Sede: {nombre_sede}")
    print(f"Red: {parent_cidr}")
    print(f"VLANs generadas: {len(data)}")
    print(f"Hosts actuales: {sum(int(item['actuales']) for item in data)}")
    print(f"Hosts proyectados 25%: {sum(int(item['proyectados']) for item in data)}")
    print("Validacion: todas las subredes quedan dentro de la sede y no se solapan.")
