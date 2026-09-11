# Sevanna — Escuela de Cosmética Natural · Frontend

Sitio de la academia **Sevanna** (cursos y talleres de cosmética natural),
construido con **Next.js 16** (App Router) y **React 19**.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Datos: [Sevanna API](https://sevanna-api.onrender.com/docs) (FastAPI, hosteada en Render)
- Fuentes vía `next/font/google` (Cinzel, Cormorant Garamond, Montserrat)
- Iconos: `lucide-react` (`DynamicIcon`, stroke 1.5)
- Sin Tailwind — el estilo viene del **design system** (tokens CSS + componentes)

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # opcional — por defecto ya apunta a la API de Render
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

## Flujo de trabajo

Ramas con **Git Flow** (`main` / `develop` / `feature/*` / `release/*` /
`hotfix/*`) y mensajes de commit con **Conventional Commits**, validados por
hooks de `husky`. Ver [CONTRIBUTING.md](CONTRIBUTING.md) para la guía completa.

## Estructura

```text
src/
├── app/                      rutas (App Router)
│   ├── layout.tsx            fuentes, <Header>, <Footer>, metadata
│   ├── page.tsx              home
│   ├── cursos/               catálogo + detalle ([slug])
│   ├── talleres/             catálogo + detalle ([slug]) — misma UI que cursos
│   ├── inscripcion/[slug]/   cierre de inscripción por WhatsApp (cursos y talleres)
│   └── nosotros/
├── components/site/          Header, Footer, Reveal
│   ├── Catalog.tsx           grilla filtrable/ordenable (cursos y talleres)
│   └── ProgramDetail.tsx     página de detalle (cursos y talleres)
├── design-system/            ← el design system, portado a este proyecto
│   ├── tokens.css            colores, tipografía, espaciado, sombras, motion
│   ├── index.js / index.d.ts superficie pública de componentes
│   └── components/           core · forms · content
└── lib/
    ├── config.js             WHATSAPP_NUMBER
    ├── api.js                cliente de la Sevanna API (fetch + manejo de errores)
    ├── mapping.js            API → shape de la UI (nivel, modalidad, precio, curso/taller)
    ├── courses.js            getCourses() / getCourseDetail(slug)
    ├── talleres.js           getTalleres() / getTallerDetail(slug)
    └── programs.js           vista unificada (cursos + talleres) para inscripción
```

`design-system/` (en la raíz) es el paquete **"Sevanna Design System"** original
sin modificar — guías, especímenes y UI kit — que se conserva como referencia.
La versión usable por la app vive en `src/design-system/`.

## Design system

- **Fundamentos** en `src/design-system/tokens.css`, importado una sola vez desde
  `src/app/globals.css`. La única diferencia frente al original: las familias
  tipográficas apuntan a las variables de `next/font` definidas en `layout.tsx`.
- **Componentes**: `import { Button, CourseCard, SectionHeading, ... } from "@/design-system"`.
  Todos son client components (`"use client"`).
- **Marca**: fondo esmeralda profundo + oro metálico como único acento; Cinzel para
  el wordmark/display, Cormorant para títulos editoriales, Montserrat para UI.
  El sitio corre en el "scope claro" (`<body class="on-light">`).

## Datos: Sevanna API

Cursos y talleres se traen de [sevanna-api.onrender.com](https://sevanna-api.onrender.com/docs)
(`GET /api/v1/courses`, `/courses/{slug}`, `/categories`). Todo el fetching vive en
`src/lib/api.js` / `mapping.js` / `courses.js` / `talleres.js` / `programs.js` y
corre solo en el servidor (Server Components, `generateStaticParams`), nunca en
el navegador.

- **Cursos vs. talleres**: la API expone un único recurso `courses` sin un campo
  que distinga el tipo. Se infiere por el slug (`curso-de-…` / `taller-de-…`) en
  `mapping.js#kindFromSlug` — si el backend cambia esa convención o agrega un
  campo `kind`/`type`, actualizar solo esa función.
- **Caché**: cada fetch usa ISR de Next (`revalidate: 300`s por defecto).
- **Resiliencia**: Render duerme la instancia gratuita tras inactividad (cold
  start ~20-30s); `apiFetch` da timeout de 20s. Las páginas de catálogo caen a un
  mensaje amigable si la API no responde (`safe()` en `api.js`); las de detalle
  muestran la página 404 si el curso no existe, o `error.tsx` con botón de
  reintentar ante una falla real de la API.
- Variable de entorno opcional `SEVANNA_API_URL` (ver `.env.example`) para
  apuntar a otro entorno del backend.

## Pendiente / notas

- `WHATSAPP_NUMBER` en `src/lib/config.js` es un placeholder — reemplazar por el
  número real de Sevanna.
- La lista de cursos (`/courses?limit=100`) no pagina — cubre el catálogo actual
  (~30 ítems) en una sola página. Si crece más allá de 100, hay que paginar de
  verdad en `programs.js#getAllPrograms`.
- El listado de cursos (`CourseListItem`) no trae `duration`; solo el detalle. La
  tarjeta del catálogo simplemente no muestra la duración (`CourseCard` la oculta
  si viene vacía).
