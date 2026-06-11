#!/usr/bin/env python3
"""Genera la tabla VLSM para la red 172.16.100.0/24.

El script no necesita librerias externas. Produce:
- salida-vlsm/tabla_vlsm_172_16_100.xlsx
- salida-vlsm/tabla_vlsm_172_16_100.csv
- salida-vlsm/tabla_vlsm_172_16_100.md
"""

from __future__ import annotations

import argparse
import csv
import ipaddress
import math
import zipfile
from pathlib import Path
from typing import Iterable
from xml.sax.saxutils import escape


RED_PADRE = "172.16.100.0/24"
SUBREDES = [
    ("Building A", 82),
    ("Building D", 62),
    ("Building B", 21),
    ("Building C", 4),
    ("R1-R2", 2),
    ("R2-R3", 2),
    ("R3-R4", 2),
]
ENCABEZADOS = [
    "Nombre Subred",
    "Host Solicitados",
    "Host Validos",
    "Prefijo",
    "Direccion de Red",
    "Rango de Hosts Utilizable",
    "Broadcast",
]


def prefijo_para_hosts(hosts: int) -> int:
    """Devuelve el prefijo minimo que soporta la cantidad de hosts solicitada."""
    bits_host = math.ceil(math.log2(hosts + 2))
    return 32 - bits_host


def calcular_vlsm(red_padre: str, subredes: Iterable[tuple[str, int]]) -> list[dict[str, str | int]]:
    red = ipaddress.ip_network(red_padre, strict=True)
    cursor = int(red.network_address)
    limite = int(red.broadcast_address)
    filas = []

    for nombre, hosts in sorted(subredes, key=lambda item: item[1], reverse=True):
        prefijo = prefijo_para_hosts(hosts)
        tamano_bloque = 2 ** (32 - prefijo)
        resto = cursor % tamano_bloque
        if resto:
            cursor += tamano_bloque - resto

        direccion_red = ipaddress.IPv4Address(cursor)
        broadcast = ipaddress.IPv4Address(cursor + tamano_bloque - 1)
        if int(broadcast) > limite:
            raise ValueError(f"La subred {nombre} ya no cabe dentro de {red_padre}")

        filas.append(
            {
                "Nombre Subred": nombre,
                "Host Solicitados": hosts,
                "Host Validos": tamano_bloque - 2,
                "Prefijo": f"/{prefijo}",
                "Direccion de Red": f"{direccion_red}/{prefijo}",
                "Rango de Hosts Utilizable": (
                    f"{ipaddress.IPv4Address(cursor + 1)} - "
                    f"{ipaddress.IPv4Address(cursor + tamano_bloque - 2)}"
                ),
                "Broadcast": str(broadcast),
            }
        )
        cursor += tamano_bloque

    return filas


def escribir_csv(filas: list[dict[str, str | int]], ruta: Path) -> None:
    with ruta.open("w", newline="", encoding="utf-8") as archivo:
        writer = csv.DictWriter(archivo, fieldnames=ENCABEZADOS)
        writer.writeheader()
        writer.writerows(filas)


def escribir_markdown(filas: list[dict[str, str | int]], ruta: Path) -> None:
    lineas = [
        f"# Tabla VLSM - {RED_PADRE}",
        "",
        "| " + " | ".join(ENCABEZADOS) + " |",
        "| " + " | ".join(["---"] * len(ENCABEZADOS)) + " |",
    ]
    for fila in filas:
        lineas.append("| " + " | ".join(str(fila[columna]) for columna in ENCABEZADOS) + " |")

    lineas.extend(
        [
            "",
            "## Procedimiento",
            "",
            "1. Se ordenaron las subredes desde la mayor cantidad de hosts hasta la menor.",
            "2. Para cada subred se calculo el bloque minimo con la formula 2^n - 2 >= hosts.",
            "3. El prefijo se obtuvo con 32 - n.",
            "4. Se asignaron los bloques consecutivamente desde 172.16.100.0/24.",
        ]
    )
    ruta.write_text("\n".join(lineas) + "\n", encoding="utf-8")


def col_letra(indice: int) -> str:
    letras = ""
    while indice:
        indice, resto = divmod(indice - 1, 26)
        letras = chr(65 + resto) + letras
    return letras


