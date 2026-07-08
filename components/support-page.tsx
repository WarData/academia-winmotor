"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FileQuestion, LifeBuoy, PlayCircle, Search, Sparkles } from "lucide-react";
import { getContentById, learningContent } from "@/data/content";
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
  vehicles: "Vehículos",
  administracion: "Administración y Contabilidad",
  support: "Soporte",
};

const typeLabels: Record<string, string> = {
  video: "video",
  help: "ayuda",
};

const supportCases: SupportCase[] = [
  {
    id: "support-sales-budget",
    title: "Cómo crear un presupuesto de ventas",
    keywords: ["presupuesto", "ventas", "crear", "pedido"],
    resourceId: "sales-presupuesto-ventas",
    type: "video",
  },
  {
    id: "support-sales-order",
    title: "Cómo grabar un pedido de ventas",
    keywords: ["pedido", "ventas", "crear"],
    resourceId: "sales-pedido-ventas",
    type: "video",
  },
  {
    id: "support-stock-check",
    title: "Cómo consultar stock",
    keywords: ["stock", "consultar", "inventario"],
    resourceId: "stock-check-stock",
    type: "video",
  },
  {
    id: "support-workshop-or",
    title: "Cómo dar de alta una OR",
    keywords: ["OR", "taller", "orden", "reparación"],
    resourceId: "workshop-or-vehiculo-cliente",
    type: "video",
  },
  {
    id: "support-help-center",
    title: "Centro de ayuda",
    keywords: ["ayuda", "soporte", "incidencias"],
    resourceId: "support-center",
    type: "help",
  },
];

function matchesQuery(item: SupportCase, query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;

  const resource = getContentById(item.resourceId) as LearningContentItem | undefined;
  const searchableText = [
    item.title,
    item.keywords.join(" "),
    resource?.title,
    resource?.process,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return normalizedQuery.split(/\s+/).some((term) => searchableText.includes(term));
}

export function SupportPage() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"classic" | "ai">("ai");

  const filteredCases = useMemo(
    () => supportCases.filter((item) => matchesQuery(item, query)),
    [query]
  );

  const suggestedVideos = (learningContent as LearningContentItem[])
    .filter((item) => item.type === "video")
    .slice(0, 4);

  const hasSearch = query.trim().length > 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-red-700">Soporte</p>
          <h2 className="mt-2 text-3xl font-semibold text-zinc-900">Centro de soporte</h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-zinc-600">
            Encuentra incidencias comunes, lecciones relacionadas y recursos de ayuda de Winmotor Academy.
          </p>
        </div>

        <Link
          href="mailto:soporte@winmotor.es"
          className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50"
        >
          <LifeBuoy className="h-4 w-4" />
          Abrir ticket
        </Link>
      </div>

      <div className="flex w-fit items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1">
        <button
          onClick={() => setMode("ai")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
            mode === "ai" ? "bg-red-700 text-white" : "text-zinc-600 hover:text-zinc-900"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Búsqueda con IA
        </button>

        <button
          onClick={() => setMode("classic")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
            mode === "classic" ? "bg-red-700 text-white" : "text-zinc-600 hover:text-zinc-900"
          }`}
        >
          <Search className="h-3.5 w-3.5" />
          Búsqueda clásica
        </button>
      </div>

      {mode === "ai" && (
        <AiSearchBar placeholder="Pregunta en lenguaje natural: cómo creo una factura, dónde está el stock mínimo..." />
      )}

      {mode === "classic" && (
        <div className="space-y-6">
          <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 focus-within:border-red-300">
            <Search className="h-4 w-4 shrink-0 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar incidencias, facturas, stock o permisos"
              className="min-w-0 flex-1 bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
              {hasSearch ? "Resultados de búsqueda" : "Casos frecuentes de soporte"}
            </p>

            {filteredCases.length > 0 ? (
              <div className="grid gap-4 lg:grid-cols-2">
                {filteredCases.map((item) => {
                  const resource = getContentById(item.resourceId) as LearningContentItem | undefined;
                  const Icon = item.type === "video" ? PlayCircle : FileQuestion;

                  const cardContent = (
                    <div className="cursor-pointer rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-red-200 hover:shadow-sm">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50">
                          <Icon className="h-5 w-5 text-red-700" />
                        </span>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-zinc-900">{item.title}</p>
                          <p className="mt-0.5 text-xs text-zinc-500">
                            {resource?.title ?? "Artículo de ayuda"}
                          </p>
                          <span
                            className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                              item.type === "video"
                                ? "bg-red-50 text-red-700"
                                : "bg-zinc-100 text-zinc-600"
                            }`}
                          >
                            {typeLabels[item.type] ?? item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  );

                  return resource ? (
                    <Link key={item.id} href={`/academy/lesson/${item.resourceId}`}>
                      {cardContent}
                    </Link>
                  ) : (
                    <div key={item.id}>{cardContent}</div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center">
                <p className="text-sm text-zinc-600">No se ha encontrado contenido de soporte.</p>
                <p className="mt-1 text-xs text-zinc-400">Prueba con la búsqueda IA o abre un ticket.</p>
                <Link
                  href="mailto:soporte@winmotor.es"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
                >
                  Abrir ticket
                </Link>
              </div>
            )}
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Vídeos sugeridos
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {suggestedVideos.map((item) => (
                <Link key={item.id} href={`/academy/lesson/${item.id}`}>
                  <div className="cursor-pointer rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-red-200 hover:shadow-sm">
                    <div className="flex items-center gap-3">
                      <PlayCircle className="h-5 w-5 shrink-0 text-red-700" />
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">{item.title}</p>
                        <p className="text-xs text-zinc-500">
                          {moduleLabels[item.module] ?? item.module}
                        </p>
                      </div>
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
