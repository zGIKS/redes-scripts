# Sede Ica

## Scripts de Implementacion de Direccionamiento IP

### AGREGAR VLAN IP A CORE - MS1_CORE_ICA

```ios
enable
configure terminal

vlan 20
name VLVEN
exit
interface vlan 20
ip address 10.192.48.1 255.255.255.128
no shutdown
exit

vlan 21
name VLADM
exit
interface vlan 21
ip address 10.192.48.129 255.255.255.192
no shutdown
exit

vlan 22
name VLFIN
exit
interface vlan 22
ip address 10.192.48.193 255.255.255.224
no shutdown
exit

vlan 23
name VLWFEJE
exit
interface vlan 23
ip address 10.192.48.225 255.255.255.224
no shutdown
exit

vlan 24
name VLMAR
exit
interface vlan 24
ip address 10.192.49.1 255.255.255.240
no shutdown
exit

vlan 25
name VLLOG
exit
interface vlan 25
ip address 10.192.49.17 255.255.255.240
no shutdown
exit

vlan 99
name VLNAT
exit
interface vlan 99
ip address 10.192.49.33 255.255.255.240
no shutdown
exit

vlan 26
name VLWFCLI
exit
interface vlan 26
ip address 10.192.49.49 255.255.255.240
no shutdown
exit

vlan 27
name VLSER
exit
interface vlan 27
ip address 10.192.49.65 255.255.255.240
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

### DIRECCIONAMIENTO IP - ROUTER_ICA

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

### DIRECCIONAMIENTO IP - PCS

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| PC_VENTAS_1_ICA | 20 | 10.192.48.10 | 255.255.255.128 | 10.192.48.1 | 10.192.49.67 |
| PC_VENTAS_2_ICA | 20 | 10.192.48.11 | 255.255.255.128 | 10.192.48.1 | 10.192.49.67 |
| PC_VENTAS_3_ICA | 20 | 10.192.48.12 | 255.255.255.128 | 10.192.48.1 | 10.192.49.67 |
| PC_ADMINISTRACION_ICA | 21 | 10.192.48.138 | 255.255.255.192 | 10.192.48.129 | 10.192.49.67 |
| PC_LOGISTICA_ICA | 25 | 10.192.49.18 | 255.255.255.240 | 10.192.49.17 | 10.192.49.67 |
| PC_MARKETING_ICA | 24 | 10.192.49.2 | 255.255.255.240 | 10.192.49.1 | 10.192.49.67 |
| PC_FINANZAS_ICA | 22 | 10.192.48.194 | 255.255.255.224 | 10.192.48.193 | 10.192.49.67 |
| PC_ADMIN_ICA | 99 | 10.192.49.34 | 255.255.255.240 | 10.192.49.33 | 10.192.49.67 |

### DIRECCIONAMIENTO IP - WIFI

| Dispositivo | VLAN | SSID | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- | --- |
| WIFI_TELEFONO_CLIENTE_ICA | 26 | IWIFI-CLIENTES | 10.192.49.50 | 255.255.255.240 | 10.192.49.49 | 10.192.49.67 |
| WIFI_LAPTOP_EJECUTIVO_ICA | 23 | IWIFI-EJECUTIVO | 10.192.48.226 | 255.255.255.224 | 10.192.48.225 | 10.192.49.67 |

### DIRECCIONAMIENTO IP - SERVIDORES

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| DHCP_ICA | 27 | 10.192.49.68 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| DNS_ICA | 27 | 10.192.49.67 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| FTP_ICA | 27 | 10.192.49.69 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| MAIL_ICA | 27 | 10.192.49.70 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| WEB_ICA | 27 | 10.192.49.66 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
