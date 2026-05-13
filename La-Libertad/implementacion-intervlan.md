# Sede La Libertad

## Scripts de Implementacion de Enrutamiento InterVLAN

```ios
enable
configure terminal

interface vlan 30
description Gateway VLAN Ventas
ip address 10.192.44.1 255.255.255.128
no shutdown
exit

interface vlan 31
description Gateway VLAN Administracion
ip address 10.192.44.129 255.255.255.192
no shutdown
exit

interface vlan 32
description Gateway VLAN Finanzas
ip address 10.192.44.193 255.255.255.224
no shutdown
exit

interface vlan 33
description Gateway VLAN WiFi Ejecutivos
ip address 10.192.44.225 255.255.255.240
no shutdown
exit

interface vlan 34
description Gateway VLAN Marketing
ip address 10.192.44.241 255.255.255.240
no shutdown
exit

interface vlan 35
description Gateway VLAN Logistica
ip address 10.192.45.1 255.255.255.240
no shutdown
exit

interface vlan 36
description Gateway VLAN WiFi Clientes
ip address 10.192.45.17 255.255.255.240
no shutdown
exit

interface vlan 37
description Gateway VLAN Servidores
ip address 10.192.45.41 255.255.255.248
no shutdown
exit

interface vlan 99
description Gateway VLAN Nativa/Gestion
ip address 10.192.45.33 255.255.255.248
no shutdown
exit

ip routing

interface GigabitEthernet1/0/1
description Enlace L3 a ROUTER_LA_LIBERTAD
no switchport
ip address 10.192.47.2 255.255.255.252
no shutdown
exit

ip route 0.0.0.0 0.0.0.0 10.192.47.1
end
```

## Ruta de retorno en ROUTER_LA_LIBERTAD

```ios
enable
configure terminal

interface GigabitEthernet0/0
description Enlace L3 a MS1_CORE_LA_LIBERTAD
ip address 10.192.47.1 255.255.255.252
no shutdown
exit

ip route 10.192.44.0 255.255.252.0 10.192.47.2
end
```

## Gateways por VLAN

| VLAN | Segmento | Gateway |
| ---: | --- | --- |
| 30 | Ventas | 10.192.44.1 |
| 31 | Administracion | 10.192.44.129 |
| 32 | Finanzas | 10.192.44.193 |
| 33 | WiFi Ejecutivos | 10.192.44.225 |
| 34 | Marketing | 10.192.44.241 |
| 35 | Logistica | 10.192.45.1 |
| 36 | WiFi Clientes | 10.192.45.17 |
| 37 | Servidores | 10.192.45.41 |
| 99 | Nativa/Gestion | 10.192.45.33 |

## Pruebas sugeridas

Desde `PC_VENTAS_1_LA_LIBERTAD`:

```bash
ping 10.192.44.138
ping 10.192.44.194
ping 10.192.44.242
ping 10.192.45.2
ping 10.192.45.34
ping 10.192.45.43
ping 10.192.47.1
```
