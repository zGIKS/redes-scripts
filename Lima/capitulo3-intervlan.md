# Capítulo 3: Implementación de la solución

## 3.3 Implementación de enrutamiento InterVLAN

## 3.3.1 Sede Principal Lima

En la sede principal Lima se implementó el enrutamiento InterVLAN mediante la técnica router-on-a-stick. Para ello, el enlace entre `ROUTER_LIMA` y `MS1_CORE_LIMA` funciona como trunk 802.1Q, y el router utiliza subinterfaces en `GigabitEthernet0/0` para actuar como gateway de cada VLAN.

| VLAN ID | Unidad organizacional | Subinterfaz | Gateway |
|---:|---|---|---:|
| 10 | Ventas | G0/0.10 | 10.192.40.1 |
| 11 | Administración | G0/0.11 | 10.192.41.1 |
| 12 | Finanzas | G0/0.12 | 10.192.41.129 |
| 13 | WiFi Ejecutivos | G0/0.13 | 10.192.41.193 |
| 14 | Marketing | G0/0.14 | 10.192.42.1 |
| 15 | Logística | G0/0.15 | 10.192.42.65 |
| 16 | WiFi Clientes | G0/0.16 | 10.192.42.129 |
| 17 | Servidores | G0/0.17 | 10.192.42.161 |
| 99 | Nativa/Gestión | G0/0.99 | 10.192.42.177 |

```text
! =========================
! ROUTER_LIMA
! Router-on-a-stick para InterVLAN
! =========================
enable
configure terminal
hostname ROUTER_LIMA
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk hacia MS1_CORE_LIMA
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.10
 description Gateway VLAN 10 - Ventas
 encapsulation dot1Q 10
 ip address 10.192.40.1 255.255.255.0
exit

interface GigabitEthernet0/0.11
 description Gateway VLAN 11 - Administracion
 encapsulation dot1Q 11
 ip address 10.192.41.1 255.255.255.128
exit

interface GigabitEthernet0/0.12
 description Gateway VLAN 12 - Finanzas
 encapsulation dot1Q 12
 ip address 10.192.41.129 255.255.255.192
exit

interface GigabitEthernet0/0.13
 description Gateway VLAN 13 - WiFi Ejecutivos
 encapsulation dot1Q 13
 ip address 10.192.41.193 255.255.255.192
exit

interface GigabitEthernet0/0.14
 description Gateway VLAN 14 - Marketing
 encapsulation dot1Q 14
 ip address 10.192.42.1 255.255.255.192
exit

interface GigabitEthernet0/0.15
 description Gateway VLAN 15 - Logistica
 encapsulation dot1Q 15
 ip address 10.192.42.65 255.255.255.192
exit

interface GigabitEthernet0/0.16
 description Gateway VLAN 16 - WiFi Clientes
 encapsulation dot1Q 16
 ip address 10.192.42.129 255.255.255.224
exit

interface GigabitEthernet0/0.17
 description Gateway VLAN 17 - Servidores
 encapsulation dot1Q 17
 ip address 10.192.42.161 255.255.255.240
exit

interface GigabitEthernet0/0.99
 description Gateway VLAN 99 - Nativa/Gestion
 encapsulation dot1Q 99 native
 ip address 10.192.42.177 255.255.255.240
exit

end
write memory

! =========================
! MS1_CORE_LIMA
! Trunk hacia ROUTER_LIMA
! =========================
enable
configure terminal
hostname MS1_CORE_LIMA

interface GigabitEthernet1/0/1
 description Trunk router-on-a-stick hacia ROUTER_LIMA
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,11,12,13,14,15,16,17,99
 no shutdown
exit

end
write memory
```

## Comandos de verificación rápidos

En `ROUTER_LIMA`:

```text
enable
show ip interface brief
show ip route connected
```

En `MS1_CORE_LIMA`:

```text
enable
show interfaces trunk
show vlan brief
```

Pruebas desde PCs de diferentes VLAN:

```text
PC_VENTAS_1> ping 10.192.41.10
PC_ADMINISTRACION> ping 10.192.41.130
PC_FINANZAS> ping 10.192.42.10
PC_MARKETING> ping 10.192.42.66
PC_ADMIN> ping 10.192.42.162
```

La implementación cumple si las subinterfaces del router aparecen en estado `up/up`, si `show ip route connected` muestra las redes de cada VLAN como directamente conectadas, si el enlace trunk permite las VLAN `10,11,12,13,14,15,16,17,99`, y si las PCs de VLANs diferentes pueden comunicarse mediante ping.
