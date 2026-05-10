// HUANUCO - CONFIG CORE L3 POST-BOOT
// Ejecutar DESPUES de crear la topologia fisica, agregar modulos Gigabit a servidores y esperar el boot de los 3650.
// Alineado con el Excel de HUANUCO:
// - Subred padre: 10.192.52.0/22
// - MS1_CORE_HUANUCO enruta entre VLANs con SVIs + ip routing.
// - ROUTER_HUANUCO queda como enlace L3/WAN hacia otros routers, no como gateway de VLANs internas.

configureIosDevice("MS1_CORE_HUANUCO", "enable\nconfigure terminal\nhostname MS1_CORE_HUANUCO\nno ip domain-lookup\nspanning-tree vlan 40,41,42,43,44,45,46,99,47 root primary\nvlan 40\nname VLVEN\nexit\nvlan 41\nname VLADM\nexit\nvlan 42\nname VLFIN\nexit\nvlan 43\nname VLWFEJE\nexit\nvlan 44\nname VLMAR\nexit\nvlan 45\nname VLLOG\nexit\nvlan 46\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 47\nname VLSER\nexit\ninterface vlan 41\nip address 10.192.52.65 255.255.255.224\nno shutdown\nexit\ninterface vlan 45\nip address 10.192.52.145 255.255.255.240\nno shutdown\nexit\ninterface vlan 40\nip address 10.192.52.1 255.255.255.192\nno shutdown\nexit\ninterface vlan 42\nip address 10.192.52.97 255.255.255.240\nno shutdown\nexit\ninterface vlan 44\nip address 10.192.52.129 255.255.255.240\nno shutdown\nexit\ninterface vlan 47\nip address 10.192.52.185 255.255.255.248\nno shutdown\nexit\ninterface vlan 46\nip address 10.192.52.161 255.255.255.240\nno shutdown\nexit\ninterface vlan 43\nip address 10.192.52.113 255.255.255.240\nno shutdown\nexit\ninterface vlan 99\nip address 10.192.52.177 255.255.255.248\nno shutdown\nexit\nip routing\ninterface GigabitEthernet1/0/1\ndescription Enlace L3 a ROUTER_HUANUCO\nno switchport\nip address 10.192.55.2 255.255.255.252\nno shutdown\nexit\nip route 0.0.0.0 0.0.0.0 10.192.55.1\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\nend");

