# Capítulo 3: Implementación de la solución

## 3.2 Implementación de VLANs

## 3.2.3 Sede Sucursal 4 Puno

En la sede Puno se implementaron VLANs para segmentar usuarios, redes inalámbricas, servidores y gestión. La VLAN `99` se configuró como VLAN nativa y de gestión.

| VLAN ID | Nombre de VLAN | Unidad organizacional |
|---:|---|---|
| 50 | VLVEN | Ventas |
| 51 | VLADM | Administración |
| 52 | VLFIN | Finanzas |
| 53 | VLWFEJE | WiFi Ejecutivos |
| 54 | VLMAR | Marketing |
| 56 | VLLOG | Logística |
| 57 | VLWFCLI | WiFi Clientes |
| 58 | VLSER | Servidores |
| 99 | VLNAT | Nativa/Gestión |

```text
! =========================
! MS1_CORE_PUNO
! =========================
enable
configure terminal
hostname MS1_CORE_PUNO
no ip domain-lookup
no ip routing

vlan 50
 name VLVEN
exit
vlan 51
 name VLADM
exit
vlan 52
 name VLFIN
exit
vlan 53
 name VLWFEJE
exit
vlan 54
 name VLMAR
exit
vlan 56
 name VLLOG
exit
vlan 57
 name VLWFCLI
exit
vlan 58
 name VLSER
exit
vlan 99
 name VLNAT
exit

spanning-tree vlan 50,51,52,53,54,56,57,58,99 root primary

interface GigabitEthernet1/0/1
 description Trunk hacia ROUTER_PUNO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 50,51,52,53,54,56,57,58,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia MS2_WIFI_PUNO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 53,57,99
 no shutdown
exit

interface range GigabitEthernet1/0/3 - 4
 description Trunks hacia distribucion
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 50,51,52,54,56,58,99
 no shutdown
exit
end
write memory

! =========================
! MS2_WIFI_PUNO
! =========================
enable
configure terminal
hostname MS2_WIFI_PUNO
no ip domain-lookup

vlan 53
 name VLWFEJE
exit
vlan 57
 name VLWFCLI
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_PUNO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 53,57,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description AP_CLIENTE_PUNO
 switchport mode access
 switchport access vlan 57
 spanning-tree portfast
 no shutdown
exit

interface GigabitEthernet1/0/3
 description AP_EJECUTIVO_PUNO
 switchport mode access
 switchport access vlan 53
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! MS3_DIST_PUNO / MS4_DIST_PUNO
! =========================
enable
configure terminal
vlan 50
 name VLVEN
exit
vlan 51
 name VLADM
exit
vlan 52
 name VLFIN
exit
vlan 54
 name VLMAR
exit
vlan 56
 name VLLOG
exit
vlan 58
 name VLSER
exit
vlan 99
 name VLNAT
exit

interface GigabitEthernet1/0/1
 description Trunk hacia MS1_CORE_PUNO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 50,51,52,54,56,58,99
 no shutdown
exit

interface GigabitEthernet1/0/2
 description Trunk hacia SW1_PUNO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 50,51,99
 no shutdown
exit

interface GigabitEthernet1/0/3
 description Trunk hacia SW2_PUNO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 50,99
 no shutdown
exit

interface GigabitEthernet1/0/4
 description Trunk hacia SW3_PUNO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 52,54,56,99
 no shutdown
exit

interface range GigabitEthernet1/0/10 - 12
 description Servidores VLAN 58
 switchport mode access
 switchport access vlan 58
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW1_PUNO
! =========================
enable
configure terminal
hostname SW1_PUNO
no ip domain-lookup

vlan 50
 name VLVEN
exit
vlan 51
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
 switchport trunk allowed vlan 50,51,99
 no shutdown
exit

interface FastEthernet0/1
 description PC_VENTAS_1_PUNO
 switchport mode access
 switchport access vlan 50
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/2
 description PC_ADMINISTRACION_PUNO
 switchport mode access
 switchport access vlan 51
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW2_PUNO
! =========================
enable
configure terminal
hostname SW2_PUNO
no ip domain-lookup

vlan 50
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
 switchport trunk allowed vlan 50,99
 no shutdown
exit

interface range FastEthernet0/1 - 2
 description PCs_VENTAS_PUNO
 switchport mode access
 switchport access vlan 50
 spanning-tree portfast
 no shutdown
exit
end
write memory

! =========================
! SW3_PUNO
! =========================
enable
configure terminal
hostname SW3_PUNO
no ip domain-lookup

vlan 52
 name VLFIN
exit
vlan 54
 name VLMAR
exit
vlan 56
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
 switchport trunk allowed vlan 52,54,56,99
 no shutdown
exit

interface FastEthernet0/1
 description PC_LOGISTICA_PUNO
 switchport mode access
 switchport access vlan 56
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/2
 description PC_MARKETING_PUNO
 switchport mode access
 switchport access vlan 54
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/3
 description PC_FINANZAS_PUNO
 switchport mode access
 switchport access vlan 52
 spanning-tree portfast
 no shutdown
exit

interface FastEthernet0/4
 description PC_ADMIN_PUNO
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

La implementación cumple si `show vlan brief` muestra las VLAN `50, 51, 52, 53, 54, 56, 57, 58 y 99`, si `show interfaces trunk` muestra la VLAN nativa `99` y si los puertos de usuario aparecen asignados a su VLAN correspondiente.
