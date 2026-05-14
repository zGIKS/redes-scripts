# 1.2 Análisis de los requisitos de la red

| Nombre de la Unidad Organizacional | Requisitos de hosts Actuales |
|---|---:|
| Sede Lima | 452 |
| Sede La libertad | 160 |
| Sede Ica | 190 |
| Sede Huanuco | 96 |
| Sede Puno | 105 |
| Redes WAN | 8 |

## 1.2.1 Requisitos de la red de la Sede Principal - Lima

| Nombre de la Unidad Organizacional | Requisitos de hosts Actuales |
|---|---:|
| Ventas | 198 |
| Administracion | 100 |
| Finanzas | 41 |
| WiFi Ejecutivos | 31 |
| Marketing | 29 |
| Logistica | 25 |
| WiFi Clientes | 18 |
| Servidores | 10 |
| Nativa | 9 |
| Total Host dimensionado | 461 |
| Total Host del caso | 452 |

## 1.2.2 Requisitos de la red de la Sede Sucursal 1 - La Libertad

| Nombre de la Unidad Organizacional | Requisitos de hosts Actuales |
|---|---:|
| Ventas | 49 |
| Administración | 46 |
| Finanzas | 15 |
| WiFi Ejecutivos | 11 |
| Marketing | 10 |
| Logística | 9 |
| Nativa/Gestión | 9 |
| WiFi Clientes | 6 |
| Servidores | 5 |
| Total Host | 160 |

## 1.2.3 Requisitos de la red de la Sede Sucursal 2 - Ica

| Nombre de la Unidad Organizacional | Requisitos de hosts Actuales |
|---|---:|
| Ventas | 79 |
| Administración | 40 |
| Finanzas | 16 |
| WiFi Ejecutivos | 12 |
| Marketing | 11 |
| Logística | 10 |
| Nativa/Gestión | 9 |
| WiFi Clientes | 8 |
| Servidores | 5 |
| Total Host | 190 |

## 1.2.4 Requisitos de la red de la Sede Sucursal 3 - Huanuco

| Nombre de la Unidad Organizacional | Requisitos de hosts Actuales |
|---|---:|
| Ventas | 15 |
| Administracion | 13 |
| Finanzas | 12 |
| WiFi Ejecutivos | 11 |
| Marketing | 10 |
| Logistica | 10 |
| WiFi Clientes | 10 |
| Nativa/Gestión | 9 |
| Servidores | 6 |
| Total Host | 96 |

## 1.2.5 Requisitos de la red de la Sede Sucursal 4 - Puno

| Nombre de la Unidad Organizacional | Requisitos de hosts Actuales |
|---|---:|
| Ventas | 31 |
| Administración | 20 |
| Finanzas | 11 |
| WiFi Ejecutivos | 9 |
| Nativa/Gestión | 9 |
| Marketing | 8 |
| Logística | 7 |
| WiFi Clientes | 5 |
| Servidores | 5 |
| Total Host | 105 |

## 1.2.6 Requisitos Adicionales de la red

| Nombre de la Unidad Organizacional | Requisitos de hosts Actuales |
|---|---:|
| Enlace WAN Lima - Ica | 2 |
| Enlace WAN Lima - La Libertad | 2 |
| Enlace WAN Lima - Huánuco | 2 |
| Enlace WAN Lima - Puno | 2 |
| Redes WiFi por sede: Clientes y Ejecutivos | Incluidas en cada sede |
| Servidores locales por sede: WEB, DHCP y FTP | Incluidos en la VLAN Servidores |
| Servidor de correo corporativo | Incluido en Servidores de Lima |
| Gestión remota segura desde PC-ADMIN | Incluida en Nativa/Gestión |
| Enrutamiento dinámico RIPv2 interno | No aplica a hosts |
| Enrutamiento estático hacia Internet con ISP primario/secundario | No aplica a hosts |
| Seguridad por firewall, segmentación y políticas de acceso | No aplica a hosts |
| Evaluación de servicios Cloud para backup e infraestructura | No aplica a hosts |

## Por qué está bien

La tabla está bien porque toma como fuente principal el archivo `excel-final/Esquema de Direccionamiento IP.xlsx`, específicamente las hojas `Lima`, `La libertad`, `Ica`, `Huanuco` y `Puno`, usando solo las columnas solicitadas: `Nombre de la Unidad Organizacional` y `Requisitos de hosts Actuales`.

También coincide con el caso: Lima conserva los 452 hosts indicados en el documento base y agrega 9 hosts para la red Nativa/Gestión según los dispositivos de red usados, por eso el total dimensionado queda en 461. Las sedes sucursales mantienen los totales del caso y del Excel: La Libertad 160, Ica 190, Huanuco 96 y Puno 105.

## Cómo lo validé

1. Revisé el caso en `CASO1_2026-10.docx` y en `informe.md`, donde aparecen los requerimientos de Lima y los totales de las sedes sucursales.
2. Revisé el Excel `excel-final/Esquema de Direccionamiento IP.xlsx` leyendo sus hojas internas y comparando las filas de unidades organizacionales con la columna de hosts actuales.
3. Verifiqué que las sumas por sede coincidan con los totales del Excel: Lima 461 dimensionado y 452 del caso, La Libertad 160, Ica 190, Huanuco 96 y Puno 105.
4. Contrasté los requisitos adicionales con el caso: enlaces WAN punto a punto de dos hosts, redes WiFi por sede, VLAN de servidores, gestión remota segura, enrutamiento interno/Internet, seguridad y evaluación Cloud.
