INGENIERIA DE SISTEMAS DE INFORMACIÓN

CURSO: SI640 Redes y Comunicación de Datos

ENUNCIADO DEL TRABAJO FINAL DEL CURSO

PROFESORES: 	Burga Durango, Daniel Alfredo
Chávez Rodriguez, Daymo Rodrigo
Chinchay Celada, Milton Enrique
Salcedo Polo, Jorge Luis
Canales Aria Félix Gaspar
Lesevic Rodríguez, Ricardo
Gomez Limaco, Rulier
Aguilar Ruiz, Luis Enrique 
Ulloa Peláez, Nilton Cesar
SECCIÓN:	Todas
FECHA DE EVALUACIÓN:	Semana 7, 15
CICLO ACADEMICO:	2026-10

Objetivo:
El presente documento define el trabajo final y la rúbrica que permite evaluar el logro del curso SI640 – REDES Y COMUNICACIÓN DE DATOS
Logro del curso:
Implementa un proyecto de redes WAN teniendo en cuenta el propósito y funciones de todos los equipos que intervienen en las telecomunicaciones, configurando y verificando las operaciones básicas, diseñando e implementando un esquema de direccionamiento IP.

En Ingeniería de Sistemas de Información, el logro contribuye a alcanzar el: 

ABET – EAC - Student Outcome 1: La capacidad de identificar, formular y resolver problemas complejos de ingeniería aplicando los principios de ingeniería, ciencia y matemática.

ABET – CAC - Student Outcome 1: La capacidad de analizar un problema complejo aplicando los principios de computación, ciencia y matemática para identificar soluciones.

ICACIT - Student Outcome A: La capacidad de aplicar conocimientos de matemáticas, ciencias e ingeniería en la solución de problemas complejos de ingeniería.

ICACIT - Student Outcome E: La capacidad de identificar, formular, buscar información y analizar problemas complejos de ingeniería para llegar a conclusiones fundamentadas usando principios básicos de matemáticas, ciencias naturales y ciencias de la ingeniería.

ICACIT - Student Outcome L: La capacidad de demostrar el conocimiento y la comprensión de los principios de gestión en ingeniería y la toma de decisiones económicas, y su respectiva aplicación.


CASO ESTUDIO


Inicial

MIEMPRESA

Sedes (Lima, La Libertad, Ica, Huanuco y Puno)



Grupo: X



Enunciado del Caso Estudio

MIEMPRESA es una empresa transnacional que opera en múltiples países (Argentina, Chile, Perú, Ecuador y Colombia), la casa matriz está ubicada en Perú y hay filiales en cada país, donde opera en múltiples ciudades. La empresa ha estado operando con la misma infraestructura de red desde hace diez años, se fue expandiendo de manera no planificada, cada vez que se tenía que abrir una nueva sede, se instalaban los equipos necesarios para soportar a la nueva red y usuarios. La implementación de la nueva red estaba a cargo de una empresa consultora especializada en TI, muy a menudo la información de diseño y documentación de la red actual era inexistente o estaba desactualizada. Los equipos que se adquirían o arrendaban tenían muchas veces problemas de integración con la infraestructura existente ya que soportaban tecnologías propietarias que eran incompatibles con la infraestructura actual, al tener muchos equipos de diferentes fabricantes, la curva de aprendizaje del equipo de soporte y redes era lento, dificultando el soporte a las áreas usuarias. Muchas veces se discutió en utilizar tecnologías que soporten estándares de la industria, pero la presión del día a día en el negocio y la operación no permitía planificar soluciones de largo plazo.

Al momento de las pruebas e integración de la nueva red, los usuarios de la sede nueva se quejaban de que no podían acceder a los servicios de red debido a que les aparecía mensajes de duplicidad de direcciones IP, se logró identificar que esto ocurría porque en la nueva sede se utilizaba direcciones IP que ya habían sido asignados a otra sede impactando la conectividad en ambas sedes. 

