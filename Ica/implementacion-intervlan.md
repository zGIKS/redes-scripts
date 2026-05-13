# Sede Ica

## Scripts de Implementacion de Enrutamiento InterVLAN

El enrutamiento InterVLAN se implementa en `MS1_CORE_ICA` mediante interfaces VLAN (SVI) e `ip routing`.

## 1. Gateways VLAN en MS1_CORE_ICA

```ios
enable
configure terminal

interface vlan 20
description Gateway VLAN Ventas
ip address 10.192.48.1 255.255.255.128
no shutdown
exit

interface vlan 21
description Gateway VLAN Administracion
ip address 10.192.48.129 255.255.255.192
no shutdown
exit

interface vlan 22
description Gateway VLAN Finanzas
ip address 10.192.48.193 255.255.255.224
no shutdown
exit

interface vlan 23
description Gateway VLAN WiFi Ejecutivos
ip address 10.192.48.225 255.255.255.224
no shutdown
exit

interface vlan 24
description Gateway VLAN Marketing
ip address 10.192.49.1 255.255.255.240
no shutdown
exit

interface vlan 25
description Gateway VLAN Logistica
ip address 10.192.49.17 255.255.255.240
no shutdown
exit

interface vlan 26
description Gateway VLAN WiFi Clientes
ip address 10.192.49.49 255.255.255.240
no shutdown
exit

interface vlan 27
description Gateway VLAN Servidores
ip address 10.192.49.65 255.255.255.240
no shutdown
exit

interface vlan 99
description Gateway VLAN Nativa/Gestion
ip address 10.192.49.33 255.255.255.240
no shutdown
exit

ip routing

interface GigabitEthernet1/0/1
description Enlace L3 a ROUTER_ICA
no switchport
ip address 10.192.51.2 255.255.255.252
no shutdown
exit

ip route 0.0.0.0 0.0.0.0 10.192.51.1
end
```

## 2. Ruta de retorno en ROUTER_ICA

```ios
enable
configure terminal

interface GigabitEthernet0/0
description Enlace L3 a MS1_CORE_ICA
ip address 10.192.51.1 255.255.255.252
no shutdown
exit

ip route 10.192.48.0 255.255.252.0 10.192.51.2
end
```

## 3. Gateways por VLAN

| VLAN | Segmento | Gateway |
| ---: | --- | --- |
| 20 | Ventas | 10.192.48.1 |
| 21 | Administracion | 10.192.48.129 |
| 22 | Finanzas | 10.192.48.193 |
| 23 | WiFi Ejecutivos | 10.192.48.225 |
| 24 | Marketing | 10.192.49.1 |
| 25 | Logistica | 10.192.49.17 |
| 26 | WiFi Clientes | 10.192.49.49 |
| 27 | Servidores | 10.192.49.65 |
| 99 | Nativa/Gestion | 10.192.49.33 |

## 4. Pruebas sugeridas

Desde `PC_VENTAS_1_ICA`:

```bash
ping 10.192.48.129
ping 10.192.48.194
ping 10.192.49.2
ping 10.192.49.18
ping 10.192.49.34
ping 10.192.49.67
ping 10.192.51.1
```
