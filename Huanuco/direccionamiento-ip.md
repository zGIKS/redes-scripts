# Sede Huanuco

## Scripts de Implementacion de Direccionamiento IP

### AGREGAR VLAN IP A CORE - MS1_CORE_HUANUCO

```ios
enable
configure terminal

vlan 40
name VLVEN
exit
interface vlan 40
ip address 10.192.52.1 255.255.255.192
no shutdown
exit

vlan 41
name VLADM
exit
interface vlan 41
ip address 10.192.52.65 255.255.255.224
no shutdown
exit

vlan 42
name VLFIN
exit
interface vlan 42
ip address 10.192.52.97 255.255.255.240
no shutdown
exit

vlan 43
name VLWFEJE
exit
interface vlan 43
ip address 10.192.52.113 255.255.255.240
no shutdown
exit

vlan 44
name VLMAR
exit
interface vlan 44
ip address 10.192.52.129 255.255.255.240
no shutdown
exit

vlan 45
name VLLOG
exit
interface vlan 45
ip address 10.192.52.145 255.255.255.240
no shutdown
exit

vlan 46
name VLWFCLI
exit
interface vlan 46
ip address 10.192.52.161 255.255.255.240
no shutdown
exit

vlan 99
name VLNAT
exit
interface vlan 99
ip address 10.192.52.177 255.255.255.248
no shutdown
exit

vlan 47
name VLSER
exit
interface vlan 47
ip address 10.192.52.185 255.255.255.248
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

### DIRECCIONAMIENTO IP - ROUTER_HUANUCO

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

### DIRECCIONAMIENTO IP - PCS

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| PC_VENTAS_1_HUANUCO | 40 | 10.192.52.10 | 255.255.255.192 | 10.192.52.1 | 10.192.52.187 |
| PC_VENTAS_2_HUANUCO | 40 | 10.192.52.11 | 255.255.255.192 | 10.192.52.1 | 10.192.52.187 |
| PC_VENTAS_3_HUANUCO | 40 | 10.192.52.12 | 255.255.255.192 | 10.192.52.1 | 10.192.52.187 |
| PC_ADMINISTRACION_HUANUCO | 41 | 10.192.52.74 | 255.255.255.224 | 10.192.52.65 | 10.192.52.187 |
| PC_LOGISTICA_HUANUCO | 45 | 10.192.52.146 | 255.255.255.240 | 10.192.52.145 | 10.192.52.187 |
| PC_MARKETING_HUANUCO | 44 | 10.192.52.130 | 255.255.255.240 | 10.192.52.129 | 10.192.52.187 |
| PC_FINANZAS_HUANUCO | 42 | 10.192.52.98 | 255.255.255.240 | 10.192.52.97 | 10.192.52.187 |
| PC_ADMIN_HUANUCO | 99 | 10.192.52.178 | 255.255.255.248 | 10.192.52.177 | 10.192.52.187 |

### DIRECCIONAMIENTO IP - WIFI

| Dispositivo | VLAN | SSID | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- | --- |
| WIFI_TELEFONO_CLIENTE_HUANUCO | 46 | HWIFI-CLIENTES | 10.192.52.162 | 255.255.255.240 | 10.192.52.161 | 10.192.52.187 |
| WIFI_LAPTOP_EJECUTIVO_HUANUCO | 43 | HWIFI-EJECUTIVO | 10.192.52.114 | 255.255.255.240 | 10.192.52.113 | 10.192.52.187 |

### DIRECCIONAMIENTO IP - SERVIDORES

| Dispositivo | VLAN | IP | Mascara | Gateway | DNS |
| --- | ---: | --- | --- | --- | --- |
| DHCP_HUANUCO | 47 | 10.192.52.188 | 255.255.255.248 | 10.192.52.185 | 10.192.52.187 |
| DNS_HUANUCO | 47 | 10.192.52.187 | 255.255.255.248 | 10.192.52.185 | 10.192.52.187 |
| FTP_HUANUCO | 47 | 10.192.52.189 | 255.255.255.248 | 10.192.52.185 | 10.192.52.187 |
| MAIL_HUANUCO | 47 | 10.192.52.190 | 255.255.255.248 | 10.192.52.185 | 10.192.52.187 |
| WEB_HUANUCO | 47 | 10.192.52.186 | 255.255.255.248 | 10.192.52.185 | 10.192.52.187 |
