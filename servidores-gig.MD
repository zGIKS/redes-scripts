SERVIDORES LIMA - MODULO GIGABIT MANUAL

Opcion automatica:
Ejecutar lima_servidores_gig_modulos_y_cables.js despues de lima_solo_topologia_fisica.js y antes de lima_config_core_l3_postboot.js.

Opcion manual:
Hacer esto despues de ejecutar lima_solo_topologia_fisica.js y antes de ejecutar lima_config_core_l3_postboot.js.

Modulo para cada servidor:
PT-HOST-NM-1CGE

Pasos por cada Server-PT:
1. Click en el servidor.
2. Ir a Physical.
3. Apagar el servidor.
4. Quitar el modulo FastEthernet que viene por defecto.
5. Arrastrar PT-HOST-NM-1CGE al slot donde estaba el modulo FastEthernet.
6. Encender el servidor.
7. Verificar que ya no aparezca FastEthernet0 y que aparezca GigabitEthernet0.
8. Conectar cable Copper Straight-Through desde el switch al puerto GigabitEthernet0 del servidor.

Cableado:

WEB_LIMA
Switch: MS3_DIST_LIMA
Puerto switch: GigabitEthernet1/0/10
Puerto servidor: GigabitEthernet0
IP: 10.192.42.194
Mask: 255.255.255.240
Gateway: 10.192.42.193
DNS: 10.192.42.195

DNS_LIMA
Switch: MS3_DIST_LIMA
Puerto switch: GigabitEthernet1/0/11
Puerto servidor: GigabitEthernet0
IP: 10.192.42.195
Mask: 255.255.255.240
Gateway: 10.192.42.193
DNS: 10.192.42.195

DHCP_LIMA
Switch: MS4_DIST_LIMA
Puerto switch: GigabitEthernet1/0/10
Puerto servidor: GigabitEthernet0
IP: 10.192.42.196
Mask: 255.255.255.240
Gateway: 10.192.42.193
DNS: 10.192.42.195

FTP_LIMA
Switch: MS4_DIST_LIMA
Puerto switch: GigabitEthernet1/0/11
Puerto servidor: GigabitEthernet0
IP: 10.192.42.197
Mask: 255.255.255.240
Gateway: 10.192.42.193
DNS: 10.192.42.195

MAIL_LIMA
Switch: MS4_DIST_LIMA
Puerto switch: GigabitEthernet1/0/12
Puerto servidor: GigabitEthernet0
IP: 10.192.42.198
Mask: 255.255.255.240
Gateway: 10.192.42.193
DNS: 10.192.42.195

Orden recomendado:
1. Ejecutar lima_solo_topologia_fisica.js.
2. Ejecutar lima_servidores_gig_modulos_y_cables.js.
3. Ejecutar lima_config_core_l3_postboot.js.

Orden manual alternativo:
1. Ejecutar lima_solo_topologia_fisica.js.
2. Quitar el modulo FastEthernet default de los 5 servidores.
3. Poner modulo PT-HOST-NM-1CGE en los 5 servidores.
4. Cablear los 5 servidores como indica esta guia.
5. Ejecutar lima_config_core_l3_postboot.js.
