// Practica VLANs - Configuracion post-boot
// Ejecutar despues de que router y switches terminen de arrancar.

configureIosDevice("ALEMAN_ROMANO_DANTE_MATEO", "enable\nconfigure terminal\nhostname ALEMAN_ROMANO_DANTE_MATEO\nno ip domain-lookup\ninterface FastEthernet0/0\ndescription Trunk hacia SW1\nno ip address\nno shutdown\nexit\ninterface FastEthernet0/0.10\ndescription Gateway VLAN 10\nencapsulation dot1Q 10\nip address 192.168.10.1 255.255.255.0\nexit\ninterface FastEthernet0/0.20\ndescription Gateway VLAN 20\nencapsulation dot1Q 20\nip address 192.168.20.1 255.255.255.0\nexit\ninterface FastEthernet0/0.30\ndescription Gateway VLAN 30\nencapsulation dot1Q 30\nip address 192.168.30.1 255.255.255.0\nexit\nend");

configureIosDevice("SW1", "enable\nconfigure terminal\nhostname SW1\nno ip domain-lookup\nvlan 10\nname VLAN10\nexit\nvlan 20\nname VLAN20\nexit\nvlan 30\nname VLAN30\nexit\ninterface FastEthernet0/1\ndescription Trunk hacia router\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30\nno shutdown\nexit\ninterface FastEthernet0/2\ndescription Trunk hacia SW2\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30\nno shutdown\nexit\ninterface FastEthernet0/3\ndescription PC4 VLAN 10\nswitchport mode access\nswitchport access vlan 10\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/4\ndescription PC5 VLAN 20\nswitchport mode access\nswitchport access vlan 20\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/5\ndescription PC6 VLAN 30\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW2", "enable\nconfigure terminal\nhostname SW2\nno ip domain-lookup\nvlan 10\nname VLAN10\nexit\nvlan 20\nname VLAN20\nexit\nvlan 30\nname VLAN30\nexit\ninterface FastEthernet0/1\ndescription Trunk hacia SW1\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30\nno shutdown\nexit\ninterface FastEthernet0/2\ndescription PC7 VLAN 10\nswitchport mode access\nswitchport access vlan 10\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/3\ndescription PC9 VLAN 20\nswitchport mode access\nswitchport access vlan 20\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/4\ndescription PC8 VLAN 30\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\nend");

configurePcIp("PC4", false, "192.168.10.51", "255.255.255.0", "192.168.10.1", "192.168.10.1");
configurePcIp("PC7", false, "192.168.10.61", "255.255.255.0", "192.168.10.1", "192.168.10.1");

configurePcIp("PC5", false, "192.168.20.90", "255.255.255.0", "192.168.20.1", "192.168.20.1");
configurePcIp("PC9", false, "192.168.20.91", "255.255.255.0", "192.168.20.1", "192.168.20.1");

configurePcIp("PC6", false, "192.168.30.190", "255.255.255.0", "192.168.30.1", "192.168.30.1");
configurePcIp("PC8", false, "192.168.30.191", "255.255.255.0", "192.168.30.1", "192.168.30.1");
