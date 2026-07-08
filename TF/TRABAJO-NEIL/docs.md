3.3 Implementación de enrutamiento InterVLAN
3.3.1 Sede Sucursal 1

Scripts de Implementación de enrutamiento Inter VLAN en dispositivos finales e intermediarios

INTERVLAN: La intervlan de lima se aplica en dispositivos finales e intermediarios
Requisitos para que haya intervlan:
Un dispositivo con ip routing activo
2. Interfaz con vlan (SVI)
3. Enlace trunk que haga de transporte para vlans

DISPOSITIVOS INTERMEDIARIOS

------------!CORE

enable
conf t
hostname CORE_LIMA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

interface g1/0/4
no switchport
ip address 10.92.34.177 255.255.255.252
no shutdown
exit
ip routing
interface g1/0/1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/3
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown

interface vlan 99
ip address 10.92.34.65 255.255.255.224
no shutdown


interface vlan 10
ip address 10.92.32.1 255.255.255.0
no shutdown


interface vlan 11
ip address 10.92.33.1 255.255.255.128
no shutdown


interface vlan 12
ip address 10.92.33.129 255.255.255.192
no shutdown


interface vlan 13
ip address 10.92.33.193 255.255.255.192
no shutdown


interface vlan 14
ip address 10.92.34.1 255.255.255.192
no shutdown


interface vlan 15
ip address 10.92.34.97 255.255.255.224
no shutdown


interface vlan 16
ip address 10.92.34.129 255.255.255.224
no shutdown


interface vlan 17
ip address 10.92.34.161 255.255.255.240
no shutdown
exit

!------------------------ CONFIGURACION MULTICAPA_WIFI



enable 
conf t 
hostname MULTICAPA_WIFI

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/3
switchport trunk encapsulation dot1q
switchport mode access
switchport access vlan 13

interface range f0/2
switchport trunk encapsulation dot1q
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.34.66 255.255.255.224
no shutdown 
exit 

ip default-gateway 10.92.34.65



!------------------- CONFIGURACION D2_LIMA ----------------------



enable 
conf t 
hostname D2_LIMA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/2-3
switchport switchport mode access
switchport access vlan 16 

interface vlan 99 
ip address 10.92.34.67 255.255.255.224
no shutdown 

exit
ip default-gateway 10.92.34.65





!------------------- CONFIGURACION D3_LIMA ----------------------



enable 
conf t 
hostname D3_LIMA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-2
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/3-5
switchport mode access
switchport access vlan 16  

interface vlan 99 
ip address 10.92.34.68 255.255.255.224
no shutdown 

exit
ip default-gateway 10.92.34.65

------------------------------------- CONFIGURACION DE LOS SWT1_LIMA ---------------------------------



!--------- CONFIGURACION SWT1_LIMA ---------------------------


enable 
conf t 
hostname SWT1_LIMA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.34.69 255.255.255.224
no shutdown 
exit
ip default-gateway 10.92.34.65






Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento Inter VLAN en dispositivos finales e intermediarios


CORE
VLAN

IP PARA CADA VLAN

TRUNK



3.3.2 Sede Sucursal 2


Scripts de Implementación de enrutamiento Inter VLAN en dispositivos finales e intermediarios

DISPOSITIVOS INTERMEDIARIOS
------------!CORE



enable
conf t
hostname CORE_LIBERTAD

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

interface g1/0/4
no switchport
ip address 10.92.37.66 255.255.255.252
no shutdown
exit
ip routing
interface g1/0/1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/3
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown

interface vlan 99
ip address 10.92.37.17 255.255.255.240
no shutdown


interface vlan 10
ip address 10.92.36.1 255.255.255.128
no shutdown


interface vlan 11
ip address 10.92.36.129 255.255.255.192
no shutdown


interface vlan 12
ip address 10.92.36.193 255.255.255.224
no shutdown


interface vlan 13
ip address 10.92.36.225 255.255.255.224
no shutdown


interface vlan 14
ip address 10.92.37.1 255.255.255.240
no shutdown


interface vlan 15
ip address 10.92.37.33 255.255.255.240
no shutdown


interface vlan 16
ip address 10.92.37.49 255.255.255.248
no shutdown


interface vlan 17
ip address 10.92.37.57 255.255.255.248
no shutdown
exit
!------------------------ CONFIGURACION MULTICAPA_WIFI



enable 
conf t 
hostname MULTICAPA_WIFI

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/3
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 13

interface range f0/2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 17

interface vlan 99 
ip address 10.92.37.18 255.255.255.240
no shutdown 
exit 

ip default-gateway 10.92.37.17



!------------------- CONFIGURACION D2_LIBERTAD ----------------------



enable 
conf t 
hostname D2_LIBERTAD

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface vlan 99
 ip address 10.92.37.19 255.255.255.240
 no shutdown
exit
ip default-gateway 10.92.37.17





!------------------- CONFIGURACION D3_LIBERTAD ----------------------



enable 
conf t 
hostname D3_LIBERTAD

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
 
interface range f0/1-5
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface vlan 99
ip address 10.92.37.20 255.255.255.240
no shutdown
 
exit
ip default-gateway 10.92.37.17



------------------------------------- CONFIGURACION DE DEPARTAMENTOS ---------------------------------



------------------------------------- CONFIGURACION DE LOS SWT1_LIBERTAD ---------------------------------



!--------- CONFIGURACION SWT1_LIBERTAD ---------------------------


enable 
conf t 
hostname SWT1_LIBERTAD

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17


