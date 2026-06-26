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

export const modules: ModuleItem[] = [
  {
    name: "Ventas",
    slug: "sales",
    href: "/academy/sales",
    description:
      "Operaciones comerciales con VN/VO, accesorios y facturación básica y avanzada.",
    videos: [
      {
        title: "Vídeo 1.3.14 Pasos de una operación comercial con VO",
        url: "https://www.youtube.com/watch?v=gRMGfQYIPQc",
      },
      {
        title: "Vídeo 1.3.13 Gestión de accesorios en operaciones",
        url: "https://www.youtube.com/watch?v=AQJE1jEXfQ",
      },
      {
        title: "Vídeo 1.3.10 Pasos de una operación comercial básica",
        url: "https://www.youtube.com/watch?v=xpaBekYUKCA",
      },
      {
        title:
          "Vídeo 1.3.11 Asignar bastidores a operaciones comerciales",
        url: "https://www.youtube.com/watch?v=MxMwbYHD3EU",
      },
      {
        title:
          "Vídeo 1.3.9 Cambiar propietario de un vehículo - 2 métodos",
        url: "https://www.youtube.com/watch?v=-UXObPa5wdY",
      },
      {
        title:
          "Vídeo 1.3.8 Cambiar modelo de vehículo o el color",
        url: "https://www.youtube.com/watch?v=7LsMIK6JilM",
      },
      {
        title:
          "Vídeo 1.3.7 Convertir un bastidor a unidad demo",
        url: "https://www.youtube.com/watch?v=57t7fakqEuk",
      },
      {
        title: "Vídeo 1.0.7 Copiar y pegar entre documentos de todo tipo",
        url: "https://www.youtube.com/watch?v=V7pImjf9_SM",
      },
      {
        title:
          "Vídeo 1.0.6 Operaciones genéricas - filtrar - partir - multipartir - listas virtuales",
        url: "https://www.youtube.com/watch?v=Sc97JwkvPsk",
      },
      {
        title:
          "Vídeo 1.8.1 Grabación de un presupuesto de ventas",
        url: "https://www.youtube.com/watch?v=s2j5MX-R9Dk",
      },
      {
        title: "Vídeo 1.8.2 Grabación de un pedido de ventas",
        url: "https://www.youtube.com/watch?v=KeO13XJtS1U",
      },
      {
        title: "Vídeo 1.8.3 Grabación de un albarán de ventas",
        url: "https://www.youtube.com/watch?v=7PDRiTFo3uY",
      },
      {
        title: "Vídeo 1.8.14 Panel de Venta Directa",
        url: "https://www.youtube.com/watch?v=nAimOLfmR-U",
      },
      {
        title: "Vídeo 1.8.15 Gestión de precios y tarifas de ventas",
        url: "https://www.youtube.com/watch?v=0uoztLP8fxg",
      },
      {
        title: "Vídeo 1.6 Tarifas de ventas",
        url: "https://www.youtube.com/watch?v=c-UtkDVjhM",
      },
      {
        title: "Vídeo 1.4 Artículos y tarifa de artículos",
        url: "https://www.youtube.com/watch?v=5Pd4kE0VN9A",
      },
      {
        title:
          "Vídeo 1.5.5 Datos importantes - Históricos - Tipos de pago - Cuenta contable",
        url: "https://www.youtube.com/watch?v=i86LcnRVEQ8",
      },
      {
        title: "Vídeo 1.5.4 Riesgo de entidades",
        url: "https://www.youtube.com/watch?v=nJxXbnLtsB4",
      },
      {
        title:
          "Vídeo 1.5.3 Cuentas bancarias - por defecto - activa",
        url: "https://www.youtube.com/watch?v=amCt3axI3VU",
      },
      {
        title: "Vídeo 1.5.2 Relaciones de entidades",
        url: "https://www.youtube.com/watch?v=ghTgGbROojA",
      },
      {
        title: "Vídeo 1.5.1 Alta de entidad",
        url: "https://www.youtube.com/watch?v=KjwttXdZ4Hs",
      },
    ],
    helpLinks: [
      {
        title: "Centro de Ayuda Winmotor Automoción - Ventas",
        url: "https://winmotor.gitbook.io/winmotor-automocion",
      },
    ],
  },
  {
    name: "Taller",
    slug: "workshop",
    href: "/academy/workshop",
    description:
      "Gestión de citas, órdenes de reparación, calendario de taller y seguimiento de trabajos.",
    videos: [
      {
        title: "Vídeo 1.10.5 Agenda de taller y calendarios",
        url: "https://www.youtube.com/watch?v=NODJ3-mUAQQ",
      },
      {
        title: "Vídeo 1.10.3 Gestión de siniestros",
        url: "https://www.youtube.com/watch?v=um1A1NwBBSM",
      },
      {
        title: "Vídeo 1.10.2 Gestión de franquicias",
        url: "https://www.youtube.com/watch?v=7EUZalAwK5A",
      },
      {
        title: "Vídeo 1.10.1 Fichaje de los mecánicos",
        url: "https://www.youtube.com/watch?v=tJakqZndiS4",
      },
      {
        title: "Vídeo 3.0.1 Cita con cliente y vehículos existentes",
        url: "https://www.youtube.com/watch?v=00V2ruQBhZk",
      },
      {
        title: "Vídeo 3.0.2 Cita con cliente y vehículos no existentes",
        url: "https://www.youtube.com/watch?v=KKzfiCGydFA",
      },
      {
        title:
          "Vídeo 3.0.3 Alta de cita con vehículo de cortesía",
        url: "https://www.youtube.com/watch?v=7ccR6ds1DLA",
      },
      {
        title: "Vídeo 3.0.4 Renovación de una cita",
        url: "https://www.youtube.com/watch?v=0gXnpIllq60",
      },
      {
        title: "Vídeo 3.0.5 Alta de OR desde cita",
        url: "https://www.youtube.com/watch?v=b6WJnRntpNA",
      },
      {
        title: "Vídeo 2.0.1 Alta de OR Vehículo Cliente",
        url: "https://www.youtube.com/watch?v=nR_vv-Zn-xw",
      },
      {
        title: "Vídeo 2.0.2 Alta de OR Tempario y usos",
        url: "https://www.youtube.com/watch?v=E83_CXifvbI",
      },
      {
        title: "Vídeo 2.0.3 Alta de OR Confirmación",
        url: "https://www.youtube.com/watch?v=CP6VhvQwBG8",
      },
      {
        title: "Vídeo 2.0.4 Alta de OR Facturación",
        url: "https://www.youtube.com/watch?v=Qcnel8GHAYI",
      },
      {
        title:
          "Vídeo 1.3.6 Alta de vehículo de taller en OR - VO en albarán de compra - cesiones",
        url: "https://www.youtube.com/watch?v=LSkr9xnBvHU",
      },
    ],
    helpLinks: [
      {
        title: "Centro de Ayuda Winmotor Automoción - Taller",
        url: "https://winmotor.gitbook.io/winmotor-automocion",
      },
    ],
  },
];
