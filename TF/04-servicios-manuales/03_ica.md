# Ica - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS recomendado |
| --- | --- | --- | --- | --- |
| WEB_ICA | 10.192.49.66 | 255.255.255.240 | 10.192.49.65 | 10.192.42.163 |
| DHCP_ICA | 10.192.49.68 | 255.255.255.240 | 10.192.49.65 | 10.192.42.163 |
| FTP_ICA | 10.192.49.69 | 255.255.255.240 | 10.192.49.65 | 10.192.42.163 |
| MAIL_ICA | 10.192.49.70 | 255.255.255.240 | 10.192.49.65 | 10.192.42.163 |

No configures `DNS_ICA` salvo que el profesor pida DNS local. Para pruebas usa DNS corporativo Lima: `10.192.42.163`.

## HTTP

`WEB_ICA > Services > HTTP`: `On`

Prueba:

```text
http://10.192.49.66
http://www.ica.com
```

## DHCP solo WiFi

`DHCP_ICA > Services > DHCP`: `On`

| Pool Name | Default Gateway | DNS Server | Start IP Address | Subnet Mask | Max Users |
| --- | --- | --- | --- | --- | --- |
| ICA_WIFI_EJECUTIVO | 10.192.48.225 | 10.192.42.163 | 10.192.48.230 | 255.255.255.224 | 20 |
| ICA_WIFI_CLIENTES | 10.192.49.49 | 10.192.42.163 | 10.192.49.52 | 255.255.255.240 | 8 |

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
