from pathlib import Path

from generar_sede_vlsm_comun import create_xlsx


SALIDA = Path("ICA-ESQUEMA-DIRECCIONAMIENTO-IA.xlsx")
RED = "10.192.48.0/22"
NOMBRE_SEDE = "Ica"
ESTUDIANTE = "Quiroz Villafuerte Albert Stheven"

UNIDADES = [
    ("Ventas", 78, "VLVEN", 20),
    ("Administracion", 40, "VLADM", 21),
    ("Finanzas", 16, "VLFIN", 22),
    ("WiFi Ejecutivos", 12, "VLWFEJE", 23),
    ("Marketing", 11, "VLMAR", 24),
    ("Logistica", 10, "VLLOG", 25),
    ("Nativa/Gestion", 10, "VLNAT", 99),
    ("WiFi Clientes", 8, "VLWFCLI", 26),
    ("Servidores", 5, "VLSER", 27),
]


if __name__ == "__main__":
    create_xlsx(SALIDA, "Ica", NOMBRE_SEDE, ESTUDIANTE, RED, UNIDADES)
