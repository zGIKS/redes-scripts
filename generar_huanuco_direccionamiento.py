from pathlib import Path

from generar_sede_vlsm_comun import create_xlsx


SALIDA = Path("HUANUCO-ESQUEMA-DIRECCIONAMIENTO-IA.xlsx")
RED = "10.192.52.0/22"
NOMBRE_SEDE = "Huanuco"
ESTUDIANTE = "Portalanza Romero, Aurora de Libertad"

UNIDADES = [
    ("Ventas", 35, "VLVEN", 40),
    ("Administracion", 18, "VLADM", 41),
    ("Finanzas", 10, "VLFIN", 42),
    ("WiFi Ejecutivos", 8, "VLWFEJE", 43),
    ("Marketing", 7, "VLMAR", 44),
    ("Logistica", 6, "VLLOG", 45),
    ("WiFi Clientes", 5, "VLWFCLI", 46),
    ("Nativa/Gestion", 4, "VLNAT", 99),
    ("Servidores", 3, "VLSER", 47),
]


if __name__ == "__main__":
    create_xlsx(SALIDA, "Huanuco", NOMBRE_SEDE, ESTUDIANTE, RED, UNIDADES)
