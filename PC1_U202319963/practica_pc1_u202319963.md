# Practica PC1 - U202319963

## Datos generales

Red padre: `10.50.80.0/24`

Codigo de alumno: `U202319963`

Nombre sugerido para entrega:

```text
PC1_NRC_U202319963
```

## Orden de ejecucion en Code Builder

Ejecutar en un archivo nuevo de Packet Tracer:

1. `pc1_u202319963_topologia_con_serial.js`
2. Esperar que los routers terminen de arrancar.
3. `pc1_u202319963_config_postboot.js`

## Subredes VLSM

| LAN/WAN | Hosts requeridos | Hosts asignados | Red | Prefijo | Mascara | Gateway / IP router | Rango para hosts | Broadcast |
| --- | ---: | ---: | --- | --- | --- | --- | --- | --- |
| LAN 1 | 58 | 62 | 10.50.80.0 | /26 | 255.255.255.192 | 10.50.80.1 | 10.50.80.2 - 10.50.80.62 | 10.50.80.63 |
| LAN 3 | 12 | 14 | 10.50.80.64 | /28 | 255.255.255.240 | 10.50.80.65 | 10.50.80.66 - 10.50.80.78 | 10.50.80.79 |
| LAN 2 | 5 | 6 | 10.50.80.80 | /29 | 255.255.255.248 | 10.50.80.81 | 10.50.80.82 - 10.50.80.86 | 10.50.80.87 |
| LAN 4 | 4 | 6 | 10.50.80.88 | /29 | 255.255.255.248 | 10.50.80.89 | 10.50.80.90 - 10.50.80.94 | 10.50.80.95 |
| WAN | 2 | 2 | 10.50.80.96 | /30 | 255.255.255.252 | - | 10.50.80.97 - 10.50.80.98 | 10.50.80.99 |

## Direccionamiento de PCs

| PC | LAN | IP | Mascara | Gateway | Switch | Router |
| --- | --- | --- | --- | --- | --- | --- |
| PC0_U202319963 | LAN 1 | 10.50.80.2 | 255.255.255.192 | 10.50.80.1 | SW1_U202319963 | R1_U202319963 |
| PC1_U202319963 | LAN 2 | 10.50.80.82 | 255.255.255.248 | 10.50.80.81 | SW2_U202319963 | R1_U202319963 |
| PC2_U202319963 | LAN 3 | 10.50.80.66 | 255.255.255.240 | 10.50.80.65 | SW3_U202319963 | R2_U202319963 |
| PC3_U202319963 | LAN 4 | 10.50.80.90 | 255.255.255.248 | 10.50.80.89 | SW4_U202319963 | R2_U202319963 |

## Direccionamiento de routers

| Router | Interfaz | Conexion | IP | Mascara |
| --- | --- | --- | --- | --- |
| R1_U202319963 | GigabitEthernet0/0 | LAN 1 | 10.50.80.1 | 255.255.255.192 |
| R1_U202319963 | GigabitEthernet0/1 | LAN 2 | 10.50.80.81 | 255.255.255.248 |
| R1_U202319963 | Serial0/0/0 | WAN hacia R2 | 10.50.80.97 | 255.255.255.252 |
| R2_U202319963 | GigabitEthernet0/0 | LAN 3 | 10.50.80.65 | 255.255.255.240 |
| R2_U202319963 | GigabitEthernet0/1 | LAN 4 | 10.50.80.89 | 255.255.255.248 |
| R2_U202319963 | Serial0/0/0 | WAN hacia R1 | 10.50.80.98 | 255.255.255.252 |

## Conexiones fisicas

| Desde | Puerto | Hacia | Puerto | Cable |
| --- | --- | --- | --- | --- |
| PC0_U202319963 | FastEthernet0 | SW1_U202319963 | FastEthernet0/1 | Copper Straight-Through |
| SW1_U202319963 | FastEthernet0/2 | R1_U202319963 | GigabitEthernet0/0 | Copper Straight-Through |
| PC1_U202319963 | FastEthernet0 | SW2_U202319963 | FastEthernet0/1 | Copper Straight-Through |
| SW2_U202319963 | FastEthernet0/2 | R1_U202319963 | GigabitEthernet0/1 | Copper Straight-Through |
| R1_U202319963 | Serial0/0/0 | R2_U202319963 | Serial0/0/0 | Serial |
| PC2_U202319963 | FastEthernet0 | SW3_U202319963 | FastEthernet0/1 | Copper Straight-Through |
| SW3_U202319963 | FastEthernet0/2 | R2_U202319963 | GigabitEthernet0/0 | Copper Straight-Through |
| PC3_U202319963 | FastEthernet0 | SW4_U202319963 | FastEthernet0/1 | Copper Straight-Through |
| SW4_U202319963 | FastEthernet0/2 | R2_U202319963 | GigabitEthernet0/1 | Copper Straight-Through |

## Enrutamiento dinamico

Se configuro RIP version 2 en ambos routers.

```text
router rip
 version 2
 no auto-summary
 network 10.0.0.0
```

## Pruebas recomendadas

Desde `PC0_U202319963`:

```text
ping 10.50.80.66
ping 10.50.80.90
```

Desde `PC1_U202319963`:

```text
ping 10.50.80.66
ping 10.50.80.90
```

En `R1_U202319963`:

```text
show ip interface brief
show ip route
show running-config | include hostname
```

En `R2_U202319963`:

```text
show ip interface brief
show ip route
show running-config | include hostname
```
