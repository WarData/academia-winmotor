import { NextRequest, NextResponse } from "next/server";
import { learningContent } from "@/data/content";

type SearchableItem = {
  id: string;
  title: string;
  module: string;
  process: string;
  type: "video" | "help";
  source: string;
  url: string | null;
  keywords: string[];
};

const supportCases: SearchableItem[] = [
  {
    id: "support-sales-budget",
    title: "Cómo crear un presupuesto de ventas",
    module: "sales",
    process: "create_quote",
    type: "video",
    source: "support",
    url: null,
    keywords: ["presupuesto", "ventas", "crear", "pedido"],
  },
  {
    id: "support-sales-order",
    title: "Cómo grabar un pedido de ventas",
    module: "sales",
    process: "create_order",
    type: "video",
    source: "support",
    url: null,
    keywords: ["pedido", "ventas", "crear"],
  },
  {
    id: "support-stock-check",
    title: "Cómo consultar stock",
    module: "stock",
    process: "check_stock",
    type: "video",
    source: "support",
    url: null,
    keywords: ["stock", "consultar", "inventario"],
  },
  {
    id: "support-workshop-or",
    title: "Cómo dar de alta una OR",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "support",
    url: null,
    keywords: ["OR", "taller", "orden", "reparación"],
  },
  {
    id: "support-help-center",
    title: "Centro de ayuda",
    module: "support",
    process: "help_center",
    type: "help",
    source: "support",
    url: "https://winmotor.gitbook.io/winmotor-automocion",
    keywords: ["ayuda", "soporte", "incidencias", "gitbook"],
  },
];

const allLearningContent: SearchableItem[] = (learningContent as any[]).map((item: any) => ({
  id: item.id,
  title: item.title,
  module: item.module ?? "",
  process: item.process ?? "",
  type: item.type as "video" | "help",
  source: item.source ?? "youtube",
  url: item.url ?? null,
  keywords: item.keywords ?? [],
}));

const ALL_CONTENT: SearchableItem[] = [...allLearningContent, ...supportCases];

function buildCatalogSummary() {
  return ALL_CONTENT.map(
    (item, idx) =>
      `[${idx}] (${item.type}/${item.source}) "${item.title}" | modulo:${item.module} | proceso:${item.process} | keywords:${item.keywords.join(",")}`
  ).join("\n");
}

function keywordFallback(query: string, moduleFilter?: string) {
  const q = query.toLowerCase();

  const results = ALL_CONTENT.filter((item) => {
    const text = `${item.title} ${item.process} ${item.keywords.join(" ")}`.toLowerCase();
    const matchesQuery = q.split(/\s+/).some((term) => text.includes(term));
    const matchesModule = moduleFilter ? item.module === moduleFilter : true;
    return matchesQuery && matchesModule;
  }).slice(0, 8);

  return results;
}

