addDevice("ISP1", "2811", 560, 90);
addDevice("ISP2", "2811", 560, 270);
addDevice("ISP3", "2811", 370, 180);
addDevice("Switch8", "2960-24TT", 220, 180);
addDevice("DNS_ISP", "Server-PT", 90, 95);
addDevice("WEB_ISP", "Server-PT", 90, 260);

addModule("ROUTER_LIMA", "0/2", "HWIC-2T");
addModule("ISP1", "0/0", "HWIC-2T");
addModule("ISP2", "0/0", "HWIC-2T");
addModule("ISP3", "1", "NM-1E");

addLink("ROUTER_LIMA", "Serial0/2/0", "ISP1", "Serial0/0/0", "serial");
addLink("ROUTER_LIMA", "Serial0/2/1", "ISP2", "Serial0/0/0", "serial");
addLink("ISP1", "Serial0/0/1", "ISP2", "Serial0/0/1", "serial");

addLink("ISP1", "FastEthernet0/0", "ISP3", "FastEthernet0/1", "straight");
addLink("ISP2", "FastEthernet0/1", "ISP3", "Ethernet1/0", "straight");
addLink("ISP3", "FastEthernet0/0", "Switch8", "FastEthernet0/1", "straight");
addLink("DNS_ISP", "FastEthernet0", "Switch8", "FastEthernet0/2", "straight");
addLink("WEB_ISP", "FastEthernet0", "Switch8", "FastEthernet0/3", "straight");

configureIosDevice("ROUTER_LIMA", "enable\nconfigure terminal\nno ip domain-lookup\nhostname ROUTER_LIMA\ninterface Serial0/2/0\nip address 219.0.0.1 255.255.255.252\nclock rate 64000\nno shutdown\nexit\ninterface Serial0/2/1\nip address 219.0.0.5 255.255.255.252\nclock rate 64000\nno shutdown\nexit\nip route 0.0.0.0 0.0.0.0 219.0.0.2\nip route 0.0.0.0 0.0.0.0 219.0.0.6 10\nend");
configureIosDevice("ISP1", "enable\nconfigure terminal\nno ip domain-lookup\nhostname ISP1\ninterface Serial0/0/0\nip address 219.0.0.2 255.255.255.252\nclock rate 64000\nno shutdown\nexit\ninterface Serial0/0/1\nip address 219.0.0.9 255.255.255.252\nclock rate 64000\nno shutdown\nexit\ninterface FastEthernet0/0\nip address 219.0.1.1 255.255.255.252\nno shutdown\nexit\nip route 31.70.183.0 255.255.255.0 219.0.1.2\nip route 10.0.0.0 255.0.0.0 219.0.0.1\nend");
configureIosDevice("ISP2", "enable\nconfigure terminal\nno ip domain-lookup\nhostname ISP2\ninterface Serial0/0/0\nip address 219.0.0.6 255.255.255.252\nclock rate 64000\nno shutdown\nexit\ninterface Serial0/0/1\nip address 219.0.0.10 255.255.255.252\nclock rate 64000\nno shutdown\nexit\ninterface FastEthernet0/1\nip address 219.0.1.5 255.255.255.252\nno shutdown\nexit\nip route 31.70.183.0 255.255.255.0 219.0.1.6\nip route 10.0.0.0 255.0.0.0 219.0.0.5\nend");
configureIosDevice("ISP3", "enable\nconfigure terminal\nno ip domain-lookup\nhostname ISP3\ninterface FastEthernet0/0\nip address 31.70.183.1 255.255.255.0\nno shutdown\nexit\ninterface FastEthernet0/1\nip address 219.0.1.2 255.255.255.252\nno shutdown\nexit\ninterface Ethernet1/0\nip address 219.0.1.6 255.255.255.252\nno shutdown\nexit\nip route 219.0.0.0 255.255.255.252 219.0.1.1\nip route 219.0.0.4 255.255.255.252 219.0.1.5\nip route 10.0.0.0 255.0.0.0 219.0.1.1\nip route 10.0.0.0 255.0.0.0 219.0.1.5 10\nend");

configurePcIp("DNS_ISP", false, "31.70.183.10", "255.255.255.0", "31.70.183.1", "31.70.183.10");
configurePcIp("WEB_ISP", false, "31.70.183.20", "255.255.255.0", "31.70.183.1", "31.70.183.10");
