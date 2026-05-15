# Capítulo 3: Implementación de la solución

## 3.3 Implementación de enrutamiento InterVLAN

## 3.3.3 Sede Sucursal 2 Ica

En la sede Ica se implementó el enrutamiento InterVLAN mediante router-on-a-stick. El router `ROUTER_ICA` utiliza subinterfaces sobre `GigabitEthernet0/0` para funcionar como gateway de cada VLAN.

| VLAN ID | Unidad organizacional | Subinterfaz | Gateway |
|---:|---|---|---:|
| 20 | Ventas | G0/0.20 | 10.192.48.1 |
| 21 | Administración | G0/0.21 | 10.192.48.129 |
| 22 | Finanzas | G0/0.22 | 10.192.48.193 |
| 23 | WiFi Ejecutivos | G0/0.23 | 10.192.48.225 |
| 24 | Marketing | G0/0.24 | 10.192.49.1 |
| 25 | Logística | G0/0.25 | 10.192.49.17 |
| 26 | WiFi Clientes | G0/0.26 | 10.192.49.49 |
| 27 | Servidores | G0/0.27 | 10.192.49.65 |
| 99 | Nativa/Gestión | G0/0.99 | 10.192.49.33 |

```text
! =========================
! ROUTER_ICA
! Router-on-a-stick para InterVLAN
! =========================
enable
configure terminal
hostname ROUTER_ICA
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk hacia MS1_CORE_ICA
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.20
 description Gateway VLAN 20 - Ventas
 encapsulation dot1Q 20
 ip address 10.192.48.1 255.255.255.128
exit

interface GigabitEthernet0/0.21
 description Gateway VLAN 21 - Administracion
 encapsulation dot1Q 21
 ip address 10.192.48.129 255.255.255.192
exit

interface GigabitEthernet0/0.22
 description Gateway VLAN 22 - Finanzas
 encapsulation dot1Q 22
 ip address 10.192.48.193 255.255.255.224
exit

interface GigabitEthernet0/0.23
 description Gateway VLAN 23 - WiFi Ejecutivos
 encapsulation dot1Q 23
 ip address 10.192.48.225 255.255.255.224
exit

interface GigabitEthernet0/0.24
 description Gateway VLAN 24 - Marketing
 encapsulation dot1Q 24
 ip address 10.192.49.1 255.255.255.240
exit

interface GigabitEthernet0/0.25
 description Gateway VLAN 25 - Logistica
 encapsulation dot1Q 25
 ip address 10.192.49.17 255.255.255.240
exit

interface GigabitEthernet0/0.99
 description Gateway VLAN 99 - Nativa/Gestion
 encapsulation dot1Q 99 native
 ip address 10.192.49.33 255.255.255.240
exit

interface GigabitEthernet0/0.26
 description Gateway VLAN 26 - WiFi Clientes
 encapsulation dot1Q 26
 ip address 10.192.49.49 255.255.255.240
exit

interface GigabitEthernet0/0.27
 description Gateway VLAN 27 - Servidores
 encapsulation dot1Q 27
 ip address 10.192.49.65 255.255.255.240
exit

end
write memory

! =========================
! MS1_CORE_ICA
! Trunk hacia ROUTER_ICA
! =========================
enable
configure terminal
hostname MS1_CORE_ICA

interface GigabitEthernet1/0/1
 description Trunk router-on-a-stick hacia ROUTER_ICA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 20,21,22,23,24,25,26,27,99
 no shutdown
exit

end
write memory
```

## Comandos de verificación rápidos

En `ROUTER_ICA`:

```text
enable
show ip interface brief
show ip route connected
```

En `MS1_CORE_ICA`:

```text
enable
show interfaces trunk
show vlan brief
```

Pruebas desde PCs de diferentes VLAN:

```text
PC_VENTAS_1_ICA> ping 10.192.48.138
PC_ADMINISTRACION_ICA> ping 10.192.48.194
PC_FINANZAS_ICA> ping 10.192.49.2
PC_MARKETING_ICA> ping 10.192.49.18
PC_ADMIN_ICA> ping 10.192.49.66
```

La implementación cumple si las subinterfaces aparecen `up/up`, si las redes VLAN figuran como conectadas en `show ip route connected`, si el trunk permite las VLAN `20,21,22,23,24,25,26,27,99`, y si existe comunicación entre VLANs mediante ping.
