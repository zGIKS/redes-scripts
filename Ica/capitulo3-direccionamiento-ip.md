# Capítulo 3: Implementación de la solución

## 3.1 Implementación del direccionamiento IP

## 3.1.3 Sede Sucursal 2 - Ica

La sede Ica utiliza la red `10.192.48.0/22`. El enrutamiento inter-VLAN se implementa en `ROUTER_ICA`, con la VLAN `99` como VLAN nativa y de gestión.

```text
! =========================
! ROUTER_ICA
! =========================
enable
configure terminal
hostname ROUTER_ICA
no ip domain-lookup

interface GigabitEthernet0/0
 description Trunk router-on-a-stick hacia MS1_CORE_ICA
 no ip address
 no shutdown
exit

interface GigabitEthernet0/0.20
 encapsulation dot1Q 20
 ip address 10.192.48.1 255.255.255.128
exit
interface GigabitEthernet0/0.21
 encapsulation dot1Q 21
 ip address 10.192.48.129 255.255.255.192
exit
interface GigabitEthernet0/0.22
 encapsulation dot1Q 22
 ip address 10.192.48.193 255.255.255.224
exit
interface GigabitEthernet0/0.23
 encapsulation dot1Q 23
 ip address 10.192.48.225 255.255.255.224
exit
interface GigabitEthernet0/0.24
 encapsulation dot1Q 24
 ip address 10.192.49.1 255.255.255.240
exit
interface GigabitEthernet0/0.25
 encapsulation dot1Q 25
 ip address 10.192.49.17 255.255.255.240
exit
interface GigabitEthernet0/0.99
 encapsulation dot1Q 99 native
 ip address 10.192.49.33 255.255.255.240
exit
interface GigabitEthernet0/0.26
 encapsulation dot1Q 26
 ip address 10.192.49.49 255.255.255.240
exit
interface GigabitEthernet0/0.27
 encapsulation dot1Q 27
 ip address 10.192.49.65 255.255.255.240
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
ip default-gateway 10.192.49.33
end
write memory
```

| Switch | IP de gestión | Máscara | Gateway |
|---|---:|---:|---:|
| SW1_ICA | 10.192.49.35 | 255.255.255.240 | 10.192.49.33 |
| SW2_ICA | 10.192.49.36 | 255.255.255.240 | 10.192.49.33 |
| SW3_ICA | 10.192.49.37 | 255.255.255.240 | 10.192.49.33 |
| MS1_CORE_ICA | 10.192.49.38 | 255.255.255.240 | 10.192.49.33 |
| MS2_WIFI_ICA | 10.192.49.39 | 255.255.255.240 | 10.192.49.33 |
| MS3_DIST_ICA | 10.192.49.40 | 255.255.255.240 | 10.192.49.33 |
| MS4_DIST_ICA | 10.192.49.41 | 255.255.255.240 | 10.192.49.33 |

### Direccionamiento de equipos finales - Ica

| Equipo | Dirección IP | Máscara | Gateway | DNS |
|---|---:|---:|---:|---:|
| PC_VENTAS_1_ICA | 10.192.48.10 | 255.255.255.128 | 10.192.48.1 | 10.192.49.67 |
| PC_VENTAS_2_ICA | 10.192.48.11 | 255.255.255.128 | 10.192.48.1 | 10.192.49.67 |
| PC_VENTAS_3_ICA | 10.192.48.12 | 255.255.255.128 | 10.192.48.1 | 10.192.49.67 |
| PC_ADMINISTRACION_ICA | 10.192.48.138 | 255.255.255.192 | 10.192.48.129 | 10.192.49.67 |
| PC_FINANZAS_ICA | 10.192.48.194 | 255.255.255.224 | 10.192.48.193 | 10.192.49.67 |
| PC_MARKETING_ICA | 10.192.49.2 | 255.255.255.240 | 10.192.49.1 | 10.192.49.67 |
| PC_LOGISTICA_ICA | 10.192.49.18 | 255.255.255.240 | 10.192.49.17 | 10.192.49.67 |
| PC_ADMIN_ICA | 10.192.49.34 | 255.255.255.240 | 10.192.49.33 | 10.192.49.67 |
| WEB_ICA | 10.192.49.66 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| DNS_ICA | 10.192.49.67 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| DHCP_ICA | 10.192.49.68 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| FTP_ICA | 10.192.49.69 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| MAIL_ICA | 10.192.49.70 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |

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
| Ica | ROUTER_ICA | 10.192.49.33 | 10.192.49.67 |

La implementación cumple si las subinterfaces del router aparecen en estado `up/up`, las redes VLAN aparecen como conectadas en `show ip route connected`, los switches responden ping hacia el gateway de la VLAN 99 y los equipos finales responden ping hacia su gateway y DNS local.