interface vlan 99 
ip address 10.92.37.21 255.255.255.240
no shutdown 
exit
ip default-gateway 10.92.37.17





------------------------------------- CONFIGURACION DE LOS SWT2_LIBERTAD ---------------------------------



!--------- CONFIGURACION SWT2_LIBERTAD ---------------------------



enable 
conf t 
hostname SWT2_LIMA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17


interface vlan 99 
ip address 10.92.37.22 255.255.255.240
no shutdown 
exit
ip default-gateway 10.92.37.17




-------------------------------- CONFIGURACION DE LOS SWT3_LIBERTAD ---------------------------------



!--------- CONFIGURACION SWT3_LIBERTAD ---------------------------


enable 
conf t 
hostname SWT3_LIBERTAD

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17



interface vlan 99 
ip address 10.92.37.23 255.255.255.240
no shutdown 
exit
ip default-gateway 10.92.37.17


-------------------------------- CONFIGURACION DE LOS SWT4_LIBERTAD ---------------------------------



!--------- CONFIGURACION SWT4_LIBERTAD ---------------------------


enable 
conf t 
hostname SWT4_LIBERTAD

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17


interface vlan 99 
ip address 10.92.37.24 255.255.255.240
no shutdown 
exit
ip default-gateway 10.92.37.17








Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento Inter VLAN en dispositivos finales e intermediarios
Ej:
CORE






3.3.3 Sede Sucursal 3

Scripts de Implementación de enrutamiento Inter VLAN en dispositivos finales e intermediarios

------------!CORE_ICA

enable
conf t
hostname CORE_ICA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

interface g1/0/1
no switchport
ip address 10.92.41.66 255.255.255.252
no shutdown
exit
ip routing
interface g1/0/2

switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/3

switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/4

switchport mode trunk
switchport trunk native vlan 99
no shutdown

interface vlan 99
ip address 10.92.40.225 255.255.255.224
no shutdown


interface vlan 10
ip address 10.92.40.1 255.255.255.128
no shutdown


interface vlan 11
ip address 10.92.40.129 255.255.255.192
no shutdown


interface vlan 12
ip address 10.92.40.193 255.255.255.224
no shutdown


interface vlan 13
ip address 10.92.41.1 255.255.255.240
no shutdown


interface vlan 14
ip address 10.92.41.17 255.255.255.240
no shutdown


interface vlan 15
ip address 10.92.41.33 255.255.255.240
no shutdown


interface vlan 16
ip address 10.92.41.49 255.255.255.248
no shutdown


interface vlan 17
ip address 10.92.41.57 255.255.255.248
no shutdown
exit

!------------------------ CONFIGURACION MULTICAPA_WIFI

enable 
conf t 
hostname MULTICAPA_WIFI

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/2
switchport trunk encapsulation dot1q
switchport mode access
switchport access vlan 13

interface range f0/1
switchport trunk encapsulation dot1q
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.40.226 255.255.255.224
no shutdown 
exit 

ip default-gateway 10.92.40.225



!------------------- CONFIGURACION D2_ICA ----------------------



enable 
conf t 
hostname D2_ICA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface vlan 99 
ip address 10.92.40.227 255.255.255.224
no shutdown 

exit
ip default-gateway 10.92.40.225





!------------------- CONFIGURACION D3_ICA----------------------



enable 
conf t 
hostname D3_ICA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-5
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface vlan 99 
ip address 10.92.40.228 255.255.255.224
no shutdown 

exit
ip default-gateway 10.92.40.225



------------------------------------- CONFIGURACION DE DEPARTAMENTOS ---------------------------------



------------------------------------- CONFIGURACION DE LOS SWT1_ICA ---------------------------------



!--------- CONFIGURACION SWT1_ICA ---------------------------


enable 
conf t 
hostname SWT1_ICA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.40.229 255.255.255.224
no shutdown 
exit
ip default-gateway 10.92.40.225





------------------------------------- CONFIGURACION DE LOS SWT2_ICA---------------------------------



!--------- CONFIGURACION SWT2_ICA ---------------------------



enable 
conf t 
hostname SWT2_ICA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/2
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.40.230 255.255.255.224
no shutdown 
exit
ip default-gateway 10.92.40.225




-------------------------------- CONFIGURACION DE LOS SWT3_ICA---------------------------------



!--------- CONFIGURACION SWT3_ICA---------------------------


enable 
conf t 
hostname SWT3_ICA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.40.231 255.255.255.224
no shutdown 
exit
ip default-gateway 10.92.40.225





Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento Inter VLAN en dispositivos finales e intermediarios


Dispositivo final

Switch de acceso 
Habilitación de puertos trunk



Vista de los puertos trunk





Listado de las intervlan del router





3.3.4. Sede Sucursal 4

INTERVLAN: La intervlan de huanuco se aplica en dispositivos finales e intermediarios
Requisitos para que haya intervlan:
Un dispositivo con ip routing activo
2. Interfaz con vlan (SVI)
3. Enlace trunk que haga de transporte para vlans

DISPOSITIVOS INTERMEDIARIOS
CORE
enable
conf t
hostname CORE_HUANUCO
//Paso 1: Implementar vlans 
vlan 10
name VENTAS
vlan 11
name ADMIN
vlan 12
name LOGIS
vlan 13
name EJECU
vlan 14
name FINAN
vlan 15
name MARKE
vlan 16
name SERV
vlan 17
name CLIENT
vlan 99
name NATIVE
exit
//asignar dir ip a interfaz
interface g1/0/1
no switchport
ip address 10.92.57.66 255.255.255.252
no shutdown
exit

