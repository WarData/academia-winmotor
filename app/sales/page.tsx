// app/academy/sales/page.tsx

import { modules } from "@/data/modules";
import { VideoCard } from "@/components/VideoCard";

const salesModule = modules.find((m) => m.slug === "sales");

export default function SalesModulePage() {
  if (!salesModule) {
    return null;
  }

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase text-accent">
          Winmotor Academy · Ventas
        </p>
        <h1 className="text-2xl font-semibold text-ink">
          {salesModule.name}
        </h1>
        <p className="text-sm text-ink/66">
          {salesModule.description}
        </p>
      </header>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-ink">
          Vídeos de formación
        </h2>
        <p className="text-sm text-ink/66">
          Esta sección reúne los vídeos oficiales de Winmotor sobre operaciones
          comerciales, documentos de venta y cobros relacionados, para que el
          flujo completo de ventas quede cubierto.
        </p>

        <div className="space-y-4">
          {salesModule.videos.map((video, index) => (
            <VideoCard
              key={video.url}
              id={`sales-${index + 1}`}
              title={video.title}
              module={salesModule.slug}
              process={video.title}
              url={video.url}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3 border-t border-line pt-4">
        <h2 className="text-lg font-semibold text-ink">
          Centro de Ayuda Winmotor Automoción
        </h2>
        <p className="text-sm text-ink/66">
          Consulta la documentación oficial de Winmotor Automoción para ampliar
          información sobre ventas, configuración de entidades, artículos y
          contabilidad relacionada.
        </p>
        <ul className="space-y-2">
          {salesModule.helpLinks.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:underline"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
