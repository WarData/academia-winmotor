import { notFound } from "next/navigation";
import { ModuleContentPage } from "@/components/module-content-page";

const moduleTitles = {
  sales: "Ventas",
  stock: "Stock",
  workshop: "Taller",
  vehicles: "Vehículos",
  finance: "Finanzas",
  support: "Soporte"
};

type AcademyModulePageProps = {
  params: Promise<{
    module: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(moduleTitles).map((module) => ({
    module
  }));
}

export default async function AcademyModulePage({ params }: AcademyModulePageProps) {
  const { module } = await params;
  const title = moduleTitles[module as keyof typeof moduleTitles];

  if (!title) {
    notFound();
  }

  return (
    <ModuleContentPage
      module={module as keyof typeof moduleTitles}
      title={title}
    />
  );
}
