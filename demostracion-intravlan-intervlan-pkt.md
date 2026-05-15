# Demostración simple: IntraVLAN e InterVLAN

## IntraVLAN

Es comunicación entre equipos de la misma VLAN.

Ejemplo en Lima:

```text
PC_VENTAS_1 > ping 10.192.40.11
```

Explicación:

> Esta prueba es IntraVLAN porque una PC de Ventas se comunica con otra PC de Ventas. Las dos pertenecen a la VLAN 10.

## InterVLAN

Es comunicación entre equipos de VLANs diferentes.

Ejemplo en Lima:

```text
PC_VENTAS_1 > ping 10.192.41.10
```

Explicación:

> Esta prueba es InterVLAN porque una PC de Ventas, VLAN 10, se comunica con una PC de Administración, VLAN 11. Para lograrlo, la comunicación pasa por el router.

## Comandos para demostrar

En el switch:

```text
show vlan brief
show interfaces trunk
```

En el router:

```text
show ip interface brief
```

## Qué decir en la expo

> Primero verificamos las VLANs con `show vlan brief`. Luego probamos IntraVLAN haciendo ping entre dos PCs de la misma área. Finalmente probamos InterVLAN haciendo ping entre PCs de áreas diferentes, donde el router permite la comunicación.
