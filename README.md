# pipeline-ia-demo

Demo pública del proceso de desarrollo con IA de Ingeneo: rulesets, tests y pipeline en GitHub Actions.

## Qué demuestra

Que ningún cambio, lo escriba una persona o un agente de IA, llega a `main` sin pasar por un pull request y sin tests en verde.

## Cómo está protegido `main`

Ruleset `proteccion-main`:

1. No se puede borrar la rama.
2. No se puede hacer force push.
3. Solo se mergea por pull request.
4. El check `tests` debe pasar.

## Estructura

| Ruta | Para qué |
|---|---|
| `CLAUDE.md` | Contexto y reglas para Claude Code / Cursor |
| `src/` | Código de ejemplo (portal de facturas) |
| `tests/` | Tests que actúan como barrera de calidad |
| `.github/workflows/ci.yml` | Pipeline que corre los tests en cada PR |
| `.github/pull_request_template.md` | Plantilla de PR |

## Correr localmente

```bash
npm test
```
