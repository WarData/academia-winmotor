import { getFirstFlowItem, getFlowItems } from "@/data/content";
import { HelpCard } from "@/components/HelpCard";
import { StartLearningButton } from "@/components/start-learning-button";
import { VideoCard } from "@/components/VideoCard";
import Link from "next/link";

type ModuleContentPageProps = {
  module: "sales" | "stock" | "workshop" | "vehicles" | "finance" | "support";
  title: string;
};

type LearningContentItem = {
  id: string;
  title: string;
  module: string;
  process: string;
  type: "video" | "help";
  source: "youtube" | "gitbook";
};

export function ModuleContentPage({ module, title }: ModuleContentPageProps) {
  const items = getFlowItems(module) as LearningContentItem[];
  const firstItem = getFirstFlowItem(module);
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">Ruta de aprendizaje</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">{title}</h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-ink/66">
            Sigue paso a paso la secuencia predefinida de {title.toLowerCase()}.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <StartLearningButton module={module} firstId={firstItem?.id} />
          <Link
            href={`/academy/${module}/quiz`}
            className="inline-flex items-center gap-2 rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-white transition-colors"
          >
            Hacer Quiz
          </Link>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {items.map((item) =>
          item.type === "video" ? (
            <VideoCard
              key={item.id}
              id={item.id}
              title={item.title}
              module={item.module}
              process={item.process}
            />
          ) : (
            <HelpCard
              key={item.id}
              id={item.id}
              title={item.title}
              module={item.module}
              process={item.process}
            />
          )
        )}
      </div>
    </section>
  );
}
