import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getContentById,
  getFlowItems,
  getFlowStepNumber,
  getHelpText,
  getNextContentItem,
  getStepInstructions,
  learningContent,
  resolveKnowledgeResource
} from "@/data/content";
import { HelpArticle } from "@/components/help-article";
import { NextStepButton } from "@/components/next-step-button";
import { VideoLearningObject } from "@/components/video-learning-object";

const moduleLabels: Record<string, string> = {
  sales: "Ventas",
  stock: "Stock",
  workshop: "Taller",
  vehicles: "Vehiculos",
  finance: "Finanzas",
  support: "Soporte"
};

type AcademyLessonPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return learningContent.map((item) => ({
    id: item.id
  }));
}

export default async function AcademyLessonPage({ params }: AcademyLessonPageProps) {
  const { id } = await params;
  const item = getContentById(id);
  if (!item) {
    notFound();
  }
  const nextItem = getNextContentItem(item.id);
  const flowItems = getFlowItems(item.module);
  const stepNumber = getFlowStepNumber(item.id);
  const steps = getStepInstructions(item) as string[];
  const resource = resolveKnowledgeResource(item);
  const helpHref = resource?.kind === "help" ? String(resource?.href ?? "") : "";

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">
            {moduleLabels[item.module] ?? item.module} paso {stepNumber} de {flowItems.length}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">{item.title}</h2>
          <p className="mt-2 text-sm text-ink/58">
            {item.source === "youtube" ? "Lista de YouTube" : "Ayuda de GitBook"}
          </p>
        </div>
        <Link
          href={`/academy/${item.module}`}
          className="inline-flex h-10 items-center rounded-md border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
        >
          Volver al módulo
        </Link>
      </div>

      {item.type === "video" ? (
        <VideoLearningObject
          title={String(item.title)}
          module={String(moduleLabels[item.module] ?? item.module)}
          process={String(item.process)}
          href={String(item.url)}
        />
      ) : (
        <HelpArticle
          title={String(item.title)}
          body={String(getHelpText(item))}
          href={helpHref}
        />
      )}

      <div className="rounded-lg border border-line bg-panel p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">Instrucciones</p>
            <h3 className="mt-2 text-xl font-semibold text-ink">Paso a paso</h3>
          </div>
          <NextStepButton
            module={item.module}
            currentId={item.id}
            nextId={nextItem?.id}
          />
        </div>
        <ol className="mt-6 space-y-3">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm leading-6 text-ink/72">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-teal-50 text-sm font-semibold text-accent">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
