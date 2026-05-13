# Sede Huanuco

## Scripts de Implementacion de VLANs

Esta seccion documenta la implementacion de VLANs en los dispositivos intermediarios de la sede Huanuco. Los dispositivos finales no crean VLANs; pertenecen a una VLAN segun el puerto access del switch donde estan conectados.

## 1. CORE - MS1_CORE_HUANUCO

El core mantiene todas las VLAN de la sede porque concentra el enrutamiento InterVLAN mediante SVIs.

```ios
enable
configure terminal

vlan 40
name VLVEN
exit

vlan 41
name VLADM
exit

vlan 42
name VLFIN
exit

vlan 43
name VLWFEJE
exit

vlan 44
name VLMAR
exit

vlan 45
name VLLOG
exit

vlan 46
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 47
name VLSER
exit

```

### Troncales del core

```ios
interface GigabitEthernet1/0/2
description Trunk hacia MS2_WIFI_HUANUCO
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 43,46,99
no shutdown
exit

interface GigabitEthernet1/0/3
description Trunk hacia MS3_DIST_HUANUCO
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/4
description Trunk hacia MS4_DIST_HUANUCO
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

end
```

## 2. SWITCH WIFI - MS2_WIFI_HUANUCO

El switch WiFi solo transporta las VLAN de WiFi y la VLAN nativa 99 en el enlace troncal.

```ios
enable
configure terminal

vlan 43
name VLWFEJE
exit

vlan 46
name VLWFCLI
exit

vlan 99
name VLNAT
exit

```

### Trunk hacia el core

```ios
interface GigabitEthernet1/0/1
description Trunk hacia MS1_CORE_HUANUCO
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 43,46,99
no shutdown
exit
```

### Puertos access hacia APs

```ios
interface GigabitEthernet1/0/2
description AP_CLIENTE_HUANUCO
switchport mode access
switchport access vlan 46
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/3
description AP_EJECUTIVO_HUANUCO
switchport mode access
switchport access vlan 43
spanning-tree portfast
no shutdown
exit

end
```

## 3. DISTRIBUCION - MS3_DIST_HUANUCO

```ios
enable
configure terminal

vlan 40
name VLVEN
exit

vlan 41
name VLADM
exit

vlan 42
name VLFIN
exit

vlan 43
name VLWFEJE
exit

vlan 44
name VLMAR
exit

vlan 45
name VLLOG
exit

vlan 46
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 47
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
description WEB_HUANUCO
switchport mode access
switchport access vlan 47
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description DNS_HUANUCO
switchport mode access
switchport access vlan 47
spanning-tree portfast
no shutdown
exit

end
```

## 4. DISTRIBUCION - MS4_DIST_HUANUCO

```ios
enable
configure terminal

vlan 40
name VLVEN
exit

vlan 41
name VLADM
exit

vlan 42
name VLFIN
exit

vlan 43
name VLWFEJE
exit

vlan 44
name VLMAR
exit

vlan 45
name VLLOG
exit

vlan 46
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 47
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
description DHCP_HUANUCO
switchport mode access
switchport access vlan 47
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description FTP_HUANUCO
switchport mode access
switchport access vlan 47
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/12
description MAIL_HUANUCO
switchport mode access
switchport access vlan 47
spanning-tree portfast
no shutdown
exit

end
```

## 5. ACCESO - SW1_HUANUCO

```ios
enable
configure terminal

vlan 40
name VLVEN
exit

vlan 41
name VLADM
exit

vlan 42
name VLFIN
exit

vlan 43
name VLWFEJE
exit

vlan 44
name VLMAR
exit

vlan 45
name VLLOG
exit

vlan 46
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 47
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
switchport access vlan 40
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
switchport mode access
switchport access vlan 41
spanning-tree portfast
no shutdown
exit

end
```

## 6. ACCESO - SW2_HUANUCO

```ios
enable
configure terminal

vlan 40
name VLVEN
exit

vlan 41
name VLADM
exit

vlan 42
name VLFIN
exit

vlan 43
name VLWFEJE
exit

vlan 44
name VLMAR
exit

vlan 45
name VLLOG
exit

vlan 46
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 47
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
switchport access vlan 40
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
switchport mode access
switchport access vlan 40
spanning-tree portfast
no shutdown
exit

end
```

## 7. ACCESO - SW3_HUANUCO

```ios
enable
configure terminal

vlan 40
name VLVEN
exit

vlan 41
name VLADM
exit

vlan 42
name VLFIN
exit

vlan 43
name VLWFEJE
exit

vlan 44
name VLMAR
exit

vlan 45
name VLLOG
exit

vlan 46
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 47
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
switchport access vlan 45
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
switchport mode access
switchport access vlan 44
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/3
switchport mode access
switchport access vlan 42
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
| 40 | VLVEN | Ventas |
| 41 | VLADM | Administracion |
| 42 | VLFIN | Finanzas |
| 43 | VLWFEJE | WiFi Ejecutivos |
| 44 | VLMAR | Marketing |
| 45 | VLLOG | Logistica |
| 46 | VLWFCLI | WiFi Clientes |
| 99 | VLNAT | Nativa/Gestion |
| 47 | VLSER | Servidores |
