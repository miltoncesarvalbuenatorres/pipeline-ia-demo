import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcularTotal, facturasDeProveedor } from '../src/facturas.js';

test('calcula el total con IVA general del 19%', () => {
  assert.equal(calcularTotal(100000), 119000);
});

test('calcula el total con una tasa de IVA distinta', () => {
  assert.equal(calcularTotal(100000, 0.05), 105000);
});

test('rechaza subtotales negativos', () => {
  assert.throws(() => calcularTotal(-1));
});

test('un proveedor solo ve sus propias facturas', () => {
  const facturas = [
    { numero: 'F-001', proveedorId: 'P1' },
    { numero: 'F-002', proveedorId: 'P2' },
    { numero: 'F-003', proveedorId: 'P1' },
  ];
  const resultado = facturasDeProveedor(facturas, 'P1');
  assert.deepEqual(resultado.map((f) => f.numero), ['F-001', 'F-003']);
});

test('exige el identificador del proveedor', () => {
  assert.throws(() => facturasDeProveedor([], ''));
});

test('formatea pesos con separador de miles', async () => {
  const { formatearPesos } = await import('../src/facturas.js');
  assert.equal(formatearPesos(119000), '$ 119.000');
});
