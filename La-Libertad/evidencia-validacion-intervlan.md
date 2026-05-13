# Evidencia de Validacion de InterVLAN - Sede La Libertad

## 1. Validar SVIs

Dispositivo: `MS1_CORE_LA_LIBERTAD`

```ios
enable
show ip interface brief
```

| Interfaz | Gateway esperado | Estado esperado |
| --- | --- | --- |
| Vlan30 | 10.192.44.1 | up/up |
| Vlan31 | 10.192.44.129 | up/up |
| Vlan32 | 10.192.44.193 | up/up |
| Vlan33 | 10.192.44.225 | up/up |
| Vlan34 | 10.192.44.241 | up/up |
| Vlan35 | 10.192.45.1 | up/up |
| Vlan36 | 10.192.45.17 | up/up |
| Vlan37 | 10.192.45.41 | up/up |
| Vlan99 | 10.192.45.33 | up/up |

## 2. Validar rutas

En `MS1_CORE_LA_LIBERTAD`:

```ios
show running-config
show ip route
```

Debe observarse `ip routing` y ruta por defecto hacia `10.192.47.1`.

En `ROUTER_LA_LIBERTAD`:

```ios
show ip route
show running-config
```

Debe existir:

```ios
ip route 10.192.44.0 255.255.252.0 10.192.47.2
```

## 3. Pruebas de conectividad

Desde `PC_VENTAS_1_LA_LIBERTAD`:

```bash
ping 10.192.44.138
ping 10.192.44.194
ping 10.192.44.242
ping 10.192.45.2
ping 10.192.45.34
ping 10.192.45.43
ping 10.192.47.1
```

Resultado esperado: `Reply from ...`

## 4. Checklist

| Evidencia | Dispositivo | Comando | Estado |
| --- | --- | --- | --- |
| SVIs con IP | MS1_CORE_LA_LIBERTAD | show ip interface brief | Pendiente |
| ip routing activo | MS1_CORE_LA_LIBERTAD | show running-config | Pendiente |
| Rutas VLAN | MS1_CORE_LA_LIBERTAD | show ip route | Pendiente |
| Ruta de retorno | ROUTER_LA_LIBERTAD | show ip route | Pendiente |
| Ping InterVLAN | PC_VENTAS_1_LA_LIBERTAD | ping | Pendiente |
