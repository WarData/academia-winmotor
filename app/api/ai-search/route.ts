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
    url: null,
    keywords: ["ayuda", "soporte", "incidencias"],
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

export async function POST(req: NextRequest) {
  const { query, module: moduleFilter } = await req.json();

  if (!query || typeof query !== "string" || query.trim().length === 0) {
    return NextResponse.json({ error: "Query requerida" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  console.log("OPENAI_API_KEY loaded:", !!apiKey);

  if (!apiKey) {
    const results = keywordFallback(query, moduleFilter);
    return NextResponse.json({
      answer: "Resultados basados en palabras clave (sin IA configurada).",
      results,
      aiEnabled: false,
    });
  }

  const catalogSummary = buildCatalogSummary();

  const systemPrompt = `Eres el asistente de Winmotor Academy, especialista en el ERP Winmotor V7.
Tienes acceso a un catálogo de recursos de aprendizaje (vídeos de YouTube y artículos de ayuda de GitBook).
Cuando el usuario hace una pregunta, debes:
1. Dar una respuesta concisa y útil en español sobre cómo resolver su consulta en Winmotor.
2. Indicar los índices del catálogo (campo "indices") de los recursos más relevantes (máximo 6), ordenados por relevancia.
Responde SIEMPRE en JSON válido con este formato exacto:
{"answer":"<respuesta explicativa>","indices":[0,3,7]}
Catálogo de recursos disponibles:
${catalogSummary}`;

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.2,
        max_tokens: 600,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query },
        ],
      }),
    });

    if (!openaiRes.ok) {
      const errorText = await openaiRes.text();
      throw new Error(`OpenAI error ${openaiRes.status}: ${errorText}`);
    }

    const data = await openaiRes.json();
    const raw = data.choices?.[0]?.message?.content ?? "{}";

    let parsed: { answer: string; indices: number[] };

    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = { answer: raw, indices: [] };
    }

    const results = (parsed.indices ?? [])
      .filter((i: number) => i >= 0 && i < ALL_CONTENT.length)
      .map((i: number) => ALL_CONTENT[i]);

    const filteredResults = moduleFilter
      ? results.filter((r) => r.module === moduleFilter)
      : results;

    return NextResponse.json({
      answer: parsed.answer,
      results: filteredResults,
      aiEnabled: true,
    });
  } catch (error) {
    console.error("AI search error:", error);

    const results = keywordFallback(query, moduleFilter);

    return NextResponse.json({
      answer: "No se pudo conectar con la IA. Resultados por palabras clave.",
      results,
      aiEnabled: false,
    });
  }
}
