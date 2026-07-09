* [x] Falta PPP PAP/CHAP en los enlaces WAN. El caso lo pide explícitamente, pero en scripts solo hay serial + IP + clock rate; no se evidenció `encapsulation ppp`, `ppp authentication chap/pap`, usuarios ni passwords.

* [x] Falta configurar servicios reales por script: FTP, HTTP, DNS, DHCP, SMTP y POP3. Los scripts asignan IP a servidores, pero no activan ni completan los servicios.
  Nota: Packet Tracer no esta aplicando la configuracion interna de servicios Server-PT por script. Se debe completar/validar manualmente en `Server > Services` usando la carpeta `TF/04-servicios-manuales/`.

* [x] FTP está incompleto: faltan usuarios, passwords y permisos por sede en script. En anexos hay capturas, pero no queda automatizado.

* [x] DNS está incompleto: faltaban registros de todas las sedes. Se resolvio con DNS corporativo centralizado en `DNS_LIMA` (`10.192.42.163`); no se configuran DNS locales por sede salvo que el profesor lo pida.

* [x] DHCP está incompleto: hay `ip helper-address`, pero faltan pools DHCP configurados en servidores. Se dejo manual y reducido a pools WiFi Clientes/Ejecutivos por sede; las PCs cableadas quedan estaticas.

* [x] Web está incompleto en scripts: faltan páginas con integrantes/fotos por sede. Hay evidencia visual en Imgur, pero no script.

* [x] Mail está incompleto: falta SMTP/POP3 real, usuarios, dominio y pruebas de envío/recepción.

* [x] WiFi está incompleto: faltan SSID, WPA2, claves y clientes inalámbricos con configuración DHCP/WPA2.

* [x] Las ACL FTP probablemente están mal aplicadas: están configuradas inbound en la subinterfaz del servidor, pero para bloquear accesos hacia el servidor normalmente debe filtrarse en la entrada desde las VLANs origen o en la salida hacia la VLAN del servidor. Así como está, puede no bloquear lo esperado.

* [ ] Faltan pruebas verificables: ping intra VLAN, inter VLAN, entre sedes, hacia ISP, DNS, HTTP, FTP permitido/denegado, SSH desde PC-ADMIN y mail.

* [x] Falta verificar failover ISP: hay ruta primaria y ruta flotante, pero no hay evidencia de prueba con el enlace primario caído.

* [ ] Falta documentar/comprobar tablas de routing en routers.

* [ ] Falta alinear todo con los anexos de Neil: sus `anexos.md` y `docs.md` muestran pendientes manuales que todavía no están absorbidos en scripts.
