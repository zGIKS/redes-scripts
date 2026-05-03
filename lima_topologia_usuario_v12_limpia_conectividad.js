// LIMA - TOPOLOGIA USUARIO V12 LIMPIA CONECTIVIDAD
// Cableado segun indicacion:
// - Router a MS1: cobre normal straight
// - MS1 a MS2/MS3/MS4: copper cross-over
// - MS3 y MS4 a TODOS los switches 2960: copper cross-over
// - PCs, servidores y APs: cobre normal straight

addDevice("ROUTER_LIMA", "2811", 650, 50);
addDevice("MS1_CORE_LIMA", "3650-24PS", 650, 170);
addDevice("MS2_WIFI_LIMA", "3650-24PS", 260, 320);
addDevice("MS3_DIST_LIMA", "3650-24PS", 650, 320);
addDevice("MS4_DIST_LIMA", "3650-24PS", 1030, 320);
addDevice("SW1_LIMA", "2960-24TT", 430, 500);
addDevice("SW2_LIMA", "2960-24TT", 650, 500);
addDevice("SW3_LIMA", "2960-24TT", 870, 500);
addDevice("AP_CLIENTE_LIMA", "AccessPoint-PT", 150, 500);
addDevice("AP_EJECUTIVO_LIMA", "AccessPoint-PT", 150, 660);
addDevice("WIFI_TELEFONO_CLIENTE", "SMARTPHONE-PT", 40, 500);
addDevice("WIFI_LAPTOP_EJECUTIVO", "Laptop-PT", 40, 660);
addDevice("PC_VENTAS_1", "PC-PT", 430, 660);
addDevice("PC_VENTAS_2", "PC-PT", 650, 660);
addDevice("PC_LOGISTICA", "PC-PT", 810, 660);
addDevice("PC_MARKETING", "PC-PT", 930, 660);
addDevice("PC_FINANZAS", "PC-PT", 1050, 660);
addDevice("WEB_LIMA", "Server-PT", 1170, 170);
addDevice("DNS_LIMA", "Server-PT", 1280, 220);
addDevice("DHCP_LIMA", "Server-PT", 1170, 320);
addDevice("FTP_LIMA", "Server-PT", 1280, 370);
addDevice("MAIL_LIMA", "Server-PT", 1170, 450);

// Router a primer multiswitch: cobre normal
addLink("ROUTER_LIMA", "FastEthernet0/0", "MS1_CORE_LIMA", "GigabitEthernet1/0/1", "straight");
// MS1 conectado a los otros 3 multiswitch: copper cross-over
addLink("MS1_CORE_LIMA", "GigabitEthernet1/0/2", "MS2_WIFI_LIMA", "GigabitEthernet1/0/1", "cross");
addLink("MS1_CORE_LIMA", "GigabitEthernet1/0/3", "MS3_DIST_LIMA", "GigabitEthernet1/0/1", "cross");
addLink("MS1_CORE_LIMA", "GigabitEthernet1/0/4", "MS4_DIST_LIMA", "GigabitEthernet1/0/1", "cross");
// MS2 conectado a 2 AP: cobre normal
addLink("MS2_WIFI_LIMA", "GigabitEthernet1/0/2", "AP_CLIENTE_LIMA", "Port 0", "straight");
addLink("MS2_WIFI_LIMA", "GigabitEthernet1/0/3", "AP_EJECUTIVO_LIMA", "Port 0", "straight");
// MS3 a los 3 switches 2960: copper cross-over
addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/2", "SW1_LIMA", "GigabitEthernet0/1", "cross");
addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/3", "SW2_LIMA", "GigabitEthernet0/1", "cross");
addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/4", "SW3_LIMA", "GigabitEthernet0/1", "cross");
// MS4 a los 3 switches 2960: copper cross-over
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/2", "SW1_LIMA", "GigabitEthernet0/2", "cross");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/3", "SW2_LIMA", "GigabitEthernet0/2", "cross");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/4", "SW3_LIMA", "GigabitEthernet0/2", "cross");
// PCs: cobre normal
addLink("SW1_LIMA", "FastEthernet0/1", "PC_VENTAS_1", "FastEthernet0", "straight");
addLink("SW2_LIMA", "FastEthernet0/1", "PC_VENTAS_2", "FastEthernet0", "straight");
addLink("SW3_LIMA", "FastEthernet0/1", "PC_LOGISTICA", "FastEthernet0", "straight");
addLink("SW3_LIMA", "FastEthernet0/2", "PC_MARKETING", "FastEthernet0", "straight");
addLink("SW3_LIMA", "FastEthernet0/3", "PC_FINANZAS", "FastEthernet0", "straight");
// Servidores: cobre normal
addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/10", "WEB_LIMA", "FastEthernet0", "straight");
addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/11", "DNS_LIMA", "FastEthernet0", "straight");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/10", "DHCP_LIMA", "FastEthernet0", "straight");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/11", "FTP_LIMA", "FastEthernet0", "straight");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/12", "MAIL_LIMA", "FastEthernet0", "straight");

