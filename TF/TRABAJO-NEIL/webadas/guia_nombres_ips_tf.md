# Guia de nombres e IPs del TF

Este archivo resume los nombres que aparecen en los scripts del proyecto y las IPs que se asignan en cada sede.
Sirve como apoyo para poner comentarios en la topologia de Packet Tracer.

## Convencion de nombres

- `ROUTER_<SEDE>`: router principal de la sede.
- `MS1_CORE_<SEDE>`: multilayer core.
- `MS2_WIFI_<SEDE>`: multilayer de WiFi.
- `MS3_DIST_<SEDE>` y `MS4_DIST_<SEDE>`: multilayer de distribucion.
- `SW1_<SEDE>`, `SW2_<SEDE>`, `SW3_<SEDE>`: switches de acceso.
- `PC_VENTAS_*`, `PC_ADMINISTRACION_*`, `PC_LOGISTICA_*`, `PC_MARKETING_*`, `PC_FINANZAS_*`, `PC_ADMIN_*`: PCs de usuarios.
- `WEB_*`, `DNS_*`, `DHCP_*`, `FTP_*`, `MAIL_*`: servidores.
- `AP_CLIENTE_*`, `AP_EJECUTIVO_*`, `WIFI_TELEFONO_CLIENTE_*`, `WIFI_LAPTOP_EJECUTIVO_*`: equipos WiFi.

## Lima

### Router y VLANs

| Dispositivo | Interfaz | IP / Mascara | Gateway |
| --- | --- | --- | --- |
| ROUTER_LIMA | G0/0.10 | 10.192.40.1 /24 | - |
| ROUTER_LIMA | G0/0.11 | 10.192.41.1 /25 | - |
| ROUTER_LIMA | G0/0.12 | 10.192.41.129 /26 | - |
| ROUTER_LIMA | G0/0.13 | 10.192.41.193 /26 | - |
| ROUTER_LIMA | G0/0.14 | 10.192.42.1 /26 | - |
| ROUTER_LIMA | G0/0.15 | 10.192.42.65 /26 | - |
| ROUTER_LIMA | G0/0.16 | 10.192.42.129 /27 | - |
| ROUTER_LIMA | G0/0.17 | 10.192.42.161 /28 | - |
| ROUTER_LIMA | G0/0.99 | 10.192.42.177 /28 | - |

### Switches e core

| Dispositivo | IP de gestion | Gateway |
| --- | --- | --- |
| MS1_CORE_LIMA | 10.192.42.182 /28 | 10.192.42.177 |
| MS2_WIFI_LIMA | 10.192.42.183 /28 | 10.192.42.177 |
| MS3_DIST_LIMA | 10.192.42.184 /28 | 10.192.42.177 |
| MS4_DIST_LIMA | 10.192.42.185 /28 | 10.192.42.177 |
| SW1_LIMA | 10.192.42.179 /28 | 10.192.42.177 |
| SW2_LIMA | 10.192.42.180 /28 | 10.192.42.177 |
| SW3_LIMA | 10.192.42.181 /28 | 10.192.42.177 |

### PCs

| PC | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| PC_VENTAS_1 | 10.192.40.10 | /24 | 10.192.40.1 |
| PC_VENTAS_2 | 10.192.40.11 | /24 | 10.192.40.1 |
| PC_VENTAS_3 | 10.192.40.12 | /24 | 10.192.40.1 |
| PC_ADMINISTRACION | 10.192.41.10 | /25 | 10.192.41.1 |
| PC_FINANZAS | 10.192.41.130 | /26 | 10.192.41.129 |
| PC_MARKETING | 10.192.42.10 | /26 | 10.192.42.1 |
| PC_LOGISTICA | 10.192.42.66 | /26 | 10.192.42.65 |
| PC_ADMIN | 10.192.42.178 | /28 | 10.192.42.177 |

### Servidores

| Servidor | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| WEB_LIMA | 10.192.42.162 | /28 | 10.192.42.161 |
| DNS_LIMA | 10.192.42.163 | /28 | 10.192.42.161 |
| DHCP_LIMA | 10.192.42.164 | /28 | 10.192.42.161 |
| FTP_LIMA | 10.192.42.165 | /28 | 10.192.42.161 |
| MAIL_LIMA | 10.192.42.166 | /28 | 10.192.42.161 |

## La Libertad

### Router y VLANs

