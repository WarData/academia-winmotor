import { sources } from "./sources";

function getGitBookUrl(module) {
  const modulePath = sources.gitbook.modules[module] ?? "";
  return new URL(modulePath.replace(/^\/\//g, ""), sources.gitbook.base).toString();
}

export const learningContent = [
  {
    id: "sales-create-customer",
    title: "Crear cliente",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=g0mC7oyfVnc",
    keywords: ["ventas", "cliente", "entidad", "alta entidad"]
  },
  {
    id: "sales-create-quote",
    title: "Crear presupuesto",
    module: "sales",
    process: "create_quote",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=AOr1jfAXfO",
    keywords: ["ventas", "presupuesto", "oferta"]
  },
  {
    id: "sales-create-order",
    title: "Crear pedido",
    module: "sales",
    process: "create_order",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=JZkmbKDluqQ",
    keywords: ["ventas", "pedido", "pedido de cliente"]
  },
  {
    id: "sales-create-invoice",
    title: "Crear factura",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=7PDR1tTroJcY",
    keywords: ["ventas", "factura", "facturación"]
  },
  {
    id: "sales-payment",
    title: "Cobro",
    module: "sales",
    process: "payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Kq6uO1qGPA8",
    keywords: ["ventas", "pago", "cobro", "caja", "recibo"]
  },
  {
    id: "stock-check",
    title: "Consultar stock",
    module: "stock",
    process: "stock_check",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=cU7Tw25nZQU",
    keywords: ["stock", "inventario", "existencias", "almacén"]
  },
  {
    id: "stock-movement",
    title: "Movimiento de stock",
    module: "stock",
    process: "stock_movement",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=i8bLsnNFoq8",
    keywords: ["stock", "movimiento", "traspaso", "entrada", "salida"]
  },
  {
    id: "stock-transfer",
    title: "Traspaso entre almacenes",
    module: "stock",
    process: "stock_transfer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=UtkQVjNA",
    keywords: ["stock", "traspaso", "almacén", "movimiento"]
  },
  {
    id: "administracion-alta-cuentas-tesoreria",
    title: "Alta de cuentas de tesorería",
    module: "administracion",
    process: "cash_register",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Y36AsanSAqM",
    keywords: ["administracion", "tesorería", "cuentas", "caja", "banco"]
  },
  {
    id: "administracion-alta-conceptos-tesoreria",
    title: "Alta de conceptos de tesorería",
    module: "administracion",
    process: "treasury_concepts",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=CiWzkWyfdrg",
    keywords: ["administracion", "tesorería", "conceptos", "configuración"]
  },
  {
    id: "administracion-arqueo-cierre-caja",
    title: "Arqueo y cierre de caja",
    module: "administracion",
    process: "cash_closing",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dRtFfjg_exY",
    keywords: ["administracion", "caja", "arqueo", "cierre"]
  },
  {
    id: "administracion-factura-gastos",
    title: "Alta de factura de gastos",
    module: "administracion",
    process: "expense_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=uUxXY5UKEoY",
    keywords: ["administracion", "gastos", "factura", "compras"]
  },
  {
    id: "administracion-cobro-factura",
    title: "Cobro de factura",
    module: "administracion",
    process: "invoice_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Kq6uO1qGPA8",
    keywords: ["administracion", "cobro", "factura", "pago"]
  },
  {
    id: "administracion-asientos-contables",
    title: "Crear asientos contables",
    module: "administracion",
    process: "accounting_entries",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=GnnjPbUOVzc",
    keywords: ["administracion", "contabilidad", "asientos", "apuntes"]
  },
  {
    id: "workshop-reception",
    title: "Recepción de vehículo",
    module: "workshop",
    process: "vehicle_reception",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=v7f74kaLuE",
    keywords: ["taller", "recepción", "vehículo", "OR"]
  },
  {
    id: "workshop-or",
    title: "Crear OR",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=3cn__RSqN",
    keywords: ["taller", "OR", "orden reparación", "trabajo"]
  },
  {
    id: "vehicles-transfer",
    title: "Traspaso de vehículo",
    module: "vehicles",
    process: "vehicle_transfer",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("vehicles"),
    keywords: ["vehículos", "traspaso", "movimiento"]
  },
  {
    id: "support-help",
    title: "Centro de ayuda",
    module: "support",
    process: "general_help",
    type: "help",
    source: "gitbook",
    url: sources.gitbook.base,
    keywords: ["soporte", "ayuda", "ayuda general"]
  }
];

export const moduleLabels = {
  sales: "Ventas",
  stock: "Stock",
  administracion: "Administración y Contabilidad",
  workshop: "Taller",
  vehicles: "Vehículos",
  support: "Soporte"
};

export const sourceLabels = {
  youtube: "Vídeo tutorial",
  gitbook: "Documentación"
};

export function getContentByModule(module) {
  return learningContent.filter(item => item.module === module);
}

export function getContentById(id) {
  return learningContent.find(item => item.id === id);
}

export function getFlowItems(module) {
  return moduleLearningFlows[module] || [];
}

export function getFirstFlowItem(module) {
  const flowItems = getFlowItems(module);
  return flowItems.length > 0 ? getContentById(flowItems[0]) : undefined;
}

export function getFlowStepNumber(currentId) {
  const currentItem = getContentById(currentId);
  
  if (!currentItem) {
    return 0;
  }
  
  const moduleItems = getFlowItems(currentItem.module);
  const currentIndex = moduleItems.findIndex((item) => item.id === currentId);
  
  return currentIndex + 1;
}

export function getNextContentItem(currentId) {
  const currentItem = getContentById(currentId);
  
  if (!currentItem) {
    return undefined;
  }
  
  const moduleItems = getFlowItems(currentItem.module);
  const currentIndex = moduleItems.findIndex((item) => item.id === currentId);
  
  return moduleItems[currentIndex + 1];
}

export function getGitBookFallbackUrl(module) {
  return getGitBookUrl(module);
}

export function hasVideoContent(item) {
  return item.type === "video" && item.source === "youtube";
}

export function resolveKnowledgeResource(item) {
  if (hasVideoContent(item)) {
    return {
      kind: "video",
      source: item.source,
      process: item.process
    };
  }
  
  return {
    kind: "help",
    href: getGitBookFallbackUrl(item.module),
    body: `${item.title} está disponible en ${sourceLabels[item.source] ?? item.source} para el módulo ${moduleLabels[item.module] ?? item.module}.`
  };
}

export function getStepInstructions(item) {
  return processSteps[item.process] ?? [
    `Abre el módulo ${moduleLabels[item.module] ?? item.module} desde el panel de Winmotor Academy.`,
    `Selecciona el proceso: ${item.process}.`,
    `Sigue la guía de la lección para ${item.title.toLowerCase()}.`,
    `Revisa el resultado antes de pasar al siguiente flujo.`
  ];
}

export function getHelpText(item) {
  return resolveKnowledgeResource(item).body;
}

const processSteps = {
  create_customer: [
    "Accede al módulo de Ventas",
    "Haz clic en 'Nueva Entidad' o 'Nuevo Cliente'",
    "Rellena los datos del cliente: nombre, NIF, dirección, teléfono",
    "Guarda el cliente para poder utilizarlo en operaciones"
  ],
  create_quote: [
    "Accede al módulo de Ventas",
    "Selecciona 'Crear Presupuesto'",
    "Elige el cliente y añade productos o servicios",
    "Revisa los importes y guarda el presupuesto"
  ],
  create_order: [
    "Accede al módulo de Ventas",
    "Crea un nuevo pedido desde un presupuesto o directamente",
    "Añade los artículos necesarios",
    "Confirma el pedido para generar albarán"
  ],
  create_invoice: [
    "Accede al módulo de Ventas",
    "Genera la factura desde el pedido o albarán",
    "Verifica los datos y el importe total",
    "Guarda y envía la factura al cliente"
  ],
  payment: [
    "Accede a la factura o desde el módulo de Tesorería",
    "Haz clic en 'Cobrar' o 'Registrar pago'",
    "Selecciona el método de pago",
    "Confirma el cobro"
  ],
  stock_check: [
    "Accede al módulo de Stock",
    "Consulta el inventario por producto o almacén",
    "Revisa las cantidades disponibles",
    "Exporta los datos si es necesario"
  ],
  stock_movement: [
    "Accede al módulo de Stock",
    "Selecciona 'Movimiento de stock'",
    "Indica el tipo de movimiento (entrada, salida, ajuste)",
    "Guarda el movimiento"
  ],
  stock_transfer: [
    "Accede al módulo de Stock",
    "Selecciona 'Traspaso entre almacenes'",
    "Elige almacén origen y destino",
    "Añade los productos a traspasar y confirma"
  ],
  cash_register: [
    "Accede al módulo de Administración",
    "Selecciona 'Tesorería' > 'Cuentas'",
    "Crea una nueva cuenta de caja o banco",
    "Configura los datos y guarda"
  ],
  treasury_concepts: [
    "Accede al módulo de Administración",
    "Selecciona 'Tesorería' > 'Conceptos'",
    "Crea conceptos personalizados para ingresos y gastos",
    "Guarda la configuración"
  ],
  cash_closing: [
    "Accede al módulo de Administración",
    "Selecciona 'Tesorería' > 'Arqueo de caja'",
    "Introduce el efectivo contado",
    "Confirma el cierre y revisa diferencias"
  ],
  expense_invoice: [
    "Accede al módulo de Administración",
    "Selecciona 'Facturas de compra/gastos'",
    "Introduce los datos del proveedor y conceptos",
    "Guarda la factura"
  ],
  invoice_payment: [
    "Accede a la factura pendiente",
    "Haz clic en 'Cobrar'",
    "Selecciona cuenta de tesorería y método de pago",
    "Confirma el cobro"
  ],
  accounting_entries: [
    "Accede al módulo de Administración",
    "Selecciona 'Contabilidad' > 'Asientos'",
    "Crea un nuevo asiento indicando debe y haber",
    "Verifica que el asiento esté cuadrado y guarda"
  ],
  vehicle_reception: [
    "Accede al módulo de Taller",
    "Selecciona 'Recepción de vehículo'",
    "Introduce los datos del vehículo y cliente",
    "Genera la recepción"
  ],
  create_or: [
    "Accede al módulo de Taller",
    "Crea una nueva Orden de Reparación (OR)",
    "Añade las operaciones y piezas necesarias",
    "Guarda la OR para comenzar el trabajo"
  ],
  vehicle_transfer: [
    "Accede al módulo de Vehículos",
    "Selecciona el vehículo a traspasar",
    "Indica el nuevo propietario o ubicación",
    "Confirma el traspaso"
  ],
  general_help: [
    "Accede al Centro de Ayuda desde el menú principal",
    "Busca el tema que necesites",
    "Revisa la documentación disponible",
    "Contacta con soporte si necesitas ayuda adicional"
  ]
};

const moduleLearningFlows = {
  sales: [
    learningContent[0],
    learningContent[1],
    learningContent[2],
    learningContent[3],
    learningContent[4]
  ],
  stock: [
    learningContent[5],
    learningContent[6],
    learningContent[7]
  ],
  administracion: [
    learningContent[8],
    learningContent[9],
    learningContent[10],
    learningContent[11],
    learningContent[12],
    learningContent[13]
  ],
  workshop: [
    learningContent[14],
    learningContent[15]
  ],
  vehicles: [
    learningContent[16]
  ],
  support: [
    learningContent[17]
  ]
};

export const supportCases = [
  {
    id: "login-issue",
    title: "Problemas de acceso",
    keywords: ["login", "contraseña", "acceso", "usuario"],
    href: getGitBookUrl("support")
  },
  {
    id: "performance-issue",
    title: "Problemas de rendimiento",
    keywords: ["lento", "rendimiento", "velocidad"],
    href: getGitBookUrl("support")
  }
];