ip routing

interface g1/0/2
switchport mode trunk
switchport trunk native vlan 99
no shutdown
exit

interface g1/0/3
switchport mode trunk
switchport trunk native vlan 99
no shutdown
exit

interface g1/0/4
switchport mode trunk
switchport trunk native vlan 99
no shutdown
exit

interface vlan 99
ip address 10.92.56.225 255.255.255.224
no shutdown
exit

interface vlan 10
ip address 10.92.56.1 255.255.255.128
no shutdown
exit

interface vlan 11
ip address 10.92.56.129 255.255.255.192
no shutdown
exit

interface vlan 12
ip address 10.92.56.193 255.255.255.224
no shutdown
exit

interface vlan 13
ip address 10.92.57.1 255.255.255.240
no shutdown
exit

interface vlan 14
ip address 10.92.57.17 255.255.255.240
no shutdown
exit

interface vlan 15
ip address 10.92.57.33 255.255.255.240
no shutdown
exit

interface vlan 16
ip address 10.92.57.49 255.255.255.248
no shutdown
exit

interface vlan 17
ip address 10.92.57.57 255.255.255.248
no shutdown
exit

router rip
network 10.92.57.0
network 10.92.56.0
version 2
no auto-summary
exit

end
wr

MULTICAPA WIFI
enable 
conf t 
hostname MULTICAPA_WIFI

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/2
switchport trunk encapsulation dot1q
switchport mode access
switchport access vlan 13

interface range f0/1
switchport trunk encapsulation dot1q
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.56.226 255.255.255.224
no shutdown 
exit 

ip default-gateway 10.92.56.225


D2 HUANUCO
enable 
conf t 
hostname D2_HUANUCO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface vlan 99 
ip address 10.92.56.227 255.255.255.224
no shutdown 

exit
ip default-gateway 10.92.56.225


D3 HUANUCO
enable 
conf t 
hostname D3_HUANUCO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-5
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface vlan 99 
ip address 10.92.56.228 255.255.255.224
no shutdown 

exit
ip default-gateway 10.92.56.225

SWT1
enable 
conf t 
hostname SWT1_HUANUCO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.56.229 255.255.255.224
no shutdown 
exit
ip default-gateway 10.92.56.225


SWT2
enable 
conf t 
hostname SWT2_HUANUCO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/2
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.56.230 255.255.255.224
no shutdown 
exit
ip default-gateway 10.92.56.225



SWT3
enable 
conf t 
hostname SWT3_HUANUCO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.56.231 255.255.255.224
no shutdown 
exit
ip default-gateway 10.92.56.225






CORE



MULTICAPA WIFI


MULTICAPA D2 (aplica lo mismo para D3)



SW1 (aplica lo mismo para SW2 y SW3)



3.3.5 Sede Sucursal 5


Scripts de Implementación de enrutamiento Inter VLAN en dispositivos finales e intermediarios

!------------------------ CONFIGURACION MULTICAPA_WIFI



enable 
conf t 
hostname MULTICAPA_WIFI

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/3
switchport trunk encapsulation dot1q
switchport mode access
switchport access vlan 13

interface range f0/2
switchport trunk encapsulation dot1q
switchport mode access
switchport access vlan 17

interface vlan 99 
ip address 10.92.48.114 255.255.255.240
no shutdown 
exit 

ip default-gateway 10.92.48.113


!------------------- CONFIGURACION D2_PUNO ----------------------



enable 
conf t 
hostname D2_PUNO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1-2
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-6
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface vlan 99 
ip address 10.92.48.115 255.255.255.240
no shutdown 

exit
ip default-gateway 10.92.48.113





!------------------- CONFIGURACION D3_LIMA ----------------------



enable 
conf t 
hostname D3_PUNO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit


interface range g0/1-2
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-6
switchport trunk encapsulation dot1q
switchport mode trunk 
switchport trunk native vlan 99

interface vlan 99 
ip address 10.92.48.116 255.255.255.240
no shutdown 

exit
ip default-gateway 10.92.48.113



------------------------------------- CONFIGURACION DE DEPARTAMENTOS ---------------------------------



------------------------------------- CONFIGURACION DE LOS SWT1_PUNO ---------------------------------



!--------- CONFIGURACION SWT1_PUNO ---------------------------


enable 
conf t 
hostname SWT1_PUNO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17



interface vlan 99 
ip address 10.92.48.117 255.255.255.240
no shutdown 
exit
ip default-gateway 10.92.48.113





------------------------------------- CONFIGURACION DE LOS SWT2_LIMA ---------------------------------



!--------- CONFIGURACION SWT2_LIMA ---------------------------



enable 
conf t 
hostname SWT2_PUNO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17



interface vlan 99 
ip address 10.92.48.118 255.255.255.240
no shutdown 
exit
ip default-gateway 10.92.48.113



-------------------------------- CONFIGURACION DE LOS SWT3_LIMA ---------------------------------



!--------- CONFIGURACION SWT3_LIMA ---------------------------


enable 
conf t 
hostname SWT3_PUNO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

exit

interface range g0/1
switchport mode trunk 
switchport trunk native vlan 99

interface range f0/1-3
switchport mode access 
switchport access vlan 10

interface range f0/4-7
switchport mode access 
switchport access vlan 11

interface range f0/8-11
switchport mode access 
switchport access vlan 12

