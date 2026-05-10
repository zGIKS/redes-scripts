// PUNO - CONFIG CORE L3 POST-BOOT
// Ejecutar DESPUES de crear la topologia fisica, agregar modulos Gigabit a servidores y esperar el boot de los 3650.
// Alineado con el Excel de PUNO:
// - Subred padre: 10.192.56.0/22
// - MS1_CORE_PUNO enruta entre VLANs con SVIs + ip routing.
// - ROUTER_PUNO queda como enlace L3/WAN hacia otros routers, no como gateway de VLANs internas.

configureIosDevice("MS1_CORE_PUNO", "enable\nconfigure terminal\nhostname MS1_CORE_PUNO\nno ip domain-lookup\nspanning-tree vlan 30,10,40,80,50,20,70,60,99 root primary\nvlan 30\nname VLVEN\nexit\nvlan 10\nname VLADM\nexit\nvlan 40\nname VLFIN\nexit\nvlan 80\nname VLWFEJE\nexit\nvlan 50\nname VLMAR\nexit\nvlan 20\nname VLLOG\nexit\nvlan 70\nname VLWFCLI\nexit\nvlan 60\nname VLSER\nexit\nvlan 99\nname VLNAT\nexit\ninterface vlan 10\nip address 10.192.56.65 255.255.255.224\nno shutdown\nexit\ninterface vlan 20\nip address 10.192.56.145 255.255.255.240\nno shutdown\nexit\ninterface vlan 30\nip address 10.192.56.1 255.255.255.192\nno shutdown\nexit\ninterface vlan 40\nip address 10.192.56.97 255.255.255.240\nno shutdown\nexit\ninterface vlan 50\nip address 10.192.56.129 255.255.255.240\nno shutdown\nexit\ninterface vlan 60\nip address 10.192.56.177 255.255.255.240\nno shutdown\nexit\ninterface vlan 70\nip address 10.192.56.161 255.255.255.240\nno shutdown\nexit\ninterface vlan 80\nip address 10.192.56.113 255.255.255.240\nno shutdown\nexit\ninterface vlan 99\nip address 10.192.56.193 255.255.255.248\nno shutdown\nexit\nip routing\ninterface GigabitEthernet1/0/1\ndescription Enlace L3 a ROUTER_PUNO\nno switchport\nip address 10.192.59.2 255.255.255.252\nno shutdown\nexit\nip route 0.0.0.0 0.0.0.0 10.192.59.1\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\nend");

