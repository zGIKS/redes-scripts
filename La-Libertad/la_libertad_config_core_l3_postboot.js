// LA LIBERTAD - CONFIG CORE L3 POST-BOOT
// Ejecutar DESPUES de crear la topologia fisica, agregar modulos Gigabit a servidores y esperar el boot de los 3650.
// Alineado con el Excel de LA LIBERTAD:
// - Subred padre: 10.192.44.0/22
// - MS1_CORE_LA_LIBERTAD enruta entre VLANs con SVIs + ip routing.
// - ROUTER_LA_LIBERTAD queda como enlace L3/WAN hacia otros routers, no como gateway de VLANs internas.

configureIosDevice("MS1_CORE_LA_LIBERTAD", "enable\nconfigure terminal\nhostname MS1_CORE_LA_LIBERTAD\nno ip domain-lookup\nspanning-tree vlan 30,31,32,33,34,35,36,99,37 root primary\nvlan 30\nname VLVEN\nexit\nvlan 31\nname VLADM\nexit\nvlan 32\nname VLFIN\nexit\nvlan 33\nname VLWFEJE\nexit\nvlan 34\nname VLMAR\nexit\nvlan 35\nname VLLOG\nexit\nvlan 36\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 37\nname VLSER\nexit\ninterface vlan 31\nip address 10.192.44.129 255.255.255.192\nno shutdown\nexit\ninterface vlan 35\nip address 10.192.45.1 255.255.255.240\nno shutdown\nexit\ninterface vlan 30\nip address 10.192.44.1 255.255.255.128\nno shutdown\nexit\ninterface vlan 32\nip address 10.192.44.193 255.255.255.224\nno shutdown\nexit\ninterface vlan 34\nip address 10.192.44.241 255.255.255.240\nno shutdown\nexit\ninterface vlan 37\nip address 10.192.45.41 255.255.255.248\nno shutdown\nexit\ninterface vlan 36\nip address 10.192.45.17 255.255.255.240\nno shutdown\nexit\ninterface vlan 33\nip address 10.192.44.225 255.255.255.240\nno shutdown\nexit\ninterface vlan 99\nip address 10.192.45.33 255.255.255.248\nno shutdown\nexit\nip routing\ninterface GigabitEthernet1/0/1\ndescription Enlace L3 a ROUTER_LA_LIBERTAD\nno switchport\nip address 10.192.47.2 255.255.255.252\nno shutdown\nexit\nip route 0.0.0.0 0.0.0.0 10.192.47.1\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\nend");

