# Orden de ejecucion del TF

1. Ejecuta primero los scripts LAN ya existentes por sede.
2. Ejecuta `01_wan_postboot.js` para agregar los enlaces WAN seriales y las rutas.
3. Ejecuta `02_seguridad_postboot.js` para SSH, hardening, direccionamiento WAN y RIPv2.
4. Ejecuta `02a_ppp_wan_auth_postboot.js` para habilitar PPP con CHAP/PAP en los enlaces WAN internos.
5. Ejecuta `02b_politicas_acl_postboot.js` para restringir gestión remota y acceso a FTP por sede.
6. Ejecuta `02c_dhcp_relay_postboot.js` para habilitar `ip helper-address` en las VLAN de usuarios y WiFi.
7. Ejecuta `03_internet_topologia.js` para agregar la conectividad de Internet entre `ISP1`, `ISP2` e `ISP3`.
8. Ejecuta `04_servicios_reales_postboot.js` para cargar HTTP, DNS, DHCP, FTP y correo en los servidores.

## Supuestos usados

- Se reutilizan los nombres de dispositivos ya creados en tus clusters.
- La WAN entre sedes queda en hub-and-spoke: Lima conecta directo a cada sede remota.
- Los enlaces WAN internos usan `10.192.60.0/28` dividido en cuatro /30.
- La autenticacion WAN queda alineada al caso: WAN1 y WAN3 usan CHAP; WAN2 y WAN4 usan PAP.
- Si luego quieres agregar Internet, lo hacemos en un script aparte para no mezclarlo con la WAN interna.
