# Agregar una PC desde cero y hacer ping

## Ejemplo más fácil: Lima

Vamos a agregar una nueva PC en la VLAN de Ventas.

## 1. Agregar la PC

En Packet Tracer:

1. Ir a `End Devices`.
2. Agregar una `PC-PT`.
3. Ponerle nombre: `PC_NUEVA_VENTAS_LIMA`.

## 2. Conectar la PC

Usar cable de cobre normal:

```text
Copper Straight-Through
```

Conectar así:

```text
PC_NUEVA_VENTAS_LIMA FastEthernet0
        hacia
SW2_LIMA FastEthernet0/3
```

## 3. Configurar el puerto del switch

Entrar a `SW2_LIMA`, pestaña `CLI`, y escribir:

```text
enable
configure terminal
interface FastEthernet0/3
switchport mode access
switchport access vlan 10
no shutdown
end
```

Esto coloca la PC en la VLAN 10, que es Ventas.

## 4. Configurar la IP de la PC

Entrar a la PC:

```text
Desktop > IP Configuration
```

Colocar:

```text
IP Address: 10.192.40.13
Subnet Mask: 255.255.255.0
Default Gateway: 10.192.40.1
DNS Server: 10.192.42.163
```

## 5. Probar ping

Entrar a:

```text
Desktop > Command Prompt
```

Ping al gateway:

```text
ping 10.192.40.1
```

Ping IntraVLAN, Ventas con Ventas:

```text
ping 10.192.40.10
```

Ping InterVLAN, Ventas con Administración:

```text
ping 10.192.41.10
```

## 6. Qué debe pasar

Si sale `Reply from`, la PC funciona.

## Para decir en la exposición

> Agregué una PC nueva al switch SW2_LIMA, la puse en el puerto FastEthernet0/3 y configuré ese puerto en la VLAN 10, que pertenece a Ventas. Luego le asigné una IP de la red de Ventas y probé ping hacia su gateway, hacia otra PC de Ventas y hacia una PC de Administración.

## Si quieres hacerlo en otra sede

Usa el mismo puerto:

```text
FastEthernet0/3
```

Y cambia los datos según la sede:

| Sede | Switch | VLAN Ventas | IP nueva | Máscara | Gateway | Ping IntraVLAN | Ping InterVLAN |
|---|---|---:|---:|---:|---:|---:|---:|
| Lima | SW2_LIMA | 10 | 10.192.40.13 | 255.255.255.0 | 10.192.40.1 | 10.192.40.10 | 10.192.41.10 |
| Ica | SW2_ICA | 20 | 10.192.48.13 | 255.255.255.128 | 10.192.48.1 | 10.192.48.10 | 10.192.48.138 |
| La Libertad | SW2_LA_LIBERTAD | 30 | 10.192.44.13 | 255.255.255.192 | 10.192.44.1 | 10.192.44.10 | 10.192.44.74 |
| Huánuco | SW2_HUANUCO | 40 | 10.192.52.13 | 255.255.255.224 | 10.192.52.1 | 10.192.52.10 | 10.192.52.42 |
| Puno | SW2_PUNO | 50 | 10.192.56.13 | 255.255.255.192 | 10.192.56.1 | 10.192.56.10 | 10.192.56.74 |

Ejemplo para Ica:

```text
enable
configure terminal
interface FastEthernet0/3
switchport mode access
switchport access vlan 20
no shutdown
end
```

Luego en la PC de Ica:

```text
IP Address: 10.192.48.13
Subnet Mask: 255.255.255.128
Default Gateway: 10.192.48.1
```
