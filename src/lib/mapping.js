// Maps raw Sevanna API course records onto the shapes the UI already expects
// (see Catalog.tsx's CatalogItem and ProgramDetail's outline items).

const LEVEL_MAP = {
  BEGINNER: { level: "basic", levelLabel: "Básico" },
  INTERMEDIATE: { level: "intermediate", levelLabel: "Intermedio" },
  ADVANCED: { level: "advanced", levelLabel: "Avanzado" },
};

const MODALITY_LABEL = {
  PRESENTIAL: "Presencial",
  ONLINE: "Virtual",
  HYBRID: "Híbrido",
};

export function formatPrice(price, currency) {
  const amount = Math.round(Number(price));
  if (!Number.isFinite(amount)) return String(price ?? "");
  const formatted = new Intl.NumberFormat("es-CO").format(amount);
  return currency && currency !== "COP" ? `${formatted} ${currency}` : `$${formatted}`;
}

/**
 * The API doesn't (yet) expose an explicit curso/taller field — every record
 * is a "course". We infer the kind from the slug convention the backend uses
 * ("curso-de-…" / "taller-de-…"). If that convention ever changes, this is the
 * one place to update.
 */
export function kindFromSlug(slug) {
  return slug?.startsWith("taller-") ? "taller" : "curso";
}

/** API record → CatalogItem, used by both the catalog grid and detail hero. */
export function toCatalogItem(course) {
  const { level, levelLabel } = LEVEL_MAP[course.level] ?? LEVEL_MAP.BEGINNER;
  return {
    kind: kindFromSlug(course.slug),
    slug: course.slug,
    category: course.category?.name ?? "General",
    title: course.title,
    level,
    levelLabel,
    modality: MODALITY_LABEL[course.modality] ?? course.modality ?? "",
    // Only the detail endpoint returns duration; list items simply omit it.
    duration: course.duration ?? "",
    price: formatPrice(course.price, course.currency),
    image: course.image_url ?? undefined,
    blurb: course.short_description ?? "",
  };
}

/** Builds the accordion content for a detail page from whatever the API sent. */
export function buildOutline(course) {
  const items = [];
  if (course.objective) {
    items.push({ title: "Objetivo", content: course.objective });
  }
  if (course.learning_outcomes?.length) {
    items.push({ title: "Lo que aprenderás", content: course.learning_outcomes.join(" · ") });
  }
  if (course.materials?.included?.length) {
    items.push({ title: "Incluye", content: course.materials.included.join(", ") });
  }
  if (course.materials?.required?.length) {
    items.push({ title: "Debes traer", content: course.materials.required.join(", ") });
  }
  if (!items.length) {
    const fallback = course.description ?? course.short_description;
    if (fallback) items.push({ title: "Descripción", content: fallback });
  }
  return items;
}

export function uniqueCategories(items) {
  const names = [...new Set(items.map((item) => item.category).filter(Boolean))];
  return ["Todos", ...names.sort((a, b) => a.localeCompare(b, "es"))];
}
