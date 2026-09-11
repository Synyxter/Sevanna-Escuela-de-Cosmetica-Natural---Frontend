// Demo content for the Sevanna academy site, ported from the design system's
// website UI kit (design-system/ui_kits/website/data.js). Swap for a CMS / API
// when there is one.

export { WHATSAPP_NUMBER } from "./config";

export const courses = [
  {
    kind: "curso",
    slug: "velas",
    category: "Velas",
    title: "Velas de soya aromáticas",
    level: "basic",
    levelLabel: "Básico",
    modality: "Presencial",
    duration: "4 h",
    price: "$85.000",
    blurb:
      "Domina el vertido, las mechas y la fragancia para crear velas de acabado impecable.",
  },
  {
    kind: "curso",
    slug: "jabones",
    category: "Jabones",
    title: "Jabones artesanales en frío",
    level: "intermediate",
    levelLabel: "Intermedio",
    modality: "Híbrido",
    duration: "8 h",
    price: "$120.000",
    image: "/sevanna/course-jabones.jpg",
    blurb:
      "Saponificación, cálculo de sosa y diseño de barras con ingredientes naturales.",
  },
  {
    kind: "curso",
    slug: "labiales",
    category: "Labiales",
    title: "Labiales y bálsamos nutritivos",
    level: "basic",
    levelLabel: "Básico",
    modality: "Virtual",
    duration: "3 h",
    price: "$70.000",
    image: "/sevanna/course-labiales.jpg",
    blurb:
      "Formula bálsamos con ceras y aceites vegetales, con color y textura a tu gusto.",
  },
  {
    kind: "curso",
    slug: "desodorantes",
    category: "Cuidado",
    title: "Desodorantes naturales",
    level: "intermediate",
    levelLabel: "Intermedio",
    modality: "Virtual",
    duration: "3 h",
    price: "$65.000",
    blurb: "Alternativas sin aluminio: bases, activos y conservación segura.",
  },
  {
    kind: "curso",
    slug: "piel",
    category: "Skincare",
    title: "Cuidado de la piel: sérums y cremas",
    level: "advanced",
    levelLabel: "Avanzado",
    modality: "Híbrido",
    duration: "12 h",
    price: "$210.000",
    blurb: "Emulsiones, activos y conservantes para una rutina profesional.",
  },
  {
    kind: "curso",
    slug: "perfumes",
    category: "Aromas",
    title: "Perfumería botánica",
    level: "advanced",
    levelLabel: "Avanzado",
    modality: "Presencial",
    duration: "10 h",
    price: "$180.000",
    blurb:
      "Pirámide olfativa, acordes y maceración con materias primas naturales.",
  },
];

export const categories = [
  "Todos",
  "Velas",
  "Jabones",
  "Labiales",
  "Cuidado",
  "Skincare",
  "Aromas",
];

export const temario = [
  {
    title: "Módulo 1 · Materiales y seguridad",
    content:
      "Reconoce ceras, aceites, mechas y equipos. Buenas prácticas de laboratorio y manejo seguro de ingredientes.",
  },
  {
    title: "Módulo 2 · Formulación",
    content:
      "Cálculo de porcentajes, punto de fusión, proporción de fragancia y ajuste de textura.",
  },
  {
    title: "Módulo 3 · Elaboración",
    content:
      "Proceso paso a paso, vertido, curado y control de calidad del producto terminado.",
  },
  {
    title: "Módulo 4 · Marca y presentación",
    content:
      "Etiquetado, empaque sostenible y cómo llevar tu producto al mercado.",
  },
];

export const courseIncludes = [
  "Kit de materiales incluido",
  "Certificado de participación",
  "Acceso a recetario digital",
  "Acompañamiento del instructor",
];

export function getCourse(slug) {
  return courses.find((c) => c.slug === slug);
}
