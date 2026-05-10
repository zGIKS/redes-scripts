// ICA - CONFIG CORE L3 POST-BOOT
// Ejecutar DESPUES de crear la topologia fisica, agregar modulos Gigabit a servidores y esperar el boot de los 3650.
// Alineado con el Excel de ICA:
// - Subred padre: 10.192.48.0/22
// - MS1_CORE_ICA enruta entre VLANs con SVIs + ip routing.
// - ROUTER_ICA queda como enlace L3/WAN hacia otros routers, no como gateway de VLANs internas.

configureIosDevice("MS1_CORE_ICA", "enable\nconfigure terminal\nhostname MS1_CORE_ICA\nno ip domain-lookup\nspanning-tree vlan 20,21,22,23,24,25,99,26,27 root primary\nvlan 20\nname VLVEN\nexit\nvlan 21\nname VLADM\nexit\nvlan 22\nname VLFIN\nexit\nvlan 23\nname VLWFEJE\nexit\nvlan 24\nname VLMAR\nexit\nvlan 25\nname VLLOG\nexit\nvlan 99\nname VLNAT\nexit\nvlan 26\nname VLWFCLI\nexit\nvlan 27\nname VLSER\nexit\ninterface vlan 21\nip address 10.192.48.129 255.255.255.192\nno shutdown\nexit\ninterface vlan 25\nip address 10.192.49.17 255.255.255.240\nno shutdown\nexit\ninterface vlan 20\nip address 10.192.48.1 255.255.255.128\nno shutdown\nexit\ninterface vlan 22\nip address 10.192.48.193 255.255.255.224\nno shutdown\nexit\ninterface vlan 24\nip address 10.192.49.1 255.255.255.240\nno shutdown\nexit\ninterface vlan 27\nip address 10.192.49.65 255.255.255.240\nno shutdown\nexit\ninterface vlan 26\nip address 10.192.49.49 255.255.255.240\nno shutdown\nexit\ninterface vlan 23\nip address 10.192.48.225 255.255.255.224\nno shutdown\nexit\ninterface vlan 99\nip address 10.192.49.33 255.255.255.240\nno shutdown\nexit\nip routing\ninterface GigabitEthernet1/0/1\ndescription Enlace L3 a ROUTER_ICA\nno switchport\nip address 10.192.51.2 255.255.255.252\nno shutdown\nexit\nip route 0.0.0.0 0.0.0.0 10.192.51.1\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\nend");

