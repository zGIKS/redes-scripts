# Sede Lima

## Scripts de Implementacion de VLANs

Esta seccion documenta la implementacion de VLANs en los dispositivos intermediarios de la sede Lima. Los dispositivos finales no crean VLANs; pertenecen a una VLAN segun el puerto access del switch donde estan conectados.

## 1. CORE - MS1_CORE_LIMA

El core mantiene todas las VLAN de la sede porque concentra el enrutamiento InterVLAN mediante SVIs.

```ios
enable
configure terminal

vlan 10
name VLVEN
exit

vlan 11
name VLADM
exit

vlan 12
name VLFIN
exit

vlan 13
name VLWFEJE
exit

vlan 14
name VLMAR
exit

vlan 15
name VLLOG
exit

vlan 16
name VLWFCLI
exit

vlan 17
name VLSER
exit

vlan 99
name VLNAT
exit
```

### Troncales del core

```ios
interface GigabitEthernet1/0/2
description Trunk hacia MS2_WIFI_LIMA
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 13,16,99
no shutdown
exit

interface GigabitEthernet1/0/3
description Trunk hacia MS3_DIST_LIMA
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/4
description Trunk hacia MS4_DIST_LIMA
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

end
```

## 2. SWITCH WIFI - MS2_WIFI_LIMA

El switch WiFi solo transporta las VLAN de WiFi y la VLAN nativa 99 en el enlace troncal.

```ios
enable
configure terminal

vlan 13
name VLWFEJE
exit

vlan 16
name VLWFCLI
exit

vlan 99
name VLNAT
exit
```

### Trunk hacia el core

```ios
interface GigabitEthernet1/0/1
description Trunk hacia MS1_CORE_LIMA
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 13,16,99
no shutdown
exit
```

### Puertos access hacia APs

```ios
interface GigabitEthernet1/0/2
description AP_CLIENTE_LIMA
switchport mode access
switchport access vlan 16
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/3
description AP_EJECUTIVO_LIMA
switchport mode access
switchport access vlan 13
spanning-tree portfast
no shutdown
exit

end
```

## 3. DISTRIBUCION - MS3_DIST_LIMA

```ios
enable
configure terminal

vlan 10
name VLVEN
exit
vlan 11
name VLADM
exit
vlan 12
name VLFIN
exit
vlan 13
name VLWFEJE
exit
vlan 14
name VLMAR
exit
vlan 15
name VLLOG
exit
vlan 16
name VLWFCLI
exit
vlan 17
name VLSER
exit
vlan 99
name VLNAT
exit
```

### Troncales y puertos access

```ios
interface GigabitEthernet1/0/1
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/2
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/3
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/4
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/10
description WEB_LIMA
switchport mode access
switchport access vlan 17
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description DNS_LIMA
switchport mode access
switchport access vlan 17
spanning-tree portfast
no shutdown
exit

end
```

## 4. DISTRIBUCION - MS4_DIST_LIMA

```ios
enable
configure terminal

vlan 10
name VLVEN
exit
vlan 11
name VLADM
exit
vlan 12
name VLFIN
exit
vlan 13
name VLWFEJE
exit
vlan 14
name VLMAR
exit
vlan 15
name VLLOG
exit
vlan 16
name VLWFCLI
exit
vlan 17
name VLSER
exit
vlan 99
name VLNAT
exit
```

### Troncales y puertos access

```ios
interface GigabitEthernet1/0/1
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/2
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/3
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/4
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/10
description DHCP_LIMA
switchport mode access
switchport access vlan 17
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description FTP_LIMA
switchport mode access
switchport access vlan 17
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/12
description MAIL_LIMA
switchport mode access
switchport access vlan 17
spanning-tree portfast
no shutdown
exit

end
```

## 5. ACCESO - SW1_LIMA

```ios
enable
configure terminal

vlan 10
name VLVEN
exit
vlan 11
name VLADM
exit
vlan 12
name VLFIN
exit
vlan 13
name VLWFEJE
exit
vlan 14
name VLMAR
exit
vlan 15
name VLLOG
exit
vlan 16
name VLWFCLI
exit
vlan 17
name VLSER
exit
vlan 99
name VLNAT
exit

interface range GigabitEthernet0/1 - 2
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface FastEthernet0/1
description PC_VENTAS_1
switchport mode access
switchport access vlan 10
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
description PC_ADMINISTRACION
switchport mode access
switchport access vlan 11
spanning-tree portfast
no shutdown
exit

end
```

## 6. ACCESO - SW2_LIMA

```ios
enable
configure terminal

vlan 10
name VLVEN
exit
vlan 11
name VLADM
exit
vlan 12
name VLFIN
exit
vlan 13
name VLWFEJE
exit
vlan 14
name VLMAR
exit
vlan 15
name VLLOG
exit
vlan 16
name VLWFCLI
exit
vlan 17
name VLSER
exit
vlan 99
name VLNAT
exit

interface range GigabitEthernet0/1 - 2
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface FastEthernet0/1
description PC_VENTAS_2
switchport mode access
switchport access vlan 10
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
description PC_VENTAS_3
switchport mode access
switchport access vlan 10
spanning-tree portfast
no shutdown
exit

end
```

## 7. ACCESO - SW3_LIMA

```ios
enable
configure terminal

vlan 10
name VLVEN
exit
vlan 11
name VLADM
exit
vlan 12
name VLFIN
exit
vlan 13
name VLWFEJE
exit
vlan 14
name VLMAR
exit
vlan 15
name VLLOG
exit
vlan 16
name VLWFCLI
exit
vlan 17
name VLSER
exit
vlan 99
name VLNAT
exit

interface range GigabitEthernet0/1 - 2
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface FastEthernet0/1
description PC_LOGISTICA
switchport mode access
switchport access vlan 15
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
description PC_MARKETING
switchport mode access
switchport access vlan 14
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/3
description PC_FINANZAS
switchport mode access
switchport access vlan 12
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/4
description PC_ADMIN
switchport mode access
switchport access vlan 99
spanning-tree portfast
no shutdown
exit

end
```

## 8. Resumen de asignacion de VLANs

| VLAN | Nombre | Uso |
| ---: | --- | --- |
| 10 | VLVEN | Ventas |
| 11 | VLADM | Administracion |
| 12 | VLFIN | Finanzas |
| 13 | VLWFEJE | WiFi Ejecutivos |
| 14 | VLMAR | Marketing |
| 15 | VLLOG | Logistica |
| 16 | VLWFCLI | WiFi Clientes |
| 17 | VLSER | Servidores |
| 99 | VLNAT | Nativa/Gestion |
