export type NavigationItem = {
  name: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Ventas", href: "/academy/sales" },
  { name: "Stock", href: "/academy/stock" },
  { name: "Taller", href: "/academy/workshop" },
  { name: "Vehículos", href: "/academy/vehicles" },
  { name: "Finanzas", href: "/academy/finance" },
  { name: "Soporte", href: "/support" }
];

export const moduleItems = navigationItems.filter((item) => item.name !== "Inicio");
