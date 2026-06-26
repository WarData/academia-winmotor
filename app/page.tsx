import { ModuleCard } from "@/components/module-card";
import { moduleItems } from "@/data/navigation";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">Panel</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">Inicio</h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-ink/66">
            Elige un módulo de Winmotor Academy para continuar.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {moduleItems.map((item) => (
          <ModuleCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