| Dispositivo | Interfaz | IP / Mascara | Gateway |
| --- | --- | --- | --- |
| ROUTER_LA_LIBERTAD | G0/0.30 | 10.192.44.1 /26 | - |
| ROUTER_LA_LIBERTAD | G0/0.31 | 10.192.44.65 /26 | - |
| ROUTER_LA_LIBERTAD | G0/0.32 | 10.192.44.129 /27 | - |
| ROUTER_LA_LIBERTAD | G0/0.33 | 10.192.44.161 /28 | - |
| ROUTER_LA_LIBERTAD | G0/0.34 | 10.192.44.177 /28 | - |
| ROUTER_LA_LIBERTAD | G0/0.35 | 10.192.44.193 /28 | - |
| ROUTER_LA_LIBERTAD | G0/0.99 | 10.192.44.209 /28 | - |
| ROUTER_LA_LIBERTAD | G0/0.36 | 10.192.44.225 /28 | - |
| ROUTER_LA_LIBERTAD | G0/0.37 | 10.192.44.241 /28 | - |

### Switches e core

| Dispositivo | IP de gestion | Gateway |
| --- | --- | --- |
| MS1_CORE_LA_LIBERTAD | 10.192.44.214 /28 | 10.192.44.209 |
| MS2_WIFI_LA_LIBERTAD | 10.192.44.215 /28 | 10.192.44.209 |
| MS3_DIST_LA_LIBERTAD | 10.192.44.216 /28 | 10.192.44.209 |
| MS4_DIST_LA_LIBERTAD | 10.192.44.217 /28 | 10.192.44.209 |
| SW1_LA_LIBERTAD | 10.192.44.211 /28 | 10.192.44.209 |
| SW2_LA_LIBERTAD | 10.192.44.212 /28 | 10.192.44.209 |
| SW3_LA_LIBERTAD | 10.192.44.213 /28 | 10.192.44.209 |

### PCs

| PC | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| PC_VENTAS_1_LA_LIBERTAD | 10.192.44.10 | /26 | 10.192.44.1 |
| PC_VENTAS_2_LA_LIBERTAD | 10.192.44.11 | /26 | 10.192.44.1 |
| PC_VENTAS_3_LA_LIBERTAD | 10.192.44.12 | /26 | 10.192.44.1 |
| PC_ADMINISTRACION_LA_LIBERTAD | 10.192.44.74 | /26 | 10.192.44.65 |
| PC_FINANZAS_LA_LIBERTAD | 10.192.44.130 | /27 | 10.192.44.129 |
| PC_MARKETING_LA_LIBERTAD | 10.192.44.178 | /28 | 10.192.44.177 |
| PC_LOGISTICA_LA_LIBERTAD | 10.192.44.194 | /28 | 10.192.44.193 |
| PC_ADMIN_LA_LIBERTAD | 10.192.44.210 | /28 | 10.192.44.209 |

### Servidores

| Servidor | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| WEB_LA_LIBERTAD | 10.192.44.242 | /28 | 10.192.44.241 |
| DNS_LA_LIBERTAD | 10.192.44.243 | /28 | 10.192.44.241 |
| DHCP_LA_LIBERTAD | 10.192.44.244 | /28 | 10.192.44.241 |
| FTP_LA_LIBERTAD | 10.192.44.245 | /28 | 10.192.44.241 |
| MAIL_LA_LIBERTAD | 10.192.44.246 | /28 | 10.192.44.241 |

## Ica

### Router y VLANs

| Dispositivo | Interfaz | IP / Mascara | Gateway |
| --- | --- | --- | --- |
| ROUTER_ICA | G0/0.20 | 10.192.48.1 /25 | - |
| ROUTER_ICA | G0/0.21 | 10.192.48.129 /26 | - |
| ROUTER_ICA | G0/0.22 | 10.192.48.193 /27 | - |
| ROUTER_ICA | G0/0.23 | 10.192.48.225 /27 | - |
| ROUTER_ICA | G0/0.24 | 10.192.49.1 /28 | - |
| ROUTER_ICA | G0/0.25 | 10.192.49.17 /28 | - |
| ROUTER_ICA | G0/0.99 | 10.192.49.33 /28 | - |
| ROUTER_ICA | G0/0.26 | 10.192.49.49 /28 | - |
| ROUTER_ICA | G0/0.27 | 10.192.49.65 /28 | - |

### Switches e core

| Dispositivo | IP de gestion | Gateway |
| --- | --- | --- |
| MS1_CORE_ICA | 10.192.49.38 /28 | 10.192.49.33 |
| MS2_WIFI_ICA | 10.192.49.39 /28 | 10.192.49.33 |
| MS3_DIST_ICA | 10.192.49.40 /28 | 10.192.49.33 |
| MS4_DIST_ICA | 10.192.49.41 /28 | 10.192.49.33 |
| SW1_ICA | 10.192.49.35 /28 | 10.192.49.33 |
| SW2_ICA | 10.192.49.36 /28 | 10.192.49.33 |
| SW3_ICA | 10.192.49.37 /28 | 10.192.49.33 |

