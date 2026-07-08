# Ica - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS |
| --- | --- | --- | --- | --- |
| WEB_ICA | 10.192.49.66 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| DNS_ICA | 10.192.49.67 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| DHCP_ICA | 10.192.49.68 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| FTP_ICA | 10.192.49.69 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |
| MAIL_ICA | 10.192.49.70 | 255.255.255.240 | 10.192.49.65 | 10.192.49.67 |

## HTTP

`WEB_ICA > Services > HTTP`: `On`

## DNS

`DNS_ICA > Services > DNS`: `On`

| Name | Address |
| --- | --- |
| www.ica.com | 10.192.49.66 |
| ftp.ica.com | 10.192.49.69 |
| mail.ica.com | 10.192.49.70 |
| www.lima.com | 10.192.42.162 |
| ftp.lima.com | 10.192.42.165 |
| www.miempresa.com | 10.192.42.162 |
| mail.miempresa.com | 10.192.42.166 |

## DHCP

`DHCP_ICA > Services > DHCP`: `On`

| Pool Name | Default Gateway | DNS Server | Start IP Address | Subnet Mask | Max Users |
| --- | --- | --- | --- | --- | --- |
| ICA_VENTAS | 10.192.48.1 | 10.192.49.67 | 10.192.48.20 | 255.255.255.128 | 100 |
| ICA_ADMIN | 10.192.48.129 | 10.192.49.67 | 10.192.48.140 | 255.255.255.192 | 45 |
| ICA_FINANZAS | 10.192.48.193 | 10.192.49.67 | 10.192.48.200 | 255.255.255.224 | 20 |
| ICA_WIFI_EJECUTIVO | 10.192.48.225 | 10.192.49.67 | 10.192.48.230 | 255.255.255.224 | 20 |
| ICA_MARKETING | 10.192.49.1 | 10.192.49.67 | 10.192.49.5 | 255.255.255.240 | 8 |
| ICA_LOGISTICA | 10.192.49.17 | 10.192.49.67 | 10.192.49.20 | 255.255.255.240 | 8 |
| ICA_WIFI_CLIENTES | 10.192.49.49 | 10.192.49.67 | 10.192.49.52 | 255.255.255.240 | 8 |

## FTP

`FTP_ICA > Services > FTP`: `On`

| Username | Password | Permisos |
| --- | --- | --- |
| admin_ica | admin_ica | RWDNL |
| ica_ftp | ica_1 | RWDNL |
| cisco | cisco | RWDNL |

## Email

`MAIL_ICA > Services > EMAIL`:

- SMTP: `On`
- POP3: `On`
- Domain Name: `miempresa.com`

| User | Password |
| --- | --- |
| admin | admin1 |
| soporte | soporte1 |
| usuario1 | usuario1 |
| ica | ica1 |