interface range f0/12-15
switchport mode access 
switchport access vlan 13

interface range f0/16-19
switchport mode access
switchport access vlan 14

interface range f0/20-21
switchport mode access
switchport access vlan 15

interface range f0/22-23
switchport mode access
switchport access vlan 16

interface range f0/24
switchport mode access
switchport access vlan 17



interface vlan 99 
ip address 10.92.48.119 255.255.255.240
exit
ip default-gateway 10.92.48.113







Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento Inter VLAN en dispositivos finales e intermediarios







3.4 Implementación de Enrutamiento dinámico y estático
3.4.1 Implementación de enrutamiento estático
LIMA
enable
configure terminal
ip route 0.0.0.0 0.0.0.0 219.0.0.14
ip route 0.0.0.0 0.0.0.0 219.0.0.18 10
ip route 10.92.40.0 255.255.255.128 10.92.36.2  ! Hacia ICA
ip route 10.92.44.0 255.255.255.128 10.92.36.6  ! Hacia LA LIBERTAD
ip route 10.92.56.0 255.255.255.128 10.92.36.10 ! Hacia HUANUCO
ip route 10.92.48.0 255.255.255.128 10.92.36.14 ! Hacia PUNO




Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento estático en dispositivos intermediarios








ICA
enable
configure terminal
no router rip
ip route 0.0.0.0 0.0.0.0 10.92.36.1
exit
write





Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento estático en dispositivos intermediarios








LA LIBERTAD
enable
configure terminal
no router rip
ip route 0.0.0.0 0.0.0.0 10.92.36.5
exit
write



Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento estático en dispositivos intermediarios








HUÁNUCO
enable
configure terminal
no router rip
ip route 0.0.0.0 0.0.0.0 10.92.36.9
exit
write



Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento estático en dispositivos intermediarios








PUNO
enable
configure terminal
no router rip
ip route 0.0.0.0 0.0.0.0 10.92.36.13
exit
write



Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento estático en dispositivos intermediarios







3.4.2 Implementación de enrutamiento dinámico
LIMA
Scripts de Implementación de enrutamiento dinámico en dispositivos intermediarios

------------!ROUTER_LIMA


enable
conf t
hostname ROUTER_LIMA
interface f0/0
ip address 10.92.34.178 255.255.255.252
no shutdown
exit
router rip
network 10.92.34.0
version 2
no auto-summary
exit



------------!CORE



enable
conf t
hostname CORE_LIMA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

interface g1/0/4
no switchport
ip address 10.92.34.177 255.255.255.252
no shutdown
exit
ip routing
interface g1/0/1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/3
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown

interface vlan 99
ip address 10.92.34.65 255.255.255.224
no shutdown


interface vlan 10
ip address 10.92.32.1 255.255.255.0
no shutdown


interface vlan 11
ip address 10.92.33.1 255.255.255.128
no shutdown


interface vlan 12
ip address 10.92.33.129 255.255.255.192
no shutdown


interface vlan 13
ip address 10.92.33.193 255.255.255.192
no shutdown


interface vlan 14
ip address 10.92.34.1 255.255.255.192
no shutdown


interface vlan 15
ip address 10.92.34.97 255.255.255.224
no shutdown


interface vlan 16
ip address 10.92.34.129 255.255.255.224
no shutdown


interface vlan 17
ip address 10.92.34.161 255.255.255.240
no shutdown
exit

router rip
network 10.92.32.0
network 10.92.33.0
network 10.92.34.0
version 2
no auto-summary
exit






Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento dinámico en dispositivos intermediarios





ICA

Scripts de Implementación de enrutamiento dinámico en dispositivos intermediarios

------------!ROUTER_ICA

ena
conf t
hostname ROUTER_ICA
inter f0/0
ip address 10.92.41.65 255.255.255.252
no shutdown
exit
router rip
network 10.92.41.0
version 2
no auto-summary
exit


------------!CORE_ICA

enable
conf t
hostname CORE_ICA

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE
no shutdown

interface vlan 99
ip address 10.92.40.225 255.255.255.224
no shutdown


interface vlan 10
ip address 10.92.40.1 255.255.255.128
no shutdown


interface vlan 11
ip address 10.92.40.129 255.255.255.192
no shutdown


interface vlan 12
ip address 10.92.40.193 255.255.255.224
no shutdown


interface vlan 13
ip address 10.92.41.1 255.2
router rip
network 10.92.41.0
network 10.92.40.0
version 2
no auto-summary
exit





Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento dinámico en dispositivos intermediarios







LA LIBERTAD

Scripts de Implementación de enrutamiento dinámico en dispositivos intermediarios
------------!ROUTER_LIBERTAD


enable
conf t
hostname ROUTER_LIBERTAD
interface f0/0
ip address 10.92.37.65 255.255.255.252
no shutdown
exit
router rip
network 10.92.37.0
version 2
no auto-summary
exit



------------!CORE



enable
conf t
hostname CORE_LIBERTAD

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

interface g1/0/4
no switchport
ip address 10.92.37.66 255.255.255.252
no shutdown
exit
ip routing
interface g1/0/1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/3
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown

interface vlan 99
ip address 10.92.37.17 255.255.255.240
no shutdown


interface vlan 10
ip address 10.92.36.1 255.255.255.128
no shutdown


interface vlan 11
ip address 10.92.36.129 255.255.255.192
no shutdown


interface vlan 12
ip address 10.92.36.193 255.255.255.224
no shutdown


