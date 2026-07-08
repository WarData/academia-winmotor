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
      className="group flex min-h-40 flex-col justify-between wm-card p-5 transition hover:-translate-y-0.5 hover:border-red-700"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#1c1c1c] text-red-500">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold text-red-500 transition group-hover:translate-x-1">
          Abrir
        </span>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">{item.name}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {descriptions[item.name as keyof typeof descriptions]}
        </p>
      </div>
    </Link>
  );
}
