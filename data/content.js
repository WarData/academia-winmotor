import { sources } from "./sources";

function getGitBookUrl(module) {
  const modulePath = sources.gitbook.modules[module] ?? "";
  return new URL(modulePath.replace(/^\//, ""), sources.gitbook.base).toString();
}

export const learningContent = [
  {
    id: "sales-create-customer",
    title: "Crear cliente",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/playlist?list=PLRre-2u0kNpkGzMUMHUBbpMHypCZ4QSeN",
    keywords: ["ventas", "cliente", "entidad", "alta entidad"]
  },
  {
    id: "sales-create-quote",
    title: "Crear presupuesto",
    module: "sales",
    process: "create_quote",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/playlist?list=PLRre-2u0kNpkGzMUMHUBbpMHypCZ4QSeN",
    keywords: ["ventas", "presupuesto", "oferta"]
  },
  {
    id: "sales-create-order",
    title: "Crear pedido",
    module: "sales",
    process: "create_order",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/playlist?list=PLRre-2u0kNpkGzMUMHUBbpMHypCZ4QSeN",
    keywords: ["ventas", "pedido", "pedido de cliente"]
  },
  {
    id: "sales-create-invoice",
    title: "Crear factura",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/playlist?list=PLRre-2u0kNpkGzMUMHUBbpMHypCZ4QSeN",
    keywords: ["ventas", "factura", "facturación"]
  },
  {
    id: "sales-payment",
    title: "Cobro",
    module: "sales",
    process: "payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/playlist?list=PLRre-2u0kNpkGzMUMHUBbpMHypCZ4QSeN",
    keywords: ["ventas", "pago", "cobro", "caja", "recibo"]
  },
  {
    id: "stock-stock-check",
    title: "Consultar stock",
    module: "stock",
    process: "stock_check",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/playlist?list=PLRre-2u0kNplSrslJRpVVivIAkdJmg8BP",
    keywords: ["stock", "disponibilidad", "consulta", "almacén"]
  },
  {
    id: "stock-stock-movements",
    title: "Movimientos de stock",
    module: "stock",
    process: "stock_movements",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/playlist?list=PLRre-2u0kNplSrslJRpVVivIAkdJmg8BP",
    keywords: ["stock", "movimientos", "histórico de producto"]
  },
  {
    id: "stock-inventory",
    title: "Inventario",
    module: "stock",
    process: "inventory",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/playlist?list=PLRre-2u0kNplSrslJRpVVivIAkdJmg8BP",
    keywords: ["stock", "inventario", "recuento"]
  },
  {
    id: "stock-warehouse-transfer",
    title: "Traspaso entre almacenes",
    module: "stock",
    process: "warehouse_transfer",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("stock"),
    keywords: ["stock", "almacén", "traspaso", "movimiento"]
  },
  {
    id: "workshop-create-appointment",
    title: "Crear cita",
    module: "workshop",
    process: "create_appointment",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("workshop"),
    keywords: ["taller", "cita", "servicio"]
  },
  {
    id: "workshop-create-work-order",
    title: "Crear orden de reparación",
    module: "workshop",
    process: "create_work_order",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("workshop"),
    keywords: ["taller", "orden de reparación", "or", "orden de servicio", "técnico"]
  },
  {
    id: "workshop-workshop-invoice",
    title: "Facturar trabajo de taller",
    module: "workshop",
    process: "workshop_invoice",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("workshop"),
    keywords: ["taller", "factura", "trabajo", "mano de obra"]
  },
  {
    id: "finance-cash-register",
    title: "Caja",
    module: "finance",
    process: "cash_register",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("finance"),
    keywords: ["finanzas", "caja", "arqueo", "cierre"]
  },
  {
    id: "finance-payments",
    title: "Pagos",
    module: "finance",
    process: "payments",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("finance"),
    keywords: ["finanzas", "pagos", "cobros", "banco"]
  },
  {
    id: "finance-accounting-entries",
    title: "Apuntes contables",
    module: "finance",
    process: "accounting_entries",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("finance"),
    keywords: ["finanzas", "contabilidad", "apuntes", "asientos"]
  },
  {
    id: "vehicles-vehicle-creation",
    title: "Alta de vehículo",
    module: "vehicles",
    process: "vehicle_creation",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("vehicles"),
    keywords: ["vehículos", "vehículo", "alta", "vn", "vo"]
  },
  {
    id: "vehicles-vehicle-stock",
    title: "Stock de vehículos",
    module: "vehicles",
    process: "vehicle_stock",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("vehicles"),
    keywords: ["vehículos", "stock", "stock de vehículos", "panel", "inventario"]
  },
  {
    id: "vehicles-vehicle-transfer",
    title: "Transferencia de vehículo",
    module: "vehicles",
    process: "vehicle_transfer",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("vehicles"),
    keywords: ["vehículos", "transferencia", "cesión", "recepción", "depósito"]
  },
  {
    id: "support-common-errors",
    title: "Lista de errores frecuentes",
    module: "support",
    process: "common_errors_list",
    type: "help",
    source: "gitbook",
    url: getGitBookUrl("support"),
    keywords: ["soporte", "errores", "error", "guardado", "permisos", "ayuda"]
  }
];

const moduleLabels = {
  sales: "Ventas",
  stock: "Stock",
  workshop: "Taller",
  vehicles: "Vehículos",
  finance: "Finanzas",
  support: "Soporte"
};

const sourceLabels = {
  youtube: "YouTube",
  gitbook: "GitBook"
};

const processSteps = {
  create_customer: ["Abrir Ventas", "Crear o seleccionar el cliente", "Validar los datos del cliente", "Guardar cambios"],
  create_quote: ["Abrir Ventas", "Crear el presupuesto", "Añadir productos o vehículo", "Revisar totales"],
  create_order: ["Abrir el presupuesto", "Convertirlo en pedido", "Confirmar los datos del cliente", "Guardar pedido"],
  create_invoice: ["Abrir el pedido", "Generar factura", "Revisar impuestos y totales", "Guardar factura"],
  payment: ["Abrir el panel de cobros", "Elegir método de pago", "Registrar importe", "Confirmar recibo"],
  stock_check: ["Abrir Stock", "Buscar artículo", "Revisar disponibilidad", "Comprobar ubicación de almacén"],
  stock_movements: ["Abrir ficha del artículo", "Revisar histórico de movimientos", "Filtrar fechas", "Validar cantidades"],
  inventory: ["Crear inventario", "Cargar artículos contados", "Comparar diferencias", "Aplicar ajuste"],
  warehouse_transfer: ["Elegir almacén de origen", "Elegir almacén de destino", "Introducir cantidades", "Confirmar movimiento"],
  create_appointment: ["Abrir Taller", "Crear cita", "Seleccionar cliente y vehículo", "Asignar fecha"],
  create_work_order: ["Abrir la cita", "Crear orden de reparación", "Añadir servicios", "Asignar técnico"],
  workshop_invoice: ["Revisar trabajo finalizado", "Validar recambios y mano de obra", "Generar factura", "Cerrar orden"],
  cash_register: ["Abrir Finanzas", "Revisar sesión de caja", "Conciliar totales", "Cerrar caja"],
  payments: ["Abrir lista de pagos", "Seleccionar pago", "Validar método", "Confirmar estado"],
  accounting_entries: ["Abrir área contable", "Revisar apuntes pendientes", "Validar cuentas", "Contabilizar apuntes"],
  vehicle_creation: ["Abrir Vehículos", "Crear vehículo", "Añadir modelo y bastidor", "Guardar vehículo"],
  vehicle_stock: ["Abrir stock de vehículos", "Filtrar disponibilidad", "Revisar estado", "Abrir ficha del vehículo"],
  vehicle_transfer: ["Seleccionar vehículo", "Elegir tipo de transferencia", "Confirmar destino", "Guardar transferencia"]
};

export const moduleLearningFlows = {
  sales: [
    "sales-create-customer",
    "sales-create-quote",
    "sales-create-order",
    "sales-create-invoice",
    "sales-payment"
  ],
  stock: [
    "stock-stock-check",
    "stock-stock-movements",
    "stock-inventory",
    "stock-warehouse-transfer"
  ],
  workshop: [
    "workshop-create-appointment",
    "workshop-create-work-order",
    "workshop-workshop-invoice"
  ],
  vehicles: [
    "vehicles-vehicle-creation",
    "vehicles-vehicle-stock",
    "vehicles-vehicle-transfer"
  ],
  finance: [
    "finance-cash-register",
    "finance-payments",
    "finance-accounting-entries"
  ],
  support: ["support-common-errors"]
};

export const supportCases = [
  {
    id: "support-cannot-create-invoice",
    title: "No se puede crear factura",
    keywords: ["factura", "ventas", "facturación"],
    resourceId: "sales-create-invoice",
    type: "help",
    source: "gitbook",
    url: "https://winmotor.gitbook.io/winmotor-automocion/manuales/ventas/facturas"  },
  {
    id: "support-stock-not-visible",
    title: "El stock no aparece",
    keywords: ["stock", "visible", "inventario", "no aparece"],
    resourceId: "stock-stock-check",
    type: "help",
    source: "gitbook",
    url: "https://winmotor.gitbook.io/winmotor-automocion/manuales/almacenes"  },
  {
    id: "support-error-saving-document",
    title: "Error al guardar documento",
    keywords: ["error", "guardar", "documento", "guardado"],
    resourceId: "support-common-errors",
    type: "help"
  },
  {
    id: "support-permission-denied",
    title: "Permiso denegado",
    keywords: ["permiso", "denegado", "acceso", "usuario"],
    resourceId: "support-common-errors",
    type: "help"
  }
];

export function getContentByModule(module) {
  return learningContent.filter((item) => item.module === module);
}

export function getContentById(id) {
  return learningContent.find((item) => item.id === id);
}

export function getFlowItems(module) {
  const flowIds = moduleLearningFlows[module] ?? [];
  const flowItems = flowIds.map(getContentById).filter(Boolean);

  return flowItems.length > 0 ? flowItems : getContentByModule(module);
}

export function getFirstFlowItem(module) {
  return getFlowItems(module)[0];
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
    "Revisa el resultado antes de pasar al siguiente flujo."
  ];
}

export function getHelpText(item) {
  return resolveKnowledgeResource(item).body;
}