def celda(ref: str, valor: str | int, estilo: int | None = None, tipo_inline: bool = True) -> str:
    estilo_xml = f' s="{estilo}"' if estilo is not None else ""
    if isinstance(valor, int):
        return f'<c r="{ref}"{estilo_xml}><v>{valor}</v></c>'
    return (
        f'<c r="{ref}" t="inlineStr"{estilo_xml}>'
        f"<is><t>{escape(str(valor))}</t></is></c>"
    )


def fila_excel(numero: int, valores: list[str | int], estilo: int | None = None) -> str:
    celdas = [celda(f"{col_letra(i)}{numero}", valor, estilo) for i, valor in enumerate(valores, start=1)]
    return f'<row r="{numero}">{"".join(celdas)}</row>'


def escribir_xlsx(filas: list[dict[str, str | int]], ruta: Path) -> None:
    datos_tabla = [[fila[columna] for columna in ENCABEZADOS] for fila in filas]
    procedimiento = [
        "Procedimiento",
        "1. Ordenar las subredes de mayor a menor cantidad de hosts.",
        "2. Calcular el minimo n tal que 2^n - 2 cubra los hosts solicitados.",
        "3. Obtener el prefijo con 32 - n.",
        "4. Asignar cada bloque consecutivamente dentro de 172.16.100.0/24.",
    ]

    rows = [
        fila_excel(1, [f"Tabla VLSM - Red Padre {RED_PADRE}"], 1),
        fila_excel(3, ENCABEZADOS, 2),
    ]
    for offset, valores in enumerate(datos_tabla, start=4):
        rows.append(fila_excel(offset, valores, 3))

    inicio_procedimiento = 5 + len(datos_tabla)
    rows.append(fila_excel(inicio_procedimiento, [procedimiento[0]], 1))
    for i, texto in enumerate(procedimiento[1:], start=inicio_procedimiento + 1):
        rows.append(fila_excel(i, [texto], 4))

    merge_ref = f"A1:{col_letra(len(ENCABEZADOS))}1"
    fin_tabla = 3 + len(datos_tabla)
    fin_hoja = inicio_procedimiento + len(procedimiento) - 1
    dimension = f"A1:{col_letra(len(ENCABEZADOS))}{fin_hoja}"

    sheet_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="{dimension}"/>
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="23" customWidth="1"/>
    <col min="6" max="6" width="34" customWidth="1"/>
    <col min="7" max="7" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    {''.join(rows)}
  </sheetData>
  <mergeCells count="1"><mergeCell ref="{merge_ref}"/></mergeCells>
  <autoFilter ref="A3:{col_letra(len(ENCABEZADOS))}{fin_tabla}"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""

    styles_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="3">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><b/><sz val="14"/><name val="Calibri"/></font>
    <font><b/><sz val="11"/><name val="Calibri"/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFD9EAF7"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color auto="1"/></left>
      <right style="thin"><color auto="1"/></right>
      <top style="thin"><color auto="1"/></top>
      <bottom style="thin"><color auto="1"/></bottom>
      <diagonal/>
    </border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="5">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf>
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


def imprimir_tabla(filas: list[dict[str, str | int]]) -> None:
    anchos = {
        columna: max(len(columna), *(len(str(fila[columna])) for fila in filas))
        for columna in ENCABEZADOS
    }
    separador = "+".join("-" * (anchos[columna] + 2) for columna in ENCABEZADOS)
    print(separador)
    print("|".join(f" {columna:<{anchos[columna]}} " for columna in ENCABEZADOS))
    print(separador)
    for fila in filas:
        print("|".join(f" {str(fila[columna]):<{anchos[columna]}} " for columna in ENCABEZADOS))
    print(separador)


def main() -> None:
    parser = argparse.ArgumentParser(description="Genera la tabla VLSM del ejercicio.")
    parser.add_argument("-o", "--output", default="salida-vlsm", help="Carpeta de salida")
    args = parser.parse_args()

    salida = Path(args.output)
    salida.mkdir(parents=True, exist_ok=True)

    filas = calcular_vlsm(RED_PADRE, SUBREDES)
    base = salida / "tabla_vlsm_172_16_100"
    escribir_csv(filas, base.with_suffix(".csv"))
    escribir_markdown(filas, base.with_suffix(".md"))
    escribir_xlsx(filas, base.with_suffix(".xlsx"))

    imprimir_tabla(filas)
    print()
    print(f"Archivos generados en: {salida.resolve()}")


if __name__ == "__main__":
    main()
