// HUANUCO - SERVIDORES GIGABIT
// Ejecutar despues de huanuco_solo_topologia_fisica.js y antes de huanuco_config_core_l3_postboot.js.
// Este script quita el modulo FastEthernet default de cada Server-PT,
// agrega PT-HOST-NM-1CGE y crea los cables hacia GigabitEthernet0.

ipc.network().getDevice("WEB_HUANUCO").setPower(false);
ipc.network().getDevice("WEB_HUANUCO").removeModule(0);
ipc.network().getDevice("WEB_HUANUCO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("WEB_HUANUCO").setPower(true);

ipc.network().getDevice("DNS_HUANUCO").setPower(false);
ipc.network().getDevice("DNS_HUANUCO").removeModule(0);
ipc.network().getDevice("DNS_HUANUCO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DNS_HUANUCO").setPower(true);

ipc.network().getDevice("DHCP_HUANUCO").setPower(false);
ipc.network().getDevice("DHCP_HUANUCO").removeModule(0);
ipc.network().getDevice("DHCP_HUANUCO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DHCP_HUANUCO").setPower(true);

ipc.network().getDevice("FTP_HUANUCO").setPower(false);
ipc.network().getDevice("FTP_HUANUCO").removeModule(0);
ipc.network().getDevice("FTP_HUANUCO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("FTP_HUANUCO").setPower(true);

ipc.network().getDevice("MAIL_HUANUCO").setPower(false);
ipc.network().getDevice("MAIL_HUANUCO").removeModule(0);
ipc.network().getDevice("MAIL_HUANUCO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("MAIL_HUANUCO").setPower(true);

addLink("MS3_DIST_HUANUCO", "GigabitEthernet1/0/10", "WEB_HUANUCO", "GigabitEthernet0", "straight");
addLink("MS3_DIST_HUANUCO", "GigabitEthernet1/0/11", "DNS_HUANUCO", "GigabitEthernet0", "straight");
addLink("MS4_DIST_HUANUCO", "GigabitEthernet1/0/10", "DHCP_HUANUCO", "GigabitEthernet0", "straight");
addLink("MS4_DIST_HUANUCO", "GigabitEthernet1/0/11", "FTP_HUANUCO", "GigabitEthernet0", "straight");
addLink("MS4_DIST_HUANUCO", "GigabitEthernet1/0/12", "MAIL_HUANUCO", "GigabitEthernet0", "straight");
