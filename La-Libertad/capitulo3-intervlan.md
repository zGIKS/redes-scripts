# Capítulo 3: Implementación de la solución

## 3.3 Implementación de enrutamiento InterVLAN

## 3.3.2 Sede Sucursal 1 La Libertad

En la sede La Libertad se implementó el enrutamiento InterVLAN mediante router-on-a-stick. El router `ROUTER_LA_LIBERTAD` utiliza subinterfaces sobre `GigabitEthernet0/0`, y el enlace hacia `MS1_CORE_LA_LIBERTAD` funciona como trunk 802.1Q.

| VLAN ID | Unidad organizacional | Subinterfaz | Gateway |
|---:|---|---|---:|
| 30 | Ventas | G0/0.30 | 10.192.44.1 |
| 31 | Administración | G0/0.31 | 10.192.44.65 |
| 32 | Finanzas | G0/0.32 | 10.192.44.129 |
| 33 | WiFi Ejecutivos | G0/0.33 | 10.192.44.161 |
| 34 | Marketing | G0/0.34 | 10.192.44.177 |
| 35 | Logística | G0/0.35 | 10.192.44.193 |
| 36 | WiFi Clientes | G0/0.36 | 10.192.44.225 |
| 37 | Servidores | G0/0.37 | 10.192.44.241 |
| 99 | Nativa/Gestión | G0/0.99 | 10.192.44.209 |

```text
! =========================
! ROUTER_LA_LIBERTAD
! Router-on-a-stick para InterVLAN
! =========================
enable
configure terminal
hostname ROUTER_LA_LIBERTAD
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk hacia MS1_CORE_LA_LIBERTAD
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.30
 description Gateway VLAN 30 - Ventas
 encapsulation dot1Q 30
 ip address 10.192.44.1 255.255.255.192
exit

interface GigabitEthernet0/0.31
 description Gateway VLAN 31 - Administracion
 encapsulation dot1Q 31
 ip address 10.192.44.65 255.255.255.192
exit

interface GigabitEthernet0/0.32
 description Gateway VLAN 32 - Finanzas
 encapsulation dot1Q 32
 ip address 10.192.44.129 255.255.255.224
exit

interface GigabitEthernet0/0.33
 description Gateway VLAN 33 - WiFi Ejecutivos
 encapsulation dot1Q 33
 ip address 10.192.44.161 255.255.255.240
exit

interface GigabitEthernet0/0.34
 description Gateway VLAN 34 - Marketing
 encapsulation dot1Q 34
 ip address 10.192.44.177 255.255.255.240
exit

interface GigabitEthernet0/0.35
 description Gateway VLAN 35 - Logistica
 encapsulation dot1Q 35
 ip address 10.192.44.193 255.255.255.240
exit

interface GigabitEthernet0/0.99
 description Gateway VLAN 99 - Nativa/Gestion
 encapsulation dot1Q 99 native
 ip address 10.192.44.209 255.255.255.240
exit

interface GigabitEthernet0/0.36
 description Gateway VLAN 36 - WiFi Clientes
 encapsulation dot1Q 36
 ip address 10.192.44.225 255.255.255.240
exit

interface GigabitEthernet0/0.37
 description Gateway VLAN 37 - Servidores
 encapsulation dot1Q 37
 ip address 10.192.44.241 255.255.255.240
exit

end
write memory

! =========================
! MS1_CORE_LA_LIBERTAD
! Trunk hacia ROUTER_LA_LIBERTAD
! =========================
enable
configure terminal
hostname MS1_CORE_LA_LIBERTAD

interface GigabitEthernet1/0/1
 description Trunk router-on-a-stick hacia ROUTER_LA_LIBERTAD
 switchport
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 30,31,32,33,34,35,36,37,99
 no shutdown
exit

end
write memory
```

## Comandos de verificación rápidos

En `ROUTER_LA_LIBERTAD`:

```text
enable
show ip interface brief
show ip route connected
```

En `MS1_CORE_LA_LIBERTAD`:

```text
enable
show interfaces trunk
show vlan brief
```

Pruebas desde PCs de diferentes VLAN:

```text
PC_VENTAS_1_LA_LIBERTAD> ping 10.192.44.74
PC_ADMINISTRACION_LA_LIBERTAD> ping 10.192.44.130
PC_FINANZAS_LA_LIBERTAD> ping 10.192.44.178
PC_MARKETING_LA_LIBERTAD> ping 10.192.44.194
PC_ADMIN_LA_LIBERTAD> ping 10.192.44.242
```

La implementación cumple si las subinterfaces aparecen `up/up`, si las redes VLAN figuran como conectadas en `show ip route connected`, si el trunk permite las VLAN `30,31,32,33,34,35,36,37,99`, y si existe comunicación entre VLANs mediante ping.
