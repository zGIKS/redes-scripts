# Puno - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS |
| --- | --- | --- | --- | --- |
| WEB_PUNO | 10.192.56.194 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |
| DNS_PUNO | 10.192.56.195 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |
| DHCP_PUNO | 10.192.56.196 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |
| FTP_PUNO | 10.192.56.197 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |
| MAIL_PUNO | 10.192.56.198 | 255.255.255.240 | 10.192.56.193 | 10.192.56.195 |

## HTTP

`WEB_PUNO > Services > HTTP`: `On`

## DNS

`DNS_PUNO > Services > DNS`: `On`

| Name | Address |
| --- | --- |
| www.puno.com | 10.192.56.194 |
| ftp.puno.com | 10.192.56.197 |
| mail.puno.com | 10.192.56.198 |
| www.lima.com | 10.192.42.162 |
| ftp.lima.com | 10.192.42.165 |
| www.miempresa.com | 10.192.42.162 |
| mail.miempresa.com | 10.192.42.166 |

## DHCP

`DHCP_PUNO > Services > DHCP`: `On`

| Pool Name | Default Gateway | DNS Server | Start IP Address | Subnet Mask | Max Users |
| --- | --- | --- | --- | --- | --- |
| PUNO_VENTAS | 10.192.56.1 | 10.192.56.195 | 10.192.56.20 | 255.255.255.192 | 40 |
| PUNO_ADMIN | 10.192.56.65 | 10.192.56.195 | 10.192.56.80 | 255.255.255.224 | 15 |
| PUNO_FINANZAS | 10.192.56.97 | 10.192.56.195 | 10.192.56.100 | 255.255.255.240 | 8 |
| PUNO_WIFI_EJECUTIVO | 10.192.56.113 | 10.192.56.195 | 10.192.56.116 | 255.255.255.240 | 8 |
| PUNO_MARKETING | 10.192.56.145 | 10.192.56.195 | 10.192.56.148 | 255.255.255.240 | 8 |
| PUNO_LOGISTICA | 10.192.56.161 | 10.192.56.195 | 10.192.56.164 | 255.255.255.240 | 8 |
| PUNO_WIFI_CLIENTES | 10.192.56.177 | 10.192.56.195 | 10.192.56.180 | 255.255.255.240 | 8 |

## FTP

`FTP_PUNO > Services > FTP`: `On`

| Username | Password | Permisos |
| --- | --- | --- |
| admin_puno | admin_puno | RWDNL |
| puno_ftp | puno_1 | RWDNL |
| cisco | cisco | RWDNL |

## Email

`MAIL_PUNO > Services > EMAIL`:

- SMTP: `On`
- POP3: `On`
- Domain Name: `miempresa.com`

| User | Password |
| --- | --- |
| admin | admin1 |
| soporte | soporte1 |
| usuario1 | usuario1 |
| puno | puno1 |
