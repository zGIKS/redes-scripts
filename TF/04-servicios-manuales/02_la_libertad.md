# La Libertad - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS recomendado |
| --- | --- | --- | --- | --- |
| WEB_LA_LIBERTAD | 10.192.44.242 | 255.255.255.240 | 10.192.44.241 | 10.192.42.163 |
| DHCP_LA_LIBERTAD | 10.192.44.244 | 255.255.255.240 | 10.192.44.241 | 10.192.42.163 |
| FTP_LA_LIBERTAD | 10.192.44.245 | 255.255.255.240 | 10.192.44.241 | 10.192.42.163 |
| MAIL_LA_LIBERTAD | 10.192.44.246 | 255.255.255.240 | 10.192.44.241 | 10.192.42.163 |

No configures `DNS_LA_LIBERTAD` salvo que el profesor pida DNS local. Para pruebas usa DNS corporativo Lima: `10.192.42.163`.

## HTTP

`WEB_LA_LIBERTAD > Services > HTTP`: `On`

Prueba:

```text
http://10.192.44.242
http://www.la-libertad.com
```

## DHCP solo WiFi

`DHCP_LA_LIBERTAD > Services > DHCP`: `On`

| Pool Name | Default Gateway | DNS Server | Start IP Address | Subnet Mask | Max Users |
| --- | --- | --- | --- | --- | --- |
| LA_LIBERTAD_WIFI_EJECUTIVO | 10.192.44.161 | 10.192.42.163 | 10.192.44.163 | 255.255.255.240 | 12 |
| LA_LIBERTAD_WIFI_CLIENTES | 10.192.44.225 | 10.192.42.163 | 10.192.44.230 | 255.255.255.240 | 8 |

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