configureIosDevice("MS2_WIFI_LA_LIBERTAD", "enable\nconfigure terminal\nhostname MS2_WIFI_LA_LIBERTAD\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 31\nname VLADM\nexit\nvlan 32\nname VLFIN\nexit\nvlan 33\nname VLWFEJE\nexit\nvlan 34\nname VLMAR\nexit\nvlan 35\nname VLLOG\nexit\nvlan 36\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 37\nname VLSER\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode access\nswitchport access vlan 36\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode access\nswitchport access vlan 33\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("MS3_DIST_LA_LIBERTAD", "enable\nconfigure terminal\nhostname MS3_DIST_LA_LIBERTAD\nno ip domain-lookup\nspanning-tree vlan 30,31,32,33,34,35,36,99,37 root secondary\nvlan 30\nname VLVEN\nexit\nvlan 31\nname VLADM\nexit\nvlan 32\nname VLFIN\nexit\nvlan 33\nname VLWFEJE\nexit\nvlan 34\nname VLMAR\nexit\nvlan 35\nname VLLOG\nexit\nvlan 36\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 37\nname VLSER\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 37\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 37\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("MS4_DIST_LA_LIBERTAD", "enable\nconfigure terminal\nhostname MS4_DIST_LA_LIBERTAD\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 31\nname VLADM\nexit\nvlan 32\nname VLFIN\nexit\nvlan 33\nname VLWFEJE\nexit\nvlan 34\nname VLMAR\nexit\nvlan 35\nname VLLOG\nexit\nvlan 36\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 37\nname VLSER\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 37\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 37\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/12\nswitchport mode access\nswitchport access vlan 37\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW1_LA_LIBERTAD", "enable\nconfigure terminal\nhostname SW1_LA_LIBERTAD\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 31\nname VLADM\nexit\nvlan 32\nname VLFIN\nexit\nvlan 33\nname VLWFEJE\nexit\nvlan 34\nname VLMAR\nexit\nvlan 35\nname VLLOG\nexit\nvlan 36\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 37\nname VLSER\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 31\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW2_LA_LIBERTAD", "enable\nconfigure terminal\nhostname SW2_LA_LIBERTAD\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 31\nname VLADM\nexit\nvlan 32\nname VLFIN\nexit\nvlan 33\nname VLWFEJE\nexit\nvlan 34\nname VLMAR\nexit\nvlan 35\nname VLLOG\nexit\nvlan 36\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 37\nname VLSER\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW3_LA_LIBERTAD", "enable\nconfigure terminal\nhostname SW3_LA_LIBERTAD\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 31\nname VLADM\nexit\nvlan 32\nname VLFIN\nexit\nvlan 33\nname VLWFEJE\nexit\nvlan 34\nname VLMAR\nexit\nvlan 35\nname VLLOG\nexit\nvlan 36\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 37\nname VLSER\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 35\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 34\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/3\nswitchport mode access\nswitchport access vlan 32\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/4\nswitchport mode access\nswitchport access vlan 99\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("ROUTER_LA_LIBERTAD", "enable\nconfigure terminal\nhostname ROUTER_LA_LIBERTAD\nno ip domain-lookup\ninterface GigabitEthernet0/0\ndescription Enlace L3 a MS1_CORE_LA_LIBERTAD\nip address 10.192.47.1 255.255.255.252\nno shutdown\nexit\nip route 10.192.44.0 255.255.252.0 10.192.47.2\nend");

configurePcIp("PC_VENTAS_1_LA_LIBERTAD", false, "10.192.44.10", "255.255.255.128", "10.192.44.1", "10.192.45.43");

configurePcIp("PC_VENTAS_2_LA_LIBERTAD", false, "10.192.44.11", "255.255.255.128", "10.192.44.1", "10.192.45.43");

configurePcIp("PC_VENTAS_3_LA_LIBERTAD", false, "10.192.44.12", "255.255.255.128", "10.192.44.1", "10.192.45.43");

configurePcIp("PC_ADMINISTRACION_LA_LIBERTAD", false, "10.192.44.138", "255.255.255.192", "10.192.44.129", "10.192.45.43");

configurePcIp("PC_LOGISTICA_LA_LIBERTAD", false, "10.192.45.2", "255.255.255.240", "10.192.45.1", "10.192.45.43");

configurePcIp("PC_MARKETING_LA_LIBERTAD", false, "10.192.44.242", "255.255.255.240", "10.192.44.241", "10.192.45.43");

configurePcIp("PC_FINANZAS_LA_LIBERTAD", false, "10.192.44.194", "255.255.255.224", "10.192.44.193", "10.192.45.43");

configurePcIp("PC_ADMIN_LA_LIBERTAD", false, "10.192.45.34", "255.255.255.248", "10.192.45.33", "10.192.45.43");

ipc.network().getDevice("WEB_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.45.42", "255.255.255.248");
ipc.network().getDevice("WEB_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.45.41");
ipc.network().getDevice("WEB_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.45.43");

ipc.network().getDevice("DNS_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.45.43", "255.255.255.248");
ipc.network().getDevice("DNS_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.45.41");
ipc.network().getDevice("DNS_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.45.43");

ipc.network().getDevice("DHCP_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.45.44", "255.255.255.248");
ipc.network().getDevice("DHCP_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.45.41");
ipc.network().getDevice("DHCP_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.45.43");

ipc.network().getDevice("FTP_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.45.45", "255.255.255.248");
ipc.network().getDevice("FTP_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.45.41");
ipc.network().getDevice("FTP_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.45.43");

ipc.network().getDevice("MAIL_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.45.46", "255.255.255.248");
ipc.network().getDevice("MAIL_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.45.41");
ipc.network().getDevice("MAIL_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.45.43");
