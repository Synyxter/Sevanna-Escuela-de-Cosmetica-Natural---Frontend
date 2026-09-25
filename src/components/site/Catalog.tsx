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
    <section className="max-w-content mx-auto pt-8 px-5 sm:px-8 lg:px-10 pb-24">
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-end justify-start gap-4 mb-9">
        <div className="w-full sm:w-60">
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
        <div className="w-full sm:w-50">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {shown.map((item) => (
          <Link key={item.slug} href={`${basePath}/${item.slug}`} className="no-underline">
            <CourseCard title={item.title} price={item.price} image={item.image} className="h-full cursor-pointer" />
          </Link>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="font-serif text-xl text-muted">No hay resultados para esta categoría.</p>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-5 mt-11">
          <IconButton
            name="chevron-left"
            label="Página anterior"
            disabled={currentPage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          />
          <span className="font-sans text-label tracking-label text-muted min-w-30 text-center">
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
