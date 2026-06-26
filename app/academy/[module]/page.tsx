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
  params: {
    module: string;
  };
};

export function generateStaticParams() {
  return Object.keys(moduleTitles).map((module) => ({
    module
  }));
}

export default function AcademyModulePage({ params }: AcademyModulePageProps) {
  const title = moduleTitles[params.module as keyof typeof moduleTitles];

  if (!title) {
    notFound();
  }

  return (
    <ModuleContentPage
      module={params.module as keyof typeof moduleTitles}
      title={title}
    />
  );
}
