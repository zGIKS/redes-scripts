# Lima - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS |
| --- | --- | --- | --- | --- |
| WEB_LIMA | 10.192.42.162 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |
| DNS_LIMA | 10.192.42.163 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |
| DHCP_LIMA | 10.192.42.164 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |
| FTP_LIMA | 10.192.42.165 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |
| MAIL_LIMA | 10.192.42.166 | 255.255.255.240 | 10.192.42.161 | 10.192.42.163 |

## HTTP

`WEB_LIMA > Services > HTTP`: `On`

Pruebas:

```text
http://10.192.42.162
http://www.miempresa.com
http://www.lima.com
```

## DNS corporativo

Solo se configura `DNS_LIMA`. Las demas sedes deben usar `10.192.42.163` como DNS.

En `DNS_LIMA > Services > DNS`:

- DNS Service: `On`
- Type: `A Record`

| Name | Address |
| --- | --- |
| www.miempresa.com | 10.192.42.162 |
| mail.miempresa.com | 10.192.42.166 |
| www.lima.com | 10.192.42.162 |
| ftp.lima.com | 10.192.42.165 |
| mail.lima.com | 10.192.42.166 |
| www.la-libertad.com | 10.192.44.242 |
| ftp.la-libertad.com | 10.192.44.245 |
| mail.la-libertad.com | 10.192.44.246 |
| www.ica.com | 10.192.49.66 |
| ftp.ica.com | 10.192.49.69 |
| mail.ica.com | 10.192.49.70 |
| www.huanuco.com | 10.192.52.178 |
| ftp.huanuco.com | 10.192.52.181 |
| mail.huanuco.com | 10.192.52.182 |
| www.puno.com | 10.192.56.194 |
| ftp.puno.com | 10.192.56.197 |
| mail.puno.com | 10.192.56.198 |

## DHCP solo WiFi

En `DHCP_LIMA > Services > DHCP`, `Service: On`.

| Pool Name | Default Gateway | DNS Server | Start IP Address | Subnet Mask | Max Users |
| --- | --- | --- | --- | --- | --- |
| LIMA_WIFI_EJECUTIVO | 10.192.41.193 | 10.192.42.163 | 10.192.41.200 | 255.255.255.192 | 45 |
| LIMA_WIFI_CLIENTES | 10.192.42.129 | 10.192.42.163 | 10.192.42.140 | 255.255.255.224 | 19 |

## FTP

`FTP_LIMA > Services > FTP`: `On`

| Username | Password | Permisos |
| --- | --- | --- |
| admin_lima | admin_lima | RWDNL |
| lima_ftp | lima_1 | RWDNL |
| cisco | cisco | RWDNL |

## Email

`MAIL_LIMA > Services > EMAIL`:

- SMTP Service: `On`
- POP3 Service: `On`
- Domain Name: `miempresa.com`

| User | Password |
| --- | --- |
| admin | admin1 |
| soporte | soporte1 |
| usuario1 | usuario1 |
| lima | lima1 |
