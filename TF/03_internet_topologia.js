// 03_internet_topologia.js
// Script directo para crear la topología física de la conexión a Internet.
// Utiliza la sintaxis estándar del entorno de Packet Tracer, sin dependencias de 'ipc'.

// 1. Instalar módulo HWIC-2T en la ranura 0/2 de ROUTER_LIMA (crea Serial0/2/0 y Serial0/2/1)
// Se usa la ranura 0/2 porque las ranuras 0/0 y 0/1 están reservadas para la WAN interna de las sedes.
addModule("ROUTER_LIMA", "0/2", "HWIC-2T");

// 2. Instalar módulo HWIC-2T en la ranura 0/2 de ISP1 (crea Serial0/2/0)
addModule("ISP1", "0/2", "HWIC-2T");

// 3. Instalar módulo HWIC-2T en la ranura 0/2 de ISP2 (crea Serial0/2/0)
addModule("ISP2", "0/2", "HWIC-2T");

// 4. Instalar módulo NM-1FE-TX en la ranura 1 de ISP3 (crea FastEthernet1/0)
addModule("ISP3", "1", "NM-1FE-TX");

// 5. Conectar los enlaces físicos correspondientes
addLink("ROUTER_LIMA", "Serial0/2/0", "ISP1", "Serial0/2/0", "serial");
addLink("ROUTER_LIMA", "Serial0/2/1", "ISP2", "Serial0/2/0", "serial");
addLink("ISP3", "FastEthernet1/0", "Switch8", "FastEthernet0/1", "straight");
