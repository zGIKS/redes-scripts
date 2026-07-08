// SERVICIOS REALES POST-BOOT
// Version plana para evitar SyntaxError en el parser de Packet Tracer.
// Si alguna llamada getService no existe en tu Packet Tracer, configura ese
// servicio manualmente en Server > Services usando los datos de este archivo.

ipc.network().getDevice("WEB_LIMA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.42.162", "255.255.255.240");
ipc.network().getDevice("WEB_LIMA").getPort("GigabitEthernet0").setDefaultGateway("10.192.42.161");
ipc.network().getDevice("WEB_LIMA").getPort("GigabitEthernet0").setDnsServerIp("10.192.42.163");
ipc.network().getDevice("DNS_LIMA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.42.163", "255.255.255.240");
ipc.network().getDevice("DNS_LIMA").getPort("GigabitEthernet0").setDefaultGateway("10.192.42.161");
ipc.network().getDevice("DNS_LIMA").getPort("GigabitEthernet0").setDnsServerIp("10.192.42.163");
ipc.network().getDevice("DHCP_LIMA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.42.164", "255.255.255.240");
ipc.network().getDevice("DHCP_LIMA").getPort("GigabitEthernet0").setDefaultGateway("10.192.42.161");
ipc.network().getDevice("DHCP_LIMA").getPort("GigabitEthernet0").setDnsServerIp("10.192.42.163");
ipc.network().getDevice("FTP_LIMA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.42.165", "255.255.255.240");
ipc.network().getDevice("FTP_LIMA").getPort("GigabitEthernet0").setDefaultGateway("10.192.42.161");
ipc.network().getDevice("FTP_LIMA").getPort("GigabitEthernet0").setDnsServerIp("10.192.42.163");
ipc.network().getDevice("MAIL_LIMA").getPort("GigabitEthernet0").setIpSubnetMask("10.192.42.166", "255.255.255.240");
ipc.network().getDevice("MAIL_LIMA").getPort("GigabitEthernet0").setDefaultGateway("10.192.42.161");
ipc.network().getDevice("MAIL_LIMA").getPort("GigabitEthernet0").setDnsServerIp("10.192.42.163");

ipc.network().getDevice("WEB_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.44.242", "255.255.255.240");
ipc.network().getDevice("WEB_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.44.241");
ipc.network().getDevice("WEB_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.44.243");
ipc.network().getDevice("DNS_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.44.243", "255.255.255.240");
ipc.network().getDevice("DNS_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.44.241");
ipc.network().getDevice("DNS_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.44.243");
ipc.network().getDevice("DHCP_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.44.244", "255.255.255.240");
ipc.network().getDevice("DHCP_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.44.241");
ipc.network().getDevice("DHCP_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.44.243");
ipc.network().getDevice("FTP_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.44.245", "255.255.255.240");
ipc.network().getDevice("FTP_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.44.241");
ipc.network().getDevice("FTP_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.44.243");
ipc.network().getDevice("MAIL_LA_LIBERTAD").getPort("GigabitEthernet0").setIpSubnetMask("10.192.44.246", "255.255.255.240");
ipc.network().getDevice("MAIL_LA_LIBERTAD").getPort("GigabitEthernet0").setDefaultGateway("10.192.44.241");
ipc.network().getDevice("MAIL_LA_LIBERTAD").getPort("GigabitEthernet0").setDnsServerIp("10.192.44.243");

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

ipc.network().getDevice("WEB_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.178", "255.255.255.240");
ipc.network().getDevice("WEB_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.177");
ipc.network().getDevice("WEB_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.179");
ipc.network().getDevice("DNS_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.179", "255.255.255.240");
ipc.network().getDevice("DNS_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.177");
ipc.network().getDevice("DNS_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.179");
ipc.network().getDevice("DHCP_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.180", "255.255.255.240");
ipc.network().getDevice("DHCP_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.177");
ipc.network().getDevice("DHCP_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.179");
ipc.network().getDevice("FTP_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.181", "255.255.255.240");
ipc.network().getDevice("FTP_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.177");
ipc.network().getDevice("FTP_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.179");
ipc.network().getDevice("MAIL_HUANUCO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.52.182", "255.255.255.240");
ipc.network().getDevice("MAIL_HUANUCO").getPort("GigabitEthernet0").setDefaultGateway("10.192.52.177");
ipc.network().getDevice("MAIL_HUANUCO").getPort("GigabitEthernet0").setDnsServerIp("10.192.52.179");

ipc.network().getDevice("WEB_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.194", "255.255.255.240");
ipc.network().getDevice("WEB_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.193");
ipc.network().getDevice("WEB_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.195");
ipc.network().getDevice("DNS_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.195", "255.255.255.240");
ipc.network().getDevice("DNS_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.193");
ipc.network().getDevice("DNS_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.195");
ipc.network().getDevice("DHCP_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.196", "255.255.255.240");
ipc.network().getDevice("DHCP_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.193");
ipc.network().getDevice("DHCP_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.195");
ipc.network().getDevice("FTP_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.197", "255.255.255.240");
ipc.network().getDevice("FTP_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.193");
ipc.network().getDevice("FTP_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.195");
ipc.network().getDevice("MAIL_PUNO").getPort("GigabitEthernet0").setIpSubnetMask("10.192.56.198", "255.255.255.240");
ipc.network().getDevice("MAIL_PUNO").getPort("GigabitEthernet0").setDefaultGateway("10.192.56.193");
ipc.network().getDevice("MAIL_PUNO").getPort("GigabitEthernet0").setDnsServerIp("10.192.56.195");

// Datos a cargar/validar en Server > Services:
// HTTP ON: WEB_LIMA, WEB_LA_LIBERTAD, WEB_ICA, WEB_HUANUCO, WEB_PUNO, WEB_ISP.
// DNS ON: registrar www.miempresa.com=10.192.42.162 y mail.miempresa.com=10.192.42.166.
// DNS local: web/dns/dhcp/ftp/mail de cada sede apuntando a sus IPs.
// DHCP ON: crear pools para VLANs cableadas y WiFi usando gateways de cada subinterfaz.
// FTP ON: usuarios admin_sede, sede_ftp y cisco con permiso RWDNL.
// EMAIL ON: dominio miempresa.com, SMTP ON, POP3 ON, usuarios admin/soporte/usuario1/sede.
