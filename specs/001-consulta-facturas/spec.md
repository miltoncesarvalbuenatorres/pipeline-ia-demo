# Spec: Consulta de facturas para proveedores

**Carpeta**: `specs/001-consulta-facturas` | **Estado**: Ejemplo aprobado | **Fecha**: 2026-10-29

> Spec de ejemplo para mostrar el formato. Las cifras son ilustrativas.

## Qué y por qué

Los proveedores consultan en el portal el estado de sus facturas. Hoy llaman o escriben al área de cuentas por pagar para preguntar si una factura fue recibida, aprobada o pagada.

## Escenarios de usuario

### Historia 1: ver mis facturas (Prioridad P1)

Como proveedor, quiero ver la lista de mis facturas con su estado, para no tener que llamar a cuentas por pagar.

**Aceptación**

1. Dado un proveedor autenticado, cuando abre el portal, ve solo sus propias facturas.
2. Cada factura muestra número, fecha, valor total con IVA y estado (recibida, aprobada, pagada, rechazada).

### Historia 2: filtrar (Prioridad P2)

Como proveedor, quiero filtrar por fecha, estado y número, para encontrar una factura rápido.

**Aceptación**

1. Al filtrar por estado "pagada", solo aparecen facturas pagadas.
2. Al buscar un número que no existe, aparece el mensaje "No encontramos facturas con ese número".

### Casos borde

- Proveedor sin facturas: mensaje "Aún no tienes facturas registradas".
- Valores con IVA distinto al 19%: el total se calcula con la tasa de cada factura.

## Requisitos funcionales

- **RF-001**: El sistema muestra a cada proveedor solo sus facturas.
- **RF-002**: El total de cada factura se calcula como subtotal más IVA, redondeado al peso.
- **RF-003**: Los valores se muestran en pesos con separador de miles (ejemplo: $ 119.000).
- **RF-004**: El proveedor puede filtrar por rango de fechas, estado y número.

## Entidades

- **Factura**: número, proveedor, fecha, subtotal, tasa de IVA, estado.
- **Proveedor**: identificador, nombre.

## Criterios de éxito

- **CE-001**: La consulta responde en menos de 2 segundos con 10.000 facturas.
- **CE-002**: Las llamadas a cuentas por pagar por estado de facturas bajan a la mitad en tres meses.

## Fuera de alcance

- Pagos desde el portal.
- Carga de facturas por parte del proveedor.

## Trazabilidad con el código actual

| Requisito | Código | Test |
|---|---|---|
| RF-001 | `facturasDeProveedor` en `src/facturas.js` | "un proveedor solo ve sus propias facturas" |
| RF-002 | `calcularTotal` en `src/facturas.js` | "calcula el total con IVA general del 19%" |
| RF-003 | `formatearPesos` en `src/facturas.js` | "formatea pesos con separador de miles" |
| RF-004 | Pendiente | Pendiente |
