# Capítulo 3: Implementación de la solución

## 3.2 Implementación de VLANs

## 3.2.3 Sede Sucursal 2 Ica

En la sede Ica se implementaron VLANs para separar el tráfico de usuarios, WiFi, servidores y gestión. La VLAN `99` se configuró como VLAN nativa y de gestión.

| VLAN ID | Nombre de VLAN | Unidad organizacional |
|---:|---|---|
| 20 | VLVEN | Ventas |
| 21 | VLADM | Administración |
| 22 | VLFIN | Finanzas |
| 23 | VLWFEJE | WiFi Ejecutivos |
| 24 | VLMAR | Marketing |
| 25 | VLLOG | Logística |
| 26 | VLWFCLI | WiFi Clientes |
| 27 | VLSER | Servidores |
| 99 | VLNAT | Nativa/Gestión |

```text
! =========================
! MS1_CORE_ICA
! =========================
enable
configure terminal
hostname MS1_CORE_ICA
no ip domain-lookup
no ip routing

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
vlan 26
 name VLWFCLI
exit
vlan 27
 name VLSER
exit
vlan 99
 name VLNAT
exit

spanning-tree vlan 20,21,22,23,24,25,26,27,99 root primary

interface GigabitEthernet1/0/1
 description Trunk hacia ROUTER_ICA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 20,21,22,23,24,25,26,27,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia MS2_WIFI_ICA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 23,26,99
 no shutdown
exit

interface range GigabitEthernet1/0/3 - 4
 description Trunks hacia distribucion
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 20,21,22,24,25,27,99
 no shutdown
exit
end
write memory

! =========================
! MS2_WIFI_ICA
! =========================
enable
configure terminal
hostname MS2_WIFI_ICA
no ip domain-lookup

vlan 23
 name VLWFEJE
exit
vlan 26
 name VLWFCLI
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_ICA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 23,26,99
 no shutdown
exit

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
write memory

! =========================
! MS3_DIST_ICA / MS4_DIST_ICA
! =========================
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
vlan 24
 name VLMAR
exit
vlan 25
 name VLLOG
exit
vlan 27
 name VLSER
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_ICA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 20,21,22,24,25,27,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia SW1_ICA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 20,21,99
 no shutdown
exit

interface GigabitEthernet1/0/3
 description Trunk hacia SW2_ICA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 20,99
 no shutdown
exit

interface GigabitEthernet1/0/4
 description Trunk hacia SW3_ICA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 22,24,25,99
 no shutdown
exit

interface range GigabitEthernet1/0/10 - 12
 description Servidores VLAN 27
 switchport mode access
 switchport access vlan 27
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW1_ICA
! =========================
enable
configure terminal
hostname SW1_ICA
no ip domain-lookup

vlan 20
 name VLVEN
exit
vlan 21
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
 switchport trunk allowed vlan 20,21,99
 no shutdown
exit

interface FastEthernet0/1
 description PC_VENTAS_1_ICA
 switchport mode access
 switchport access vlan 20
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/2
 description PC_ADMINISTRACION_ICA
 switchport mode access
 switchport access vlan 21
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW2_ICA
! =========================
enable
configure terminal
hostname SW2_ICA
no ip domain-lookup

vlan 20
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
 switchport trunk allowed vlan 20,99
 no shutdown
exit

interface range FastEthernet0/1 - 2
 description PCs_VENTAS_ICA
 switchport mode access
 switchport access vlan 20
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW3_ICA
! =========================
enable
configure terminal
hostname SW3_ICA
no ip domain-lookup

vlan 22
 name VLFIN
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

interface range GigabitEthernet0/1 - 2
 description Trunks hacia distribucion
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 22,24,25,99
 no shutdown
exit

interface FastEthernet0/1
 description PC_LOGISTICA_ICA
 switchport mode access
 switchport access vlan 25
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/2
 description PC_MARKETING_ICA
 switchport mode access
 switchport access vlan 24
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/3
 description PC_FINANZAS_ICA
 switchport mode access
 switchport access vlan 22
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/4
 description PC_ADMIN_ICA
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

La implementación cumple si `show vlan brief` muestra las VLAN `20, 21, 22, 23, 24, 25, 26, 27 y 99`, si `show interfaces trunk` muestra la VLAN nativa `99` y si los puertos de usuario aparecen asignados a su VLAN correspondiente.
