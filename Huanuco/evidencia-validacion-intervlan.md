# Evidencia de Validacion de InterVLAN - Sede Huanuco

## 1. Validar SVIs

Dispositivo: `MS1_CORE_HUANUCO`

```ios
enable
show ip interface brief
```

| Interfaz | Gateway esperado | Estado esperado |
| --- | --- | --- |
| Vlan40 | 10.192.52.1 | up/up |
| Vlan41 | 10.192.52.65 | up/up |
| Vlan42 | 10.192.52.97 | up/up |
| Vlan43 | 10.192.52.113 | up/up |
| Vlan44 | 10.192.52.129 | up/up |
| Vlan45 | 10.192.52.145 | up/up |
| Vlan46 | 10.192.52.161 | up/up |
| Vlan47 | 10.192.52.185 | up/up |
| Vlan99 | 10.192.52.177 | up/up |

## 2. Validar rutas

En `MS1_CORE_HUANUCO`:

```ios
show running-config
show ip route
```

Debe observarse `ip routing` y ruta por defecto hacia `10.192.55.1`.

En `ROUTER_HUANUCO`:

```ios
show ip route
show running-config
```

Debe existir:

```ios
ip route 10.192.52.0 255.255.252.0 10.192.55.2
```

## 3. Pruebas de conectividad

Desde `PC_VENTAS_1_HUANUCO`:

```bash
ping 10.192.52.74
ping 10.192.52.98
ping 10.192.52.130
ping 10.192.52.146
ping 10.192.52.178
ping 10.192.52.187
ping 10.192.55.1
```

Resultado esperado: `Reply from ...`

## 4. Checklist

| Evidencia | Dispositivo | Comando | Estado |
| --- | --- | --- | --- |
| SVIs con IP | MS1_CORE_HUANUCO | show ip interface brief | Pendiente |
| ip routing activo | MS1_CORE_HUANUCO | show running-config | Pendiente |
| Rutas VLAN | MS1_CORE_HUANUCO | show ip route | Pendiente |
| Ruta de retorno | ROUTER_HUANUCO | show ip route | Pendiente |
| Ping InterVLAN | PC_VENTAS_1_HUANUCO | ping | Pendiente |
