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

// The API caps `limit` at 100, so fetch the first page, then any remaining
// pages in parallel, and return the whole catalog in one list.
const PAGE_LIMIT = 100;

export async function getAllPrograms() {
  const first = await apiFetch(`/courses?limit=${PAGE_LIMIT}&page=1`);
  const totalPages = first.pagination?.total_pages ?? 1;
  const rest = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, i) =>
      apiFetch(`/courses?limit=${PAGE_LIMIT}&page=${i + 2}`),
    ),
  );
  return [first, ...rest].flatMap((page) => page.items).map(toCatalogItem);
}

export async function getProgramBySlug(slug) {
  const detail = await apiFetch(`/courses/${slug}`);
  return { program: toCatalogItem(detail), outline: buildOutline(detail) };
}