Por lo indicado, se les ha contratado a ustedes, como ingenieros con experiencia en el diseño e implementación de redes para la actualización de la red empresarial de la casa matriz de la transnacional ubicada en Perú para que se implemente una red sólida que permita la comunicación fluida entre sus sedes, el acceso seguro a recursos y datos, así como un diseño e infraestructura escalable que soporte futuros crecimientos, para cumplir este cometido, el diseño lógico de la red debe ser jerárquico de forme que soporte:

|- Filial: País
|--- Sede: Ciudad
|------- Unidades organizacionales Nro. 1
|------- Unidades organizacionales Nro. 2
|------- Unidades organizacionales Nro. 3
|------- Unidades organizacionales Nro. …
|------- Unidades organizacionales Nro. n

Como parte de la primera etapa, el diseño e implementación de la red será exclusivamente para la casa matriz Perú, se deberá especificar el diseño lógico de la red y no la implementación para el resto de filiales (Argentina, Chile, Ecuador y Colombia) sólo a nivel de país.

Adicional, es necesario que se dimensione y especifique la solución técnica económica implementada.

I.DISEÑO FISICO Y LOGICO

Se establecerá una arquitectura de red jerárquica LAN, con una capa de acceso, una capa de distribución y una capa central de núcleo. Cada sede contará con switches de acceso y puntos de acceso inalámbricos para la conexión de dispositivos locales, que se conectarán a switches de distribución y estos a un switch núcleo través de enlaces redundantes. Este último switch núcleo se conectará a un router, que a su vez se conecta a la sede central a través de conexiones WAN. Para modelos de implementación de la topología LAN podrá encontrarlos en las Figuras 2.

Se propone que la topología WAN sea una del tipo Hub and Spoke tal como se muestra en el diagrama siguiente (Figura 1). 


FIGURA 1: TOPOLOGÍA FISICA Y LÓGICA REFERENCIAL WAN EMPRESA MIEMPRESA
  
Cinco sedes, dos ISPs, un responsable por cada sede



Figura 2: TOPOLOGÍA FISICA Y LÓGICA REFERENCIAL DE LA SEDE PRINCIPAL Y SUCURSALES




Espacio de Direccionamiento (IPs referenciales profesor puede redefinir por equipo):

La empresa utilizará el siguiente espacio de direccionamiento RFC 1918 para su red interna, redes WAN y servicio DNS


Direccionamiento de la multinacional

Dirección de red de dominio	: 10.19X.0.0/16
Nombre del dominio	: miempresa.com
Dirección Web	: www.miempresa.com
Dirección Correo	: mail.miempresa.com
Direccionamiento IP de los enlaces WAN:	
Lima a restos de ciudades	: Los enlaces WAN son subredes de la segunda subred disponible para Perú, como se indica en la topología (Figura 1)

Lima a ISP	: Los enlaces WAN son las direcciones IP, como se indica en la topología (Figura 1)

Direccionamiento del ISP

Dirección de red del ISP	: Como se muestra en la topología del caso
Nombre DNS del sitio Web	: Como se muestra en la topología del caso
Dirección IP del DNS en ISP	: Como se muestra en la topología del caso
Dirección IP del Web Server en ISP	: Como se muestra en la topología del caso

La empresa cuenta con una infraestructura de comunicaciones legacy (sede principal Lima y sedes sucursales) la cual necesita ser actualizada. La empresa requiere actualizar su infraestructura para todas sus sedes (el número de sedes varía en función del número de integrantes del grupo), lo cual implica realizar cuatro enlaces WAN desde la sede principal Lima con cada una de las sedes sucursales. En cada sede se va a requerir VLANs adicionales.

Tabla1: Modelo de tabla de direccionamiento para las subredes de la multinacional



Tabla 2: Modelo de tabla de direccionamiento para la casa matriz ubicada en Perú:



Sede Principal: Red Lima (Requerimientos)

