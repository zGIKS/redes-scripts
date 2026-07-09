# Puno - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS recomendado |
| --- | --- | --- | --- | --- |
| WEB_PUNO | 10.192.56.194 | 255.255.255.240 | 10.192.56.193 | 10.192.42.163 |
| DHCP_PUNO | 10.192.56.196 | 255.255.255.240 | 10.192.56.193 | 10.192.42.163 |
| FTP_PUNO | 10.192.56.197 | 255.255.255.240 | 10.192.56.193 | 10.192.42.163 |
| MAIL_PUNO | 10.192.56.198 | 255.255.255.240 | 10.192.56.193 | 10.192.42.163 |

No configures `DNS_PUNO` salvo que el profesor pida DNS local. Para pruebas usa DNS corporativo Lima: `10.192.42.163`.

## HTTP

`WEB_PUNO > Services > HTTP`: `On`

Prueba:

```text
http://10.192.56.194
http://www.puno.com
```

## DHCP solo WiFi

`DHCP_PUNO > Services > DHCP`: `On`

| Pool Name | Default Gateway | DNS Server | Start IP Address | Subnet Mask | Max Users |
| --- | --- | --- | --- | --- | --- |
| PUNO_WIFI_EJECUTIVO | 10.192.56.113 | 10.192.42.163 | 10.192.56.116 | 255.255.255.240 | 8 |
| PUNO_WIFI_CLIENTES | 10.192.56.177 | 10.192.42.163 | 10.192.56.180 | 255.255.255.240 | 8 |

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
