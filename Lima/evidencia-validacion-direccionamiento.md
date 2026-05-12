# Evidencia de Validacion de Direccionamiento IP - Sede Lima

Este archivo sirve como guia para tomar evidencias en Packet Tracer y demostrar que el direccionamiento IP de la sede Lima esta configurado correctamente.

## 1. Validar direccionamiento del Core

Dispositivo: `MS1_CORE_LIMA`

Comando:

```ios
show ip interface brief
```

Debe verificarse que existan estas interfaces VLAN con sus IP:

| Interfaz | IP esperada | Estado esperado |
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
| GigabitEthernet1/0/1 | 10.192.43.2 | up/up |

Evidencia a capturar:

```text
Captura del comando show ip interface brief en MS1_CORE_LIMA.
```

## 2. Validar configuracion de interfaces VLAN

Dispositivo: `MS1_CORE_LIMA`

Comando:

```ios
show running-config | section interface Vlan
```

Debe verificarse que cada SVI tenga su direccion IP correcta:

```ios
interface Vlan10
 ip address 10.192.40.1 255.255.255.0

interface Vlan11
 ip address 10.192.41.1 255.255.255.128

interface Vlan12
 ip address 10.192.41.129 255.255.255.192

interface Vlan13
 ip address 10.192.41.193 255.255.255.192

interface Vlan14
 ip address 10.192.42.1 255.255.255.192

interface Vlan15
 ip address 10.192.42.65 255.255.255.192

interface Vlan16
 ip address 10.192.42.129 255.255.255.224

interface Vlan17
 ip address 10.192.42.193 255.255.255.240

interface Vlan99
 ip address 10.192.42.161 255.255.255.224
```

Evidencia a capturar:

```text
Captura del comando show running-config | section interface Vlan en MS1_CORE_LIMA.
```

## 3. Validar enrutamiento en el Core

Dispositivo: `MS1_CORE_LIMA`

Comandos:

```ios
show running-config | include ip routing
show ip route
```

Debe verificarse:

```ios
ip routing
```

Tambien debe aparecer la ruta por defecto hacia el router Lima:

```ios
S* 0.0.0.0/0 via 10.192.43.1
```

Evidencia a capturar:

```text
Captura de show running-config | include ip routing y show ip route en MS1_CORE_LIMA.
```

## 4. Validar direccionamiento del Router

Dispositivo: `ROUTER_LIMA`

Comando:

```ios
show ip interface brief
```

Debe verificarse:

| Interfaz | IP esperada | Estado esperado |
| --- | --- | --- |
| GigabitEthernet0/0 | 10.192.43.1 | up/up |

Luego ejecutar:

```ios
show running-config | include ip route
```

Debe aparecer:

```ios
ip route 10.192.40.0 255.255.252.0 10.192.43.2
```

Evidencia a capturar:

```text
Captura de show ip interface brief y show running-config | include ip route en ROUTER_LIMA.
```

## 5. Validar direccionamiento de PCs

Dispositivos:

- `PC_VENTAS_1`
- `PC_VENTAS_2`
- `PC_VENTAS_3`
- `PC_ADMINISTRACION`
- `PC_FINANZAS`
- `PC_MARKETING`
- `PC_LOGISTICA`
- `PC_ADMIN`

En cada PC abrir:

```text
Desktop > Command Prompt
```

Comando:

```bash
ipconfig
```

Valores esperados:

| Dispositivo | IP | Mascara | Gateway | DNS |
| --- | --- | --- | --- | --- |
| PC_VENTAS_1 | 10.192.40.10 | 255.255.255.0 | 10.192.40.1 | 10.192.42.195 |
| PC_VENTAS_2 | 10.192.40.11 | 255.255.255.0 | 10.192.40.1 | 10.192.42.195 |
| PC_VENTAS_3 | 10.192.40.12 | 255.255.255.0 | 10.192.40.1 | 10.192.42.195 |
| PC_ADMINISTRACION | 10.192.41.10 | 255.255.255.128 | 10.192.41.1 | 10.192.42.195 |
| PC_FINANZAS | 10.192.41.130 | 255.255.255.192 | 10.192.41.129 | 10.192.42.195 |
| PC_MARKETING | 10.192.42.10 | 255.255.255.192 | 10.192.42.1 | 10.192.42.195 |
| PC_LOGISTICA | 10.192.42.66 | 255.255.255.192 | 10.192.42.65 | 10.192.42.195 |
| PC_ADMIN | 10.192.42.162 | 255.255.255.224 | 10.192.42.161 | 10.192.42.195 |