Total de host sede en la sede Lima: 452 distribuidos de la siguiente manera.

Red Cableada: 
Administración 		: 100 hosts (en VLAN)
Logística	 	: 25 hosts (en VLAN)
Finanzas		: 41 hosts (en VLAN)
Marketing		: 29 hosts (en VLAN)
Ventas			: 198 hosts (en VLAN)
Servidores		: 10 hosts (en VLAN)
Nativa (Gestión)	: En función de la cantidad de los dispositivos de red (switches, routers, switches multicapa) utilizados en la solución
Red Inalámbrica
Red Usuarios WiFi Clientes: 18 hosts
Red Usuarios WiFi Ejecutivos: 31 hosts

Dado los requisitos actuales deberá estimar el crecimiento futuro de usuario a una tasa de crecimiento 25% para los próximos 10 años.

Tabla 3: Modelo de tabla de esquema de direccionamiento IP


Proyección de crecimiento de hosts del 25%

Requerimientos para sedes sucursales

Red La Libertad (Requerimientos)
Red de Usuarios Internos: 160 usuarios y esquema de direccionamiento VLAN similar.

Red Ica (Requerimientos)
Red de Usuarios Internos: 190 usuarios y esquema de direccionamiento VLAN similar.

Red Huanuco (Requerimientos)
Red de Usuarios Internos: 96 usuarios y esquema de direccionamiento VLAN similar.

Red Puno (Requerimientos)
Red de Usuarios Internos: 105 usuarios y esquema de direccionamiento VLAN similar.

II.TECNOLOGIAS LAN Y WAN

Se implementarán redes LAN en cada sede utilizando tecnologías Ethernet y WiFi. Se establecerán conexiones WAN dedicadas de alta velocidad para enlazar las oficinas remotas al núcleo central. Es necesario implementar VLAN e InterVLAN. En el caso de las Vlan que se creen en la organización estas heredaran los nombres de algunas (o todas) las Vlan de la sede Lima. Se debe verificar la conectividad intra Vlan (hosts en la misma vlan). Una vez configurado el enrutamiento intervlan, verificar la conectividad inter Vlan (hosts de diferentes vlans) dentro de una misma sede.

La empresa contará en cada sede con 2 redes WiFi. Clientes que es para los clientes (Invitados) de la empresa, que desean hacer uso de Internet. Y Ejecutivos que es para los ejecutivos de la empresa. Ambas redes entregan la dirección IP a sus usuarios a través de DHCP. 

Para conexiones WAN, se utilizarán enlace punto a punto que faciliten la integración de diversos equipos, es necesarios que las tecnologías WAN a utilizar sea un estándar de la industria y sean seguras.

III.ENRUTAMIENTO:
Se implementará enrutamiento dinámico (RIPv2) para la red interna y enrutamiento estático para la conectividad hacia la Internet. Se tiene dos enlaces WAN hacia la Internet, enlaces Primario y Secundario, el enlace Primario a través de ISP1 debe estar activo de manera predeterminada y en caso de falla se activará el enlace Secundario a través de ISP2. Adicionalmente en la red de ISP de la Internet deberá configurarse el enrutamiento estático hacia la red interna de Perú para que utilice el enlace primario de manera predeterminada, se tendrá que configurar el enrutamiento estático de forma que responda el enlace secundario en caso falle el primario.

El enrutamiento dinámico garantizará una convergencia rápida y un enrutamiento eficiente dentro de la red, mientras que el enrutamiento predeterminado y estático asegurará la mejor ruta para la comunicación fuera de la red de la empresa.

IV.SERVICIOS Y SEGURIDAD DE LA RED:
Se implementará un enfoque de seguridad en capas. Se utilizarán firewalls en la sede principal y sedes sucursales en Perú para proteger el acceso a ciertos servicios. Se establecerán segmentaciones de red para separar tráficos críticos. Adicional implementar la seguridad básica en todos los dispositivos de red.

