// Unified view over the academy's offerings — cursos + talleres — both served by
// the same Sevanna API `/courses` resource (see src/lib/mapping.js for how the
// two are told apart). Used by flows that don't care which kind it is, like
// /inscripcion/[slug].

import { apiFetch } from "./api";
import { toCatalogItem, buildOutline } from "./mapping";

/** Per-kind labels and routing. `kind` is "curso" | "taller". */
export const KIND_META = {
  curso: {
    label: "curso",
    basePath: "/cursos",
    catalogLabel: "Volver al catálogo de cursos",
  },
  taller: {
    label: "taller",
    basePath: "/talleres",
    catalogLabel: "Volver a los talleres",
  },
};

export function kindMeta(kind) {
  return KIND_META[kind] ?? KIND_META.curso;
}

// `limit=100` covers the current catalog (~30 items) in a single page. If it
// ever grows past that, this needs real pagination against `/courses`.
export async function getAllPrograms() {
  const page = await apiFetch("/courses?limit=100");
  return page.items.map(toCatalogItem);
}

export async function getProgramBySlug(slug) {
  const detail = await apiFetch(`/courses/${slug}`);
  return { program: toCatalogItem(detail), outline: buildOutline(detail) };
}
