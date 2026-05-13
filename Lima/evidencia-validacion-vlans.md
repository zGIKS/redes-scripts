# Evidencia de Validacion de VLANs - Sede Lima

Este archivo sirve como guia para tomar evidencias en Packet Tracer y demostrar que las VLANs de la sede Lima estan creadas, propagadas por troncales y asignadas a los puertos correctos.

## 1. Validar VLANs en el Core

Dispositivo: `MS1_CORE_LIMA`

Comando:

```ios
enable
show vlan brief
```

Debe verificarse que existan:

| VLAN | Nombre | Uso |
| ---: | --- | --- |
| 10 | VLVEN | Ventas |
| 11 | VLADM | Administracion |
| 12 | VLFIN | Finanzas |
| 13 | VLWFEJE | WiFi Ejecutivos |
| 14 | VLMAR | Marketing |
| 15 | VLLOG | Logistica |
| 16 | VLWFCLI | WiFi Clientes |
| 17 | VLSER | Servidores |
| 99 | VLNAT | Nativa/Gestion |

Evidencia a capturar:

```text
Captura de show vlan brief en MS1_CORE_LIMA.
```

## 2. Validar trunk hacia WiFi

Dispositivos:

- `MS1_CORE_LIMA`
- `MS2_WIFI_LIMA`

Comando:

```ios
show interfaces trunk
```

En `MS1_CORE_LIMA`, el puerto `GigabitEthernet1/0/2` debe tener:

| Puerto | Modo | VLAN nativa | VLANs permitidas |
| --- | --- | ---: | --- |
| Gi1/0/2 | trunk | 99 | 13,16,99 |

En `MS2_WIFI_LIMA`, el puerto `GigabitEthernet1/0/1` debe tener:

| Puerto | Modo | VLAN nativa | VLANs permitidas |
| --- | --- | ---: | --- |
| Gi1/0/1 | trunk | 99 | 13,16,99 |

Evidencia a capturar:

```text
Captura de show interfaces trunk en MS1_CORE_LIMA y MS2_WIFI_LIMA.
```

## 3. Validar VLANs en switch WiFi

Dispositivo: `MS2_WIFI_LIMA`

Comando:

```ios
show vlan brief
```

Debe verificarse que el switch WiFi tenga solo estas VLAN:

| VLAN | Nombre | Uso |
| ---: | --- | --- |
| 13 | VLWFEJE | WiFi Ejecutivos |
| 16 | VLWFCLI | WiFi Clientes |
| 99 | VLNAT | Nativa del trunk |

Puertos esperados:

| Puerto | VLAN | Equipo conectado |
| --- | ---: | --- |
| Gi1/0/2 | 16 | AP_CLIENTE_LIMA |
| Gi1/0/3 | 13 | AP_EJECUTIVO_LIMA |

Evidencia a capturar:

```text
Captura de show vlan brief en MS2_WIFI_LIMA.
```

## 4. Validar troncales de distribucion y acceso

Dispositivos:

- `MS3_DIST_LIMA`
- `MS4_DIST_LIMA`
- `SW1_LIMA`
- `SW2_LIMA`
- `SW3_LIMA`

Comando:

```ios
show interfaces trunk
```

Debe verificarse que los enlaces entre distribucion y acceso esten en modo trunk.

Troncales esperadas:

| Dispositivo | Puertos trunk |
| --- | --- |
| MS3_DIST_LIMA | Gi1/0/1, Gi1/0/2, Gi1/0/3, Gi1/0/4 |
| MS4_DIST_LIMA | Gi1/0/1, Gi1/0/2, Gi1/0/3, Gi1/0/4 |
| SW1_LIMA | Gi0/1, Gi0/2 |
| SW2_LIMA | Gi0/1, Gi0/2 |
| SW3_LIMA | Gi0/1, Gi0/2 |

Evidencia a capturar:

```text
Capturas de show interfaces trunk en switches de distribucion y acceso.
```

## 5. Validar puertos access de PCs

Dispositivos:

- `SW1_LIMA`
- `SW2_LIMA`
- `SW3_LIMA`

Comando:

```ios
show vlan brief
```

Asignaciones esperadas:

| Switch | Puerto | VLAN | Equipo |
| --- | --- | ---: | --- |
| SW1_LIMA | Fa0/1 | 10 | PC_VENTAS_1 |
| SW1_LIMA | Fa0/2 | 11 | PC_ADMINISTRACION |
| SW2_LIMA | Fa0/1 | 10 | PC_VENTAS_2 |
| SW2_LIMA | Fa0/2 | 10 | PC_VENTAS_3 |
| SW3_LIMA | Fa0/1 | 15 | PC_LOGISTICA |
| SW3_LIMA | Fa0/2 | 14 | PC_MARKETING |
| SW3_LIMA | Fa0/3 | 12 | PC_FINANZAS |
| SW3_LIMA | Fa0/4 | 99 | PC_ADMIN |

Evidencia a capturar:

```text
Captura de show vlan brief en SW1_LIMA, SW2_LIMA y SW3_LIMA.
```

## 6. Validar puertos access de servidores

Dispositivos:

- `MS3_DIST_LIMA`
- `MS4_DIST_LIMA`

Comando:

```ios
show vlan brief
```

Asignaciones esperadas:

| Switch | Puerto | VLAN | Servidor |
| --- | --- | ---: | --- |
| MS3_DIST_LIMA | Gi1/0/10 | 17 | WEB_LIMA |
| MS3_DIST_LIMA | Gi1/0/11 | 17 | DNS_LIMA |
| MS4_DIST_LIMA | Gi1/0/10 | 17 | DHCP_LIMA |
| MS4_DIST_LIMA | Gi1/0/11 | 17 | FTP_LIMA |
| MS4_DIST_LIMA | Gi1/0/12 | 17 | MAIL_LIMA |

Evidencia a capturar:

```text
Captura de show vlan brief en MS3_DIST_LIMA y MS4_DIST_LIMA.
```

## 7. Validar configuracion de interfaces especificas

Si se necesita demostrar un puerto concreto, usar:

```ios
show running-config interface FastEthernet0/1
show running-config interface FastEthernet0/2
show running-config interface FastEthernet0/3
show running-config interface FastEthernet0/4
```

Para puertos Gigabit:

```ios
show running-config interface GigabitEthernet1/0/1
show running-config interface GigabitEthernet1/0/2
show running-config interface GigabitEthernet1/0/10
```

Evidencia a capturar:

```text
Captura del running-config de los puertos access o trunk que se quieran sustentar.
```

## 8. Checklist final de evidencia

| Evidencia | Dispositivo | Comando | Estado |
| --- | --- | --- | --- |
| VLANs creadas en el core | MS1_CORE_LIMA | show vlan brief | Pendiente |
| Trunk core-WiFi restringido | MS1_CORE_LIMA | show interfaces trunk | Pendiente |
| VLANs WiFi y nativa | MS2_WIFI_LIMA | show vlan brief | Pendiente |
| Trunk WiFi con native 99 | MS2_WIFI_LIMA | show interfaces trunk | Pendiente |
| Troncales distribucion/acceso | MS3, MS4, SW1, SW2, SW3 | show interfaces trunk | Pendiente |
| Puertos access de PCs | SW1, SW2, SW3 | show vlan brief | Pendiente |
| Puertos access de servidores | MS3, MS4 | show vlan brief | Pendiente |