interface vlan 13
ip address 10.92.36.225 255.255.255.224
no shutdown


interface vlan 14
ip address 10.92.37.1 255.255.255.240
no shutdown


interface vlan 15
ip address 10.92.37.33 255.255.255.240
no shutdown


interface vlan 16
ip address 10.92.37.49 255.255.255.248
no shutdown


interface vlan 17
ip address 10.92.37.57 255.255.255.248
no shutdown
exit

router rip
network 10.92.37.0
network 10.92.36.0
version 2
no auto-summary
exit







Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento dinámico en dispositivos intermediarios







HUANUCO

Scripts de Implementación de enrutamiento dinámico en dispositivos intermediarios

ena
conf t
hostname ROUTER_HUANUCO


ip address 10.92.57.65 255.255.255.252
no shutdown
exit

router rip
network 10.92.57.0
network 10.92.56.0
version 2
no auto-summary
exit

end
wr

enable
conf t
hostname CORE_HUANUCO

vlan 10
name VENTAS
vlan 11
name ADMIN
vlan 12
name LOGIS
vlan 13
name EJECU
vlan 14
name FINAN
vlan 15
name MARKE
vlan 16
name SERV
vlan 17
name CLIENT
vlan 99
name NATIVE
exit

interface g1/0/1
no switchport
ip address 10.92.57.66 255.255.255.252
no shutdown
exit

ip routing

interface g1/0/2
switchport mode trunk
switchport trunk native vlan 99
no shutdown
exit

interface g1/0/3
switchport mode trunk
switchport trunk native vlan 99
no shutdown
exit

interface g1/0/4
switchport mode trunk
switchport trunk native vlan 99
no shutdown
exit

interface vlan 99
ip address 10.92.56.225 255.255.255.224
no shutdown
exit

interface vlan 10
ip address 10.92.56.1 255.255.255.128
no shutdown
exit

interface vlan 11
ip address 10.92.56.129 255.255.255.192
no shutdown
exit

interface vlan 12
ip address 10.92.56.193 255.255.255.224
no shutdown
exit

interface vlan 13
ip address 10.92.57.1 255.255.255.240
no shutdown
exit

interface vlan 14
ip address 10.92.57.17 255.255.255.240
no shutdown
exit

interface vlan 15
ip address 10.92.57.33 255.255.255.240
no shutdown
exit

interface vlan 16
ip address 10.92.57.49 255.255.255.248
no shutdown
exit

interface vlan 17
ip address 10.92.57.57 255.255.255.248
no shutdown
exit

router rip
network 10.92.57.0
network 10.92.56.0
version 2
no auto-summary
exit

end
wr






Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento dinámico en dispositivos intermediarios






PUNO

Scripts de Implementación de enrutamiento dinámico en dispositivos intermediarios
------------!ROUTER_PUNO


enable
conf t
hostname ROUTER_PUNO
interface f0/0
ip address 10.92.48.185 255.255.255.252
no shutdown
exit
router rip
network 10.92.48.0
version 2
no auto-summary
exit



------------!CORE



enable
conf t
hostname CORE_PUNO

vlan 10
name VENTAS

vlan 11
name ADMIN

vlan 12
name LOGIS

vlan 13
name EJECU

vlan 14
name FINAN

vlan 15
name MARKE

vlan 16
name SERV

vlan 17
name CLIENT

vlan 99
name NATIVE

interface g1/0/1
no switchport
ip address 10.92.48.186 255.255.255.252
no shutdown
exit
ip routing
interface g1/0/2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/3
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown
interface g1/0/4
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99
no shutdown

interface vlan 99
ip address 10.92.48.113 255.255.255.240
no shutdown


interface vlan 10
ip address 10.92.48.1 255.255.255.192
no shutdown


interface vlan 11
ip address 10.92.48.65 255.255.255.224
no shutdown


interface vlan 12
ip address 10.92.48.97 255.255.255.240
no shutdown


interface vlan 13
ip address 10.92.48.129 255.255.255.240
no shutdown


interface vlan 14
ip address 10.92.48.145 255.255.255.240
no shutdown


interface vlan 15
ip address 10.92.48.161 255.255.255.248
no shutdown


interface vlan 16
ip address 10.92.48.169 255.255.255.248
no shutdown


interface vlan 17
ip address 10.92.48.177 255.255.255.248
no shutdown
exit

router rip
network 10.92.48.0
version 2
no auto-summary
exit







Pantallas o salidas de comandos donde se verifica la implementación de enrutamiento dinámico en dispositivos intermediarios







3.6 Implementación de Políticas de Seguridad la Red
3.6.1 Sede Sucursal 1
a. Implementación de la Primera política seguridad

Scripts de Implementación de la política de seguridad en los dispositivos intermediarios

!-- CORE LIMA
ena
conf t
ip access-list extended POLITICA_FTP_LIMA

!-- 1. Permitir acceso al FTP LOCAL de Ica
permit tcp any host 10.92.41.52 eq ftp

!-- 2. Permitir acceso al FTP PRINCIPAL de Lima
permit tcp any host 10.92.34.155 eq ftp

!-- 3. BLOQUEAR FTP hacia cualquier otro destino (Puno, Cusco, Internet, etc.)
deny tcp any any eq ftp

!-- 4. PERMITIR todo lo demás

permit ip any any

exit

!-- Paso 2: Aplicar la ACL a las interfaces de los usuarios (VLANs)


interface vlan 10
ip access-group POLITICA_FTP_LIMA in
exit