Respecto a los servicios de red y el acceso seguro se deberá contemplar lo siguiente:
Cada sede tendrá un servidor de archivos propio (Servidor FTP) que solo debe ser accedido por los usuarios de su sede local y además acceder al servidor de archivos de la sede principal Lima (Por ejemplo, los usuarios de la sede sucursal Ica solo podrán visitar el servidor de archivos de la sede principal Lima y al servidor local de Ica mas no La Libertad y otras sedes; otro ejemplo, los usuarios de La Libertad podrán visitar el servidor de archivos de Lima y La Libertad más no el de Ica y otras sedes).
La sede Lima y las 4 sedes sucursales también implementaran un servidor WEB local, que puede ser visitado por cualquier usuario de la empresa.
La sede Lima y las 4 sedes sucursales también implementaran un servidor DHCP local, que puede ser visitado por cualquier usuario de la empresa.
La sede Lima implementara un servidor de CORREOS, que puede enviar y recibir cualquier correo de la empresa.
Todos los dispositivos de red router y switches de la empresa MIEMPRESA, debe de ser gestionados de manera remota y segura desde una PC-ADMIN que pertenece a la red Nativa (Gestión) en cada sede.

V.SERVICIOS CLOUD

Se le pide analizar y evaluar una solución Cloud de almacenamiento para lo cual se le pide comparar proveedores reales de soluciones Cloud (AWS, Azure, GCP, etc), se le solicita evaluar la opción de rentar un servidor en la nube (dimensionado y costeado) para implementar una solución corporativa de backup (solo se necesita un servidor con un espacio adecuado para el almacenamiento). Esta propuesta tiene que ser validada en cuanto al precio del servicio y calidad del proveedor.

También se solicitar evaluar la posibilidad de migrar la infraestructura de red existente a una solución Cloud, por lo que tendrá que buscar proveedores de soluciones Cloud (AWS, Azure, GCP, etc.) que ofrezcan servicios de red en la nube que sean similares a los que se están implementando en la solución On Premise. Deberá describir y explicar el funcionamiento de los servicios de red (Por ejemplo: VPC, Routers, Switches, Firewall, etc) que las plataformas Cloud ofrecen. Explicando cómo debería ser la implementación de estos para que reemplacen a la solución On Premisse (física) que están proponiendo en la propuesta inicial.

VI.LINEAMIENTOS DEL TRABAJO

Número de Integrantes

En grupo estará compuesto por un máximo de cinco (5) integrantes

Plazo de entrega del Informe Técnico

El trabajo final inicia la semana2 de clases, y se realizará en dos etapas (hitos). Será evaluado en semana 7 y semana 15.

El plazo de entrega es impostergable y por ningún motivo y/o circunstancia se recibirá trabajos fuera de esa fecha y hora. 

Defensa Técnica de la Solución 

Si al momento de la exposición el profesor determina que el alumno no ha hecho parte o la totalidad del trabajo debido a que el alumno no supo sustentar o responder correctamente a las preguntas realizadas, el profesor podría considerar descontar puntos en funcionalidades ya implementadas del trabajo. 

La sindicación del alumno respecto que recibió ayuda u orientación externa durante la realización del trabajo, por lo que pretenda sustentar algún error o falencia presentada en su trabajo, no será considerada como válida por lo que el alumno deberá realizar el trabajo de forma integral, siendo su total responsabilidad.

El informe técnico se realizará en grupo, deberá contener los siguientes componentes de solución para todas las sedes:

Análisis y diseño de la red
oDeterminación de los requisitos de red.
oSupuestos a considerar en el diseño de la red.
oDefinición de las diferentes subredes y su direccionamiento.
oDiseño físico de la red (selección equipos, velocidad y tipos de medio de red, denominación de los equipos)
oDiseño lógico de la red.

Planificación del direccionamiento IP 
oCriterios para la asignación del direccionamiento IP.
oDefiniciones de las direcciones IP asignadas a los dispositivos de la red (PC, servidores, router y switches).
oEsquemas de direccionamiento IP y Tabla de Direccionamiento IP.

