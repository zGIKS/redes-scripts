* [x] Falta PPP PAP/CHAP en los enlaces WAN. El caso lo pide explícitamente, pero en scripts solo hay serial + IP + clock rate; no se evidenció `encapsulation ppp`, `ppp authentication chap/pap`, usuarios ni passwords.

* [ ] Falta configurar servicios reales por script: FTP, HTTP, DNS, DHCP, SMTP y POP3. Los scripts asignan IP a servidores, pero no activan ni completan los servicios.

* [ ] FTP está incompleto: faltan usuarios, passwords y permisos por sede en script. En anexos hay capturas, pero no queda automatizado.

* [ ] DNS está incompleto: faltan registros de todas las sedes en Lima y registros locales por sede.

* [ ] DHCP está incompleto: hay `ip helper-address`, pero faltan pools DHCP configurados en servidores.

* [ ] Web está incompleto en scripts: faltan páginas con integrantes/fotos por sede. Hay evidencia visual en Imgur, pero no script.

* [ ] Mail está incompleto: falta SMTP/POP3 real, usuarios, dominio y pruebas de envío/recepción.

* [ ] WiFi está incompleto: faltan SSID, WPA2, claves y clientes inalámbricos con configuración DHCP/WPA2.

* [ ] Las ACL FTP probablemente están mal aplicadas: están configuradas inbound en la subinterfaz del servidor, pero para bloquear accesos hacia el servidor normalmente debe filtrarse en la entrada desde las VLANs origen o en la salida hacia la VLAN del servidor. Así como está, puede no bloquear lo esperado.

* [ ] Faltan pruebas verificables: ping intra VLAN, inter VLAN, entre sedes, hacia ISP, DNS, HTTP, FTP permitido/denegado, SSH desde PC-ADMIN y mail.

* [ ] Falta verificar failover ISP: hay ruta primaria y ruta flotante, pero no hay evidencia de prueba con el enlace primario caído.

* [ ] Falta documentar/comprobar tablas de routing en routers.

* [ ] Falta alinear todo con los anexos de Neil: sus `anexos.md` y `docs.md` muestran pendientes manuales que todavía no están absorbidos en scripts.