configureIosDevice("MS2_WIFI_ICA", "enable\nconfigure terminal\nhostname MS2_WIFI_ICA\nno ip domain-lookup\nvlan 20\nname VLVEN\nexit\nvlan 21\nname VLADM\nexit\nvlan 22\nname VLFIN\nexit\nvlan 23\nname VLWFEJE\nexit\nvlan 24\nname VLMAR\nexit\nvlan 25\nname VLLOG\nexit\nvlan 99\nname VLNAT\nexit\nvlan 26\nname VLWFCLI\nexit\nvlan 27\nname VLSER\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode access\nswitchport access vlan 26\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode access\nswitchport access vlan 23\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("MS3_DIST_ICA", "enable\nconfigure terminal\nhostname MS3_DIST_ICA\nno ip domain-lookup\nspanning-tree vlan 20,21,22,23,24,25,99,26,27 root secondary\nvlan 20\nname VLVEN\nexit\nvlan 21\nname VLADM\nexit\nvlan 22\nname VLFIN\nexit\nvlan 23\nname VLWFEJE\nexit\nvlan 24\nname VLMAR\nexit\nvlan 25\nname VLLOG\nexit\nvlan 99\nname VLNAT\nexit\nvlan 26\nname VLWFCLI\nexit\nvlan 27\nname VLSER\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 27\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 27\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("MS4_DIST_ICA", "enable\nconfigure terminal\nhostname MS4_DIST_ICA\nno ip domain-lookup\nvlan 20\nname VLVEN\nexit\nvlan 21\nname VLADM\nexit\nvlan 22\nname VLFIN\nexit\nvlan 23\nname VLWFEJE\nexit\nvlan 24\nname VLMAR\nexit\nvlan 25\nname VLLOG\nexit\nvlan 99\nname VLNAT\nexit\nvlan 26\nname VLWFCLI\nexit\nvlan 27\nname VLSER\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 27\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 27\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/12\nswitchport mode access\nswitchport access vlan 27\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW1_ICA", "enable\nconfigure terminal\nhostname SW1_ICA\nno ip domain-lookup\nvlan 20\nname VLVEN\nexit\nvlan 21\nname VLADM\nexit\nvlan 22\nname VLFIN\nexit\nvlan 23\nname VLWFEJE\nexit\nvlan 24\nname VLMAR\nexit\nvlan 25\nname VLLOG\nexit\nvlan 99\nname VLNAT\nexit\nvlan 26\nname VLWFCLI\nexit\nvlan 27\nname VLSER\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 20\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 21\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW2_ICA", "enable\nconfigure terminal\nhostname SW2_ICA\nno ip domain-lookup\nvlan 20\nname VLVEN\nexit\nvlan 21\nname VLADM\nexit\nvlan 22\nname VLFIN\nexit\nvlan 23\nname VLWFEJE\nexit\nvlan 24\nname VLMAR\nexit\nvlan 25\nname VLLOG\nexit\nvlan 99\nname VLNAT\nexit\nvlan 26\nname VLWFCLI\nexit\nvlan 27\nname VLSER\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 20\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 20\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW3_ICA", "enable\nconfigure terminal\nhostname SW3_ICA\nno ip domain-lookup\nvlan 20\nname VLVEN\nexit\nvlan 21\nname VLADM\nexit\nvlan 22\nname VLFIN\nexit\nvlan 23\nname VLWFEJE\nexit\nvlan 24\nname VLMAR\nexit\nvlan 25\nname VLLOG\nexit\nvlan 99\nname VLNAT\nexit\nvlan 26\nname VLWFCLI\nexit\nvlan 27\nname VLSER\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 25\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 24\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/3\nswitchport mode access\nswitchport access vlan 22\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/4\nswitchport mode access\nswitchport access vlan 99\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("ROUTER_ICA", "enable\nconfigure terminal\nhostname ROUTER_ICA\nno ip domain-lookup\ninterface GigabitEthernet0/0\ndescription Enlace L3 a MS1_CORE_ICA\nip address 10.192.51.1 255.255.255.252\nno shutdown\nexit\nip route 10.192.48.0 255.255.252.0 10.192.51.2\nend");

configurePcIp("PC_VENTAS_1_ICA", false, "10.192.48.10", "255.255.255.128", "10.192.48.1", "10.192.49.67");

configurePcIp("PC_VENTAS_2_ICA", false, "10.192.48.11", "255.255.255.128", "10.192.48.1", "10.192.49.67");

configurePcIp("PC_VENTAS_3_ICA", false, "10.192.48.12", "255.255.255.128", "10.192.48.1", "10.192.49.67");

configurePcIp("PC_ADMINISTRACION_ICA", false, "10.192.48.138", "255.255.255.192", "10.192.48.129", "10.192.49.67");

configurePcIp("PC_LOGISTICA_ICA", false, "10.192.49.18", "255.255.255.240", "10.192.49.17", "10.192.49.67");

configurePcIp("PC_MARKETING_ICA", false, "10.192.49.2", "255.255.255.240", "10.192.49.1", "10.192.49.67");

configurePcIp("PC_FINANZAS_ICA", false, "10.192.48.194", "255.255.255.224", "10.192.48.193", "10.192.49.67");

configurePcIp("PC_ADMIN_ICA", false, "10.192.49.34", "255.255.255.240", "10.192.49.33", "10.192.49.67");

ipc.network().getDevice("WEB_ICA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.49.66", "255.255.255.240");
ipc.network().getDevice("WEB_ICA").getPort("GigabitEthernet0").setDefaultGateway("10.192.49.65");
ipc.network().getDevice("WEB_ICA").getPort("GigabitEthernet0").setDnsServerIp("10.192.49.67");

ipc.network().getDevice("DNS_ICA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.49.67", "255.255.255.240");
ipc.network().getDevice("DNS_ICA").getPort("GigabitEthernet0").setDefaultGateway("10.192.49.65");
ipc.network().getDevice("DNS_ICA").getPort("GigabitEthernet0").setDnsServerIp("10.192.49.67");

ipc.network().getDevice("DHCP_ICA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.49.68", "255.255.255.240");
ipc.network().getDevice("DHCP_ICA").getPort("GigabitEthernet0").setDefaultGateway("10.192.49.65");
ipc.network().getDevice("DHCP_ICA").getPort("GigabitEthernet0").setDnsServerIp("10.192.49.67");

ipc.network().getDevice("FTP_ICA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.49.69", "255.255.255.240");
ipc.network().getDevice("FTP_ICA").getPort("GigabitEthernet0").setDefaultGateway("10.192.49.65");
ipc.network().getDevice("FTP_ICA").getPort("GigabitEthernet0").setDnsServerIp("10.192.49.67");

ipc.network().getDevice("MAIL_ICA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.49.70", "255.255.255.240");
ipc.network().getDevice("MAIL_ICA").getPort("GigabitEthernet0").setDefaultGateway("10.192.49.65");
ipc.network().getDevice("MAIL_ICA").getPort("GigabitEthernet0").setDnsServerIp("10.192.49.67");
