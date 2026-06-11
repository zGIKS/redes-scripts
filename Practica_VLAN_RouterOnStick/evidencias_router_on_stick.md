# Evidencias requeridas

## Topologia logica

Archivo para crear la topologia:

```text
Practica_VLAN_RouterOnStick/router_on_stick_topologia.js
```

Equipos incluidos:

| Equipo | Funcion |
|---|---|
| ALEMAN_ROMANO_DANTE_MATEO | Router para router-on-stick |
| SW1 | Switch izquierdo |
| SW2 | Switch derecho |
| PC4, PC7 | VLAN 10 |
| PC5, PC9 | VLAN 20 |
| PC6, PC8 | VLAN 30 |

## Direccionamiento

| Equipo | VLAN | IP | Gateway |
|---|---:|---|---|
| PC4 | 10 | 192.168.10.51 | 192.168.10.1 |
| PC7 | 10 | 192.168.10.61 | 192.168.10.1 |
| PC5 | 20 | 192.168.20.90 | 192.168.20.1 |
| PC9 | 20 | 192.168.20.91 | 192.168.20.1 |
| PC6 | 30 | 192.168.30.190 | 192.168.30.1 |
| PC8 | 30 | 192.168.30.191 | 192.168.30.1 |

## Configuracion

Archivo para aplicar la configuracion:

```text
Practica_VLAN_RouterOnStick/router_on_stick_config_postboot.js
```

Incluye:

- Creacion de VLAN 10, VLAN 20 y VLAN 30 en SW1 y SW2.
- Puertos access para las PCs.
- Trunk entre SW1 y SW2.
- Trunk entre SW1 y el router.
- Subinterfaces FastEthernet0/0.10, FastEthernet0/0.20 y FastEthernet0/0.30 en el router.

## Capturas que debes adjuntar

1. Topologia completa en Packet Tracer.
2. `show vlan brief` en SW1 o SW2.
3. `show interfaces trunk` en SW1 o SW2.
4. `show ip interface brief` en el router.
5. Ping exitoso entre PCs de la misma VLAN:

```text
PC4> ping 192.168.10.61
PC5> ping 192.168.20.91
PC6> ping 192.168.30.191
```

6. PDU exitosa entre PCs de la misma VLAN:

```text
PC4 -> PC7
PC5 -> PC9
PC6 -> PC8
```
