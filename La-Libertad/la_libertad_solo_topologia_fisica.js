// LA LIBERTAD - SOLO TOPOLOGIA FISICA
// Esta script solo crea equipos y cables.
// No configura VLANs, trunks, IPs ni router.
// Despues de cargarla, esperar que todos los equipos terminen de bootear.

addDevice("ROUTER_LA_LIBERTAD", "2911", 650, 50);

addDevice("MS1_CORE_LA_LIBERTAD", "3650-24PS", 650, 170);
addDevice("MS2_WIFI_LA_LIBERTAD", "3650-24PS", 260, 320);
addDevice("MS3_DIST_LA_LIBERTAD", "3650-24PS", 650, 320);
addDevice("MS4_DIST_LA_LIBERTAD", "3650-24PS", 1030, 320);

addDevice("SW1_LA_LIBERTAD", "2960-24TT", 430, 500);
addDevice("SW2_LA_LIBERTAD", "2960-24TT", 650, 500);
addDevice("SW3_LA_LIBERTAD", "2960-24TT", 870, 500);

addDevice("AP_CLIENTE_LA_LIBERTAD", "AccessPoint-PT-AC", 150, 500);
addDevice("AP_EJECUTIVO_LA_LIBERTAD", "AccessPoint-PT-AC", 150, 660);
addDevice("WIFI_TELEFONO_CLIENTE_LA_LIBERTAD", "SMARTPHONE-PT", 40, 500);
addDevice("WIFI_LAPTOP_EJECUTIVO_LA_LIBERTAD", "Laptop-PT", 40, 660);

addDevice("PC_VENTAS_1_LA_LIBERTAD", "PC-PT", 430, 660);
addDevice("PC_VENTAS_2_LA_LIBERTAD", "PC-PT", 650, 660);
addDevice("PC_VENTAS_3_LA_LIBERTAD", "PC-PT", 540, 660);
addDevice("PC_ADMINISTRACION_LA_LIBERTAD", "PC-PT", 320, 660);
addDevice("PC_LOGISTICA_LA_LIBERTAD", "PC-PT", 810, 660);
addDevice("PC_MARKETING_LA_LIBERTAD", "PC-PT", 930, 660);
addDevice("PC_FINANZAS_LA_LIBERTAD", "PC-PT", 1050, 660);
addDevice("PC_ADMIN_LA_LIBERTAD", "PC-PT", 1170, 660);

addDevice("WEB_LA_LIBERTAD", "Server-PT", 1170, 170);
addDevice("DNS_LA_LIBERTAD", "Server-PT", 1280, 220);
addDevice("DHCP_LA_LIBERTAD", "Server-PT", 1170, 320);
addDevice("FTP_LA_LIBERTAD", "Server-PT", 1280, 370);
addDevice("MAIL_LA_LIBERTAD", "Server-PT", 1170, 450);

// Router a primer multilayer: cobre normal.
addLink("ROUTER_LA_LIBERTAD", "GigabitEthernet0/0", "MS1_CORE_LA_LIBERTAD", "GigabitEthernet1/0/1", "straight");

// MS1 a MS2/MS3/MS4: Copper Cross-Over.
addLink("MS1_CORE_LA_LIBERTAD", "GigabitEthernet1/0/2", "MS2_WIFI_LA_LIBERTAD", "GigabitEthernet1/0/1", "cross");
addLink("MS1_CORE_LA_LIBERTAD", "GigabitEthernet1/0/3", "MS3_DIST_LA_LIBERTAD", "GigabitEthernet1/0/1", "cross");
addLink("MS1_CORE_LA_LIBERTAD", "GigabitEthernet1/0/4", "MS4_DIST_LA_LIBERTAD", "GigabitEthernet1/0/1", "cross");

// MS2 a APs: cobre normal.
addLink("MS2_WIFI_LA_LIBERTAD", "GigabitEthernet1/0/2", "AP_CLIENTE_LA_LIBERTAD", "Port 0", "straight");
addLink("MS2_WIFI_LA_LIBERTAD", "GigabitEthernet1/0/3", "AP_EJECUTIVO_LA_LIBERTAD", "Port 0", "straight");

// MS3 a los 3 switches 2960: Copper Cross-Over.
addLink("MS3_DIST_LA_LIBERTAD", "GigabitEthernet1/0/2", "SW1_LA_LIBERTAD", "GigabitEthernet0/1", "cross");
addLink("MS3_DIST_LA_LIBERTAD", "GigabitEthernet1/0/3", "SW2_LA_LIBERTAD", "GigabitEthernet0/1", "cross");
addLink("MS3_DIST_LA_LIBERTAD", "GigabitEthernet1/0/4", "SW3_LA_LIBERTAD", "GigabitEthernet0/1", "cross");

// MS4 a los 3 switches 2960: Copper Cross-Over.
addLink("MS4_DIST_LA_LIBERTAD", "GigabitEthernet1/0/2", "SW1_LA_LIBERTAD", "GigabitEthernet0/2", "cross");
addLink("MS4_DIST_LA_LIBERTAD", "GigabitEthernet1/0/3", "SW2_LA_LIBERTAD", "GigabitEthernet0/2", "cross");
addLink("MS4_DIST_LA_LIBERTAD", "GigabitEthernet1/0/4", "SW3_LA_LIBERTAD", "GigabitEthernet0/2", "cross");

// PCs: cobre normal.
addLink("SW1_LA_LIBERTAD", "FastEthernet0/1", "PC_VENTAS_1_LA_LIBERTAD", "FastEthernet0", "straight");
addLink("SW1_LA_LIBERTAD", "FastEthernet0/2", "PC_ADMINISTRACION_LA_LIBERTAD", "FastEthernet0", "straight");
addLink("SW2_LA_LIBERTAD", "FastEthernet0/1", "PC_VENTAS_2_LA_LIBERTAD", "FastEthernet0", "straight");
addLink("SW2_LA_LIBERTAD", "FastEthernet0/2", "PC_VENTAS_3_LA_LIBERTAD", "FastEthernet0", "straight");
addLink("SW3_LA_LIBERTAD", "FastEthernet0/1", "PC_LOGISTICA_LA_LIBERTAD", "FastEthernet0", "straight");
addLink("SW3_LA_LIBERTAD", "FastEthernet0/2", "PC_MARKETING_LA_LIBERTAD", "FastEthernet0", "straight");
addLink("SW3_LA_LIBERTAD", "FastEthernet0/3", "PC_FINANZAS_LA_LIBERTAD", "FastEthernet0", "straight");
addLink("SW3_LA_LIBERTAD", "FastEthernet0/4", "PC_ADMIN_LA_LIBERTAD", "FastEthernet0", "straight");

// Servidores: ejecutar la_libertad_servidores_gig_modulos_y_cables.js para quitar FastEthernet y usar Gigabit.