Evidencia a capturar:

```text
Captura de ipconfig en cada PC o, como minimo, en una PC por VLAN.
```

## 6. Validar direccionamiento de servidores

Dispositivos:

- `WEB_LIMA`
- `DNS_LIMA`
- `DHCP_LIMA`
- `FTP_LIMA`
- `MAIL_LIMA`

En cada servidor abrir:

```text
Desktop > IP Configuration
```

Valores esperados:

| Servidor | IP | Mascara | Gateway | DNS |
| --- | --- | --- | --- | --- |
| WEB_LIMA | 10.192.42.194 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |
| DNS_LIMA | 10.192.42.195 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |
| DHCP_LIMA | 10.192.42.196 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |
| FTP_LIMA | 10.192.42.197 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |
| MAIL_LIMA | 10.192.42.198 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |

Evidencia a capturar:

```text
Captura de IP Configuration de cada servidor.
```

## 7. Validar direccionamiento WiFi

Dispositivos:

- `WIFI_TELEFONO_CLIENTE`
- `WIFI_LAPTOP_EJECUTIVO`

En cada cliente WiFi revisar:

```text
Desktop > IP Configuration
```

Valores esperados:

| Dispositivo | SSID | IP | Mascara | Gateway | DNS |
| --- | --- | --- | --- | --- | --- |
| WIFI_TELEFONO_CLIENTE | LWIFI-CLIENTES | 10.192.42.130 | 255.255.255.224 | 10.192.42.129 | 10.192.42.195 |
| WIFI_LAPTOP_EJECUTIVO | LWIFI-EJECUTIVO | 10.192.41.194 | 255.255.255.192 | 10.192.41.193 | 10.192.42.195 |

Evidencia a capturar:

```text
Captura de IP Configuration y asociacion al SSID de cada cliente WiFi.
```

## 8. Validar conectividad basica

Desde `PC_VENTAS_1`, abrir:

```text
Desktop > Command Prompt
```

Comandos:

```bash
ping 10.192.40.1
ping 10.192.41.10
ping 10.192.42.195
ping 10.192.43.1
```

Resultado esperado:

```text
Reply from ...
```

Que valida cada ping:

| Comando | Validacion |
| --- | --- |
| ping 10.192.40.1 | Gateway de la VLAN Ventas |
| ping 10.192.41.10 | Comunicacion InterVLAN hacia Administracion |
| ping 10.192.42.195 | Comunicacion hacia servidor DNS |
| ping 10.192.43.1 | Comunicacion hacia ROUTER_LIMA |

Evidencia a capturar:

```text
Captura de los pings exitosos desde PC_VENTAS_1.
```

## 9. Checklist final de evidencia

| Evidencia | Dispositivo | Comando o pantalla | Estado |
| --- | --- | --- | --- |
| Interfaces VLAN con IP | MS1_CORE_LIMA | show ip interface brief | Pendiente |
| SVIs configuradas | MS1_CORE_LIMA | show running-config \| section interface Vlan | Pendiente |
| Enrutamiento activo | MS1_CORE_LIMA | show running-config \| include ip routing | Pendiente |
| Tabla de rutas del core | MS1_CORE_LIMA | show ip route | Pendiente |
| IP del router | ROUTER_LIMA | show ip interface brief | Pendiente |
| Ruta del router hacia Lima | ROUTER_LIMA | show running-config \| include ip route | Pendiente |
| IP de PCs | PCs Lima | ipconfig | Pendiente |
| IP de servidores | Servidores Lima | Desktop > IP Configuration | Pendiente |
| IP de clientes WiFi | Clientes WiFi Lima | Desktop > IP Configuration | Pendiente |
| Pruebas de ping | PC_VENTAS_1 | ping | Pendiente |
