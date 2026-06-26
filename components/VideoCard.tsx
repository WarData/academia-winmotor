import Link from "next/link";
import { PlayCircle } from "lucide-react";

type VideoCardProps = {
  id: string;
  title: string;
  module: string;
  process: string;
};

const moduleLabels: Record<string, string> = {
  sales: "Ventas",
  stock: "Stock",
  workshop: "Taller",
  vehicles: "Vehículos",
  finance: "Finanzas",
  support: "Soporte"
};

export function VideoCard({ id, title, module, process }: VideoCardProps) {
  return (
    <Link
      href={`/academy/lesson/${id}`}
      className="rounded-lg border border-line bg-panel p-5 shadow-soft transition hover:border-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-50 text-accent">
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-1 text-sm text-ink/58">Objeto de aprendizaje en vídeo</p>
          </div>
        </div>
        <span className="shrink-0 rounded-md border border-line px-2.5 py-1 text-xs font-semibold uppercase text-ink/62">
          {moduleLabels[module] ?? module}
        </span>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <code className="rounded-md bg-surface px-2.5 py-1 text-xs font-semibold text-ink/72">
          {process}
        </code>
        <span className="inline-flex h-9 items-center rounded-md bg-accent px-3 text-sm font-semibold text-white">
          Abrir lección
        </span>
      </div>
    </Link>
  );
}
