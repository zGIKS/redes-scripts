// PUNO - SOLO TOPOLOGIA FISICA
// Esta script solo crea equipos y cables.
// No configura VLANs, trunks, IPs ni router.
// Despues de cargarla, esperar que todos los equipos terminen de bootear.

addDevice("ROUTER_PUNO", "2911", 650, 50);

addDevice("MS1_CORE_PUNO", "3650-24PS", 650, 170);
addDevice("MS2_WIFI_PUNO", "3650-24PS", 260, 320);
addDevice("MS3_DIST_PUNO", "3650-24PS", 650, 320);
addDevice("MS4_DIST_PUNO", "3650-24PS", 1030, 320);

addDevice("SW1_PUNO", "2960-24TT", 430, 500);
addDevice("SW2_PUNO", "2960-24TT", 650, 500);
addDevice("SW3_PUNO", "2960-24TT", 870, 500);

addDevice("AP_CLIENTE_PUNO", "AccessPoint-PT-AC", 150, 500);
addDevice("AP_EJECUTIVO_PUNO", "AccessPoint-PT-AC", 150, 660);
addDevice("WIFI_TELEFONO_CLIENTE_PUNO", "SMARTPHONE-PT", 40, 500);
addDevice("WIFI_LAPTOP_EJECUTIVO_PUNO", "Laptop-PT", 40, 660);

addDevice("PC_VENTAS_1_PUNO", "PC-PT", 430, 660);
addDevice("PC_VENTAS_2_PUNO", "PC-PT", 650, 660);
addDevice("PC_VENTAS_3_PUNO", "PC-PT", 540, 660);
addDevice("PC_ADMINISTRACION_PUNO", "PC-PT", 320, 660);
addDevice("PC_LOGISTICA_PUNO", "PC-PT", 810, 660);
addDevice("PC_MARKETING_PUNO", "PC-PT", 930, 660);
addDevice("PC_FINANZAS_PUNO", "PC-PT", 1050, 660);
addDevice("PC_ADMIN_PUNO", "PC-PT", 1170, 660);

addDevice("WEB_PUNO", "Server-PT", 1170, 170);
addDevice("DNS_PUNO", "Server-PT", 1280, 220);
addDevice("DHCP_PUNO", "Server-PT", 1170, 320);
addDevice("FTP_PUNO", "Server-PT", 1280, 370);
addDevice("MAIL_PUNO", "Server-PT", 1170, 450);

// Router a primer multilayer: cobre normal.
addLink("ROUTER_PUNO", "GigabitEthernet0/0", "MS1_CORE_PUNO", "GigabitEthernet1/0/1", "straight");

// MS1 a MS2/MS3/MS4: Copper Cross-Over.
addLink("MS1_CORE_PUNO", "GigabitEthernet1/0/2", "MS2_WIFI_PUNO", "GigabitEthernet1/0/1", "cross");
addLink("MS1_CORE_PUNO", "GigabitEthernet1/0/3", "MS3_DIST_PUNO", "GigabitEthernet1/0/1", "cross");
addLink("MS1_CORE_PUNO", "GigabitEthernet1/0/4", "MS4_DIST_PUNO", "GigabitEthernet1/0/1", "cross");

// MS2 a APs: cobre normal.
addLink("MS2_WIFI_PUNO", "GigabitEthernet1/0/2", "AP_CLIENTE_PUNO", "Port 0", "straight");
addLink("MS2_WIFI_PUNO", "GigabitEthernet1/0/3", "AP_EJECUTIVO_PUNO", "Port 0", "straight");

// MS3 a los 3 switches 2960: Copper Cross-Over.
addLink("MS3_DIST_PUNO", "GigabitEthernet1/0/2", "SW1_PUNO", "GigabitEthernet0/1", "cross");
addLink("MS3_DIST_PUNO", "GigabitEthernet1/0/3", "SW2_PUNO", "GigabitEthernet0/1", "cross");
addLink("MS3_DIST_PUNO", "GigabitEthernet1/0/4", "SW3_PUNO", "GigabitEthernet0/1", "cross");

// MS4 a los 3 switches 2960: Copper Cross-Over.
addLink("MS4_DIST_PUNO", "GigabitEthernet1/0/2", "SW1_PUNO", "GigabitEthernet0/2", "cross");
addLink("MS4_DIST_PUNO", "GigabitEthernet1/0/3", "SW2_PUNO", "GigabitEthernet0/2", "cross");
addLink("MS4_DIST_PUNO", "GigabitEthernet1/0/4", "SW3_PUNO", "GigabitEthernet0/2", "cross");

// PCs: cobre normal.
addLink("SW1_PUNO", "FastEthernet0/1", "PC_VENTAS_1_PUNO", "FastEthernet0", "straight");
addLink("SW1_PUNO", "FastEthernet0/2", "PC_ADMINISTRACION_PUNO", "FastEthernet0", "straight");
addLink("SW2_PUNO", "FastEthernet0/1", "PC_VENTAS_2_PUNO", "FastEthernet0", "straight");
addLink("SW2_PUNO", "FastEthernet0/2", "PC_VENTAS_3_PUNO", "FastEthernet0", "straight");
addLink("SW3_PUNO", "FastEthernet0/1", "PC_LOGISTICA_PUNO", "FastEthernet0", "straight");
addLink("SW3_PUNO", "FastEthernet0/2", "PC_MARKETING_PUNO", "FastEthernet0", "straight");
addLink("SW3_PUNO", "FastEthernet0/3", "PC_FINANZAS_PUNO", "FastEthernet0", "straight");
addLink("SW3_PUNO", "FastEthernet0/4", "PC_ADMIN_PUNO", "FastEthernet0", "straight");

// Servidores: ejecutar puno_servidores_gig_modulos_y_cables.js para quitar FastEthernet y usar Gigabit.
