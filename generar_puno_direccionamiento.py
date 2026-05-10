from pathlib import Path

from generar_sede_vlsm_comun import create_xlsx


SALIDA = Path("PUNO-ESQUEMA-DIRECCIONAMIENTO-IA.xlsx")
RED = "10.192.56.0/22"
NOMBRE_SEDE = "Puno"
ESTUDIANTE = "Fernandez Cjuro, Nadinne Anahi"

UNIDADES = [
    ("Ventas", 36, "VLVEN", 30),
    ("Administracion", 20, "VLADM", 10),
    ("Finanzas", 11, "VLFIN", 40),
    ("WiFi Ejecutivos", 9, "VLWFEJE", 80),
    ("Marketing", 8, "VLMAR", 50),
    ("Logistica", 7, "VLLOG", 20),
    ("WiFi Clientes", 5, "VLWFCLI", 70),
    ("Servidores", 5, "VLSER", 60),
    ("Nativa/Gestion", 4, "VLNAT", 99),
]


if __name__ == "__main__":
    create_xlsx(SALIDA, "Puno", NOMBRE_SEDE, ESTUDIANTE, RED, UNIDADES)