Dimensionamiento técnico-económico de la red
oDimensionamiento de la cantidad de equipos.
oValorización económica de la solución propuesta.
oEspecificaciones técnicas de los equipos de la solución (modelos de router y switches, cantidad y tipo de interfaces, etc).

Implementación de la red
oConfiguración de los dispositivos de red (routers, switches y router inalámbricos)
oConfiguración de direccionamiento IP en los dispositivos (routers, switches y router inalámbricos, PCs, Servidores).
oConfiguración de tecnologías de conmutación LAN (Vlan).
oConfiguración de enrutamiento inter Vlan.
oConfiguración de enrutamiento IP.
oConfiguración de redes inalámbricas (router y clientes inalámbricos).

Implementación de los servicios de red
oServicios de HTTP.
oServicios de DNS
oServicios FTP
oServicios de DHCP
oServicios de correo electrónico

Implementación de la seguridad de la red
oSeguridad básica de la red
oPolíticas de seguridad de la red

Verificación de la operación la red
oPruebas de conectividad intra Vlan
oPruebas de conectividad inter Vlan
oPruebas de conectividad inter-sedes
oPruebas de conectividad al ISP
oPruebas de las políticas de seguridad

Estructura Básica del Informe  

Cada grupo debe entregar un informe detallando cada una de las secciones como se muestran en el Anexo 1 Modelo de Informe Final

EVALUACIÓN DEL TRABAJO PARCIAL Y FINAL


El trabajo se ha dividido en 2 hitos. 

PRIMER HITO
Implementación de la LAN empresarial de acuerdo al diseño físico y lógico del caso propuesto.

OBJETIVOS
Comprende los requisitos de red de caso estudio propuesto
Realiza el diseño físico y lógico de la red de acuerdo a los requisitos de red propuestos
Implementa la solución de red LAN (vlan, intervlan) y WLAN diseñada
Prueba el funcionamiento de la red LAN y WLAN implementada

ENTREGABLES ESPERADOS
Un (1) archivo en Cisco Packet Trace en el formato PKA, con la Topología física y lógica de la red configurada
Tabla en Excel con el esquema de direccionamiento.
Informe Trabajo Parcial
Presentación en Power Point


FECHA DE ENTREGABLE 

Semana 7

ACTIVIDADES Y TAREAS 

DISEÑO FISICO DE LA RED
Nombra los dispositivos finales e intermediarios de la red
Selecciona los dispositivos finales e intermediarios (Switches, Routers, Access Point, Firewall, etc.)
Interconecta los dispositivos de la red, seleccionando correctamente los tipos de redes LAN, WAN y WLAN
Interconecta los dispositivos de la red, utilizando para ello los tipos de medios cableados e inalámbricos
DISEÑO LOGICO DE LA RED
Realiza el esquema de direccionamiento IPv4 de acuerdo a las necesidades de segmentación de la red
Realiza el diseño lógico de la red (Subnetting y VLSM) y documenta la topología de la red
DIRECCIONAMIENTO IP
Configura el direccionamiento IPv4 en los dispositivos finales de acuerdo al esquema de direccionamiento determinado
Prueba la conectividad entre dispositivos finales que pertenecen a la misma sede.

