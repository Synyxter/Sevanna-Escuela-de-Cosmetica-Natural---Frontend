# Sevanna — Escuela de Cosmética Natural · Frontend

Sitio de la academia **Sevanna** (cursos y talleres de cosmética natural),
construido con **Next.js 16** (App Router) y **React 19**.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Fuentes vía `next/font/google` (Cinzel, Cormorant Garamond, Montserrat)
- Iconos: `lucide-react` (`DynamicIcon`, stroke 1.5)
- Sin Tailwind — el estilo viene del **design system** (tokens CSS + componentes)

## Puesta en marcha

```bash
npm install
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
    ├── courses.js            contenido demo de cursos + temario
    ├── talleres.js           contenido demo de talleres + agenda
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

## Pendiente / notas

- `WHATSAPP_NUMBER` en `src/lib/config.js` es un placeholder — reemplazar por el
  número real de Sevanna.
- El contenido de cursos y talleres es demo; conectar a un CMS/API cuando exista.
  Los slugs deben ser únicos entre cursos y talleres (los usa `/inscripcion/[slug]`).
