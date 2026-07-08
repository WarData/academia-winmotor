import Link from "next/link";
import { PlayCircle } from "lucide-react";

type VideoCardProps = {
  id: string;
  title: string;
  module: string;
  process: string;
  url?: string;
};

const moduleLabels: Record<string, string> = {
  sales: "Ventas",
  stock: "Stock",
  workshop: "Taller",
  vehicles: "Vehículos",
  administracion: "Administración y Contabilidad",
  support: "Soporte",
};

export function VideoCard({
  id,
  title,
  module,
  process,
  url,
}: VideoCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-700">
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
          </span>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
            <p className="mt-1 text-sm text-zinc-500">
              Objeto de aprendizaje en vídeo
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold uppercase text-zinc-500">
          {moduleLabels[module] ?? module}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-4">
        <code className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600">
          {process}
        </code>

        {url ? (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-md bg-red-700 px-3 text-sm font-semibold text-white transition-colors hover:bg-red-800"
          >
            Abrir en YouTube
          </Link>
        ) : (
          <span className="inline-flex h-9 items-center rounded-md bg-zinc-100 px-3 text-sm font-semibold text-zinc-400">
            Sin enlace
          </span>
        )}
      </div>
    </article>
  );
}
