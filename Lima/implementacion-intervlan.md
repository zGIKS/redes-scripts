# Sede Lima

## Scripts de Implementacion de Enrutamiento InterVLAN

El enrutamiento InterVLAN de la sede Lima se implementa en el switch multicapa `MS1_CORE_LIMA` mediante interfaces VLAN (SVI) e `ip routing`. Cada SVI funciona como gateway de su VLAN.

## 1. Gateways VLAN en MS1_CORE_LIMA

```ios
enable
configure terminal

interface vlan 10
description Gateway VLAN Ventas
ip address 10.192.40.1 255.255.255.0
no shutdown
exit

interface vlan 11
description Gateway VLAN Administracion
ip address 10.192.41.1 255.255.255.128
no shutdown
exit

interface vlan 12
description Gateway VLAN Finanzas
ip address 10.192.41.129 255.255.255.192
no shutdown
exit

interface vlan 13
description Gateway VLAN WiFi Ejecutivos
ip address 10.192.41.193 255.255.255.192
no shutdown
exit

interface vlan 14
description Gateway VLAN Marketing
ip address 10.192.42.1 255.255.255.192
no shutdown
exit

interface vlan 15
description Gateway VLAN Logistica
ip address 10.192.42.65 255.255.255.192
no shutdown
exit

interface vlan 16
description Gateway VLAN WiFi Clientes
ip address 10.192.42.129 255.255.255.224
no shutdown
exit

interface vlan 17
description Gateway VLAN Servidores
ip address 10.192.42.193 255.255.255.240
no shutdown
exit

interface vlan 99
description Gateway VLAN Nativa/Gestion
ip address 10.192.42.161 255.255.255.224
no shutdown
exit
```

## 2. Activar enrutamiento InterVLAN

```ios
ip routing
```

## 3. Enlace L3 hacia ROUTER_LIMA

```ios
interface GigabitEthernet1/0/1
description Enlace L3 a ROUTER_LIMA
no switchport
ip address 10.192.43.2 255.255.255.252
no shutdown
exit
```

## 4. Ruta por defecto desde el core

```ios
ip route 0.0.0.0 0.0.0.0 10.192.43.1
end
```

## 5. Ruta de retorno en ROUTER_LIMA

El router necesita una ruta hacia la red LAN de Lima para devolver trafico hacia las VLAN internas.

```ios
enable
configure terminal

interface GigabitEthernet0/0
description Enlace L3 a MS1_CORE_LIMA
ip address 10.192.43.1 255.255.255.252
no shutdown
exit

ip route 10.192.40.0 255.255.252.0 10.192.43.2
end
```

## 6. Gateways por VLAN

| VLAN | Segmento | Gateway |
| ---: | --- | --- |
| 10 | Ventas | 10.192.40.1 |
| 11 | Administracion | 10.192.41.1 |
| 12 | Finanzas | 10.192.41.129 |
| 13 | WiFi Ejecutivos | 10.192.41.193 |
| 14 | Marketing | 10.192.42.1 |
| 15 | Logistica | 10.192.42.65 |
| 16 | WiFi Clientes | 10.192.42.129 |
| 17 | Servidores | 10.192.42.193 |
| 99 | Nativa/Gestion | 10.192.42.161 |

## 7. Pruebas sugeridas

Desde `PC_VENTAS_1`:

```bash
ping 10.192.40.1
ping 10.192.41.10
ping 10.192.41.130
ping 10.192.42.10
ping 10.192.42.66
ping 10.192.42.162
ping 10.192.42.195
```

Desde `PC_ADMIN`:

```bash
ping 10.192.42.161
ping 10.192.40.10
ping 10.192.43.1
```
