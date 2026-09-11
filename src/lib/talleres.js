// Talleres — sesiones cortas y prácticas de la academia Sevanna. Misma forma que
// los cursos (ver ./courses.js); se diferencian en duración, alcance y en que
// terminas la sesión con tu producto en la mano. Reemplazar por CMS / API.

export const talleres = [
  {
    kind: "taller",
    slug: "velas-cera-abeja",
    category: "Velas",
    title: "Velas de cera de abeja",
    level: "basic",
    levelLabel: "Básico",
    modality: "Presencial",
    duration: "2 h",
    price: "$55.000",
    blurb:
      "Enrolla mechas y funde cera de abeja para llevarte dos velas terminadas el mismo día.",
  },
  {
    kind: "taller",
    slug: "jabon-miel-avena",
    category: "Jabones",
    title: "Jabón de miel y avena",
    level: "basic",
    levelLabel: "Básico",
    modality: "Presencial",
    duration: "2.5 h",
    price: "$60.000",
    image: "/sevanna/course-jabones.jpg",
    blurb:
      "Método melt & pour: corta, funde, aromatiza y desmolda tus primeras barras.",
  },
  {
    kind: "taller",
    slug: "labial-cereza",
    category: "Labiales",
    title: "Labial en tono cereza",
    level: "basic",
    levelLabel: "Básico",
    modality: "Virtual",
    duration: "1.5 h",
    price: "$40.000",
    image: "/sevanna/course-labiales.jpg",
    blurb:
      "Mezcla ceras y aceites vegetales para un labial con color, brillo y cuidado, desde casa.",
  },
  {
    kind: "taller",
    slug: "brumas-textiles",
    category: "Aromas",
    title: "Brumas aromáticas para textiles",
    level: "basic",
    levelLabel: "Básico",
    modality: "Virtual",
    duration: "1.5 h",
    price: "$38.000",
    blurb:
      "Combina hidrolatos y aceites esenciales para perfumar tu ropa y tu hogar.",
  },
  {
    kind: "taller",
    slug: "exfoliante-cafe",
    category: "Skincare",
    title: "Exfoliante de café y coco",
    level: "intermediate",
    levelLabel: "Intermedio",
    modality: "Presencial",
    duration: "2 h",
    price: "$52.000",
    blurb:
      "Formula un exfoliante corporal con textura, aroma y conservación segura.",
  },
  {
    kind: "taller",
    slug: "perfume-solido",
    category: "Aromas",
    title: "Perfume sólido botánico",
    level: "intermediate",
    levelLabel: "Intermedio",
    modality: "Híbrido",
    duration: "2.5 h",
    price: "$68.000",
    blurb:
      "Crea un perfume en bálsamo con acordes naturales y su estuche para llevar.",
  },
];

export const tallerCategories = [
  "Todos",
  "Velas",
  "Jabones",
  "Labiales",
  "Aromas",
  "Skincare",
];

export const agenda = [
  {
    title: "1 · Bienvenida y materiales",
    content:
      "Conoce tu kit, el espacio de trabajo y las medidas de seguridad antes de empezar.",
  },
  {
    title: "2 · Demostración guiada",
    content:
      "La instructora realiza el proceso completo paso a paso mientras resuelves dudas.",
  },
  {
    title: "3 · Manos a la obra",
    content:
      "Elaboras tu propia pieza con acompañamiento cercano en cada etapa.",
  },
  {
    title: "4 · Acabado y empaque",
    content:
      "Desmoldas, etiquetas y empacas tu producto para llevártelo el mismo día.",
  },
];

export const tallerIncludes = [
  "Todos los materiales del taller",
  "Tu producto terminado para llevar",
  "Recetario digital de la sesión",
  "Certificado de asistencia",
];

export function getTaller(slug) {
  return talleres.find((t) => t.slug === slug);
}
