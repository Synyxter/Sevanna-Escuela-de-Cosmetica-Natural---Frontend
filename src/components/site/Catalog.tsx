"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CourseCard, Select } from "@/design-system";

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

  const filteredSorted = useMemo(() => {
    const filtered =
      category === "Todos" ? items : items.filter((c) => c.category === category);
    const sorted = [...filtered];
    if (sort === "Precio: menor") sorted.sort((a, b) => priceValue(a.price) - priceValue(b.price));
    if (sort === "Precio: mayor") sorted.sort((a, b) => priceValue(b.price) - priceValue(a.price));
    if (sort === "Duración") sorted.sort((a, b) => durationValue(b.duration) - durationValue(a.duration));
    return sorted;
  }, [items, category, sort]);

  return (
    <section className="max-w-content mx-auto pt-8 px-5 sm:px-8 lg:px-10 pb-24">
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-end justify-start gap-4 mb-9">
        <p className="m-0 sm:mr-auto sm:py-3.25 font-sans text-sm text-muted">
          {filteredSorted.length === 1
            ? "Mostrando 1 resultado"
            : `Mostrando los ${filteredSorted.length} resultados`}
        </p>
        <div className="w-full sm:w-48">
          <Select
            label="Categoría"
            options={categories}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-44">
          <Select
            label="Ordenar por"
            options={[...SORTS]}
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {filteredSorted.map((item) => (
          <Link key={item.slug} href={`${basePath}/${item.slug}`} className="no-underline">
            <CourseCard title={item.title} price={item.price} image={item.image} className="h-full cursor-pointer" />
          </Link>
        ))}
      </div>

      {filteredSorted.length === 0 && (
        <p className="font-serif text-xl text-muted">No hay resultados para esta categoría.</p>
      )}
    </section>
  );
}
