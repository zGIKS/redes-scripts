# Sede Puno

## Scripts de Implementacion de VLANs

Esta seccion documenta la implementacion de VLANs en los dispositivos intermediarios de la sede Puno. Los dispositivos finales no crean VLANs; pertenecen a una VLAN segun el puerto access del switch donde estan conectados.

## 1. CORE - MS1_CORE_PUNO

El core mantiene todas las VLAN de la sede porque concentra el enrutamiento InterVLAN mediante SVIs.

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 10
name VLADM
exit

vlan 40
name VLFIN
exit

vlan 80
name VLWFEJE
exit

vlan 50
name VLMAR
exit

vlan 20
name VLLOG
exit

vlan 70
name VLWFCLI
exit

vlan 60
name VLSER
exit

vlan 99
name VLNAT
exit

```

### Troncales del core

```ios
interface GigabitEthernet1/0/2
description Trunk hacia MS2_WIFI_PUNO
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 80,70,99
no shutdown
exit

interface GigabitEthernet1/0/3
description Trunk hacia MS3_DIST_PUNO
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/4
description Trunk hacia MS4_DIST_PUNO
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

end
```

## 2. SWITCH WIFI - MS2_WIFI_PUNO

El switch WiFi solo transporta las VLAN de WiFi y la VLAN nativa 99 en el enlace troncal.

```ios
enable
configure terminal

vlan 80
name VLWFEJE
exit

vlan 70
name VLWFCLI
exit

vlan 99
name VLNAT
exit

```

### Trunk hacia el core

```ios
interface GigabitEthernet1/0/1
description Trunk hacia MS1_CORE_PUNO
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 80,70,99
no shutdown
exit
```

### Puertos access hacia APs

```ios
interface GigabitEthernet1/0/2
description AP_CLIENTE_PUNO
switchport mode access
switchport access vlan 70
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/3
description AP_EJECUTIVO_PUNO
switchport mode access
switchport access vlan 80
spanning-tree portfast
no shutdown
exit

end
```

## 3. DISTRIBUCION - MS3_DIST_PUNO

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 10
name VLADM
exit

vlan 40
name VLFIN
exit

vlan 80
name VLWFEJE
exit

vlan 50
name VLMAR
exit

vlan 20
name VLLOG
exit

vlan 70
name VLWFCLI
exit

vlan 60
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
description WEB_PUNO
switchport mode access
switchport access vlan 60
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description DNS_PUNO
switchport mode access
switchport access vlan 60
spanning-tree portfast
no shutdown
exit

end
```

## 4. DISTRIBUCION - MS4_DIST_PUNO

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 10
name VLADM
exit

vlan 40
name VLFIN
exit

vlan 80
name VLWFEJE
exit

vlan 50
name VLMAR
exit

vlan 20
name VLLOG
exit

vlan 70
name VLWFCLI
exit

vlan 60
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
description DHCP_PUNO
switchport mode access
switchport access vlan 60
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description FTP_PUNO
switchport mode access
switchport access vlan 60
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/12
description MAIL_PUNO
switchport mode access
switchport access vlan 60
spanning-tree portfast
no shutdown
exit

end
```

## 5. ACCESO - SW1_PUNO

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 10
name VLADM
exit

vlan 40
name VLFIN
exit

vlan 80
name VLWFEJE
exit

vlan 50
name VLMAR
exit

vlan 20
name VLLOG
exit

vlan 70
name VLWFCLI
exit

vlan 60
name VLSER
exit

vlan 99
name VLNAT
exit

```

### Troncales y puertos access

```ios
interface range GigabitEthernet0/1 - 2
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface FastEthernet0/1
switchport mode access
switchport access vlan 30
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
switchport mode access
switchport access vlan 10
spanning-tree portfast
no shutdown
exit

end
```

## 6. ACCESO - SW2_PUNO

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 10
name VLADM
exit

vlan 40
name VLFIN
exit

vlan 80
name VLWFEJE
exit

vlan 50
name VLMAR
exit

vlan 20
name VLLOG
exit

vlan 70
name VLWFCLI
exit

vlan 60
name VLSER
exit

vlan 99
name VLNAT
exit

```

### Troncales y puertos access

```ios
interface range GigabitEthernet0/1 - 2
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface FastEthernet0/1
switchport mode access
switchport access vlan 30
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
switchport mode access
switchport access vlan 30
spanning-tree portfast
no shutdown
exit

end
```

## 7. ACCESO - SW3_PUNO

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 10
name VLADM
exit

vlan 40
name VLFIN
exit

vlan 80
name VLWFEJE
exit

vlan 50
name VLMAR
exit

vlan 20
name VLLOG
exit

vlan 70
name VLWFCLI
exit

vlan 60
name VLSER
exit

vlan 99
name VLNAT
exit

```

### Troncales y puertos access

```ios
interface range GigabitEthernet0/1 - 2
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface FastEthernet0/1
switchport mode access
switchport access vlan 20
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
switchport mode access
switchport access vlan 50
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/3
switchport mode access
switchport access vlan 40
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/4
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
| 30 | VLVEN | Ventas |
| 10 | VLADM | Administracion |
| 40 | VLFIN | Finanzas |
| 80 | VLWFEJE | WiFi Ejecutivos |
| 50 | VLMAR | Marketing |
| 20 | VLLOG | Logistica |
| 70 | VLWFCLI | WiFi Clientes |
| 60 | VLSER | Servidores |
| 99 | VLNAT | Nativa/Gestion |
