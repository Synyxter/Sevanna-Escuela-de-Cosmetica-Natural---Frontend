"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CourseCard, Select, Tag } from "@/design-system";

const SORTS = ["Más recientes", "Precio: menor", "Precio: mayor", "Duración"] as const;

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

  const shown = useMemo(() => {
    const filtered =
      category === "Todos" ? items : items.filter((c) => c.category === category);
    const sorted = [...filtered];
    if (sort === "Precio: menor") sorted.sort((a, b) => priceValue(a.price) - priceValue(b.price));
    if (sort === "Precio: mayor") sorted.sort((a, b) => priceValue(b.price) - priceValue(a.price));
    if (sort === "Duración") sorted.sort((a, b) => durationValue(b.duration) - durationValue(a.duration));
    return sorted;
  }, [items, category, sort]);

  return (
    <section style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "32px 40px 96px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          marginBottom: 36,
        }}
      >
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {categories.map((c) => (
            <Tag key={c} selected={category === c} onClick={() => setCategory(c)}>
              {c}
            </Tag>
          ))}
        </div>
        <div style={{ width: 200 }}>
          <Select
            options={[...SORTS]}
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
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
    </section>
  );
}
