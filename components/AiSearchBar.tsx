'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FileQuestion, PlayCircle, Search, Sparkles, X, Loader2 } from 'lucide-react';

interface AiResult {
  id: string;
  title: string;
  module: string;
  process: string;
  type: 'video' | 'help';
  source: string;
  url: string | null;
  keywords: string[];
}

interface AiSearchBarProps {
  moduleFilter?: string;
  placeholder?: string;
}

const moduleLabels: Record<string, string> = {
  sales: 'Ventas', stock: 'Stock', workshop: 'Taller',
  vehicles: 'Vehiculos', finance: 'Finanzas', support: 'Soporte',
};

export function AiSearchBar({ moduleFilter, placeholder }: AiSearchBarProps) {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [results, setResults] = useState<AiResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doSearch = async (q: string) => {
    if (!q.trim()) {
      setAnswer(null); setResults([]); setHasSearched(false); setError(null);
      return;
    }
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/ai-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, module: moduleFilter }),
      });
      if (!res.ok) throw new Error('Error en la busqueda');
      const data = await res.json();
      setAnswer(data.answer);
      setResults(data.results ?? []);
      setAiEnabled(data.aiEnabled ?? false);
      setHasSearched(true);
    } catch {
      setError('No se pudo completar la busqueda. Intentalo de nuevo.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (val: string) => {
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.trim().length >= 3) {
      debounceRef.current = setTimeout(() => doSearch(val), 600);
    } else if (!val.trim()) {
      setAnswer(null); setResults([]); setHasSearched(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    doSearch(query);
  };

  const clear = () => {
    setQuery('');
    setAnswer(null); setResults([]); setHasSearched(false); setError(null);
    inputRef.current?.focus();
  };

  return (
    <div className="ai-search-bar space-y-4">
      {/* Search input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-xl border border-accent/30 bg-panel px-4 py-3 shadow-sm focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20">
        <Sparkles className="h-5 w-5 shrink-0 text-accent" aria-hidden />
        <input
          ref={inputRef}
          value={query}
          onChange={e => handleInput(e.target.value)}
          placeholder={placeholder ?? 'Pregunta sobre Winmotor: facturas, stock, OR...'}
          className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/45"
          autoComplete="off"
        />
        {loading && <Loader2 className="h-4 w-4 animate-spin text-accent" />}
        {!loading && query && <button type="button" onClick={clear} aria-label="Limpiar"><X className="h-4 w-4 text-ink/50 hover:text-ink" /></button>}
        {!loading && <button type="submit" className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white hover:bg-accent/80 transition-colors"><Search className="h-3.5 w-3.5" /></button>}
      </form>

      {/* AI answer */}
      {answer && (
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">
              {aiEnabled ? 'Respuesta IA' : 'Busqueda por palabras clave'}
            </span>
          </div>
          <p className="text-sm text-ink leading-relaxed">{answer}</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
      )}

      {/* Results */}
      {hasSearched && results.length === 0 && !loading && !error && (
        <p className="text-sm text-ink/55 text-center py-4">No se encontraron recursos para esta consulta.</p>
      )}

      {results.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase text-ink/45 tracking-wide">
            {results.length} recurso{results.length !== 1 ? 's' : ''} relevante{results.length !== 1 ? 's' : ''}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {results.map(item => {
              const Icon = item.type === 'video' ? PlayCircle : FileQuestion;
              const href = item.type === 'video'
                ? `/academy/lesson/${item.id}`
                : (item.url ?? `/academy/lesson/${item.id}`);
              const isExternal = href.startsWith('http');
              const content = (
                <div className="flex items-start gap-3 rounded-xl border border-line bg-panel p-4 transition-all hover:border-accent hover:shadow-sm cursor-pointer">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink line-clamp-2">{item.title}</p>
                    <p className="mt-0.5 text-xs text-ink/55">
                      {moduleLabels[item.module] ?? item.module}
                      {item.process ? ` · ${item.process}` : ''}
                    </p>
                    <span className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      item.type === 'video' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {item.type === 'video' ? 'Video' : 'Articulo'}
                    </span>
                  </div>
                </div>
              );
              return isExternal ? (
                <a key={item.id} href={href} target="_blank" rel="noopener noreferrer">{content}</a>
              ) : (
                <Link key={item.id} href={href}>{content}</Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
