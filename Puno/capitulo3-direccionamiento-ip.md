# Capítulo 3: Implementación de la solución

## 3.1 Implementación del direccionamiento IP

## 3.1.5 Sede Sucursal 4 - Puno

La sede Puno utiliza la red `10.192.56.0/22`. El router `ROUTER_PUNO` realiza el enrutamiento entre VLAN mediante subinterfaces sobre `GigabitEthernet0/0`.

```text
! =========================
! ROUTER_PUNO
! =========================
enable
configure terminal
hostname ROUTER_PUNO
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk router-on-a-stick hacia MS1_CORE_PUNO
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.50
 encapsulation dot1Q 50
 ip address 10.192.56.1 255.255.255.192
exit
interface GigabitEthernet0/0.51
 encapsulation dot1Q 51
 ip address 10.192.56.65 255.255.255.224
exit
interface GigabitEthernet0/0.52
 encapsulation dot1Q 52
 ip address 10.192.56.97 255.255.255.240
exit
interface GigabitEthernet0/0.53
 encapsulation dot1Q 53
 ip address 10.192.56.113 255.255.255.240
exit
interface GigabitEthernet0/0.99
 encapsulation dot1Q 99 native
 ip address 10.192.56.129 255.255.255.240
exit
interface GigabitEthernet0/0.54
 encapsulation dot1Q 54
 ip address 10.192.56.145 255.255.255.240
exit
interface GigabitEthernet0/0.56
 encapsulation dot1Q 56
 ip address 10.192.56.161 255.255.255.240
exit
interface GigabitEthernet0/0.57
 encapsulation dot1Q 57
 ip address 10.192.56.177 255.255.255.240
exit
interface GigabitEthernet0/0.58
 encapsulation dot1Q 58
 ip address 10.192.56.193 255.255.255.240
exit

end
write memory

! IP de gestión VLAN 99 en switches
enable
configure terminal
vlan 99
 name VLNAT
exit
interface vlan 99
 ip address <ip_gestion_switch> 255.255.255.240
 no shutdown
exit
ip default-gateway 10.192.56.129
end
write memory
```

| Switch | IP de gestión | Máscara | Gateway |
|---|---:|---:|---:|
| SW1_PUNO | 10.192.56.131 | 255.255.255.240 | 10.192.56.129 |
| SW2_PUNO | 10.192.56.132 | 255.255.255.240 | 10.192.56.129 |
| SW3_PUNO | 10.192.56.133 | 255.255.255.240 | 10.192.56.129 |
| MS1_CORE_PUNO | 10.192.56.134 | 255.255.255.240 | 10.192.56.129 |
| MS2_WIFI_PUNO | 10.192.56.135 | 255.255.255.240 | 10.192.56.129 |
| MS3_DIST_PUNO | 10.192.56.136 | 255.255.255.240 | 10.192.56.129 |
| MS4_DIST_PUNO | 10.192.56.137 | 255.255.255.240 | 10.192.56.129 |

### Direccionamiento de equipos finales - Puno

| Equipo | Dirección IP | Máscara | Gateway | DNS |
|---|---:|---:|---:|---:|
| PC_VENTAS_1_PUNO | 10.192.56.10 | 255.255.255.192 | 10.192.56.1 | 10.192.56.195 |
| PC_VENTAS_2_PUNO | 10.192.56.11 | 255.255.255.192 | 10.192.56.1 | 10.192.56.195 |
| PC_VENTAS_3_PUNO | 10.192.56.12 | 255.255.255.192 | 10.192.56.1 | 10.192.56.195 |
| PC_ADMINISTRACION_PUNO | 10.192.56.74 | 255.255.255.224 | 10.192.56.65 | 10.192.56.195 |
| PC_FINANZAS_PUNO | 10.192.56.98 | 255.255.255.240 | 10.192.56.97 | 10.192.56.195 |
| PC_MARKETING_PUNO | 10.192.56.146 | 255.255.255.240 | 10.192.56.145 | 10.192.56.195 |
| PC_LOGISTICA_PUNO | 10.192.56.162 | 255.255.255.240 | 10.192.56.161 | 10.192.56.195 |
| PC_ADMIN_PUNO | 10.192.56.130 | 255.255.255.240 | 10.192.56.129 | 10.192.56.195 |
| WEB_PUNO | 10.192.56.194 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |
| DNS_PUNO | 10.192.56.195 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |
| DHCP_PUNO | 10.192.56.196 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |
| FTP_PUNO | 10.192.56.197 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |
| MAIL_PUNO | 10.192.56.198 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |

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
| Puno | ROUTER_PUNO | 10.192.56.129 | 10.192.56.195 |

La implementación cumple si las subinterfaces del router aparecen en estado `up/up`, las redes VLAN aparecen como conectadas en `show ip route connected`, los switches responden ping hacia el gateway de la VLAN 99 y los equipos finales responden ping hacia su gateway y DNS local.
