# Evidencia de Validacion de InterVLAN - Sede Lima

Este archivo sirve como guia para tomar evidencias de que el enrutamiento InterVLAN esta funcionando en la sede Lima.

## 1. Validar SVIs en el Core

Dispositivo: `MS1_CORE_LIMA`

Comando:

```ios
enable
show ip interface brief
```

Debe verificarse que las interfaces VLAN tengan IP y estado operativo.

| Interfaz | Gateway esperado | Estado esperado |
| --- | --- | --- |
| Vlan10 | 10.192.40.1 | up/up |
| Vlan11 | 10.192.41.1 | up/up |
| Vlan12 | 10.192.41.129 | up/up |
| Vlan13 | 10.192.41.193 | up/up |
| Vlan14 | 10.192.42.1 | up/up |
| Vlan15 | 10.192.42.65 | up/up |
| Vlan16 | 10.192.42.129 | up/up |
| Vlan17 | 10.192.42.193 | up/up |
| Vlan99 | 10.192.42.161 | up/up |

Evidencia a capturar:

```text
Captura de show ip interface brief en MS1_CORE_LIMA.
```

## 2. Validar que ip routing este activo

Dispositivo: `MS1_CORE_LIMA`

Comando:

```ios
show running-config | include ip routing
```

Resultado esperado:

```ios
ip routing
```

Si Packet Tracer no acepta `| include`, usar:

```ios
show running-config
```

Y buscar manualmente:

```ios
ip routing
```

Evidencia a capturar:

```text
Captura donde se observe ip routing activo.
```

## 3. Validar tabla de rutas del Core

Dispositivo: `MS1_CORE_LIMA`

Comando:

```ios
show ip route
```

Debe verificarse que aparezcan las redes conectadas de las VLAN y la ruta por defecto.

Redes conectadas esperadas:

| Red | VLAN |
| --- | ---: |
| 10.192.40.0/24 | 10 |
| 10.192.41.0/25 | 11 |
| 10.192.41.128/26 | 12 |
| 10.192.41.192/26 | 13 |
| 10.192.42.0/26 | 14 |
| 10.192.42.64/26 | 15 |
| 10.192.42.128/27 | 16 |
| 10.192.42.192/28 | 17 |
| 10.192.42.160/27 | 99 |

Ruta por defecto esperada:

```ios
S* 0.0.0.0/0 via 10.192.43.1
```

Evidencia a capturar:

```text
Captura de show ip route en MS1_CORE_LIMA.
```

## 4. Validar ruta de retorno del Router

Dispositivo: `ROUTER_LIMA`

Comando:

```ios
enable
show ip route
```

Debe aparecer la ruta estatica hacia la LAN de Lima:

```ios
S 10.192.40.0/22 via 10.192.43.2
```

Tambien se puede validar con:

```ios
show running-config | include ip route
```

Resultado esperado:

```ios
ip route 10.192.40.0 255.255.252.0 10.192.43.2
```

Evidencia a capturar:

```text
Captura de show ip route o show running-config en ROUTER_LIMA.
```

## 5. Prueba InterVLAN desde Ventas

Dispositivo: `PC_VENTAS_1`

Abrir:

```text
Desktop > Command Prompt
```

Comandos:

```bash
ping 10.192.41.10
ping 10.192.41.130
ping 10.192.42.10
ping 10.192.42.66
ping 10.192.42.162
```

Que valida:

| Ping | Destino | Validacion |
| --- | --- | --- |
| 10.192.41.10 | PC_ADMINISTRACION | Ventas hacia Administracion |
| 10.192.41.130 | PC_FINANZAS | Ventas hacia Finanzas |
| 10.192.42.10 | PC_MARKETING | Ventas hacia Marketing |
| 10.192.42.66 | PC_LOGISTICA | Ventas hacia Logistica |
| 10.192.42.162 | PC_ADMIN | Ventas hacia Nativa/Gestion |

Resultado esperado:

```text
Reply from ...
```

Evidencia a capturar:

```text
Captura de pings exitosos desde PC_VENTAS_1.
```

## 6. Prueba hacia servidores

Dispositivo: `PC_VENTAS_1`

Comandos:

```bash
ping 10.192.42.194
ping 10.192.42.195
ping 10.192.42.196
ping 10.192.42.197
ping 10.192.42.198
```

Que valida:

| Ping | Servidor |
| --- | --- |
| 10.192.42.194 | WEB_LIMA |
| 10.192.42.195 | DNS_LIMA |
| 10.192.42.196 | DHCP_LIMA |
| 10.192.42.197 | FTP_LIMA |
| 10.192.42.198 | MAIL_LIMA |

Resultado esperado:

```text
Reply from ...
```

Evidencia a capturar:

```text
Captura de pings exitosos hacia servidores.
```

## 7. Prueba hacia Router Lima

Dispositivo: `PC_VENTAS_1`

Comando:

```bash
ping 10.192.43.1
```

Resultado esperado:

```text
Reply from 10.192.43.1
```

Evidencia a capturar:

```text
Captura de ping exitoso hacia ROUTER_LIMA.
```

## 8. Checklist final de evidencia

| Evidencia | Dispositivo | Comando | Estado |
| --- | --- | --- | --- |
| SVIs con IP | MS1_CORE_LIMA | show ip interface brief | Pendiente |
| ip routing activo | MS1_CORE_LIMA | show running-config | Pendiente |
| Rutas conectadas VLAN | MS1_CORE_LIMA | show ip route | Pendiente |
| Ruta por defecto del core | MS1_CORE_LIMA | show ip route | Pendiente |
| Ruta de retorno | ROUTER_LIMA | show ip route | Pendiente |
| Ping InterVLAN | PC_VENTAS_1 | ping a otras VLAN | Pendiente |
| Ping a servidores | PC_VENTAS_1 | ping servidores | Pendiente |
| Ping al router | PC_VENTAS_1 | ping 10.192.43.1 | Pendiente |
