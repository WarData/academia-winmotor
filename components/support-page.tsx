"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FileQuestion, LifeBuoy, PlayCircle, Search, Sparkles } from "lucide-react";
import { getContentById, learningContent, supportCases } from "@/data/content";
import { AiSearchBar } from "@/components/AiSearchBar";

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
  vehicles: "Vehiculos",
  finance: "Finanzas",
  support: "Soporte"
};

const typeLabels: Record<string, string> = {
  video: "video",
  help: "ayuda"
};

function matchesQuery(item: SupportCase, query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;
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
  return normalizedQuery.split(/\s+/).some((term) => searchableText.includes(term));
}

export function SupportPage() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"classic" | "ai">("ai");
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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">Soporte</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">Centro de soporte</h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-ink/66">
            Encuentra incidencias comunes, lecciones relacionadas y recursos de ayuda de Winmotor Academy.
          </p>
        </div>
        <Link
          href="mailto:soporte@winmotor.es"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
        >
          <LifeBuoy className="h-4 w-4" />
          Abrir ticket
        </Link>
      </div>

      {/* Mode toggle */}
      <div className="flex items-center gap-1 rounded-lg border border-line bg-panel p-1 w-fit">
        <button
          onClick={() => setMode("ai")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
            mode === "ai" ? "bg-accent text-white" : "text-ink/60 hover:text-ink"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Busqueda con IA
        </button>
        <button
          onClick={() => setMode("classic")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
            mode === "classic" ? "bg-accent text-white" : "text-ink/60 hover:text-ink"
          }`}
        >
          <Search className="h-3.5 w-3.5" />
          Busqueda clasica
        </button>
      </div>

      {/* AI Search */}
      {mode === "ai" && (
        <AiSearchBar
          placeholder="Pregunta en lenguaje natural: como creo una factura, donde esta el stock minimo..."
        />
      )}

      {/* Classic Search */}
      {mode === "classic" && (
        <div className="space-y-6">
          <div className="flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 focus-within:border-accent">
            <Search className="h-4 w-4 shrink-0 text-ink/45" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar incidencias, facturas, stock o permisos"
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/45"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-ink/55 uppercase tracking-wide mb-3">
              {hasSearch ? "Resultados de busqueda" : "Casos frecuentes de soporte"}
            </p>
            {filteredCases.length > 0 ? (
              <div className="grid gap-4 lg:grid-cols-2">
                {filteredCases.map((item) => {
                  const resource = getContentById(item.resourceId) as LearningContentItem | undefined;
                  const Icon = item.type === "video" ? PlayCircle : FileQuestion;
                  const cardContent = (
                    <div className="flex items-start gap-3 rounded-xl border border-line bg-panel p-4 hover:border-accent hover:shadow-sm transition-all cursor-pointer">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-ink">{item.title}</p>
                        <p className="mt-0.5 text-xs text-ink/55">{resource?.title ?? "Articulo de ayuda"}</p>
                        <span className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          item.type === "video" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"
                        }`}>
                          {typeLabels[item.type] ?? item.type}
                        </span>
                      </div>
                    </div>
                  );
                  return resource ? (
                    <Link key={item.id} href={`/academy/lesson/${item.resourceId}`}>{cardContent}</Link>
                  ) : (
                    <div key={item.id}>{cardContent}</div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-xl border border-line bg-panel p-8 text-center">
                <p className="text-sm text-ink/55">No se ha encontrado contenido de soporte.</p>
                <p className="mt-1 text-xs text-ink/40">Prueba con la busqueda IA o abre un ticket.</p>
                <Link
                  href="mailto:soporte@winmotor.es"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/80"
                >
                  Abrir ticket
                </Link>
              </div>
            )}
          </div>

          {/* Suggested videos */}
          <div>
            <p className="text-sm font-semibold uppercase text-ink/45 tracking-wide mb-3">Videos sugeridos</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {suggestedVideos.map((item) => (
                <Link key={item.id} href={`/academy/lesson/${item.id}`}>
                  <div className="flex items-center gap-3 rounded-xl border border-line bg-panel p-4 hover:border-accent hover:shadow-sm transition-all cursor-pointer">
                    <PlayCircle className="h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="text-xs text-ink/55">{moduleLabels[item.module] ?? item.module}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
