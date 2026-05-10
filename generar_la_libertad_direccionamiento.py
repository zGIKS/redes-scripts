from pathlib import Path

from generar_sede_vlsm_comun import create_xlsx


SALIDA = Path("LA-LIBERTAD-ESQUEMA-DIRECCIONAMIENTO-IA.xlsx")
RED = "10.192.44.0/22"
NOMBRE_SEDE = "La Libertad"
ESTUDIANTE = "Yeremi Tanner Villavicencio Rios"

UNIDADES = [
    ("Ventas", 70, "VLVEN", 30),
    ("Administracion", 35, "VLADM", 31),
    ("Finanzas", 15, "VLFIN", 32),
    ("WiFi Ejecutivos", 11, "VLWFEJE", 33),
    ("Marketing", 10, "VLMAR", 34),
    ("Logistica", 9, "VLLOG", 35),
    ("WiFi Clientes", 6, "VLWFCLI", 36),
    ("Nativa/Gestion", 5, "VLNAT", 99),
    ("Servidores", 4, "VLSER", 37),
]


if __name__ == "__main__":
    create_xlsx(SALIDA, "La Libertad", NOMBRE_SEDE, ESTUDIANTE, RED, UNIDADES)
