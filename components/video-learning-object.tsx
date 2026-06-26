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
  href
}: VideoLearningObjectProps) {
  return (
    <div className="rounded-lg border border-line bg-panel p-6 shadow-soft">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-teal-50 text-accent">
          <PlayCircle className="h-7 w-7" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase text-accent">Objeto de aprendizaje en vídeo</p>
          <h3 className="mt-2 text-2xl font-semibold text-ink">{title}</h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-ink/68">
            Este vídeo se representa como un paso de proceso estructurado en la
            base de conocimiento de Winmotor. La lista de reproducción queda como
            fuente dinámica en la capa de datos, mientras esta lección se centra
            en el flujo seleccionado.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-md border border-line px-2.5 py-1 text-xs font-semibold uppercase text-ink/62">
              {module}
            </span>
            <code className="rounded-md bg-surface px-2.5 py-1 text-xs font-semibold text-ink/72">
              {process}
            </code>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-10 items-center rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Abrir en YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
