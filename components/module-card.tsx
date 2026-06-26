import Link from "next/link";
import {
  Banknote,
  Car,
  ChartNoAxesCombined,
  Headphones,
  PackageSearch,
  Wrench
} from "lucide-react";
import { NavigationItem } from "@/data/navigation";

const icons = {
  Ventas: ChartNoAxesCombined,
  Stock: PackageSearch,
  Taller: Wrench,
  Vehículos: Car,
  Finanzas: Banknote,
  Soporte: Headphones
};

const descriptions = {
  Ventas: "Presupuestos, pedidos, facturas y cobros.",
  Stock: "Disponibilidad, movimientos e inventario.",
  Taller: "Citas, órdenes de reparación y facturación.",
  Vehículos: "Altas, stock y transferencias de vehículos.",
  Finanzas: "Caja, pagos y apuntes contables.",
  Soporte: "Incidencias, ayuda y seguimiento de casos."
};

type ModuleCardProps = {
  item: NavigationItem;
};

export function ModuleCard({ item }: ModuleCardProps) {
  const Icon = icons[item.name as keyof typeof icons];

  return (
    <Link
      href={item.href}
      className="group flex min-h-40 flex-col justify-between rounded-lg border border-line bg-panel p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-accent">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold text-accent transition group-hover:translate-x-1">
          Abrir
        </span>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-ink">{item.name}</h2>
        <p className="mt-2 text-sm leading-6 text-ink/62">
          {descriptions[item.name as keyof typeof descriptions]}
        </p>
      </div>
    </Link>
  );
}
