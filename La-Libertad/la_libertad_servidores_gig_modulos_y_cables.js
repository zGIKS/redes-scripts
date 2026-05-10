// LA LIBERTAD - SERVIDORES GIGABIT
// Ejecutar despues de la_libertad_solo_topologia_fisica.js y antes de la_libertad_config_core_l3_postboot.js.
// Este script quita el modulo FastEthernet default de cada Server-PT,
// agrega PT-HOST-NM-1CGE y crea los cables hacia GigabitEthernet0.

ipc.network().getDevice("WEB_LA_LIBERTAD").setPower(false);
ipc.network().getDevice("WEB_LA_LIBERTAD").removeModule(0);
ipc.network().getDevice("WEB_LA_LIBERTAD").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("WEB_LA_LIBERTAD").setPower(true);

ipc.network().getDevice("DNS_LA_LIBERTAD").setPower(false);
ipc.network().getDevice("DNS_LA_LIBERTAD").removeModule(0);
ipc.network().getDevice("DNS_LA_LIBERTAD").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DNS_LA_LIBERTAD").setPower(true);

ipc.network().getDevice("DHCP_LA_LIBERTAD").setPower(false);
ipc.network().getDevice("DHCP_LA_LIBERTAD").removeModule(0);
ipc.network().getDevice("DHCP_LA_LIBERTAD").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DHCP_LA_LIBERTAD").setPower(true);

ipc.network().getDevice("FTP_LA_LIBERTAD").setPower(false);
ipc.network().getDevice("FTP_LA_LIBERTAD").removeModule(0);
ipc.network().getDevice("FTP_LA_LIBERTAD").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("FTP_LA_LIBERTAD").setPower(true);

ipc.network().getDevice("MAIL_LA_LIBERTAD").setPower(false);
ipc.network().getDevice("MAIL_LA_LIBERTAD").removeModule(0);
ipc.network().getDevice("MAIL_LA_LIBERTAD").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("MAIL_LA_LIBERTAD").setPower(true);

addLink("MS3_DIST_LA_LIBERTAD", "GigabitEthernet1/0/10", "WEB_LA_LIBERTAD", "GigabitEthernet0", "straight");
addLink("MS3_DIST_LA_LIBERTAD", "GigabitEthernet1/0/11", "DNS_LA_LIBERTAD", "GigabitEthernet0", "straight");
addLink("MS4_DIST_LA_LIBERTAD", "GigabitEthernet1/0/10", "DHCP_LA_LIBERTAD", "GigabitEthernet0", "straight");
addLink("MS4_DIST_LA_LIBERTAD", "GigabitEthernet1/0/11", "FTP_LA_LIBERTAD", "GigabitEthernet0", "straight");
addLink("MS4_DIST_LA_LIBERTAD", "GigabitEthernet1/0/12", "MAIL_LA_LIBERTAD", "GigabitEthernet0", "straight");
