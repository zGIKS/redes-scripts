# Resumen

En esta **primera entrega (Hito 01)** se desarrolla la etapa de **presentación, análisis, diseño e implementación LAN/WLAN** de la casa matriz de MIEMPRESA en Perú. El trabajo incluye: levantamiento de requisitos, diseño físico y lógico, definición de **VLANs**, elaboración del **esquema de direccionamiento IPv4 (FLSM/VLSM)** con proyección de crecimiento, configuración de **conmutación LAN** (VLANs y troncales), configuración de **enrutamiento InterVLAN (Router-on-a-Stick)** y despliegue de **WLAN** (Clientes y Ejecutivos) con seguridad **WPA2** y asignación de IP por **DHCP**, validando la operación mediante pruebas de conectividad **intra-VLAN, inter-VLAN y WiFi**.

# Objetivo del Estudiante (Student Outcome)

1) **Razonamiento Cuantitativo – Nivel 2:** Relaciona datos e información numérica para definir una situación problemática y efectúa la operación matemática, sustentando el resultado y brindando alternativas de solución básicas y/o evidentes.

2) **ABET 1 – Solución de Problemas – Nivel 2:** Identifica parcialmente las necesidades, causas y requisitos funcionales, así como también identifica de manera parcial los requisitos técnicos, parámetros y técnicas para resolver un problema complejo.

# Capítulo 1: Presentación, Análisis y Diseño

## 1.1 Descripción del caso estudio

### 1.1.1 Descripción de la empresa

MIEMPRESA es una empresa transnacional con operaciones en Argentina, Chile, Perú, Ecuador y Colombia. La casa matriz se encuentra en Perú y la empresa mantiene sedes en distintas ciudades. Para el alcance del proyecto se trabaja el diseño e implementación para Perú (Sede Principal Lima y sedes sucursales), y para el resto de filiales se plantea el diseño lógico a nivel de país.

### 1.1.2 Descripción del problema o necesidad

La infraestructura de red actual ha crecido sin planificación estandarizada durante años: existe diversidad de fabricantes, dificultades de integración, curva de aprendizaje elevada para soporte, y documentación inexistente o desactualizada. Durante la apertura de nuevas sedes se han presentado incidentes por **duplicidad de direcciones IP**, generando pérdida de conectividad. Se requiere una red sólida y escalable que asegure segmentación por áreas, direccionamiento consistente y verificación de operación.

### 1.1.3 Objetivos de la solución propuesta

**Objetivo general:** Diseñar e implementar una red empresarial jerárquica (Filial→Sede→Unidades organizacionales) que permita comunicación fluida entre áreas, acceso seguro y escalabilidad.

**Objetivos específicos para la primera entrega (Hito 01):**
- Identificar y documentar requisitos de red por sede.
- Diseñar la topología física (LAN/WLAN) y la topología lógica (VLANs y subredes).
- Definir el esquema de direccionamiento IPv4 (FLSM/VLSM) con proyección de crecimiento.
- Implementar VLANs, troncales e InterVLAN (Router-on-a-Stick) en cada sede del alcance.
- Implementar WLAN (Clientes y Ejecutivos) con WPA2, DHCP y pruebas de conectividad.

## 1.2 Análisis de los requisitos de la red

### 1.2.1 Requisitos de la red de la Sede Principal

**Sede Principal – Lima**

**Tabla 1. Requisitos de hosts actuales por sede (Perú)**

| Nombre de la unidad organizacional | Requisitos de hosts actuales |
|---|---:|
| Sede Lima | 467 |
| Sede La Libertad | 160 |
| Sede Ica | 190 |
| Sede Huánuco | 96 |
| Sede Puno | 105 |
| Redes WAN (enlaces desde Lima a sucursales) | 4 |

### 1.2.2 Requisitos de la red de la Sede Sucursal 1

**Sede Sucursal 1 – Lima**

**Tabla 2. Requisitos de hosts actuales (Lima)**

| Nombre de la unidad organizacional | Requisitos de hosts actuales |
|---|---:|
| Ventas | 198 |
| Administración | 100 |
| Finanzas | 41 |
| WiFi Ejecutivos | 31 |
| Marketing | 29 |
| Logística | 25 |
| WiFi Clientes | 18 |
| Nativa/Gestión | 15 |
| Servidores | 10 |

### 1.2.3 Requisitos de la red de la Sede Sucursal 2

**Sede Sucursal 2 – La Libertad**

**Tabla 3. Requisitos de hosts actuales (La Libertad)**

| Nombre de la unidad organizacional | Requisitos de hosts actuales |
|---|---:|
| Ventas | 70 |
| Administración | 35 |
| Finanzas | 15 |
| WiFi Ejecutivos | 11 |
| Marketing | 10 |
| Logística | 9 |
| WiFi Clientes | 6 |
| Nativa/Gestión | 2 |
| Servidores | 2 |

