// PC1 - U202319963 - TOPOLOGIA COMPLETA CON SERIAL
// Ejecutar en un archivo Packet Tracer nuevo.
// Orden correcto segun Code Builder/PTBuilder: addDevice -> addModule -> addLink.

addDevice("R1_U202319963", "2911", 420, 300);
addDevice("R2_U202319963", "2911", 680, 300);

// Tu captura muestra HWIC-2T. Este modulo agrega Serial0/0/0 y Serial0/0/1.
addModule("R1_U202319963", "0/0", "HWIC-2T");
addModule("R2_U202319963", "0/0", "HWIC-2T");

addDevice("SW1_U202319963", "2950-24", 230, 150);
addDevice("SW2_U202319963", "2950-24", 230, 450);
addDevice("SW3_U202319963", "2950-24", 870, 150);
addDevice("SW4_U202319963", "2950-24", 870, 450);

addDevice("PC0_U202319963", "PC-PT", 60, 150);
addDevice("PC1_U202319963", "PC-PT", 60, 450);
addDevice("PC2_U202319963", "PC-PT", 1040, 150);
addDevice("PC3_U202319963", "PC-PT", 1040, 450);

// LAN 1: 58 hosts.
addLink("PC0_U202319963", "FastEthernet0", "SW1_U202319963", "FastEthernet0/1", "straight");
addLink("SW1_U202319963", "FastEthernet0/2", "R1_U202319963", "GigabitEthernet0/0", "straight");

// LAN 2: 5 hosts.
addLink("PC1_U202319963", "FastEthernet0", "SW2_U202319963", "FastEthernet0/1", "straight");
addLink("SW2_U202319963", "FastEthernet0/2", "R1_U202319963", "GigabitEthernet0/1", "straight");

// WAN: 2 hosts, 10.50.80.96/30.
addLink("R1_U202319963", "Serial0/0/0", "R2_U202319963", "Serial0/0/0", "serial");

// LAN 3: 12 hosts.
addLink("PC2_U202319963", "FastEthernet0", "SW3_U202319963", "FastEthernet0/1", "straight");
addLink("SW3_U202319963", "FastEthernet0/2", "R2_U202319963", "GigabitEthernet0/0", "straight");

// LAN 4: 4 hosts.
addLink("PC3_U202319963", "FastEthernet0", "SW4_U202319963", "FastEthernet0/1", "straight");
addLink("SW4_U202319963", "FastEthernet0/2", "R2_U202319963", "GigabitEthernet0/1", "straight");
