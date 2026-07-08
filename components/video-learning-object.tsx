import { PlayCircle } from "lucide-react";

type VideoLearningObjectProps = {
  title: string;
  module: string;
  process: string;
  href: string;
};

export function VideoLearningObject({
  title,
  module,
  process,
  href,
}: VideoLearningObjectProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-700">
          <PlayCircle className="h-7 w-7" aria-hidden="true" />
        </span>

        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase text-red-700">
            Objeto de aprendizaje en vídeo
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-zinc-900">{title}</h3>

          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
            Este vídeo se representa como un paso de proceso estructurado en la
            base de conocimiento de Winmotor. La lista de reproducción queda como
            fuente dinámica en la capa de datos, mientras esta lección se centra
            en el flujo seleccionado.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold uppercase text-zinc-600">
              {module}
            </span>

            <code className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-600">
              {process}
            </code>
          </div>

          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-10 items-center rounded-md bg-red-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-red-800"
          >
            Abrir en YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
