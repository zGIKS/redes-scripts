# Capítulo 3: Implementación de la solución

## 3.3 Implementación de enrutamiento InterVLAN

## 3.3.4 Sede Sucursal 3 Huánuco

En la sede Huánuco se implementó el enrutamiento InterVLAN mediante router-on-a-stick. El router `ROUTER_HUANUCO` utiliza subinterfaces sobre `GigabitEthernet0/0`, cada una asociada a una VLAN.

| VLAN ID | Unidad organizacional | Subinterfaz | Gateway |
|---:|---|---|---:|
| 40 | Ventas | G0/0.40 | 10.192.52.1 |
| 41 | Administración | G0/0.41 | 10.192.52.33 |
| 42 | Finanzas | G0/0.42 | 10.192.52.65 |
| 43 | WiFi Ejecutivos | G0/0.43 | 10.192.52.97 |
| 44 | Marketing | G0/0.44 | 10.192.52.113 |
| 45 | Logística | G0/0.45 | 10.192.52.129 |
| 46 | WiFi Clientes | G0/0.46 | 10.192.52.145 |
| 47 | Servidores | G0/0.47 | 10.192.52.177 |
| 99 | Nativa/Gestión | G0/0.99 | 10.192.52.161 |

```text
! =========================
! ROUTER_HUANUCO
! Router-on-a-stick para InterVLAN
! =========================
enable
configure terminal
hostname ROUTER_HUANUCO
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk hacia MS1_CORE_HUANUCO
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.40
 description Gateway VLAN 40 - Ventas
 encapsulation dot1Q 40
 ip address 10.192.52.1 255.255.255.224
exit

interface GigabitEthernet0/0.41
 description Gateway VLAN 41 - Administracion
 encapsulation dot1Q 41
 ip address 10.192.52.33 255.255.255.224
exit

interface GigabitEthernet0/0.42
 description Gateway VLAN 42 - Finanzas
 encapsulation dot1Q 42
 ip address 10.192.52.65 255.255.255.224
exit

interface GigabitEthernet0/0.43
 description Gateway VLAN 43 - WiFi Ejecutivos
 encapsulation dot1Q 43
 ip address 10.192.52.97 255.255.255.240
exit

interface GigabitEthernet0/0.44
 description Gateway VLAN 44 - Marketing
 encapsulation dot1Q 44
 ip address 10.192.52.113 255.255.255.240
exit

interface GigabitEthernet0/0.45
 description Gateway VLAN 45 - Logistica
 encapsulation dot1Q 45
 ip address 10.192.52.129 255.255.255.240
exit

interface GigabitEthernet0/0.46
 description Gateway VLAN 46 - WiFi Clientes
 encapsulation dot1Q 46
 ip address 10.192.52.145 255.255.255.240
exit

interface GigabitEthernet0/0.99
 description Gateway VLAN 99 - Nativa/Gestion
 encapsulation dot1Q 99 native
 ip address 10.192.52.161 255.255.255.240
exit

interface GigabitEthernet0/0.47
 description Gateway VLAN 47 - Servidores
 encapsulation dot1Q 47
 ip address 10.192.52.177 255.255.255.240
exit

end
write memory

! =========================
! MS1_CORE_HUANUCO
! Trunk hacia ROUTER_HUANUCO
! =========================
enable
configure terminal
hostname MS1_CORE_HUANUCO

interface GigabitEthernet1/0/1
 description Trunk router-on-a-stick hacia ROUTER_HUANUCO
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 40,41,42,43,44,45,46,47,99
 no shutdown
exit

end
write memory
```

## Comandos de verificación rápidos

En `ROUTER_HUANUCO`:

```text
enable
show ip interface brief
show ip route connected
```

En `MS1_CORE_HUANUCO`:

```text
enable
show interfaces trunk
show vlan brief
```

Pruebas desde PCs de diferentes VLAN:

```text
PC_VENTAS_1_HUANUCO> ping 10.192.52.42
PC_ADMINISTRACION_HUANUCO> ping 10.192.52.66
PC_FINANZAS_HUANUCO> ping 10.192.52.114
PC_MARKETING_HUANUCO> ping 10.192.52.130
PC_ADMIN_HUANUCO> ping 10.192.52.178
```

La implementación cumple si las subinterfaces aparecen `up/up`, si las redes VLAN figuran como conectadas en `show ip route connected`, si el trunk permite las VLAN `40,41,42,43,44,45,46,47,99`, y si existe comunicación entre VLANs mediante ping.