interface vlan 11
ip access-group POLITICA_FTP_LIMA in
exit

interface vlan 12
ip access-group POLITICA_FTP_LIMA in
exit

interface vlan 13
ip access-group POLITICA_FTP_LIMA in
exit

interface vlan 14
ip access-group POLITICA_FTP_LIMA in
exit

interface vlan 15
ip access-group POLITICA_FTP_LIMA in
exit

interface vlan 16
ip access-group POLITICA_FTP_LIMA in
exit

interface vlan 17
ip access-group POLITICA_FTP_LIMA in
exit






Pantallas o salidas de comandos donde se verifica la implementación de la política de seguridad en dispositivos intermediarios









b. Implementación de la Segunda política seguridad

ip access-list extended FIREWALL_LIMA
 !
 ! 1. PERMITIR WEB LIMa DESDE TODAS LAS SEDES PERÚ
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.34.158 eq 80
 !
 ! 2. PERMITIR DHCP LIMA
 permit udp 10.92.32.0 0.0.31.255 host 10.92.34.156 eq 67
 !
 ! 3. PERMITIR CORREO LIMA
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.34.154 eq 25
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.34.154 eq 110
 !
 ! 4. PERMITIR TODO LO DEMÁS
 permit ip any any
exit

 interface f0/3
 ip access-group FIREWALL_LIMA in
 
 interface f0/3
 ip access-group FIREWALL_LIMA in
 
 interface f0/5
 ip access-group FIREWALL_LIMA in

exit







c. Implementación de la tercera política seguridad


ip access-list extended FIREWALL_LIMA
 !
 ! 1. PERMITIR WEB LIMa DESDE TODAS LAS SEDES PERÚ
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.34.158 eq 80
 !
 ! 2. PERMITIR DHCP LIMA
 permit udp 10.92.32.0 0.0.31.255 host 10.92.34.156 eq 67
 !
 ! 3. PERMITIR CORREO LIMA
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.34.154 eq 25
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.34.154 eq 110
 !
 ! 4. PERMITIR TODO LO DEMÁS
 permit ip any any
exit

 interface f0/3
 ip access-group FIREWALL_LIMA in
 
 interface f0/3
 ip access-group FIREWALL_LIMA in
 
 interface f0/5
 ip access-group FIREWALL_LIMA in

exit






d. Implementación de la cuarta política seguridad


ip access-list extended FIREWALL_LIMA
 !
 ! 1. PERMITIR WEB LIMa DESDE TODAS LAS SEDES PERÚ
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.34.158 eq 80
 !
 ! 2. PERMITIR DHCP LIMA
 permit udp 10.92.32.0 0.0.31.255 host 10.92.34.156 eq 67
 !
 ! 3. PERMITIR CORREO LIMA
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.34.154 eq 25
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.34.154 eq 110
 !
 ! 4. PERMITIR TODO LO DEMÁS
 permit ip any any
exit

 interface f0/3
 ip access-group FIREWALL_LIMA in
 
 interface f0/3
 ip access-group FIREWALL_LIMA in
 
 interface f0/5
 ip access-group FIREWALL_LIMA in

exit






e. Implementación de la quinta política seguridad

ena
conf t


ip domain-name miempresa.com

username admin privilege 15 secret admin
enable secret admin
service password-encryption

crypto key generate rsa
1024

ip access-list standard GESTION
  permit 10.92.33.0 0.0.0.127
  permit 10.92.36.128 0.0.0.63
  permit 10.92.40.128 0.0.0.63
  permit 10.92.56.128 0.0.0.63
  permit 10.92.48.64 0.0.0.31
  deny   any

line vty 0 4
 login local
 transport input ssh
 access-class GESTION in

end
wr










3.6.2 Sede Sucursal 2
a. Implementación de la Primera política seguridad

Scripts de Implementación de la política de seguridad en los dispositivos intermediarios

!-- CORE LIBERTAD
ena
conf t
ip access-list extended POLITICA_FTP_LIBERTAD

permit tcp any host 10.92.37.52 eq ftp

permit tcp any host 10.92.34.155 eq ftp
deny tcp any any eq ftp
permit ip any any

exit

interface vlan 10
ip access-group POLITICA_FTP_LIBERTAD in
exit

interface vlan 11
ip access-group POLITICA_FTP_LIBERTAD in
exit

interface vlan 12
ip access-group POLITICA_FTP_LIBERTAD in
exit

interface vlan 13
ip access-group POLITICA_FTP_LIBERTAD in
exit

interface vlan 14
ip access-group POLITICA_FTP_LIBERTAD in
exit

interface vlan 15
ip access-group POLITICA_FTP_LIBERTAD in
exit

interface vlan 16
ip access-group POLITICA_FTP_LIBERTAD in
exit

interface vlan 17
ip access-group POLITICA_FTP_LIBERTAD in
exit






Pantallas o salidas de comandos donde se verifica la implementación de la política de seguridad en dispositivos intermediarios









b. Implementación de la Segunda política seguridad
Sede sucursal 2

ip access-list extended FIREWALL_LIBERTAD
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL (LIBERTAD)
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.37.50 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL (LIBERTAD)
 !    El servidor escucha en el puerto 67 (bootps)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.37.53 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/4
 ip access-group FIREWALL_LIBERTAD in
 
 interface f0/4
 ip access-group FIREWALL_LIBERTAD in
 
exit







c. Implementación de la tercera política seguridad

