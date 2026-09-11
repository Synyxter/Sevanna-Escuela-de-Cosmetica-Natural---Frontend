# Sevanna — Design System

**Sevanna** es una academia especializada en **cosmética natural**. Ofrece cursos y talleres —presenciales, virtuales e híbridos— para aprender a elaborar velas, jabones, labiales, desodorantes, productos para el cuidado de la piel y otros cosméticos artesanales, en niveles básico, intermedio y avanzado. La propuesta combina **conocimiento, creatividad y elaboración artesanal** en una experiencia educativa cercana, elegante y especializada.

This design system encodes that identity: a **deep-emerald + metallic-gold** palette, inscriptional serif display type, editorial serifs, and a delicate, botanical, luxury feel.

## Sources provided
- `uploads/LOGO SEVANNA.png` — the primary brand logo (gold mark + wordmark on emerald). Copied to `assets/logo.png`. This was the **only** provided asset — no codebase, Figma, deck, or font files were supplied. Colors were sampled directly from the logo; type and components were derived from its visual language.

## Font substitution ⚠️
No font files were provided. The wordmark uses an inscriptional Roman capital and the tagline a light geometric sans. These are approximated with the nearest **Google Fonts** matches, loaded via `tokens/fonts.css`:
- **Cinzel** → the `SEVANNA` wordmark / display caps (Trajan-like inscriptional).
- **Cormorant Garamond** → editorial headings, ledes, quotes.
- **Montserrat** → UI, labels, letter-spaced eyebrows / tagline.

If you have the real brand fonts, send them and I'll swap the `@font-face` sources.

---

## CONTENT FUNDAMENTALS
- **Language:** Spanish (Latin American / Colombian pricing in COP, e.g. `$120.000`).
- **Voice:** warm, close, and encouraging but **refined** — never casual-salesy. It reflects an academy: knowledgeable, artisanal, aspirational.
- **Address:** speaks *to* the student with informal **"tú"** ("Aprende a formular", "Inscríbete", "tu propia cosmética"). Uses inclusive first-person plural for the brand ("Combinamos…", "Nuestros talleres").
- **Casing:** display and eyebrows are **UPPERCASE with wide tracking** (the wordmark voice). Headings are sentence-case serif. Body is sentence case.
- **Tone words:** natural, artesanal, práctico, elegante, desde cero, nivel profesional, ingredientes reales.
- **Emoji:** avoided in UI. A single gold ornament glyph (✦) may appear as a decorative flourish, never as an emoji face.
- **Examples:**
  - Eyebrow: `ACADEMIA DE COSMÉTICA NATURAL`
  - Hero: *"Aprende a crear tu propia cosmética natural"*
  - CTA: `Inscribirme`, `Explorar cursos`, `Ver temario`
  - Reassurance: *"Cada curso incluye materiales definidos, objetivos claros y práctica guiada."*

