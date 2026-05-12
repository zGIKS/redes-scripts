# Sede Puno

## Scripts de Implementacion de Direccionamiento IP

### AGREGAR VLAN IP A CORE - MS1_CORE_PUNO

```ios
enable
configure terminal

vlan 30
name VLVEN
exit
interface vlan 30
ip address 10.192.56.1 255.255.255.192
no shutdown
exit

vlan 10
name VLADM
exit
interface vlan 10
ip address 10.192.56.65 255.255.255.224
no shutdown
exit

vlan 40
name VLFIN
exit
interface vlan 40
ip address 10.192.56.97 255.255.255.240
no shutdown
exit

vlan 80
name VLWFEJE
exit
interface vlan 80
ip address 10.192.56.113 255.255.255.240
no shutdown
exit

vlan 50
name VLMAR
exit
interface vlan 50
ip address 10.192.56.129 255.255.255.240
no shutdown
exit

vlan 20
name VLLOG
exit
interface vlan 20
ip address 10.192.56.145 255.255.255.240
no shutdown
exit

vlan 70
name VLWFCLI
exit
interface vlan 70
ip address 10.192.56.161 255.255.255.240
no shutdown
exit

vlan 60
name VLSER
exit
interface vlan 60
ip address 10.192.56.177 255.255.255.240
no shutdown
exit

vlan 99
name VLNAT
exit
interface vlan 99
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

### DIRECCIONAMIENTO IP - ROUTER_PUNO

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

### DIRECCIONAMIENTO IP - PCS

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| PC_VENTAS_1_PUNO | 30 | 10.192.56.10 | 255.255.255.192 | 10.192.56.1 | 10.192.56.179 |
| PC_VENTAS_2_PUNO | 30 | 10.192.56.11 | 255.255.255.192 | 10.192.56.1 | 10.192.56.179 |
| PC_VENTAS_3_PUNO | 30 | 10.192.56.12 | 255.255.255.192 | 10.192.56.1 | 10.192.56.179 |
| PC_ADMINISTRACION_PUNO | 10 | 10.192.56.74 | 255.255.255.224 | 10.192.56.65 | 10.192.56.179 |
| PC_LOGISTICA_PUNO | 20 | 10.192.56.146 | 255.255.255.240 | 10.192.56.145 | 10.192.56.179 |
| PC_MARKETING_PUNO | 50 | 10.192.56.130 | 255.255.255.240 | 10.192.56.129 | 10.192.56.179 |
| PC_FINANZAS_PUNO | 40 | 10.192.56.98 | 255.255.255.240 | 10.192.56.97 | 10.192.56.179 |
| PC_ADMIN_PUNO | 99 | 10.192.56.194 | 255.255.255.248 | 10.192.56.193 | 10.192.56.179 |

### DIRECCIONAMIENTO IP - WIFI

| Dispositivo | VLAN | SSID | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- | --- |
| WIFI_TELEFONO_CLIENTE_PUNO | 70 | PWIFI-CLIENTES | 10.192.56.162 | 255.255.255.240 | 10.192.56.161 | 10.192.56.179 |
| WIFI_LAPTOP_EJECUTIVO_PUNO | 80 | PWIFI-EJECUTIVO | 10.192.56.114 | 255.255.255.240 | 10.192.56.113 | 10.192.56.179 |

### DIRECCIONAMIENTO IP - SERVIDORES

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| DHCP_PUNO | 60 | 10.192.56.180 | 255.255.255.240 | 10.192.56.177 | 10.192.56.179 |
| DNS_PUNO | 60 | 10.192.56.179 | 255.255.255.240 | 10.192.56.177 | 10.192.56.179 |
| FTP_PUNO | 60 | 10.192.56.181 | 255.255.255.240 | 10.192.56.177 | 10.192.56.179 |
| MAIL_PUNO | 60 | 10.192.56.182 | 255.255.255.240 | 10.192.56.177 | 10.192.56.179 |
| WEB_PUNO | 60 | 10.192.56.178 | 255.255.255.240 | 10.192.56.177 | 10.192.56.179 |
