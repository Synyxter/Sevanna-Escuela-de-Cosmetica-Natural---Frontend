// Cursos — backed by the Sevanna API (https://sevanna-api.onrender.com/docs).
// See src/lib/programs.js / mapping.js for the fetch + curso/taller split.

import { getAllPrograms, getProgramBySlug } from "./programs";

export const courseIncludes = [
  "Certificado de participación",
  "Acceso a recetario digital",
  "Acompañamiento del instructor",
];

export async function getCourses() {
  const all = await getAllPrograms();
  return all.filter((item) => item.kind === "curso");
}

/** Detail for a curso by slug, or `null` if it doesn't exist or is a taller. */
export async function getCourseDetail(slug) {
  const { program, outline } = await getProgramBySlug(slug);
  if (program.kind !== "curso") return null;
  return { program, outline };
}
