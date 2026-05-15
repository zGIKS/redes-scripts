# Capítulo 3: Implementación de la solución

## 3.1 Implementación del direccionamiento IP

## 3.1.1 Sede Principal Lima

Para la sede principal Lima se implementó el direccionamiento IP sobre la red `10.192.40.0/22`. El enrutamiento entre VLAN se realizó mediante router-on-a-stick en el router `ROUTER_LIMA`, configurando subinterfaces sobre `GigabitEthernet0/0`. La VLAN nativa y de gestión es la VLAN `99`.

```text
! =========================
! ROUTER_LIMA
! =========================
enable
configure terminal
hostname ROUTER_LIMA
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk router-on-a-stick hacia MS1_CORE_LIMA
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.10
 encapsulation dot1Q 10
 ip address 10.192.40.1 255.255.255.0
exit

interface GigabitEthernet0/0.11
 encapsulation dot1Q 11
 ip address 10.192.41.1 255.255.255.128
exit

interface GigabitEthernet0/0.12
 encapsulation dot1Q 12
 ip address 10.192.41.129 255.255.255.192
exit

interface GigabitEthernet0/0.13
 encapsulation dot1Q 13
 ip address 10.192.41.193 255.255.255.192
exit

interface GigabitEthernet0/0.14
 encapsulation dot1Q 14
 ip address 10.192.42.1 255.255.255.192
exit

interface GigabitEthernet0/0.15
 encapsulation dot1Q 15
 ip address 10.192.42.65 255.255.255.192
exit

interface GigabitEthernet0/0.16
 encapsulation dot1Q 16
 ip address 10.192.42.129 255.255.255.224
exit

interface GigabitEthernet0/0.17
 encapsulation dot1Q 17
 ip address 10.192.42.161 255.255.255.240
exit

interface GigabitEthernet0/0.99
 encapsulation dot1Q 99 native
 ip address 10.192.42.177 255.255.255.240
exit

end
write memory

! =========================
! MS1_CORE_LIMA
! =========================
enable
configure terminal
hostname MS1_CORE_LIMA
no ip domain-lookup

vlan 99
 name VLNAT
exit

interface vlan 99
 ip address 10.192.42.182 255.255.255.240
 no shutdown
exit

ip default-gateway 10.192.42.177
end
write memory

! =========================
! MS2_WIFI_LIMA
! =========================
enable
configure terminal
hostname MS2_WIFI_LIMA
no ip domain-lookup

vlan 99
 name VLNAT
exit

interface vlan 99
 ip address 10.192.42.183 255.255.255.240
 no shutdown
exit

ip default-gateway 10.192.42.177
end
write memory

! =========================
! MS3_DIST_LIMA
! =========================
enable
configure terminal
hostname MS3_DIST_LIMA
no ip domain-lookup

vlan 99
 name VLNAT
exit

interface vlan 99
 ip address 10.192.42.184 255.255.255.240
 no shutdown
exit

ip default-gateway 10.192.42.177
end
write memory

! =========================
! MS4_DIST_LIMA
! =========================
enable
configure terminal
hostname MS4_DIST_LIMA
no ip domain-lookup

vlan 99
 name VLNAT
exit

interface vlan 99
 ip address 10.192.42.185 255.255.255.240
 no shutdown
exit

ip default-gateway 10.192.42.177
end
write memory

! =========================
! SW1_LIMA
! =========================
enable
configure terminal
hostname SW1_LIMA
no ip domain-lookup

vlan 99
 name VLNAT
exit

interface vlan 99
 ip address 10.192.42.179 255.255.255.240
 no shutdown
exit

ip default-gateway 10.192.42.177
end
write memory

! =========================
! SW2_LIMA
! =========================
enable
configure terminal
hostname SW2_LIMA
no ip domain-lookup

vlan 99
 name VLNAT
exit

interface vlan 99
 ip address 10.192.42.180 255.255.255.240
 no shutdown
exit

ip default-gateway 10.192.42.177
end
write memory

! =========================
! SW3_LIMA
! =========================
enable
configure terminal
hostname SW3_LIMA
no ip domain-lookup

vlan 99
 name VLNAT
exit

interface vlan 99
 ip address 10.192.42.181 255.255.255.240
 no shutdown
exit

ip default-gateway 10.192.42.177
end
write memory
```

### Direccionamiento de equipos finales

Estos valores se colocan en cada equipo desde `Desktop > IP Configuration` en Cisco Packet Tracer.

| Equipo | Dirección IP | Máscara | Gateway | DNS |
|---|---:|---:|---:|---:|
| PC_VENTAS_1 | 10.192.40.10 | 255.255.255.0 | 10.192.40.1 | 10.192.42.163 |
| PC_VENTAS_2 | 10.192.40.11 | 255.255.255.0 | 10.192.40.1 | 10.192.42.163 |
| PC_VENTAS_3 | 10.192.40.12 | 255.255.255.0 | 10.192.40.1 | 10.192.42.163 |
| PC_ADMINISTRACION | 10.192.41.10 | 255.255.255.128 | 10.192.41.1 | 10.192.42.163 |
| PC_FINANZAS | 10.192.41.130 | 255.255.255.192 | 10.192.41.129 | 10.192.42.163 |
| PC_MARKETING | 10.192.42.10 | 255.255.255.192 | 10.192.42.1 | 10.192.42.163 |
| PC_LOGISTICA | 10.192.42.66 | 255.255.255.192 | 10.192.42.65 | 10.192.42.163 |
| PC_ADMIN | 10.192.42.178 | 255.255.255.240 | 10.192.42.177 | 10.192.42.163 |
| WEB_LIMA | 10.192.42.162 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |
| DNS_LIMA | 10.192.42.163 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |
| DHCP_LIMA | 10.192.42.164 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |
| FTP_LIMA | 10.192.42.165 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |
| MAIL_LIMA | 10.192.42.166 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |

## Comandos de verificación

En `ROUTER_LIMA` se verifica que todas las subinterfaces tengan su IP correcta y estén activas.

```text
enable
show ip interface brief
show ip route connected
```

En cada switch de Lima se verifica la IP de gestión y conectividad con el gateway de la VLAN 99.

```text
enable
show ip interface brief
ping 10.192.42.177
```

En una PC o servidor se verifica su IP, su gateway y la conectividad con el DNS de Lima.

```text
ipconfig
ping <gateway_de_su_vlan>
ping 10.192.42.163
```

Gateways por VLAN:

| VLAN | Unidad organizacional | Gateway |
|---:|---|---:|
| 10 | Ventas | 10.192.40.1 |
| 11 | Administracion | 10.192.41.1 |
| 12 | Finanzas | 10.192.41.129 |
| 13 | WiFi Ejecutivos | 10.192.41.193 |
| 14 | Marketing | 10.192.42.1 |
| 15 | Logistica | 10.192.42.65 |
| 16 | WiFi Clientes | 10.192.42.129 |
| 17 | Servidores | 10.192.42.161 |
| 99 | Nativa/Gestion | 10.192.42.177 |

Pruebas rápidas de conectividad inter-VLAN:

```text
PC_VENTAS_1> ping 10.192.41.10
PC_ADMINISTRACION> ping 10.192.42.162
PC_FINANZAS> ping 10.192.42.10
PC_ADMIN> ping 10.192.42.177
```

La implementación cumple si el router muestra las subinterfaces en estado `up/up`, las redes aparecen como conectadas en `show ip route connected`, los switches responden ping hacia `10.192.42.177`, y los equipos finales responden ping hacia su gateway y hacia el DNS `10.192.42.163`.
