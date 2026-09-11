"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CourseCard, IconButton, Select } from "@/design-system";

const SORTS = ["Más recientes", "Precio: menor", "Precio: mayor", "Duración"] as const;

// Two rows of the 3-column grid — small enough that pagination is visible even
// for a short list (e.g. talleres), large enough to not feel choppy.
const PAGE_SIZE = 6;

export type CatalogItem = {
  slug: string;
  category: string;
  title: string;
  level: string;
  levelLabel: string;
  modality: string;
  duration: string;
  price: string;
  image?: string;
  blurb: string;
};

function priceValue(price: string) {
  return Number(price.replace(/[^\d]/g, "")) || 0;
}

function durationValue(duration: string) {
  return parseFloat(duration.replace(",", ".").replace(/[^\d.]/g, "")) || 0;
}

/** Filterable + sortable grid shared by /cursos and /talleres. */
export function Catalog({
  items,
  categories,
  basePath,
}: {
  items: CatalogItem[];
  categories: string[];
  basePath: string;
}) {
  const [category, setCategory] = useState("Todos");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Más recientes");
  const [page, setPage] = useState(1);

  const filteredSorted = useMemo(() => {
    const filtered =
      category === "Todos" ? items : items.filter((c) => c.category === category);
    const sorted = [...filtered];
    if (sort === "Precio: menor") sorted.sort((a, b) => priceValue(a.price) - priceValue(b.price));
    if (sort === "Precio: mayor") sorted.sort((a, b) => priceValue(b.price) - priceValue(a.price));
    if (sort === "Duración") sorted.sort((a, b) => durationValue(b.duration) - durationValue(a.duration));
    return sorted;
  }, [items, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const shown = filteredSorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <section style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "32px 40px 96px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: 16,
          marginBottom: 36,
        }}
      >
        <div style={{ width: 240 }}>
          <Select
            label="Categoría"
            options={categories}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <div style={{ width: 200 }}>
          <Select
            label="Ordenar por"
            options={[...SORTS]}
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as (typeof SORTS)[number]);
              setPage(1);
            }}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
        {shown.map((item) => (
          <Link key={item.slug} href={`${basePath}/${item.slug}`} style={{ textDecoration: "none" }}>
            <CourseCard {...item} style={{ height: "100%", cursor: "pointer" }} />
          </Link>
        ))}
      </div>

      {shown.length === 0 && (
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 20, color: "var(--text-muted)" }}>
          No hay resultados para esta categoría.
        </p>
      )}

      {totalPages > 1 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginTop: 44,
          }}
        >
          <IconButton
            name="chevron-left"
            label="Página anterior"
            disabled={currentPage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--fs-label)",
              letterSpacing: "var(--ls-label)",
              color: "var(--text-muted)",
              minWidth: 120,
              textAlign: "center",
            }}
          >
            Página {currentPage} de {totalPages}
          </span>
          <IconButton
            name="chevron-right"
            label="Página siguiente"
            disabled={currentPage === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          />
        </div>
      )}
    </section>
  );
}
