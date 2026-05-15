# Capítulo 3: Implementación de la solución

## 3.2 Implementación de VLANs

## 3.2.1 Sede Principal Lima

En la sede principal Lima se implementaron VLANs para separar el tráfico de las unidades organizacionales, redes inalámbricas, servidores y gestión. La VLAN `99` se configuró como VLAN nativa y de gestión.

| VLAN ID | Nombre de VLAN | Unidad organizacional |
|---:|---|---|
| 10 | VLVEN | Ventas |
| 11 | VLADM | Administración |
| 12 | VLFIN | Finanzas |
| 13 | VLWFEJE | WiFi Ejecutivos |
| 14 | VLMAR | Marketing |
| 15 | VLLOG | Logística |
| 16 | VLWFCLI | WiFi Clientes |
| 17 | VLSER | Servidores |
| 99 | VLNAT | Nativa/Gestión |

```text
! =========================
! MS1_CORE_LIMA
! =========================
enable
configure terminal
hostname MS1_CORE_LIMA
no ip domain-lookup
no ip routing

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

spanning-tree vlan 10,11,12,13,14,15,16,17,99 root primary

interface GigabitEthernet1/0/1
 description Trunk hacia ROUTER_LIMA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,11,12,13,14,15,16,17,99
 no shutdown
exit

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
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,11,12,14,15,17,99
 no shutdown
exit

interface GigabitEthernet1/0/4
 description Trunk hacia MS4_DIST_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,11,12,14,15,17,99
 no shutdown
exit

end
write memory

! =========================
! MS2_WIFI_LIMA
! =========================
enable
configure terminal
hostname MS2_WIFI_LIMA
no ip domain-lookup

vlan 13
 name VLWFEJE
exit
vlan 16
 name VLWFCLI
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 13,16,99
 no shutdown
exit

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
write memory

! =========================
! MS3_DIST_LIMA
! =========================
enable
configure terminal
hostname MS3_DIST_LIMA
no ip domain-lookup

vlan 10
 name VLVEN
exit
vlan 11
 name VLADM
exit
vlan 12
 name VLFIN
exit
vlan 14
 name VLMAR
exit
vlan 15
 name VLLOG
exit
vlan 17
 name VLSER
exit
vlan 99
 name VLNAT
exit

spanning-tree vlan 10,11,12,14,15,17,99 root secondary

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,11,12,14,15,17,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia SW1_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,11,99
 no shutdown
exit

interface GigabitEthernet1/0/3
 description Trunk hacia SW2_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,99
 no shutdown
exit

interface GigabitEthernet1/0/4
 description Trunk hacia SW3_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 12,14,15,99
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
write memory

! =========================
! MS4_DIST_LIMA
! =========================
enable
configure terminal
hostname MS4_DIST_LIMA
no ip domain-lookup

vlan 10
 name VLVEN
exit
vlan 11
 name VLADM
exit
vlan 12
 name VLFIN
exit
vlan 14
 name VLMAR
exit
vlan 15
 name VLLOG
exit
vlan 17
 name VLSER
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,11,12,14,15,17,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia SW1_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,11,99
 no shutdown
exit

interface GigabitEthernet1/0/3
 description Trunk hacia SW2_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,99
 no shutdown
exit

interface GigabitEthernet1/0/4
 description Trunk hacia SW3_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 12,14,15,99
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
write memory

! =========================
! SW1_LIMA
! =========================
enable
configure terminal
hostname SW1_LIMA
no ip domain-lookup

vlan 10
 name VLVEN
exit
vlan 11
 name VLADM
exit
vlan 99
 name VLNAT
exit

interface range GigabitEthernet0/1 - 2
 description Trunks hacia MS3_DIST_LIMA y MS4_DIST_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,11,99
 no shutdown
exit

interface FastEthernet0/1
 description PC_VENTAS_1
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/4
 description PC_ADMINISTRACION
 switchport mode access
 switchport access vlan 11
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/24
 description PC_ADMIN
 switchport mode access
 switchport access vlan 99
 spanning-tree portfast
 no shutdown
exit

end
write memory

! =========================
! SW2_LIMA
! =========================
enable
configure terminal
hostname SW2_LIMA
no ip domain-lookup

vlan 10
 name VLVEN
exit
vlan 99
 name VLNAT
exit

interface range GigabitEthernet0/1 - 2
 description Trunks hacia MS3_DIST_LIMA y MS4_DIST_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,99
 no shutdown
exit

interface range FastEthernet0/1 - 2
 description PCs_VENTAS
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/24
 description Puerto gestion VLAN 99
 switchport mode access
 switchport access vlan 99
 spanning-tree portfast
 no shutdown
exit

end
write memory

! =========================
! SW3_LIMA
! =========================
enable
configure terminal
hostname SW3_LIMA
no ip domain-lookup

vlan 12
 name VLFIN
exit
vlan 14
 name VLMAR
exit
vlan 15
 name VLLOG
exit
vlan 99
 name VLNAT
exit

interface range GigabitEthernet0/1 - 2
 description Trunks hacia MS3_DIST_LIMA y MS4_DIST_LIMA
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 12,14,15,99
 no shutdown
exit

interface FastEthernet0/8
 description PC_FINANZAS
 switchport mode access
 switchport access vlan 12
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/16
 description PC_MARKETING
 switchport mode access
 switchport access vlan 14
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/20
 description PC_LOGISTICA
 switchport mode access
 switchport access vlan 15
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/24
 description PC_ADMIN
 switchport mode access
 switchport access vlan 99
 spanning-tree portfast
 no shutdown
exit

end
write memory
```

## Comandos de verificación rápidos

En cada switch de Lima:

```text
enable
show vlan brief
show interfaces trunk
```

Para verificar puertos de acceso:

```text
show running-config interface FastEthernet0/1
show running-config interface FastEthernet0/2
show running-config interface FastEthernet0/4
show running-config interface FastEthernet0/8
show running-config interface FastEthernet0/16
show running-config interface FastEthernet0/20
show running-config interface FastEthernet0/24
```

Para verificar el trunk hacia el router y entre switches:

```text
show interfaces trunk
show spanning-tree vlan 99
```

La implementación cumple si `show vlan brief` muestra las VLAN `10, 11, 12, 13, 14, 15, 16, 17 y 99`, si `show interfaces trunk` muestra la VLAN nativa `99` y las VLAN permitidas correctas, y si los puertos de usuario aparecen en la VLAN correspondiente.