### PCs

| PC | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| PC_VENTAS_1_ICA | 10.192.48.10 | /25 | 10.192.48.1 |
| PC_VENTAS_2_ICA | 10.192.48.11 | /25 | 10.192.48.1 |
| PC_VENTAS_3_ICA | 10.192.48.12 | /25 | 10.192.48.1 |
| PC_ADMINISTRACION_ICA | 10.192.48.138 | /26 | 10.192.48.129 |
| PC_FINANZAS_ICA | 10.192.48.194 | /27 | 10.192.48.193 |
| PC_MARKETING_ICA | 10.192.49.2 | /28 | 10.192.49.1 |
| PC_LOGISTICA_ICA | 10.192.49.18 | /28 | 10.192.49.17 |
| PC_ADMIN_ICA | 10.192.49.34 | /28 | 10.192.49.33 |

### Servidores

| Servidor | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| WEB_ICA | 10.192.49.66 | /28 | 10.192.49.65 |
| DNS_ICA | 10.192.49.67 | /28 | 10.192.49.65 |
| DHCP_ICA | 10.192.49.68 | /28 | 10.192.49.65 |
| FTP_ICA | 10.192.49.69 | /28 | 10.192.49.65 |
| MAIL_ICA | 10.192.49.70 | /28 | 10.192.49.65 |

## Huanuco

### Router y VLANs

| Dispositivo | Interfaz | IP / Mascara | Gateway |
| --- | --- | --- | --- |
| ROUTER_HUANUCO | G0/0.40 | 10.192.52.1 /27 | - |
| ROUTER_HUANUCO | G0/0.41 | 10.192.52.33 /27 | - |
| ROUTER_HUANUCO | G0/0.42 | 10.192.52.65 /27 | - |
| ROUTER_HUANUCO | G0/0.43 | 10.192.52.97 /28 | - |
| ROUTER_HUANUCO | G0/0.44 | 10.192.52.113 /28 | - |
| ROUTER_HUANUCO | G0/0.45 | 10.192.52.129 /28 | - |
| ROUTER_HUANUCO | G0/0.46 | 10.192.52.145 /28 | - |
| ROUTER_HUANUCO | G0/0.99 | 10.192.52.161 /28 | - |
| ROUTER_HUANUCO | G0/0.47 | 10.192.52.177 /28 | - |

### Switches e core

| Dispositivo | IP de gestion | Gateway |
| --- | --- | --- |
| MS1_CORE_HUANUCO | 10.192.52.166 /28 | 10.192.52.161 |
| MS2_WIFI_HUANUCO | 10.192.52.167 /28 | 10.192.52.161 |
| MS3_DIST_HUANUCO | 10.192.52.168 /28 | 10.192.52.161 |
| MS4_DIST_HUANUCO | 10.192.52.169 /28 | 10.192.52.161 |
| SW1_HUANUCO | 10.192.52.163 /28 | 10.192.52.161 |
| SW2_HUANUCO | 10.192.52.164 /28 | 10.192.52.161 |
| SW3_HUANUCO | 10.192.52.165 /28 | 10.192.52.161 |

### PCs

| PC | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| PC_VENTAS_1_HUANUCO | 10.192.52.10 | /27 | 10.192.52.1 |
| PC_VENTAS_2_HUANUCO | 10.192.52.11 | /27 | 10.192.52.1 |
| PC_VENTAS_3_HUANUCO | 10.192.52.12 | /27 | 10.192.52.1 |
| PC_ADMINISTRACION_HUANUCO | 10.192.52.42 | /27 | 10.192.52.33 |
| PC_FINANZAS_HUANUCO | 10.192.52.66 | /27 | 10.192.52.65 |
| PC_MARKETING_HUANUCO | 10.192.52.114 | /28 | 10.192.52.113 |
| PC_LOGISTICA_HUANUCO | 10.192.52.130 | /28 | 10.192.52.129 |
| PC_ADMIN_HUANUCO | 10.192.52.162 | /28 | 10.192.52.161 |

### Servidores

| Servidor | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| WEB_HUANUCO | 10.192.52.178 | /28 | 10.192.52.177 |
| DNS_HUANUCO | 10.192.52.179 | /28 | 10.192.52.177 |
| DHCP_HUANUCO | 10.192.52.180 | /28 | 10.192.52.177 |
| FTP_HUANUCO | 10.192.52.181 | /28 | 10.192.52.177 |
| MAIL_HUANUCO | 10.192.52.182 | /28 | 10.192.52.177 |

## Puno

### Router y VLANs

