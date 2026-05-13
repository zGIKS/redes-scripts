# Evidencia de Validacion de InterVLAN - Sede Ica

## 1. Validar SVIs en el Core

Dispositivo: `MS1_CORE_ICA`

```ios
enable
show ip interface brief
```

| Interfaz | Gateway esperado | Estado esperado |
| --- | --- | --- |
| Vlan20 | 10.192.48.1 | up/up |
| Vlan21 | 10.192.48.129 | up/up |
| Vlan22 | 10.192.48.193 | up/up |
| Vlan23 | 10.192.48.225 | up/up |
| Vlan24 | 10.192.49.1 | up/up |
| Vlan25 | 10.192.49.17 | up/up |
| Vlan26 | 10.192.49.49 | up/up |
| Vlan27 | 10.192.49.65 | up/up |
| Vlan99 | 10.192.49.33 | up/up |

## 2. Validar enrutamiento

En `MS1_CORE_ICA`:

```ios
show running-config
show ip route
```

Debe observarse `ip routing`, las redes conectadas de las VLAN y la ruta por defecto hacia `10.192.51.1`.

En `ROUTER_ICA`:

```ios
show ip route
show running-config
```

Debe existir:

```ios
ip route 10.192.48.0 255.255.252.0 10.192.51.2
```

## 3. Pruebas de conectividad

Desde `PC_VENTAS_1_ICA`:

```bash
ping 10.192.48.129
ping 10.192.48.194
ping 10.192.49.2
ping 10.192.49.18
ping 10.192.49.34
ping 10.192.49.67
ping 10.192.51.1
```

Resultado esperado:

```text
Reply from ...
```

## 4. Checklist

| Evidencia | Dispositivo | Comando | Estado |
| --- | --- | --- | --- |
| SVIs con IP | MS1_CORE_ICA | show ip interface brief | Pendiente |
| ip routing activo | MS1_CORE_ICA | show running-config | Pendiente |
| Rutas VLAN | MS1_CORE_ICA | show ip route | Pendiente |
| Ruta de retorno | ROUTER_ICA | show ip route | Pendiente |
| Ping InterVLAN | PC_VENTAS_1_ICA | ping | Pendiente |
