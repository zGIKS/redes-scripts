# Orden de ejecucion del TF

1. Ejecuta primero los scripts LAN ya existentes por sede.
2. Ejecuta `01_wan_postboot.js` para agregar los enlaces WAN seriales y las rutas.
3. Ejecuta `02_seguridad_postboot.js` para SSH y hardening.
4. Ejecuta `02b_politicas_acl_postboot.js` para restringir gestión remota y acceso a FTP por sede.
5. Ejecuta `02c_dhcp_relay_postboot.js` para habilitar `ip helper-address` en las VLAN de usuarios y WiFi.
6. Ejecuta `03_internet_topologia.js` para agregar la conectividad de Internet entre `ISP1`, `ISP2` e `ISP3`.

## Supuestos usados

- Se reutilizan los nombres de dispositivos ya creados en tus clusters.
- La WAN entre sedes queda en hub-and-spoke: Lima conecta directo a cada sede remota.
- Los enlaces WAN internos usan `10.192.60.0/28` dividido en cuatro /30.
- Si luego quieres agregar Internet, lo hacemos en un script aparte para no mezclarlo con la WAN interna.
