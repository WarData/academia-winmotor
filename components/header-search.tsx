"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchLearningContent } from "@/lib/search";
import { SearchBar } from "@/components/SearchBar";

const moduleLabels: Record<string, string> = {
  sales: "Ventas",
  stock: "Stock",
  workshop: "Taller",
  vehicles: "Vehículos",
  finance: "Finanzas",
  support: "Soporte"
};

export function HeaderSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchLearningContent(query), [query]);
  const showResults = query.trim().length > 0;

  return (
    <div className="relative w-full max-w-md">
      <SearchBar value={query} onChange={setQuery} placeholder="Buscar vídeos y ayuda" />

      {showResults ? (
        <div className="absolute right-0 top-12 z-30 w-[min(28rem,calc(100vw-2rem))] rounded-lg border border-line bg-panel p-3 shadow-soft">
          <div className="max-h-96 space-y-3 overflow-y-auto">
            {results.length > 0 ? (
              results.map((item) => (
                <Link
                  key={item.id}
                  href={`/academy/lesson/${item.id}`}
                  onClick={() => setQuery("")}
                  className="rounded-md border border-line bg-white p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase text-accent">
                        {moduleLabels[item.module] ?? item.module}
                      </p>
                    </div>
                    <span
                      className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md bg-accent px-2.5 text-xs font-semibold text-white transition hover:bg-teal-800"
                    >
                      Abrir
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <p className="px-2 py-4 text-sm text-ink/58">No se ha encontrado contenido.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
