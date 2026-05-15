# Capítulo 3: Implementación de la solución

## 3.2 Implementación de VLANs

## 3.2.3 Sede Sucursal 3 Huánuco

En la sede Huánuco se implementaron VLANs para segmentar usuarios, redes inalámbricas, servidores y gestión. La VLAN `99` se configuró como VLAN nativa y de gestión.

| VLAN ID | Nombre de VLAN | Unidad organizacional |
|---:|---|---|
| 40 | VLVEN | Ventas |
| 41 | VLADM | Administración |
| 42 | VLFIN | Finanzas |
| 43 | VLWFEJE | WiFi Ejecutivos |
| 44 | VLMAR | Marketing |
| 45 | VLLOG | Logística |
| 46 | VLWFCLI | WiFi Clientes |
| 47 | VLSER | Servidores |
| 99 | VLNAT | Nativa/Gestión |

```text
! =========================
! MS1_CORE_HUANUCO
! =========================
enable
configure terminal
hostname MS1_CORE_HUANUCO
no ip domain-lookup
no ip routing

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
vlan 47
 name VLSER
exit
vlan 99
 name VLNAT
exit

spanning-tree vlan 40,41,42,43,44,45,46,47,99 root primary

interface GigabitEthernet1/0/1
 description Trunk hacia ROUTER_HUANUCO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 40,41,42,43,44,45,46,47,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia MS2_WIFI_HUANUCO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 43,46,99
 no shutdown
exit

interface range GigabitEthernet1/0/3 - 4
 description Trunks hacia distribucion
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 40,41,42,44,45,47,99
 no shutdown
exit
end
write memory

! =========================
! MS2_WIFI_HUANUCO
! =========================
enable
configure terminal
hostname MS2_WIFI_HUANUCO
no ip domain-lookup

vlan 43
 name VLWFEJE
exit
vlan 46
 name VLWFCLI
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_HUANUCO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 43,46,99
 no shutdown
exit

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
write memory

! =========================
! MS3_DIST_HUANUCO / MS4_DIST_HUANUCO
! =========================
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
vlan 44
 name VLMAR
exit
vlan 45
 name VLLOG
exit
vlan 47
 name VLSER
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_HUANUCO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 40,41,42,44,45,47,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia SW1_HUANUCO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 40,41,99
 no shutdown
exit

interface GigabitEthernet1/0/3
 description Trunk hacia SW2_HUANUCO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 40,99
 no shutdown
exit

interface GigabitEthernet1/0/4
 description Trunk hacia SW3_HUANUCO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 42,44,45,99
 no shutdown
exit

interface range GigabitEthernet1/0/10 - 12
 description Servidores VLAN 47
 switchport mode access
 switchport access vlan 47
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW1_HUANUCO
! =========================
enable
configure terminal
hostname SW1_HUANUCO
no ip domain-lookup

vlan 40
 name VLVEN
exit
vlan 41
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
 switchport trunk allowed vlan 40,41,99
 no shutdown
exit

interface FastEthernet0/1
 description PC_VENTAS_1_HUANUCO
 switchport mode access
 switchport access vlan 40
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/2
 description PC_ADMINISTRACION_HUANUCO
 switchport mode access
 switchport access vlan 41
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW2_HUANUCO
! =========================
enable
configure terminal
hostname SW2_HUANUCO
no ip domain-lookup

vlan 40
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
 switchport trunk allowed vlan 40,99
 no shutdown
exit

interface range FastEthernet0/1 - 2
 description PCs_VENTAS_HUANUCO
 switchport mode access
 switchport access vlan 40
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW3_HUANUCO
! =========================
enable
configure terminal
hostname SW3_HUANUCO
no ip domain-lookup

vlan 42
 name VLFIN
exit
vlan 44
 name VLMAR
exit
vlan 45
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
 switchport trunk allowed vlan 42,44,45,99
 no shutdown
exit

interface FastEthernet0/1
 description PC_LOGISTICA_HUANUCO
 switchport mode access
 switchport access vlan 45
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/2
 description PC_MARKETING_HUANUCO
 switchport mode access
 switchport access vlan 44
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/3
 description PC_FINANZAS_HUANUCO
 switchport mode access
 switchport access vlan 42
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/4
 description PC_ADMIN_HUANUCO
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

La implementación cumple si `show vlan brief` muestra las VLAN `40, 41, 42, 43, 44, 45, 46, 47 y 99`, si `show interfaces trunk` muestra la VLAN nativa `99` y si los puertos de usuario aparecen asignados a su VLAN correspondiente.