configureIosDevice("MS2_WIFI_HUANUCO", "enable\nconfigure terminal\nhostname MS2_WIFI_HUANUCO\nno ip domain-lookup\nvlan 40\nname VLVEN\nexit\nvlan 41\nname VLADM\nexit\nvlan 42\nname VLFIN\nexit\nvlan 43\nname VLWFEJE\nexit\nvlan 44\nname VLMAR\nexit\nvlan 45\nname VLLOG\nexit\nvlan 46\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 47\nname VLSER\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode access\nswitchport access vlan 46\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode access\nswitchport access vlan 43\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("MS3_DIST_HUANUCO", "enable\nconfigure terminal\nhostname MS3_DIST_HUANUCO\nno ip domain-lookup\nspanning-tree vlan 40,41,42,43,44,45,46,99,47 root secondary\nvlan 40\nname VLVEN\nexit\nvlan 41\nname VLADM\nexit\nvlan 42\nname VLFIN\nexit\nvlan 43\nname VLWFEJE\nexit\nvlan 44\nname VLMAR\nexit\nvlan 45\nname VLLOG\nexit\nvlan 46\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 47\nname VLSER\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 47\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 47\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("MS4_DIST_HUANUCO", "enable\nconfigure terminal\nhostname MS4_DIST_HUANUCO\nno ip domain-lookup\nvlan 40\nname VLVEN\nexit\nvlan 41\nname VLADM\nexit\nvlan 42\nname VLFIN\nexit\nvlan 43\nname VLWFEJE\nexit\nvlan 44\nname VLMAR\nexit\nvlan 45\nname VLLOG\nexit\nvlan 46\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 47\nname VLSER\nexit\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 47\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 47\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/12\nswitchport mode access\nswitchport access vlan 47\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW1_HUANUCO", "enable\nconfigure terminal\nhostname SW1_HUANUCO\nno ip domain-lookup\nvlan 40\nname VLVEN\nexit\nvlan 41\nname VLADM\nexit\nvlan 42\nname VLFIN\nexit\nvlan 43\nname VLWFEJE\nexit\nvlan 44\nname VLMAR\nexit\nvlan 45\nname VLLOG\nexit\nvlan 46\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 47\nname VLSER\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 40\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 41\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW2_HUANUCO", "enable\nconfigure terminal\nhostname SW2_HUANUCO\nno ip domain-lookup\nvlan 40\nname VLVEN\nexit\nvlan 41\nname VLADM\nexit\nvlan 42\nname VLFIN\nexit\nvlan 43\nname VLWFEJE\nexit\nvlan 44\nname VLMAR\nexit\nvlan 45\nname VLLOG\nexit\nvlan 46\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 47\nname VLSER\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 40\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 40\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("SW3_HUANUCO", "enable\nconfigure terminal\nhostname SW3_HUANUCO\nno ip domain-lookup\nvlan 40\nname VLVEN\nexit\nvlan 41\nname VLADM\nexit\nvlan 42\nname VLFIN\nexit\nvlan 43\nname VLWFEJE\nexit\nvlan 44\nname VLMAR\nexit\nvlan 45\nname VLLOG\nexit\nvlan 46\nname VLWFCLI\nexit\nvlan 99\nname VLNAT\nexit\nvlan 47\nname VLSER\nexit\ninterface range GigabitEthernet0/1 - 2\nswitchport mode trunk\nswitchport trunk allowed vlan all\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 45\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 44\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/3\nswitchport mode access\nswitchport access vlan 42\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/4\nswitchport mode access\nswitchport access vlan 99\nspanning-tree portfast\nno shutdown\nexit\nend");

configureIosDevice("ROUTER_HUANUCO", "enable\nconfigure terminal\nhostname ROUTER_HUANUCO\nno ip domain-lookup\ninterface GigabitEthernet0/0\ndescription Enlace L3 a MS1_CORE_HUANUCO\nip address 10.192.55.1 255.255.255.252\nno shutdown\nexit\nip route 10.192.52.0 255.255.252.0 10.192.55.2\nend");

configurePcIp("PC_VENTAS_1_HUANUCO", false, "10.192.52.10", "255.255.255.192", "10.192.52.1", "10.192.52.187");

configurePcIp("PC_VENTAS_2_HUANUCO", false, "10.192.52.11", "255.255.255.192", "10.192.52.1", "10.192.52.187");

configurePcIp("PC_VENTAS_3_HUANUCO", false, "10.192.52.12", "255.255.255.192", "10.192.52.1", "10.192.52.187");

configurePcIp("PC_ADMINISTRACION_HUANUCO", false, "10.192.52.74", "255.255.255.224", "10.192.52.65", "10.192.52.187");

configurePcIp("PC_LOGISTICA_HUANUCO", false, "10.192.52.146", "255.255.255.240", "10.192.52.145", "10.192.52.187");

configurePcIp("PC_MARKETING_HUANUCO", false, "10.192.52.130", "255.255.255.240", "10.192.52.129", "10.192.52.187");

configurePcIp("PC_FINANZAS_HUANUCO", false, "10.192.52.98", "255.255.255.240", "10.192.52.97", "10.192.52.187");

configurePcIp("PC_ADMIN_HUANUCO", false, "10.192.52.178", "255.255.255.248", "10.192.52.177", "10.192.52.187");

ipc.network().getDevice("WEB_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.186", "255.255.255.248");
ipc.network().getDevice("WEB_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.185");
ipc.network().getDevice("WEB_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.187");

ipc.network().getDevice("DNS_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.187", "255.255.255.248");
ipc.network().getDevice("DNS_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.185");
ipc.network().getDevice("DNS_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.187");

ipc.network().getDevice("DHCP_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.188", "255.255.255.248");
ipc.network().getDevice("DHCP_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.185");
ipc.network().getDevice("DHCP_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.187");

ipc.network().getDevice("FTP_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.189", "255.255.255.248");
ipc.network().getDevice("FTP_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.185");
ipc.network().getDevice("FTP_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.187");

ipc.network().getDevice("MAIL_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.190", "255.255.255.248");
ipc.network().getDevice("MAIL_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.185");
ipc.network().getDevice("MAIL_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.187");
