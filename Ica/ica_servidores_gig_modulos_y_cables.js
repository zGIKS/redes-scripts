// ICA - SERVIDORES GIGABIT
// Ejecutar despues de ica_solo_topologia_fisica.js y antes de ica_config_core_l3_postboot.js.
// Este script quita el modulo FastEthernet default de cada Server-PT,
// agrega PT-HOST-NM-1CGE y crea los cables hacia GigabitEthernet0.

ipc.network().getDevice("WEB_ICA").setPower(false);
ipc.network().getDevice("WEB_ICA").removeModule(0);
ipc.network().getDevice("WEB_ICA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("WEB_ICA").setPower(true);

ipc.network().getDevice("DNS_ICA").setPower(false);
ipc.network().getDevice("DNS_ICA").removeModule(0);
ipc.network().getDevice("DNS_ICA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DNS_ICA").setPower(true);

ipc.network().getDevice("DHCP_ICA").setPower(false);
ipc.network().getDevice("DHCP_ICA").removeModule(0);
ipc.network().getDevice("DHCP_ICA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("DHCP_ICA").setPower(true);

ipc.network().getDevice("FTP_ICA").setPower(false);
ipc.network().getDevice("FTP_ICA").removeModule(0);
ipc.network().getDevice("FTP_ICA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("FTP_ICA").setPower(true);

ipc.network().getDevice("MAIL_ICA").setPower(false);
ipc.network().getDevice("MAIL_ICA").removeModule(0);
ipc.network().getDevice("MAIL_ICA").addModule(0, allModuleTypes["PT-HOST-NM-1CGE"], "PT-HOST-NM-1CGE");
ipc.network().getDevice("MAIL_ICA").setPower(true);

addLink("MS3_DIST_ICA", "GigabitEthernet1/0/10", "WEB_ICA", "GigabitEthernet0", "straight");
addLink("MS3_DIST_ICA", "GigabitEthernet1/0/11", "DNS_ICA", "GigabitEthernet0", "straight");
addLink("MS4_DIST_ICA", "GigabitEthernet1/0/10", "DHCP_ICA", "GigabitEthernet0", "straight");
addLink("MS4_DIST_ICA", "GigabitEthernet1/0/11", "FTP_ICA", "GigabitEthernet0", "straight");
addLink("MS4_DIST_ICA", "GigabitEthernet1/0/12", "MAIL_ICA", "GigabitEthernet0", "straight");