configureIosDevice("ROUTER_LIMA", "enable\nconfigure terminal\nhostname ROUTER_LIMA\nno ip domain-lookup\ninterface FastEthernet0/0\nno shutdown\nexit\ninterface FastEthernet0/0.10\nencapsulation dot1Q 10\nip address 10.192.41.1 255.255.255.128\nno shutdown\nexit\ninterface FastEthernet0/0.20\nencapsulation dot1Q 20\nip address 10.192.42.65 255.255.255.192\nno shutdown\nexit\ninterface FastEthernet0/0.30\nencapsulation dot1Q 30\nip address 10.192.40.1 255.255.255.0\nno shutdown\nexit\ninterface FastEthernet0/0.40\nencapsulation dot1Q 40\nip address 10.192.41.129 255.255.255.192\nno shutdown\nexit\ninterface FastEthernet0/0.50\nencapsulation dot1Q 50\nip address 10.192.42.1 255.255.255.192\nno shutdown\nexit\ninterface FastEthernet0/0.60\nencapsulation dot1Q 60\nip address 10.192.42.193 255.255.255.240\nno shutdown\nexit\ninterface FastEthernet0/0.70\nencapsulation dot1Q 70\nip address 10.192.42.129 255.255.255.224\nno shutdown\nexit\ninterface FastEthernet0/0.80\nencapsulation dot1Q 80\nip address 10.192.41.193 255.255.255.192\nno shutdown\nexit\ninterface FastEthernet0/0.99\nencapsulation dot1Q 99\nip address 10.192.42.161 255.255.255.224\nno shutdown\nexit\nip dhcp excluded-address 10.192.42.129 10.192.42.135\nip dhcp excluded-address 10.192.41.193 10.192.41.200\nip dhcp pool WIFI_CLIENTES_LIMA\nnetwork 10.192.42.128 255.255.255.224\ndefault-router 10.192.42.129\ndns-server 10.192.42.195\nexit\nip dhcp pool WIFI_EJECUTIVOS_LIMA\nnetwork 10.192.41.192 255.255.255.192\ndefault-router 10.192.41.193\ndns-server 10.192.42.195\nexit\nend");
configureIosDevice("MS1_CORE_LIMA", "enable\nconfigure terminal\nhostname MS1_CORE_LIMA\nno ip domain-lookup\nvlan 10\nname VLADM\nvlan 20\nname VLLOG\nvlan 30\nname VLVEN\nvlan 40\nname VLFIN\nvlan 50\nname VLMAR\nvlan 60\nname VLSER\nvlan 70\nname VLWFCLI\nvlan 80\nname VLWFEJE\nvlan 99\nname VLNAT\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface vlan 99\nip address 10.192.42.163 255.255.255.224\nno shutdown\nexit\nip default-gateway 10.192.42.161\nend");
configureIosDevice("MS2_WIFI_LIMA", "enable\nconfigure terminal\nhostname MS2_WIFI_LIMA\nno ip domain-lookup\nvlan 10\nname VLADM\nvlan 20\nname VLLOG\nvlan 30\nname VLVEN\nvlan 40\nname VLFIN\nvlan 50\nname VLMAR\nvlan 60\nname VLSER\nvlan 70\nname VLWFCLI\nvlan 80\nname VLWFEJE\nvlan 99\nname VLNAT\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode access\nswitchport access vlan 70\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode access\nswitchport access vlan 80\nspanning-tree portfast\nno shutdown\nexit\ninterface vlan 99\nip address 10.192.42.164 255.255.255.224\nno shutdown\nexit\nip default-gateway 10.192.42.161\nend");
configureIosDevice("MS3_DIST_LIMA", "enable\nconfigure terminal\nhostname MS3_DIST_LIMA\nno ip domain-lookup\nvlan 10\nname VLADM\nvlan 20\nname VLLOG\nvlan 30\nname VLVEN\nvlan 40\nname VLFIN\nvlan 50\nname VLMAR\nvlan 60\nname VLSER\nvlan 70\nname VLWFCLI\nvlan 80\nname VLWFEJE\nvlan 99\nname VLNAT\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\ninterface vlan 99\nip address 10.192.42.165 255.255.255.224\nno shutdown\nexit\nip default-gateway 10.192.42.161\nend");
configureIosDevice("MS4_DIST_LIMA", "enable\nconfigure terminal\nhostname MS4_DIST_LIMA\nno ip domain-lookup\nvlan 10\nname VLADM\nvlan 20\nname VLLOG\nvlan 30\nname VLVEN\nvlan 40\nname VLFIN\nvlan 50\nname VLMAR\nvlan 60\nname VLSER\nvlan 70\nname VLWFCLI\nvlan 80\nname VLWFEJE\nvlan 99\nname VLNAT\ninterface GigabitEthernet1/0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/3\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/4\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet1/0/10\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/11\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\ninterface GigabitEthernet1/0/12\nswitchport mode access\nswitchport access vlan 60\nspanning-tree portfast\nno shutdown\nexit\ninterface vlan 99\nip address 10.192.42.166 255.255.255.224\nno shutdown\nexit\nip default-gateway 10.192.42.161\nend");
configureIosDevice("SW1_LIMA", "enable\nconfigure terminal\nhostname SW1_LIMA\nno ip domain-lookup\nvlan 10\nname VLADM\nvlan 20\nname VLLOG\nvlan 30\nname VLVEN\nvlan 40\nname VLFIN\nvlan 50\nname VLMAR\nvlan 60\nname VLSER\nvlan 70\nname VLWFCLI\nvlan 80\nname VLWFEJE\nvlan 99\nname VLNAT\ninterface GigabitEthernet0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\nend");
configureIosDevice("SW2_LIMA", "enable\nconfigure terminal\nhostname SW2_LIMA\nno ip domain-lookup\nvlan 10\nname VLADM\nvlan 20\nname VLLOG\nvlan 30\nname VLVEN\nvlan 40\nname VLFIN\nvlan 50\nname VLMAR\nvlan 60\nname VLSER\nvlan 70\nname VLWFCLI\nvlan 80\nname VLWFEJE\nvlan 99\nname VLNAT\ninterface GigabitEthernet0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 30\nspanning-tree portfast\nno shutdown\nexit\nend");
configureIosDevice("SW3_LIMA", "enable\nconfigure terminal\nhostname SW3_LIMA\nno ip domain-lookup\nvlan 10\nname VLADM\nvlan 20\nname VLLOG\nvlan 30\nname VLVEN\nvlan 40\nname VLFIN\nvlan 50\nname VLMAR\nvlan 60\nname VLSER\nvlan 70\nname VLWFCLI\nvlan 80\nname VLWFEJE\nvlan 99\nname VLNAT\ninterface GigabitEthernet0/1\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface GigabitEthernet0/2\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,50,60,70,80,99\nno shutdown\nexit\ninterface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 20\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 50\nspanning-tree portfast\nno shutdown\nexit\ninterface FastEthernet0/3\nswitchport mode access\nswitchport access vlan 40\nspanning-tree portfast\nno shutdown\nexit\nend");
configurePcIp("PC_VENTAS_1", false, "10.192.40.10", "255.255.255.0", "10.192.40.1", "10.192.42.195");
configurePcIp("PC_VENTAS_2", false, "10.192.40.11", "255.255.255.0", "10.192.40.1", "10.192.42.195");
configurePcIp("PC_LOGISTICA", false, "10.192.42.66", "255.255.255.192", "10.192.42.65", "10.192.42.195");
configurePcIp("PC_MARKETING", false, "10.192.42.10", "255.255.255.192", "10.192.42.1", "10.192.42.195");
configurePcIp("PC_FINANZAS", false, "10.192.41.130", "255.255.255.192", "10.192.41.129", "10.192.42.195");
configurePcIp("WEB_LIMA", false, "10.192.42.194", "255.255.255.240", "10.192.42.193", "10.192.42.195");
configurePcIp("DNS_LIMA", false, "10.192.42.195", "255.255.255.240", "10.192.42.193", "10.192.42.195");
configurePcIp("DHCP_LIMA", false, "10.192.42.196", "255.255.255.240", "10.192.42.193", "10.192.42.195");
configurePcIp("FTP_LIMA", false, "10.192.42.197", "255.255.255.240", "10.192.42.193", "10.192.42.195");
configurePcIp("MAIL_LIMA", false, "10.192.42.198", "255.255.255.240", "10.192.42.193", "10.192.42.195");
// WiFi: los clientes se asocian manualmente al AP por SSID/WPA2 en Packet Tracer.
