# ISP - Servicios manuales

## IP de servidores

| Servidor | IP | Mascara | Gateway | DNS |
| --- | --- | --- | --- | --- |
| DNS_ISP | 31.70.183.10 | 255.255.255.0 | 31.70.183.1 | 31.70.183.10 |
| WEB_ISP | 31.70.183.20 | 255.255.255.0 | 31.70.183.1 | 31.70.183.10 |

## WEB_ISP

`WEB_ISP > Services > HTTP`: `On`

Prueba:

```text
http://31.70.183.20
```

## DNS_ISP

`DNS_ISP > Services > DNS`: `On`

| Name | Address |
| --- | --- |
| www.oracle.com | 31.70.183.20 |
| dns.oracle.com | 31.70.183.10 |

Prueba:

```text
http://www.oracle.com
```
