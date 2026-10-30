# Constitución de pipeline-ia-demo (Ingeneo)

Reglas que el equipo y los agentes de IA (Claude Code, Cursor) deben respetar en cada spec, plan y tarea de este repo.

## Principios

### I. Spec antes que código
Toda funcionalidad nueva o cambio de comportamiento empieza con una spec en `specs/NNN-nombre/spec.md`, aprobada por el PM o el líder técnico. La spec dice qué y por qué, sin tecnología, y cabe en una página.

### II. Criterios de aceptación comprobables (NO NEGOCIABLE)
Cada criterio de aceptación de la spec se convierte en al menos un test automático. Un criterio que no se puede probar se reescribe hasta que se pueda.

### III. Nada llega a main sin PR y sin tests en verde (NO NEGOCIABLE)
Prohibido el push directo a `main`. Todo cambio entra por pull request, el check `tests` debe pasar y una persona aprueba el merge. Los agentes nunca mergean.

### IV. La persona responde por el código
El código lo puede escribir un agente, pero el desarrollador que abre el PR lo revisa línea por línea y debe poder explicar cada cambio.

### V. Simple primero
Funciones pequeñas, documentadas en español, sin dependencias nuevas salvo aprobación del líder técnico. Ante dos soluciones, se elige la más simple que cumpla la spec.

## Restricciones técnicas

- Node.js 22, módulos ES.
- Tests con `node:test`, ejecutados con `npm test`.
- Sin datos reales de clientes en el repo, en los tests ni en los prompts: solo datos de ejemplo.
- Sin secretos en el código; las claves van en los secrets de GitHub.

## Flujo de trabajo

1. `/speckit-specify`: spec con criterios de aceptación. Aprueba: PM.
2. `/speckit-plan`: plan técnico. Aprueba: líder técnico.
3. `/speckit-tasks`: tareas pequeñas, una por PR cuando sea posible.
4. `/speckit-implement`: el agente implementa en una rama.
5. PR con la plantilla llena, pipeline en verde y aprobación humana.

Tamaños de cambio: un ajuste menor (texto, bug puntual) puede ir en PR directo con su test; un cambio o una funcionalidad nueva siguen el flujo completo.

## Gobierno

Esta constitución prevalece sobre cualquier otra práctica del repo. Cambiarla requiere un PR propio aprobado por el líder técnico. Todo PR debe cumplirla.

**Versión**: 1.0.0 | **Ratificada**: 2026-10-29 | **Última enmienda**: 2026-10-29
