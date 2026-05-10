// LIMA - SERVIDORES GIGABIT
// Ejecutar despues de lima_solo_topologia_fisica.js y antes de lima_config_core_l3_postboot.js.
// Este script quita el modulo FastEthernet default de cada Server-PT,
// agrega PT-HOST-NM-1CGE y crea los cables hacia GigabitEthernet0.

ipc.network().getDevice("WEB_LIMA").setPower(false);
ipc.network().getDevice("WEB_LIMA").removeModule(0);
ipc.network().getDevice("WEB_LIMA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("WEB_LIMA").setPower(true);

ipc.network().getDevice("DNS_LIMA").setPower(false);
ipc.network().getDevice("DNS_LIMA").removeModule(0);
ipc.network().getDevice("DNS_LIMA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DNS_LIMA").setPower(true);

ipc.network().getDevice("DHCP_LIMA").setPower(false);
ipc.network().getDevice("DHCP_LIMA").removeModule(0);
ipc.network().getDevice("DHCP_LIMA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DHCP_LIMA").setPower(true);

ipc.network().getDevice("FTP_LIMA").setPower(false);
ipc.network().getDevice("FTP_LIMA").removeModule(0);
ipc.network().getDevice("FTP_LIMA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("FTP_LIMA").setPower(true);

ipc.network().getDevice("MAIL_LIMA").setPower(false);
ipc.network().getDevice("MAIL_LIMA").removeModule(0);
ipc.network().getDevice("MAIL_LIMA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("MAIL_LIMA").setPower(true);

addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/10", "WEB_LIMA", "GigabitEthernet0", "straight");
addLink("MS3_DIST_LIMA", "GigabitEthernet1/0/11", "DNS_LIMA", "GigabitEthernet0", "straight");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/10", "DHCP_LIMA", "GigabitEthernet0", "straight");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/11", "FTP_LIMA", "GigabitEthernet0", "straight");
addLink("MS4_DIST_LIMA", "GigabitEthernet1/0/12", "MAIL_LIMA", "GigabitEthernet0", "straight");
