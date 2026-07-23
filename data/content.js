import { sources } from "./sources";

function getGitbookUrl(module) {
  const modulePath = sources.gitbook.modules[module] ?? "";
  return new URL(modulePath.replace(/^\//, ""), sources.gitbook.base).toString();
}

export const learningContent = [
  // ============= VENTAS (27 videos) =============
  {
    id: "sales-op-comercial-vo",
    title: "Vídeo 1.3.14 Pasos de una operación comercial con VO",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=gRMGfQYIPQc",
    keywords: ["ventas", "operación", "VO", "vehículo ocasión"]
  },
  {
    id: "sales-accesorios-op",
    title: "Vídeo 1.3.13 Gestión de accesorios en operaciones",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=AQJE1jEXfQ",
    keywords: ["ventas", "accesorios", "operaciones"]
  },
  {
    id: "sales-op-comercial-basica",
    title: "Vídeo 1.3.10 Pasos de una operación comercial básica",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=xpaBekYUKCA",
    keywords: ["ventas", "operación", "básica"]
  },
  {
    id: "sales-asignar-bastidores",
    title: "Vídeo 1.3.11 Asignar bastidores a operaciones comerciales",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=MxMwbYHD3EU",
    keywords: ["ventas", "bastidores", "operaciones"]
  },
  {
    id: "sales-cambiar-propietario",
    title: "Vídeo 1.3.9 Cambiar propietario de un vehículo - 2 métodos",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=-UXObPa5wdY",
    keywords: ["ventas", "propietario", "vehículo"]
  },
  {
    id: "sales-cambiar-modelo",
    title: "Vídeo 1.3.8 Cambiar modelo de vehículo o el color",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=7LsMIK6JilM",
    keywords: ["ventas", "modelo", "color", "vehículo"]
  },
  {
    id: "sales-unidad-demo",
    title: "Vídeo 1.3.7 Convertir un bastidor a unidad demo",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=57t7fakqEuk",
    keywords: ["ventas", "demo", "bastidor"]
  },
  {
    id: "sales-presupuesto-ventas",
    title: "Vídeo 1.8.1 Grabación de un presupuesto de ventas",
    module: "sales",
    process: "create_quote",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=s2j5MX-R9Dk",
    keywords: ["ventas", "presupuesto", "crear"]
  },
  {
    id: "sales-pedido-ventas",
    title: "Vídeo 1.8.2 Grabación de un pedido de ventas",
    module: "sales",
    process: "create_order",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=KeO13XJtS1U",
    keywords: ["ventas", "pedido", "crear"]
  },
  {
    id: "sales-albaran-ventas",
    title: "Vídeo 1.8.3 Grabación de un albarán de ventas",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=7PDRiTFo3uY",
    keywords: ["ventas", "albarán", "crear"]
  },
  {
    id: "sales-panel-venta-directa",
    title: "Vídeo 1.8.14 Panel de Venta Directa",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=nAimOLfmR-U",
    keywords: ["ventas", "panel", "directa"]
  },
  {
    id: "sales-precios-tarifas",
    title: "Vídeo 1.8.15 Gestión de precios y tarifas de ventas",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=0uoztLP8fxg",
    keywords: ["ventas", "precios", "tarifas"]
  },
  {
    id: "sales-tarifas-ventas",
    title: "Vídeo 1.6 Tarifas de ventas",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=c-UtkDVjhM",
    keywords: ["ventas", "tarifas"]
  },
  {
    id: "sales-articulos-tarifa",
    title: "Vídeo 1.4 Artículos y tarifa de artículos",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=5Pd4kE0VN9A",
    keywords: ["ventas", "artículos", "tarifa"]
  },
  {
    id: "sales-datos-historicos",
    title: "Vídeo 1.5.5 Datos importantes - Históricos - Tipos de pago - Cuenta contable",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=i86LcnRVEQ8",
    keywords: ["ventas", "históricos", "pagos", "contable"]
  },
  {
    id: "sales-riesgo-entidades",
    title: "Vídeo 1.5.4 Riesgo de entidades",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=nJxXbnLtsB4",
    keywords: ["ventas", "riesgo", "entidades"]
  },
  {
    id: "sales-cuentas-bancarias",
    title: "Vídeo 1.5.3 Cuentas bancarias - por defecto - activa",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=amCt3axI3VU",
    keywords: ["ventas", "cuentas", "bancarias"]
  },
  {
    id: "sales-relaciones-entidades",
    title: "Vídeo 1.5.2 Relaciones de entidades",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=ghTgGbROojA",
    keywords: ["ventas", "relaciones", "entidades"]
  },
  {
    id: "sales-alta-entidad",
    title: "Vídeo 1.5.1 Alta de entidad",
    module: "sales",
    process: "create_customer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=KjwttXdZ4Hs",
    keywords: ["ventas", "alta", "entidad", "cliente"]
  },
  {
    id: "sales-copiar-pegar",
    title: "Vídeo 1.0.7 Copiar y pegar entre documentos de todo tipo",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=V7pImjf9_SM",
    keywords: ["ventas", "copiar", "pegar", "documentos"]
  },
  {
    id: "sales-operaciones-genericas",
    title: "Vídeo 1.0.6 Operaciones genéricas - filtrar - partir - multipartir",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Sc97JwkvPsk",
    keywords: ["ventas", "operaciones", "filtrar", "partir"]
  },
  {
    id: "sales-factura-servicios",
    title: "Vídeo 1.9.15 Crear factura de venta de servicios",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=1SDf1kJPUBI",
    keywords: ["ventas", "factura", "servicios"]
  },
  {
    id: "sales-facturacion-tanda",
    title: "Vídeo 1.9.17 Facturación en tanda de albaranes de ventas",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=rekB1NbepHI",
    keywords: ["ventas", "facturación", "tanda", "albaranes"]
  },
  {
    id: "sales-albaranes-or",
    title: "Vídeo 1.9.16 Añadir albaranes ORs a una factura de ventas",
    module: "sales",
    process: "create_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=XHC95_iRS3c",
    keywords: ["ventas", "albaranes", "OR", "factura"]
  },
  {
    id: "sales-anticipo-cobro",
    title: "Vídeo 1.9.9 Crear anticipo de cobro a cliente sin pedido ni operación",
    module: "sales",
    process: "create_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=mryBbM_dlWo",
    keywords: ["ventas", "anticipo", "cobro", "cliente"]
  },
  {
    id: "sales-cobro-anticipo",
    title: "Vídeo 1.9.6 Creación cobro de anticipo de pedido de ventas",
    module: "sales",
    process: "create_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=rKyJG8G09zY",
    keywords: ["ventas", "cobro", "anticipo", "pedido"]
  },
  {
    id: "sales-cobro-factura",
    title: "Vídeo 1.9.5 Cobro de factura botón",
    module: "sales",
    process: "create_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Kq6uO1qGPA8",
    keywords: ["ventas", "cobro", "factura"]
  },

  // ============= TALLER (14 videos) =============
  {
    id: "workshop-agenda-taller",
    title: "Vídeo 1.10.5 Agenda de taller y calendarios",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=NODJ3-mUAQQ",
    keywords: ["taller", "agenda", "calendarios"]
  },
  {
    id: "workshop-gestion-siniestros",
    title: "Vídeo 1.10.3 Gestión de siniestros",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=um1A1NwBBSM",
    keywords: ["taller", "siniestros", "gestión"]
  },
  {
    id: "workshop-franquicias",
    title: "Vídeo 1.10.2 Gestión de franquicias",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=7EUZalAwK5A",
    keywords: ["taller", "franquicias"]
  },
  {
    id: "workshop-fichaje-mecanicos",
    title: "Vídeo 1.10.1 Fichaje de los mecánicos",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=tJakqZndiS4",
    keywords: ["taller", "fichaje", "mecánicos"]
  },
  {
    id: "workshop-cita-cliente-existe",
    title: "Vídeo 3.0.1 Cita con cliente y vehículos existentes",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=00V2ruQBhZk",
    keywords: ["taller", "cita", "cliente", "vehículos"]
  },
  {
    id: "workshop-cita-no-existe",
    title: "Vídeo 3.0.2 Cita con cliente y vehículos no existentes",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=KKzfiCGydFA",
    keywords: ["taller", "cita", "cliente"]
  },
  {
    id: "workshop-cita-cortesia",
    title: "Vídeo 3.0.3 Alta de cita con vehículo de cortesía",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=7ccR6ds1DLA",
    keywords: ["taller", "cita", "cortesía"]
  },
  {
    id: "workshop-renovacion-cita",
    title: "Vídeo 3.0.4 Renovación de una cita",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=0gXnpIllq60",
    keywords: ["taller", "renovación", "cita"]
  },
  {
    id: "workshop-or-desde-cita",
    title: "Vídeo 3.0.5 Alta de OR desde cita",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=b6WJnRntpNA",
    keywords: ["taller", "OR", "cita"]
  },
  {
    id: "workshop-or-vehiculo-cliente",
    title: "Vídeo 2.0.1 Alta de OR Vehículo Cliente",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=nR_vv-Zn-xw",
    keywords: ["taller", "OR", "vehículo", "cliente"]
  },
  {
    id: "workshop-or-tempario",
    title: "Vídeo 2.0.2 Alta de OR Tempario y usos",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=E83_CXifvbI",
    keywords: ["taller", "OR", "tempario"]
  },
  {
    id: "workshop-or-confirmacion",
    title: "Vídeo 2.0.3 Alta de OR Confirmación",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=CP6VhvQwBG8",
    keywords: ["taller", "OR", "confirmación"]
  },
  {
    id: "workshop-or-facturacion",
    title: "Vídeo 2.0.4 Alta de OR Facturación",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Qcnel8GHAYI",
    keywords: ["taller", "OR", "facturación"]
  },
  {
    id: "workshop-alta-vehiculo-taller",
    title: "Vídeo 1.3.6 Alta de vehículo de taller en OR - VO en albarán de compra",
    module: "workshop",
    process: "create_or",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=LSkr9xnBvHU",
    keywords: ["taller", "vehículo", "OR", "albarán"]
  },

  // ============= ADMINISTRACIÓN (26 videos) =============
  {
    id: "admin-alta-cuentas-tesoreria",
    title: "Vídeo 1.9.1 Alta de cuentas de tesorería",
    module: "administracion",
    process: "create_treasury",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Y36AsanSAqM",
    keywords: ["administración", "tesorería", "cuentas"]
  },
  {
    id: "admin-alta-conceptos-tesoreria",
    title: "Vídeo 1.9.2 Alta de conceptos de tesorería",
    module: "administracion",
    process: "create_treasury",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=CiWzkWyfdrg",
    keywords: ["administración", "tesorería", "conceptos"]
  },
  {
    id: "admin-alta-servicio",
    title: "Vídeo 1.9.3 Alta de un servicio",
    module: "administracion",
    process: "create_treasury",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Yf9wausRSNM",
    keywords: ["administración", "servicio", "alta"]
  },
  {
    id: "admin-registro-manual-tesoreria",
    title: "Vídeo 1.9.4 Alta de registro manual en tesorería",
    module: "administracion",
    process: "create_treasury",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=ZUGrwXrC9YI",
    keywords: ["administración", "tesorería", "registro"]
  },
  {
    id: "admin-aplicacion-anticipos",
    title: "Vídeo 1.9.7 Aplicación de anticipos asociados a la entidad",
    module: "administracion",
    process: "create_treasury",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=-HWQ68Kmq6o",
    keywords: ["administración", "anticipos", "entidad"]
  },
  {
    id: "admin-arqueo-cierre-caja",
    title: "Vídeo 1.9.8 Arqueo y cierre de cuentas de tesorería caja",
    module: "administracion",
    process: "create_cash_close",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dRtFfjg_exY",
    keywords: ["administración", "arqueo", "cierre", "caja"]
  },
  {
    id: "admin-alta-factura-gastos",
    title: "Vídeo 1.9.10 Alta de factura de gastos",
    module: "administracion",
    process: "create_expense_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=uUxXY5UKEoY",
    keywords: ["administración", "factura", "gastos"]
  },
  {
    id: "admin-gastos-contratos",
    title: "Vídeo 1.9.11 Facturar gastos mediante contratos y vencimientos",
    module: "administracion",
    process: "create_expense_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=TNDKT2y5hO0",
    keywords: ["administración", "gastos", "contratos"]
  },
  {
    id: "admin-remesas-cobros-pagos",
    title: "Vídeo 1.9.12 Alta de remesas de cobros y pagos",
    module: "administracion",
    process: "create_accounting",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=gXESkNyr8K0",
    keywords: ["administración", "remesas", "cobros", "pagos"]
  },
  {
    id: "admin-remesa-nominas",
    title: "Vídeo 1.9.13 Creación de remesa de nóminas",
    module: "administracion",
    process: "create_accounting",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=SQae6dXHFVM",
    keywords: ["administración", "remesa", "nóminas"]
  },
  {
    id: "admin-asientos-contables",
    title: "Vídeo 1.9.14 Crear asientos contables",
    module: "administracion",
    process: "create_accounting",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=GnnjPbUOVzc",
    keywords: ["administración", "asientos", "contables"]
  },
  {
    id: "admin-balance-sumas-saldos",
    title: "Vídeo 1.9.18 Consultar balance de sumas y saldos",
    module: "administracion",
    process: "create_accounting",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=bY17KCsaldo",
    keywords: ["administración", "balance", "sumas", "saldos"]
  },
  {
    id: "admin-extracto-mayor-cuenta",
    title: "Vídeo 1.9.19 Consultar un extracto o mayor de una cuenta",
    module: "administracion",
    process: "create_accounting",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=vuZUopl0i6o",
    keywords: ["administración", "extracto", "mayor", "cuenta"]
  },
  {
    id: "admin-facturacion-tanda-compras",
    title: "Vídeo 1.9.20 Facturación en tanda de albaranes de compras",
    module: "administracion",
    process: "create_expense_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=qDszeXhuyM0",
    keywords: ["administración", "facturación", "tanda", "compras"]
  },
  {
    id: "admin-facturacion-albaran-compra",
    title: "Vídeo 1.9.21 Facturación de albarán de compras por selección + facturar + Añadir albaranes a factura",
    module: "administracion",
    process: "create_expense_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=gqhc1w6UJLk",
    keywords: ["administración", "facturación", "albarán", "compras"]
  },
  {
    id: "admin-config-facturas-compra",
    title: "Vídeo 1.9.22 Configurar y modificar facturas de compras gastos 2 opciones",
    module: "administracion",
    process: "create_expense_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=1yszRTRq1Js",
    keywords: ["administración", "configurar", "facturas", "compras"]
  },
  {
    id: "admin-check-serie-albaranes",
    title: "Vídeo 1.9.23 Check en serie en albaranes de ventas para que solicite fecha al facturarlos",
    module: "administracion",
    process: "create_invoice_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Qx32vNwrGgw",
    keywords: ["administración", "check", "serie", "albaranes"]
  },
  {
    id: "admin-crear-inmovilizado",
    title: "Vídeo 1.9.24 Crear inmovilizado",
    module: "administracion",
    process: "create_accounting",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=um2XG_04Ph0",
    keywords: ["administración", "crear", "inmovilizado"]
  },
  {
    id: "admin-anadir-albaranes-factura-compra",
    title: "Vídeo 1.9.25 Añadir albaranes a una factura de compra (casar)",
    module: "administracion",
    process: "create_expense_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=argxT0imYrI",
    keywords: ["administración", "Añadir", "albaranes", "factura"]
  },
  {
    id: "admin-abonar-factura-ventas",
    title: "Vídeo 1.9.26 Abonar factura de ventas",
    module: "administracion",
    process: "create_invoice_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=ME51X4g0tgc",
    keywords: ["administración", "abonar", "factura", "ventas"]
  },
  {
    id: "admin-cobro-factura",
    title: "Vídeo 1.9.5 Cobro de factura botón",
    module: "administracion",
    process: "create_invoice_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=Kq6uO1qGPA8",
    keywords: ["administración", "cobro", "factura"]
  },
  {
    id: "admin-cobro-anticipo",
    title: "Vídeo 1.9.6 Creación cobro de anticipo de pedido de ventas",
    module: "administracion",
    process: "create_invoice_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=rKyJG8G09zY",
    keywords: ["administración", "cobro", "anticipo", "pedido"]
  },
  {
    id: "admin-anticipo-cobro",
    title: "Vídeo 1.9.9 Crear anticipo de cobro a cliente sin pedido ni operación",
    module: "administracion",
    process: "create_invoice_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=mryBbM_dlWo",
    keywords: ["administración", "anticipo", "cobro", "cliente"]
  },
  {
    id: "admin-factura-servicios",
    title: "Vídeo 1.9.15 Crear factura de venta de servicios",
    module: "administracion",
    process: "create_expense_invoice",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=1SDf1kJPUBI",
    keywords: ["administración", "factura", "servicios"]
  },
  {
    id: "admin-albaranes-or",
    title: "Vídeo 1.9.16 Añadir albaranes ORs a una factura de ventas",
    module: "administracion",
    process: "create_invoice_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=XHC95_iRS3c",
    keywords: ["administración", "albaranes", "OR", "factura"]
  },
  {
    id: "admin-facturacion-tanda",
    title: "Vídeo 1.9.17 Facturación en tanda de albaranes de ventas",
    module: "administracion",
    process: "create_invoice_payment",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=rekB1NbepHI",
    keywords: ["administración", "facturación", "tanda", "albaranes"]
  },

  // ============= STOCK (3 videos - existing) =============
  {
    id: "stock-check-stock",
    title: "Consultar stock",
    module: "stock",
    process: "check_stock",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    keywords: ["stock", "consulta", "inventario"]
  },
  {
    id: "stock-movement",
    title: "Movimiento de stock",
    module: "stock",
    process: "stock_movement",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    keywords: ["stock", "movimiento"]
  },
  {
    id: "stock-transfer",
    title: "Traspaso entre almacenes",
    module: "stock",
    process: "warehouse_transfer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    keywords: ["stock", "traspaso", "almacenes"]
  },

  // ============= VEHICLES (1 video - existing) =============
  {
    id: "vehicles-transfer",
    title: "Traspaso de vehículo",
    module: "vehicles",
    process: "vehicle_transfer",
    type: "video",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    keywords: ["vehículos", "traspaso"]
  },

  // ============= SUPPORT (1 video - existing) =============
  {
    id: "support-center",
    title: "Centro de ayuda",
    module: "support",
    process: "help_center",
    type: "help",
    source: "gitbook",
    url: getGitbookUrl("support"),
    keywords: ["soporte", "ayuda"]
  }
];

export function getContentByModule(module) {
  return learningContent.filter((item) => item.module === module);
}

export function getContentById(id) {
  return learningContent.find((item) => item.id === id) || null;
}

export function getFlowItems(module) {
  return learningContent.filter((item) => item.module === module);
}

export function getStepInstructions(contentOrId) {
  const item =
    typeof contentOrId === "string"
      ? getContentById(contentOrId)
      : contentOrId;

  if (!item) return [];

  if (Array.isArray(item.instructions)) {
    return item.instructions;
  }

  const processId = item.process;

  if (
    processId &&
    typeof supportCases !== "undefined" &&
    supportCases?.[processId]?.instructions
  ) {
    return supportCases[processId].instructions;
  }

  return [];
}

export function resolveKnowledgeResource(contentOrId) {
  const item =
    typeof contentOrId === "string"
      ? getContentById(contentOrId)
      : contentOrId;

  if (!item) return null;

  const kind = item.type || "help";
  const href =
    item.url ||
    (item.module && sources?.gitbook?.modules?.[item.module]
      ? getGitbookUrl(item.module)
      : null);

  if (!href) return null;

  return {
    id: item.id,
    title: item.title,
    module: item.module,
    process: item.process ?? null,
    source: item.source ?? null,
    type: kind,
    kind,
    url: href,
    href,
    isExternal: /^https?:\/\//.test(href),
  };
}

export function getFirstFlowItem(module) {
  const items = getFlowItems(module);
  return items.length > 0 ? items[0] : null;
}

export function getFlowStepNumber(contentOrId) {
  const item =
    typeof contentOrId === "string"
      ? getContentById(contentOrId)
      : contentOrId;

  if (!item) return 0;

  const items = getFlowItems(item.module);
  const index = items.findIndex((entry) => entry.id === item.id);

  return index >= 0 ? index + 1 : 0;
}

export function getNextContentItem(contentOrId) {
  const item =
    typeof contentOrId === "string"
      ? getContentById(contentOrId)
      : contentOrId;

  if (!item) return null;

  const items = getFlowItems(item.module);
  const index = items.findIndex((entry) => entry.id === item.id);

  if (index === -1 || index === items.length - 1) return null;

  return items[index + 1];
}

export function getPreviousContentItem(contentOrId) {
  const item =
    typeof contentOrId === "string"
      ? getContentById(contentOrId)
      : contentOrId;

  if (!item) return null;

  const items = getFlowItems(item.module);
  const index = items.findIndex((entry) => entry.id === item.id);

  if (index <= 0) return null;

  return items[index - 1];
}

export function getHelpText(contentOrId) {
  const item =
    typeof contentOrId === "string"
      ? getContentById(contentOrId)
      : contentOrId;

  if (!item) return "";

  const instructions = getStepInstructions(item);

  if (instructions.length > 0) {
    return instructions.join("\n");
  }

  return item.description || item.summary || "";
}

function normalizeText(value = "") {
  return String(value)
    .replace(/^Vídeo\s+\d+(?:\.\d+)*\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function humanizeKeyword(value = "") {
  return String(value)
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizeForCompare(value = "") {
  return normalizeText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function shuffleArray(items = []) {
  const arr = [...items];

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function sampleSize(items = [], size = 10) {
  return shuffleArray(items).slice(0, Math.min(size, items.length));
}

function dedupeStrings(items = []) {
  return [
    ...new Set(
      items
        .filter(Boolean)
        .map((item) => String(item).trim())
        .filter(Boolean)
    )
  ];
}

function getModuleLabel(module) {
  const labels = {
    sales: "Ventas",
    workshop: "Taller",
    administracion: "Administración",
    stock: "Stock",
    vehicles: "Vehículos",
    support: "Soporte"
  };

  return labels[module] || humanizeKeyword(module);
}

function getQuestionId(module, index) {
  return `${module}-auto-q${index + 1}`;
}

function getCleanModuleItems(module) {
  return getContentByModule(module).map((item) => ({
    ...item,
    cleanTitle: normalizeText(item.title),
    cleanKeywords: dedupeStrings((item.keywords || []).map(humanizeKeyword))
  }));
}

function buildWrongTitles(currentItem, moduleItems, limit = 3) {
  return shuffleArray(
    dedupeStrings(
      moduleItems
        .filter((item) => item.id !== currentItem.id)
        .map((item) => item.cleanTitle)
        .filter(
          (title) =>
            title &&
            normalizeForCompare(title) !== normalizeForCompare(currentItem.cleanTitle)
        )
    )
  ).slice(0, limit);
}

function buildWrongKeywords(currentKeyword, moduleItems, limit = 3) {
  const current = normalizeForCompare(currentKeyword);
  const pool = [];

  moduleItems.forEach((item) => {
    item.cleanKeywords.forEach((keyword) => {
      if (normalizeForCompare(keyword) !== current) {
        pool.push(keyword);
      }
    });
  });

  return shuffleArray(dedupeStrings(pool)).slice(0, limit);
}

function buildWrongModules(currentModule, allModules, limit = 3) {
  return shuffleArray(
    allModules
      .filter((module) => module !== currentModule)
      .map((module) => getModuleLabel(module))
  ).slice(0, limit);
}

function buildWrongWords(currentWord, moduleItems, limit = 3) {
  const current = normalizeForCompare(currentWord);
  const pool = moduleItems.flatMap((item) =>
    item.cleanTitle
      .split(/[\s,/()+-]+/)
      .map((word) => word.trim())
      .filter((word) => word.length >= 4 && normalizeForCompare(word) !== current)
  );

  return shuffleArray(dedupeStrings(pool)).slice(0, limit);
}

function makeOptions(correct, wrongs = []) {
  const options = shuffleArray(dedupeStrings([correct, ...wrongs])).slice(0, 4);
  const correctAnswer = options.findIndex((option) => option === correct);

  return { options, correctAnswer };
}

function createQuestion(question, correct, wrongs, explanation, meta = {}) {
  const { options, correctAnswer } = makeOptions(correct, wrongs);

  if (options.length < 4 || correctAnswer === -1) {
    return null;
  }

  return {
    question,
    options,
    correctAnswer,
    explanation,
    ...meta
  };
}

function buildTitleQuestions(module, moduleItems) {
  const questions = [];

  moduleItems.forEach((item, index) => {
    const wrongTitles = buildWrongTitles(item, moduleItems, 3);

    const variants = [
      `¿Qué contenido pertenece al módulo de ${getModuleLabel(module)}?`,
      `¿Cuál de estos contenidos forma parte del área de ${getModuleLabel(module)}?`,
      `Selecciona un contenido real del módulo ${getModuleLabel(module)}.`
    ];

    variants.forEach((questionText, variantIndex) => {
      const question = createQuestion(
        questionText,
        item.cleanTitle,
        wrongTitles,
        `Este contenido forma parte del módulo de ${getModuleLabel(module)}.`,
        {
          sourceId: item.id,
          template: "title-in-module",
          variant: `${index}-${variantIndex}`
        }
      );

      if (question) {
        questions.push(question);
      }
    });
  });

  return questions;
}

function buildKeywordQuestions(module, moduleItems) {
  const questions = [];

  moduleItems.forEach((item) => {
    item.cleanKeywords.forEach((keyword, keywordIndex) => {
      const wrongKeywords = buildWrongKeywords(keyword, moduleItems, 3);

      const variants = [
        `¿Qué concepto aparece asociado al contenido "${item.cleanTitle}"?`,
        `¿Cuál de estas palabras clave encaja mejor con "${item.cleanTitle}"?`,
        `¿Qué tema se trabaja en el contenido "${item.cleanTitle}"?`
      ];

      variants.forEach((questionText, variantIndex) => {
        const question = createQuestion(
          questionText,
          keyword,
          wrongKeywords,
          `La palabra clave "${keyword}" está asociada a este contenido.`,
          {
            sourceId: item.id,
            template: "keyword-by-title",
            variant: `${keywordIndex}-${variantIndex}`
          }
        );

        if (question) {
          questions.push(question);
        }
      });
    });
  });

  return questions;
}

function buildModuleQuestions(module, moduleItems, allModules) {
  const questions = [];

  moduleItems.forEach((item, index) => {
    const wrongModules = buildWrongModules(module, allModules, 3);

    const variants = [
      `¿A qué área pertenece el contenido "${item.cleanTitle}"?`,
      `¿En qué módulo encaja mejor "${item.cleanTitle}"?`,
      `¿Dónde clasificarías el contenido "${item.cleanTitle}"?`
    ];

    variants.forEach((questionText, variantIndex) => {
      const question = createQuestion(
        questionText,
        getModuleLabel(module),
        wrongModules,
        `Ese contenido está clasificado dentro del módulo de ${getModuleLabel(module)}.`,
        {
          sourceId: item.id,
          template: "module-by-title",
          variant: `${index}-${variantIndex}`
        }
      );

      if (question) {
        questions.push(question);
      }
    });
  });

  return questions;
}

function buildSequenceQuestions(module, moduleItems) {
  const questions = [];

  for (let index = 0; index < moduleItems.length - 1; index += 1) {
    const current = moduleItems[index];
    const next = moduleItems[index + 1];
    const wrongTitles = buildWrongTitles(next, moduleItems, 3);

    const variants = [
      `Dentro del orden actual del módulo ${getModuleLabel(module)}, ¿qué contenido aparece después de "${current.cleanTitle}"?`,
      `Según la secuencia actual del módulo ${getModuleLabel(module)}, ¿qué va después de "${current.cleanTitle}"?`,
      `En el listado actual de ${getModuleLabel(module)}, ¿qué contenido sigue a "${current.cleanTitle}"?`
    ];

    variants.forEach((questionText, variantIndex) => {
      const question = createQuestion(
        questionText,
        next.cleanTitle,
        wrongTitles,
        `En el orden actual del módulo, ese contenido aparece después del indicado.`,
        {
          sourceId: current.id,
          template: "next-in-sequence",
          variant: `${index}-${variantIndex}`
        }
      );

      if (question) {
        questions.push(question);
      }
    });
  }

  return questions;
}

function buildComparisonQuestions(module, moduleItems) {
  const questions = [];

  moduleItems.forEach((item, index) => {
    const words = dedupeStrings(
      item.cleanTitle
        .split(/[\s,/()+-]+/)
        .map((word) => word.trim())
        .filter((word) => word.length >= 4)
    );

    words.slice(0, 2).forEach((chosenWord, wordIndex) => {
      const wrongWords = buildWrongWords(chosenWord, moduleItems, 3);

      const variants = [
        `¿Qué término aparece en el contenido "${item.cleanTitle}"?`,
        `¿Cuál de estas palabras forma parte del título "${item.cleanTitle}"?`,
        `Selecciona un término incluido en "${item.cleanTitle}".`
      ];

      variants.forEach((questionText, variantIndex) => {
        const question = createQuestion(
          questionText,
          chosenWord,
          wrongWords,
          `Ese término forma parte del título del contenido.`,
          {
            sourceId: item.id,
            template: "word-in-title",
            variant: `${index}-${wordIndex}-${variantIndex}`
          }
        );

        if (question) {
          questions.push(question);
        }
      });
    });
  });

  return questions;
}

function dedupeQuestions(questions = [], module = "module") {
  const seen = new Set();

  return questions
    .filter(Boolean)
    .filter((question) => {
      const signature = `${question.question}||${question.options
        .map((option) => normalizeForCompare(option))
        .join("|")}`;

      if (seen.has(signature)) {
        return false;
      }

      seen.add(signature);
      return true;
    })
    .map((question, index) => ({
      ...question,
      id: getQuestionId(module, index)
    }));
}

function buildQuestionBankForModule(module) {
  const moduleItems = getCleanModuleItems(module);
  const allModules = dedupeStrings(learningContent.map((item) => item.module));

  if (!moduleItems.length) {
    return {
      title: `Quiz de ${getModuleLabel(module)}`,
      questions: []
    };
  }

  const questions = dedupeQuestions(
    [
      ...buildTitleQuestions(module, moduleItems),
      ...buildKeywordQuestions(module, moduleItems),
      ...buildModuleQuestions(module, moduleItems, allModules),
      ...buildSequenceQuestions(module, moduleItems),
      ...buildComparisonQuestions(module, moduleItems)
    ],
    module
  );

  return {
    title: `Quiz de ${getModuleLabel(module)}`,
    totalAvailableQuestions: questions.length,
    questions
  };
}

export function getModuleQuiz(module, questionCount = 10) {
  const quiz = buildQuestionBankForModule(module);

  return {
    title: quiz.title,
    totalAvailableQuestions: quiz.totalAvailableQuestions,
    questions: sampleSize(quiz.questions, questionCount)
  };
}
