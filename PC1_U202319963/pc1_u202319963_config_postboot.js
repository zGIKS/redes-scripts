// PC1 - U202319963 - CONFIGURACION POST-BOOT
// Ejecutar al final, despues de que routers y switches terminen de arrancar.
//
// VLSM sobre 10.50.80.0/24:
// LAN 1: 58 hosts -> 10.50.80.0/26
// LAN 3: 12 hosts -> 10.50.80.64/28
// LAN 2:  5 hosts -> 10.50.80.80/29
// LAN 4:  4 hosts -> 10.50.80.88/29
// WAN:    2 hosts -> 10.50.80.96/30

configureIosDevice("R1_U202319963", "enable\nconfigure terminal\nhostname R1_U202319963\nno ip domain-lookup\ninterface GigabitEthernet0/0\ndescription LAN 1 - 58 hosts\nip address 10.50.80.1 255.255.255.192\nno shutdown\nexit\ninterface GigabitEthernet0/1\ndescription LAN 2 - 5 hosts\nip address 10.50.80.81 255.255.255.248\nno shutdown\nexit\ninterface Serial0/0/0\ndescription WAN hacia R2_U202319963\nip address 10.50.80.97 255.255.255.252\nclock rate 64000\nno shutdown\nexit\nrouter rip\nversion 2\nno auto-summary\nnetwork 10.0.0.0\nexit\nend");

configureIosDevice("R2_U202319963", "enable\nconfigure terminal\nhostname R2_U202319963\nno ip domain-lookup\ninterface GigabitEthernet0/0\ndescription LAN 3 - 12 hosts\nip address 10.50.80.65 255.255.255.240\nno shutdown\nexit\ninterface GigabitEthernet0/1\ndescription LAN 4 - 4 hosts\nip address 10.50.80.89 255.255.255.248\nno shutdown\nexit\ninterface Serial0/0/0\ndescription WAN hacia R1_U202319963\nip address 10.50.80.98 255.255.255.252\nno shutdown\nexit\nrouter rip\nversion 2\nno auto-summary\nnetwork 10.0.0.0\nexit\nend");

configureIosDevice("SW1_U202319963", "enable\nconfigure terminal\nhostname SW1_U202319963\nno ip domain-lookup\ninterface FastEthernet0/1\ndescription PC0 LAN 1\nswitchport mode access\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\ndescription R1 LAN 1\nswitchport mode access\nno shutdown\nexit\nend");

configureIosDevice("SW2_U202319963", "enable\nconfigure terminal\nhostname SW2_U202319963\nno ip domain-lookup\ninterface FastEthernet0/1\ndescription PC1 LAN 2\nswitchport mode access\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\ndescription R1 LAN 2\nswitchport mode access\nno shutdown\nexit\nend");

configureIosDevice("SW3_U202319963", "enable\nconfigure terminal\nhostname SW3_U202319963\nno ip domain-lookup\ninterface FastEthernet0/1\ndescription PC2 LAN 3\nswitchport mode access\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\ndescription R2 LAN 3\nswitchport mode access\nno shutdown\nexit\nend");

configureIosDevice("SW4_U202319963", "enable\nconfigure terminal\nhostname SW4_U202319963\nno ip domain-lookup\ninterface FastEthernet0/1\ndescription PC3 LAN 4\nswitchport mode access\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\ndescription R2 LAN 4\nswitchport mode access\nno shutdown\nexit\nend");

configurePcIp("PC0_U202319963", false, "10.50.80.2", "255.255.255.192", "10.50.80.1", "10.50.80.1");
configurePcIp("PC1_U202319963", false, "10.50.80.82", "255.255.255.248", "10.50.80.81", "10.50.80.81");
configurePcIp("PC2_U202319963", false, "10.50.80.66", "255.255.255.240", "10.50.80.65", "10.50.80.65");
configurePcIp("PC3_U202319963", false, "10.50.80.90", "255.255.255.248", "10.50.80.89", "10.50.80.89");