ip access-list extended FIREWALL_LIBERTAD
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL (LIBERTAD)
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.37.50 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL (LIBERTAD)
 !    El servidor escucha en el puerto 67 (bootps)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.37.53 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/4
 ip access-group FIREWALL_LIBERTAD in
 
 interface f0/4
 ip access-group FIREWALL_LIBERTAD in
 
exit








d. Implementación de la cuarta política seguridad

ip access-list extended FIREWALL_LIBERTAD
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL (LIBERTAD)
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.37.50 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL (LIBERTAD)
 !    El servidor escucha en el puerto 67 (bootps)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.37.53 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/4
 ip access-group FIREWALL_LIBERTAD in
 
 interface f0/4
 ip access-group FIREWALL_LIBERTAD in
 
exit






e. Implementación de la quinta política seguridad

ena
conf t


ip domain-name miempresa.com

username admin privilege 15 secret admin
enable secret admin
service password-encryption

crypto key generate rsa
1024

ip access-list standard GESTION
  permit 10.92.33.0 0.0.0.127
  permit 10.92.36.128 0.0.0.63
  permit 10.92.40.128 0.0.0.63
  permit 10.92.56.128 0.0.0.63
  permit 10.92.48.64 0.0.0.31
  deny   any

line vty 0 4
 login local
 transport input ssh
 access-class GESTION in

end
wr


3.6.3 Sede Sucursal 3
a. Implementación de la Primera política seguridad

Scripts de Implementación de la política de seguridad en los dispositivos intermediarios

!-- CORE ICA
ena
conf t
ip access-list extended POLITICA_FTP_ICA

!-- 1. Permitir acceso al FTP LOCAL de Ica
permit tcp any host 10.92.41.52 eq ftp

!-- 2. Permitir acceso al FTP PRINCIPAL de Lima
permit tcp any host 10.92.34.155 eq ftp

!-- 3. BLOQUEAR FTP hacia cualquier otro destino (Puno, Cusco, Internet, etc.)
deny tcp any any eq ftp

!-- 4. PERMITIR todo lo demás

permit ip any any

exit

!-- Paso 2: Aplicar la ACL a las interfaces de los usuarios (VLANs)


interface vlan 10
ip access-group POLITICA_FTP_ICA in
exit

interface vlan 11
ip access-group POLITICA_FTP_ICA in
exit

interface vlan 12
ip access-group POLITICA_FTP_ICA in
exit

interface vlan 13
ip access-group POLITICA_FTP_ICA in
exit

interface vlan 14
ip access-group POLITICA_FTP_ICA in
exit

interface vlan 15
ip access-group POLITICA_FTP_ICA in
exit

interface vlan 16
ip access-group POLITICA_FTP_ICA in
exit

interface vlan 17
ip access-group POLITICA_FTP_ICA in
exit






Pantallas o salidas de comandos donde se verifica la implementación de la política de seguridad en dispositivos intermediarios











b. Implementación de la Segunda política seguridad
Sede sucursal 3

ip access-list extended FIREWALL_ICA
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL ICA
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.41.50 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL ICA
 !    (peticiones hacia el servidor usan puerto 67)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.41.53 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/3
 ip access-group FIREWALL_ICA in
 
 interface f0/4
 ip access-group FIREWALL_ICA in
 
exit






c. Implementación de la tercera política seguridad

ip access-list extended FIREWALL_ICA
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL ICA
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.41.50 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL ICA
 !    (peticiones hacia el servidor usan puerto 67)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.41.53 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/3
 ip access-group FIREWALL_ICA in
 
 interface f0/4
 ip access-group FIREWALL_ICA in
 
exit






d. Implementación de la cuarta política seguridad

ip access-list extended FIREWALL_ICA
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL ICA
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.41.50 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL ICA
 !    (peticiones hacia el servidor usan puerto 67)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.41.53 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/3
 ip access-group FIREWALL_ICA in
 
 interface f0/4
 ip access-group FIREWALL_ICA in
 
exit






e. Implementación de la quinta política seguridad

ena
conf t


ip domain-name miempresa.com

username admin privilege 15 secret admin
enable secret admin
service password-encryption

crypto key generate rsa
1024

ip access-list standard GESTION
  permit 10.92.33.0 0.0.0.127
  permit 10.92.36.128 0.0.0.63
  permit 10.92.40.128 0.0.0.63
  permit 10.92.56.128 0.0.0.63
  permit 10.92.48.64 0.0.0.31
  deny   any

line vty 0 4
 login local
 transport input ssh
 access-class GESTION in

end
wr


3.6.4 Sede Sucursal 4
a. Implementación de la Primera política seguridad

Scripts de Implementación de la política de seguridad en los dispositivos intermediarios


!-- Paso 1: Crear la ACL Extendida
ena
conf t
ip access-list extended POLITICA_FTP_HUANUCO

permit tcp any host 10.92.57.52 eq ftp

permit tcp any host 10.92.34.155 eq ftp
deny tcp any any eq ftp
permit ip any any

exit

interface vlan 10
ip access-group POLITICA_FTP_HUANUCO in
exit

interface vlan 11
ip access-group POLITICA_FTP_HUANUCO in
exit

interface vlan 12
ip access-group POLITICA_FTP_HUANUCO in
exit

interface vlan 13
ip access-group POLITICA_FTP_HUANUCO in
exit

interface vlan 14
ip access-group POLITICA_FTP_HUANUCO in
exit

interface vlan 15
ip access-group POLITICA_FTP_HUANUCO in
exit

