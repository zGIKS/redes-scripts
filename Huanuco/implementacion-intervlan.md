# Sede Huanuco

## Scripts de Implementacion de Enrutamiento InterVLAN

```ios
enable
configure terminal

interface vlan 40
description Gateway VLAN Ventas
ip address 10.192.52.1 255.255.255.192
no shutdown
exit

interface vlan 41
description Gateway VLAN Administracion
ip address 10.192.52.65 255.255.255.224
no shutdown
exit

interface vlan 42
description Gateway VLAN Finanzas
ip address 10.192.52.97 255.255.255.240
no shutdown
exit

interface vlan 43
description Gateway VLAN WiFi Ejecutivos
ip address 10.192.52.113 255.255.255.240
no shutdown
exit

interface vlan 44
description Gateway VLAN Marketing
ip address 10.192.52.129 255.255.255.240
no shutdown
exit

interface vlan 45
description Gateway VLAN Logistica
ip address 10.192.52.145 255.255.255.240
no shutdown
exit

interface vlan 46
description Gateway VLAN WiFi Clientes
ip address 10.192.52.161 255.255.255.240
no shutdown
exit

interface vlan 47
description Gateway VLAN Servidores
ip address 10.192.52.185 255.255.255.248
no shutdown
exit

interface vlan 99
description Gateway VLAN Nativa/Gestion
ip address 10.192.52.177 255.255.255.248
no shutdown
exit

ip routing

interface GigabitEthernet1/0/1
description Enlace L3 a ROUTER_HUANUCO
no switchport
ip address 10.192.55.2 255.255.255.252
no shutdown
exit

ip route 0.0.0.0 0.0.0.0 10.192.55.1
end
```

## Ruta de retorno en ROUTER_HUANUCO

```ios
enable
configure terminal

interface GigabitEthernet0/0
description Enlace L3 a MS1_CORE_HUANUCO
ip address 10.192.55.1 255.255.255.252
no shutdown
exit

ip route 10.192.52.0 255.255.252.0 10.192.55.2
end
```

## Gateways por VLAN

| VLAN | Segmento | Gateway |
| ---: | --- | --- |
| 40 | Ventas | 10.192.52.1 |
| 41 | Administracion | 10.192.52.65 |
| 42 | Finanzas | 10.192.52.97 |
| 43 | WiFi Ejecutivos | 10.192.52.113 |
| 44 | Marketing | 10.192.52.129 |
| 45 | Logistica | 10.192.52.145 |
| 46 | WiFi Clientes | 10.192.52.161 |
| 47 | Servidores | 10.192.52.185 |
| 99 | Nativa/Gestion | 10.192.52.177 |

## Pruebas sugeridas

Desde `PC_VENTAS_1_HUANUCO`:

```bash
ping 10.192.52.74
ping 10.192.52.98
ping 10.192.52.130
ping 10.192.52.146
ping 10.192.52.178
ping 10.192.52.187
ping 10.192.55.1
```
