// data/modules.ts

export type ModuleVideo = {
  title: string;
  url: string;
};

export type ModuleHelpLink = {
  title: string;
  url: string;
};

export type ModuleItem = {
  name: string;           // Nombre del módulo (Ventas, Taller...)
  slug: string;           // Identificador interno, ej. "sales", "workshop"
  href: string;           // Ruta dentro de tu app, ej. "/academy/workshop"
  description: string;    // Qué cubre el módulo a nivel funcional
  videos: ModuleVideo[];  // Vídeos oficiales de iniciación / opciones básicas
  helpLinks: ModuleHelpLink[]; // Enlaces al Centro de Ayuda Winmotor Automoción
};

export const modules: ModuleItem[] 