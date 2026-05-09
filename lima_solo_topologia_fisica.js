// LIMA - SOLO TOPOLOGIA FISICA
// Esta script solo crea equipos y cables.
// No configura VLANs, trunks, IPs ni router.
// Despues de cargarla, esperar que todos los equipos terminen de bootear.

addDevice("ROUTER_LIMA", "2911", 650, 50);

addDevice("MS1_CORE_LIMA", "3650-24PS", 650, 170);
addDevice("MS2_WIFI_LIMA", "3650-24PS", 260, 320);
addDevice("MS3_DIST_LIMA", "3650-24PS", 650, 320);
addDevice("MS4_DIST_LIMA", "3650-24PS", 1030, 320);

addDevice("SW1_LIMA", "2960-24TT", 430, 500);
addDevice("SW2_LIMA", "2960-24TT", 650, 500);
addDevice("SW3_LIMA", "2960-24TT", 870, 500);

addDevice("AP_CLIENTE_LIMA", "AccessPoint-PT-AC", 150, 500);
addDevice("AP_EJECUTIVO_LIMA", "AccessPoint-PT-AC", 150, 660);
addDevice("WIFI_TELEFONO_CLIENTE", "SMARTPHONE-PT", 40, 500);
addDevice("WIFI_LAPTOP_EJECUTIVO", "Laptop-PT", 40, 660);

addDevice("PC_VENTAS_1", "PC-PT", 430, 660);
addDevice("PC_VENTAS_2", "PC-PT", 650, 660);
addDevice("PC_LOGISTICA", "PC-PT", 810, 660);
addDevice("PC_MARKETING", "PC-PT", 930, 660);
addDevice("PC_FINANZAS", "PC-PT", 1050, 660);

addDevice("WEB_LIMA", "Server-PT", 1170, 170);
addDevice("DNS_LIMA", "Server-PT", 1280, 220);
addDevice("DHCP_LIMA", "Server-PT", 1170, 320);
addDevice("FTP_LIMA", "Server-PT", 1280, 370);
addDevice("MAIL_LIMA", "Server-PT", 1170, 450);

// Router a primer multilayer: cobre normal.
addLink("ROUTER_LIMA", "GigabitEthernet0/0", "MS1_CORE_LIMA", "GigabitEthernet1/0/1", "straight");

// MS1 a MS2/MS3/MS4: Copper Cross-Over.
addLink("MS1_CORE_LIMA", "GigabitEthernet1/0/2", "MS2_WIFI_LIMA", "GigabitEthernet1/0/1", "cross");
addLink("MS1_CORE_LIMA", "GigabitEthernet1/0/3", "MS3_DIST_LIMA", "GigabitEthernet1/0/1", "cross");
addLink("MS1_CORE_LIMA", "GigabitEthernet1/0/4", "MS4_DIST_LIMA", "GigabitEthernet1/0/1", "cross");

// MS2 a APs: cobre normal.
addLink("MS2_WIFI_LIMA", "GigabitEthernet1/0/2", "AP_CLIENTE_LIMA", "Port 0", "straight");
addLink("MS2_WIFI_LIMA", "GigabitEthernet1/0/3", "AP_EJECUTIVO_LIMA", "Port 0", "straight");

// MS3 a los 3 switches 2960: Copper Cross-Over.
addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/2", "SW1_LIMA", "GigabitEthernet0/1", "cross");
addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/3", "SW2_LIMA", "GigabitEthernet0/1", "cross");
addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/4", "SW3_LIMA", "GigabitEthernet0/1", "cross");

// MS4 a los 3 switches 2960: Copper Cross-Over.
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/2", "SW1_LIMA", "GigabitEthernet0/2", "cross");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/3", "SW2_LIMA", "GigabitEthernet0/2", "cross");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/4", "SW3_LIMA", "GigabitEthernet0/2", "cross");

// PCs: cobre normal.
addLink("SW1_LIMA", "FastEthernet0/1", "PC_VENTAS_1", "FastEthernet0", "straight");
addLink("SW2_LIMA", "FastEthernet0/1", "PC_VENTAS_2", "FastEthernet0", "straight");
addLink("SW3_LIMA", "FastEthernet0/1", "PC_LOGISTICA", "FastEthernet0", "straight");
addLink("SW3_LIMA", "FastEthernet0/2", "PC_MARKETING", "FastEthernet0", "straight");
addLink("SW3_LIMA", "FastEthernet0/3", "PC_FINANZAS", "FastEthernet0", "straight");

// Servidores: agregar modulo PT-HOST-NM-1CGE y cables Gigabit manualmente.
// Ver servidores-gig.MD.
