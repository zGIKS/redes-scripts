# Capítulo 3: Implementación de la solución

## 3.1 Implementación del direccionamiento IP

## 3.1.2 Sede Sucursal 1 - La Libertad

La sede La Libertad utiliza la red `10.192.44.0/22`. El enrutamiento inter-VLAN se implementa mediante router-on-a-stick en `ROUTER_LA_LIBERTAD`, usando la VLAN `99` como VLAN nativa y de gestión.

```text
! =========================
! ROUTER_LA_LIBERTAD
! =========================
enable
configure terminal
hostname ROUTER_LA_LIBERTAD
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk router-on-a-stick hacia MS1_CORE_LA_LIBERTAD
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.30
 encapsulation dot1Q 30
 ip address 10.192.44.1 255.255.255.192
exit
interface GigabitEthernet0/0.31
 encapsulation dot1Q 31
 ip address 10.192.44.65 255.255.255.192
exit
interface GigabitEthernet0/0.32
 encapsulation dot1Q 32
 ip address 10.192.44.129 255.255.255.224
exit
interface GigabitEthernet0/0.33
 encapsulation dot1Q 33
 ip address 10.192.44.161 255.255.255.240
exit
interface GigabitEthernet0/0.34
 encapsulation dot1Q 34
 ip address 10.192.44.177 255.255.255.240
exit
interface GigabitEthernet0/0.35
 encapsulation dot1Q 35
 ip address 10.192.44.193 255.255.255.240
exit
interface GigabitEthernet0/0.99
 encapsulation dot1Q 99 native
 ip address 10.192.44.209 255.255.255.240
exit
interface GigabitEthernet0/0.36
 encapsulation dot1Q 36
 ip address 10.192.44.225 255.255.255.240
exit
interface GigabitEthernet0/0.37
 encapsulation dot1Q 37
 ip address 10.192.44.241 255.255.255.240
exit

end
write memory

! =========================
! IP de gestión VLAN 99
! Repetir en cada switch cambiando hostname e IP
! =========================
enable
configure terminal
vlan 99
 name VLNAT
exit
interface vlan 99
 ip address <ip_gestion_switch> 255.255.255.240
 no shutdown
exit
ip default-gateway 10.192.44.209
end
write memory
```

| Switch | IP de gestión | Máscara | Gateway |
|---|---:|---:|---:|
| SW1_LA_LIBERTAD | 10.192.44.211 | 255.255.255.240 | 10.192.44.209 |
| SW2_LA_LIBERTAD | 10.192.44.212 | 255.255.255.240 | 10.192.44.209 |
| SW3_LA_LIBERTAD | 10.192.44.213 | 255.255.255.240 | 10.192.44.209 |
| MS1_CORE_LA_LIBERTAD | 10.192.44.214 | 255.255.255.240 | 10.192.44.209 |
| MS2_WIFI_LA_LIBERTAD | 10.192.44.215 | 255.255.255.240 | 10.192.44.209 |
| MS3_DIST_LA_LIBERTAD | 10.192.44.216 | 255.255.255.240 | 10.192.44.209 |
| MS4_DIST_LA_LIBERTAD | 10.192.44.217 | 255.255.255.240 | 10.192.44.209 |

### Direccionamiento de equipos finales - La Libertad

| Equipo | Dirección IP | Máscara | Gateway | DNS |
|---|---:|---:|---:|---:|
| PC_VENTAS_1_LA_LIBERTAD | 10.192.44.10 | 255.255.255.192 | 10.192.44.1 | 10.192.44.243 |
| PC_VENTAS_2_LA_LIBERTAD | 10.192.44.11 | 255.255.255.192 | 10.192.44.1 | 10.192.44.243 |
| PC_VENTAS_3_LA_LIBERTAD | 10.192.44.12 | 255.255.255.192 | 10.192.44.1 | 10.192.44.243 |
| PC_ADMINISTRACION_LA_LIBERTAD | 10.192.44.74 | 255.255.255.192 | 10.192.44.65 | 10.192.44.243 |
| PC_FINANZAS_LA_LIBERTAD | 10.192.44.130 | 255.255.255.224 | 10.192.44.129 | 10.192.44.243 |
| PC_MARKETING_LA_LIBERTAD | 10.192.44.178 | 255.255.255.240 | 10.192.44.177 | 10.192.44.243 |
| PC_LOGISTICA_LA_LIBERTAD | 10.192.44.194 | 255.255.255.240 | 10.192.44.193 | 10.192.44.243 |
| PC_ADMIN_LA_LIBERTAD | 10.192.44.210 | 255.255.255.240 | 10.192.44.209 | 10.192.44.243 |
| WEB_LA_LIBERTAD | 10.192.44.242 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |
| DNS_LA_LIBERTAD | 10.192.44.243 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |
| DHCP_LA_LIBERTAD | 10.192.44.244 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |
| FTP_LA_LIBERTAD | 10.192.44.245 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |
| MAIL_LA_LIBERTAD | 10.192.44.246 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |

## Comandos de verificación rápidos

En el router de cada sede:

```text
enable
show ip interface brief
show ip route connected
```

En cada switch de la sede:

```text
enable
show ip interface brief
ping <gateway_vlan_99_de_la_sede>
```

En una PC o servidor de cada VLAN:

```text
ipconfig
ping <gateway_de_su_vlan>
ping <dns_de_su_sede>
```

Gateway de gestión VLAN 99:

| Sede | Router | Gateway VLAN 99 | DNS |
|---|---|---:|---:|
| La Libertad | ROUTER_LA_LIBERTAD | 10.192.44.209 | 10.192.44.243 |

La implementación cumple si las subinterfaces del router aparecen en estado `up/up`, las redes VLAN aparecen como conectadas en `show ip route connected`, los switches responden ping hacia el gateway de la VLAN 99 y los equipos finales responden ping hacia su gateway y DNS local.
