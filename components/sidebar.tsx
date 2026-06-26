"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Banknote,
  Car,
  ChartNoAxesCombined,
  Headphones,
  Home,
  PackageSearch,
  Wrench
} from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

const icons = {
  Inicio: Home,
  Ventas: ChartNoAxesCombined,
  Stock: PackageSearch,
  Taller: Wrench,
  Vehículos: Car,
  Finanzas: Banknote,
  Soporte: Headphones
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-line bg-ink text-white lg:block">
      <div className="flex h-full min-h-screen flex-col">
        <div className="border-b border-white/10 px-6 py-6">
          <p className="text-lg font-semibold tracking-normal">Winmotor Academy</p>
          <p className="mt-1 text-sm text-white/60">Panel de operaciones</p>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          {navigationItems.map((item) => {
            const Icon = icons[item.name as keyof typeof icons];
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition",
                  isActive
                    ? "bg-white text-ink shadow-sm"
                    : "text-white/72 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