interface vlan 16
ip access-group POLITICA_FTP_HUANUCO in
exit

interface vlan 17
ip access-group POLITICA_FTP_HUANUCO in
exit



Pantallas o salidas de comandos donde se verifica la implementación de la política de seguridad en dispositivos intermediarios





b. Implementación de la Segunda política seguridad
Sede sucursal 4

ip access-list extended FIREWALL_HUANUCO
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL (HUÁNUCO)
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.57.50 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL (HUÁNUCO)
 !    El servidor usa puerto 67 (bootps)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.57.53 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/3
 ip access-group FIREWALL_HUANUCO in
 
 interface f0/3
 ip access-group FIREWALL_HUANUCO in
 
exit


c. Implementación de la tercera política seguridad


ip access-list extended FIREWALL_HUANUCO
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL (HUÁNUCO)
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.57.50 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL (HUÁNUCO)
 !    El servidor usa puerto 67 (bootps)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.57.53 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/3
 ip access-group FIREWALL_HUANUCO in
 
 interface f0/3
 ip access-group FIREWALL_HUANUCO in
 
exit


d. Implementación de la cuarta política seguridad

ip access-list extended FIREWALL_HUANUCO
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL (HUÁNUCO)
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.57.50 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL (HUÁNUCO)
 !    El servidor usa puerto 67 (bootps)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.57.53 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/3
 ip access-group FIREWALL_HUANUCO in
 
 interface f0/3
 ip access-group FIREWALL_HUANUCO in
 
exit


e. Implementación de la quinta política seguridad

ena
conf t


ip domain-name miempresa.com

username admin privilege 15 secret admin
enable secret admin
service password-encryption

crypto key generate rsa
1024

ip access-list standard GESTION
  permit 10.92.33.0 0.0.0.127
  permit 10.92.36.128 0.0.0.63
  permit 10.92.40.128 0.0.0.63
  permit 10.92.56.128 0.0.0.63
  permit 10.92.48.64 0.0.0.31
  deny   any

line vty 0 4
 login local
 transport input ssh
 access-class GESTION in

end
wr



3.6.5 Sede Sucursal 5
a. Implementación de la Primera política seguridad

Scripts de Implementación de la política de seguridad en los dispositivos intermediarios

Core PUNO

```
!-- Paso 1: Crear la ACL Extendida
ena
conf t
ip access-list extended POLITICA_FTP_PUNO

permit tcp any host 10.92.48.174 eq ftp

permit tcp any host 10.92.34.155 eq ftp
deny tcp any any eq ftp
permit ip any any

exit

interface vlan 10
ip access-group POLITICA_FTP_PUNO in
exit

interface vlan 11
ip access-group POLITICA_FTP_PUNO in
exit

interface vlan 12
ip access-group POLITICA_FTP_PUNO in
exit

interface vlan 13
ip access-group POLITICA_FTP_PUNO in
exit

interface vlan 14
ip access-group POLITICA_FTP_PUNO in
exit

interface vlan 15
ip access-group POLITICA_FTP_PUNO in
exit

interface vlan 16
ip access-group POLITICA_FTP_PUNO in
exit

interface vlan 17
ip access-group POLITICA_FTP_PUNO in
exit
```



Pantallas o salidas de comandos donde se verifica la implementación de la política de seguridad en dispositivos intermediarios




b. Implementación de la Segunda política seguridad


ip access-list extended FIREWALL_PUNO
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL (PUNO)
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.48.172 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL (PUNO)
 !    Servidor usa puerto 67 (bootps)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.48.173 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/2
 ip access-group FIREWALL_PUNO in
 
 interface f0/4
 ip access-group FIREWALL_PUNO in
 
exit


c. Implementación de la tercera política seguridad

ip access-list extended FIREWALL_PUNO
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL (PUNO)
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.48.172 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL (PUNO)
 !    Servidor usa puerto 67 (bootps)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.48.173 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/2
 ip access-group FIREWALL_PUNO in
 
 interface f0/4
 ip access-group FIREWALL_PUNO in
 
exit


d. Implementación de la cuarta política seguridad


ip access-list extended FIREWALL_PUNO
 !
 ! ===============================
 ! 1. PERMITIR SERVIDOR WEB LOCAL (PUNO)
 ! ===============================
 permit tcp 10.92.32.0 0.0.31.255 host 10.92.48.172 eq 80
 !
 ! ===============================
 ! 2. PERMITIR SERVIDOR DHCP LOCAL (PUNO)
 !    Servidor usa puerto 67 (bootps)
 ! ===============================
 permit udp 10.92.32.0 0.0.31.255 host 10.92.48.173 eq 67
 !
 ! ===============================
 ! 3. PERMITIR TODO LO DEMÁS
 ! ===============================
 permit ip any any
exit

 interface f0/2
 ip access-group FIREWALL_PUNO in
 
 interface f0/4
 ip access-group FIREWALL_PUNO in
 
exit




e. Implementación de la quinta política seguridad


ena
conf t


ip domain-name miempresa.com

username admin privilege 15 secret admin
enable secret admin
service password-encryption

crypto key generate rsa
1024

ip access-list standard GESTION
  permit 10.92.33.0 0.0.0.127
  permit 10.92.36.128 0.0.0.63
  permit 10.92.40.128 0.0.0.63
  permit 10.92.56.128 0.0.0.63
  permit 10.92.48.64 0.0.0.31
  deny   any

line vty 0 4
 login local
 transport input ssh
 access-class GESTION in

end
wr



