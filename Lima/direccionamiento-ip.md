# Sede Lima

## Scripts de Implementacion de Direccionamiento IP

### AGREGAR VLAN IP A CORE - MS1_CORE_LIMA

```ios
enable
configure terminal

vlan 10
name VLVEN
exit
interface vlan 10
ip address 10.192.40.1 255.255.255.0
no shutdown
exit

vlan 11
name VLADM
exit
interface vlan 11
ip address 10.192.41.1 255.255.255.128
no shutdown
exit

vlan 12
name VLFIN
exit
interface vlan 12
ip address 10.192.41.129 255.255.255.192
no shutdown
exit

vlan 13
name VLWFEJE
exit
interface vlan 13
ip address 10.192.41.193 255.255.255.192
no shutdown
exit

vlan 14
name VLMAR
exit
interface vlan 14
ip address 10.192.42.1 255.255.255.192
no shutdown
exit

vlan 15
name VLLOG
exit
interface vlan 15
ip address 10.192.42.65 255.255.255.192
no shutdown
exit

vlan 16
name VLWFCLI
exit
interface vlan 16
ip address 10.192.42.129 255.255.255.224
no shutdown
exit

vlan 17
name VLSER
exit
interface vlan 17
ip address 10.192.42.193 255.255.255.240
no shutdown
exit

vlan 99
name VLNAT
exit
interface vlan 99
ip address 10.192.42.161 255.255.255.224
no shutdown
exit

ip routing

interface GigabitEthernet1/0/1
description Enlace L3 a ROUTER_LIMA
no switchport
ip address 10.192.43.2 255.255.255.252
no shutdown
exit

ip route 0.0.0.0 0.0.0.0 10.192.43.1
end
```

### DIRECCIONAMIENTO IP - ROUTER_LIMA

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

### DIRECCIONAMIENTO IP - PCS

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| PC_VENTAS_1 | 10 | 10.192.40.10 | 255.255.255.0 | 10.192.40.1 | 10.192.42.195 |
| PC_VENTAS_2 | 10 | 10.192.40.11 | 255.255.255.0 | 10.192.40.1 | 10.192.42.195 |
| PC_VENTAS_3 | 10 | 10.192.40.12 | 255.255.255.0 | 10.192.40.1 | 10.192.42.195 |
| PC_ADMINISTRACION | 11 | 10.192.41.10 | 255.255.255.128 | 10.192.41.1 | 10.192.42.195 |
| PC_FINANZAS | 12 | 10.192.41.130 | 255.255.255.192 | 10.192.41.129 | 10.192.42.195 |
| PC_MARKETING | 14 | 10.192.42.10 | 255.255.255.192 | 10.192.42.1 | 10.192.42.195 |
| PC_LOGISTICA | 15 | 10.192.42.66 | 255.255.255.192 | 10.192.42.65 | 10.192.42.195 |
| PC_ADMIN | 99 | 10.192.42.162 | 255.255.255.224 | 10.192.42.161 | 10.192.42.195 |

### DIRECCIONAMIENTO IP - WIFI

| Dispositivo | VLAN | SSID | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- | --- |
| WIFI_TELEFONO_CLIENTE | 16 | LWIFI-CLIENTES | 10.192.42.130 | 255.255.255.224 | 10.192.42.129 | 10.192.42.195 |
| WIFI_LAPTOP_EJECUTIVO | 13 | LWIFI-EJECUTIVO | 10.192.41.194 | 255.255.255.192 | 10.192.41.193 | 10.192.42.195 |

### DIRECCIONAMIENTO IP - SERVIDORES

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| WEB_LIMA | 17 | 10.192.42.194 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |
| DNS_LIMA | 17 | 10.192.42.195 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |
| DHCP_LIMA | 17 | 10.192.42.196 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |
| FTP_LIMA | 17 | 10.192.42.197 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |
| MAIL_LIMA | 17 | 10.192.42.198 | 255.255.255.240 | 10.192.42.193 | 10.192.42.195 |