CONMUTACIÓN LAN
Realiza la configuración básica en los dispositivos de conmutación LAN 
Configura VLAN (Datos, Voz, Nativa, Gestión, etc.) de acuerdo a las necesidades de la segmentación de la red
Configura los enlaces troncales en la red conmutada
Prueba la conectividad entre dispositivos finales que pertenecen a la misma red (intra VLAN)
INTERVLAN ROUTING
Configura el enrutamiento inter VLAN (Router-on-a-Stick)
Realiza pruebas de conectividad entre dispositivos finales que pertenecen a diferentes redes (inter VLANs)
Selecciona y utiliza diferentes tipos de medios de red cableados e inalámbricos tomando en consideración aspectos como: Velocidad, Distancia, Movilidad, etc.
DIMENSIONAMIENTO TECNICO - ECONÓMICO
Selecciona los dispositivos de red tomando en consideración aspectos como: Velocidad (Bw), Tipo de Transmisión (HD, FD), factor de forma (Cantidad de Puertos), etc.
Dimensiona la infraestructura de red (cantidad de switches, routes, router inalámbricos) tomando en consideración los requisitos de red actuales y futuros
Dimensiona el costo de la implementación de la solución tomando en cuenta el dimensionamiento de la infraestructura de red
REDES INALAMBRICAS
Configura el router inalámbrico o Punto de Acceso de acuerdo a los requisitos de red
Configura la seguridad de la red inalámbrica utilizando WPA2
Configura los clientes inalámbricos utilizando WPA2
Prueba conectividad de los clientes inalámbricos

SOLUCION CLOUD
Investiga diferentes proveedores y servicios en la nube (almacenamiento en la nube para backups)
Describe a los proveedores y los servicios en la nube 
Identifica y describe las dimensiones o factores a considerar en el análisis de los proveedores y servicios en la nube
Compara diferentes proveedores en la nube tomando en consideración dimensiones y factores:
Selecciona al proveedor de cloud, justificando los criterios de elección


SEGUNDO HITO
Implementación de la LAN y WAN empresarial de acuerdo al diseño físico y lógico del caso propuesto.
Implementación de servicios de red
Implementación de las políticas de seguridad de la red
Verificación de la operación de la red.

OBJETIVOS
Implementa enrutamiento dinámico y estático
Implementa los servicios de red
Implementa políticas de seguridad de la red
Prueba el funcionamiento de la red de extremo a extremo

ENTREGABLES ESPERADOS
Un (1) archivo en Cisco Packet Trace en el formato PKA, con la Topología física y lógica de la red configurada
Tabla en Excel con el esquema de direccionamiento.
Informe Trabajo Final
Presentación en Power Point

FECHA DE ENTREGABLE 

Semana 15

ACTIVIDADES Y TAREAS 

ENRUTAMIENTO IP
Configura el enrutamiento predeterminado en el router Borde/Frontera
Configura el enrutamiento estático en el router ISP
Configura el enrutamiento dinámico entre las redes de la Sede Principal y sedes Remotas
Verifica la tabla de enrutamiento en cada router
Prueba conectividad entre dispositivos finales de diferentes sedes

SERVICIOS DE RED
Configura el servicio de red : FTP Server
Configura el servicio de red : HTTP Server
Configura el servicio de red : DHCP Server
Configura el servicio de red : DNS Server
Configura el servicio de red : SSH en todos los dispositivos de red intermediarios
Configura el servicio de red : SMTP Server
Configura el servicio de red : POP3 Server
Prueba la operación de los servicios de red

POLITICAS DE SEGURIDAD
Implementa las políticas de seguridad 1
Implementa las políticas de seguridad 2
Implementa las políticas de seguridad 3
Implementa las políticas de seguridad 4
Implementa las políticas de seguridad 5

PRUEBAS DE CONECTIVIDAD DE INTEGRACIÓN
Prueba conectividad entre dispositivos finales de diferentes sedes
Prueba conectividad a los servicios de red desde diferentes sedes
Prueba la implementación de las políticas de seguridad

SOLUCION CLOUD
Evalúa a diferentes proveedores en la nube (AWS, Azure, GCP, etc) sobre servicios de red Cloud similares a los que se están implementando en la solución On Premise. 
Explica el funcionamiento servicios de red Cloud tales como: 
oServicios de red (DNS, FTP, Web, Mail)
oServicios de Enrutamiento (router) y Conmutación LAN (switches)
oServicios de Seguridad (firewall)
Explica la implementación de los servicios de red Cloud para reemplazar la solución On Premise existente.

