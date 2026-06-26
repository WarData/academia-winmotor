"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FileQuestion, LifeBuoy, PlayCircle, Search } from "lucide-react";
import { getContentById, learningContent, supportCases } from "@/data/content";

type SupportCase = {
  id: string;
  title: string;
  keywords: string[];
  resourceId: string;
  type: "video" | "help";
};

type LearningContentItem = {
  id: string;
  title: string;
  module: string;
  process: string;
  type: "video" | "help";
};

const moduleLabels: Record<string, string> = {
  sales: "Ventas",
  stock: "Stock",
  workshop: "Taller",
  vehicles: "Vehículos",
  finance: "Finanzas",
  support: "Soporte"
};

const typeLabels: Record<string, string> = {
  video: "vídeo",
  help: "ayuda"
};

function matchesQuery(item: SupportCase, query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  const resource = getContentById(item.resourceId) as LearningContentItem | undefined;
  const searchableText = [
    item.title,
    item.keywords.join(" "),
    resource?.title,
    resource?.process
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return normalizedQuery
    .split(/\s+/)
    .some((term) => searchableText.includes(term));
}

export function SupportPage() {
  const [query, setQuery] = useState("");
  const cases = supportCases as SupportCase[];
  const filteredCases = useMemo(
    () => cases.filter((item) => matchesQuery(item, query)),
    [cases, query]
  );
  const suggestedVideos = (learningContent as LearningContentItem[])
    .filter((item) => item.type === "video")
    .slice(0, 4);
  const hasSearch = query.trim().length > 0;

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">Centro de soporte</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">Soporte</h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-ink/66">
            Encuentra incidencias comunes, lecciones relacionadas y recursos de ayuda de Winmotor Academy.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          <LifeBuoy className="h-4 w-4" aria-hidden="true" />
          Abrir ticket
        </button>
      </div>

      <label className="flex h-12 max-w-2xl items-center gap-3 rounded-md border border-line bg-panel px-4 text-sm text-ink/70 shadow-soft focus-within:border-accent">
        <Search className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="sr-only">Buscar incidencias de soporte</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar incidencias, facturas, stock o permisos"
          className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/45"
        />
      </label>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">
            {hasSearch ? "Contenido de soporte coincidente" : "Incidencias comunes"}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink">
            {hasSearch ? "Resultados de búsqueda" : "Casos frecuentes de soporte"}
          </h3>
        </div>

        {filteredCases.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredCases.map((item) => {
              const resource = getContentById(item.resourceId) as
                | LearningContentItem
                | undefined;
              const Icon = item.type === "video" ? PlayCircle : FileQuestion;

              const cardContent = (
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 gap-3">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-50 text-accent">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-ink">{item.title}</h4>
                        <p className="mt-1 text-sm text-ink/58">
                          {resource?.title ?? "Artículo de ayuda"}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-md border border-line px-2.5 py-1 text-xs font-semibold uppercase text-ink/62">
                      {typeLabels[item.type] ?? item.type}
                    </span>
                  </div>
              );

              return resource ? (
                <Link
                  key={item.id}
                  href={`/academy/lesson/${resource.id}`}
                  className="rounded-lg border border-line bg-panel p-5 shadow-soft transition hover:border-accent"
                >
                  {cardContent}
                </Link>
              ) : (
                <article
                  key={item.id}
                  className="rounded-lg border border-line bg-panel p-5 shadow-soft"
                >
                  {cardContent}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-lg border border-line bg-panel p-6 shadow-soft">
            <p className="text-base font-semibold text-ink">No se ha encontrado contenido de soporte.</p>
            <p className="mt-2 text-sm leading-6 text-ink/62">
              Crea un ticket y el equipo de soporte revisará este caso contigo.
            </p>
            <button
              type="button"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              <LifeBuoy className="h-4 w-4" aria-hidden="true" />
              Abrir ticket
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">Vídeos sugeridos</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">Lecciones recomendadas</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {suggestedVideos.map((item) => (
            <Link
              key={item.id}
              href={`/academy/lesson/${item.id}`}
              className="rounded-lg border border-line bg-panel p-4 shadow-soft transition hover:border-accent"
            >
              <PlayCircle className="h-6 w-6 text-accent" aria-hidden="true" />
              <h4 className="mt-4 text-base font-semibold text-ink">{item.title}</h4>
              <p className="mt-1 text-xs font-semibold uppercase text-ink/50">
                {moduleLabels[item.module] ?? item.module}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
