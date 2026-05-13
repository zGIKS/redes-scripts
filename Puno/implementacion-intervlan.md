# Sede Puno

## Scripts de Implementacion de Enrutamiento InterVLAN

```ios
enable
configure terminal

interface vlan 10
description Gateway VLAN Administracion
ip address 10.192.56.65 255.255.255.224
no shutdown
exit

interface vlan 20
description Gateway VLAN Logistica
ip address 10.192.56.145 255.255.255.240
no shutdown
exit

interface vlan 30
description Gateway VLAN Ventas
ip address 10.192.56.1 255.255.255.192
no shutdown
exit

interface vlan 40
description Gateway VLAN Finanzas
ip address 10.192.56.97 255.255.255.240
no shutdown
exit

interface vlan 50
description Gateway VLAN Marketing
ip address 10.192.56.129 255.255.255.240
no shutdown
exit

interface vlan 60
description Gateway VLAN Servidores
ip address 10.192.56.177 255.255.255.240
no shutdown
exit

interface vlan 70
description Gateway VLAN WiFi Clientes
ip address 10.192.56.161 255.255.255.240
no shutdown
exit

interface vlan 80
description Gateway VLAN WiFi Ejecutivos
ip address 10.192.56.113 255.255.255.240
no shutdown
exit

interface vlan 99
description Gateway VLAN Nativa/Gestion
ip address 10.192.56.193 255.255.255.248
no shutdown
exit

ip routing

interface GigabitEthernet1/0/1
description Enlace L3 a ROUTER_PUNO
no switchport
ip address 10.192.59.2 255.255.255.252
no shutdown
exit

ip route 0.0.0.0 0.0.0.0 10.192.59.1
end
```

## Ruta de retorno en ROUTER_PUNO

```ios
enable
configure terminal

interface GigabitEthernet0/0
description Enlace L3 a MS1_CORE_PUNO
ip address 10.192.59.1 255.255.255.252
no shutdown
exit

ip route 10.192.56.0 255.255.252.0 10.192.59.2
end
```

## Gateways por VLAN

| VLAN | Segmento | Gateway |
| ---: | --- | --- |
| 10 | Administracion | 10.192.56.65 |
| 20 | Logistica | 10.192.56.145 |
| 30 | Ventas | 10.192.56.1 |
| 40 | Finanzas | 10.192.56.97 |
| 50 | Marketing | 10.192.56.129 |
| 60 | Servidores | 10.192.56.177 |
| 70 | WiFi Clientes | 10.192.56.161 |
| 80 | WiFi Ejecutivos | 10.192.56.113 |
| 99 | Nativa/Gestion | 10.192.56.193 |

## Pruebas sugeridas

Desde `PC_VENTAS_1_PUNO`:

```bash
ping 10.192.56.74
ping 10.192.56.98
ping 10.192.56.130
ping 10.192.56.146
ping 10.192.56.194
ping 10.192.56.179
ping 10.192.59.1
```
