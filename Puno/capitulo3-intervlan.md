# Capítulo 3: Implementación de la solución

## 3.3 Implementación de enrutamiento InterVLAN

## 3.3.5 Sede Sucursal 4 Puno

En la sede Puno se implementó el enrutamiento InterVLAN mediante router-on-a-stick. El router `ROUTER_PUNO` utiliza subinterfaces sobre `GigabitEthernet0/0`, y el enlace hacia `MS1_CORE_PUNO` se configuró como trunk 802.1Q.

| VLAN ID | Unidad organizacional | Subinterfaz | Gateway |
|---:|---|---|---:|
| 50 | Ventas | G0/0.50 | 10.192.56.1 |
| 51 | Administración | G0/0.51 | 10.192.56.65 |
| 52 | Finanzas | G0/0.52 | 10.192.56.97 |
| 53 | WiFi Ejecutivos | G0/0.53 | 10.192.56.113 |
| 54 | Marketing | G0/0.54 | 10.192.56.145 |
| 56 | Logística | G0/0.56 | 10.192.56.161 |
| 57 | WiFi Clientes | G0/0.57 | 10.192.56.177 |
| 58 | Servidores | G0/0.58 | 10.192.56.193 |
| 99 | Nativa/Gestión | G0/0.99 | 10.192.56.129 |

```text
! =========================
! ROUTER_PUNO
! Router-on-a-stick para InterVLAN
! =========================
enable
configure terminal
hostname ROUTER_PUNO
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk hacia MS1_CORE_PUNO
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.50
 description Gateway VLAN 50 - Ventas
 encapsulation dot1Q 50
 ip address 10.192.56.1 255.255.255.192
exit

interface GigabitEthernet0/0.51
 description Gateway VLAN 51 - Administracion
 encapsulation dot1Q 51
 ip address 10.192.56.65 255.255.255.224
exit

interface GigabitEthernet0/0.52
 description Gateway VLAN 52 - Finanzas
 encapsulation dot1Q 52
 ip address 10.192.56.97 255.255.255.240
exit

interface GigabitEthernet0/0.53
 description Gateway VLAN 53 - WiFi Ejecutivos
 encapsulation dot1Q 53
 ip address 10.192.56.113 255.255.255.240
exit

interface GigabitEthernet0/0.99
 description Gateway VLAN 99 - Nativa/Gestion
 encapsulation dot1Q 99 native
 ip address 10.192.56.129 255.255.255.240
exit

interface GigabitEthernet0/0.54
 description Gateway VLAN 54 - Marketing
 encapsulation dot1Q 54
 ip address 10.192.56.145 255.255.255.240
exit

interface GigabitEthernet0/0.56
 description Gateway VLAN 56 - Logistica
 encapsulation dot1Q 56
 ip address 10.192.56.161 255.255.255.240
exit

interface GigabitEthernet0/0.57
 description Gateway VLAN 57 - WiFi Clientes
 encapsulation dot1Q 57
 ip address 10.192.56.177 255.255.255.240
exit

interface GigabitEthernet0/0.58
 description Gateway VLAN 58 - Servidores
 encapsulation dot1Q 58
 ip address 10.192.56.193 255.255.255.240
exit

end
write memory

! =========================
! MS1_CORE_PUNO
! Trunk hacia ROUTER_PUNO
! =========================
enable
configure terminal
hostname MS1_CORE_PUNO

interface GigabitEthernet1/0/1
 description Trunk router-on-a-stick hacia ROUTER_PUNO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 50,51,52,53,54,56,57,58,99
 no shutdown
exit

end
write memory
```

## Comandos de verificación rápidos

En `ROUTER_PUNO`:

```text
enable
show ip interface brief
show ip route connected
```

En `MS1_CORE_PUNO`:

```text
enable
show interfaces trunk
show vlan brief
```

Pruebas desde PCs de diferentes VLAN:

```text
PC_VENTAS_1_PUNO> ping 10.192.56.74
PC_ADMINISTRACION_PUNO> ping 10.192.56.98
PC_FINANZAS_PUNO> ping 10.192.56.146
PC_MARKETING_PUNO> ping 10.192.56.162
PC_ADMIN_PUNO> ping 10.192.56.194
```

La implementación cumple si las subinterfaces aparecen `up/up`, si las redes VLAN figuran como conectadas en `show ip route connected`, si el trunk permite las VLAN `50,51,52,53,54,56,57,58,99`, y si existe comunicación entre VLANs mediante ping.
