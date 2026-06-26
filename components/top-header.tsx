"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { HeaderSearch } from "@/components/header-search";

export function TopHeader() {
  const pathname = usePathname();
  const currentPage =
    navigationItems.find((item) => item.href === pathname)?.name ?? "Panel";

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-panel/95 backdrop-blur">
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            aria-label="Abrir navegación"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-ink lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase text-accent">Winmotor Academy</p>
            <h1 className="truncate text-xl font-semibold text-ink">{currentPage}</h1>
          </div>
        </div>

        <div className="order-3 w-full md:order-none md:flex md:flex-1 md:justify-center">
          <HeaderSearch />
        </div>

        <Link
          href="/support"
          className="hidden h-10 items-center rounded-md bg-accent px-4 text-sm font-semibold text-white transition hover:bg-teal-800 sm:inline-flex"
        >
          Pedir soporte
        </Link>
      </div>
    </header>
  );
}
