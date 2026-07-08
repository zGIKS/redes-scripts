# Servicios manuales Server-PT

Packet Tracer no esta aplicando por script la configuracion interna de `Services` en los servidores. Usa estos archivos para completar a mano:

1. `01_lima.md`
2. `02_la_libertad.md`
3. `03_ica.md`
4. `04_huanuco.md`
5. `05_puno.md`
6. `06_isp.md`

Orden recomendado por sede:

1. Verificar `Desktop > IP Configuration` del servidor.
2. Activar `HTTP`, `DNS`, `DHCP`, `FTP` o `EMAIL` segun corresponda.
3. Cargar registros DNS.
4. Cargar pools DHCP.
5. Cargar usuarios FTP.
6. Cargar usuarios de correo.
7. Probar desde una PC: ping, web por IP, web por nombre, FTP, DHCP y correo.

Regla rapida:

- Si abre por IP pero no por nombre, falta DNS o la PC tiene DNS mal.
- Si DHCP no entrega IP, revisa el pool y que el router tenga `ip helper-address` hacia el servidor DHCP local.
- Si FTP abre pero no acepta usuarios, faltan usuarios/permisos.
