# Huanuco - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS recomendado |
| --- | --- | --- | --- | --- |
| WEB_HUANUCO | 10.192.52.178 | 255.255.255.240 | 10.192.52.177 | 10.192.42.163 |
| DHCP_HUANUCO | 10.192.52.180 | 255.255.255.240 | 10.192.52.177 | 10.192.42.163 |
| FTP_HUANUCO | 10.192.52.181 | 255.255.255.240 | 10.192.52.177 | 10.192.42.163 |
| MAIL_HUANUCO | 10.192.52.182 | 255.255.255.240 | 10.192.52.177 | 10.192.42.163 |

No configures `DNS_HUANUCO` salvo que el profesor pida DNS local. Para pruebas usa DNS corporativo Lima: `10.192.42.163`.

## HTTP

`WEB_HUANUCO > Services > HTTP`: `On`

Prueba:

```text
http://10.192.52.178
http://www.huanuco.com
```

## DHCP solo WiFi

`DHCP_HUANUCO > Services > DHCP`: `On`

| Pool Name | Default Gateway | DNS Server | Start IP Address | Subnet Mask | Max Users |
| --- | --- | --- | --- | --- | --- |
| HUANUCO_WIFI_EJECUTIVO | 10.192.52.97 | 10.192.42.163 | 10.192.52.100 | 255.255.255.240 | 8 |
| HUANUCO_WIFI_CLIENTES | 10.192.52.145 | 10.192.42.163 | 10.192.52.148 | 255.255.255.240 | 8 |

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
