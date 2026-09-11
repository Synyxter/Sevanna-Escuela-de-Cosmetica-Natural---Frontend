# Contribuir

Este proyecto usa **Git Flow** para las ramas y **Conventional Commits** para los
mensajes de commit. Ambos se validan localmente con hooks de `husky`.

## Ramas (Git Flow)

| Rama | Sale de | Se fusiona en | Uso |
|---|---|---|---|
| `main` | — | — | Producción. Cada merge a `main` es un release y debería llevar tag (`vX.Y.Z`). |
| `develop` | `main` | — | Integración. Base de todo el trabajo en curso. |
| `feature/<nombre>` | `develop` | `develop` | Una funcionalidad o cambio (`feature/talleres-filtro-precio`). |
| `release/<version>` | `develop` | `main` **y** `develop` | Estabiliza una versión antes de publicarla (`release/1.1.0`). |
| `hotfix/<nombre>` | `main` | `main` **y** `develop` | Corrección urgente sobre producción (`hotfix/whatsapp-link-roto`). |

Flujo típico para una funcionalidad:

```bash
git checkout develop
git pull
git checkout -b feature/nombre-corto
# ...trabajo + commits...
git push -u origin feature/nombre-corto
# abrir PR/MR contra develop
```

Cuando `develop` está lista para salir a producción:

```bash
git checkout develop
git checkout -b release/1.1.0
# ajustes finales (versión, changelog)
git checkout main && git merge --no-ff release/1.1.0 && git tag v1.1.0
git checkout develop && git merge --no-ff release/1.1.0
git branch -d release/1.1.0
```

Un hotfix sigue el mismo patrón pero parte de `main` y se funde en `main` y en
`develop`.

## Commits (Conventional Commits)

```
<tipo>(<scope opcional>): <descripción en imperativo, sin punto final>

[cuerpo opcional — el porqué, no el qué]

[footer opcional — BREAKING CHANGE:, Refs #123]
```

**Tipos:**

| Tipo | Uso |
|---|---|
| `feat` | nueva funcionalidad visible para el usuario |
| `fix` | corrección de un bug |
| `docs` | solo documentación (README, comentarios, este archivo) |
| `style` | formato, espacios, punto y coma — sin cambio de lógica |
| `refactor` | cambio de código que no arregla un bug ni añade una funcionalidad |
| `perf` | mejora de rendimiento |
| `test` | agregar o corregir tests |
| `build` | build system, dependencias (`package.json`, config de Next) |
| `ci` | integración continua |
| `chore` | mantenimiento que no encaja en lo anterior |
| `revert` | revierte un commit anterior |

**Scopes sugeridos** (opcionales, validados por `commitlint.config.js`): `cursos`,
`talleres`, `inscripcion`, `home`, `nosotros`, `header`, `footer`,
`design-system`/`ds`, `config`, `deps`, `ci`, `release`. Si necesitas uno nuevo,
agrégalo a `scope-enum` en `commitlint.config.js`.

**Ejemplos:**

```
feat(talleres): agregar filtro por modalidad al catálogo
fix(inscripcion): corregir número de WhatsApp en el mensaje prellenado
docs: documentar flujo de Git Flow y Conventional Commits
refactor(design-system): unificar Catalog para cursos y talleres
chore(deps): actualizar next a 16.3.5
```

Un commit que rompe compatibilidad agrega `BREAKING CHANGE: <explicación>` en el
footer.

## Hooks activos

- `pre-commit` → `npm run lint`
- `commit-msg` → valida el mensaje contra Conventional Commits (`commitlint`)

Se instalan solos al correr `npm install` (script `prepare`).
