// PUNO - SERVIDORES GIGABIT
// Ejecutar despues de puno_solo_topologia_fisica.js y antes de puno_config_core_l3_postboot.js.
// Este script quita el modulo FastEthernet default de cada Server-PT,
// agrega PT-HOST-NM-1CGE y crea los cables hacia GigabitEthernet0.

ipc.network().getDevice("WEB_PUNO").setPower(false);
ipc.network().getDevice("WEB_PUNO").removeModule(0);
ipc.network().getDevice("WEB_PUNO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("WEB_PUNO").setPower(true);

ipc.network().getDevice("DNS_PUNO").setPower(false);
ipc.network().getDevice("DNS_PUNO").removeModule(0);
ipc.network().getDevice("DNS_PUNO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DNS_PUNO").setPower(true);

ipc.network().getDevice("DHCP_PUNO").setPower(false);
ipc.network().getDevice("DHCP_PUNO").removeModule(0);
ipc.network().getDevice("DHCP_PUNO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DHCP_PUNO").setPower(true);

ipc.network().getDevice("FTP_PUNO").setPower(false);
ipc.network().getDevice("FTP_PUNO").removeModule(0);
ipc.network().getDevice("FTP_PUNO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("FTP_PUNO").setPower(true);

ipc.network().getDevice("MAIL_PUNO").setPower(false);
ipc.network().getDevice("MAIL_PUNO").removeModule(0);
ipc.network().getDevice("MAIL_PUNO").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("MAIL_PUNO").setPower(true);

addLink("MS3_DIST_PUNO", "GigabitEthernet1/0/10", "WEB_PUNO", "GigabitEthernet0", "straight");
addLink("MS3_DIST_PUNO", "GigabitEthernet1/0/11", "DNS_PUNO", "GigabitEthernet0", "straight");
addLink("MS4_DIST_PUNO", "GigabitEthernet1/0/10", "DHCP_PUNO", "GigabitEthernet0", "straight");
addLink("MS4_DIST_PUNO", "GigabitEthernet1/0/11", "FTP_PUNO", "GigabitEthernet0", "straight");
addLink("MS4_DIST_PUNO", "GigabitEthernet1/0/12", "MAIL_PUNO", "GigabitEthernet0", "straight");
