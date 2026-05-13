# Sede La Libertad

## Scripts de Implementacion de VLANs

Esta seccion documenta la implementacion de VLANs en los dispositivos intermediarios de la sede La Libertad. Los dispositivos finales no crean VLANs; pertenecen a una VLAN segun el puerto access del switch donde estan conectados.

## 1. CORE - MS1_CORE_LA_LIBERTAD

El core mantiene todas las VLAN de la sede porque concentra el enrutamiento InterVLAN mediante SVIs.

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 31
name VLADM
exit

vlan 32
name VLFIN
exit

vlan 33
name VLWFEJE
exit

vlan 34
name VLMAR
exit

vlan 35
name VLLOG
exit

vlan 36
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 37
name VLSER
exit

```

### Troncales del core

```ios
interface GigabitEthernet1/0/2
description Trunk hacia MS2_WIFI_LA_LIBERTAD
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 33,36,99
no shutdown
exit

interface GigabitEthernet1/0/3
description Trunk hacia MS3_DIST_LA_LIBERTAD
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

interface GigabitEthernet1/0/4
description Trunk hacia MS4_DIST_LA_LIBERTAD
switchport mode trunk
switchport trunk allowed vlan all
no shutdown
exit

end
```

## 2. SWITCH WIFI - MS2_WIFI_LA_LIBERTAD

El switch WiFi solo transporta las VLAN de WiFi y la VLAN nativa 99 en el enlace troncal.

```ios
enable
configure terminal

vlan 33
name VLWFEJE
exit

vlan 36
name VLWFCLI
exit

vlan 99
name VLNAT
exit

```

### Trunk hacia el core

```ios
interface GigabitEthernet1/0/1
description Trunk hacia MS1_CORE_LA_LIBERTAD
switchport mode trunk
switchport trunk native vlan 99
switchport trunk allowed vlan 33,36,99
no shutdown
exit
```

### Puertos access hacia APs

```ios
interface GigabitEthernet1/0/2
description AP_CLIENTE_LA_LIBERTAD
switchport mode access
switchport access vlan 36
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/3
description AP_EJECUTIVO_LA_LIBERTAD
switchport mode access
switchport access vlan 33
spanning-tree portfast
no shutdown
exit

end
```

## 3. DISTRIBUCION - MS3_DIST_LA_LIBERTAD

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 31
name VLADM
exit

vlan 32
name VLFIN
exit

vlan 33
name VLWFEJE
exit

vlan 34
name VLMAR
exit

vlan 35
name VLLOG
exit

vlan 36
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 37
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
description WEB_LA_LIBERTAD
switchport mode access
switchport access vlan 37
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description DNS_LA_LIBERTAD
switchport mode access
switchport access vlan 37
spanning-tree portfast
no shutdown
exit

end
```

## 4. DISTRIBUCION - MS4_DIST_LA_LIBERTAD

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 31
name VLADM
exit

vlan 32
name VLFIN
exit

vlan 33
name VLWFEJE
exit

vlan 34
name VLMAR
exit

vlan 35
name VLLOG
exit

vlan 36
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 37
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
description DHCP_LA_LIBERTAD
switchport mode access
switchport access vlan 37
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/11
description FTP_LA_LIBERTAD
switchport mode access
switchport access vlan 37
spanning-tree portfast
no shutdown
exit

interface GigabitEthernet1/0/12
description MAIL_LA_LIBERTAD
switchport mode access
switchport access vlan 37
spanning-tree portfast
no shutdown
exit

end
```

## 5. ACCESO - SW1_LA_LIBERTAD

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 31
name VLADM
exit

vlan 32
name VLFIN
exit

vlan 33
name VLWFEJE
exit

vlan 34
name VLMAR
exit

vlan 35
name VLLOG
exit

vlan 36
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 37
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
switchport access vlan 30
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
switchport mode access
switchport access vlan 31
spanning-tree portfast
no shutdown
exit

end
```

## 6. ACCESO - SW2_LA_LIBERTAD

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 31
name VLADM
exit

vlan 32
name VLFIN
exit

vlan 33
name VLWFEJE
exit

vlan 34
name VLMAR
exit

vlan 35
name VLLOG
exit

vlan 36
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 37
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

## 7. ACCESO - SW3_LA_LIBERTAD

```ios
enable
configure terminal

vlan 30
name VLVEN
exit

vlan 31
name VLADM
exit

vlan 32
name VLFIN
exit

vlan 33
name VLWFEJE
exit

vlan 34
name VLMAR
exit

vlan 35
name VLLOG
exit

vlan 36
name VLWFCLI
exit

vlan 99
name VLNAT
exit

vlan 37
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
switchport access vlan 35
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/2
switchport mode access
switchport access vlan 34
spanning-tree portfast
no shutdown
exit

interface FastEthernet0/3
switchport mode access
switchport access vlan 32
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
| 31 | VLADM | Administracion |
| 32 | VLFIN | Finanzas |
| 33 | VLWFEJE | WiFi Ejecutivos |
| 34 | VLMAR | Marketing |
| 35 | VLLOG | Logistica |
| 36 | VLWFCLI | WiFi Clientes |
| 99 | VLNAT | Nativa/Gestion |
| 37 | VLSER | Servidores |