### 1.2.4 Requisitos de la red de la Sede Sucursal 3

**Sede Sucursal 3 – Ica**

**Tabla 4. Requisitos de hosts actuales (Ica)**

| Nombre de la unidad organizacional | Requisitos de hosts actuales |
|---|---:|
| Ventas | 78 |
| Administración | 40 |
| Finanzas | 16 |
| WiFi Ejecutivos | 12 |
| Marketing | 11 |
| Logística | 10 |
| Nativa/Gestión | 10 |
| WiFi Clientes | 8 |
| Servidores | 5 |

### 1.2.5 Requisitos de la red de la Sede Sucursal 4

**Sede Sucursal 4 – Huánuco**

**Tabla 5. Requisitos de hosts actuales (Huánuco)**

| Nombre de la unidad organizacional | Requisitos de hosts actuales |
|---|---:|
| Ventas | 35 |
| Administración | 18 |
| Finanzas | 10 |
| WiFi Ejecutivos | 8 |
| Marketing | 7 |
| Logística | 6 |
| WiFi Clientes | 5 |
| Nativa/Gestión | 4 |
| Servidores | 3 |

### 1.2.6 Requisitos de la red de la Sede Sucursal 5

**Sede Sucursal 5 – Puno**

**Tabla 6. Requisitos de hosts actuales (Puno)**

| Nombre de la unidad organizacional | Requisitos de hosts actuales |
|---|---:|
| Ventas | 36 |
| Administración | 20 |
| Finanzas | 11 |
| WiFi Ejecutivos | 9 |
| Marketing | 8 |
| Logística | 7 |
| WiFi Clientes | 5 |
| Servidores | 5 |
| Nativa/Gestión | 4 |

### 1.2.7 Requisitos Adicionales de la red

**Tabla 7. Requisitos adicionales (generales para todas las sedes)**

| Nombre de la unidad organizacional | Requisitos de hosts actuales |
|---|---:|
| Proyección de crecimiento (10 años) | 25% |
| Redes WiFi por sede (Clientes y Ejecutivos) | 2 |
| Seguridad WiFi | 2 |
| Asignación de IP en WiFi (DHCP) | 2 |
| Segmentación lógica por VLAN (por áreas) | 1 |
| Enlaces troncales en la red conmutada | 1 |
| Enrutamiento InterVLAN (Router-on-a-Stick) | 1 |
| Pruebas de conectividad intra-VLAN | 1 |
| Pruebas de conectividad inter-VLAN | 1 |
| Pruebas de conectividad de clientes WiFi | 1 |

## 1.3 Diseño físico de la nueva red

### 1.3.1 Diseño de la topología WAN

### 1.3.2 Diseño de la topología LAN

# Capítulo 2: Diseño Lógico de la red

## 2.1 Esquema de direccionamiento IP para todas las Filiales de la Multinacional (FLSM)

## 2.2 Esquema de direccionamiento IP para todas las sedes (FLSM)

## 2.3 Esquema de direccionamiento IP para cada sede (VLSM)

### 2.3.1 Sede Principal

### 2.3.2 Sede Sucursal 1

### 2.3.3 Sede Sucursal 2

## 2.4 Identificación de las unidades organizaciones (VLAN)

Las VLAN se definieron por sede de acuerdo con las unidades organizacionales, las redes WiFi, la red de servidores y la red nativa/de gestión. La VLAN Nativa/Gestión se mantiene con el ID 99 para identificar el segmento usado por la PC-ADMIN y la administración de dispositivos de red.

### 2.4.1 Sede Principal Lima

| Unidad organizacional | Nombre VLAN | VLAN ID |
| --- | --- | ---: |
| Ventas | VLVEN | 10 |
| Administración | VLADM | 11 |
| Finanzas | VLFIN | 12 |
| WiFi Ejecutivos | VLWFEJE | 13 |
| Marketing | VLMAR | 14 |
| Logística | VLLOG | 15 |
| WiFi Clientes | VLWFCLI | 16 |
| Servidores | VLSER | 17 |
| Nativa/Gestión | VLNAT | 99 |

### 2.4.2 Sede Sucursal Ica

| Unidad organizacional | Nombre VLAN | VLAN ID |
| --- | --- | ---: |
| Ventas | VLVEN | 20 |
| Administración | VLADM | 21 |
| Finanzas | VLFIN | 22 |
| WiFi Ejecutivos | VLWFEJE | 23 |
| Marketing | VLMAR | 24 |
| Logística | VLLOG | 25 |
| WiFi Clientes | VLWFCLI | 26 |
| Servidores | VLSER | 27 |
| Nativa/Gestión | VLNAT | 99 |

### 2.4.3 Sede Sucursal La Libertad

