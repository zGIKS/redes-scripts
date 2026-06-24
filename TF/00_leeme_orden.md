# Orden de ejecucion del TF

1. Ejecuta primero los scripts LAN ya existentes por sede.
2. Ejecuta `01_wan_postboot.js` para agregar los enlaces WAN seriales y las rutas.
3. Ejecuta `02_seguridad_postboot.js` para SSH, hardening y ACLs.

## Supuestos usados

- Se reutilizan los nombres de dispositivos ya creados en tus clusters.
- La WAN entre sedes queda en hub-and-spoke: Lima conecta directo a cada sede remota.
- Los enlaces WAN internos usan `10.192.60.0/28` dividido en cuatro /30.
- Si luego quieres agregar Internet, lo hacemos en un script aparte para no mezclarlo con la WAN interna.
