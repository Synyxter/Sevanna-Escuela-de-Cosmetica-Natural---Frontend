// Talleres — backed by the Sevanna API (https://sevanna-api.onrender.com/docs).
// See src/lib/programs.js / mapping.js for the fetch + curso/taller split.

import { getAllPrograms, getProgramBySlug } from "./programs";

export const tallerIncludes = [
  "Todos los materiales del taller",
  "Tu producto terminado para llevar",
  "Certificado de asistencia",
];

export async function getTalleres() {
  const all = await getAllPrograms();
  return all.filter((item) => item.kind === "taller");
}

/** Detail for a taller by slug, or `null` if it doesn't exist or is a curso. */
export async function getTallerDetail(slug) {
  const { program, outline } = await getProgramBySlug(slug);
  if (program.kind !== "taller") return null;
  return { program, outline };
}
