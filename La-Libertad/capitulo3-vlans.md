# Capítulo 3: Implementación de la solución

## 3.2 Implementación de VLANs

## 3.2.2 Sede Sucursal 1 La Libertad

En la sede La Libertad se implementaron VLANs para separar las áreas cableadas, redes inalámbricas, servidores y gestión. La VLAN `99` se configuró como VLAN nativa y de gestión.

| VLAN ID | Nombre de VLAN | Unidad organizacional |
|---:|---|---|
| 30 | VLVEN | Ventas |
| 31 | VLADM | Administración |
| 32 | VLFIN | Finanzas |
| 33 | VLWFEJE | WiFi Ejecutivos |
| 34 | VLMAR | Marketing |
| 35 | VLLOG | Logística |
| 36 | VLWFCLI | WiFi Clientes |
| 37 | VLSER | Servidores |
| 99 | VLNAT | Nativa/Gestión |

```text
! =========================
! MS1_CORE_LA_LIBERTAD
! =========================
enable
configure terminal
hostname MS1_CORE_LA_LIBERTAD
no ip domain-lookup
no ip routing

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
vlan 37
 name VLSER
exit
vlan 99
 name VLNAT
exit

spanning-tree vlan 30,31,32,33,34,35,36,37,99 root primary

interface GigabitEthernet1/0/1
 description Trunk hacia ROUTER_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,31,32,33,34,35,36,37,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia MS2_WIFI_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 33,36,99
 no shutdown
exit

interface GigabitEthernet1/0/3
 description Trunk hacia MS3_DIST_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,31,32,34,35,37,99
 no shutdown
exit

interface GigabitEthernet1/0/4
 description Trunk hacia MS4_DIST_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,31,32,34,35,37,99
 no shutdown
exit
end
write memory

! =========================
! MS2_WIFI_LA_LIBERTAD
! =========================
enable
configure terminal
hostname MS2_WIFI_LA_LIBERTAD
no ip domain-lookup

vlan 33
 name VLWFEJE
exit
vlan 36
 name VLWFCLI
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 33,36,99
 no shutdown
exit

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
write memory

! =========================
! MS3_DIST_LA_LIBERTAD
! =========================
enable
configure terminal
hostname MS3_DIST_LA_LIBERTAD
no ip domain-lookup

vlan 30
 name VLVEN
exit
vlan 31
 name VLADM
exit
vlan 32
 name VLFIN
exit
vlan 34
 name VLMAR
exit
vlan 35
 name VLLOG
exit
vlan 37
 name VLSER
exit
vlan 99
 name VLNAT
exit

spanning-tree vlan 30,31,32,34,35,37,99 root secondary

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,31,32,34,35,37,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia SW1_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,31,99
 no shutdown
exit

interface GigabitEthernet1/0/3
 description Trunk hacia SW2_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,99
 no shutdown
exit

interface GigabitEthernet1/0/4
 description Trunk hacia SW3_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 32,34,35,99
 no shutdown
exit

interface range GigabitEthernet1/0/10 - 11
 description Servidores VLAN 37
 switchport mode access
 switchport access vlan 37
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! MS4_DIST_LA_LIBERTAD
! =========================
enable
configure terminal
hostname MS4_DIST_LA_LIBERTAD
no ip domain-lookup

vlan 30
 name VLVEN
exit
vlan 31
 name VLADM
exit
vlan 32
 name VLFIN
exit
vlan 34
 name VLMAR
exit
vlan 35
 name VLLOG
exit
vlan 37
 name VLSER
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,31,32,34,35,37,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia SW1_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,31,99
 no shutdown
exit

interface GigabitEthernet1/0/3
 description Trunk hacia SW2_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,99
 no shutdown
exit

interface GigabitEthernet1/0/4
 description Trunk hacia SW3_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 32,34,35,99
 no shutdown
exit

interface range GigabitEthernet1/0/10 - 12
 description Servidores VLAN 37
 switchport mode access
 switchport access vlan 37
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW1_LA_LIBERTAD
! =========================
enable
configure terminal
hostname SW1_LA_LIBERTAD
no ip domain-lookup

vlan 30
 name VLVEN
exit
vlan 31
 name VLADM
exit
vlan 99
 name VLNAT
exit

interface range GigabitEthernet0/1 - 2
 description Trunks hacia distribucion
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,31,99
 no shutdown
exit

interface FastEthernet0/1
 description PC_VENTAS_1_LA_LIBERTAD
 switchport mode access
 switchport access vlan 30
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/2
 description PC_ADMINISTRACION_LA_LIBERTAD
 switchport mode access
 switchport access vlan 31
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW2_LA_LIBERTAD
! =========================
enable
configure terminal
hostname SW2_LA_LIBERTAD
no ip domain-lookup

vlan 30
 name VLVEN
exit
vlan 99
 name VLNAT
exit

interface range GigabitEthernet0/1 - 2
 description Trunks hacia distribucion
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,99
 no shutdown
exit

interface range FastEthernet0/1 - 2
 description PCs_VENTAS_LA_LIBERTAD
 switchport mode access
 switchport access vlan 30
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW3_LA_LIBERTAD
! =========================
enable
configure terminal
hostname SW3_LA_LIBERTAD
no ip domain-lookup

vlan 32
 name VLFIN
exit
vlan 34
 name VLMAR
exit
vlan 35
 name VLLOG
exit
vlan 99
 name VLNAT
exit

interface range GigabitEthernet0/1 - 2
 description Trunks hacia distribucion
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 32,34,35,99
 no shutdown
exit

interface FastEthernet0/1
 description PC_LOGISTICA_LA_LIBERTAD
 switchport mode access
 switchport access vlan 35
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/2
 description PC_MARKETING_LA_LIBERTAD
 switchport mode access
 switchport access vlan 34
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/3
 description PC_FINANZAS_LA_LIBERTAD
 switchport mode access
 switchport access vlan 32
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/4
 description PC_ADMIN_LA_LIBERTAD
 switchport mode access
 switchport access vlan 99
 spanning-tree portfast
 no shutdown
exit
end
write memory
```

## Comandos de verificación rápidos

```text
enable
show vlan brief
show interfaces trunk
show spanning-tree vlan 99
```

La implementación cumple si `show vlan brief` muestra las VLAN `30, 31, 32, 33, 34, 35, 36, 37 y 99`, si `show interfaces trunk` muestra la VLAN nativa `99` y si los puertos de usuario aparecen asignados a su VLAN correspondiente.
