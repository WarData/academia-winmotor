import Link from 'next/link';
import type { ModuleItem } from '@/data/modules';
import { modules } from '@/data/modules';

const homeModules: ModuleItem[] = modules;

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">Panel</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">Inicio</h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-ink/66">
            Elige un modulo de Winmotor Academy para continuar con la formacion
            sobre ventas y taller, basada en videos oficiales y el Centro de Ayuda.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-ink">Modulos de formacion</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homeModules.map((module) => (
            <Link
              key={module.slug}
              href={module.href}
              className="flex flex-col justify-between rounded-lg border border-ink/10 bg-white/2 p-4 text-left text-sm shadow-sm transition hover:border-accent hover:text-accent"
            >
              <div>
                <h4 className="text-base font-semibold text-ink">{module.name}</h4>
                <p className="mt-1 text-xs text-ink/66">{module.description}</p>
              </div>
              <p className="mt-3 text-xs font-medium text-ink/66">
                {module.videos.length} videos vinculados
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