| Unidad organizacional | Nombre VLAN | VLAN ID |
| --- | --- | ---: |
| Ventas | VLVEN | 30 |
| Administración | VLADM | 31 |
| Finanzas | VLFIN | 32 |
| WiFi Ejecutivos | VLWFEJE | 33 |
| Marketing | VLMAR | 34 |
| Logística | VLLOG | 35 |
| WiFi Clientes | VLWFCLI | 36 |
| Servidores | VLSER | 37 |
| Nativa/Gestión | VLNAT | 99 |

### 2.4.4 Sede Sucursal Puno

| Unidad organizacional | Nombre VLAN | VLAN ID |
| --- | --- | ---: |
| Administración | VLADM | 10 |
| Logística | VLLOG | 20 |
| Ventas | VLVEN | 30 |
| Finanzas | VLFIN | 40 |
| Marketing | VLMAR | 50 |
| Servidores | VLSER | 60 |
| WiFi Clientes | VLWFCLI | 70 |
| WiFi Ejecutivos | VLWFEJE | 80 |
| Nativa/Gestión | VLNAT | 99 |

### 2.4.5 Sede Sucursal Huánuco

| Unidad organizacional | Nombre VLAN | VLAN ID |
| --- | --- | ---: |
| Ventas | VLVEN | 40 |
| Administración | VLADM | 41 |
| Finanzas | VLFIN | 42 |
| WiFi Ejecutivos | VLWFEJE | 43 |
| Marketing | VLMAR | 44 |
| Logística | VLLOG | 45 |
| WiFi Clientes | VLWFCLI | 46 |
| Servidores | VLSER | 47 |
| Nativa/Gestión | VLNAT | 99 |

# Capítulo 3: Implementación de la solución

## 3.1 Implementación del direccionamiento IP

### 3.1.1 Sede Principal

### 3.1.2 Sede Sucursal 1

### 3.1.3 Sede Sucursal 2

## 3.2 Implementación de VLANs

### 3.2.1 Sede Principal

### 3.2.2 Sede Sucursal 1

### 3.2.3 Sede Sucursal 2

## 3.3 Implementación de enrutamiento InterVLAN

### 3.3.1 Sede Principal

### 3.3.2 Sede Sucursal 1

### 3.3.3 Sede Sucursal 2

## 3.4 Implementación de Enrutamiento dinámico y estático

### 3.4.1 Implementación de enrutamiento estático

### 3.4.2 Implementación de enrutamiento dinámico

## 3.5 Configuración de los servicios de red

### 3.5.1 Configuración del servicio FTP

### 3.5.2 Configuración del servicio WEB

### 3.5.3 Configuración del servicio DNS

### 3.5.4 Configuración del servicio de CORREO

### 3.5.5 Configuración del servicio N

## 3.6 Implementación de Políticas de Seguridad la Red

### 3.6.1 Sede Principal

#### a. Implementación de la Primera política seguridad

#### b. Implementación de la Segunda política seguridad

#### c. Implementación de la N.. política seguridad

### 3.6.2 Sede Sucursal 1

#### a. Implementación de la Primera política seguridad

#### b. Implementación de la Segunda política seguridad

#### c. Implementación de la N.. política seguridad

### 3.6.3 Sede Sucursal 2

#### a. Implementación de la Primera política seguridad

#### b. Implementación de la Segunda política seguridad

#### c. Implementación de la N.. política seguridad

# Capítulo 4: Dimensionamiento Técnico Económico de la solución

## 4.1 Dimensionamiento de los equipos y valorización de la solución

## 4.2 Especificaciones técnicas de los equipos de la solución

# Capítulo 5: Solución Cloud (Backup)

## 5.1 Descripción de los requisitos Cloud

## 5.2 Factores a considerar para implementar una solución en Cloud

### 5.2.1 Dimensión o Factor 1

### 5.2.2 Dimensión o Factor 2

### 5.2.3 Dimensión o Factor 3

### 5.2.4 Dimensión o Factor n

## 5.3 Proveedores de servicio Cloud

### 5.3.1 Proveedor 1

### 5.3.2 Proveedor 2

### 5.3.3 Proveedor N

## 5.4 Proceso de evaluación Cloud

### 5.4.1 Dimensión o Factor 1 a evaluar

### 5.4.2 Dimensión o Factor 2 a evaluar

### 5.4.3 Dimensión o Factor n a evaluar

## 5.5 Análisis de almacenamiento y transferencia de datos de los proveedores Cloud

## 5.6 Selección y conclusión de la solución Cloud

# Conclusiones y recomendaciones

## Conclusiones

## Recomendaciones

# Glosario

# Referencias Bibliográficas

# Anexos

## Anexo 1: Documentación de la solución

### 1. Diagrama a nivel WAN

### 2. Diagrama de la sede Principal

### 3. Diagrama de la sede Sucursal 1

### 4. Diagrama de la sede Sucursal 2

### 5. Diagrama de ISP

## Anexo 2: Configuración de Router

## Anexo 3: Configuración de Switches (Capa 2)

## Anexo 4: Configuración de los Puntos de Acceso y Clientes Wifi
