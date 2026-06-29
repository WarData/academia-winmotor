import { NextRequest, NextResponse } from 'next/server';
import { learningContent, supportCases } from '@/data/content';

// Catalog of all searchable content
const ALL_CONTENT = [
  ...(learningContent as any[]).map((item: any) => ({
    id: item.id,
    title: item.title,
    module: item.module,
    process: item.process ?? '',
    type: item.type as 'video' | 'help',
    source: item.source ?? 'youtube',
    url: item.url ?? null,
    keywords: item.keywords ?? [],
  })),
  ...(supportCases as any[]).map((sc: any) => ({
    id: sc.id,
    title: sc.title,
    module: sc.module ?? '',
    process: sc.process ?? '',
    type: sc.type as 'video' | 'help',
    source: 'support',
    url: null,
    keywords: sc.keywords ?? [],
  })),
];

function buildCatalogSummary() {
  return ALL_CONTENT.map((item, idx) =>
    `[${idx}] (${item.type}/${item.source}) "${item.title}" | modulo:${item.module} | proceso:${item.process} | keywords:${item.keywords.join(',')}`
  ).join('\n');
}

export async function POST(req: NextRequest) {
  const { query, module: moduleFilter } = await req.json();

  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return NextResponse.json({ error: 'Query requerida' }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Fallback: keyword search without AI
    const q = query.toLowerCase();
    const results = ALL_CONTENT.filter(item => {
      const text = `${item.title} ${item.process} ${item.keywords.join(' ')}`.toLowerCase();
      return q.split(/\s+/).some(term => text.includes(term));
    }).slice(0, 8);
    return NextResponse.json({
      answer: 'Resultados basados en palabras clave (sin IA configurada).',
      results,
      aiEnabled: false,
    });
  }

  const catalogSummary = buildCatalogSummary();
  const systemPrompt = `Eres el asistente de Winmotor Academy, especialista en el ERP Winmotor V7.
Tienes acceso a un catalogo de recursos de aprendizaje (videos de YouTube y articulos de ayuda de GitBook).
Cuando el usuario hace una pregunta, debes:
1. Dar una respuesta concisa y util en espanol sobre como resolver su consulta en Winmotor.
2. Indicar los indices del catalogo (campo "indices") de los recursos MAS relevantes (maximo 6), ordenados por relevancia.
Responde SIEMPRE en JSON valido con este formato exacto:
{"answer": "<respuesta explicativa>", "indices": [0, 3, 7]}

Catalogo de recursos disponibles:
${catalogSummary}`;

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.2,
        max_tokens: 600,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: query },
        ],
      }),
    });

    if (!openaiRes.ok) {
      throw new Error(`OpenAI error: ${openaiRes.status}`);
    }

    const data = await openaiRes.json();
    const raw = data.choices?.[0]?.message?.content ?? '{}';

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
      ? results.filter((r: any) => r.module === moduleFilter)
      : results;

    return NextResponse.json({
      answer: parsed.answer,
      results: filteredResults,
      aiEnabled: true,
    });
  } catch (err) {
    // Graceful degradation: keyword fallback
    const q = query.toLowerCase();
    const results = ALL_CONTENT.filter(item => {
      const text = `${item.title} ${item.process} ${item.keywords.join(' ')}`.toLowerCase();
      return q.split(/\s+/).some(term => text.includes(term));
    }).slice(0, 8);
    return NextResponse.json({
      answer: 'No se pudo conectar con la IA. Resultados por palabras clave.',
      results,
      aiEnabled: false,
    });
  }
}
