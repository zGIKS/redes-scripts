# Sede La Libertad

## Scripts de Implementacion de Direccionamiento IP

### AGREGAR VLAN IP A CORE - MS1_CORE_LA_LIBERTAD

```ios
enable
configure terminal

vlan 30
name VLVEN
exit
interface vlan 30
ip address 10.192.44.1 255.255.255.128
no shutdown
exit

vlan 31
name VLADM
exit
interface vlan 31
ip address 10.192.44.129 255.255.255.192
no shutdown
exit

vlan 32
name VLFIN
exit
interface vlan 32
ip address 10.192.44.193 255.255.255.224
no shutdown
exit

vlan 33
name VLWFEJE
exit
interface vlan 33
ip address 10.192.44.225 255.255.255.240
no shutdown
exit

vlan 34
name VLMAR
exit
interface vlan 34
ip address 10.192.44.241 255.255.255.240
no shutdown
exit

vlan 35
name VLLOG
exit
interface vlan 35
ip address 10.192.45.1 255.255.255.240
no shutdown
exit

vlan 36
name VLWFCLI
exit
interface vlan 36
ip address 10.192.45.17 255.255.255.240
no shutdown
exit

vlan 99
name VLNAT
exit
interface vlan 99
ip address 10.192.45.33 255.255.255.248
no shutdown
exit

vlan 37
name VLSER
exit
interface vlan 37
ip address 10.192.45.41 255.255.255.248
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

### DIRECCIONAMIENTO IP - ROUTER_LA_LIBERTAD

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

### DIRECCIONAMIENTO IP - PCS

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| PC_VENTAS_1_LA_LIBERTAD | 30 | 10.192.44.10 | 255.255.255.128 | 10.192.44.1 | 10.192.45.43 |
| PC_VENTAS_2_LA_LIBERTAD | 30 | 10.192.44.11 | 255.255.255.128 | 10.192.44.1 | 10.192.45.43 |
| PC_VENTAS_3_LA_LIBERTAD | 30 | 10.192.44.12 | 255.255.255.128 | 10.192.44.1 | 10.192.45.43 |
| PC_ADMINISTRACION_LA_LIBERTAD | 31 | 10.192.44.138 | 255.255.255.192 | 10.192.44.129 | 10.192.45.43 |
| PC_LOGISTICA_LA_LIBERTAD | 35 | 10.192.45.2 | 255.255.255.240 | 10.192.45.1 | 10.192.45.43 |
| PC_MARKETING_LA_LIBERTAD | 34 | 10.192.44.242 | 255.255.255.240 | 10.192.44.241 | 10.192.45.43 |
| PC_FINANZAS_LA_LIBERTAD | 32 | 10.192.44.194 | 255.255.255.224 | 10.192.44.193 | 10.192.45.43 |
| PC_ADMIN_LA_LIBERTAD | 99 | 10.192.45.34 | 255.255.255.248 | 10.192.45.33 | 10.192.45.43 |

### DIRECCIONAMIENTO IP - WIFI

| Dispositivo | VLAN | SSID | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- | --- |
| WIFI_TELEFONO_CLIENTE_LA_LIBERTAD | 36 | LAWIFI-CLIENTES | 10.192.45.18 | 255.255.255.240 | 10.192.45.17 | 10.192.45.43 |
| WIFI_LAPTOP_EJECUTIVO_LA_LIBERTAD | 33 | LAWIFI-EJECUTIVO | 10.192.44.226 | 255.255.255.240 | 10.192.44.225 | 10.192.45.43 |

### DIRECCIONAMIENTO IP - SERVIDORES

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| DHCP_LA_LIBERTAD | 37 | 10.192.45.44 | 255.255.255.248 | 10.192.45.41 | 10.192.45.43 |
| DNS_LA_LIBERTAD | 37 | 10.192.45.43 | 255.255.255.248 | 10.192.45.41 | 10.192.45.43 |
| FTP_LA_LIBERTAD | 37 | 10.192.45.45 | 255.255.255.248 | 10.192.45.41 | 10.192.45.43 |
| MAIL_LA_LIBERTAD | 37 | 10.192.45.46 | 255.255.255.248 | 10.192.45.41 | 10.192.45.43 |
| WEB_LA_LIBERTAD | 37 | 10.192.45.42 | 255.255.255.248 | 10.192.45.41 | 10.192.45.43 |
