import Link from "next/link";

type PlaceholderPageProps = {
  title: string;
};

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="max-w-5xl">
      <div className="rounded-lg border border-line bg-panel p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase text-accent">Módulo pendiente</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink">{title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/68">
          Esta página está preparada para el siguiente flujo de Winmotor Academy.
          Más adelante se podrán añadir datos, tablas, filtros y acciones detalladas.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-10 items-center rounded-md border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