## VISUAL FOUNDATIONS
- **Color:** signature **deep emerald** (`--emerald-900 #0E2517`) as the default canvas, with **metallic gold** (`--gold-500 #C69F53`) as the single accent. A warm **cream** neutral scope (`.on-light`) is used for light surfaces (course sidebars, forms). Two background colors maximum per surface. Semantic colors (success/warning/danger/info) are muted and earthy, never neon.
- **Gold as "foil":** primary buttons, selected chips, badges and the wordmark use `--gradient-gold` (a diagonal light-to-dark gold) plus an inner `--sheen-gold` highlight to read as pressed metal, not flat yellow.
- **Type:** Cinzel (display caps, tracked ~0.14em), Cormorant Garamond (serif headings/quotes, often italic for emphasis), Montserrat (UI + eyebrows tracked ~0.32em).
- **Spacing:** 4px base rhythm (`--space-*`). Generous vertical whitespace on marketing sections (64–96px).
- **Backgrounds:** solid emerald and a soft `--gradient-emerald`; hero adds a faint gold radial glow. No photography shipped (none provided) — image wells fall back to an emerald botanical placeholder icon. No busy patterns or textures.
- **Ornament:** a **gold rule-and-diamond** divider (thin line → small rotated square → thin line) echoing the logo's wordmark separator; used under section headings.
- **Animation:** soft and unhurried — `--dur-base 240ms` with `--ease-standard`. Cards lift `translateY(-3/-4px)` and deepen shadow on hover. Nothing bouncy or springy.
- **Hover states:** buttons lift 1px; links and icons shift toward brighter gold (`--accent` → `--accent-strong`); cards raise elevation.
- **Press/active:** returns to `translateY(0)`; toggles fill with gold foil.
- **Borders:** hairline gold at low opacity (`--border-hairline` ~0.22 alpha), stronger (`--border-strong` ~0.45) for emphasis; dividers are faint cream (`--divider`).
- **Shadows:** soft, warm-tinted and emerald-based (`--shadow-sm/md/lg`), plus a gold-tinted `--shadow-gold` under primary buttons. No hard grey drop shadows.
- **Radii:** soft, never fully pill on containers — `sm 8 / md 12 / lg 18 / xl 28`; pills (`--radius-pill`) only for buttons, chips and badges.
- **Cards:** emerald surface, hairline gold border, `--radius-lg`, soft shadow; image well on top with a level badge overlaid; serif title, sans meta row, gold price.
- **Transparency & blur:** the sticky header uses a translucent emerald with `--blur-panel` glass. Used sparingly, only for overlays on emerald.
- **Imagery vibe (intended):** warm, natural, artisanal — botanicals, waxes, hands at work; no cold or high-grain looks.

## ICONOGRAPHY
- **System:** [Lucide](https://lucide.dev) thin-line icons via CDN, rendered at **stroke-width 1.5** to match the delicate line quality of the logo mark. ⚠️ *Substitution* — no icon set was provided; Lucide was chosen for its light, elegant stroke.
- Wrapped by the `Icon` component (`components/core/Icon.jsx`); load `https://unpkg.com/lucide` on any page that renders icons.
- Prefer botanical / craft glyphs: `leaf`, `flower-2`, `flame`, `droplet`, `sparkles`, `flask-conical`, `award`.
- **Emoji:** not used in the UI. **Unicode:** only the gold diamond/asterisk ornament (✦) as a decorative flourish.
- The logo itself is a raster PNG (`assets/logo.png`) — used directly, never redrawn.

---

## Foundations (Design System tab)
Specimen cards live in `guidelines/`: color (emerald, gold, neutrals, semantic), type (display, serif, sans, scale), spacing (scale, radii & shadows), brand (logo, wordmark & ornament).

## Components
Reusable primitives under `components/`, exported on the `SevannaDesignSystem_*` namespace:
- **core/** — `Button`, `IconButton`, `Icon`
- **forms/** — `Input`, `Select`, `Checkbox`, `Switch`
- **content/** — `Badge`, `Tag`, `Card`, `CourseCard`, `SectionHeading`, `Accordion`

Each has a `.jsx`, a `.d.ts` props contract, a `.prompt.md` usage note, and a shared `@dsCard` per directory.

> **Intentional additions:** No source defined a component inventory (logo-only brief), so a standard academy-oriented set was authored. `CourseCard` and `SectionHeading` are brand-specific compositions central to the academy's marketing surfaces.

## UI kits
- **`ui_kits/website/`** — the Sevanna academy marketing site: interactive Home → catálogo (filterable) → course detail (temario + enrollment). Files: `index.html`, `Header.jsx`, `Footer.jsx`, `HomeScreen.jsx`, `CatalogScreen.jsx`, `CourseScreen.jsx`, `data.js`.

## Root index / manifest
- `styles.css` — entry point; `@import`s every token + font file (consumers link this one file).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/logo.png` — primary logo.
- `guidelines/` — foundation specimen cards.
- `components/` — reusable primitives.
- `ui_kits/website/` — marketing-site recreation.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skill wrapper.
