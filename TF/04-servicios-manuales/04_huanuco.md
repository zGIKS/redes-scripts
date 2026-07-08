# Huanuco - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS |
| --- | --- | --- | --- | --- |
| WEB_HUANUCO | 10.192.52.178 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |
| DNS_HUANUCO | 10.192.52.179 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |
| DHCP_HUANUCO | 10.192.52.180 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |
| FTP_HUANUCO | 10.192.52.181 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |
| MAIL_HUANUCO | 10.192.52.182 | 255.255.255.240 | 10.192.52.177 | 10.192.52.179 |

## HTTP

`WEB_HUANUCO > Services > HTTP`: `On`

## DNS

`DNS_HUANUCO > Services > DNS`: `On`

| Name | Address |
| --- | --- |
| www.huanuco.com | 10.192.52.178 |
| ftp.huanuco.com | 10.192.52.181 |
| mail.huanuco.com | 10.192.52.182 |
| www.lima.com | 10.192.42.162 |
| ftp.lima.com | 10.192.42.165 |
| www.miempresa.com | 10.192.42.162 |
| mail.miempresa.com | 10.192.42.166 |

## DHCP

`DHCP_HUANUCO > Services > DHCP`: `On`

| Pool Name | Default Gateway | DNS Server | Start IP Address | Subnet Mask | Max Users |
| --- | --- | --- | --- | --- | --- |
| HUANUCO_VENTAS | 10.192.52.1 | 10.192.52.179 | 10.192.52.15 | 255.255.255.224 | 15 |
| HUANUCO_ADMIN | 10.192.52.33 | 10.192.52.179 | 10.192.52.45 | 255.255.255.224 | 15 |
| HUANUCO_FINANZAS | 10.192.52.65 | 10.192.52.179 | 10.192.52.70 | 255.255.255.224 | 15 |
| HUANUCO_WIFI_EJECUTIVO | 10.192.52.97 | 10.192.52.179 | 10.192.52.100 | 255.255.255.240 | 8 |
| HUANUCO_MARKETING | 10.192.52.113 | 10.192.52.179 | 10.192.52.116 | 255.255.255.240 | 8 |
| HUANUCO_LOGISTICA | 10.192.52.129 | 10.192.52.179 | 10.192.52.132 | 255.255.255.240 | 8 |
| HUANUCO_WIFI_CLIENTES | 10.192.52.145 | 10.192.52.179 | 10.192.52.148 | 255.255.255.240 | 8 |

## FTP

`FTP_HUANUCO > Services > FTP`: `On`

| Username | Password | Permisos |
| --- | --- | --- |
| admin_huanuco | admin_huanuco | RWDNL |
| huanuco_ftp | huanuco_1 | RWDNL |
| cisco | cisco | RWDNL |

## Email

`MAIL_HUANUCO > Services > EMAIL`:

- SMTP: `On`
- POP3: `On`
- Domain Name: `miempresa.com`

| User | Password |
| --- | --- |
| admin | admin1 |
| soporte | soporte1 |
| usuario1 | usuario1 |
| huanuco | huanuco1 |