configureIosDevice("MS2_WIFI_PUNO", "enable\nconfigure terminal\nhostname MS2_WIFI_PUNO\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 10\nname VLADM\nexit\nvlan 40\nname VLFIN\nexit\nvlan 80\nname VLWFEJE\nexit\nvlan 50\nname VLMAR\nexit\nvlan 20\nname VLLOG\nexit\nvlan 70\nname VLWFCLI\nexit\nvlan 60\nname VLSER\nexit\nvlan 99\nname VLNAT\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode access\nswitchport access vlan 70\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode access\nswitchport access vlan 80\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("MS3_DIST_PUNO", "enable\nconfigure terminal\nhostname MS3_DIST_PUNO\nno ip domain-lookup\nspanning-tree vlan 30,10,40,80,50,20,70,60,99 root secondary\nvlan 30\nname VLVEN\nexit\nvlan 10\nname VLADM\nexit\nvlan 40\nname VLFIN\nexit\nvlan 80\nname VLWFEJE\nexit\nvlan 50\nname VLMAR\nexit\nvlan 20\nname VLLOG\nexit\nvlan 70\nname VLWFCLI\nexit\nvlan 60\nname VLSER\nexit\nvlan 99\nname VLNAT\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("MS4_DIST_PUNO", "enable\nconfigure terminal\nhostname MS4_DIST_PUNO\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 10\nname VLADM\nexit\nvlan 40\nname VLFIN\nexit\nvlan 80\nname VLWFEJE\nexit\nvlan 50\nname VLMAR\nexit\nvlan 20\nname VLLOG\nexit\nvlan 70\nname VLWFCLI\nexit\nvlan 60\nname VLSER\nexit\nvlan 99\nname VLNAT\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/12\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW1_PUNO", "enable\nconfigure terminal\nhostname SW1_PUNO\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 10\nname VLADM\nexit\nvlan 40\nname VLFIN\nexit\nvlan 80\nname VLWFEJE\nexit\nvlan 50\nname VLMAR\nexit\nvlan 20\nname VLLOG\nexit\nvlan 70\nname VLWFCLI\nexit\nvlan 60\nname VLSER\nexit\nvlan 99\nname VLNAT\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 10\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW2_PUNO", "enable\nconfigure terminal\nhostname SW2_PUNO\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 10\nname VLADM\nexit\nvlan 40\nname VLFIN\nexit\nvlan 80\nname VLWFEJE\nexit\nvlan 50\nname VLMAR\nexit\nvlan 20\nname VLLOG\nexit\nvlan 70\nname VLWFCLI\nexit\nvlan 60\nname VLSER\nexit\nvlan 99\nname VLNAT\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW3_PUNO", "enable\nconfigure terminal\nhostname SW3_PUNO\nno ip domain-lookup\nvlan 30\nname VLVEN\nexit\nvlan 10\nname VLADM\nexit\nvlan 40\nname VLFIN\nexit\nvlan 80\nname VLWFEJE\nexit\nvlan 50\nname VLMAR\nexit\nvlan 20\nname VLLOG\nexit\nvlan 70\nname VLWFCLI\nexit\nvlan 60\nname VLSER\nexit\nvlan 99\nname VLNAT\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 20\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 50\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/3\nswitchport mode access\nswitchport access vlan 40\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/4\nswitchport mode access\nswitchport access vlan 99\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("ROUTER_PUNO", "enable\nconfigure terminal\nhostname ROUTER_PUNO\nno ip domain-lookup\ninterface GigabitEthernet0/0\ndescription Enlace L3 a MS1_CORE_PUNO\nip address 10.192.59.1 255.255.255.252\nno shutdown\nexit\nip route 10.192.56.0 255.255.252.0 10.192.59.2\nend");

configurePcIp("PC_VENTAS_1_PUNO", false, "10.192.56.10", "255.255.255.192", "10.192.56.1", "10.192.56.179");

configurePcIp("PC_VENTAS_2_PUNO", false, "10.192.56.11", "255.255.255.192", "10.192.56.1", "10.192.56.179");

configurePcIp("PC_VENTAS_3_PUNO", false, "10.192.56.12", "255.255.255.192", "10.192.56.1", "10.192.56.179");

configurePcIp("PC_ADMINISTRACION_PUNO", false, "10.192.56.74", "255.255.255.224", "10.192.56.65", "10.192.56.179");

configurePcIp("PC_LOGISTICA_PUNO", false, "10.192.56.146", "255.255.255.240", "10.192.56.145", "10.192.56.179");

configurePcIp("PC_MARKETING_PUNO", false, "10.192.56.130", "255.255.255.240", "10.192.56.129", "10.192.56.179");

configurePcIp("PC_FINANZAS_PUNO", false, "10.192.56.98", "255.255.255.240", "10.192.56.97", "10.192.56.179");

configurePcIp("PC_ADMIN_PUNO", false, "10.192.56.194", "255.255.255.248", "10.192.56.193", "10.192.56.179");

ipc.network().getDevice("WEB_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.178", "255.255.255.240");
ipc.network().getDevice("WEB_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.177");
ipc.network().getDevice("WEB_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.179");

ipc.network().getDevice("DNS_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.179", "255.255.255.240");
ipc.network().getDevice("DNS_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.177");
ipc.network().getDevice("DNS_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.179");

ipc.network().getDevice("DHCP_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.180", "255.255.255.240");
ipc.network().getDevice("DHCP_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.177");
ipc.network().getDevice("DHCP_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.179");

ipc.network().getDevice("FTP_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.181", "255.255.255.240");
ipc.network().getDevice("FTP_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.177");
ipc.network().getDevice("FTP_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.179");

ipc.network().getDevice("MAIL_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.182", "255.255.255.240");
ipc.network().getDevice("MAIL_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.177");
ipc.network().getDevice("MAIL_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.179");
