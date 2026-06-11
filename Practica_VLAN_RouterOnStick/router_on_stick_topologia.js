// Practica VLANs - Router on Stick
// Ejecutar primero en Cisco Packet Tracer Code Builder.
// Topologia segun la imagen: 1 router, 2 switches y 6 PCs.

addDevice("ALEMAN_ROMANO_DANTE_MATEO", "1841", 520, 70);

addDevice("SW1", "2960-24TT", 320, 250);
addDevice("SW2", "2960-24TT", 720, 250);

addDevice("PC4", "PC-PT", 120, 420);
addDevice("PC5", "PC-PT", 300, 560);
addDevice("PC6", "PC-PT", 500, 420);
addDevice("PC7", "PC-PT", 650, 420);
addDevice("PC8", "PC-PT", 900, 420);
addDevice("PC9", "PC-PT", 760, 560);

addLink("ALEMAN_ROMANO_DANTE_MATEO", "FastEthernet0/0", "SW1", "FastEthernet0/1", "straight");
addLink("SW1", "FastEthernet0/2", "SW2", "FastEthernet0/1", "cross");

addLink("PC4", "FastEthernet0", "SW1", "FastEthernet0/3", "straight");
addLink("PC5", "FastEthernet0", "SW1", "FastEthernet0/4", "straight");
addLink("PC6", "FastEthernet0", "SW1", "FastEthernet0/5", "straight");

addLink("PC7", "FastEthernet0", "SW2", "FastEthernet0/2", "straight");
addLink("PC9", "FastEthernet0", "SW2", "FastEthernet0/3", "straight");
addLink("PC8", "FastEthernet0", "SW2", "FastEthernet0/4", "straight");
