# Sede Ica

## Scripts de Implementacion de VLANs

Esta seccion documenta la implementacion de VLANs en los dispositivos intermediarios de la sede Ica. Los dispositivos finales no crean VLANs; pertenecen a una VLAN segun el puerto access del switch donde estan conectados.

## 1. CORE - MS1_CORE_ICA

El core mantiene todas las VLAN de la sede porque concentra el enrutamiento InterVLAN mediante SVIs.

```ios
enable
configure terminal

vlan 20
name VLVEN
exit

vlan 21
name VLADM
exit

vlan 22
name VLFIN
exit

vlan 23
name VLWFEJE
exit

vlan 24
name VLMAR
exit

vlan 25
name VLLOG
exit

vlan 99
name VLNAT
exit

vlan 26
name VLWFCLI
exit

vlan 27
name VLSER
exit

```

### Troncales del core

```ios
interface GigabitEthernet1/0/2
description Trunk hacia MS2_WIFI_ICA
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 23,26,99
no shutdown
exit

interface GigabitEthernet1/0/3
description Trunk hacia MS3_DIST_ICA
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/4
description Trunk hacia MS4_DIST_ICA
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

end
```

## 2. SWITCH WIFI - MS2_WIFI_ICA

El switch WiFi solo transporta las VLAN de WiFi y la VLAN nativa 99 en el enlace troncal.

```ios
enable
configure terminal

vlan 23
name VLWFEJE
exit

vlan 26
name VLWFCLI
exit

vlan 99
name VLNAT
exit

```

### Trunk hacia el core

```ios
interface GigabitEthernet1/0/1
description Trunk hacia MS1_CORE_ICA
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 23,26,99
no shutdown
exit
```

### Puertos access hacia APs

```ios
interface GigabitEthernet1/0/2
description AP_CLIENTE_ICA
switchport mode access
switchport access vlan 26
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/3
description AP_EJECUTIVO_ICA
switchport mode access
switchport access vlan 23
spanning-tree portfast
no shutdown
exit

end
```

## 3. DISTRIBUCION - MS3_DIST_ICA

```ios
enable
configure terminal

vlan 20
name VLVEN
exit

vlan 21
name VLADM
exit

vlan 22
name VLFIN
exit

vlan 23
name VLWFEJE
exit

vlan 24
name VLMAR
exit

vlan 25
name VLLOG
exit

vlan 99
name VLNAT
exit

vlan 26
name VLWFCLI
exit

vlan 27
name VLSER
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
description WEB_ICA
switchport mode access
switchport access vlan 27
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description DNS_ICA
switchport mode access
switchport access vlan 27
spanning-tree portfast
no shutdown
exit

end
```

## 4. DISTRIBUCION - MS4_DIST_ICA

```ios
enable
configure terminal

vlan 20
name VLVEN
exit

vlan 21
name VLADM
exit

vlan 22
name VLFIN
exit

vlan 23
name VLWFEJE
exit

vlan 24
name VLMAR
exit

vlan 25
name VLLOG
exit

vlan 99
name VLNAT
exit

vlan 26
name VLWFCLI
exit

vlan 27
name VLSER
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
description DHCP_ICA
switchport mode access
switchport access vlan 27
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description FTP_ICA
switchport mode access
switchport access vlan 27
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/12
description MAIL_ICA
switchport mode access
switchport access vlan 27
spanning-tree portfast
no shutdown
exit

end
```

## 5. ACCESO - SW1_ICA

```ios
enable
configure terminal

vlan 20
name VLVEN
exit

vlan 21
name VLADM
exit

vlan 22
name VLFIN
exit

vlan 23
name VLWFEJE
exit

vlan 24
name VLMAR
exit

vlan 25
name VLLOG
exit

vlan 99
name VLNAT
exit

vlan 26
name VLWFCLI
exit

vlan 27
name VLSER
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
switchport access vlan 21
spanning-tree portfast
no shutdown
exit

end
```

## 6. ACCESO - SW2_ICA

```ios
enable
configure terminal

vlan 20
name VLVEN
exit

vlan 21
name VLADM
exit

vlan 22
name VLFIN
exit

vlan 23
name VLWFEJE
exit

vlan 24
name VLMAR
exit

vlan 25
name VLLOG
exit

vlan 99
name VLNAT
exit

vlan 26
name VLWFCLI
exit

vlan 27
name VLSER
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
switchport access vlan 20
spanning-tree portfast
no shutdown
exit

end
```

## 7. ACCESO - SW3_ICA

```ios
enable
configure terminal

vlan 20
name VLVEN
exit

vlan 21
name VLADM
exit

vlan 22
name VLFIN
exit

vlan 23
name VLWFEJE
exit

vlan 24
name VLMAR
exit

vlan 25
name VLLOG
exit

vlan 99
name VLNAT
exit

vlan 26
name VLWFCLI
exit

vlan 27
name VLSER
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
switchport access vlan 25
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
switchport mode access
switchport access vlan 24
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/3
switchport mode access
switchport access vlan 22
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
| 20 | VLVEN | Ventas |
| 21 | VLADM | Administracion |
| 22 | VLFIN | Finanzas |
| 23 | VLWFEJE | WiFi Ejecutivos |
| 24 | VLMAR | Marketing |
| 25 | VLLOG | Logistica |
| 99 | VLNAT | Nativa/Gestion |
| 26 | VLWFCLI | WiFi Clientes |
| 27 | VLSER | Servidores |