async function askGitBook(question: string, goal?: string) {
  try {
    const basePage =
      "https://winmotor.gitbook.io/winmotor-automocion/faq/general.md";

    const url = `${basePage}?ask=${encodeURIComponent(question)}${
      goal ? `&goal=${encodeURIComponent(goal)}` : ""
    }`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json,text/plain,*/*",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`GitBook error ${res.status}: ${errorText}`);
    }

    const text = await res.text();
    return text;
  } catch (error) {
    console.error("GitBook ask error:", error);
    return null;
  }
}

function rankResults(query: string, moduleFilter?: string, gitbookContext?: string | null) {
  const q = query.toLowerCase();
  const ctx = (gitbookContext ?? "").toLowerCase();

  const scored = ALL_CONTENT.map((item) => {
    const text = `${item.title} ${item.process} ${item.keywords.join(" ")}`.toLowerCase();

    let score = 0;

    for (const term of q.split(/\s+/).filter(Boolean)) {
      if (text.includes(term)) score += 3;
      if (ctx.includes(term) && text.includes(term)) score += 2;
    }

    if (moduleFilter && item.module === moduleFilter) score += 4;
    if (ctx.includes(item.process.toLowerCase())) score += 4;
    if (ctx.includes(item.title.toLowerCase())) score += 5;

    return { item, score };
  })
    .filter(({ item, score }) => {
      const matchesModule = moduleFilter ? item.module === moduleFilter : true;
      return matchesModule && score > 0;
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ item }) => item);

  return scored;
}

export async function POST(req: NextRequest) {
  const { query, module: moduleFilter } = await req.json();

  if (!query || typeof query !== "string" || query.trim().length === 0) {
    return NextResponse.json({ error: "Query requerida" }, { status: 400 });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  console.log("OPENROUTER_API_KEY loaded:", !!apiKey);

  const gitbookContext = await askGitBook(
    query,
    "Responder con pasos concretos en Winmotor V7 y recomendar el recurso más útil"
  );

  if (!apiKey) {
    const results = rankResults(query, moduleFilter, gitbookContext);

    return NextResponse.json({
      answer:
        gitbookContext ||
        "Resultados basados en palabras clave y documentación disponible.",
      results: results.length > 0 ? results : keywordFallback(query, moduleFilter),
      aiEnabled: false,
      usedGitBook: !!gitbookContext,
    });
  }

  const catalogSummary = buildCatalogSummary();

  const systemPrompt = `Eres el asistente de Winmotor Academy, especialista en el ERP Winmotor V7.
Debes responder SIEMPRE en español, de forma práctica, específica y útil.
Tu prioridad es:
1. Usar la información documental proporcionada de GitBook si existe.
2. Recomendar recursos reales del catálogo local (vídeos y ayuda).
3. No inventar rutas, menús ni procesos que no aparezcan en el contexto.
4. Si la documentación no es suficiente, dilo de forma honesta.

Responde SIEMPRE en JSON válido con este formato exacto:
{"answer":"<respuesta explicativa>","indices":[0,3,7]}

Catálogo local de recursos:
${catalogSummary}

Contexto documental de GitBook:
${gitbookContext || "Sin contexto documental adicional."}`;

  try {
    const openrouterRes = await fetch(
      `${process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1"}/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
          "X-Title": "academia-winmotor",
        },
        body: JSON.stringify({
          model: process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini",
          temperature: 0.2,
          max_tokens: 700,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: query },
          ],
        }),
      }
    );

    if (!openrouterRes.ok) {
      const errorText = await openrouterRes.text();
      throw new Error(`OpenRouter error ${openrouterRes.status}: ${errorText}`);
    }

    const data = await openrouterRes.json();
    const raw = data.choices?.[0]?.message?.content ?? "{}";

    let parsed: { answer: string; indices: number[] };

    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = { answer: raw, indices: [] };
    }

    const indexedResults = (parsed.indices ?? [])
      .filter((i: number) => i >= 0 && i < ALL_CONTENT.length)
      .map((i: number) => ALL_CONTENT[i]);

    const rankedResults = rankResults(query, moduleFilter, gitbookContext);

    const mergedResults = [
      ...indexedResults,
      ...rankedResults.filter(
        (r) => !indexedResults.some((existing) => existing.id === r.id)
      ),
    ];

    const filteredResults = moduleFilter
      ? mergedResults.filter((r) => r.module === moduleFilter)
      : mergedResults;

    return NextResponse.json({
      answer: parsed.answer,
      results: filteredResults.slice(0, 8),
      aiEnabled: true,
      usedGitBook: !!gitbookContext,
    });
  } catch (error) {
    console.error("AI search error:", error);

    const results = rankResults(query, moduleFilter, gitbookContext);

    return NextResponse.json({
      answer:
        gitbookContext ||
        "No se pudo conectar con la IA. Resultados por palabras clave.",
      results: results.length > 0 ? results : keywordFallback(query, moduleFilter),
      aiEnabled: false,
      usedGitBook: !!gitbookContext,
    });
  }
}
