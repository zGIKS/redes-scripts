#!/usr/bin/env python3
"""Genera la tabla VLSM de la PC1 U202319963.

Salida:
- tabla_pc1_u202319963.xlsx
- tabla_pc1_u202319963.csv
- tabla_pc1_u202319963.md
"""

from __future__ import annotations

import csv
import ipaddress
import math
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape


RED_PADRE = "10.50.80.0/24"
SUBREDES = [
    ("LAN 1", 58),
    ("LAN 3", 12),
    ("LAN 2", 5),
    ("LAN 4", 4),
    ("WAN", 2),
]
ENCABEZADOS = [
    "Nombre de la Subred",
    "# de Hosts requeridos",
    "# de Hosts asignados",
    "ID de red o Subred",
    "Mascara de subred /N",
    "mascara de subred en decimal",
    "Gateway (1era IP)",
    "Rango de IPs para Hosts",
    "IP de Broadcast (ultima IP de la red)",
]


def prefijo_para_hosts(hosts: int) -> int:
    bits_host = math.ceil(math.log2(hosts + 2))
    return 32 - bits_host


def calcular_vlsm() -> list[dict[str, str | int]]:
    red = ipaddress.ip_network(RED_PADRE)
    cursor = int(red.network_address)
    limite = int(red.broadcast_address)
    filas: list[dict[str, str | int]] = []

    for nombre, hosts in SUBREDES:
        prefijo = prefijo_para_hosts(hosts)
        bloque = 2 ** (32 - prefijo)
        resto = cursor % bloque
        if resto:
            cursor += bloque - resto

        red_ip = ipaddress.IPv4Address(cursor)
        gateway = ipaddress.IPv4Address(cursor + 1)
        primer_host_pc = ipaddress.IPv4Address(cursor + 2)
        ultimo_host = ipaddress.IPv4Address(cursor + bloque - 2)
        broadcast = ipaddress.IPv4Address(cursor + bloque - 1)
        mascara = str(ipaddress.ip_network(f"{red_ip}/{prefijo}").netmask)

        if int(broadcast) > limite:
            raise ValueError(f"{nombre} no cabe dentro de {RED_PADRE}")

        if hosts == 2:
            rango_hosts = f"{gateway} - {ultimo_host}"
        else:
            rango_hosts = f"{primer_host_pc} - {ultimo_host}"

        filas.append(
            {
                "Nombre de la Subred": nombre,
                "# de Hosts requeridos": hosts,
                "# de Hosts asignados": bloque - 2,
                "ID de red o Subred": str(red_ip),
                "Mascara de subred /N": f"/{prefijo}",
                "mascara de subred en decimal": mascara,
                "Gateway (1era IP)": str(gateway),
                "Rango de IPs para Hosts": rango_hosts,
                "IP de Broadcast (ultima IP de la red)": str(broadcast),
            }
        )
        cursor += bloque

    return filas


def escribir_csv(filas: list[dict[str, str | int]], ruta: Path) -> None:
    with ruta.open("w", newline="", encoding="utf-8") as archivo:
        writer = csv.DictWriter(archivo, fieldnames=ENCABEZADOS)
        writer.writeheader()
        writer.writerows(filas)


def escribir_md(filas: list[dict[str, str | int]], ruta: Path) -> None:
    lineas = [
        f"# Tabla VLSM - {RED_PADRE}",
        "",
        "| " + " | ".join(ENCABEZADOS) + " |",
        "| " + " | ".join(["---"] * len(ENCABEZADOS)) + " |",
    ]
    for fila in filas:
        lineas.append("| " + " | ".join(str(fila[col]) for col in ENCABEZADOS) + " |")
    ruta.write_text("\n".join(lineas) + "\n", encoding="utf-8")


def col_letra(numero: int) -> str:
    letras = ""
    while numero:
        numero, resto = divmod(numero - 1, 26)
        letras = chr(65 + resto) + letras
    return letras


def celda(ref: str, valor: str | int, estilo: int) -> str:
    if isinstance(valor, int):
        return f'<c r="{ref}" s="{estilo}"><v>{valor}</v></c>'
    return f'<c r="{ref}" t="inlineStr" s="{estilo}"><is><t>{escape(str(valor))}</t></is></c>'


def fila_xlsx(numero: int, valores: list[str | int], estilos: list[int]) -> str:
    celdas = [
        celda(f"{col_letra(i)}{numero}", valor, estilos[i - 1])
        for i, valor in enumerate(valores, start=1)
    ]
    return f'<row r="{numero}" ht="32" customHeight="1">{"".join(celdas)}</row>'


def escribir_xlsx(filas: list[dict[str, str | int]], ruta: Path) -> None:
    rows = [fila_xlsx(1, ENCABEZADOS, [1] * len(ENCABEZADOS))]
    for numero, fila in enumerate(filas, start=2):
        valores = [fila[col] for col in ENCABEZADOS]
        rows.append(fila_xlsx(numero, valores, [2] + [3] * (len(ENCABEZADOS) - 1)))

    fin = 1 + len(filas)
    sheet_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <dimension ref="A1:I{fin}"/>
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="22"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="3" width="17" customWidth="1"/>
    <col min="4" max="5" width="17" customWidth="1"/>
    <col min="6" max="6" width="24" customWidth="1"/>
    <col min="7" max="7" width="18" customWidth="1"/>
    <col min="8" max="8" width="28" customWidth="1"/>
    <col min="9" max="9" width="26" customWidth="1"/>
  </cols>
  <sheetData>{''.join(rows)}</sheetData>
  <pageMargins left="0.4" right="0.4" top="0.5" bottom="0.5" header="0.3" footer="0.3"/>
</worksheet>"""

    styles_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="2">
    <font><sz val="10"/><name val="Calibri"/></font>
    <font><b/><sz val="9"/><name val="Calibri"/></font>
  </fonts>
  <fills count="4">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFDDEBF7"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFFF99"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"/><right style="thin"/><top style="thin"/><bottom style="thin"/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="4">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>"""

    workbook_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="Tabla VLSM" sheetId="1" r:id="rId1"/></sheets>
</workbook>"""
    workbook_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>"""
    root_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>"""
    content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>"""

    with zipfile.ZipFile(ruta, "w", zipfile.ZIP_DEFLATED) as xlsx:
        xlsx.writestr("[Content_Types].xml", content_types)
        xlsx.writestr("_rels/.rels", root_rels)
        xlsx.writestr("xl/workbook.xml", workbook_xml)
        xlsx.writestr("xl/_rels/workbook.xml.rels", workbook_rels)
        xlsx.writestr("xl/styles.xml", styles_xml)
        xlsx.writestr("xl/worksheets/sheet1.xml", sheet_xml)


def main() -> None:
    carpeta = Path(__file__).resolve().parent
    filas = calcular_vlsm()
    base = carpeta / "tabla_pc1_u202319963"

    escribir_csv(filas, base.with_suffix(".csv"))
    escribir_md(filas, base.with_suffix(".md"))
    escribir_xlsx(filas, base.with_suffix(".xlsx"))

    print("Tabla generada:")
    for fila in filas:
        print(" | ".join(str(fila[col]) for col in ENCABEZADOS))
    print(f"\nArchivos creados en: {carpeta}")


if __name__ == "__main__":
    main()
