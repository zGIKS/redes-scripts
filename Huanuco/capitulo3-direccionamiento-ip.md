# Capítulo 3: Implementación de la solución

## 3.1 Implementación del direccionamiento IP

## 3.1.4 Sede Sucursal 3 - Huánuco

La sede Huánuco utiliza la red `10.192.52.0/22`. El router `ROUTER_HUANUCO` realiza el enrutamiento entre VLAN mediante subinterfaces.

```text
! =========================
! ROUTER_HUANUCO
! =========================
enable
configure terminal
hostname ROUTER_HUANUCO
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk router-on-a-stick hacia MS1_CORE_HUANUCO
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.40
 encapsulation dot1Q 40
 ip address 10.192.52.1 255.255.255.224
exit
interface GigabitEthernet0/0.41
 encapsulation dot1Q 41
 ip address 10.192.52.33 255.255.255.224
exit
interface GigabitEthernet0/0.42
 encapsulation dot1Q 42
 ip address 10.192.52.65 255.255.255.224
exit
interface GigabitEthernet0/0.43
 encapsulation dot1Q 43
 ip address 10.192.52.97 255.255.255.240
exit
interface GigabitEthernet0/0.44
 encapsulation dot1Q 44
 ip address 10.192.52.113 255.255.255.240
exit
interface GigabitEthernet0/0.45
 encapsulation dot1Q 45
 ip address 10.192.52.129 255.255.255.240
exit
interface GigabitEthernet0/0.46
 encapsulation dot1Q 46
 ip address 10.192.52.145 255.255.255.240
exit
interface GigabitEthernet0/0.99
 encapsulation dot1Q 99 native
 ip address 10.192.52.161 255.255.255.240
exit
interface GigabitEthernet0/0.47
 encapsulation dot1Q 47
 ip address 10.192.52.177 255.255.255.240
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
ip default-gateway 10.192.52.161
end
write memory
```

| Switch | IP de gestión | Máscara | Gateway |
|---|---:|---:|---:|
| SW1_HUANUCO | 10.192.52.163 | 255.255.255.240 | 10.192.52.161 |
| SW2_HUANUCO | 10.192.52.164 | 255.255.255.240 | 10.192.52.161 |
| SW3_HUANUCO | 10.192.52.165 | 255.255.255.240 | 10.192.52.161 |
| MS1_CORE_HUANUCO | 10.192.52.166 | 255.255.255.240 | 10.192.52.161 |
| MS2_WIFI_HUANUCO | 10.192.52.167 | 255.255.255.240 | 10.192.52.161 |
| MS3_DIST_HUANUCO | 10.192.52.168 | 255.255.255.240 | 10.192.52.161 |
| MS4_DIST_HUANUCO | 10.192.52.169 | 255.255.255.240 | 10.192.52.161 |

### Direccionamiento de equipos finales - Huánuco

| Equipo | Dirección IP | Máscara | Gateway | DNS |
|---|---:|---:|---:|---:|
| PC_VENTAS_1_HUANUCO | 10.192.52.10 | 255.255.255.224 | 10.192.52.1 | 10.192.52.179 |
| PC_VENTAS_2_HUANUCO | 10.192.52.11 | 255.255.255.224 | 10.192.52.1 | 10.192.52.179 |
| PC_VENTAS_3_HUANUCO | 10.192.52.12 | 255.255.255.224 | 10.192.52.1 | 10.192.52.179 |
| PC_ADMINISTRACION_HUANUCO | 10.192.52.42 | 255.255.255.224 | 10.192.52.33 | 10.192.52.179 |
| PC_FINANZAS_HUANUCO | 10.192.52.66 | 255.255.255.224 | 10.192.52.65 | 10.192.52.179 |
| PC_MARKETING_HUANUCO | 10.192.52.114 | 255.255.255.240 | 10.192.52.113 | 10.192.52.179 |
| PC_LOGISTICA_HUANUCO | 10.192.52.130 | 255.255.255.240 | 10.192.52.129 | 10.192.52.179 |
| PC_ADMIN_HUANUCO | 10.192.52.162 | 255.255.255.240 | 10.192.52.161 | 10.192.52.179 |
| WEB_HUANUCO | 10.192.52.178 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |
| DNS_HUANUCO | 10.192.52.179 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |
| DHCP_HUANUCO | 10.192.52.180 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |
| FTP_HUANUCO | 10.192.52.181 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |
| MAIL_HUANUCO | 10.192.52.182 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |

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
| Huánuco | ROUTER_HUANUCO | 10.192.52.161 | 10.192.52.179 |

La implementación cumple si las subinterfaces del router aparecen en estado `up/up`, las redes VLAN aparecen como conectadas en `show ip route connected`, los switches responden ping hacia el gateway de la VLAN 99 y los equipos finales responden ping hacia su gateway y DNS local.
