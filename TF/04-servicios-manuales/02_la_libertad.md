# La Libertad - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS |
| --- | --- | --- | --- | --- |
| WEB_LA_LIBERTAD | 10.192.44.242 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |
| DNS_LA_LIBERTAD | 10.192.44.243 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |
| DHCP_LA_LIBERTAD | 10.192.44.244 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |
| FTP_LA_LIBERTAD | 10.192.44.245 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |
| MAIL_LA_LIBERTAD | 10.192.44.246 | 255.255.255.240 | 10.192.44.241 | 10.192.44.243 |

## HTTP

`WEB_LA_LIBERTAD > Services > HTTP`: `On`

## DNS

`DNS_LA_LIBERTAD > Services > DNS`: `On`

| Name | Address |
| --- | --- |
| www.la_libertad.com | 10.192.44.242 |
| ftp.la_libertad.com | 10.192.44.245 |
| mail.la_libertad.com | 10.192.44.246 |
| www.lima.com | 10.192.42.162 |
| ftp.lima.com | 10.192.42.165 |
| www.miempresa.com | 10.192.42.162 |
| mail.miempresa.com | 10.192.42.166 |

## DHCP

`DHCP_LA_LIBERTAD > Services > DHCP`: `On`

| Pool Name | Default Gateway | DNS Server | Start IP Address | Subnet Mask | Max Users |
| --- | --- | --- | --- | --- | --- |
| LA_LIBERTAD_VENTAS | 10.192.44.1 | 10.192.44.243 | 10.192.44.20 | 255.255.255.192 | 40 |
| LA_LIBERTAD_ADMIN | 10.192.44.65 | 10.192.44.243 | 10.192.44.80 | 255.255.255.192 | 40 |
| LA_LIBERTAD_FINANZAS | 10.192.44.129 | 10.192.44.243 | 10.192.44.140 | 255.255.255.224 | 20 |
| LA_LIBERTAD_WIFI_EJECUTIVO | 10.192.44.161 | 10.192.44.243 | 10.192.44.170 | 255.255.255.240 | 10 |
| LA_LIBERTAD_MARKETING | 10.192.44.177 | 10.192.44.243 | 10.192.44.185 | 255.255.255.240 | 8 |
| LA_LIBERTAD_LOGISTICA | 10.192.44.193 | 10.192.44.243 | 10.192.44.200 | 255.255.255.240 | 8 |
| LA_LIBERTAD_WIFI_CLIENTES | 10.192.44.225 | 10.192.44.243 | 10.192.44.230 | 255.255.255.240 | 8 |

## FTP

`FTP_LA_LIBERTAD > Services > FTP`: `On`

| Username | Password | Permisos |
| --- | --- | --- |
| admin_la_libertad | admin_la_libertad | RWDNL |
| la_libertad_ftp | la_libertad_1 | RWDNL |
| cisco | cisco | RWDNL |

## Email

`MAIL_LA_LIBERTAD > Services > EMAIL`:

- SMTP: `On`
- POP3: `On`
- Domain Name: `miempresa.com`

| User | Password |
| --- | --- |
| admin | admin1 |
| soporte | soporte1 |
| usuario1 | usuario1 |
| la_libertad | la_libertad1 |
