# pipeline-ia-demo

Repo de demostración del proceso de desarrollo con IA de Ingeneo.

## Contexto

- Ejemplo de dominio: portal de facturas para proveedores.
- Stack: Node.js 22, módulos ES, tests con `node:test` (sin dependencias externas).

## Reglas para el agente

- Nunca hacer push directo a `main`: todo cambio va por rama y pull request.
- Cada cambio de lógica en `src/` lleva su test en `tests/`.
- Correr `npm test` antes de abrir un PR; si falla, no abrir el PR.
- Mantener las funciones pequeñas y documentadas en español.
- No agregar dependencias sin aprobación del líder técnico.

## Comandos

- `npm test`: corre todos los tests.
