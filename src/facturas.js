// Funciones de ejemplo del portal de facturas para proveedores.
// Sirven solo para probar la barrera de calidad (rulesets + tests).

const IVA_GENERAL = 0.19;

/**
 * Calcula el total de una factura a partir del subtotal.
 * @param {number} subtotal Valor antes de impuestos, en pesos.
 * @param {number} [tasaIva=0.19] Tasa de IVA entre 0 y 1.
 * @returns {number} Total redondeado al peso.
 */
export function calcularTotal(subtotal, tasaIva = IVA_GENERAL) {
  if (typeof subtotal !== 'number' || Number.isNaN(subtotal) || subtotal < 0) {
    throw new Error('El subtotal debe ser un número mayor o igual a cero');
  }
  if (typeof tasaIva !== 'number' || tasaIva < 0 || tasaIva > 1) {
    throw new Error('La tasa de IVA debe estar entre 0 y 1');
  }
  return Math.round(subtotal * (1 + tasaIva));
}

/**
 * Devuelve solo las facturas del proveedor indicado.
 * Criterio de aceptación: un proveedor solo ve sus propias facturas.
 * @param {Array<{proveedorId: string}>} facturas
 * @param {string} proveedorId
 */
export function facturasDeProveedor(facturas, proveedorId) {
  if (!proveedorId) {
    throw new Error('Se requiere el identificador del proveedor');
  }
  return facturas.filter((f) => f.proveedorId === proveedorId);
}

/**
 * Formatea un valor en pesos colombianos, sin decimales.
 * @param {number} valor
 * @returns {string} Por ejemplo "$ 119.000"
 */
export function formatearPesos(valor) {
  return '$ ' + Math.round(valor).toLocaleString('es-CO');
}
