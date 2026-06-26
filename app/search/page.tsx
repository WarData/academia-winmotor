"use client";

import { useMemo, useState } from "react";
import { HelpCard } from "@/components/HelpCard";
import { SearchBar } from "@/components/SearchBar";
import { VideoCard } from "@/components/VideoCard";
import { searchLearningContent } from "@/lib/search";

type SearchResult = {
  id: string;
  title: string;
  module: string;
  process: string;
  type: "video" | "help";
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () => searchLearningContent(query) as SearchResult[],
    [query]
  );

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase text-accent">Búsqueda</p>
        <h2 className="mt-2 text-3xl font-semibold text-ink">Buscar en la base de conocimiento</h2>
        <p className="mt-2 max-w-3xl text-base leading-7 text-ink/66">
          Busca vídeos, artículos de ayuda y pasos de proceso de Winmotor Academy.
        </p>
      </div>

      <div className="max-w-2xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {results.map((item) =>
          item.type === "video" ? (
            <VideoCard
              key={item.id}
              id={item.id}
              title={item.title}
              module={item.module}
              process={item.process}
            />
          ) : (
            <HelpCard
              key={item.id}
              id={item.id}
              title={item.title}
              module={item.module}
              process={item.process}
            />
          )
        )}
      </div>

      {query.trim() && results.length === 0 ? (
        <p className="rounded-lg border border-line bg-panel p-5 text-sm text-ink/62 shadow-soft">
          No se han encontrado objetos de conocimiento.
        </p>
      ) : null}
    </section>
  );
}
