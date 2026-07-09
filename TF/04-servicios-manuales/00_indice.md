# Servicios manuales Server-PT

En Packet Tracer los servicios internos de `Server-PT` se completan mejor a mano en `Services`.

Diseno simplificado y defendible:

- DNS corporativo centralizado: solo `DNS_LIMA` resuelve nombres de todas las sedes.
- DHCP local por sede: solo para redes WiFi Clientes y WiFi Ejecutivos.
- PCs cableadas: mantienen IP estatica segun los scripts/tablas.
- WEB/FTP/MAIL: se activa por sede en su servidor local.

Archivos:

1. `01_lima.md`: DNS corporativo, DHCP WiFi Lima, WEB/FTP/MAIL Lima.
2. `02_la_libertad.md`: DHCP WiFi, WEB/FTP/MAIL La Libertad.
3. `03_ica.md`: DHCP WiFi, WEB/FTP/MAIL Ica.
4. `04_huanuco.md`: DHCP WiFi, WEB/FTP/MAIL Huanuco.
5. `05_puno.md`: DHCP WiFi, WEB/FTP/MAIL Puno.
6. `06_isp.md`: DNS/WEB ISP.

Importante:

- Toda PC que pruebe paginas por nombre debe usar DNS `10.192.42.163`.
- Los pools DHCP WiFi de todas las sedes entregan DNS `10.192.42.163`.
- Si una PC cableada tiene DNS local antiguo, cambialo manualmente a `10.192.42.163` para las pruebas de nombres.

Prueba base desde cualquier sede:

```text
nslookup www.lima.com
nslookup www.la-libertad.com
nslookup www.ica.com
nslookup www.huanuco.com
nslookup www.puno.com
```
