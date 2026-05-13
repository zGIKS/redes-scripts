# Evidencia de Validacion de InterVLAN - Sede Puno

## 1. Validar SVIs

Dispositivo: `MS1_CORE_PUNO`

```ios
enable
show ip interface brief
```

| Interfaz | Gateway esperado | Estado esperado |
| --- | --- | --- |
| Vlan10 | 10.192.56.65 | up/up |
| Vlan20 | 10.192.56.145 | up/up |
| Vlan30 | 10.192.56.1 | up/up |
| Vlan40 | 10.192.56.97 | up/up |
| Vlan50 | 10.192.56.129 | up/up |
| Vlan60 | 10.192.56.177 | up/up |
| Vlan70 | 10.192.56.161 | up/up |
| Vlan80 | 10.192.56.113 | up/up |
| Vlan99 | 10.192.56.193 | up/up |

## 2. Validar rutas

En `MS1_CORE_PUNO`:

```ios
show running-config
show ip route
```

Debe observarse `ip routing` y ruta por defecto hacia `10.192.59.1`.

En `ROUTER_PUNO`:

```ios
show ip route
show running-config
```

Debe existir:

```ios
ip route 10.192.56.0 255.255.252.0 10.192.59.2
```

## 3. Pruebas de conectividad

Desde `PC_VENTAS_1_PUNO`:

```bash
ping 10.192.56.74
ping 10.192.56.98
ping 10.192.56.130
ping 10.192.56.146
ping 10.192.56.194
ping 10.192.56.179
ping 10.192.59.1
```

Resultado esperado: `Reply from ...`

## 4. Checklist

| Evidencia | Dispositivo | Comando | Estado |
| --- | --- | --- | --- |
| SVIs con IP | MS1_CORE_PUNO | show ip interface brief | Pendiente |
| ip routing activo | MS1_CORE_PUNO | show running-config | Pendiente |
| Rutas VLAN | MS1_CORE_PUNO | show ip route | Pendiente |
| Ruta de retorno | ROUTER_PUNO | show ip route | Pendiente |
| Ping InterVLAN | PC_VENTAS_1_PUNO | ping | Pendiente |