| Dispositivo | Interfaz | IP / Mascara | Gateway |
| --- | --- | --- | --- |
| ROUTER_PUNO | G0/0.50 | 10.192.56.1 /26 | - |
| ROUTER_PUNO | G0/0.51 | 10.192.56.65 /27 | - |
| ROUTER_PUNO | G0/0.52 | 10.192.56.97 /28 | - |
| ROUTER_PUNO | G0/0.53 | 10.192.56.113 /28 | - |
| ROUTER_PUNO | G0/0.99 | 10.192.56.129 /28 | - |
| ROUTER_PUNO | G0/0.54 | 10.192.56.145 /28 | - |
| ROUTER_PUNO | G0/0.56 | 10.192.56.161 /28 | - |
| ROUTER_PUNO | G0/0.57 | 10.192.56.177 /28 | - |
| ROUTER_PUNO | G0/0.58 | 10.192.56.193 /28 | - |

### Switches e core

| Dispositivo | IP de gestion | Gateway |
| --- | --- | --- |
| MS1_CORE_PUNO | 10.192.56.134 /28 | 10.192.56.129 |
| MS2_WIFI_PUNO | 10.192.56.135 /28 | 10.192.56.129 |
| MS3_DIST_PUNO | 10.192.56.136 /28 | 10.192.56.129 |
| MS4_DIST_PUNO | 10.192.56.137 /28 | 10.192.56.129 |
| SW1_PUNO | 10.192.56.131 /28 | 10.192.56.129 |
| SW2_PUNO | 10.192.56.132 /28 | 10.192.56.129 |
| SW3_PUNO | 10.192.56.133 /28 | 10.192.56.129 |

### PCs

| PC | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| PC_VENTAS_1_PUNO | 10.192.56.10 | /26 | 10.192.56.1 |
| PC_VENTAS_2_PUNO | 10.192.56.11 | /26 | 10.192.56.1 |
| PC_VENTAS_3_PUNO | 10.192.56.12 | /26 | 10.192.56.1 |
| PC_ADMINISTRACION_PUNO | 10.192.56.74 | /27 | 10.192.56.65 |
| PC_FINANZAS_PUNO | 10.192.56.98 | /28 | 10.192.56.97 |
| PC_MARKETING_PUNO | 10.192.56.146 | /28 | 10.192.56.145 |
| PC_LOGISTICA_PUNO | 10.192.56.162 | /28 | 10.192.56.161 |
| PC_ADMIN_PUNO | 10.192.56.130 | /28 | 10.192.56.129 |

### Servidores

| Servidor | IP | Mascara | Gateway |
| --- | --- | --- | --- |
| WEB_PUNO | 10.192.56.194 | /28 | 10.192.56.193 |
| DNS_PUNO | 10.192.56.195 | /28 | 10.192.56.193 |
| DHCP_PUNO | 10.192.56.196 | /28 | 10.192.56.193 |
| FTP_PUNO | 10.192.56.197 | /28 | 10.192.56.193 |
| MAIL_PUNO | 10.192.56.198 | /28 | 10.192.56.193 |

## WiFi y equipos sin IP fija

Estos dispositivos aparecen en la topologia fisica, pero en los scripts revisados no tienen IP estatica asignada:

- `AP_CLIENTE_*`
- `AP_EJECUTIVO_*`
- `WIFI_TELEFONO_CLIENTE_*`
- `WIFI_LAPTOP_EJECUTIVO_*`

## Internet

### Enlaces WAN

| Dispositivo A | IP | Dispositivo B | IP |
| --- | --- | --- | --- |
| ROUTER_LIMA S0/2/0 | 219.0.0.1 /30 | ISP1 S0/0/0 | 219.0.0.2 /30 |
| ROUTER_LIMA S0/2/1 | 219.0.0.5 /30 | ISP2 S0/0/0 | 219.0.0.6 /30 |
| ISP1 S0/0/1 | 219.0.0.9 /30 | ISP2 S0/0/1 | 219.0.0.10 /30 |
| ISP1 Fa0/0 | 219.0.1.1 /30 | ISP3 Fa0/1 | 219.0.1.2 /30 |
| ISP2 Fa0/1 | 219.0.1.5 /30 | ISP3 Eth1/0 | 219.0.1.6 /30 |

### Red publica

| Dispositivo | IP | Gateway |
| --- | --- | --- |
| ISP3 Fa0/0 | 31.70.183.1 /24 | - |
| DNS_ISP | 31.70.183.10 /24 | 31.70.183.1 |
| WEB_ISP | 31.70.183.20 /24 | 31.70.183.1 |

## Orden recomendado de lectura

1. `00_leeme_orden.md`
2. `01_wan_postboot.js`
3. `02_seguridad_postboot.js`
4. `02b_politicas_acl_postboot.js`
5. `02c_dhcp_relay_postboot.js`
6. `03_internet_topologia.js`

