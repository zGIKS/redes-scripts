# Tabla VLSM - 172.16.100.0/24

| Nombre Subred | Host Solicitados | Host Validos | Prefijo | Direccion de Red | Rango de Hosts Utilizable | Broadcast |
| --- | --- | --- | --- | --- | --- | --- |
| Building A | 82 | 126 | /25 | 172.16.100.0/25 | 172.16.100.1 - 172.16.100.126 | 172.16.100.127 |
| Building D | 62 | 62 | /26 | 172.16.100.128/26 | 172.16.100.129 - 172.16.100.190 | 172.16.100.191 |
| Building B | 21 | 30 | /27 | 172.16.100.192/27 | 172.16.100.193 - 172.16.100.222 | 172.16.100.223 |
| Building C | 4 | 6 | /29 | 172.16.100.224/29 | 172.16.100.225 - 172.16.100.230 | 172.16.100.231 |
| R1-R2 | 2 | 2 | /30 | 172.16.100.232/30 | 172.16.100.233 - 172.16.100.234 | 172.16.100.235 |
| R2-R3 | 2 | 2 | /30 | 172.16.100.236/30 | 172.16.100.237 - 172.16.100.238 | 172.16.100.239 |
| R3-R4 | 2 | 2 | /30 | 172.16.100.240/30 | 172.16.100.241 - 172.16.100.242 | 172.16.100.243 |

## Procedimiento

1. Se ordenaron las subredes desde la mayor cantidad de hosts hasta la menor.
2. Para cada subred se calculo el bloque minimo con la formula 2^n - 2 >= hosts.
3. El prefijo se obtuvo con 32 - n.
4. Se asignaron los bloques consecutivamente desde 172.16.100.0/24.
