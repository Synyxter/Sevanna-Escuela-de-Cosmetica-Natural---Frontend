// Unified view over the academy's offerings — cursos + talleres. Slugs are unique
// across both lists, so a single lookup works for shared flows (e.g. inscripción).

import { courses } from "./courses";
import { talleres } from "./talleres";

export const programs = [...courses, ...talleres];

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

export function getProgram(slug) {
  return programs.find((p) => p.slug === slug);
}

export function kindMeta(kind) {
  return KIND_META[kind] ?? KIND_META.curso;
}
