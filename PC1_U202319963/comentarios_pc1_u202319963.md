# PC1 - U202319963

## Archivos que se ejecutan en Code Builder

Ejecutar solamente estos dos scripts:

1. `pc1_u202319963_topologia_con_serial.js`
2. `pc1_u202319963_config_postboot.js`

La carpeta queda limpia con solo dos scripts `.js` para ejecutar.

## Que hace cada script

`pc1_u202319963_topologia_con_serial.js`

- Crea los routers `R1_U202319963` y `R2_U202319963`.
- Agrega el modulo `HWIC-2T` en ambos routers.
- Crea los switches `SW1_U202319963`, `SW2_U202319963`, `SW3_U202319963` y `SW4_U202319963`.
- Crea las PCs `PC0_U202319963`, `PC1_U202319963`, `PC2_U202319963` y `PC3_U202319963`.
- Conecta las LAN y el enlace serial WAN.

`pc1_u202319963_config_postboot.js`

- Cambia los hostnames con el codigo de alumno.
- Configura las IPs de los routers.
- Configura las IPs, mascaras y gateways de las PCs.
- Activa RIP v2 con `no auto-summary`.
- Activa puertos en switches.

## Evidencias para el Word

Recorta y pega evidencias de:

1. Topologia completa con todos los equipos y cables.
2. Modulo `HWIC-2T` instalado en cada router.
3. Hostname de R1 con `show running-config | include hostname`.
4. Hostname de R2 con `show running-config | include hostname`.
5. Interfaces de R1 con `show ip interface brief`.
6. Interfaces de R2 con `show ip interface brief`.
7. Rutas aprendidas con `show ip route`.
8. Ping desde `PC0_U202319963` hacia `PC2_U202319963`.
9. Ping desde `PC1_U202319963` hacia `PC3_U202319963`.

## Comandos utiles

En `R1_U202319963`:

```text
show ip interface brief
show ip route
show running-config | include hostname
show running-config | section router rip
```

En `R2_U202319963`:

```text
show ip interface brief
show ip route
show running-config | include hostname
show running-config | section router rip
```

En las PCs:

```text
ipconfig
ping 10.50.80.66
ping 10.50.80.90
```

## Tabla VLSM

Generar la tabla con:

```bash
python PC1_U202319963/generar_tabla_pc1_u202319963.py
```

El script crea:

- `tabla_pc1_u202319963.xlsx`
- `tabla_pc1_u202319963.csv`
- `tabla_pc1_u202319963.md`

## Nombre de entrega

Usar el formato:

```text
PC1_NRC_U202319963
```
