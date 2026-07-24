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
  const text = String(value)
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
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
      `¿Cuál de estas palabras clave está asociada a "${item.cleanTitle}"?`,
      `¿Qué proceso de trabajo cubre el contenido "${item.cleanTitle}"?`,
      `¿Qué harías para gestionar "${item.cleanTitle.split(' ').slice(0,4).join(' ')}"?`
    ];

    variants.forEach((questionText, variantIndex) => {
      const question = createQuestion(
        questionText,
        item.cleanTitle,
        wrongTitles,
        `La keyword "${item.cleanKeywords[0] || item.cleanTitle}" está asociada a ese contenido.`,
        {
          sourceId: item.id,
          template: "keyword-identify-content",
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

function buildApplicationQuestions(module, moduleItems) {
  const questions = [];

  for (let index = 0; index < moduleItems.length - 1; index += 1) {
    const current = moduleItems[index];
    // (variable next ya no necesaria)
    const wrongTitles = buildWrongTitles(current, moduleItems, 3);

    const variants = [
      `¿Qué vídeo del módulo ${getModuleLabel(module)} tratarías para aprender sobre "${current.cleanKeywords[0] || current.cleanTitle}"?`,
      `¿Cuál de estos contenidos describe mejor lo que hace "${current.cleanTitle}"?`,
      `Si un empleado necesita conocer "${current.cleanKeywords[0] || current.cleanTitle}", ¿qué vídeo debe consultar?`
    ];

    variants.forEach((questionText, variantIndex) => {
      const question = createQuestion(
        questionText,
        current.cleanTitle,
        wrongTitles,
        `Ese vídeo cubre ese concepto dentro del módulo ${getModuleLabel(module)}.`,
        {
          sourceId: current.id,
          template: "application-by-keyword",
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

const STATIC_QUIZ = {
  administracion: [
    { question: "Para dar de alta una cuenta de caja o banco:", options: ["Alta de cuentas de tesoreria", "Alta de factura de gastos", "Remesa de nominas", "Asientos contables"], correctAnswer: 0, explanation: "Video 1.9.1." },
    { question: "Como se registra el pago periodico de un gasto recurrente como un alquiler?", options: ["Alta directa de factura de gastos", "Facturar gastos mediante contratos y vencimientos", "Remesa de cobros y pagos", "Arqueo de caja"], correctAnswer: 1, explanation: "Video 1.9.11." },
    { question: "Cuando un cliente paga usando el boton de cobro directo en la factura:", options: ["Crear anticipo de cobro", "Cobro de anticipo de pedido", "Cobro de factura boton", "Alta de remesas"], correctAnswer: 2, explanation: "Video 1.9.5." },
    { question: "Para enviar al banco un fichero con multiples pagos a proveedores:", options: ["Asientos contables", "Alta de remesas de cobros y pagos", "Facturacion en tanda", "Arqueo de caja"], correctAnswer: 1, explanation: "Video 1.9.12." },
    { question: "El arqueo de caja consiste en:", options: ["Revisar el balance contable", "Cuadrar y cerrar el saldo de la cuenta de caja", "Crear asientos manualmente", "Dar de alta conceptos de tesoreria"], correctAnswer: 1, explanation: "Video 1.9.8." },
    { question: "Para registrar manualmente un ingreso o gasto directo en tesoreria sin factura:", options: ["Alta de conceptos de tesoreria", "Alta de registro manual en tesoreria", "Crear inmovilizado", "Facturacion de albaran"], correctAnswer: 1, explanation: "Video 1.9.4." },
    { question: "Para anticipar un cobro a un cliente sin pedido ni factura previa:", options: ["Cobro de factura boton", "Cobro de anticipo de pedido", "Anticipo de cobro sin pedido ni operacion", "Aplicar anticipos de entidad"], correctAnswer: 2, explanation: "Video 1.9.9." },
    { question: "Para ver movimientos detallados de una cuenta contable concreta:", options: ["Balance de sumas y saldos", "Extracto o mayor de una cuenta", "Asientos contables", "Remesa de nominas"], correctAnswer: 1, explanation: "Video 1.9.19." },
    { question: "El balance de sumas y saldos sirve para:", options: ["Ver movimientos de una sola cuenta", "Tener vision global del estado contable de la empresa", "Registrar nominas", "Facturar albaranes"], correctAnswer: 1, explanation: "Video 1.9.18." },
    { question: "Para facturar varios albaranes de compra a la vez en una sola factura:", options: ["Facturacion en tanda de albaranes de compras", "Alta de factura de gastos", "Anadir albaranes a factura", "Configurar facturas de compras"], correctAnswer: 0, explanation: "Video 1.9.20." },
    { question: "Para anadir albaranes adicionales a una factura de compra ya existente:", options: ["Facturacion en tanda", "Anadir albaranes a factura de compra casar", "Configurar facturas de compras", "Registro manual"], correctAnswer: 1, explanation: "Video 1.9.25." },
    { question: "Para anular una factura de ventas emitida incorrectamente:", options: ["Eliminarla directamente", "Abonar la factura de ventas", "Crear asiento de correccion", "Modificar la factura original"], correctAnswer: 1, explanation: "Video 1.9.26." },
    { question: "El check en serie en albaranes permite que al facturar:", options: ["Se facturen automaticamente", "Se solicite la fecha de cada albaran", "Se agrupen por cliente", "Se envien remesas automaticamente"], correctAnswer: 1, explanation: "Video 1.9.23." },
    { question: "Para registrar un vehiculo o maquinaria como bien duradero en contabilidad:", options: ["Asiento contable manual", "Darlo de alta como inmovilizado", "Registrarlo en tesoreria", "Crear contrato"], correctAnswer: 1, explanation: "Video 1.9.24." },
    { question: "Para crear asientos contables de forma manual:", options: ["Balance de sumas y saldos", "Extracto de cuenta", "Crear asientos contables", "Alta de conceptos de tesoreria"], correctAnswer: 2, explanation: "Video 1.9.14." },
    { question: "La remesa de nominas sirve para:", options: ["Registrar horas de empleados", "Generar y enviar al banco el pago masivo de nominas", "Crear contratos de trabajo", "Facturar servicios"], correctAnswer: 1, explanation: "Video 1.9.13." },
    { question: "Para dar de alta un servicio facturable como transporte:", options: ["Alta de conceptos de tesoreria", "Alta de un servicio", "Alta de cuentas de tesoreria", "Crear inmovilizado"], correctAnswer: 1, explanation: "Video 1.9.3." },
    { question: "La diferencia entre remesa de cobros y remesa de pagos es:", options: ["Son identicas", "Cobros recoge lo que nos deben; pagos lo que debemos", "Pagos es solo para nominas", "No existen remesas de cobros"], correctAnswer: 1, explanation: "Video 1.9.12." },
    { question: "Para aplicar un anticipo ya existente a una factura de un cliente:", options: ["Crear nuevo anticipo", "Aplicacion de anticipos de la entidad", "Emitir abono por el anticipo", "Modificar la factura"], correctAnswer: 1, explanation: "Video 1.9.7." },
    { question: "Para facturar albaranes de ventas que incluyen ordenes de reparacion:", options: ["Facturarlos por separado", "Anadir albaranes OR a una factura de ventas", "Crear factura de servicios distinta", "Convertirlos a pedidos"], correctAnswer: 1, explanation: "Video 1.9.16." },
    { question: "Cuando un proveedor envia una factura, el primer paso para registrarla:", options: ["Crear asiento contable", "Dar de alta la factura de gastos", "Generar remesa de pagos", "Hacer arqueo"], correctAnswer: 1, explanation: "Video 1.9.10." },
    { question: "La facturacion en tanda de albaranes de ventas permite:", options: ["Cobrar varias facturas a la vez", "Generar facturas agrupando multiples albaranes", "Enviar albaranes por email", "Crear presupuestos en serie"], correctAnswer: 1, explanation: "Video 1.9.17." },
    { question: "Para cobrar correctamente el anticipo de un pedido de ventas:", options: ["Registrarlo como ingreso manual", "Creacion de cobro de anticipo de pedido de ventas", "Emitir factura y eliminar pedido", "Aplicarlo en el balance"], correctAnswer: 1, explanation: "Video 1.9.6." },
    { question: "Para seleccionar un albaran de compra especifico y facturarlo directamente:", options: ["Facturacion en tanda", "Facturacion de albaran de compras por seleccion", "Alta de factura de gastos manual", "Anadir a factura existente"], correctAnswer: 1, explanation: "Video 1.9.21." },
    { question: "Para crear una factura de servicios vendidos sin productos fisicos:", options: ["Grabacion de albaran de ventas", "Crear factura de venta de servicios", "Ingreso manual en tesoreria", "Emitirla desde taller"], correctAnswer: 1, explanation: "Video 1.9.15." },
    { question: "Para dar de alta un concepto de tesoreria como ingreso por ventas:", options: ["Alta de cuentas de tesoreria", "Alta de conceptos de tesoreria", "Asientos contables", "Registro manual"], correctAnswer: 1, explanation: "Video 1.9.2." }
  ],
  sales: [
    { question: "Para registrar un cliente nuevo en el sistema:", options: ["Alta de entidad", "Grabar pedido de ventas", "Crear presupuesto", "Alta de tarifa"], correctAnswer: 0, explanation: "Video 1.5.1." },
    { question: "Para asignar un numero de bastidor a una operacion comercial:", options: ["Cambiar modelo de vehiculo", "Asignar bastidores a operaciones comerciales", "Convertir a unidad demo", "Cambiar propietario"], correctAnswer: 1, explanation: "Video 1.3.11." },
    { question: "Un vehiculo de demostracion se crea mediante:", options: ["Alta de entidad", "Cambiar propietario", "Convertir bastidor a unidad demo", "Grabar albaran"], correctAnswer: 2, explanation: "Video 1.3.7." },
    { question: "El proceso especifico para vender un vehiculo de ocasion VO es:", options: ["Grabar pedido de ventas", "Operacion comercial con VO", "Panel de Venta Directa", "Grabar albaran"], correctAnswer: 1, explanation: "Video 1.3.14." },
    { question: "El Panel de Venta Directa sirve para:", options: ["Gestionar presupuestos", "Realizar ventas rapidas sin pedido ni albaran", "Ver historico de ventas", "Configurar tarifas"], correctAnswer: 1, explanation: "Video 1.8.14." },
    { question: "Para copiar lineas de un documento a otro:", options: ["Reescribir manualmente", "Copiar y pegar entre documentos", "Duplicar el documento", "Usar operaciones genericas"], correctAnswer: 1, explanation: "Video 1.0.7." },
    { question: "Las cuentas bancarias de un cliente se gestionan en:", options: ["Alta de entidad", "Datos historicos", "Cuentas bancarias por defecto activa", "Relaciones de entidades"], correctAnswer: 2, explanation: "Video 1.5.3." },
    { question: "Para ver el riesgo crediticio de un cliente:", options: ["Alta de entidad", "Riesgo de entidades", "Datos historicos", "Cuentas bancarias"], correctAnswer: 1, explanation: "Video 1.5.4." },
    { question: "Los datos de historicos tipos de pago y cuenta contable de un cliente estan en:", options: ["Alta de entidad", "Relaciones de entidades", "Datos importantes Historicos Tipos de pago Cuenta contable", "Riesgo de entidades"], correctAnswer: 2, explanation: "Video 1.5.5." },
    { question: "Para gestionar relaciones entre entidades vinculadas:", options: ["Alta de entidad", "Relaciones de entidades", "Cuentas bancarias", "Datos historicos"], correctAnswer: 1, explanation: "Video 1.5.2." },
    { question: "Las tarifas generales de ventas aplicables a clientes se gestionan en:", options: ["Articulos y tarifa de articulos", "Tarifas de ventas", "Gestion de precios y tarifas", "Panel de Venta Directa"], correctAnswer: 1, explanation: "Video 1.6." },
    { question: "Para consultar o modificar la tarifa especifica de un articulo:", options: ["Tarifas de ventas", "Gestion de precios y tarifas de ventas", "Articulos y tarifa de articulos", "Panel de Venta Directa"], correctAnswer: 2, explanation: "Video 1.4." },
    { question: "La gestion de precios especiales o descuentos por cliente se hace en:", options: ["Tarifas de ventas", "Articulos y tarifa de articulos", "Gestion de precios y tarifas de ventas", "Alta de entidad"], correctAnswer: 2, explanation: "Video 1.8.15." },
    { question: "Para filtrar partir o multipartir documentos en operaciones genericas:", options: ["Copiar y pegar entre documentos", "Operaciones genericas filtrar partir multipartir", "Panel de Venta Directa", "Grabar albaran"], correctAnswer: 1, explanation: "Video 1.0.6." },
    { question: "Para grabar un presupuesto de ventas al cliente:", options: ["Grabacion de un pedido de ventas", "Grabacion de un presupuesto de ventas", "Grabacion de un albaran de ventas", "Panel de Venta Directa"], correctAnswer: 1, explanation: "Video 1.8.1." },
    { question: "Para grabar un pedido de ventas confirmado:", options: ["Grabacion de un presupuesto", "Grabacion de un pedido de ventas", "Grabacion de un albaran", "Panel de Venta Directa"], correctAnswer: 1, explanation: "Video 1.8.2." },
    { question: "Para grabar un albaran de ventas entrega de mercancia:", options: ["Grabacion de pedido", "Grabacion de presupuesto", "Grabacion de un albaran de ventas", "Cobro de factura boton"], correctAnswer: 2, explanation: "Video 1.8.3." },
    { question: "Para gestionar los accesorios incluidos en una operacion comercial:", options: ["Panel de Venta Directa", "Gestion de accesorios en operaciones", "Asignar bastidores", "Tarifas de ventas"], correctAnswer: 1, explanation: "Video 1.3.13." },
    { question: "Para cambiar el propietario de un vehiculo existen:", options: ["Un unico metodo", "Dos metodos distintos", "Tres metodos distintos", "No se puede cambiar"], correctAnswer: 1, explanation: "Video 1.3.9." },
    { question: "Para cambiar el modelo o el color de un vehiculo ya registrado:", options: ["Crear vehiculo nuevo", "Cambiar modelo de vehiculo o el color", "Modificar desde el bastidor", "Solo puede el administrador"], correctAnswer: 1, explanation: "Video 1.3.8." },
    { question: "Para cobrar el anticipo solicitado al hacer un pedido de ventas:", options: ["Cobro de factura boton", "Creacion cobro de anticipo de pedido de ventas", "Anticipo sin pedido", "Remesa de cobros"], correctAnswer: 1, explanation: "Video 1.9.6." },
    { question: "Para crear un anticipo de cobro a cliente sin ningun pedido previo:", options: ["Cobro de factura boton", "Cobro de anticipo de pedido", "Anticipo de cobro sin pedido ni operacion", "Remesa de cobros"], correctAnswer: 2, explanation: "Video 1.9.9." },
    { question: "Para cobrar una factura ya emitida usando el boton de la propia factura:", options: 
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sampleSize(arr, n) {
  return shuffleArray(arr).slice(0, Math.min(n, arr.length));
}

const STATIC_QUIZ = {
  administracion: [
    { question: "Para dar de alta una cuenta de caja o banco en el sistema, debes acceder a:", options: ["Alta de cuentas de tesoreria", "Alta de factura de gastos", "Creacion de remesa de nominas", "Asientos contables"], correctAnswer: 0, explanation: "El video 1.9.1 explica como dar de alta cuentas de tesoreria." },
    { question: "Que proceso se utiliza para registrar el pago periodico de un alquiler u otro gasto recurrente?", options: ["Alta de factura de gastos", "Facturar gastos mediante contratos y vencimientos", "Alta de remesas de cobros y pagos", "Arqueo y cierre de caja"], correctAnswer: 1, explanation: "El video 1.9.11 cubre la facturacion de gastos mediante contratos y vencimientos." },
    { question: "Cuando un cliente paga una factura mediante el boton de cobro directo, que proceso corresponde?", options: ["Crear anticipo de cobro", "Creacion cobro de anticipo de pedido", "Cobro de factura boton", "Alta de remesas de cobros"], correctAnswer: 2, explanation: "El video 1.9.5 explica el cobro de factura mediante boton." },
    { question: "Para enviar al banco un fichero con multiples pagos a proveedores, se usa:", options: ["Asientos contables", "Alta de remesas de cobros y pagos", "Facturacion en tanda de albaranes", "Arqueo y cierre de caja"], correctAnswer: 1, explanation: "El video 1.9.12 cubre el alta de remesas de cobros y pagos." },
    { question: "El proceso de arqueo consiste en:", options: ["Revisar el balance de sumas y saldos", "Cuadrar y cerrar el saldo de la cuenta de caja", "Crear asientos contables manualmente", "Dar de alta un nuevo concepto de tesoreria"], correctAnswer: 1, explanation: "El video 1.9.8 explica el arqueo y cierre de cuentas de tesoreria caja." },
    { question: "Para registrar manualmente un ingreso o gasto directo en tesoreria sin factura, se utiliza:", options: ["Alta de conceptos de tesoreria", "Alta de registro manual en tesoreria", "Crear inmovilizado", "Facturacion de albaran de compras"], correctAnswer: 1, explanation: "El video 1.9.4 muestra como hacer un registro manual en tesoreria." },
    { question: "Que video explica como anticipar un cobro a un cliente que aun no tiene pedido ni factura?", options: ["Cobro de factura boton", "Creacion cobro de anticipo de pedido de ventas", "Crear anticipo de cobro a cliente sin pedido ni operacion", "Aplicacion de anticipos asociados a la entidad"], correctAnswer: 2, explanation: "El video 1.9.9 cubre la creacion de anticipos de cobro sin pedido ni operacion." },
    { question: "Para ver el detalle de movimientos de una cuenta contable concreta, accedes a:", options: ["Balance de sumas y saldos", "Extracto o mayor de una cuenta", "Asientos contables", "Remesa de nominas"], correctAnswer: 1, explanation: "El video 1.9.19 explica como consultar el extracto o mayor de una cuenta." },
    { question: "El balance de sumas y saldos sirve para:", options: ["Ver el detalle de una cuenta concreta", "Tener una vision global del estado contable de la empresa", "Registrar pagos de nominas", "Facturar albaranes de ventas en bloque"], correctAnswer: 1, explanation: "El video 1.9.18 explica como consultar el balance de sumas y saldos." },
    { question: "Para facturar varios albaranes de compra a la vez en una sola factura, se usa:", options: ["Facturacion en tanda de albaranes de compras", "Alta de factura de gastos", "Anadir albaranes a factura de compra", "Configurar facturas de compras"], correctAnswer: 0, explanation: "El video 1.9.20 cubre la facturacion en tanda de albaranes de compras." },
    { question: "Si necesitas anadir albaranes adicionales a una factura de compra ya existente, el proceso es:", options: ["Facturacion en tanda", "Anadir albaranes a una factura de compra (casar)", "Configurar y modificar facturas de compras", "Alta de registro manual en tesoreria"], correctAnswer: 1, explanation: "El video 1.9.25 explica como anadir albaranes a una factura de compra existente." },
    { question: "Para anular una factura de ventas emitida incorrectamente, debes:", options: ["Eliminar la factura directamente", "Abonar la factura de ventas", "Crear un asiento contable de correccion", "Modificar la factura original"], correctAnswer: 1, explanation: "El video 1.9.26 explica el proceso de abono de facturas de ventas." },
    { question: "Que permite configurar el check en serie en albaranes de ventas?", options: ["Facturar automaticamente sin confirmar", "Que al facturar solicite la fecha de cada albaran", "Agrupar albaranes por cliente", "Enviar remesas automaticamente"], correctAnswer: 1, explanation: "El video 1.9.23 muestra como usar el check en serie para que solicite fecha al facturar." },
    { question: "Para registrar un bien duradero de la empresa como un vehiculo o maquinaria en contabilidad:", options: ["Se crea un asiento contable manual", "Se da de alta como inmovilizado", "Se registra en tesoreria como gasto", "Se crea un contrato de vencimiento"], correctAnswer: 1, explanation: "El video 1.9.24 explica como crear un inmovilizado." },
    { question: "Para crear los asientos contables de forma manual en el sistema, el proceso es:", options: ["Balance de sumas y saldos", "Extracto de cuenta", "Crear asientos contables", "Alta de conceptos de tesoreria"], correctAnswer: 2, explanation: "El video 1.9.14 explica como crear asientos contables manualmente." },
    { question: "La remesa de nominas sirve para:", options: ["Registrar las horas de los empleados", "Generar y enviar al banco el pago masivo de nominas", "Crear contratos de trabajo", "Facturar servicios a clientes"], correctAnswer: 1, explanation: "El video 1.9.13 cubre la creacion de remesas de nominas." },
    { question: "Para dar de alta un servicio facturable en el sistema (por ejemplo, servicio de transporte):", options: ["Alta de conceptos de tesoreria", "Alta de un servicio", "Alta de cuentas de tesoreria", "Crear inmovilizado"], correctAnswer: 1, explanation: "El video 1.9.3 muestra como dar de alta un servicio." },
    { question: "Que diferencia hay entre una remesa de cobros y una remesa de pagos?", options: ["Son identicas, solo cambia el nombre", "La de cobros recoge cantidades que nos deben; la de pagos, lo que debemos nosotros", "La de pagos es para nominas y la de cobros para facturas", "No existen remesas de cobros, solo de pagos"], correctAnswer: 1, explanation: "El video 1.9.12 explica las remesas de cobros y pagos y su diferencia." },
    { question: "Para aplicar un anticipo que ya existe en el sistema a una factura de un cliente:", options: ["Se crea un nuevo anticipo", "Se usa la opcion de aplicacion de anticipos asociados a la entidad", "Se emite un abono por el importe del anticipo", "Se modifica la factura original"], correctAnswer: 1, explanation: "El video 1.9.7 explica la aplicacion de anticipos asociados a la entidad." },
    { question: "Al facturar albaranes de ventas que incluyen ordenes de reparacion (OR), debes:", options: ["Facturarlos por separado siempre", "Usar la opcion de anadir albaranes OR a una factura de ventas", "Crear una factura de servicios distinta", "Convertirlos primero en pedidos"], correctAnswer: 1, explanation: "El video 1.9.16 explica como anadir albaranes OR a una factura de ventas." },
    { question: "Cuando un proveedor te envia una factura de compra, el primer paso para registrarla es:", options: ["Crear un asiento contable", "Dar de alta la factura de gastos", "Generar una remesa de pagos", "Hacer el arqueo de caja"], correctAnswer: 1, explanation: "El video 1.9.10 cubre el alta de facturas de gastos." },
    { question: "La facturacion en tanda de albaranes de ventas permite:", options: ["Cobrar varias facturas a la vez", "Generar una o varias facturas agrupando multiples albaranes en un solo proceso", "Enviar albaranes por email automaticamente", "Crear presupuestos en serie"], correctAnswer: 1, explanation: "El video 1.9.17 explica la facturacion en tanda de albaranes de ventas." },
    { question: "Para que un anticipo de pedido de ventas quede correctamente cobrado en el sistema:", options: ["Se registra como ingreso en tesoreria manual", "Se usa el proceso de creacion de cobro de anticipo de pedido de ventas", "Se emite una factura de anticipo y se elimina el pedido", "Se aplica directamente en el balance"], correctAnswer: 1, explanation: "El video 1.9.6 cubre la creacion del cobro de anticipo de pedido de ventas." },
    { question: "Para modificar como se configuran o agrupan las facturas de compra de gastos:", options: ["Se accede a asientos contables", "Se usa la opcion de configurar y modificar facturas de compras gastos", "Se edita directamente la remesa", "Se recrea la factura desde cero"], correctAnswer: 1, explanation: "El video 1.9.22 muestra como configurar y modificar facturas de compras gastos." },
    { question: "Para seleccionar un albaran de compra especifico y facturarlo directamente:", options: ["Facturacion en tanda", "Facturacion de albaran de compras por seleccion", "Alta de factura de gastos manualmente", "Anadir a factura existente"], correctAnswer: 1, explanation: "El video 1.9.21 explica la facturacion de albaran de compras por seleccion." },
    { question: "Para crear una factura de venta de servicios (no de productos):", options: ["Se usa el proceso de albaran de ventas", "Se crea mediante la opcion de factura de venta de servicios", "Se registra como ingreso manual en tesoreria", "Se emite desde el modulo de taller"], correctAnswer: 1, explanation: "El video 1.9.15 explica como crear una factura de venta de servicios." }
  ],
  const STATIC_QUIZ = {
    { question: "Para crear un cliente nuevo en el sistema, el primer paso es:", options: ["Alta de entidad", "Grabacion de un pedido de ventas", "Crear un presupuesto", "Alta de tarifa de ventas"], correctAnswer: 0, explanation: "El video 1.5.1 explica el proceso de alta de entidad (cliente)." },
    { question: "Que proceso permite asignar un numero de bastidor a una operacion comercial?", options: ["Cambiar modelo de vehiculo", "Asignar bastidores a operaciones comerciales", "Convertir bastidor a unidad demo", "Cambiar propietario de vehiculo"], correctAnswer: 1, explanation: "El video 1.3.11 cubre la asignacion de bastidores a operaciones comerciales." },
    { question: "Un vehiculo de demostracion en el sistema se crea mediante:", options: ["Alta de entidad", "Cambiar propietario", "Convertir un bastidor a unidad demo", "Grabacion de albaran de ventas"], correctAnswer: 2, explanation: "El video 1.3.7 explica como convertir un bastidor a unidad demo." },
    { question: "Para vender un vehiculo de ocasion (VO), el proceso especifico es:", options: ["Grabacion de pedido de ventas", "Pasos de una operacion comercial con VO", "Panel de Venta Directa", "Grabacion de albaran de ventas"], correctAnswer: 1, explanation: "El video 1.3.14 detalla los pasos de una operacion comercial con VO." },
    { question: "El Panel de Venta Directa sirve para:", options: ["Gestionar presupuestos", "Realizar ventas rapidas sin pasar por pedido ni albaran", "Ver el historico de ventas", "Configurar tarifas"], correctAnswer: 1, explanation: "El video 1.8.14 explica el Panel de Venta Directa." },
    { question: "Para facturar varios albaranes de ventas en una sola operacion masiva:", options: ["Grabacion de un albaran de ventas", "Facturacion en tanda de albaranes de ventas", "Panel de Venta Directa", "Cobro de factura boton"], correctAnswer: 1, explanation: "El video 1.9.17 cubre la facturacion en tanda de albaranes de
Add-Content $script -Encoding UTF8 -Value @'
$newFunctions = @"
const STATIC_QUIZ = {
  administracion: [
    { question: "Para dar de alta una cuenta de caja o banco, debes acceder a:", options: ["Alta de cuentas de tesoreria", "Alta de factura de gastos", "Remesa de nominas", "Asientos contables"], correctAnswer: 0, explanation: "Video 1.9.1: alta de cuentas de tesoreria." },
    { question: "Como se registra el pago periodico de un gasto recurrente como un alquiler?", options: ["Alta de factura de gastos directa", "Facturar gastos mediante contratos y vencimientos", "Remesa de cobros y pagos", "Arqueo de caja"], correctAnswer: 1, explanation: "Video 1.9.11: facturacion de gastos mediante contratos y vencimientos." },
    { question: "Cuando un cliente paga una factura usando el boton de cobro directo, el proceso es:", options: ["Crear anticipo de cobro", "Cobro de anticipo de pedido", "Cobro de factura boton", "Alta de remesas de cobros"], correctAnswer: 2, explanation: "Video 1.9.5: cobro de factura mediante boton." },
    { question: "Para enviar al banco un fichero con multiples pagos a proveedores se usa:", options: ["Asientos contables", "Alta de remesas de cobros y pagos", "Facturacion en tanda", "Arqueo de caja"], correctAnswer: 1, explanation: "Video 1.9.12: alta de remesas de cobros y pagos." },
    { question: "El arqueo de caja consiste en:", options: ["Revisar el balance contable", "Cuadrar y cerrar el saldo de la cuenta de caja", "Crear asientos manualmente", "Dar de alta conceptos de tesoreria"], correctAnswer: 1, explanation: "Video 1.9.8: arqueo y cierre de cuentas de tesoreria caja." },
    { question: "Para registrar manualmente un ingreso o gasto directo en tesoreria sin factura:", options: ["Alta de conceptos de tesoreria", "Alta de registro manual en tesoreria", "Crear inmovilizado", "Facturacion de albaran"], correctAnswer: 1, explanation: "Video 1.9.4: registro manual en tesoreria." },
    { question: "Para anticipar un cobro a un cliente sin pedido ni factura previa:", options: ["Cobro de factura boton", "Cobro de anticipo de pedido de ventas", "Crear anticipo de cobro sin pedido ni operacion", "Aplicar anticipos de entidad"], correctAnswer: 2, explanation: "Video 1.9.9: anticipo de cobro sin pedido ni operacion." },
    { question: "Para ver el detalle de movimientos de una cuenta contable concreta:", options: ["Balance de sumas y saldos", "Extracto o mayor de una cuenta", "Asientos contables", "Remesa de nominas"], correctAnswer: 1, explanation: "Video 1.9.19: extracto o mayor de una cuenta." },
    { question: "El balance de sumas y saldos sirve para:", options: ["Ver movimientos de una cuenta", "Tener vision global del estado contable", "Registrar nominas", "Facturar albaranes"], correctAnswer: 1, explanation: "Video 1.9.18: balance de sumas y saldos." },
    { question: "Para facturar varios albaranes de compra a la vez en una sola factura:", options: ["Facturacion en tanda de albaranes de compras", "Alta de factura de gastos", "Anadir albaranes a factura", "Configurar facturas de compras"], correctAnswer: 0, explanation: "Video 1.9.20: facturacion en tanda de albaranes de compras." },
    { question: "Para anadir albaranes adicionales a una factura de compra ya existente:", options: ["Facturacion en tanda", "Anadir albaranes a factura de compra (casar)", "Configurar facturas de compras", "Registro manual en tesoreria"], correctAnswer: 1, explanation: "Video 1.9.25: anadir albaranes a factura de compra existente." },
    { question: "Para anular una factura de ventas emitida incorrectamente:", options: ["Eliminarla directamente", "Abonar la factura de ventas", "Crear asiento de correccion", "Modificar la factura original"], correctAnswer: 1, explanation: "Video 1.9.26: abono de facturas de ventas." },
    { question: "El check en serie en albaranes de ventas permite que al facturar:", options: ["Se facturen automaticamente", "Se solicite la fecha de cada albaran", "Se agrupen por cliente", "Se envien remesas automaticamente"], correctAnswer: 1, explanation: "Video 1.9.23: check en serie solicita fecha al facturar albaranes." },
    { question: "Para registrar un bien duradero como un vehiculo o maquinaria en contabilidad:", options: ["Asiento contable manual", "Darlo de alta como inmovilizado", "Registrarlo en tesoreria", "Crear contrato de vencimiento"], correctAnswer: 1, explanation: "Video 1.9.24: alta de inmovilizado." },
    { question: "Para crear asientos contables de forma manual:", options: ["Balance de sumas y saldos", "Extracto de cuenta", "Crear asientos contables", "Alta de conceptos de tesoreria"], correctAnswer: 2, explanation: "Video 1.9.14: crear asientos contables manualmente." },
    { question: "La remesa de nominas sirve para:", options: ["Registrar horas de empleados", "Generar y enviar al banco el pago masivo de nominas", "Crear contratos de trabajo", "Facturar servicios a clientes"], correctAnswer: 1, explanation: "Video 1.9.13: creacion de remesas de nominas." },
    { question: "Para dar de alta un servicio facturable como transporte o mantenimiento:", options: ["Alta de conceptos de tesoreria", "Alta de un servicio", "Alta de cuentas de tesoreria", "Crear inmovilizado"], correctAnswer: 1, explanation: "Video 1.9.3: alta de un servicio." },
    { question: "La diferencia entre remesa de cobros y remesa de pagos es:", options: ["Son identicas", "Cobros recoge lo que nos deben; pagos lo que debemos", "Pagos es para nominas y cobros para facturas", "No existen remesas de cobros"], correctAnswer: 1, explanation: "Video 1.9.12: remesas de cobros y pagos." },
    { question: "Para aplicar un anticipo existente a una factura de un cliente:", options: ["Crear un nuevo anticipo", "Usar la opcion de aplicacion de anticipos de la entidad", "Emitir un abono por el anticipo", "Modificar la factura original"], correctAnswer: 1, explanation: "Video 1.9.7: aplicacion de anticipos asociados a la entidad." },
    { question: "Para facturar albaranes de ventas que incluyen ordenes de reparacion:", options: ["Facturarlos por separado siempre", "Usar anadir albaranes OR a factura de ventas", "Crear factura de servicios distinta", "Convertirlos a pedidos primero"], correctAnswer: 1, explanation: "Video 1.9.16: anadir albaranes OR a factura de ventas." },
    { question: "Cuando un proveedor te envia una factura, el primer paso para registrarla es:", options: ["Crear asiento contable", "Dar de alta la factura de gastos", "Generar remesa de pagos", "Hacer arqueo de caja"], correctAnswer: 1, explanation: "Video 1.9.10: alta de factura de gastos." },
    { question: "La facturacion en tanda de albaranes de ventas permite:", options: ["Cobrar varias facturas a la vez", "Generar facturas agrupando multiples albaranes en un proceso", "Enviar albaranes por email", "Crear presupuestos en serie"], correctAnswer: 1, explanation: "Video 1.9.17: facturacion en tanda de albaranes de ventas." },
    { question: "Para que el cobro de un anticipo de pedido quede correcto en el sistema:", options: ["Registrarlo como ingreso manual", "Usar creacion de cobro de anticipo de pedido de ventas", "Emitir factura y eliminar pedido", "Aplicarlo en el balance"], correctAnswer: 1, explanation: "Video 1.9.6: creacion del cobro de anticipo de pedido de ventas." },
    { question: "Para seleccionar un albaran de compra especifico y facturarlo directamente:", options: ["Facturacion en tanda", "Facturacion de albaran de compras por seleccion", "Alta de factura de gastos manual", "Anadir a factura existente"], correctAnswer: 1, explanation: "Video 1.9.21: facturacion de albaran de compras por seleccion." },
    { question: "Para crear una factura de venta de servicios (no de productos fisicos):", options: ["Proceso de albaran de ventas", "Opcion de factura de venta de servicios", "Ingreso manual en tesoreria", "Emitirla desde el modulo de taller"], correctAnswer: 1, explanation: "Video 1.9.15: factura de venta de servicios." },
    { question: "Para dar de alta un concepto de tesoreria (por ejemplo: ingreso por ventas):", options: ["Alta de cuentas de tesoreria", "Alta de conceptos de tesoreria", "Asientos contables", "Registro manual en tesoreria"], correctAnswer: 1, explanation: "Video 1.9.2: alta de conceptos de tesoreria." }
  ],
  sales: [
    { question: "Para registrar un cliente nuevo en el sistema el primer paso es:", options: ["Alta de entidad", "Grabar pedido de ventas", "Crear presupuesto", "Alta de tarifa"], correctAnswer: 0, explanation: "Video 1.5.1: alta de entidad." },
    { question: "Para asignar un numero de bastidor a una operacion comercial:", options: ["Cambiar modelo de vehiculo", "Asignar bastidores a operaciones comerciales", "Convertir a unidad demo", "Cambiar propietario"], correctAnswer: 1, explanation: "Video 1.3.11: asignar bastidores a operaciones comerciales." },
    { question: "Un vehiculo de demostracion se crea mediante:", options: ["Alta de entidad", "Cambiar propietario", "Convertir bastidor a unidad demo", "Grabar albaran"], correctAnswer: 2, explanation: "Video 1.3.7: convertir bastidor a unidad demo." },
    { question: "El proceso especifico para vender un vehiculo de ocasion (VO) es:", options: ["Grabar pedido de ventas", "Operacion comercial con VO", "Panel de Venta Directa", "Grabar albaran"], correctAnswer: 1, explanation: "Video 1.3.14: operacion comercial con VO." },
    { question: "El Panel de Venta Directa sirve para:", options: ["Gestionar presupuestos", "Realizar ventas rapidas sin pedido ni albaran", "Ver historico de ventas", "Configurar tarifas"], correctAnswer: 1, explanation: "Video 1.8.14: Panel de Venta Directa." },
    { question: "Para copiar lineas de un documento a otro (presupuesto, pedido, albaran):", options: ["Reescribir manualmente", "Copiar y pegar entre documentos", "Duplicar el documento entero", "Usar operaciones genericas"], correctAnswer: 1, explanation: "Video 1.0.7: copiar y pegar entre documentos." },
    { question: "Las cuentas bancarias de un cliente se gestionan en:", options: ["Alta de entidad", "Datos historicos", "Cuentas bancarias - por defecto - activa", "Relaciones de entidades"], correctAnswer: 2, explanation: "Video 1.5.3: cuentas bancarias de la entidad." },
    { question: "Para ver el riesgo crediticio de un cliente:", options: ["Alta de entidad", "Riesgo de entidades", "Datos historicos", "Cuentas bancarias"], correctAnswer: 1, explanation: "Video 1.5.4: riesgo de entidades." },
    { question: "Los datos de historicos de compras, tipos de pago y cuenta contable de un cliente estan en:", options: ["Alta de entidad", "Relaciones de entidades", "Datos importantes - Historicos - Tipos de pago - Cuenta contable", "Riesgo de entidades"], correctAnswer: 2, explanation: "Video 1.5.5: datos importantes, historicos, tipos de pago y cuenta contable." },
    { question: "Para gestionar las relaciones entre entidades (empresa matriz y filiales, etc.):", options: ["Alta de entidad", "Relaciones de entidades", "Cuentas bancarias", "Datos historicos"], correctAnswer: 1, explanation: "Video 1.5.2: relaciones de entidades." },
    { question: "Las tarifas generales de ventas aplicables a clientes se gestionan en:", options: ["Articulos y tarifa de articulos", "Tarifas de ventas", "Precios y tarifas de ventas", "Panel de Venta Directa"], correctAnswer: 1, explanation: "Video 1.6: tarifas de ventas." },
    { question: "Para consultar o modificar la tarifa especifica de un articulo:", options: ["Tarifas de ventas", "Gestion de precios y tarifas de ventas", "Articulos y tarifa de articulos", "Panel de Venta Directa"], correctAnswer: 2, explanation: "Video 1.4: articulos y tarifa de articulos." },
    { question: "La gestion de precios especiales o descuentos por cliente se hace en:", options: ["Tarifas de ventas", "Articulos y tarifa de articulos", "Gestion de precios y tarifas de ventas", "Alta de entidad"], correctAnswer: 2, explanation: "Video 1.8.15: gestion de precios y tarifas de ventas." },
    { question: "Para filtrar documentos, partirlos o multipartirlos en operaciones genericas:", options: ["Copiar y pegar entre documentos", "Operaciones genericas - filtrar - partir - multipartir", "Panel de Venta Directa", "Grabar albaran de ventas"], correctAnswer: 1, explanation: "Video 1.0.6: operaciones genericas, filtrar, partir, multipartir." },
    { question: "Para grabar un presupuesto de ventas al cliente:", options: ["Grabacion de un pedido de ventas", "Grabacion de un presupuesto de ventas", "Grabacion de un albaran de ventas", "Panel de Venta Directa"], correctAnswer: 1, explanation: "Video 1.8.1: grabacion de presupuesto de ventas." },
    { question: "Para grabar un pedido de ventas confirmado:", options: Add-Content $script -Encoding UTF8 -Value @'
    { question: "Para grabar un pedido de ventas confirmado:", options: ["Grabacion de un presupuesto de ventas", "Grabacion de un pedido de ventas", "Grabacion de un albaran de ventas", "Panel de Venta Directa"], correctAnswer: 1, explanation: "Video 1.8.2: grabacion de pedido de ventas." },
    { question: "Para grabar un albaran de ventas (entrega de mercancia):", options: ["Grabacion de pedido", "Grabacion de presupuesto", "Grabacion de un albaran de ventas", "Cobro de factura boton"], correctAnswer: 2, explanation: "Video 1.8.3: grabacion de albaran de ventas." },
    { question: "Para gestionar los accesorios incluidos en una operacion comercial:", options: ["Panel de Venta Directa", "Gestion de accesorios en operaciones", "Asignar bastidores", "Tarifas de ventas"], correctAnswer: 1, explanation: "Video 1.3.13: gestion de accesorios en operaciones." },
    { question: "Para cambiar el propietario de un vehiculo existen:", options: ["Un unico metodo", "Dos metodos distintos", "Tres metodos distintos", "No se puede cambiar"], correctAnswer: 1, explanation: "Video 1.3.9: cambiar propietario de vehiculo con 2 metodos." },
    { question: "Para cambiar el modelo o el color de un vehiculo ya registrado:", options: ["Hay que crear un vehiculo nuevo", "Se usa la opcion cambiar modelo de vehiculo o el color", "Se modifica desde el bastidor", "Solo puede hacerlo el administrador"], correctAnswer: 1, explanation: "Video 1.3.8: cambiar modelo de vehiculo o el color." },
    { question: "Para facturar varios albaranes de ventas en bloque en un solo proceso:", options: ["Grabar albaran de ventas", "Facturacion en tanda de albaranes de ventas", "Panel de Venta Directa", "Cobro de factura boton"], correctAnswer: 1, explanation: "Video 1.9.17: facturacion en tanda de albaranes de ventas." },
    { question: "Para crear una factura de servicios vendidos al cliente (sin productos):", options: ["Grabacion de albaran de ventas", "Crear factura de venta de servicios", "Cobro de factura boton", "Alta de entidad"], correctAnswer: 1, explanation: "Video 1.9.15: factura de venta de servicios." },
    { question: "Para anadir albaranes de ordenes de reparacion a una factura de ventas:", options: ["Crear factura de servicios aparte", "Anadir albaranes ORs a una factura de ventas", "Grabar nuevo albaran", "Usar facturacion en tanda"], correctAnswer: 1, explanation: "Video 1.9.16: anadir albaranes OR a factura de ventas." },
    { question: "Para crear un anticipo de cobro a un cliente sin pedido ni operacion previa:", options: ["Cobro de factura boton", "Cobro de anticipo de pedido", "Crear anticipo de cobro a cliente sin pedido ni operacion", "Remesa de cobros"], correctAnswer: 2, explanation: "Video 1.9.9: anticipo de cobro sin pedido ni operacion." },
    { question: "Para cobrar el anticipo que se pidio al hacer un pedido de ventas:", options: ["Cobro de factura boton", "Creacion cobro de anticipo de pedido de ventas", "Anticipo sin pedido", "Remesa de cobros"], correctAnswer: 1, explanation: "Video 1.9.6: cobro de anticipo de pedido de ventas." },
    { question: "Para cobrar una factura ya emitida usando el boton de la propia factura:", options: ["Creacion cobro de anticipo de pedido", "Anticipo sin pedido", "Cobro de factura boton", "Remesa de cobros y pagos"], correctAnswer: 2, explanation: "Video 1.9.5: cobro de factura boton." }
  ],
  workshop: [
    { question: "Para gestionar la agenda y los calendarios del taller:", options: ["Alta de OR vehiculo cliente", "Agenda de taller y calendarios", "Cita con cliente existente", "Fichaje de mecanicos"], correctAnswer: 1, explanation: "Video 1.10.5: agenda de taller y calendarios." },
    { question: "Cuando llega un vehiculo con danos de un siniestro, el proceso especifico es:", options: ["Alta de OR vehiculo cliente", "Gestion de siniestros", "Alta de cita con vehiculo de cortesia", "Renovacion de una cita"], correctAnswer: 1, explanation: "Video 1.10.3: gestion de siniestros." },
    { question: "Para gestionar reparaciones cubiertas por garantia de fabrica (franquicia):", options: ["Gestion de siniestros", "Gestion de franquicias", "Alta de OR desde cita", "Fichaje de mecanicos"], correctAnswer: 1, explanation: "Video 1.10.2: gestion de franquicias." },
    { question: "El control de entrada y salida de los mecanicos al trabajo se hace con:", options: ["Agenda de taller", "Gestion de siniestros", "Fichaje de mecanicos", "Alta de OR tempario"], correctAnswer: 2, explanation: "Video 1.10.1: fichaje de mecanicos." },
    { question: "Cuando el cliente y su vehiculo ya estan en el sistema, la cita se crea con:", options: ["Cita con cliente y vehiculos no existentes", "Cita con cliente y vehiculos existentes", "Renovacion de una cita", "Alta de cita con vehiculo de cortesia"], correctAnswer: 1, explanation: "Video 3.0.1: cita con cliente y vehiculos existentes." },
    { question: "Si el cliente y el vehiculo NO estan aun en el sistema, la cita se crea con:", options: ["Cita con cliente y vehiculos existentes", "Cita con cliente y vehiculos no existentes", "Alta de OR vehiculo cliente", "Fichaje de mecanicos"], correctAnswer: 1, explanation: "Video 3.0.2: cita con cliente y vehiculos no existentes." },
    { question: "Para dar una cita asignando al cliente un vehiculo de sustitucion:", options: ["Cita con cliente existente", "Cita con cliente no existente", "Alta de cita con vehiculo de cortesia", "Renovacion de una cita"], correctAnswer: 2, explanation: "Video 3.0.3: alta de cita con vehiculo de cortesia." },
    { question: "Cuando un cliente viene a recoger su vehiculo y quiere una nueva cita para la proxima revision:", options: ["Crear nueva cita desde cero", "Renovacion de una cita", "Alta de OR desde cita", "Alta de cita con vehiculo de cortesia"], correctAnswer: 1, explanation: "Video 3.0.4: renovacion de una cita." },
    { question: "Para crear una Orden de Reparacion directamente desde una cita ya registrada:", options: ["Alta de OR vehiculo cliente", "Alta de OR desde cita", "Alta de OR tempario", "Alta de OR confirmacion"], correctAnswer: 1, explanation: "Video 3.0.5: alta de OR desde cita." },
    { question: "Para crear una Orden de Reparacion nueva para un vehiculo de cliente:", options: ["Alta de OR tempario", "Alta de OR desde cita", "Alta de OR vehiculo cliente", "Alta de OR confirmacion"], correctAnswer: 2, explanation: "Video 2.0.1: alta de OR vehiculo cliente." },
    { question: "El tempario en una OR sirve para:", options: ["Registrar el pago de la reparacion", "Predefinir tiempos y operaciones estandar de reparacion", "Gestionar siniestros", "Fichar a los mecanicos"], correctAnswer: 1, explanation: "Video 2.0.2: alta de OR tempario y usos." },
    { question: "La fase de confirmacion de una OR implica:", options: ["Iniciar la reparacion sin validacion", "Confirmar que los trabajos estan aprobados antes de ejecutarlos", "Facturar directamente al cliente", "Asignar vehiculo de cortesia"], correctAnswer: 1, explanation: "Video 2.0.3: alta de OR confirmacion." },
    { question: "Para facturar al cliente los trabajos realizados en taller el proceso es:", options: ["Alta de OR vehiculo cliente", "Alta de OR confirmacion", "Alta de OR facturacion", "Fichaje de mecanicos"], correctAnswer: 2, explanation: "Video 2.0.4: alta de OR facturacion." },
    { question: "Para dar de alta un vehiculo de taller en una OR (como vehiculo de ocasion en albaran de compra):", options: ["Alta de OR vehiculo cliente", "Alta de vehiculo de taller en OR - VO en albaran de compra", "Gestion de siniestros", "Alta de cita con cortesia"], correctAnswer: 1, explanation: "Video 1.3.6: alta de vehiculo de taller en OR." }
  ]
};

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sampleN(arr, n) {
  return shuffleArr(arr).slice(0, Math.min(n, arr.length));
}

export function getModuleQuiz(module, questionCount = 10) {
  const bank = STATIC_QUIZ[module];
  const labels = { sales: "Ventas", workshop: "Taller", administracion: "Administracion", stock: "Stock", vehicles: "Vehiculos", support: "Soporte" };
  const title = "Quiz de " + (labels[module] || module);
  if (!bank || bank.length === 0) {
    return { title, totalAvailableQuestions: 0, questions: [] };
  }
  const questions = sampleN(bank, questionCount).map((q, i) => ({ ...q, id: module + "-q" + (i + 1) }));
  return { title, totalAvailableQuestions: bank.length, questions };
}
"@ += '    { question: "Para cobrar una factura emitida usando el boton de la propia factura:", options: ["Cobro de anticipo de pedido", "Anticipo sin pedido", "Cobro de factura boton", "Remesa de cobros"], correctAnswer: 2, explanation: "Video 1.9.5." }' + "
  ],
  workshop: [
    { question: "Para gestionar la agenda y calendarios del taller:", options: ["Alta de OR vehiculo cliente", "Agenda de taller y calendarios", "Cita con cliente existente", "Fichaje de mecanicos"], correctAnswer: 1, explanation: "Video 1.10.5." },
    { question: "Cuando llega un vehiculo con danos de siniestro:", options: ["Alta de OR vehiculo cliente", "Gestion de siniestros", "Alta de cita con cortesia", "Renovacion de cita"], correctAnswer: 1, explanation: "Video 1.10.3." },
    { question: "Para gestionar reparaciones cubiertas por garantia de fabrica:", options: ["Gestion de siniestros", "Gestion de franquicias", "Alta de OR desde cita", "Fichaje de mecanicos"], correctAnswer: 1, explanation: "Video 1.10.2." },
    { question: "El control de entrada y salida de los mecanicos se hace con:", options: ["Agenda de taller", "Gestion de siniestros", "Fichaje de mecanicos", "Alta de OR tempario"], correctAnswer: 2, explanation: "Video 1.10.1." },
    { question: "Cuando cliente y vehiculo ya estan en el sistema la cita se crea con:", options: ["Cita con vehiculos no existentes", "Cita con cliente y vehiculos existentes", "Renovacion de cita", "Alta con cortesia"], correctAnswer: 1, explanation: "Video 3.0.1." },
    { question: "Si el cliente y vehiculo NO estan en el sistema la cita se crea con:", options: ["Cita con cliente existente", "Cita con cliente y vehiculos no existentes", "Alta de OR vehiculo cliente", "Fichaje de mecanicos"], correctAnswer: 1, explanation: "Video 3.0.2." },
    { question: "Para dar cita asignando al cliente un vehiculo de sustitucion:", options: ["Cita con cliente existente", "Cita con cliente no existente", "Alta de cita con vehiculo de cortesia", "Renovacion de cita"], correctAnswer: 2, explanation: "Video 3.0.3." },
    { question: "Cuando un cliente quiere cita para la proxima revision:", options: ["Crear cita desde cero", "Renovacion de una cita", "Alta de OR desde cita", "Alta con cortesia"], correctAnswer: 1, explanation: "Video 3.0.4." },
    { question: "Para crear una OR desde una cita ya registrada:", options: ["Alta de OR vehiculo cliente", "Alta de OR desde cita", "Alta de OR tempario", "Alta de OR confirmacion"], correctAnswer: 1, explanation: "Video 3.0.5." },
    { question: "Para crear una OR nueva para un vehiculo de cliente:", options: ["Alta de OR tempario", "Alta de OR desde cita", "Alta de OR vehiculo cliente", "Alta de OR confirmacion"], correctAnswer: 2, explanation: "Video 2.0.1." },
    { question: "El tempario en una OR sirve para:", options: ["Registrar el pago", "Predefinir tiempos y operaciones estandar de reparacion", "Gestionar siniestros", "Fichar mecanicos"], correctAnswer: 1, explanation: "Video 2.0.2." },
    { question: "La fase de confirmacion de una OR implica:", options: ["Iniciar reparacion sin validacion", "Confirmar que los trabajos estan aprobados antes de ejecutarlos", "Facturar al cliente", "Asignar vehiculo de cortesia"], correctAnswer: 1, explanation: "Video 2.0.3." },
    { question: "Para facturar al cliente los trabajos realizados en taller:", options: ["Alta de OR vehiculo cliente", "Alta de OR confirmacion", "Alta de OR facturacion", "Fichaje de mecanicos"], correctAnswer: 2, explanation: "Video 2.0.4." },
    { question: "Para dar de alta un vehiculo de taller como VO en albaran de compra:", options: ["Alta de OR vehiculo cliente", "Alta de vehiculo de taller en OR VO en albaran de compra", "Gestion de siniestros", "Alta con cortesia"], correctAnswer: 1, explanation: "Video 1.3.6." }
  ]
};

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sampleN(arr, n) {
  return shuffleArr(arr).slice(0, Math.min(n, arr.length));
}

export function getModuleQuiz(module, questionCount = 10) {
  const bank = STATIC_QUIZ[module];
  const labels = { sales: "Ventas", workshop: "Taller", administracion: "Administracion", stock: "Stock", vehicles: "Vehiculos", support: "Soporte" };
  const title = "Quiz de " + (labels[module] || module);
  if (!bank || bank.length === 0) { return { title, totalAvailableQuestions: 0, questions: [] }; }
  const questions = sampleN(bank, questionCount).map((q, i) => ({ ...q, id: module + "-q" + (i + 1) }));
  return { title, totalAvailableQuestions: bank.length, questions };
}
"
Write-Host "Funciones OK chars=33199"
 = import { sources } from "./sources";

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
  const text = String(value)
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
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
      `¿Cuál de estas palabras clave está asociada a "${item.cleanTitle}"?`,
      `¿Qué proceso de trabajo cubre el contenido "${item.cleanTitle}"?`,
      `¿Qué harías para gestionar "${item.cleanTitle.split(' ').slice(0,4).join(' ')}"?`
    ];

    variants.forEach((questionText, variantIndex) => {
      const question = createQuestion(
        questionText,
        item.cleanTitle,
        wrongTitles,
        `La keyword "${item.cleanKeywords[0] || item.cleanTitle}" está asociada a ese contenido.`,
        {
          sourceId: item.id,
          template: "keyword-identify-content",
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

function buildApplicationQuestions(module, moduleItems) {
  const questions = [];

  for (let index = 0; index < moduleItems.length - 1; index += 1) {
    const current = moduleItems[index];
    // (variable next ya no necesaria)
    const wrongTitles = buildWrongTitles(current, moduleItems, 3);

    const variants = [
      `¿Qué vídeo del módulo ${getModuleLabel(module)} tratarías para aprender sobre "${current.cleanKeywords[0] || current.cleanTitle}"?`,
      `¿Cuál de estos contenidos describe mejor lo que hace "${current.cleanTitle}"?`,
      `Si un empleado necesita conocer "${current.cleanKeywords[0] || current.cleanTitle}", ¿qué vídeo debe consultar?`
    ];

    variants.forEach((questionText, variantIndex) => {
      const question = createQuestion(
        questionText,
        current.cleanTitle,
        wrongTitles,
        `Ese vídeo cubre ese concepto dentro del módulo ${getModuleLabel(module)}.`,
        {
          sourceId: current.id,
          template: "application-by-keyword",
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

 + function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sampleSize(arr, n) {
  return shuffleArray(arr).slice(0, Math.min(n, arr.length));
}

const STATIC_QUIZ = {
  administracion: [
    { question: "Para dar de alta una cuenta de caja o banco en el sistema, debes acceder a:", options: ["Alta de cuentas de tesoreria", "Alta de factura de gastos", "Creacion de remesa de nominas", "Asientos contables"], correctAnswer: 0, explanation: "El video 1.9.1 explica como dar de alta cuentas de tesoreria." },
    { question: "Que proceso se utiliza para registrar el pago periodico de un alquiler u otro gasto recurrente?", options: ["Alta de factura de gastos", "Facturar gastos mediante contratos y vencimientos", "Alta de remesas de cobros y pagos", "Arqueo y cierre de caja"], correctAnswer: 1, explanation: "El video 1.9.11 cubre la facturacion de gastos mediante contratos y vencimientos." },
    { question: "Cuando un cliente paga una factura mediante el boton de cobro directo, que proceso corresponde?", options: ["Crear anticipo de cobro", "Creacion cobro de anticipo de pedido", "Cobro de factura boton", "Alta de remesas de cobros"], correctAnswer: 2, explanation: "El video 1.9.5 explica el cobro de factura mediante boton." },
    { question: "Para enviar al banco un fichero con multiples pagos a proveedores, se usa:", options: ["Asientos contables", "Alta de remesas de cobros y pagos", "Facturacion en tanda de albaranes", "Arqueo y cierre de caja"], correctAnswer: 1, explanation: "El video 1.9.12 cubre el alta de remesas de cobros y pagos." },
    { question: "El proceso de arqueo consiste en:", options: ["Revisar el balance de sumas y saldos", "Cuadrar y cerrar el saldo de la cuenta de caja", "Crear asientos contables manualmente", "Dar de alta un nuevo concepto de tesoreria"], correctAnswer: 1, explanation: "El video 1.9.8 explica el arqueo y cierre de cuentas de tesoreria caja." },
    { question: "Para registrar manualmente un ingreso o gasto directo en tesoreria sin factura, se utiliza:", options: ["Alta de conceptos de tesoreria", "Alta de registro manual en tesoreria", "Crear inmovilizado", "Facturacion de albaran de compras"], correctAnswer: 1, explanation: "El video 1.9.4 muestra como hacer un registro manual en tesoreria." },
    { question: "Que video explica como anticipar un cobro a un cliente que aun no tiene pedido ni factura?", options: ["Cobro de factura boton", "Creacion cobro de anticipo de pedido de ventas", "Crear anticipo de cobro a cliente sin pedido ni operacion", "Aplicacion de anticipos asociados a la entidad"], correctAnswer: 2, explanation: "El video 1.9.9 cubre la creacion de anticipos de cobro sin pedido ni operacion." },
    { question: "Para ver el detalle de movimientos de una cuenta contable concreta, accedes a:", options: ["Balance de sumas y saldos", "Extracto o mayor de una cuenta", "Asientos contables", "Remesa de nominas"], correctAnswer: 1, explanation: "El video 1.9.19 explica como consultar el extracto o mayor de una cuenta." },
    { question: "El balance de sumas y saldos sirve para:", options: ["Ver el detalle de una cuenta concreta", "Tener una vision global del estado contable de la empresa", "Registrar pagos de nominas", "Facturar albaranes de ventas en bloque"], correctAnswer: 1, explanation: "El video 1.9.18 explica como consultar el balance de sumas y saldos." },
    { question: "Para facturar varios albaranes de compra a la vez en una sola factura, se usa:", options: ["Facturacion en tanda de albaranes de compras", "Alta de factura de gastos", "Anadir albaranes a factura de compra", "Configurar facturas de compras"], correctAnswer: 0, explanation: "El video 1.9.20 cubre la facturacion en tanda de albaranes de compras." },
    { question: "Si necesitas anadir albaranes adicionales a una factura de compra ya existente, el proceso es:", options: ["Facturacion en tanda", "Anadir albaranes a una factura de compra (casar)", "Configurar y modificar facturas de compras", "Alta de registro manual en tesoreria"], correctAnswer: 1, explanation: "El video 1.9.25 explica como anadir albaranes a una factura de compra existente." },
    { question: "Para anular una factura de ventas emitida incorrectamente, debes:", options: ["Eliminar la factura directamente", "Abonar la factura de ventas", "Crear un asiento contable de correccion", "Modificar la factura original"], correctAnswer: 1, explanation: "El video 1.9.26 explica el proceso de abono de facturas de ventas." },
    { question: "Que permite configurar el check en serie en albaranes de ventas?", options: ["Facturar automaticamente sin confirmar", "Que al facturar solicite la fecha de cada albaran", "Agrupar albaranes por cliente", "Enviar remesas automaticamente"], correctAnswer: 1, explanation: "El video 1.9.23 muestra como usar el check en serie para que solicite fecha al facturar." },
    { question: "Para registrar un bien duradero de la empresa como un vehiculo o maquinaria en contabilidad:", options: ["Se crea un asiento contable manual", "Se da de alta como inmovilizado", "Se registra en tesoreria como gasto", "Se crea un contrato de vencimiento"], correctAnswer: 1, explanation: "El video 1.9.24 explica como crear un inmovilizado." },
    { question: "Para crear los asientos contables de forma manual en el sistema, el proceso es:", options: ["Balance de sumas y saldos", "Extracto de cuenta", "Crear asientos contables", "Alta de conceptos de tesoreria"], correctAnswer: 2, explanation: "El video 1.9.14 explica como crear asientos contables manualmente." },
    { question: "La remesa de nominas sirve para:", options: ["Registrar las horas de los empleados", "Generar y enviar al banco el pago masivo de nominas", "Crear contratos de trabajo", "Facturar servicios a clientes"], correctAnswer: 1, explanation: "El video 1.9.13 cubre la creacion de remesas de nominas." },
    { question: "Para dar de alta un servicio facturable en el sistema (por ejemplo, servicio de transporte):", options: ["Alta de conceptos de tesoreria", "Alta de un servicio", "Alta de cuentas de tesoreria", "Crear inmovilizado"], correctAnswer: 1, explanation: "El video 1.9.3 muestra como dar de alta un servicio." },
    { question: "Que diferencia hay entre una remesa de cobros y una remesa de pagos?", options: ["Son identicas, solo cambia el nombre", "La de cobros recoge cantidades que nos deben; la de pagos, lo que debemos nosotros", "La de pagos es para nominas y la de cobros para facturas", "No existen remesas de cobros, solo de pagos"], correctAnswer: 1, explanation: "El video 1.9.12 explica las remesas de cobros y pagos y su diferencia." },
    { question: "Para aplicar un anticipo que ya existe en el sistema a una factura de un cliente:", options: ["Se crea un nuevo anticipo", "Se usa la opcion de aplicacion de anticipos asociados a la entidad", "Se emite un abono por el importe del anticipo", "Se modifica la factura original"], correctAnswer: 1, explanation: "El video 1.9.7 explica la aplicacion de anticipos asociados a la entidad." },
    { question: "Al facturar albaranes de ventas que incluyen ordenes de reparacion (OR), debes:", options: ["Facturarlos por separado siempre", "Usar la opcion de anadir albaranes OR a una factura de ventas", "Crear una factura de servicios distinta", "Convertirlos primero en pedidos"], correctAnswer: 1, explanation: "El video 1.9.16 explica como anadir albaranes OR a una factura de ventas." },
    { question: "Cuando un proveedor te envia una factura de compra, el primer paso para registrarla es:", options: ["Crear un asiento contable", "Dar de alta la factura de gastos", "Generar una remesa de pagos", "Hacer el arqueo de caja"], correctAnswer: 1, explanation: "El video 1.9.10 cubre el alta de facturas de gastos." },
    { question: "La facturacion en tanda de albaranes de ventas permite:", options: ["Cobrar varias facturas a la vez", "Generar una o varias facturas agrupando multiples albaranes en un solo proceso", "Enviar albaranes por email automaticamente", "Crear presupuestos en serie"], correctAnswer: 1, explanation: "El video 1.9.17 explica la facturacion en tanda de albaranes de ventas." },
    { question: "Para que un anticipo de pedido de ventas quede correctamente cobrado en el sistema:", options: ["Se registra como ingreso en tesoreria manual", "Se usa el proceso de creacion de cobro de anticipo de pedido de ventas", "Se emite una factura de anticipo y se elimina el pedido", "Se aplica directamente en el balance"], correctAnswer: 1, explanation: "El video 1.9.6 cubre la creacion del cobro de anticipo de pedido de ventas." },
    { question: "Para modificar como se configuran o agrupan las facturas de compra de gastos:", options: ["Se accede a asientos contables", "Se usa la opcion de configurar y modificar facturas de compras gastos", "Se edita directamente la remesa", "Se recrea la factura desde cero"], correctAnswer: 1, explanation: "El video 1.9.22 muestra como configurar y modificar facturas de compras gastos." },
    { question: "Para seleccionar un albaran de compra especifico y facturarlo directamente:", options: ["Facturacion en tanda", "Facturacion de albaran de compras por seleccion", "Alta de factura de gastos manualmente", "Anadir a factura existente"], correctAnswer: 1, explanation: "El video 1.9.21 explica la facturacion de albaran de compras por seleccion." },
    { question: "Para crear una factura de venta de servicios (no de productos):", options: ["Se usa el proceso de albaran de ventas", "Se crea mediante la opcion de factura de venta de servicios", "Se registra como ingreso manual en tesoreria", "Se emite desde el modulo de taller"], correctAnswer: 1, explanation: "El video 1.9.15 explica como crear una factura de venta de servicios." }
  ],
  sales: [
    { question: "Para crear un cliente nuevo en el sistema, el primer paso es:", options: ["Alta de entidad", "Grabacion de un pedido de ventas", "Crear un presupuesto", "Alta de tarifa de ventas"], correctAnswer: 0, explanation: "El video 1.5.1 explica el proceso de alta de entidad (cliente)." },
    { question: "Que proceso permite asignar un numero de bastidor a una operacion comercial?", options: ["Cambiar modelo de vehiculo", "Asignar bastidores a operaciones comerciales", "Convertir bastidor a unidad demo", "Cambiar propietario de vehiculo"], correctAnswer: 1, explanation: "El video 1.3.11 cubre la asignacion de bastidores a operaciones comerciales." },
    { question: "Un vehiculo de demostracion en el sistema se crea mediante:", options: ["Alta de entidad", "Cambiar propietario", "Convertir un bastidor a unidad demo", "Grabacion de albaran de ventas"], correctAnswer: 2, explanation: "El video 1.3.7 explica como convertir un bastidor a unidad demo." },
    { question: "Para vender un vehiculo de ocasion (VO), el proceso especifico es:", options: ["Grabacion de pedido de ventas", "Pasos de una operacion comercial con VO", "Panel de Venta Directa", "Grabacion de albaran de ventas"], correctAnswer: 1, explanation: "El video 1.3.14 detalla los pasos de una operacion comercial con VO." },
    { question: "El Panel de Venta Directa sirve para:", options: ["Gestionar presupuestos", "Realizar ventas rapidas sin pasar por pedido ni albaran", "Ver el historico de ventas", "Configurar tarifas"], correctAnswer: 1, explanation: "El video 1.8.14 explica el Panel de Venta Directa." },
    { question: "Para facturar varios albaranes de ventas en una sola operacion masiva:", options: ["Grabacion de un albaran de ventas", "Facturacion en tanda de albaranes de ventas", "Panel de Venta Directa", "Cobro de factura boton"], correctAnswer: 1, explanation: "El video 1.9.17 cubre la facturacion en tanda de albaranes de
Add-Content $script -Encoding UTF8 -Value @'
$newFunctions = @"
const STATIC_QUIZ = {
  administracion: [
    { question: "Para dar de alta una cuenta de caja o banco, debes acceder a:", options: ["Alta de cuentas de tesoreria", "Alta de factura de gastos", "Remesa de nominas", "Asientos contables"], correctAnswer: 0, explanation: "Video 1.9.1: alta de cuentas de tesoreria." },
    { question: "Como se registra el pago periodico de un gasto recurrente como un alquiler?", options: ["Alta de factura de gastos directa", "Facturar gastos mediante contratos y vencimientos", "Remesa de cobros y pagos", "Arqueo de caja"], correctAnswer: 1, explanation: "Video 1.9.11: facturacion de gastos mediante contratos y vencimientos." },
    { question: "Cuando un cliente paga una factura usando el boton de cobro directo, el proceso es:", options: ["Crear anticipo de cobro", "Cobro de anticipo de pedido", "Cobro de factura boton", "Alta de remesas de cobros"], correctAnswer: 2, explanation: "Video 1.9.5: cobro de factura mediante boton." },
    { question: "Para enviar al banco un fichero con multiples pagos a proveedores se usa:", options: ["Asientos contables", "Alta de remesas de cobros y pagos", "Facturacion en tanda", "Arqueo de caja"], correctAnswer: 1, explanation: "Video 1.9.12: alta de remesas de cobros y pagos." },
    { question: "El arqueo de caja consiste en:", options: ["Revisar el balance contable", "Cuadrar y cerrar el saldo de la cuenta de caja", "Crear asientos manualmente", "Dar de alta conceptos de tesoreria"], correctAnswer: 1, explanation: "Video 1.9.8: arqueo y cierre de cuentas de tesoreria caja." },
    { question: "Para registrar manualmente un ingreso o gasto directo en tesoreria sin factura:", options: ["Alta de conceptos de tesoreria", "Alta de registro manual en tesoreria", "Crear inmovilizado", "Facturacion de albaran"], correctAnswer: 1, explanation: "Video 1.9.4: registro manual en tesoreria." },
    { question: "Para anticipar un cobro a un cliente sin pedido ni factura previa:", options: ["Cobro de factura boton", "Cobro de anticipo de pedido de ventas", "Crear anticipo de cobro sin pedido ni operacion", "Aplicar anticipos de entidad"], correctAnswer: 2, explanation: "Video 1.9.9: anticipo de cobro sin pedido ni operacion." },
    { question: "Para ver el detalle de movimientos de una cuenta contable concreta:", options: ["Balance de sumas y saldos", "Extracto o mayor de una cuenta", "Asientos contables", "Remesa de nominas"], correctAnswer: 1, explanation: "Video 1.9.19: extracto o mayor de una cuenta." },
    { question: "El balance de sumas y saldos sirve para:", options: ["Ver movimientos de una cuenta", "Tener vision global del estado contable", "Registrar nominas", "Facturar albaranes"], correctAnswer: 1, explanation: "Video 1.9.18: balance de sumas y saldos." },
    { question: "Para facturar varios albaranes de compra a la vez en una sola factura:", options: ["Facturacion en tanda de albaranes de compras", "Alta de factura de gastos", "Anadir albaranes a factura", "Configurar facturas de compras"], correctAnswer: 0, explanation: "Video 1.9.20: facturacion en tanda de albaranes de compras." },
    { question: "Para anadir albaranes adicionales a una factura de compra ya existente:", options: ["Facturacion en tanda", "Anadir albaranes a factura de compra (casar)", "Configurar facturas de compras", "Registro manual en tesoreria"], correctAnswer: 1, explanation: "Video 1.9.25: anadir albaranes a factura de compra existente." },
    { question: "Para anular una factura de ventas emitida incorrectamente:", options: ["Eliminarla directamente", "Abonar la factura de ventas", "Crear asiento de correccion", "Modificar la factura original"], correctAnswer: 1, explanation: "Video 1.9.26: abono de facturas de ventas." },
    { question: "El check en serie en albaranes de ventas permite que al facturar:", options: ["Se facturen automaticamente", "Se solicite la fecha de cada albaran", "Se agrupen por cliente", "Se envien remesas automaticamente"], correctAnswer: 1, explanation: "Video 1.9.23: check en serie solicita fecha al facturar albaranes." },
    { question: "Para registrar un bien duradero como un vehiculo o maquinaria en contabilidad:", options: ["Asiento contable manual", "Darlo de alta como inmovilizado", "Registrarlo en tesoreria", "Crear contrato de vencimiento"], correctAnswer: 1, explanation: "Video 1.9.24: alta de inmovilizado." },
    { question: "Para crear asientos contables de forma manual:", options: ["Balance de sumas y saldos", "Extracto de cuenta", "Crear asientos contables", "Alta de conceptos de tesoreria"], correctAnswer: 2, explanation: "Video 1.9.14: crear asientos contables manualmente." },
    { question: "La remesa de nominas sirve para:", options: ["Registrar horas de empleados", "Generar y enviar al banco el pago masivo de nominas", "Crear contratos de trabajo", "Facturar servicios a clientes"], correctAnswer: 1, explanation: "Video 1.9.13: creacion de remesas de nominas." },
    { question: "Para dar de alta un servicio facturable como transporte o mantenimiento:", options: ["Alta de conceptos de tesoreria", "Alta de un servicio", "Alta de cuentas de tesoreria", "Crear inmovilizado"], correctAnswer: 1, explanation: "Video 1.9.3: alta de un servicio." },
    { question: "La diferencia entre remesa de cobros y remesa de pagos es:", options: ["Son identicas", "Cobros recoge lo que nos deben; pagos lo que debemos", "Pagos es para nominas y cobros para facturas", "No existen remesas de cobros"], correctAnswer: 1, explanation: "Video 1.9.12: remesas de cobros y pagos." },
    { question: "Para aplicar un anticipo existente a una factura de un cliente:", options: ["Crear un nuevo anticipo", "Usar la opcion de aplicacion de anticipos de la entidad", "Emitir un abono por el anticipo", "Modificar la factura original"], correctAnswer: 1, explanation: "Video 1.9.7: aplicacion de anticipos asociados a la entidad." },
    { question: "Para facturar albaranes de ventas que incluyen ordenes de reparacion:", options: ["Facturarlos por separado siempre", "Usar anadir albaranes OR a factura de ventas", "Crear factura de servicios distinta", "Convertirlos a pedidos primero"], correctAnswer: 1, explanation: "Video 1.9.16: anadir albaranes OR a factura de ventas." },
    { question: "Cuando un proveedor te envia una factura, el primer paso para registrarla es:", options: ["Crear asiento contable", "Dar de alta la factura de gastos", "Generar remesa de pagos", "Hacer arqueo de caja"], correctAnswer: 1, explanation: "Video 1.9.10: alta de factura de gastos." },
    { question: "La facturacion en tanda de albaranes de ventas permite:", options: ["Cobrar varias facturas a la vez", "Generar facturas agrupando multiples albaranes en un proceso", "Enviar albaranes por email", "Crear presupuestos en serie"], correctAnswer: 1, explanation: "Video 1.9.17: facturacion en tanda de albaranes de ventas." },
    { question: "Para que el cobro de un anticipo de pedido quede correcto en el sistema:", options: ["Registrarlo como ingreso manual", "Usar creacion de cobro de anticipo de pedido de ventas", "Emitir factura y eliminar pedido", "Aplicarlo en el balance"], correctAnswer: 1, explanation: "Video 1.9.6: creacion del cobro de anticipo de pedido de ventas." },
    { question: "Para seleccionar un albaran de compra especifico y facturarlo directamente:", options: ["Facturacion en tanda", "Facturacion de albaran de compras por seleccion", "Alta de factura de gastos manual", "Anadir a factura existente"], correctAnswer: 1, explanation: "Video 1.9.21: facturacion de albaran de compras por seleccion." },
    { question: "Para crear una factura de venta de servicios (no de productos fisicos):", options: ["Proceso de albaran de ventas", "Opcion de factura de venta de servicios", "Ingreso manual en tesoreria", "Emitirla desde el modulo de taller"], correctAnswer: 1, explanation: "Video 1.9.15: factura de venta de servicios." },
    { question: "Para dar de alta un concepto de tesoreria (por ejemplo: ingreso por ventas):", options: ["Alta de cuentas de tesoreria", "Alta de conceptos de tesoreria", "Asientos contables", "Registro manual en tesoreria"], correctAnswer: 1, explanation: "Video 1.9.2: alta de conceptos de tesoreria." }
  ],
  sales: [
    { question: "Para registrar un cliente nuevo en el sistema el primer paso es:", options: ["Alta de entidad", "Grabar pedido de ventas", "Crear presupuesto", "Alta de tarifa"], correctAnswer: 0, explanation: "Video 1.5.1: alta de entidad." },
    { question: "Para asignar un numero de bastidor a una operacion comercial:", options: ["Cambiar modelo de vehiculo", "Asignar bastidores a operaciones comerciales", "Convertir a unidad demo", "Cambiar propietario"], correctAnswer: 1, explanation: "Video 1.3.11: asignar bastidores a operaciones comerciales." },
    { question: "Un vehiculo de demostracion se crea mediante:", options: ["Alta de entidad", "Cambiar propietario", "Convertir bastidor a unidad demo", "Grabar albaran"], correctAnswer: 2, explanation: "Video 1.3.7: convertir bastidor a unidad demo." },
    { question: "El proceso especifico para vender un vehiculo de ocasion (VO) es:", options: ["Grabar pedido de ventas", "Operacion comercial con VO", "Panel de Venta Directa", "Grabar albaran"], correctAnswer: 1, explanation: "Video 1.3.14: operacion comercial con VO." },
    { question: "El Panel de Venta Directa sirve para:", options: ["Gestionar presupuestos", "Realizar ventas rapidas sin pedido ni albaran", "Ver historico de ventas", "Configurar tarifas"], correctAnswer: 1, explanation: "Video 1.8.14: Panel de Venta Directa." },
    { question: "Para copiar lineas de un documento a otro (presupuesto, pedido, albaran):", options: ["Reescribir manualmente", "Copiar y pegar entre documentos", "Duplicar el documento entero", "Usar operaciones genericas"], correctAnswer: 1, explanation: "Video 1.0.7: copiar y pegar entre documentos." },
    { question: "Las cuentas bancarias de un cliente se gestionan en:", options: ["Alta de entidad", "Datos historicos", "Cuentas bancarias - por defecto - activa", "Relaciones de entidades"], correctAnswer: 2, explanation: "Video 1.5.3: cuentas bancarias de la entidad." },
    { question: "Para ver el riesgo crediticio de un cliente:", options: ["Alta de entidad", "Riesgo de entidades", "Datos historicos", "Cuentas bancarias"], correctAnswer: 1, explanation: "Video 1.5.4: riesgo de entidades." },
    { question: "Los datos de historicos de compras, tipos de pago y cuenta contable de un cliente estan en:", options: ["Alta de entidad", "Relaciones de entidades", "Datos importantes - Historicos - Tipos de pago - Cuenta contable", "Riesgo de entidades"], correctAnswer: 2, explanation: "Video 1.5.5: datos importantes, historicos, tipos de pago y cuenta contable." },
    { question: "Para gestionar las relaciones entre entidades (empresa matriz y filiales, etc.):", options: ["Alta de entidad", "Relaciones de entidades", "Cuentas bancarias", "Datos historicos"], correctAnswer: 1, explanation: "Video 1.5.2: relaciones de entidades." },
    { question: "Las tarifas generales de ventas aplicables a clientes se gestionan en:", options: ["Articulos y tarifa de articulos", "Tarifas de ventas", "Precios y tarifas de ventas", "Panel de Venta Directa"], correctAnswer: 1, explanation: "Video 1.6: tarifas de ventas." },
    { question: "Para consultar o modificar la tarifa especifica de un articulo:", options: ["Tarifas de ventas", "Gestion de precios y tarifas de ventas", "Articulos y tarifa de articulos", "Panel de Venta Directa"], correctAnswer: 2, explanation: "Video 1.4: articulos y tarifa de articulos." },
    { question: "La gestion de precios especiales o descuentos por cliente se hace en:", options: ["Tarifas de ventas", "Articulos y tarifa de articulos", "Gestion de precios y tarifas de ventas", "Alta de entidad"], correctAnswer: 2, explanation: "Video 1.8.15: gestion de precios y tarifas de ventas." },
    { question: "Para filtrar documentos, partirlos o multipartirlos en operaciones genericas:", options: ["Copiar y pegar entre documentos", "Operaciones genericas - filtrar - partir - multipartir", "Panel de Venta Directa", "Grabar albaran de ventas"], correctAnswer: 1, explanation: "Video 1.0.6: operaciones genericas, filtrar, partir, multipartir." },
    { question: "Para grabar un presupuesto de ventas al cliente:", options: ["Grabacion de un pedido de ventas", "Grabacion de un presupuesto de ventas", "Grabacion de un albaran de ventas", "Panel de Venta Directa"], correctAnswer: 1, explanation: "Video 1.8.1: grabacion de presupuesto de ventas." },
    { question: "Para grabar un pedido de ventas confirmado:", options: Add-Content $script -Encoding UTF8 -Value @'
    { question: "Para grabar un pedido de ventas confirmado:", options: ["Grabacion de un presupuesto de ventas", "Grabacion de un pedido de ventas", "Grabacion de un albaran de ventas", "Panel de Venta Directa"], correctAnswer: 1, explanation: "Video 1.8.2: grabacion de pedido de ventas." },
    { question: "Para grabar un albaran de ventas (entrega de mercancia):", options: ["Grabacion de pedido", "Grabacion de presupuesto", "Grabacion de un albaran de ventas", "Cobro de factura boton"], correctAnswer: 2, explanation: "Video 1.8.3: grabacion de albaran de ventas." },
    { question: "Para gestionar los accesorios incluidos en una operacion comercial:", options: ["Panel de Venta Directa", "Gestion de accesorios en operaciones", "Asignar bastidores", "Tarifas de ventas"], correctAnswer: 1, explanation: "Video 1.3.13: gestion de accesorios en operaciones." },
    { question: "Para cambiar el propietario de un vehiculo existen:", options: ["Un unico metodo", "Dos metodos distintos", "Tres metodos distintos", "No se puede cambiar"], correctAnswer: 1, explanation: "Video 1.3.9: cambiar propietario de vehiculo con 2 metodos." },
    { question: "Para cambiar el modelo o el color de un vehiculo ya registrado:", options: ["Hay que crear un vehiculo nuevo", "Se usa la opcion cambiar modelo de vehiculo o el color", "Se modifica desde el bastidor", "Solo puede hacerlo el administrador"], correctAnswer: 1, explanation: "Video 1.3.8: cambiar modelo de vehiculo o el color." },
    { question: "Para facturar varios albaranes de ventas en bloque en un solo proceso:", options: ["Grabar albaran de ventas", "Facturacion en tanda de albaranes de ventas", "Panel de Venta Directa", "Cobro de factura boton"], correctAnswer: 1, explanation: "Video 1.9.17: facturacion en tanda de albaranes de ventas." },
    { question: "Para crear una factura de servicios vendidos al cliente (sin productos):", options: ["Grabacion de albaran de ventas", "Crear factura de venta de servicios", "Cobro de factura boton", "Alta de entidad"], correctAnswer: 1, explanation: "Video 1.9.15: factura de venta de servicios." },
    { question: "Para anadir albaranes de ordenes de reparacion a una factura de ventas:", options: ["Crear factura de servicios aparte", "Anadir albaranes ORs a una factura de ventas", "Grabar nuevo albaran", "Usar facturacion en tanda"], correctAnswer: 1, explanation: "Video 1.9.16: anadir albaranes OR a factura de ventas." },
    { question: "Para crear un anticipo de cobro a un cliente sin pedido ni operacion previa:", options: ["Cobro de factura boton", "Cobro de anticipo de pedido", "Crear anticipo de cobro a cliente sin pedido ni operacion", "Remesa de cobros"], correctAnswer: 2, explanation: "Video 1.9.9: anticipo de cobro sin pedido ni operacion." },
    { question: "Para cobrar el anticipo que se pidio al hacer un pedido de ventas:", options: ["Cobro de factura boton", "Creacion cobro de anticipo de pedido de ventas", "Anticipo sin pedido", "Remesa de cobros"], correctAnswer: 1, explanation: "Video 1.9.6: cobro de anticipo de pedido de ventas." },
    { question: "Para cobrar una factura ya emitida usando el boton de la propia factura:", options: ["Creacion cobro de anticipo de pedido", "Anticipo sin pedido", "Cobro de factura boton", "Remesa de cobros y pagos"], correctAnswer: 2, explanation: "Video 1.9.5: cobro de factura boton." }
  ],
  workshop: [
    { question: "Para gestionar la agenda y los calendarios del taller:", options: ["Alta de OR vehiculo cliente", "Agenda de taller y calendarios", "Cita con cliente existente", "Fichaje de mecanicos"], correctAnswer: 1, explanation: "Video 1.10.5: agenda de taller y calendarios." },
    { question: "Cuando llega un vehiculo con danos de un siniestro, el proceso especifico es:", options: ["Alta de OR vehiculo cliente", "Gestion de siniestros", "Alta de cita con vehiculo de cortesia", "Renovacion de una cita"], correctAnswer: 1, explanation: "Video 1.10.3: gestion de siniestros." },
    { question: "Para gestionar reparaciones cubiertas por garantia de fabrica (franquicia):", options: ["Gestion de siniestros", "Gestion de franquicias", "Alta de OR desde cita", "Fichaje de mecanicos"], correctAnswer: 1, explanation: "Video 1.10.2: gestion de franquicias." },
    { question: "El control de entrada y salida de los mecanicos al trabajo se hace con:", options: ["Agenda de taller", "Gestion de siniestros", "Fichaje de mecanicos", "Alta de OR tempario"], correctAnswer: 2, explanation: "Video 1.10.1: fichaje de mecanicos." },
    { question: "Cuando el cliente y su vehiculo ya estan en el sistema, la cita se crea con:", options: ["Cita con cliente y vehiculos no existentes", "Cita con cliente y vehiculos existentes", "Renovacion de una cita", "Alta de cita con vehiculo de cortesia"], correctAnswer: 1, explanation: "Video 3.0.1: cita con cliente y vehiculos existentes." },
    { question: "Si el cliente y el vehiculo NO estan aun en el sistema, la cita se crea con:", options: ["Cita con cliente y vehiculos existentes", "Cita con cliente y vehiculos no existentes", "Alta de OR vehiculo cliente", "Fichaje de mecanicos"], correctAnswer: 1, explanation: "Video 3.0.2: cita con cliente y vehiculos no existentes." },
    { question: "Para dar una cita asignando al cliente un vehiculo de sustitucion:", options: ["Cita con cliente existente", "Cita con cliente no existente", "Alta de cita con vehiculo de cortesia", "Renovacion de una cita"], correctAnswer: 2, explanation: "Video 3.0.3: alta de cita con vehiculo de cortesia." },
    { question: "Cuando un cliente viene a recoger su vehiculo y quiere una nueva cita para la proxima revision:", options: ["Crear nueva cita desde cero", "Renovacion de una cita", "Alta de OR desde cita", "Alta de cita con vehiculo de cortesia"], correctAnswer: 1, explanation: "Video 3.0.4: renovacion de una cita." },
    { question: "Para crear una Orden de Reparacion directamente desde una cita ya registrada:", options: ["Alta de OR vehiculo cliente", "Alta de OR desde cita", "Alta de OR tempario", "Alta de OR confirmacion"], correctAnswer: 1, explanation: "Video 3.0.5: alta de OR desde cita." },
    { question: "Para crear una Orden de Reparacion nueva para un vehiculo de cliente:", options: ["Alta de OR tempario", "Alta de OR desde cita", "Alta de OR vehiculo cliente", "Alta de OR confirmacion"], correctAnswer: 2, explanation: "Video 2.0.1: alta de OR vehiculo cliente." },
    { question: "El tempario en una OR sirve para:", options: ["Registrar el pago de la reparacion", "Predefinir tiempos y operaciones estandar de reparacion", "Gestionar siniestros", "Fichar a los mecanicos"], correctAnswer: 1, explanation: "Video 2.0.2: alta de OR tempario y usos." },
    { question: "La fase de confirmacion de una OR implica:", options: ["Iniciar la reparacion sin validacion", "Confirmar que los trabajos estan aprobados antes de ejecutarlos", "Facturar directamente al cliente", "Asignar vehiculo de cortesia"], correctAnswer: 1, explanation: "Video 2.0.3: alta de OR confirmacion." },
    { question: "Para facturar al cliente los trabajos realizados en taller el proceso es:", options: ["Alta de OR vehiculo cliente", "Alta de OR confirmacion", "Alta de OR facturacion", "Fichaje de mecanicos"], correctAnswer: 2, explanation: "Video 2.0.4: alta de OR facturacion." },
    { question: "Para dar de alta un vehiculo de taller en una OR (como vehiculo de ocasion en albaran de compra):", options: ["Alta de OR vehiculo cliente", "Alta de vehiculo de taller en OR - VO en albaran de compra", "Gestion de siniestros", "Alta de cita con cortesia"], correctAnswer: 1, explanation: "Video 1.3.6: alta de vehiculo de taller en OR." }
  ]
};

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sampleN(arr, n) {
  return shuffleArr(arr).slice(0, Math.min(n, arr.length));
}

export function getModuleQuiz(module, questionCount = 10) {
  const bank = STATIC_QUIZ[module];
  const labels = { sales: "Ventas", workshop: "Taller", administracion: "Administracion", stock: "Stock", vehicles: "Vehiculos", support: "Soporte" };
  const title = "Quiz de " + (labels[module] || module);
  if (!bank || bank.length === 0) {
    return { title, totalAvailableQuestions: 0, questions: [] };
  }
  const questions = sampleN(bank, questionCount).map((q, i) => ({ ...q, id: module + "-q" + (i + 1) }));
  return { title, totalAvailableQuestions: bank.length, questions };
}
"@
 = [System.Text.Encoding]::UTF8.GetBytes()
 = [Convert]::ToBase64String()
 = [ordered]@{ message = "Quiz estatico completo admin ventas taller"; sha = 29f707f2a12a925c4d55e3267ddb1f768cda8ebd; content =  }
 =  | ConvertTo-Json -Depth 3 -Compress
123 34 109 101 115 115 97 103 101 34 58 34 70 105 120 58 32 114 101 115 116 97 117 114 97 114 32 101 110 99 111 100 105 110 103 32 85 84 70 45 56 32 121 32 101 108 105 109 105 110 97 114 32 112 114 101 103 117 110 116 97 115 32 116 114 105 118 105 97 108 101 115 34 44 34 115 104 97 34 58 34 49 55 98 97 56 100 100 97 49 98 48 99 50 54 56 50 100 100 97 101 49 100 51 48 50 56 54 102 97 49 57 100 57 48 56 98 51 52 53 56 34 44 34 99 111 110 116 101 110 116 34 58 34 97 87 49 119 98 51 74 48 73 72 115 103 99 50 57 49 99 109 78 108 99 121 66 57 73 71 90 121 98 50 48 103 73 105 52 118 99 50 57 49 99 109 78 108 99 121 73 55 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 100 112 100 71 74 118 98 50 116 86 99 109 119 111 98 87 57 107 100 87 120 108 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 49 118 90 72 86 115 90 86 66 104 100 71 103 103 80 83 66 122 98 51 86 121 89 50 86 122 76 109 100 112 100 71 74 118 98 50 115 117 98 87 57 107 100 87 120 108 99 49 116 116 98 50 82 49 98 71 86 100 73 68 56 47 73 67 73 105 79 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 98 109 86 51 73 70 86 83 84 67 104 116 98 50 82 49 98 71 86 81 89 88 82 111 76 110 74 108 99 71 120 104 89 50 85 111 76 49 53 99 76 121 56 115 73 67 73 105 75 83 119 103 99 50 57 49 99 109 78 108 99 121 53 110 97 88 82 105 98 50 57 114 76 109 74 104 99 50 85 112 76 110 82 118 85 51 82 121 97 87 53 110 75 67 107 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 106 98 50 53 122 100 67 66 115 90 87 70 121 98 109 108 117 90 48 78 118 98 110 82 108 98 110 81 103 80 83 66 98 68 81 111 103 73 67 56 118 73 68 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 103 86 107 86 79 86 69 70 84 73 67 103 121 78 121 66 50 97 87 82 108 98 51 77 112 73 68 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 98 51 65 116 89 50 57 116 90 88 74 106 97 87 70 115 76 88 90 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 77 117 77 84 81 103 85 71 70 122 98 51 77 103 90 71 85 103 100 87 53 104 73 71 57 119 90 88 74 104 89 50 110 68 115 50 52 103 89 50 57 116 90 88 74 106 97 87 70 115 73 71 78 118 98 105 66 87 84 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 110 85 107 49 72 90 108 70 90 83 86 66 82 89 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 57 119 90 88 74 104 89 50 110 68 115 50 52 105 76 67 65 105 86 107 56 105 76 67 65 105 100 109 86 111 119 54 49 106 100 87 120 118 73 71 57 106 89 88 78 112 119 55 78 117 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 87 78 106 90 88 78 118 99 109 108 118 99 121 49 118 99 67 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 122 76 106 69 122 73 69 100 108 99 51 82 112 119 55 78 117 73 71 82 108 73 71 70 106 89 50 86 122 98 51 74 112 98 51 77 103 90 87 52 103 98 51 66 108 99 109 70 106 97 87 57 117 90 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 78 49 99 51 82 118 98 87 86 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 81 86 70 75 82 84 70 113 82 86 104 109 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 70 106 89 50 86 122 98 51 74 112 98 51 77 105 76 67 65 105 98 51 66 108 99 109 70 106 97 87 57 117 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 118 99 67 49 106 98 50 49 108 99 109 78 112 89 87 119 116 89 109 70 122 97 87 78 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 77 117 77 84 65 103 85 71 70 122 98 51 77 103 90 71 85 103 100 87 53 104 73 71 57 119 90 88 74 104 89 50 110 68 115 50 52 103 89 50 57 116 90 88 74 106 97 87 70 115 73 71 76 68 111 88 78 112 89 50 69 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 78 49 99 51 82 118 98 87 86 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 101 72 66 104 81 109 86 114 87 86 86 76 81 48 69 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 118 99 71 86 121 89 87 78 112 119 55 78 117 73 105 119 103 73 109 76 68 111 88 78 112 89 50 69 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 104 99 50 108 110 98 109 70 121 76 87 74 104 99 51 82 112 90 71 57 121 90 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 77 121 52 120 77 83 66 66 99 50 108 110 98 109 70 121 73 71 74 104 99 51 82 112 90 71 57 121 90 88 77 103 89 83 66 118 99 71 86 121 89 87 78 112 98 50 53 108 99 121 66 106 98 50 49 108 99 109 78 112 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 78 101 69 49 51 89 108 108 73 82 68 78 70 86 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 74 104 99 51 82 112 90 71 57 121 90 88 77 105 76 67 65 105 98 51 66 108 99 109 70 106 97 87 57 117 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 106 89 87 49 105 97 87 70 121 76 88 66 121 98 51 66 112 90 88 82 104 99 109 108 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 77 117 79 83 66 68 89 87 49 105 97 87 70 121 73 72 66 121 98 51 66 112 90 88 82 104 99 109 108 118 73 71 82 108 73 72 86 117 73 72 90 108 97 77 79 116 89 51 86 115 98 121 65 116 73 68 73 103 98 99 79 112 100 71 57 107 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 78 49 99 51 82 118 98 87 86 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 76 86 86 89 84 50 74 81 89 84 86 51 90 70 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 119 99 109 57 119 97 87 86 48 89 88 74 112 98 121 73 115 73 67 74 50 90 87 106 68 114 87 78 49 98 71 56 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 106 89 87 49 105 97 87 70 121 76 87 49 118 90 71 86 115 98 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 122 76 106 103 103 81 50 70 116 89 109 108 104 99 105 66 116 98 50 82 108 98 71 56 103 90 71 85 103 100 109 86 111 119 54 49 106 100 87 120 118 73 71 56 103 90 87 119 103 89 50 57 115 98 51 73 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 78 49 99 51 82 118 98 87 86 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 78 48 120 122 84 85 108 76 78 107 112 112 98 69 48 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 116 98 50 82 108 98 71 56 105 76 67 65 105 89 50 57 115 98 51 73 105 76 67 65 105 100 109 86 111 119 54 49 106 100 87 120 118 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 100 87 53 112 90 71 70 107 76 87 82 108 98 87 56 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 77 121 52 51 73 69 78 118 98 110 90 108 99 110 82 112 99 105 66 49 98 105 66 105 89 88 78 48 97 87 82 118 99 105 66 104 73 72 86 117 97 87 82 104 90 67 66 107 90 87 49 118 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 106 100 88 78 48 98 50 49 108 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 85 51 100 68 100 109 89 87 116 120 82 88 86 114 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 90 71 86 116 98 121 73 115 73 67 74 105 89 88 78 48 97 87 82 118 99 105 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 88 66 121 90 88 78 49 99 72 86 108 99 51 82 118 76 88 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 52 76 106 69 103 82 51 74 104 89 109 70 106 97 99 79 122 98 105 66 107 90 83 66 49 98 105 66 119 99 109 86 122 100 88 66 49 90 88 78 48 98 121 66 107 90 83 66 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 51 70 49 98 51 82 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 122 74 113 78 85 49 89 76 86 73 53 82 71 115 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 119 99 109 86 122 100 88 66 49 90 88 78 48 98 121 73 115 73 67 74 106 99 109 86 104 99 105 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 88 66 108 90 71 108 107 98 121 49 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 67 52 121 73 69 100 121 89 87 74 104 89 50 110 68 115 50 52 103 90 71 85 103 100 87 52 103 99 71 86 107 97 87 82 118 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 74 107 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 76 90 85 56 120 77 49 104 75 100 70 77 120 86 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 110 66 108 90 71 108 107 98 121 73 115 73 67 74 106 99 109 86 104 99 105 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 87 70 115 89 109 70 121 89 87 52 116 100 109 86 117 100 71 70 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 103 117 77 121 66 72 99 109 70 105 89 87 78 112 119 55 78 117 73 71 82 108 73 72 86 117 73 71 70 115 89 109 70 121 119 54 70 117 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 100 81 82 70 74 112 86 69 90 118 77 51 86 90 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 89 87 120 105 89 88 76 68 111 87 52 105 76 67 65 105 89 51 74 108 89 88 73 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 119 89 87 53 108 98 67 49 50 90 87 53 48 89 83 49 107 97 88 74 108 89 51 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 103 117 77 84 81 103 85 71 70 117 90 87 119 103 90 71 85 103 86 109 86 117 100 71 69 103 82 71 108 121 90 87 78 48 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 87 53 66 97 87 49 80 84 71 90 116 85 105 49 86 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 99 71 70 117 90 87 119 105 76 67 65 105 90 71 108 121 90 87 78 48 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 88 66 121 90 87 78 112 98 51 77 116 100 71 70 121 97 87 90 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 52 76 106 69 49 73 69 100 108 99 51 82 112 119 55 78 117 73 71 82 108 73 72 66 121 90 87 78 112 98 51 77 103 101 83 66 48 89 88 74 112 90 109 70 122 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 66 49 98 51 112 48 84 70 65 52 90 110 104 110 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 99 72 74 108 89 50 108 118 99 121 73 115 73 67 74 48 89 88 74 112 90 109 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 100 71 70 121 97 87 90 104 99 121 49 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 78 105 66 85 89 88 74 112 90 109 70 122 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 87 77 116 86 88 82 114 82 70 90 113 97 69 48 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 48 89 88 74 112 90 109 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 88 74 48 97 87 78 49 98 71 57 122 76 88 82 104 99 109 108 109 89 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 48 73 69 70 121 100 77 79 116 89 51 86 115 98 51 77 103 101 83 66 48 89 88 74 112 90 109 69 103 90 71 85 103 89 88 74 48 119 54 49 106 100 87 120 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 86 81 90 68 82 114 82 84 66 87 84 106 108 66 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 89 88 74 48 119 54 49 106 100 87 120 118 99 121 73 115 73 67 74 48 89 88 74 112 90 109 69 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 107 89 88 82 118 99 121 49 111 97 88 78 48 98 51 74 112 89 50 57 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 85 117 78 83 66 69 89 88 82 118 99 121 66 112 98 88 66 118 99 110 82 104 98 110 82 108 99 121 65 116 73 69 104 112 99 51 84 68 115 51 74 112 89 50 57 122 73 67 48 103 86 71 108 119 98 51 77 103 90 71 85 103 99 71 70 110 98 121 65 116 73 69 78 49 90 87 53 48 89 83 66 106 98 50 53 48 89 87 74 115 90 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 112 79 68 90 77 89 50 53 83 86 107 86 82 79 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 104 112 99 51 84 68 115 51 74 112 89 50 57 122 73 105 119 103 73 110 66 104 90 50 57 122 73 105 119 103 73 109 78 118 98 110 82 104 89 109 120 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 99 109 108 108 99 50 100 118 76 87 86 117 100 71 108 107 89 87 82 108 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 49 76 106 81 103 85 109 108 108 99 50 100 118 73 71 82 108 73 71 86 117 100 71 108 107 89 87 82 108 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 117 83 110 104 89 89 109 53 77 100 72 78 67 78 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 110 74 112 90 88 78 110 98 121 73 115 73 67 74 108 98 110 82 112 90 71 70 107 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 106 100 87 86 117 100 71 70 122 76 87 74 104 98 109 78 104 99 109 108 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 49 76 106 77 103 81 51 86 108 98 110 82 104 99 121 66 105 89 87 53 106 89 88 74 112 89 88 77 103 76 83 66 119 98 51 73 103 90 71 86 109 90 87 78 48 98 121 65 116 73 71 70 106 100 71 108 50 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 104 98 85 78 48 77 50 70 52 83 84 78 87 86 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 78 49 90 87 53 48 89 88 77 105 76 67 65 105 89 109 70 117 89 50 70 121 97 87 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 99 109 86 115 89 87 78 112 98 50 53 108 99 121 49 108 98 110 82 112 90 71 70 107 90 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 78 83 52 121 73 70 74 108 98 71 70 106 97 87 57 117 90 88 77 103 90 71 85 103 90 87 53 48 97 87 82 104 90 71 86 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 106 100 88 78 48 98 50 49 108 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 87 100 111 86 71 100 72 89 108 74 80 98 50 112 66 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 99 109 86 115 89 87 78 112 98 50 53 108 99 121 73 115 73 67 74 108 98 110 82 112 90 71 70 107 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 104 98 72 82 104 76 87 86 117 100 71 108 107 89 87 81 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 78 83 52 120 73 69 70 115 100 71 69 103 90 71 85 103 90 87 53 48 97 87 82 104 90 67 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 76 97 110 100 48 100 70 104 107 87 106 82 73 99 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 70 115 100 71 69 105 76 67 65 105 90 87 53 48 97 87 82 104 90 67 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 50 57 119 97 87 70 121 76 88 66 108 90 50 70 121 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 65 117 78 121 66 68 98 51 66 112 89 88 73 103 101 83 66 119 90 87 100 104 99 105 66 108 98 110 82 121 90 83 66 107 98 50 78 49 98 87 86 117 100 71 57 122 73 71 82 108 73 72 82 118 90 71 56 103 100 71 108 119 98 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 86 89 51 99 69 108 116 97 109 89 53 88 49 78 78 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 89 50 57 119 97 87 70 121 73 105 119 103 73 110 66 108 90 50 70 121 73 105 119 103 73 109 82 118 89 51 86 116 90 87 53 48 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 118 99 71 86 121 89 87 78 112 98 50 53 108 99 121 49 110 90 87 53 108 99 109 108 106 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 77 67 52 50 73 69 57 119 90 88 74 104 89 50 108 118 98 109 86 122 73 71 100 108 98 115 79 112 99 109 108 106 89 88 77 103 76 83 66 109 97 87 120 48 99 109 70 121 73 67 48 103 99 71 70 121 100 71 108 121 73 67 48 103 98 88 86 115 100 71 108 119 89 88 74 48 97 88 73 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 108 117 100 109 57 112 89 50 85 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 84 89 122 107 51 83 110 100 114 100 108 66 122 97 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 57 119 90 88 74 104 89 50 108 118 98 109 86 122 73 105 119 103 73 109 90 112 98 72 82 121 89 88 73 105 76 67 65 105 99 71 70 121 100 71 108 121 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 90 109 70 106 100 72 86 121 89 83 49 122 90 88 74 50 97 87 78 112 98 51 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 78 83 66 68 99 109 86 104 99 105 66 109 89 87 78 48 100 88 74 104 73 71 82 108 73 72 90 108 98 110 82 104 73 71 82 108 73 72 78 108 99 110 90 112 89 50 108 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 70 84 82 71 89 120 97 48 112 81 86 85 74 74 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 73 115 73 67 74 122 90 88 74 50 97 87 78 112 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 109 89 87 78 48 100 88 74 104 89 50 108 118 98 105 49 48 89 87 53 107 89 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 69 51 73 69 90 104 89 51 82 49 99 109 70 106 97 99 79 122 98 105 66 108 98 105 66 48 89 87 53 107 89 83 66 107 90 83 66 104 98 71 74 104 99 109 70 117 90 88 77 103 90 71 85 103 100 109 86 117 100 71 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 109 86 114 81 106 70 79 89 109 86 119 83 69 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 109 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 76 67 65 105 100 71 70 117 90 71 69 105 76 67 65 105 89 87 120 105 89 88 74 104 98 109 86 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 87 120 105 89 88 74 104 98 109 86 122 76 87 57 121 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 89 103 81 99 79 120 89 87 82 112 99 105 66 104 98 71 74 104 99 109 70 117 90 88 77 103 84 49 74 122 73 71 69 103 100 87 53 104 73 71 90 104 89 51 82 49 99 109 69 103 90 71 85 103 100 109 86 117 100 71 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 87 69 104 68 79 84 86 102 97 86 74 84 77 50 77 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 104 98 71 74 104 99 109 70 117 90 88 77 105 76 67 65 105 84 49 73 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 87 70 117 100 71 108 106 97 88 66 118 76 87 78 118 89 110 74 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 79 83 66 68 99 109 86 104 99 105 66 104 98 110 82 112 89 50 108 119 98 121 66 107 90 83 66 106 98 50 74 121 98 121 66 104 73 71 78 115 97 87 86 117 100 71 85 103 99 50 108 117 73 72 66 108 90 71 108 107 98 121 66 117 97 83 66 118 99 71 86 121 89 87 78 112 119 55 78 117 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 98 88 74 53 81 109 74 78 88 50 82 115 86 50 56 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 104 98 110 82 112 89 50 108 119 98 121 73 115 73 67 74 106 98 50 74 121 98 121 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 50 57 105 99 109 56 116 89 87 53 48 97 87 78 112 99 71 56 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 50 73 69 78 121 90 87 70 106 97 99 79 122 98 105 66 106 98 50 74 121 98 121 66 107 90 83 66 104 98 110 82 112 89 50 108 119 98 121 66 107 90 83 66 119 90 87 82 112 90 71 56 103 90 71 85 103 100 109 86 117 100 71 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 107 116 53 83 107 99 52 82 122 65 53 101 108 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 106 98 50 74 121 98 121 73 115 73 67 74 104 98 110 82 112 89 50 108 119 98 121 73 115 73 67 74 119 90 87 82 112 90 71 56 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 106 98 50 74 121 98 121 49 109 89 87 78 48 100 88 74 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 78 83 66 68 98 50 74 121 98 121 66 107 90 83 66 109 89 87 78 48 100 88 74 104 73 71 74 118 100 77 79 122 98 105 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 99 71 70 53 98 87 86 117 100 67 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 116 120 78 110 86 80 77 88 70 72 85 69 69 52 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 89 50 57 105 99 109 56 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 78 67 105 65 103 76 121 56 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 83 66 85 81 85 120 77 82 86 73 103 75 68 69 48 73 72 90 112 90 71 86 118 99 121 107 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 81 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 104 90 50 86 117 90 71 69 116 100 71 70 115 98 71 86 121 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 69 119 76 106 85 103 81 87 100 108 98 109 82 104 73 71 82 108 73 72 82 104 98 71 120 108 99 105 66 53 73 71 78 104 98 71 86 117 90 71 70 121 97 87 57 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 53 80 82 69 111 122 76 87 49 86 81 86 70 82 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 89 87 100 108 98 109 82 104 73 105 119 103 73 109 78 104 98 71 86 117 90 71 70 121 97 87 57 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 116 90 50 86 122 100 71 108 118 98 105 49 122 97 87 53 112 90 88 78 48 99 109 57 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 69 119 76 106 77 103 82 50 86 122 100 71 110 68 115 50 52 103 90 71 85 103 99 50 108 117 97 87 86 122 100 72 74 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 49 98 84 70 66 77 85 53 51 81 107 74 84 84 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 110 78 112 98 109 108 108 99 51 82 121 98 51 77 105 76 67 65 105 90 50 86 122 100 71 110 68 115 50 52 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 109 99 109 70 117 99 88 86 112 89 50 108 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 120 77 67 52 121 73 69 100 108 99 51 82 112 119 55 78 117 73 71 82 108 73 71 90 121 89 87 53 120 100 87 108 106 97 87 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 100 70 86 86 112 104 98 69 70 51 83 122 86 66 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 90 110 74 104 98 110 70 49 97 87 78 112 89 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 109 97 87 78 111 89 87 112 108 76 87 49 108 89 50 70 117 97 87 78 118 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 120 77 67 52 120 73 69 90 112 89 50 104 104 97 109 85 103 90 71 85 103 98 71 57 122 73 71 49 108 89 56 79 104 98 109 108 106 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 100 118 99 109 116 122 97 71 57 119 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 57 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 100 69 112 104 97 51 70 97 98 109 82 112 85 122 81 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 82 104 98 71 120 108 99 105 73 115 73 67 74 109 97 87 78 111 89 87 112 108 73 105 119 103 73 109 49 108 89 56 79 104 98 109 108 106 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 106 97 88 82 104 76 87 78 115 97 87 86 117 100 71 85 116 90 88 104 112 99 51 82 108 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 122 76 106 65 117 77 83 66 68 97 88 82 104 73 71 78 118 98 105 66 106 98 71 108 108 98 110 82 108 73 72 107 103 100 109 86 111 119 54 49 106 100 87 120 118 99 121 66 108 101 71 108 122 100 71 86 117 100 71 86 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 65 119 86 106 74 121 100 86 70 67 97 70 112 114 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 89 50 108 48 89 83 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 105 119 103 73 110 90 108 97 77 79 116 89 51 86 115 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 106 97 88 82 104 76 87 53 118 76 87 86 52 97 88 78 48 90 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 121 52 119 76 106 73 103 81 50 108 48 89 83 66 106 98 50 52 103 89 50 120 112 90 87 53 48 90 83 66 53 73 72 90 108 97 77 79 116 89 51 86 115 98 51 77 103 98 109 56 103 90 88 104 112 99 51 82 108 98 110 82 108 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 76 83 51 112 109 97 85 78 72 101 87 82 71 81 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 109 78 112 100 71 69 105 76 67 65 105 89 50 120 112 90 87 53 48 90 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 100 118 99 109 116 122 97 71 57 119 76 87 78 112 100 71 69 116 89 50 57 121 100 71 86 122 97 87 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 77 117 77 67 52 122 73 69 70 115 100 71 69 103 90 71 85 103 89 50 108 48 89 83 66 106 98 50 52 103 100 109 86 111 119 54 49 106 100 87 120 118 73 71 82 108 73 71 78 118 99 110 82 108 99 56 79 116 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 48 51 89 50 78 83 78 109 82 122 77 85 82 77 81 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 109 78 112 100 71 69 105 76 67 65 105 89 50 57 121 100 71 86 122 119 54 49 104 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 116 99 109 86 117 98 51 90 104 89 50 108 118 98 105 49 106 97 88 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 122 76 106 65 117 78 67 66 83 90 87 53 118 100 109 70 106 97 99 79 122 98 105 66 107 90 83 66 49 98 109 69 103 89 50 108 48 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 48 119 90 49 104 117 99 69 108 115 98 72 69 50 77 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 110 74 108 98 109 57 50 89 87 78 112 119 55 78 117 73 105 119 103 73 109 78 112 100 71 69 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 118 99 105 49 107 90 88 78 107 90 83 49 106 97 88 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 122 76 106 65 117 78 83 66 66 98 72 82 104 73 71 82 108 73 69 57 83 73 71 82 108 99 50 82 108 73 71 78 112 100 71 69 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 100 118 99 109 116 122 97 71 57 119 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 57 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 89 106 90 88 83 109 53 83 98 110 82 119 84 107 69 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 82 104 98 71 120 108 99 105 73 115 73 67 74 80 85 105 73 115 73 67 74 106 97 88 82 104 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 116 98 51 73 116 100 109 86 111 97 87 78 49 98 71 56 116 89 50 120 112 90 87 53 48 90 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 105 52 119 76 106 69 103 81 87 120 48 89 83 66 107 90 83 66 80 85 105 66 87 90 87 106 68 114 87 78 49 98 71 56 103 81 50 120 112 90 87 53 48 90 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 117 85 108 57 50 100 105 49 97 98 105 49 52 100 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 107 57 83 73 105 119 103 73 110 90 108 97 77 79 116 89 51 86 115 98 121 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 116 98 51 73 116 100 71 86 116 99 71 70 121 97 87 56 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 73 117 77 67 52 121 73 69 70 115 100 71 69 103 90 71 85 103 84 49 73 103 86 71 86 116 99 71 70 121 97 87 56 103 101 83 66 49 99 50 57 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 85 52 77 49 57 68 87 71 108 109 100 109 74 74 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 84 49 73 105 76 67 65 105 100 71 86 116 99 71 70 121 97 87 56 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 118 99 105 49 106 98 50 53 109 97 88 74 116 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 73 117 77 67 52 122 73 69 70 115 100 71 69 103 90 71 85 103 84 49 73 103 81 50 57 117 90 109 108 121 98 87 70 106 97 99 79 122 98 105 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 68 85 68 90 87 97 72 90 82 100 48 74 72 79 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 107 57 83 73 105 119 103 73 109 78 118 98 109 90 112 99 109 49 104 89 50 110 68 115 50 52 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 118 99 105 49 109 89 87 78 48 100 88 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 105 52 119 76 106 81 103 81 87 120 48 89 83 66 107 90 83 66 80 85 105 66 71 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 100 118 99 109 116 122 97 71 57 119 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 57 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 85 87 78 117 90 87 119 52 82 48 104 66 87 85 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 82 104 98 71 120 108 99 105 73 115 73 67 74 80 85 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 104 98 72 82 104 76 88 90 108 97 71 108 106 100 87 120 118 76 88 82 104 98 71 120 108 99 105 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 122 76 106 89 103 81 87 120 48 89 83 66 107 90 83 66 50 90 87 106 68 114 87 78 49 98 71 56 103 90 71 85 103 100 71 70 115 98 71 86 121 73 71 86 117 73 69 57 83 73 67 48 103 86 107 56 103 90 87 52 103 89 87 120 105 89 88 76 68 111 87 52 103 90 71 85 103 89 50 57 116 99 72 74 104 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 120 84 97 51 73 53 101 71 53 67 100 107 104 86 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 100 109 86 111 119 54 49 106 100 87 120 118 73 105 119 103 73 107 57 83 73 105 119 103 73 109 70 115 89 109 70 121 119 54 70 117 73 108 48 78 67 105 65 103 102 83 119 78 67 103 48 75 73 67 65 118 76 121 65 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 73 69 70 69 84 85 108 79 83 86 78 85 85 107 70 68 83 99 79 84 84 105 65 111 77 106 89 103 100 109 108 107 90 87 57 122 75 83 65 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 70 115 100 71 69 116 89 51 86 108 98 110 82 104 99 121 49 48 90 88 78 118 99 109 86 121 97 87 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 73 69 70 115 100 71 69 103 90 71 85 103 89 51 86 108 98 110 82 104 99 121 66 107 90 83 66 48 90 88 78 118 99 109 86 121 119 54 49 104 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 48 99 109 86 104 99 51 86 121 101 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 86 107 122 78 107 70 122 89 87 53 84 81 88 70 78 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 100 71 86 122 98 51 74 108 99 115 79 116 89 83 73 115 73 67 74 106 100 87 86 117 100 71 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 87 120 48 89 83 49 106 98 50 53 106 90 88 66 48 98 51 77 116 100 71 86 122 98 51 74 108 99 109 108 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 105 66 66 98 72 82 104 73 71 82 108 73 71 78 118 98 109 78 108 99 72 82 118 99 121 66 107 90 83 66 48 90 88 78 118 99 109 86 121 119 54 49 104 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 48 99 109 86 104 99 51 86 121 101 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 78 112 86 51 112 114 86 51 108 109 90 72 74 110 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 100 71 86 122 98 51 74 108 99 115 79 116 89 83 73 115 73 67 74 106 98 50 53 106 90 88 66 48 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 98 72 82 104 76 88 78 108 99 110 90 112 89 50 108 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 121 66 66 98 72 82 104 73 71 82 108 73 72 86 117 73 72 78 108 99 110 90 112 89 50 108 118 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 48 99 109 86 104 99 51 86 121 101 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 86 108 109 79 88 100 104 100 88 78 83 85 48 53 78 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 99 50 86 121 100 109 108 106 97 87 56 105 76 67 65 105 89 87 120 48 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 88 74 108 90 50 108 122 100 72 74 118 76 87 49 104 98 110 86 104 98 67 49 48 90 88 78 118 99 109 86 121 97 87 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 48 73 69 70 115 100 71 69 103 90 71 85 103 99 109 86 110 97 88 78 48 99 109 56 103 98 87 70 117 100 87 70 115 73 71 86 117 73 72 82 108 99 50 57 121 90 88 76 68 114 87 69 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 51 82 121 90 87 70 122 100 88 74 53 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 87 108 86 72 99 110 100 89 99 107 77 53 87 85 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 48 90 88 78 118 99 109 86 121 119 54 49 104 73 105 119 103 73 110 74 108 90 50 108 122 100 72 74 118 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 88 66 115 97 87 78 104 89 50 108 118 98 105 49 104 98 110 82 112 89 50 108 119 98 51 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 51 73 69 70 119 98 71 108 106 89 87 78 112 119 55 78 117 73 71 82 108 73 71 70 117 100 71 108 106 97 88 66 118 99 121 66 104 99 50 57 106 97 87 70 107 98 51 77 103 89 83 66 115 89 83 66 108 98 110 82 112 90 71 70 107 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 48 99 109 86 104 99 51 86 121 101 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 83 49 73 86 49 69 50 79 69 116 116 99 84 90 118 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 87 53 48 97 87 78 112 99 71 57 122 73 105 119 103 73 109 86 117 100 71 108 107 89 87 81 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 99 110 70 49 90 87 56 116 89 50 108 108 99 110 74 108 76 87 78 104 97 109 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 52 73 69 70 121 99 88 86 108 98 121 66 53 73 71 78 112 90 88 74 121 90 83 66 107 90 83 66 106 100 87 86 117 100 71 70 122 73 71 82 108 73 72 82 108 99 50 57 121 90 88 76 68 114 87 69 103 89 50 70 113 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 50 70 122 97 70 57 106 98 71 57 122 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 87 82 83 100 69 90 109 97 109 100 102 90 88 104 90 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 88 74 120 100 87 86 118 73 105 119 103 73 109 78 112 90 88 74 121 90 83 73 115 73 67 74 106 89 87 112 104 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 87 120 48 89 83 49 109 89 87 78 48 100 88 74 104 76 87 100 104 99 51 82 118 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 69 119 73 69 70 115 100 71 69 103 90 71 85 103 90 109 70 106 100 72 86 121 89 83 66 107 90 83 66 110 89 88 78 48 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 86 52 99 71 86 117 99 50 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 88 86 86 101 70 104 90 78 86 86 76 82 87 57 90 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 73 115 73 67 74 110 89 88 78 48 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 110 89 88 78 48 98 51 77 116 89 50 57 117 100 72 74 104 100 71 57 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 69 103 82 109 70 106 100 72 86 121 89 88 73 103 90 50 70 122 100 71 57 122 73 71 49 108 90 71 108 104 98 110 82 108 73 71 78 118 98 110 82 121 89 88 82 118 99 121 66 53 73 72 90 108 98 109 78 112 98 87 108 108 98 110 82 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 90 88 104 119 90 87 53 122 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 86 69 53 69 83 49 81 121 101 84 86 111 84 122 65 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 110 89 88 78 48 98 51 77 105 76 67 65 105 89 50 57 117 100 72 74 104 100 71 57 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 99 109 86 116 90 88 78 104 99 121 49 106 98 50 74 121 98 51 77 116 99 71 70 110 98 51 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 77 105 66 66 98 72 82 104 73 71 82 108 73 72 74 108 98 87 86 122 89 88 77 103 90 71 85 103 89 50 57 105 99 109 57 122 73 72 107 103 99 71 70 110 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 70 106 89 50 57 49 98 110 82 112 98 109 99 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 110 87 69 86 84 97 48 53 53 99 106 104 76 77 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 110 74 108 98 87 86 122 89 88 77 105 76 67 65 105 89 50 57 105 99 109 57 122 73 105 119 103 73 110 66 104 90 50 57 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 99 109 86 116 90 88 78 104 76 87 53 118 98 87 108 117 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 77 121 66 68 99 109 86 104 89 50 110 68 115 50 52 103 90 71 85 103 99 109 86 116 90 88 78 104 73 71 82 108 73 71 55 68 115 50 49 112 98 109 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 104 89 50 78 118 100 87 53 48 97 87 53 110 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 85 49 70 104 90 84 90 107 87 69 104 71 86 107 48 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 121 90 87 49 108 99 50 69 105 76 67 65 105 98 115 79 122 98 87 108 117 89 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 99 50 108 108 98 110 82 118 99 121 49 106 98 50 53 48 89 87 74 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 78 67 66 68 99 109 86 104 99 105 66 104 99 50 108 108 98 110 82 118 99 121 66 106 98 50 53 48 89 87 74 115 90 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 70 106 89 50 57 49 98 110 82 112 98 109 99 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 72 98 109 53 113 85 71 74 86 84 49 90 54 89 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 109 70 122 97 87 86 117 100 71 57 122 73 105 119 103 73 109 78 118 98 110 82 104 89 109 120 108 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 74 104 98 71 70 117 89 50 85 116 99 51 86 116 89 88 77 116 99 50 70 115 90 71 57 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 103 103 81 50 57 117 99 51 86 115 100 71 70 121 73 71 74 104 98 71 70 117 89 50 85 103 90 71 85 103 99 51 86 116 89 88 77 103 101 83 66 122 89 87 120 107 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 70 106 89 50 57 49 98 110 82 112 98 109 99 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 105 87 84 69 51 83 48 78 122 89 87 120 107 98 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 109 74 104 98 71 70 117 89 50 85 105 76 67 65 105 99 51 86 116 89 88 77 105 76 67 65 105 99 50 70 115 90 71 57 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 90 88 104 48 99 109 70 106 100 71 56 116 98 87 70 53 98 51 73 116 89 51 86 108 98 110 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 107 103 81 50 57 117 99 51 86 115 100 71 70 121 73 72 86 117 73 71 86 52 100 72 74 104 89 51 82 118 73 71 56 103 98 87 70 53 98 51 73 103 90 71 85 103 100 87 53 104 73 71 78 49 90 87 53 48 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 87 78 106 98 51 86 117 100 71 108 117 90 121 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 88 90 49 87 108 86 118 99 71 119 119 97 84 90 118 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 90 88 104 48 99 109 70 106 100 71 56 105 76 67 65 105 98 87 70 53 98 51 73 105 76 67 65 105 89 51 86 108 98 110 82 104 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 90 109 70 106 100 72 86 121 89 87 78 112 98 50 52 116 100 71 70 117 90 71 69 116 89 50 57 116 99 72 74 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 73 119 73 69 90 104 89 51 82 49 99 109 70 106 97 99 79 122 98 105 66 108 98 105 66 48 89 87 53 107 89 83 66 107 90 83 66 104 98 71 74 104 99 109 70 117 90 88 77 103 90 71 85 103 89 50 57 116 99 72 74 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 90 88 104 119 90 87 53 122 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 85 82 122 101 109 86 89 97 72 86 53 84 84 65 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 76 67 65 105 100 71 70 117 90 71 69 105 76 67 65 105 89 50 57 116 99 72 74 104 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 90 104 89 51 82 49 99 109 70 106 97 87 57 117 76 87 70 115 89 109 70 121 89 87 52 116 89 50 57 116 99 72 74 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 106 69 103 82 109 70 106 100 72 86 121 89 87 78 112 119 55 78 117 73 71 82 108 73 71 70 115 89 109 70 121 119 54 70 117 73 71 82 108 73 71 78 118 98 88 66 121 89 88 77 103 99 71 57 121 73 72 78 108 98 71 86 106 89 50 110 68 115 50 52 103 75 121 66 109 89 87 78 48 100 88 74 104 99 105 65 114 73 69 72 68 115 87 70 107 97 88 73 103 89 87 120 105 89 88 74 104 98 109 86 122 73 71 69 103 90 109 70 106 100 72 86 121 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 90 88 104 119 90 87 53 122 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 90 51 70 111 89 122 70 51 78 108 86 75 84 71 115 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 87 120 105 89 88 76 68 111 87 52 105 76 67 65 105 89 50 57 116 99 72 74 104 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 78 118 98 109 90 112 90 121 49 109 89 87 78 48 100 88 74 104 99 121 49 106 98 50 49 119 99 109 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 121 77 105 66 68 98 50 53 109 97 87 100 49 99 109 70 121 73 72 107 103 98 87 57 107 97 87 90 112 89 50 70 121 73 71 90 104 89 51 82 49 99 109 70 122 73 71 82 108 73 71 78 118 98 88 66 121 89 88 77 103 90 50 70 122 100 71 57 122 73 68 73 103 98 51 66 106 97 87 57 117 90 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 86 52 99 71 86 117 99 50 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 70 53 99 51 112 83 86 70 74 120 77 85 112 122 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 50 57 117 90 109 108 110 100 88 74 104 99 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 99 121 73 115 73 67 74 106 98 50 49 119 99 109 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 50 104 108 89 50 115 116 99 50 86 121 97 87 85 116 89 87 120 105 89 88 74 104 98 109 86 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 106 77 103 81 50 104 108 89 50 115 103 90 87 52 103 99 50 86 121 97 87 85 103 90 87 52 103 89 87 120 105 89 88 74 104 98 109 86 122 73 71 82 108 73 72 90 108 98 110 82 104 99 121 66 119 89 88 74 104 73 72 70 49 90 83 66 122 98 50 120 112 89 50 108 48 90 83 66 109 90 87 78 111 89 83 66 104 98 67 66 109 89 87 78 48 100 88 74 104 99 109 120 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 85 88 103 122 77 110 90 79 100 51 74 72 90 51 99 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 106 97 71 86 106 97 121 73 115 73 67 74 122 90 88 74 112 90 83 73 115 73 67 74 104 98 71 74 104 99 109 70 117 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 106 99 109 86 104 99 105 49 112 98 109 49 118 100 109 108 115 97 88 112 104 90 71 56 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 121 78 67 66 68 99 109 86 104 99 105 66 112 98 109 49 118 100 109 108 115 97 88 112 104 90 71 56 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 70 106 89 50 57 49 98 110 82 112 98 109 99 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 49 98 84 74 89 82 49 56 119 78 70 66 111 77 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 109 78 121 90 87 70 121 73 105 119 103 73 109 108 117 98 87 57 50 97 87 120 112 101 109 70 107 98 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 70 117 89 87 82 112 99 105 49 104 98 71 74 104 99 109 70 117 90 88 77 116 90 109 70 106 100 72 86 121 89 83 49 106 98 50 49 119 99 109 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 121 78 83 66 66 119 55 70 104 90 71 108 121 73 71 70 115 89 109 70 121 89 87 53 108 99 121 66 104 73 72 86 117 89 83 66 109 89 87 78 48 100 88 74 104 73 71 82 108 73 71 78 118 98 88 66 121 89 83 65 111 89 50 70 122 89 88 73 112 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 108 101 72 66 108 98 110 78 108 88 50 108 117 100 109 57 112 89 50 85 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 104 99 109 100 52 86 68 66 112 98 86 108 121 83 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 107 72 68 115 87 70 107 97 88 73 105 76 67 65 105 89 87 120 105 89 88 74 104 98 109 86 122 73 105 119 103 73 109 90 104 89 51 82 49 99 109 69 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 89 109 57 117 89 88 73 116 90 109 70 106 100 72 86 121 89 83 49 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 121 78 105 66 66 89 109 57 117 89 88 73 103 90 109 70 106 100 72 86 121 89 83 66 107 90 83 66 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 108 117 100 109 57 112 89 50 86 102 99 71 70 53 98 87 86 117 100 67 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 49 70 78 84 70 89 78 71 99 119 100 71 100 106 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 87 74 118 98 109 70 121 73 105 119 103 73 109 90 104 89 51 82 49 99 109 69 105 76 67 65 105 100 109 86 117 100 71 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 50 57 105 99 109 56 116 90 109 70 106 100 72 86 121 89 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 85 103 81 50 57 105 99 109 56 103 90 71 85 103 90 109 70 106 100 72 86 121 89 83 66 105 98 51 84 68 115 50 52 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 108 117 100 109 57 112 89 50 86 102 99 71 70 53 98 87 86 117 100 67 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 116 120 78 110 86 80 77 88 70 72 85 69 69 52 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 50 57 105 99 109 56 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 78 118 89 110 74 118 76 87 70 117 100 71 108 106 97 88 66 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 78 105 66 68 99 109 86 104 89 50 110 68 115 50 52 103 89 50 57 105 99 109 56 103 90 71 85 103 89 87 53 48 97 87 78 112 99 71 56 103 90 71 85 103 99 71 86 107 97 87 82 118 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 107 116 53 83 107 99 52 82 122 65 53 101 108 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 106 98 50 74 121 98 121 73 115 73 67 74 104 98 110 82 112 89 50 108 119 98 121 73 115 73 67 74 119 90 87 82 112 90 71 56 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 98 110 82 112 89 50 108 119 98 121 49 106 98 50 74 121 98 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 107 103 81 51 74 108 89 88 73 103 89 87 53 48 97 87 78 112 99 71 56 103 90 71 85 103 89 50 57 105 99 109 56 103 89 83 66 106 98 71 108 108 98 110 82 108 73 72 78 112 98 105 66 119 90 87 82 112 90 71 56 103 98 109 107 103 98 51 66 108 99 109 70 106 97 99 79 122 98 105 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 98 88 74 53 81 109 74 78 88 50 82 115 86 50 56 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 104 98 110 82 112 89 50 108 119 98 121 73 115 73 67 74 106 98 50 74 121 98 121 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 90 109 70 106 100 72 86 121 89 83 49 122 90 88 74 50 97 87 78 112 98 51 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 78 83 66 68 99 109 86 104 99 105 66 109 89 87 78 48 100 88 74 104 73 71 82 108 73 72 90 108 98 110 82 104 73 71 82 108 73 72 78 108 99 110 90 112 89 50 108 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 90 88 104 119 90 87 53 122 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 77 86 78 69 90 106 70 114 83 108 66 86 81 107 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 73 105 119 103 73 110 78 108 99 110 90 112 89 50 108 118 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 70 115 89 109 70 121 89 87 53 108 99 121 49 118 99 105 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 69 50 73 69 72 68 115 87 70 107 97 88 73 103 89 87 120 105 89 88 74 104 98 109 86 122 73 69 57 83 99 121 66 104 73 72 86 117 89 83 66 109 89 87 78 48 100 88 74 104 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 87 69 104 68 79 84 86 102 97 86 74 84 77 50 77 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 104 98 71 74 104 99 109 70 117 90 88 77 105 76 67 65 105 84 49 73 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 90 104 89 51 82 49 99 109 70 106 97 87 57 117 76 88 82 104 98 109 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 99 103 82 109 70 106 100 72 86 121 89 87 78 112 119 55 78 117 73 71 86 117 73 72 82 104 98 109 82 104 73 71 82 108 73 71 70 115 89 109 70 121 89 87 53 108 99 121 66 107 90 83 66 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 108 117 100 109 57 112 89 50 86 102 99 71 70 53 98 87 86 117 100 67 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 88 74 108 97 48 73 120 84 109 74 108 99 69 104 74 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 90 109 70 106 100 72 86 121 89 87 78 112 119 55 78 117 73 105 119 103 73 110 82 104 98 109 82 104 73 105 119 103 73 109 70 115 89 109 70 121 89 87 53 108 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 78 67 105 65 103 76 121 56 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 83 66 84 86 69 57 68 83 121 65 111 77 121 66 50 97 87 82 108 98 51 77 103 76 83 66 108 101 71 108 122 100 71 108 117 90 121 107 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 81 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 100 71 57 106 97 121 49 106 97 71 86 106 97 121 49 122 100 71 57 106 97 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 68 98 50 53 122 100 87 120 48 89 88 73 103 99 51 82 118 89 50 115 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 48 98 50 78 114 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 50 104 108 89 50 116 102 99 51 82 118 89 50 115 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 107 85 88 99 48 100 122 108 88 90 49 104 106 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 99 51 82 118 89 50 115 105 76 67 65 105 89 50 57 117 99 51 86 115 100 71 69 105 76 67 65 105 97 87 53 50 90 87 53 48 89 88 74 112 98 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 48 98 50 78 114 76 87 49 118 100 109 86 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 107 49 118 100 109 108 116 97 87 86 117 100 71 56 103 90 71 85 103 99 51 82 118 89 50 115 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 48 98 50 78 114 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 99 51 82 118 89 50 116 102 98 87 57 50 90 87 49 108 98 110 81 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 107 85 88 99 48 100 122 108 88 90 49 104 106 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 99 51 82 118 89 50 115 105 76 67 65 105 98 87 57 50 97 87 49 112 90 87 53 48 98 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 48 98 50 78 114 76 88 82 121 89 87 53 122 90 109 86 121 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 82 121 89 88 78 119 89 88 78 118 73 71 86 117 100 72 74 108 73 71 70 115 98 87 70 106 90 87 53 108 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 51 82 118 89 50 115 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 51 89 88 74 108 97 71 57 49 99 50 86 102 100 72 74 104 98 110 78 109 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 107 85 88 99 48 100 122 108 88 90 49 104 106 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 99 51 82 118 89 50 115 105 76 67 65 105 100 72 74 104 99 51 66 104 99 50 56 105 76 67 65 105 89 87 120 116 89 87 78 108 98 109 86 122 73 108 48 78 67 105 65 103 102 83 119 78 67 103 48 75 73 67 65 118 76 121 65 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 73 70 90 70 83 69 108 68 84 69 86 84 73 67 103 120 73 72 90 112 90 71 86 118 73 67 48 103 90 88 104 112 99 51 82 112 98 109 99 112 73 68 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 109 86 111 97 87 78 115 90 88 77 116 100 72 74 104 98 110 78 109 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 72 74 104 99 51 66 104 99 50 56 103 90 71 85 103 100 109 86 111 119 54 49 106 100 87 120 118 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 50 90 87 104 112 89 50 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 110 90 108 97 71 108 106 98 71 86 102 100 72 74 104 98 110 78 109 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 107 85 88 99 48 100 122 108 88 90 49 104 106 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 111 119 54 49 106 100 87 120 118 99 121 73 115 73 67 74 48 99 109 70 122 99 71 70 122 98 121 74 100 68 81 111 103 73 72 48 115 68 81 111 78 67 105 65 103 76 121 56 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 83 66 84 86 86 66 81 84 49 74 85 73 67 103 120 73 72 90 112 90 71 86 118 73 67 48 103 90 88 104 112 99 51 82 112 98 109 99 112 73 68 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 51 86 119 99 71 57 121 100 67 49 106 90 87 53 48 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 81 50 86 117 100 72 74 118 73 71 82 108 73 71 70 53 100 87 82 104 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 100 88 66 119 98 51 74 48 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 97 71 86 115 99 70 57 106 90 87 53 48 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 111 90 87 120 119 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 110 97 88 82 105 98 50 57 114 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 71 100 108 100 69 100 112 100 71 74 118 98 50 116 86 99 109 119 111 73 110 78 49 99 72 66 118 99 110 81 105 75 83 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 122 98 51 66 118 99 110 82 108 73 105 119 103 73 109 70 53 100 87 82 104 73 108 48 78 67 105 65 103 102 81 48 75 88 84 115 78 67 103 48 75 90 88 104 119 98 51 74 48 73 71 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 78 118 98 110 82 108 98 110 82 67 101 85 49 118 90 72 86 115 90 83 104 116 98 50 82 49 98 71 85 112 73 72 115 78 67 105 65 103 99 109 86 48 100 88 74 117 73 71 120 108 89 88 74 117 97 87 53 110 81 50 57 117 100 71 86 117 100 67 53 109 97 87 120 48 90 88 73 111 75 71 108 48 90 87 48 112 73 68 48 43 73 71 108 48 90 87 48 117 98 87 57 107 100 87 120 108 73 68 48 57 80 83 66 116 98 50 82 49 98 71 85 112 79 119 48 75 102 81 48 75 68 81 112 108 101 72 66 118 99 110 81 103 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 81 50 57 117 100 71 86 117 100 69 74 53 83 87 81 111 97 87 81 112 73 72 115 78 67 105 65 103 99 109 86 48 100 88 74 117 73 71 120 108 89 88 74 117 97 87 53 110 81 50 57 117 100 71 86 117 100 67 53 109 97 87 53 107 75 67 104 112 100 71 86 116 75 83 65 57 80 105 66 112 100 71 86 116 76 109 108 107 73 68 48 57 80 83 66 112 90 67 107 103 102 72 119 103 98 110 86 115 98 68 115 78 67 110 48 78 67 103 48 75 90 88 104 119 98 51 74 48 73 71 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 90 115 98 51 100 74 100 71 86 116 99 121 104 116 98 50 82 49 98 71 85 112 73 72 115 78 67 105 65 103 99 109 86 48 100 88 74 117 73 71 120 108 89 88 74 117 97 87 53 110 81 50 57 117 100 71 86 117 100 67 53 109 97 87 120 48 90 88 73 111 75 71 108 48 90 87 48 112 73 68 48 43 73 71 108 48 90 87 48 117 98 87 57 107 100 87 120 108 73 68 48 57 80 83 66 116 98 50 82 49 98 71 85 112 79 119 48 75 102 81 48 75 68 81 112 108 101 72 66 118 99 110 81 103 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 85 51 82 108 99 69 108 117 99 51 82 121 100 87 78 48 97 87 57 117 99 121 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 112 100 71 86 116 73 68 48 78 67 105 65 103 73 67 66 48 101 88 66 108 98 50 89 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 103 80 84 48 57 73 67 74 122 100 72 74 112 98 109 99 105 68 81 111 103 73 67 65 103 73 67 65 47 73 71 100 108 100 69 78 118 98 110 82 108 98 110 82 67 101 85 108 107 75 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 75 81 48 75 73 67 65 103 73 67 65 103 79 105 66 106 98 50 53 48 90 87 53 48 84 51 74 74 90 68 115 78 67 103 48 75 73 67 66 112 90 105 65 111 73 87 108 48 90 87 48 112 73 72 74 108 100 72 86 121 98 105 66 98 88 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 81 88 74 121 89 88 107 117 97 88 78 66 99 110 74 104 101 83 104 112 100 71 86 116 76 109 108 117 99 51 82 121 100 87 78 48 97 87 57 117 99 121 107 112 73 72 115 78 67 105 65 103 73 67 66 121 90 88 82 49 99 109 52 103 97 88 82 108 98 83 53 112 98 110 78 48 99 110 86 106 100 71 108 118 98 110 77 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 106 98 50 53 122 100 67 66 119 99 109 57 106 90 88 78 122 83 87 81 103 80 83 66 112 100 71 86 116 76 110 66 121 98 50 78 108 99 51 77 55 68 81 111 78 67 105 65 103 97 87 89 103 75 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 78 74 90 67 65 109 74 103 48 75 73 67 65 103 73 72 82 53 99 71 86 118 90 105 66 122 100 88 66 119 98 51 74 48 81 50 70 122 90 88 77 103 73 84 48 57 73 67 74 49 98 109 82 108 90 109 108 117 90 87 81 105 73 67 89 109 68 81 111 103 73 67 65 103 99 51 86 119 99 71 57 121 100 69 78 104 99 50 86 122 80 121 53 98 99 72 74 118 89 50 86 122 99 48 108 107 88 84 56 117 97 87 53 122 100 72 74 49 89 51 82 112 98 50 53 122 68 81 111 103 73 67 107 103 101 119 48 75 73 67 65 103 73 72 74 108 100 72 86 121 98 105 66 122 100 88 66 119 98 51 74 48 81 50 70 122 90 88 78 98 99 72 74 118 89 50 86 122 99 48 108 107 88 83 53 112 98 110 78 48 99 110 86 106 100 71 108 118 98 110 77 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 87 49 48 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 109 100 87 53 106 100 71 108 118 98 105 66 121 90 88 78 118 98 72 90 108 83 50 53 118 100 50 120 108 90 71 100 108 85 109 86 122 98 51 86 121 89 50 85 111 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 88 82 108 98 83 65 57 68 81 111 103 73 67 65 103 100 72 108 119 90 87 57 109 73 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 73 68 48 57 80 83 65 105 99 51 82 121 97 87 53 110 73 103 48 75 73 67 65 103 73 67 65 103 80 121 66 110 90 88 82 68 98 50 53 48 90 87 53 48 81 110 108 74 90 67 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 78 67 105 65 103 73 67 65 103 73 68 111 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 55 68 81 111 78 67 105 65 103 97 87 89 103 75 67 70 112 100 71 86 116 75 83 66 121 90 88 82 49 99 109 52 103 98 110 86 115 98 68 115 78 67 103 48 75 73 67 66 106 98 50 53 122 100 67 66 114 97 87 53 107 73 68 48 103 97 88 82 108 98 83 53 48 101 88 66 108 73 72 120 56 73 67 74 111 90 87 120 119 73 106 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 72 74 108 90 105 65 57 68 81 111 103 73 67 65 103 97 88 82 108 98 83 53 49 99 109 119 103 102 72 119 78 67 105 65 103 73 67 65 111 97 88 82 108 98 83 53 116 98 50 82 49 98 71 85 103 74 105 89 103 99 50 57 49 99 109 78 108 99 122 56 117 90 50 108 48 89 109 57 118 97 122 56 117 98 87 57 107 100 87 120 108 99 122 56 117 87 50 108 48 90 87 48 117 98 87 57 107 100 87 120 108 88 81 48 75 73 67 65 103 73 67 65 103 80 121 66 110 90 88 82 72 97 88 82 105 98 50 57 114 86 88 74 115 75 71 108 48 90 87 48 117 98 87 57 107 100 87 120 108 75 81 48 75 73 67 65 103 73 67 65 103 79 105 66 117 100 87 120 115 75 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 73 87 104 121 90 87 89 112 73 72 74 108 100 72 86 121 98 105 66 117 100 87 120 115 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 71 108 48 90 87 48 117 97 87 81 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 71 108 48 90 87 48 117 100 71 108 48 98 71 85 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 66 112 100 71 86 116 76 109 49 118 90 72 86 115 90 83 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 66 112 100 71 86 116 76 110 66 121 98 50 78 108 99 51 77 103 80 122 56 103 98 110 86 115 98 67 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 71 108 48 90 87 48 117 99 50 57 49 99 109 78 108 73 68 56 47 73 71 53 49 98 71 119 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 97 50 108 117 90 67 119 78 67 105 65 103 73 67 66 114 97 87 53 107 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 97 72 74 108 90 105 119 78 67 105 65 103 73 67 66 111 99 109 86 109 76 65 48 75 73 67 65 103 73 71 108 122 82 88 104 48 90 88 74 117 89 87 119 54 73 67 57 101 97 72 82 48 99 72 77 47 79 108 119 118 88 67 56 118 76 110 82 108 99 51 81 111 97 72 74 108 90 105 107 115 68 81 111 103 73 72 48 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 109 100 87 53 106 100 71 108 118 98 105 66 110 90 88 82 71 97 88 74 122 100 69 90 115 98 51 100 74 100 71 86 116 75 71 49 118 90 72 86 115 90 83 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 112 100 71 86 116 99 121 65 57 73 71 100 108 100 69 90 115 98 51 100 74 100 71 86 116 99 121 104 116 98 50 82 49 98 71 85 112 79 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 97 88 82 108 98 88 77 117 98 71 86 117 90 51 82 111 73 68 52 103 77 67 65 47 73 71 108 48 90 87 49 122 87 122 66 100 73 68 111 103 98 110 86 115 98 68 115 78 67 110 48 78 67 103 48 75 90 88 104 119 98 51 74 48 73 71 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 90 115 98 51 100 84 100 71 86 119 84 110 86 116 89 109 86 121 75 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 108 48 90 87 48 103 80 81 48 75 73 67 65 103 73 72 82 53 99 71 86 118 90 105 66 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 65 57 80 84 48 103 73 110 78 48 99 109 108 117 90 121 73 78 67 105 65 103 73 67 65 103 73 68 56 103 90 50 86 48 81 50 57 117 100 71 86 117 100 69 74 53 83 87 81 111 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 112 68 81 111 103 73 67 65 103 73 67 65 54 73 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 79 119 48 75 68 81 111 103 73 71 108 109 73 67 103 104 97 88 82 108 98 83 107 103 99 109 86 48 100 88 74 117 73 68 65 55 68 81 111 78 67 105 65 103 89 50 57 117 99 51 81 103 97 88 82 108 98 88 77 103 80 83 66 110 90 88 82 71 98 71 57 51 83 88 82 108 98 88 77 111 97 88 82 108 98 83 53 116 98 50 82 49 98 71 85 112 79 119 48 75 73 67 66 106 98 50 53 122 100 67 66 112 98 109 82 108 101 67 65 57 73 71 108 48 90 87 49 122 76 109 90 112 98 109 82 74 98 109 82 108 101 67 103 111 90 87 53 48 99 110 107 112 73 68 48 43 73 71 86 117 100 72 74 53 76 109 108 107 73 68 48 57 80 83 66 112 100 71 86 116 76 109 108 107 75 84 115 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 97 87 53 107 90 88 103 103 80 106 48 103 77 67 65 47 73 71 108 117 90 71 86 52 73 67 115 103 77 83 65 54 73 68 65 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 109 100 87 53 106 100 71 108 118 98 105 66 110 90 88 82 79 90 88 104 48 81 50 57 117 100 71 86 117 100 69 108 48 90 87 48 111 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 88 82 108 98 83 65 57 68 81 111 103 73 67 65 103 100 72 108 119 90 87 57 109 73 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 73 68 48 57 80 83 65 105 99 51 82 121 97 87 53 110 73 103 48 75 73 67 65 103 73 67 65 103 80 121 66 110 90 88 82 68 98 50 53 48 90 87 53 48 81 110 108 74 90 67 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 78 67 105 65 103 73 67 65 103 73 68 111 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 55 68 81 111 78 67 105 65 103 97 87 89 103 75 67 70 112 100 71 86 116 75 83 66 121 90 88 82 49 99 109 52 103 98 110 86 115 98 68 115 78 67 103 48 75 73 67 66 106 98 50 53 122 100 67 66 112 100 71 86 116 99 121 65 57 73 71 100 108 100 69 90 115 98 51 100 74 100 71 86 116 99 121 104 112 100 71 86 116 76 109 49 118 90 72 86 115 90 83 107 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 108 117 90 71 86 52 73 68 48 103 97 88 82 108 98 88 77 117 90 109 108 117 90 69 108 117 90 71 86 52 75 67 104 108 98 110 82 121 101 83 107 103 80 84 52 103 90 87 53 48 99 110 107 117 97 87 81 103 80 84 48 57 73 71 108 48 90 87 48 117 97 87 81 112 79 119 48 75 68 81 111 103 73 71 108 109 73 67 104 112 98 109 82 108 101 67 65 57 80 84 48 103 76 84 69 103 102 72 119 103 97 87 53 107 90 88 103 103 80 84 48 57 73 71 108 48 90 87 49 122 76 109 120 108 98 109 100 48 97 67 65 116 73 68 69 112 73 72 74 108 100 72 86 121 98 105 66 117 100 87 120 115 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 112 100 71 86 116 99 49 116 112 98 109 82 108 101 67 65 114 73 68 70 100 79 119 48 75 102 81 48 75 68 81 112 108 101 72 66 118 99 110 81 103 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 85 72 74 108 100 109 108 118 100 88 78 68 98 50 53 48 90 87 53 48 83 88 82 108 98 83 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 112 100 71 86 116 73 68 48 78 67 105 65 103 73 67 66 48 101 88 66 108 98 50 89 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 103 80 84 48 57 73 67 74 122 100 72 74 112 98 109 99 105 68 81 111 103 73 67 65 103 73 67 65 47 73 71 100 108 100 69 78 118 98 110 82 108 98 110 82 67 101 85 108 107 75 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 75 81 48 75 73 67 65 103 73 67 65 103 79 105 66 106 98 50 53 48 90 87 53 48 84 51 74 74 90 68 115 78 67 103 48 75 73 67 66 112 90 105 65 111 73 87 108 48 90 87 48 112 73 72 74 108 100 72 86 121 98 105 66 117 100 87 120 115 79 119 48 75 68 81 111 103 73 71 78 118 98 110 78 48 73 71 108 48 90 87 49 122 73 68 48 103 90 50 86 48 82 109 120 118 100 48 108 48 90 87 49 122 75 71 108 48 90 87 48 117 98 87 57 107 100 87 120 108 75 84 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 87 53 107 90 88 103 103 80 83 66 112 100 71 86 116 99 121 53 109 97 87 53 107 83 87 53 107 90 88 103 111 75 71 86 117 100 72 74 53 75 83 65 57 80 105 66 108 98 110 82 121 101 83 53 112 90 67 65 57 80 84 48 103 97 88 82 108 98 83 53 112 90 67 107 55 68 81 111 78 67 105 65 103 97 87 89 103 75 71 108 117 90 71 86 52 73 68 119 57 73 68 65 112 73 72 74 108 100 72 86 121 98 105 66 117 100 87 120 115 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 112 100 71 86 116 99 49 116 112 98 109 82 108 101 67 65 116 73 68 70 100 79 119 48 75 102 81 48 75 68 81 112 108 101 72 66 118 99 110 81 103 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 83 71 86 115 99 70 82 108 101 72 81 111 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 88 82 108 98 83 65 57 68 81 111 103 73 67 65 103 100 72 108 119 90 87 57 109 73 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 73 68 48 57 80 83 65 105 99 51 82 121 97 87 53 110 73 103 48 75 73 67 65 103 73 67 65 103 80 121 66 110 90 88 82 68 98 50 53 48 90 87 53 48 81 110 108 74 90 67 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 78 67 105 65 103 73 67 65 103 73 68 111 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 55 68 81 111 78 67 105 65 103 97 87 89 103 75 67 70 112 100 71 86 116 75 83 66 121 90 88 82 49 99 109 52 103 73 105 73 55 68 81 111 78 67 105 65 103 89 50 57 117 99 51 81 103 97 87 53 122 100 72 74 49 89 51 82 112 98 50 53 122 73 68 48 103 90 50 86 48 85 51 82 108 99 69 108 117 99 51 82 121 100 87 78 48 97 87 57 117 99 121 104 112 100 71 86 116 75 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 97 87 53 122 100 72 74 49 89 51 82 112 98 50 53 122 76 109 120 108 98 109 100 48 97 67 65 43 73 68 65 112 73 72 115 78 67 105 65 103 73 67 66 121 90 88 82 49 99 109 52 103 97 87 53 122 100 72 74 49 89 51 82 112 98 50 53 122 76 109 112 118 97 87 52 111 73 108 120 117 73 105 107 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 97 88 82 108 98 83 53 107 90 88 78 106 99 109 108 119 100 71 108 118 98 105 66 56 102 67 66 112 100 71 86 116 76 110 78 49 98 87 49 104 99 110 107 103 102 72 119 103 73 105 73 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 53 118 99 109 49 104 98 71 108 54 90 86 82 108 101 72 81 111 100 109 70 115 100 87 85 103 80 83 65 105 73 105 107 103 101 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 85 51 82 121 97 87 53 110 75 72 90 104 98 72 86 108 75 81 48 75 73 67 65 103 73 67 53 121 90 88 66 115 89 87 78 108 75 67 57 101 86 115 79 116 90 71 86 118 88 72 77 114 88 71 81 114 75 68 56 54 88 67 53 99 90 67 115 112 75 108 120 122 75 105 57 112 76 67 65 105 73 105 107 78 67 105 65 103 73 67 65 117 99 109 86 119 98 71 70 106 90 83 103 118 88 72 77 114 76 50 99 115 73 67 73 103 73 105 107 78 67 105 65 103 73 67 65 117 100 72 74 112 98 83 103 112 79 119 48 75 102 81 48 75 68 81 112 109 100 87 53 106 100 71 108 118 98 105 66 111 100 87 49 104 98 109 108 54 90 85 116 108 101 88 100 118 99 109 81 111 100 109 70 115 100 87 85 103 80 83 65 105 73 105 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 48 90 88 104 48 73 68 48 103 85 51 82 121 97 87 53 110 75 72 90 104 98 72 86 108 75 81 48 75 73 67 65 103 73 67 53 121 90 88 66 115 89 87 78 108 75 67 57 98 88 121 49 100 75 121 57 110 76 67 65 105 73 67 73 112 68 81 111 103 73 67 65 103 76 110 74 108 99 71 120 104 89 50 85 111 76 49 120 122 75 121 57 110 76 67 65 105 73 67 73 112 68 81 111 103 73 67 65 103 76 110 82 121 97 87 48 111 75 81 48 75 73 67 65 103 73 67 53 48 98 48 120 118 100 50 86 121 81 50 70 122 90 83 103 112 79 119 48 75 68 81 111 103 73 71 108 109 73 67 103 104 100 71 86 52 100 67 107 103 99 109 86 48 100 88 74 117 73 67 73 105 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 48 90 88 104 48 76 109 78 111 89 88 74 66 100 67 103 119 75 83 53 48 98 49 86 119 99 71 86 121 81 50 70 122 90 83 103 112 73 67 115 103 100 71 86 52 100 67 53 122 98 71 108 106 90 83 103 120 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 98 109 57 121 98 87 70 115 97 88 112 108 82 109 57 121 81 50 57 116 99 71 70 121 90 83 104 50 89 87 120 49 90 83 65 57 73 67 73 105 75 83 66 55 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 117 98 51 74 116 89 87 120 112 101 109 86 85 90 88 104 48 75 72 90 104 98 72 86 108 75 81 48 75 73 67 65 103 73 67 53 48 98 48 120 118 100 50 86 121 81 50 70 122 90 83 103 112 68 81 111 103 73 67 65 103 76 109 53 118 99 109 49 104 98 71 108 54 90 83 103 105 84 107 90 69 73 105 107 78 67 105 65 103 73 67 65 117 99 109 86 119 98 71 70 106 90 83 103 118 87 49 120 49 77 68 77 119 77 67 49 99 100 84 65 122 78 109 90 100 76 50 99 115 73 67 73 105 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 99 50 104 49 90 109 90 115 90 85 70 121 99 109 70 53 75 71 108 48 90 87 49 122 73 68 48 103 87 49 48 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 89 88 74 121 73 68 48 103 87 121 52 117 76 109 108 48 90 87 49 122 88 84 115 78 67 103 48 75 73 67 66 109 98 51 73 103 75 71 120 108 100 67 66 112 73 68 48 103 89 88 74 121 76 109 120 108 98 109 100 48 97 67 65 116 73 68 69 55 73 71 107 103 80 105 65 119 79 121 66 112 73 67 48 57 73 68 69 112 73 72 115 78 67 105 65 103 73 67 66 106 98 50 53 122 100 67 66 113 73 68 48 103 84 87 70 48 97 67 53 109 98 71 57 118 99 105 104 78 89 88 82 111 76 110 74 104 98 109 82 118 98 83 103 112 73 67 111 103 75 71 107 103 75 121 65 120 75 83 107 55 68 81 111 103 73 67 65 103 87 50 70 121 99 108 116 112 88 83 119 103 89 88 74 121 87 50 112 100 88 83 65 57 73 70 116 104 99 110 74 98 97 108 48 115 73 71 70 121 99 108 116 112 88 86 48 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 89 88 74 121 79 119 48 75 102 81 48 75 68 81 112 109 100 87 53 106 100 71 108 118 98 105 66 122 89 87 49 119 98 71 86 84 97 88 112 108 75 71 108 48 90 87 49 122 73 68 48 103 87 49 48 115 73 72 78 112 101 109 85 103 80 83 65 120 77 67 107 103 101 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 99 50 104 49 90 109 90 115 90 85 70 121 99 109 70 53 75 71 108 48 90 87 49 122 75 83 53 122 98 71 108 106 90 83 103 119 76 67 66 78 89 88 82 111 76 109 49 112 98 105 104 122 97 88 112 108 76 67 66 112 100 71 86 116 99 121 53 115 90 87 53 110 100 71 103 112 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 90 71 86 107 100 88 66 108 85 51 82 121 97 87 53 110 99 121 104 112 100 71 86 116 99 121 65 57 73 70 116 100 75 83 66 55 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 98 68 81 111 103 73 67 65 103 76 105 52 117 98 109 86 51 73 70 78 108 100 67 103 78 67 105 65 103 73 67 65 103 73 71 108 48 90 87 49 122 68 81 111 103 73 67 65 103 73 67 65 103 73 67 53 109 97 87 120 48 90 88 73 111 81 109 57 118 98 71 86 104 98 105 107 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 49 104 99 67 103 111 97 88 82 108 98 83 107 103 80 84 52 103 85 51 82 121 97 87 53 110 75 71 108 48 90 87 48 112 76 110 82 121 97 87 48 111 75 83 107 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 104 67 98 50 57 115 90 87 70 117 75 81 48 75 73 67 65 103 73 67 107 78 67 105 65 103 88 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 84 87 57 107 100 87 120 108 84 71 70 105 90 87 119 111 98 87 57 107 100 87 120 108 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 120 104 89 109 86 115 99 121 65 57 73 72 115 78 67 105 65 103 73 67 66 122 89 87 120 108 99 122 111 103 73 108 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 100 50 57 121 97 51 78 111 98 51 65 54 73 67 74 85 89 87 120 115 90 88 73 105 76 65 48 75 73 67 65 103 73 71 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 79 105 65 105 81 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 78 67 105 65 103 73 67 66 122 100 71 57 106 97 122 111 103 73 108 78 48 98 50 78 114 73 105 119 78 67 105 65 103 73 67 66 50 90 87 104 112 89 50 120 108 99 122 111 103 73 108 90 108 97 77 79 116 89 51 86 115 98 51 77 105 76 65 48 75 73 67 65 103 73 72 78 49 99 72 66 118 99 110 81 54 73 67 74 84 98 51 66 118 99 110 82 108 73 103 48 75 73 67 66 57 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 115 89 87 74 108 98 72 78 98 98 87 57 107 100 87 120 108 88 83 66 56 102 67 66 111 100 87 49 104 98 109 108 54 90 85 116 108 101 88 100 118 99 109 81 111 98 87 57 107 100 87 120 108 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 85 88 86 108 99 51 82 112 98 50 53 74 90 67 104 116 98 50 82 49 98 71 85 115 73 71 108 117 90 71 86 52 75 83 66 55 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 103 74 72 116 116 98 50 82 49 98 71 86 57 76 87 70 49 100 71 56 116 99 83 82 55 97 87 53 107 90 88 103 103 75 121 65 120 102 87 65 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 78 115 90 87 70 117 84 87 57 107 100 87 120 108 83 88 82 108 98 88 77 111 98 87 57 107 100 87 120 108 75 83 66 55 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 110 90 88 82 68 98 50 53 48 90 87 53 48 81 110 108 78 98 50 82 49 98 71 85 111 98 87 57 107 100 87 120 108 75 83 53 116 89 88 65 111 75 71 108 48 90 87 48 112 73 68 48 43 73 67 104 55 68 81 111 103 73 67 65 103 76 105 52 117 97 88 82 108 98 83 119 78 67 105 65 103 73 67 66 106 98 71 86 104 98 108 82 112 100 71 120 108 79 105 66 117 98 51 74 116 89 87 120 112 101 109 86 85 90 88 104 48 75 71 108 48 90 87 48 117 100 71 108 48 98 71 85 112 76 65 48 75 73 67 65 103 73 71 78 115 90 87 70 117 83 50 86 53 100 50 57 121 90 72 77 54 73 71 82 108 90 72 86 119 90 86 78 48 99 109 108 117 90 51 77 111 75 71 108 48 90 87 48 117 97 50 86 53 100 50 57 121 90 72 77 103 102 72 119 103 87 49 48 112 76 109 49 104 99 67 104 111 100 87 49 104 98 109 108 54 90 85 116 108 101 88 100 118 99 109 81 112 75 81 48 75 73 67 66 57 75 83 107 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 86 51 74 118 98 109 100 85 97 88 82 115 90 88 77 111 89 51 86 121 99 109 86 117 100 69 108 48 90 87 48 115 73 71 49 118 90 72 86 115 90 85 108 48 90 87 49 122 76 67 66 115 97 87 49 112 100 67 65 57 73 68 77 112 73 72 115 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 78 111 100 87 90 109 98 71 86 66 99 110 74 104 101 83 103 78 67 105 65 103 73 67 66 107 90 87 82 49 99 71 86 84 100 72 74 112 98 109 100 122 75 65 48 75 73 67 65 103 73 67 65 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 103 111 97 88 82 108 98 83 107 103 80 84 52 103 97 88 82 108 98 83 53 112 90 67 65 104 80 84 48 103 89 51 86 121 99 109 86 117 100 69 108 48 90 87 48 117 97 87 81 112 68 81 111 103 73 67 65 103 73 67 65 103 73 67 53 116 89 88 65 111 75 71 108 48 90 87 48 112 73 68 48 43 73 71 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 83 107 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 103 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 65 111 100 71 108 48 98 71 85 112 73 68 48 43 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 73 67 66 48 97 88 82 115 90 83 65 109 74 103 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 67 65 103 98 109 57 121 98 87 70 115 97 88 112 108 82 109 57 121 81 50 57 116 99 71 70 121 90 83 104 48 97 88 82 115 90 83 107 103 73 84 48 57 73 71 53 118 99 109 49 104 98 71 108 54 90 85 90 118 99 107 78 118 98 88 66 104 99 109 85 111 89 51 86 121 99 109 86 117 100 69 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 83 107 78 67 105 65 103 73 67 65 103 73 67 65 103 75 81 48 75 73 67 65 103 73 67 107 78 67 105 65 103 75 83 53 122 98 71 108 106 90 83 103 119 76 67 66 115 97 87 49 112 100 67 107 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 86 51 74 118 98 109 100 76 90 88 108 51 98 51 74 107 99 121 104 106 100 88 74 121 90 87 53 48 83 50 86 53 100 50 57 121 90 67 119 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 115 73 71 120 112 98 87 108 48 73 68 48 103 77 121 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 106 100 88 74 121 90 87 53 48 73 68 48 103 98 109 57 121 98 87 70 115 97 88 112 108 82 109 57 121 81 50 57 116 99 71 70 121 90 83 104 106 100 88 74 121 90 87 53 48 83 50 86 53 100 50 57 121 90 67 107 55 68 81 111 103 73 71 78 118 98 110 78 48 73 72 66 118 98 50 119 103 80 83 66 98 88 84 115 78 67 103 48 75 73 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 112 100 71 86 116 75 83 65 57 80 105 66 55 68 81 111 103 73 67 65 103 97 88 82 108 98 83 53 106 98 71 86 104 98 107 116 108 101 88 100 118 99 109 82 122 76 109 90 118 99 107 86 104 89 50 103 111 75 71 116 108 101 88 100 118 99 109 81 112 73 68 48 43 73 72 115 78 67 105 65 103 73 67 65 103 73 71 108 109 73 67 104 117 98 51 74 116 89 87 120 112 101 109 86 71 98 51 74 68 98 50 49 119 89 88 74 108 75 71 116 108 101 88 100 118 99 109 81 112 73 67 69 57 80 83 66 106 100 88 74 121 90 87 53 48 75 83 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 72 66 118 98 50 119 117 99 72 86 122 97 67 104 114 90 88 108 51 98 51 74 107 75 84 115 78 67 105 65 103 73 67 65 103 73 72 48 78 67 105 65 103 73 67 66 57 75 84 115 78 67 105 65 103 102 83 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 78 111 100 87 90 109 98 71 86 66 99 110 74 104 101 83 104 107 90 87 82 49 99 71 86 84 100 72 74 112 98 109 100 122 75 72 66 118 98 50 119 112 75 83 53 122 98 71 108 106 90 83 103 119 76 67 66 115 97 87 49 112 100 67 107 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 86 51 74 118 98 109 100 78 98 50 82 49 98 71 86 122 75 71 78 49 99 110 74 108 98 110 82 78 98 50 82 49 98 71 85 115 73 71 70 115 98 69 49 118 90 72 86 115 90 88 77 115 73 71 120 112 98 87 108 48 73 68 48 103 77 121 107 103 101 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 99 50 104 49 90 109 90 115 90 85 70 121 99 109 70 53 75 65 48 75 73 67 65 103 73 71 70 115 98 69 49 118 90 72 86 115 90 88 77 78 67 105 65 103 73 67 65 103 73 67 53 109 97 87 120 48 90 88 73 111 75 71 49 118 90 72 86 115 90 83 107 103 80 84 52 103 98 87 57 107 100 87 120 108 73 67 69 57 80 83 66 106 100 88 74 121 90 87 53 48 84 87 57 107 100 87 120 108 75 81 48 75 73 67 65 103 73 67 65 103 76 109 49 104 99 67 103 111 98 87 57 107 100 87 120 108 75 83 65 57 80 105 66 110 90 88 82 78 98 50 82 49 98 71 86 77 89 87 74 108 98 67 104 116 98 50 82 49 98 71 85 112 75 81 48 75 73 67 65 112 76 110 78 115 97 87 78 108 75 68 65 115 73 71 120 112 98 87 108 48 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 89 110 86 112 98 71 82 88 99 109 57 117 90 49 100 118 99 109 82 122 75 71 78 49 99 110 74 108 98 110 82 88 98 51 74 107 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 119 103 98 71 108 116 97 88 81 103 80 83 65 122 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 78 49 99 110 74 108 98 110 81 103 80 83 66 117 98 51 74 116 89 87 120 112 101 109 86 71 98 51 74 68 98 50 49 119 89 88 74 108 75 71 78 49 99 110 74 108 98 110 82 88 98 51 74 107 75 84 115 78 67 105 65 103 89 50 57 117 99 51 81 103 99 71 57 118 98 67 65 57 73 71 49 118 90 72 86 115 90 85 108 48 90 87 49 122 76 109 90 115 89 88 82 78 89 88 65 111 75 71 108 48 90 87 48 112 73 68 48 43 68 81 111 103 73 67 65 103 97 88 82 108 98 83 53 106 98 71 86 104 98 108 82 112 100 71 120 108 68 81 111 103 73 67 65 103 73 67 65 117 99 51 66 115 97 88 81 111 76 49 116 99 99 121 119 118 75 67 107 114 76 86 48 114 76 121 107 78 67 105 65 103 73 67 65 103 73 67 53 116 89 88 65 111 75 72 100 118 99 109 81 112 73 68 48 43 73 72 100 118 99 109 81 117 100 72 74 112 98 83 103 112 75 81 48 75 73 67 65 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 103 111 100 50 57 121 90 67 107 103 80 84 52 103 100 50 57 121 90 67 53 115 90 87 53 110 100 71 103 103 80 106 48 103 78 67 65 109 74 105 66 117 98 51 74 116 89 87 120 112 101 109 86 71 98 51 74 68 98 50 49 119 89 88 74 108 75 72 100 118 99 109 81 112 73 67 69 57 80 83 66 106 100 88 74 121 90 87 53 48 75 81 48 75 73 67 65 112 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 122 97 72 86 109 90 109 120 108 81 88 74 121 89 88 107 111 90 71 86 107 100 88 66 108 85 51 82 121 97 87 53 110 99 121 104 119 98 50 57 115 75 83 107 117 99 50 120 112 89 50 85 111 77 67 119 103 98 71 108 116 97 88 81 112 79 119 48 75 102 81 48 75 68 81 112 109 100 87 53 106 100 71 108 118 98 105 66 116 89 87 116 108 84 51 66 48 97 87 57 117 99 121 104 106 98 51 74 121 90 87 78 48 76 67 66 51 99 109 57 117 90 51 77 103 80 83 66 98 88 83 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 118 99 72 82 112 98 50 53 122 73 68 48 103 99 50 104 49 90 109 90 115 90 85 70 121 99 109 70 53 75 71 82 108 90 72 86 119 90 86 78 48 99 109 108 117 90 51 77 111 87 50 78 118 99 110 74 108 89 51 81 115 73 67 52 117 76 110 100 121 98 50 53 110 99 49 48 112 75 83 53 122 98 71 108 106 90 83 103 119 76 67 65 48 75 84 115 78 67 105 65 103 89 50 57 117 99 51 81 103 89 50 57 121 99 109 86 106 100 69 70 117 99 51 100 108 99 105 65 57 73 71 57 119 100 71 108 118 98 110 77 117 90 109 108 117 90 69 108 117 90 71 86 52 75 67 104 118 99 72 82 112 98 50 52 112 73 68 48 43 73 71 57 119 100 71 108 118 98 105 65 57 80 84 48 103 89 50 57 121 99 109 86 106 100 67 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 115 103 98 51 66 48 97 87 57 117 99 121 119 103 89 50 57 121 99 109 86 106 100 69 70 117 99 51 100 108 99 105 66 57 79 119 48 75 102 81 48 75 68 81 112 109 100 87 53 106 100 71 108 118 98 105 66 106 99 109 86 104 100 71 86 82 100 87 86 122 100 71 108 118 98 105 104 120 100 87 86 122 100 71 108 118 98 105 119 103 89 50 57 121 99 109 86 106 100 67 119 103 100 51 74 118 98 109 100 122 76 67 66 108 101 72 66 115 89 87 53 104 100 71 108 118 98 105 119 103 98 87 86 48 89 83 65 57 73 72 116 57 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 72 115 103 98 51 66 48 97 87 57 117 99 121 119 103 89 50 57 121 99 109 86 106 100 69 70 117 99 51 100 108 99 105 66 57 73 68 48 103 98 87 70 114 90 85 57 119 100 71 108 118 98 110 77 111 89 50 57 121 99 109 86 106 100 67 119 103 100 51 74 118 98 109 100 122 75 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 98 51 66 48 97 87 57 117 99 121 53 115 90 87 53 110 100 71 103 103 80 67 65 48 73 72 120 56 73 71 78 118 99 110 74 108 89 51 82 66 98 110 78 51 90 88 73 103 80 84 48 57 73 67 48 120 75 83 66 55 68 81 111 103 73 67 65 103 99 109 86 48 100 88 74 117 73 71 53 49 98 71 119 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 101 119 48 75 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 76 65 48 75 73 67 65 103 73 71 57 119 100 71 108 118 98 110 77 115 68 81 111 103 73 67 65 103 89 50 57 121 99 109 86 106 100 69 70 117 99 51 100 108 99 105 119 78 67 105 65 103 73 67 66 108 101 72 66 115 89 87 53 104 100 71 108 118 98 105 119 78 67 105 65 103 73 67 65 117 76 105 53 116 90 88 82 104 68 81 111 103 73 72 48 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 86 71 108 48 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 111 98 87 57 107 100 87 120 108 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 120 100 87 86 122 100 71 108 118 98 110 77 103 80 83 66 98 88 84 115 78 67 103 48 75 73 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 112 100 71 86 116 76 67 66 112 98 109 82 108 101 67 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 71 78 118 98 110 78 48 73 72 100 121 98 50 53 110 86 71 108 48 98 71 86 122 73 68 48 103 89 110 86 112 98 71 82 88 99 109 57 117 90 49 82 112 100 71 120 108 99 121 104 112 100 71 86 116 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 119 103 77 121 107 55 68 81 111 78 67 105 65 103 73 67 66 106 98 50 53 122 100 67 66 50 89 88 74 112 89 87 53 48 99 121 65 57 73 70 115 78 67 105 65 103 73 67 65 103 73 71 68 67 118 48 78 49 119 54 70 115 73 71 82 108 73 71 86 122 100 71 70 122 73 72 66 104 98 71 70 105 99 109 70 122 73 71 78 115 89 88 90 108 73 71 86 122 100 77 79 104 73 71 70 122 98 50 78 112 89 87 82 104 73 71 69 103 73 105 82 55 97 88 82 108 98 83 53 106 98 71 86 104 98 108 82 112 100 71 120 108 102 83 73 47 89 67 119 78 67 105 65 103 73 67 65 103 73 71 68 67 118 49 70 49 119 54 107 103 99 72 74 118 89 50 86 122 98 121 66 107 90 83 66 48 99 109 70 105 89 87 112 118 73 71 78 49 89 110 74 108 73 71 86 115 73 71 78 118 98 110 82 108 98 109 108 107 98 121 65 105 74 72 116 112 100 71 86 116 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 76 65 48 75 73 67 65 103 73 67 65 103 89 77 75 47 85 88 88 68 113 83 66 111 89 88 76 68 114 87 70 122 73 72 66 104 99 109 69 103 90 50 86 122 100 71 108 118 98 109 70 121 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 83 53 122 99 71 120 112 100 67 103 110 73 67 99 112 76 110 78 115 97 87 78 108 75 68 65 115 78 67 107 117 97 109 57 112 98 105 103 110 73 67 99 112 102 83 73 47 89 65 48 75 73 67 65 103 73 70 48 55 68 81 111 78 67 105 65 103 73 67 66 50 89 88 74 112 89 87 53 48 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 120 100 87 86 122 100 71 108 118 98 108 82 108 101 72 81 115 73 72 90 104 99 109 108 104 98 110 82 74 98 109 82 108 101 67 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 67 65 103 89 50 57 117 99 51 81 103 99 88 86 108 99 51 82 112 98 50 52 103 80 83 66 106 99 109 86 104 100 71 86 82 100 87 86 122 100 71 108 118 98 105 103 78 67 105 65 103 73 67 65 103 73 67 65 103 99 88 86 108 99 51 82 112 98 50 53 85 90 88 104 48 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 112 100 71 86 116 76 109 78 115 90 87 70 117 86 71 108 48 98 71 85 115 68 81 111 103 73 67 65 103 73 67 65 103 73 72 100 121 98 50 53 110 86 71 108 48 98 71 86 122 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 103 84 71 69 103 97 50 86 53 100 50 57 121 90 67 65 105 74 72 116 112 100 71 86 116 76 109 78 115 90 87 70 117 83 50 86 53 100 50 57 121 90 72 78 98 77 70 48 103 102 72 119 103 97 88 82 108 98 83 53 106 98 71 86 104 98 108 82 112 100 71 120 108 102 83 73 103 90 88 78 48 119 54 69 103 89 88 78 118 89 50 108 104 90 71 69 103 89 83 66 108 99 50 85 103 89 50 57 117 100 71 86 117 97 87 82 118 76 109 65 115 68 81 111 103 73 67 65 103 73 67 65 103 73 72 115 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 122 98 51 86 121 89 50 86 74 90 68 111 103 97 88 82 108 98 83 53 112 90 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 48 90 87 49 119 98 71 70 48 90 84 111 103 73 109 116 108 101 88 100 118 99 109 81 116 97 87 82 108 98 110 82 112 90 110 107 116 89 50 57 117 100 71 86 117 100 67 73 115 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 100 109 70 121 97 87 70 117 100 68 111 103 89 67 82 55 97 87 53 107 90 88 104 57 76 83 82 55 100 109 70 121 97 87 70 117 100 69 108 117 90 71 86 52 102 87 65 78 67 105 65 103 73 67 65 103 73 67 65 103 102 81 48 75 73 67 65 103 73 67 65 103 75 84 115 78 67 103 48 75 73 67 65 103 73 67 65 103 97 87 89 103 75 72 70 49 90 88 78 48 97 87 57 117 75 83 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 99 121 53 119 100 88 78 111 75 72 70 49 90 88 78 48 97 87 57 117 75 84 115 78 67 105 65 103 73 67 65 103 73 72 48 78 67 105 65 103 73 67 66 57 75 84 115 78 67 105 65 103 102 83 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 70 49 90 88 78 48 97 87 57 117 99 122 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 89 110 86 112 98 71 82 76 90 88 108 51 98 51 74 107 85 88 86 108 99 51 82 112 98 50 53 122 75 71 49 118 90 72 86 115 90 83 119 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 99 88 86 108 99 51 82 112 98 50 53 122 73 68 48 103 87 49 48 55 68 81 111 78 67 105 65 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 117 90 109 57 121 82 87 70 106 97 67 103 111 97 88 82 108 98 83 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 71 108 48 90 87 48 117 89 50 120 108 89 87 53 76 90 88 108 51 98 51 74 107 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 114 90 88 108 51 98 51 74 107 76 67 66 114 90 88 108 51 98 51 74 107 83 87 53 107 90 88 103 112 73 68 48 43 73 72 115 78 67 105 65 103 73 67 65 103 73 71 78 118 98 110 78 48 73 72 100 121 98 50 53 110 83 50 86 53 100 50 57 121 90 72 77 103 80 83 66 105 100 87 108 115 90 70 100 121 98 50 53 110 83 50 86 53 100 50 57 121 90 72 77 111 97 50 86 53 100 50 57 121 90 67 119 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 115 73 68 77 112 79 119 48 75 68 81 111 103 73 67 65 103 73 67 66 106 98 50 53 122 100 67 66 50 89 88 74 112 89 87 53 48 99 121 65 57 73 70 115 78 67 105 65 103 73 67 65 103 73 67 65 103 89 77 75 47 85 88 88 68 113 83 66 106 98 50 53 106 90 88 66 48 98 121 66 104 99 71 70 121 90 87 78 108 73 71 70 122 98 50 78 112 89 87 82 118 73 71 70 115 73 71 78 118 98 110 82 108 98 109 108 107 98 121 65 105 74 72 116 112 100 71 86 116 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 103 119 114 57 68 100 99 79 104 98 67 66 107 90 83 66 108 99 51 82 104 99 121 66 119 89 87 120 104 89 110 74 104 99 121 66 106 98 71 70 50 90 83 66 108 98 109 78 104 97 109 69 103 98 87 86 113 98 51 73 103 89 50 57 117 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 80 50 65 115 68 81 111 103 73 67 65 103 73 67 65 103 73 71 68 67 118 49 70 49 119 54 107 103 100 71 86 116 89 83 66 122 90 83 66 48 99 109 70 105 89 87 112 104 73 71 86 117 73 71 86 115 73 71 78 118 98 110 82 108 98 109 108 107 98 121 65 105 74 72 116 112 100 71 86 116 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 68 81 111 103 73 67 65 103 73 67 66 100 79 119 48 75 68 81 111 103 73 67 65 103 73 67 66 50 89 88 74 112 89 87 53 48 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 120 100 87 86 122 100 71 108 118 98 108 82 108 101 72 81 115 73 72 90 104 99 109 108 104 98 110 82 74 98 109 82 108 101 67 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 67 65 103 73 67 66 106 98 50 53 122 100 67 66 120 100 87 86 122 100 71 108 118 98 105 65 57 73 71 78 121 90 87 70 48 90 86 70 49 90 88 78 48 97 87 57 117 75 65 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 86 71 86 52 100 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 114 90 88 108 51 98 51 74 107 76 65 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 72 100 121 98 50 53 110 83 50 86 53 100 50 57 121 90 72 77 115 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 89 69 120 104 73 72 66 104 98 71 70 105 99 109 69 103 89 50 120 104 100 109 85 103 73 105 82 55 97 50 86 53 100 50 57 121 90 72 48 105 73 71 86 122 100 77 79 104 73 71 70 122 98 50 78 112 89 87 82 104 73 71 69 103 90 88 78 48 90 83 66 106 98 50 53 48 90 87 53 112 90 71 56 117 89 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 73 67 66 122 98 51 86 121 89 50 86 74 90 68 111 103 97 88 82 108 98 83 53 112 90 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 65 103 73 72 82 108 98 88 66 115 89 88 82 108 79 105 65 105 97 50 86 53 100 50 57 121 90 67 49 105 101 83 49 48 97 88 82 115 90 83 73 115 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 73 67 66 50 89 88 74 112 89 87 53 48 79 105 66 103 74 72 116 114 90 88 108 51 98 51 74 107 83 87 53 107 90 88 104 57 76 83 82 55 100 109 70 121 97 87 70 117 100 69 108 117 90 71 86 52 102 87 65 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 57 68 81 111 103 73 67 65 103 73 67 65 103 73 67 107 55 68 81 111 78 67 105 65 103 73 67 65 103 73 67 65 103 97 87 89 103 75 72 70 49 90 88 78 48 97 87 57 117 75 83 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 99 88 86 108 99 51 82 112 98 50 53 122 76 110 66 49 99 50 103 111 99 88 86 108 99 51 82 112 98 50 52 112 79 119 48 75 73 67 65 103 73 67 65 103 73 67 66 57 68 81 111 103 73 67 65 103 73 67 66 57 75 84 115 78 67 105 65 103 73 67 66 57 75 84 115 78 67 105 65 103 102 83 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 70 49 90 88 78 48 97 87 57 117 99 122 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 89 110 86 112 98 71 82 78 98 50 82 49 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 111 98 87 57 107 100 87 120 108 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 119 103 89 87 120 115 84 87 57 107 100 87 120 108 99 121 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 120 100 87 86 122 100 71 108 118 98 110 77 103 80 83 66 98 88 84 115 78 67 103 48 75 73 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 112 100 71 86 116 76 67 66 112 98 109 82 108 101 67 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 71 78 118 98 110 78 48 73 72 100 121 98 50 53 110 84 87 57 107 100 87 120 108 99 121 65 57 73 71 74 49 97 87 120 107 86 51 74 118 98 109 100 78 98 50 82 49 98 71 86 122 75 71 49 118 90 72 86 115 90 83 119 103 89 87 120 115 84 87 57 107 100 87 120 108 99 121 119 103 77 121 107 55 68 81 111 78 67 105 65 103 73 67 66 106 98 50 53 122 100 67 66 50 89 88 74 112 89 87 53 48 99 121 65 57 73 70 115 78 67 105 65 103 73 67 65 103 73 71 68 67 118 48 69 103 99 88 88 68 113 83 68 68 111 88 74 108 89 83 66 119 90 88 74 48 90 87 53 108 89 50 85 103 90 87 119 103 89 50 57 117 100 71 86 117 97 87 82 118 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 80 50 65 115 68 81 111 103 73 67 65 103 73 67 66 103 119 114 57 70 98 105 66 120 100 99 79 112 73 71 51 68 115 50 82 49 98 71 56 103 90 87 53 106 89 87 112 104 73 71 49 108 97 109 57 121 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 80 50 65 115 68 81 111 103 73 67 65 103 73 67 66 103 119 114 57 69 119 55 78 117 90 71 85 103 89 50 120 104 99 50 108 109 97 87 78 104 99 115 79 116 89 88 77 103 90 87 119 103 89 50 57 117 100 71 86 117 97 87 82 118 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 80 50 65 78 67 105 65 103 73 67 66 100 79 119 48 75 68 81 111 103 73 67 65 103 100 109 70 121 97 87 70 117 100 72 77 117 90 109 57 121 82 87 70 106 97 67 103 111 99 88 86 108 99 51 82 112 98 50 53 85 90 88 104 48 76 67 66 50 89 88 74 112 89 87 53 48 83 87 53 107 90 88 103 112 73 68 48 43 73 72 115 78 67 105 65 103 73 67 65 103 73 71 78 118 98 110 78 48 73 72 70 49 90 88 78 48 97 87 57 117 73 68 48 103 89 51 74 108 89 88 82 108 85 88 86 108 99 51 82 112 98 50 52 111 68 81 111 103 73 67 65 103 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 86 71 86 52 100 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 90 50 86 48 84 87 57 107 100 87 120 108 84 71 70 105 90 87 119 111 98 87 57 107 100 87 120 108 75 83 119 78 67 105 65 103 73 67 65 103 73 67 65 103 100 51 74 118 98 109 100 78 98 50 82 49 98 71 86 122 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 103 82 88 78 108 73 71 78 118 98 110 82 108 98 109 108 107 98 121 66 108 99 51 84 68 111 83 66 106 98 71 70 122 97 87 90 112 89 50 70 107 98 121 66 107 90 87 53 48 99 109 56 103 90 71 86 115 73 71 51 68 115 50 82 49 98 71 56 103 90 71 85 103 74 72 116 110 90 88 82 78 98 50 82 49 98 71 86 77 89 87 74 108 98 67 104 116 98 50 82 49 98 71 85 112 102 83 53 103 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 99 50 57 49 99 109 78 108 83 87 81 54 73 71 108 48 90 87 48 117 97 87 81 115 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 100 71 86 116 99 71 120 104 100 71 85 54 73 67 74 116 98 50 82 49 98 71 85 116 89 110 107 116 100 71 108 48 98 71 85 105 76 65 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 72 90 104 99 109 108 104 98 110 81 54 73 71 65 107 101 50 108 117 90 71 86 52 102 83 48 107 101 51 90 104 99 109 108 104 98 110 82 74 98 109 82 108 101 72 49 103 68 81 111 103 73 67 65 103 73 67 65 103 73 72 48 78 67 105 65 103 73 67 65 103 73 67 107 55 68 81 111 78 67 105 65 103 73 67 65 103 73 71 108 109 73 67 104 120 100 87 86 122 100 71 108 118 98 105 107 103 101 119 48 75 73 67 65 103 73 67 65 103 73 67 66 120 100 87 86 122 100 71 108 118 98 110 77 117 99 72 86 122 97 67 104 120 100 87 86 122 100 71 108 118 98 105 107 55 68 81 111 103 73 67 65 103 73 67 66 57 68 81 111 103 73 67 65 103 102 83 107 55 68 81 111 103 73 72 48 112 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 120 100 87 86 122 100 71 108 118 98 110 77 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 81 88 66 119 98 71 108 106 89 88 82 112 98 50 53 82 100 87 86 122 100 71 108 118 98 110 77 111 98 87 57 107 100 87 120 108 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 120 100 87 86 122 100 71 108 118 98 110 77 103 80 83 66 98 88 84 115 78 67 103 48 75 73 67 66 109 98 51 73 103 75 71 120 108 100 67 66 112 98 109 82 108 101 67 65 57 73 68 65 55 73 71 108 117 90 71 86 52 73 68 119 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 117 98 71 86 117 90 51 82 111 73 67 48 103 77 84 115 103 97 87 53 107 90 88 103 103 75 122 48 103 77 83 107 103 101 119 48 75 73 67 65 103 73 71 78 118 98 110 78 48 73 71 78 49 99 110 74 108 98 110 81 103 80 83 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 49 116 112 98 109 82 108 101 70 48 55 68 81 111 103 73 67 65 103 76 121 56 103 75 72 90 104 99 109 108 104 89 109 120 108 73 71 53 108 101 72 81 103 101 87 69 103 98 109 56 103 98 109 86 106 90 88 78 104 99 109 108 104 75 81 48 75 73 67 65 103 73 71 78 118 98 110 78 48 73 72 100 121 98 50 53 110 86 71 108 48 98 71 86 122 73 68 48 103 89 110 86 112 98 71 82 88 99 109 57 117 90 49 82 112 100 71 120 108 99 121 104 106 100 88 74 121 90 87 53 48 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 119 103 77 121 107 55 68 81 111 78 67 105 65 103 73 67 66 106 98 50 53 122 100 67 66 50 89 88 74 112 89 87 53 48 99 121 65 57 73 70 115 78 67 105 65 103 73 67 65 103 73 71 68 67 118 49 70 49 119 54 107 103 100 115 79 116 90 71 86 118 73 71 82 108 98 67 66 116 119 55 78 107 100 87 120 118 73 67 82 55 90 50 86 48 84 87 57 107 100 87 120 108 84 71 70 105 90 87 119 111 98 87 57 107 100 87 120 108 75 88 48 103 100 72 74 104 100 71 70 121 119 54 49 104 99 121 66 119 89 88 74 104 73 71 70 119 99 109 86 117 90 71 86 121 73 72 78 118 89 110 74 108 73 67 73 107 101 50 78 49 99 110 74 108 98 110 81 117 89 50 120 108 89 87 53 76 90 88 108 51 98 51 74 107 99 49 115 119 88 83 66 56 102 67 66 106 100 88 74 121 90 87 53 48 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 76 65 48 75 73 67 65 103 73 67 65 103 89 77 75 47 81 51 88 68 111 87 119 103 90 71 85 103 90 88 78 48 98 51 77 103 89 50 57 117 100 71 86 117 97 87 82 118 99 121 66 107 90 88 78 106 99 109 108 105 90 83 66 116 90 87 112 118 99 105 66 115 98 121 66 120 100 87 85 103 97 71 70 106 90 83 65 105 74 72 116 106 100 88 74 121 90 87 53 48 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 76 65 48 75 73 67 65 103 73 67 65 103 89 70 78 112 73 72 86 117 73 71 86 116 99 71 120 108 89 87 82 118 73 71 53 108 89 50 86 122 97 88 82 104 73 71 78 118 98 109 57 106 90 88 73 103 73 105 82 55 89 51 86 121 99 109 86 117 100 67 53 106 98 71 86 104 98 107 116 108 101 88 100 118 99 109 82 122 87 122 66 100 73 72 120 56 73 71 78 49 99 110 74 108 98 110 81 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 76 67 68 67 118 51 70 49 119 54 107 103 100 115 79 116 90 71 86 118 73 71 82 108 89 109 85 103 89 50 57 117 99 51 86 115 100 71 70 121 80 50 65 78 67 105 65 103 73 67 66 100 79 119 48 75 68 81 111 103 73 67 65 103 100 109 70 121 97 87 70 117 100 72 77 117 90 109 57 121 82 87 70 106 97 67 103 111 99 88 86 108 99 51 82 112 98 50 53 85 90 88 104 48 76 67 66 50 89 88 74 112 89 87 53 48 83 87 53 107 90 88 103 112 73 68 48 43 73 72 115 78 67 105 65 103 73 67 65 103 73 71 78 118 98 110 78 48 73 72 70 49 90 88 78 48 97 87 57 117 73 68 48 103 89 51 74 108 89 88 82 108 85 88 86 108 99 51 82 112 98 50 52 111 68 81 111 103 73 67 65 103 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 86 71 86 52 100 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 89 51 86 121 99 109 86 117 100 67 53 106 98 71 86 104 98 108 82 112 100 71 120 108 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 51 99 109 57 117 90 49 82 112 100 71 120 108 99 121 119 78 67 105 65 103 73 67 65 103 73 67 65 103 89 69 86 122 90 83 66 50 119 54 49 107 90 87 56 103 89 51 86 105 99 109 85 103 90 88 78 108 73 71 78 118 98 109 78 108 99 72 82 118 73 71 82 108 98 110 82 121 98 121 66 107 90 87 119 103 98 99 79 122 90 72 86 115 98 121 65 107 101 50 100 108 100 69 49 118 90 72 86 115 90 85 120 104 89 109 86 115 75 71 49 118 90 72 86 115 90 83 108 57 76 109 65 115 68 81 111 103 73 67 65 103 73 67 65 103 73 72 115 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 122 98 51 86 121 89 50 86 74 90 68 111 103 89 51 86 121 99 109 86 117 100 67 53 112 90 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 48 90 87 49 119 98 71 70 48 90 84 111 103 73 109 70 119 99 71 120 112 89 50 70 48 97 87 57 117 76 87 74 53 76 87 116 108 101 88 100 118 99 109 81 105 76 65 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 72 90 104 99 109 108 104 98 110 81 54 73 71 65 107 101 50 108 117 90 71 86 52 102 83 48 107 101 51 90 104 99 109 108 104 98 110 82 74 98 109 82 108 101 72 49 103 68 81 111 103 73 67 65 103 73 67 65 103 73 72 48 78 67 105 65 103 73 67 65 103 73 67 107 55 68 81 111 78 67 105 65 103 73 67 65 103 73 71 108 109 73 67 104 120 100 87 86 122 100 71 108 118 98 105 107 103 101 119 48 75 73 67 65 103 73 67 65 103 73 67 66 120 100 87 86 122 100 71 108 118 98 110 77 117 99 72 86 122 97 67 104 120 100 87 86 122 100 71 108 118 98 105 107 55 68 81 111 103 73 67 65 103 73 67 66 57 68 81 111 103 73 67 65 103 102 83 107 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 99 88 86 108 99 51 82 112 98 50 53 122 79 119 48 75 102 81 48 75 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 82 108 90 72 86 119 90 86 70 49 90 88 78 48 97 87 57 117 99 121 104 120 100 87 86 122 100 71 108 118 98 110 77 103 80 83 66 98 88 83 119 103 98 87 57 107 100 87 120 108 73 68 48 103 73 109 49 118 90 72 86 115 90 83 73 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 99 50 86 108 98 105 65 57 73 71 53 108 100 121 66 84 90 88 81 111 75 84 115 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 99 88 86 108 99 51 82 112 98 50 53 122 68 81 111 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 104 67 98 50 57 115 90 87 70 117 75 81 48 75 73 67 65 103 73 67 53 109 97 87 120 48 90 88 73 111 75 72 70 49 90 88 78 48 97 87 57 117 75 83 65 57 80 105 66 55 68 81 111 103 73 67 65 103 73 67 66 106 98 50 53 122 100 67 66 122 97 87 100 117 89 88 82 49 99 109 85 103 80 83 66 103 74 72 116 120 100 87 86 122 100 71 108 118 98 105 53 120 100 87 86 122 100 71 108 118 98 110 49 56 102 67 82 55 99 88 86 108 99 51 82 112 98 50 52 117 98 51 66 48 97 87 57 117 99 119 48 75 73 67 65 103 73 67 65 103 73 67 65 117 98 87 70 119 75 67 104 118 99 72 82 112 98 50 52 112 73 68 48 43 73 71 53 118 99 109 49 104 98 71 108 54 90 85 90 118 99 107 78 118 98 88 66 104 99 109 85 111 98 51 66 48 97 87 57 117 75 83 107 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 112 118 97 87 52 111 73 110 119 105 75 88 49 103 79 119 48 75 68 81 111 103 73 67 65 103 73 67 66 112 90 105 65 111 99 50 86 108 98 105 53 111 89 88 77 111 99 50 108 110 98 109 70 48 100 88 74 108 75 83 107 103 101 119 48 75 73 67 65 103 73 67 65 103 73 67 66 121 90 88 82 49 99 109 52 103 90 109 70 115 99 50 85 55 68 81 111 103 73 67 65 103 73 67 66 57 68 81 111 78 67 105 65 103 73 67 65 103 73 72 78 108 90 87 52 117 89 87 82 107 75 72 78 112 90 50 53 104 100 72 86 121 90 83 107 55 68 81 111 103 73 67 65 103 73 67 66 121 90 88 82 49 99 109 52 103 100 72 74 49 90 84 115 78 67 105 65 103 73 67 66 57 75 81 48 75 73 67 65 103 73 67 53 116 89 88 65 111 75 72 70 49 90 88 78 48 97 87 57 117 76 67 66 112 98 109 82 108 101 67 107 103 80 84 52 103 75 72 115 78 67 105 65 103 73 67 65 103 73 67 52 117 76 110 70 49 90 88 78 48 97 87 57 117 76 65 48 75 73 67 65 103 73 67 65 103 97 87 81 54 73 71 100 108 100 70 70 49 90 88 78 48 97 87 57 117 83 87 81 111 98 87 57 107 100 87 120 108 76 67 66 112 98 109 82 108 101 67 107 78 67 105 65 103 73 67 66 57 75 83 107 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 85 88 86 108 99 51 82 112 98 50 53 67 89 87 53 114 82 109 57 121 84 87 57 107 100 87 120 108 75 71 49 118 90 72 86 115 90 83 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 65 57 73 71 100 108 100 69 78 115 90 87 70 117 84 87 57 107 100 87 120 108 83 88 82 108 98 88 77 111 98 87 57 107 100 87 120 108 75 84 115 78 67 105 65 103 89 50 57 117 99 51 81 103 89 87 120 115 84 87 57 107 100 87 120 108 99 121 65 57 73 71 82 108 90 72 86 119 90 86 78 48 99 109 108 117 90 51 77 111 98 71 86 104 99 109 53 112 98 109 100 68 98 50 53 48 90 87 53 48 76 109 49 104 99 67 103 111 97 88 82 108 98 83 107 103 80 84 52 103 97 88 82 108 98 83 53 116 98 50 82 49 98 71 85 112 75 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 73 87 49 118 90 72 86 115 90 85 108 48 90 87 49 122 76 109 120 108 98 109 100 48 97 67 107 103 101 119 48 75 73 67 65 103 73 72 74 108 100 72 86 121 98 105 66 55 68 81 111 103 73 67 65 103 73 67 66 48 97 88 82 115 90 84 111 103 89 70 70 49 97 88 111 103 90 71 85 103 74 72 116 110 90 88 82 78 98 50 82 49 98 71 86 77 89 87 74 108 98 67 104 116 98 50 82 49 98 71 85 112 102 87 65 115 68 81 111 103 73 67 65 103 73 67 66 120 100 87 86 122 100 71 108 118 98 110 77 54 73 70 116 100 68 81 111 103 73 67 65 103 102 84 115 78 67 105 65 103 102 81 48 75 68 81 111 103 73 71 78 118 98 110 78 48 73 72 70 49 90 88 78 48 97 87 57 117 99 121 65 57 73 71 82 108 90 72 86 119 90 86 70 49 90 88 78 48 97 87 57 117 99 121 103 78 67 105 65 103 73 67 66 98 68 81 111 103 73 67 65 103 73 67 65 117 76 105 53 105 100 87 108 115 90 69 49 118 90 72 86 115 90 86 70 49 90 88 78 48 97 87 57 117 99 121 104 116 98 50 82 49 98 71 85 115 73 71 49 118 90 72 86 115 90 85 108 48 90 87 49 122 76 67 66 104 98 71 120 78 98 50 82 49 98 71 86 122 75 81 48 75 73 67 65 103 73 70 48 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 68 81 111 103 73 67 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 115 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 89 70 70 49 97 88 111 103 90 71 85 103 74 72 116 110 90 88 82 78 98 50 82 49 98 71 86 77 89 87 74 108 98 67 104 116 98 50 82 49 98 71 85 112 102 87 65 115 68 81 111 103 73 67 65 103 100 71 57 48 89 87 120 66 100 109 70 112 98 71 70 105 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 54 73 72 70 49 90 88 78 48 97 87 57 117 99 121 53 115 90 87 53 110 100 71 103 115 68 81 111 103 73 67 65 103 99 88 86 108 99 51 82 112 98 50 53 122 68 81 111 103 73 72 48 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 109 100 87 53 106 100 71 108 118 98 105 66 110 90 88 82 78 98 50 82 49 98 71 86 82 100 87 108 54 75 71 49 118 90 72 86 115 90 83 119 103 99 88 86 108 99 51 82 112 98 50 53 68 98 51 86 117 100 67 65 57 73 68 69 119 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 72 70 49 97 88 111 103 80 83 66 105 100 87 108 115 90 70 70 49 90 88 78 48 97 87 57 117 81 109 70 117 97 48 90 118 99 107 49 118 90 72 86 115 90 83 104 116 98 50 82 49 98 71 85 112 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 55 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 72 70 49 97 88 111 117 100 71 108 48 98 71 85 115 68 81 111 103 73 67 65 103 100 71 57 48 89 87 120 66 100 109 70 112 98 71 70 105 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 54 73 72 70 49 97 88 111 117 100 71 57 48 89 87 120 66 100 109 70 112 98 71 70 105 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 115 68 81 111 103 73 67 65 103 99 88 86 108 99 51 82 112 98 50 53 122 79 105 66 122 89 87 49 119 98 71 86 84 97 88 112 108 75 72 70 49 97 88 111 117 99 88 86 108 99 51 82 112 98 50 53 122 76 67 66 120 100 87 86 122 100 71 108 118 98 107 78 118 100 87 53 48 75 81 48 75 73 67 66 57 79 119 48 75 102 81 48 75 34 125 = [System.Text.Encoding]::UTF8.GetBytes()
 = Invoke-RestMethod -Uri "https://api.github.com/repos/WarData/academia-winmotor/contents/data/content.js" -Method Put -Headers @{ Authorization = "token TOKEN_REMOVED"; "Content-Type" = "application/json; charset=utf-8" } -Body 123 34 109 101 115 115 97 103 101 34 58 34 70 105 120 58 32 114 101 115 116 97 117 114 97 114 32 101 110 99 111 100 105 110 103 32 85 84 70 45 56 32 121 32 101 108 105 109 105 110 97 114 32 112 114 101 103 117 110 116 97 115 32 116 114 105 118 105 97 108 101 115 34 44 34 115 104 97 34 58 34 49 55 98 97 56 100 100 97 49 98 48 99 50 54 56 50 100 100 97 101 49 100 51 48 50 56 54 102 97 49 57 100 57 48 56 98 51 52 53 56 34 44 34 99 111 110 116 101 110 116 34 58 34 97 87 49 119 98 51 74 48 73 72 115 103 99 50 57 49 99 109 78 108 99 121 66 57 73 71 90 121 98 50 48 103 73 105 52 118 99 50 57 49 99 109 78 108 99 121 73 55 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 100 112 100 71 74 118 98 50 116 86 99 109 119 111 98 87 57 107 100 87 120 108 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 49 118 90 72 86 115 90 86 66 104 100 71 103 103 80 83 66 122 98 51 86 121 89 50 86 122 76 109 100 112 100 71 74 118 98 50 115 117 98 87 57 107 100 87 120 108 99 49 116 116 98 50 82 49 98 71 86 100 73 68 56 47 73 67 73 105 79 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 98 109 86 51 73 70 86 83 84 67 104 116 98 50 82 49 98 71 86 81 89 88 82 111 76 110 74 108 99 71 120 104 89 50 85 111 76 49 53 99 76 121 56 115 73 67 73 105 75 83 119 103 99 50 57 49 99 109 78 108 99 121 53 110 97 88 82 105 98 50 57 114 76 109 74 104 99 50 85 112 76 110 82 118 85 51 82 121 97 87 53 110 75 67 107 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 106 98 50 53 122 100 67 66 115 90 87 70 121 98 109 108 117 90 48 78 118 98 110 82 108 98 110 81 103 80 83 66 98 68 81 111 103 73 67 56 118 73 68 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 103 86 107 86 79 86 69 70 84 73 67 103 121 78 121 66 50 97 87 82 108 98 51 77 112 73 68 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 98 51 65 116 89 50 57 116 90 88 74 106 97 87 70 115 76 88 90 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 77 117 77 84 81 103 85 71 70 122 98 51 77 103 90 71 85 103 100 87 53 104 73 71 57 119 90 88 74 104 89 50 110 68 115 50 52 103 89 50 57 116 90 88 74 106 97 87 70 115 73 71 78 118 98 105 66 87 84 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 110 85 107 49 72 90 108 70 90 83 86 66 82 89 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 57 119 90 88 74 104 89 50 110 68 115 50 52 105 76 67 65 105 86 107 56 105 76 67 65 105 100 109 86 111 119 54 49 106 100 87 120 118 73 71 57 106 89 88 78 112 119 55 78 117 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 87 78 106 90 88 78 118 99 109 108 118 99 121 49 118 99 67 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 122 76 106 69 122 73 69 100 108 99 51 82 112 119 55 78 117 73 71 82 108 73 71 70 106 89 50 86 122 98 51 74 112 98 51 77 103 90 87 52 103 98 51 66 108 99 109 70 106 97 87 57 117 90 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 78 49 99 51 82 118 98 87 86 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 81 86 70 75 82 84 70 113 82 86 104 109 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 70 106 89 50 86 122 98 51 74 112 98 51 77 105 76 67 65 105 98 51 66 108 99 109 70 106 97 87 57 117 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 118 99 67 49 106 98 50 49 108 99 109 78 112 89 87 119 116 89 109 70 122 97 87 78 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 77 117 77 84 65 103 85 71 70 122 98 51 77 103 90 71 85 103 100 87 53 104 73 71 57 119 90 88 74 104 89 50 110 68 115 50 52 103 89 50 57 116 90 88 74 106 97 87 70 115 73 71 76 68 111 88 78 112 89 50 69 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 78 49 99 51 82 118 98 87 86 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 101 72 66 104 81 109 86 114 87 86 86 76 81 48 69 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 118 99 71 86 121 89 87 78 112 119 55 78 117 73 105 119 103 73 109 76 68 111 88 78 112 89 50 69 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 104 99 50 108 110 98 109 70 121 76 87 74 104 99 51 82 112 90 71 57 121 90 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 77 121 52 120 77 83 66 66 99 50 108 110 98 109 70 121 73 71 74 104 99 51 82 112 90 71 57 121 90 88 77 103 89 83 66 118 99 71 86 121 89 87 78 112 98 50 53 108 99 121 66 106 98 50 49 108 99 109 78 112 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 78 101 69 49 51 89 108 108 73 82 68 78 70 86 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 74 104 99 51 82 112 90 71 57 121 90 88 77 105 76 67 65 105 98 51 66 108 99 109 70 106 97 87 57 117 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 106 89 87 49 105 97 87 70 121 76 88 66 121 98 51 66 112 90 88 82 104 99 109 108 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 77 117 79 83 66 68 89 87 49 105 97 87 70 121 73 72 66 121 98 51 66 112 90 88 82 104 99 109 108 118 73 71 82 108 73 72 86 117 73 72 90 108 97 77 79 116 89 51 86 115 98 121 65 116 73 68 73 103 98 99 79 112 100 71 57 107 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 78 49 99 51 82 118 98 87 86 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 76 86 86 89 84 50 74 81 89 84 86 51 90 70 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 119 99 109 57 119 97 87 86 48 89 88 74 112 98 121 73 115 73 67 74 50 90 87 106 68 114 87 78 49 98 71 56 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 106 89 87 49 105 97 87 70 121 76 87 49 118 90 71 86 115 98 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 122 76 106 103 103 81 50 70 116 89 109 108 104 99 105 66 116 98 50 82 108 98 71 56 103 90 71 85 103 100 109 86 111 119 54 49 106 100 87 120 118 73 71 56 103 90 87 119 103 89 50 57 115 98 51 73 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 78 49 99 51 82 118 98 87 86 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 78 48 120 122 84 85 108 76 78 107 112 112 98 69 48 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 116 98 50 82 108 98 71 56 105 76 67 65 105 89 50 57 115 98 51 73 105 76 67 65 105 100 109 86 111 119 54 49 106 100 87 120 118 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 100 87 53 112 90 71 70 107 76 87 82 108 98 87 56 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 77 121 52 51 73 69 78 118 98 110 90 108 99 110 82 112 99 105 66 49 98 105 66 105 89 88 78 48 97 87 82 118 99 105 66 104 73 72 86 117 97 87 82 104 90 67 66 107 90 87 49 118 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 106 100 88 78 48 98 50 49 108 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 85 51 100 68 100 109 89 87 116 120 82 88 86 114 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 90 71 86 116 98 121 73 115 73 67 74 105 89 88 78 48 97 87 82 118 99 105 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 88 66 121 90 88 78 49 99 72 86 108 99 51 82 118 76 88 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 52 76 106 69 103 82 51 74 104 89 109 70 106 97 99 79 122 98 105 66 107 90 83 66 49 98 105 66 119 99 109 86 122 100 88 66 49 90 88 78 48 98 121 66 107 90 83 66 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 51 70 49 98 51 82 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 122 74 113 78 85 49 89 76 86 73 53 82 71 115 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 119 99 109 86 122 100 88 66 49 90 88 78 48 98 121 73 115 73 67 74 106 99 109 86 104 99 105 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 88 66 108 90 71 108 107 98 121 49 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 67 52 121 73 69 100 121 89 87 74 104 89 50 110 68 115 50 52 103 90 71 85 103 100 87 52 103 99 71 86 107 97 87 82 118 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 74 107 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 76 90 85 56 120 77 49 104 75 100 70 77 120 86 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 110 66 108 90 71 108 107 98 121 73 115 73 67 74 106 99 109 86 104 99 105 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 87 70 115 89 109 70 121 89 87 52 116 100 109 86 117 100 71 70 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 103 117 77 121 66 72 99 109 70 105 89 87 78 112 119 55 78 117 73 71 82 108 73 72 86 117 73 71 70 115 89 109 70 121 119 54 70 117 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 100 81 82 70 74 112 86 69 90 118 77 51 86 90 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 89 87 120 105 89 88 76 68 111 87 52 105 76 67 65 105 89 51 74 108 89 88 73 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 119 89 87 53 108 98 67 49 50 90 87 53 48 89 83 49 107 97 88 74 108 89 51 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 103 117 77 84 81 103 85 71 70 117 90 87 119 103 90 71 85 103 86 109 86 117 100 71 69 103 82 71 108 121 90 87 78 48 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 87 53 66 97 87 49 80 84 71 90 116 85 105 49 86 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 99 71 70 117 90 87 119 105 76 67 65 105 90 71 108 121 90 87 78 48 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 88 66 121 90 87 78 112 98 51 77 116 100 71 70 121 97 87 90 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 52 76 106 69 49 73 69 100 108 99 51 82 112 119 55 78 117 73 71 82 108 73 72 66 121 90 87 78 112 98 51 77 103 101 83 66 48 89 88 74 112 90 109 70 122 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 66 49 98 51 112 48 84 70 65 52 90 110 104 110 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 99 72 74 108 89 50 108 118 99 121 73 115 73 67 74 48 89 88 74 112 90 109 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 100 71 70 121 97 87 90 104 99 121 49 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 78 105 66 85 89 88 74 112 90 109 70 122 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 87 77 116 86 88 82 114 82 70 90 113 97 69 48 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 48 89 88 74 112 90 109 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 88 74 48 97 87 78 49 98 71 57 122 76 88 82 104 99 109 108 109 89 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 48 73 69 70 121 100 77 79 116 89 51 86 115 98 51 77 103 101 83 66 48 89 88 74 112 90 109 69 103 90 71 85 103 89 88 74 48 119 54 49 106 100 87 120 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 86 81 90 68 82 114 82 84 66 87 84 106 108 66 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 89 88 74 48 119 54 49 106 100 87 120 118 99 121 73 115 73 67 74 48 89 88 74 112 90 109 69 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 107 89 88 82 118 99 121 49 111 97 88 78 48 98 51 74 112 89 50 57 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 85 117 78 83 66 69 89 88 82 118 99 121 66 112 98 88 66 118 99 110 82 104 98 110 82 108 99 121 65 116 73 69 104 112 99 51 84 68 115 51 74 112 89 50 57 122 73 67 48 103 86 71 108 119 98 51 77 103 90 71 85 103 99 71 70 110 98 121 65 116 73 69 78 49 90 87 53 48 89 83 66 106 98 50 53 48 89 87 74 115 90 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 112 79 68 90 77 89 50 53 83 86 107 86 82 79 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 104 112 99 51 84 68 115 51 74 112 89 50 57 122 73 105 119 103 73 110 66 104 90 50 57 122 73 105 119 103 73 109 78 118 98 110 82 104 89 109 120 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 99 109 108 108 99 50 100 118 76 87 86 117 100 71 108 107 89 87 82 108 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 49 76 106 81 103 85 109 108 108 99 50 100 118 73 71 82 108 73 71 86 117 100 71 108 107 89 87 82 108 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 117 83 110 104 89 89 109 53 77 100 72 78 67 78 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 110 74 112 90 88 78 110 98 121 73 115 73 67 74 108 98 110 82 112 90 71 70 107 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 106 100 87 86 117 100 71 70 122 76 87 74 104 98 109 78 104 99 109 108 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 49 76 106 77 103 81 51 86 108 98 110 82 104 99 121 66 105 89 87 53 106 89 88 74 112 89 88 77 103 76 83 66 119 98 51 73 103 90 71 86 109 90 87 78 48 98 121 65 116 73 71 70 106 100 71 108 50 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 104 98 85 78 48 77 50 70 52 83 84 78 87 86 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 78 49 90 87 53 48 89 88 77 105 76 67 65 105 89 109 70 117 89 50 70 121 97 87 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 99 109 86 115 89 87 78 112 98 50 53 108 99 121 49 108 98 110 82 112 90 71 70 107 90 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 78 83 52 121 73 70 74 108 98 71 70 106 97 87 57 117 90 88 77 103 90 71 85 103 90 87 53 48 97 87 82 104 90 71 86 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 106 100 88 78 48 98 50 49 108 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 87 100 111 86 71 100 72 89 108 74 80 98 50 112 66 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 99 109 86 115 89 87 78 112 98 50 53 108 99 121 73 115 73 67 74 108 98 110 82 112 90 71 70 107 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 104 98 72 82 104 76 87 86 117 100 71 108 107 89 87 81 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 78 83 52 120 73 69 70 115 100 71 69 103 90 71 85 103 90 87 53 48 97 87 82 104 90 67 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 51 86 122 100 71 57 116 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 76 97 110 100 48 100 70 104 107 87 106 82 73 99 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 70 115 100 71 69 105 76 67 65 105 90 87 53 48 97 87 82 104 90 67 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 50 57 119 97 87 70 121 76 88 66 108 90 50 70 121 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 65 117 78 121 66 68 98 51 66 112 89 88 73 103 101 83 66 119 90 87 100 104 99 105 66 108 98 110 82 121 90 83 66 107 98 50 78 49 98 87 86 117 100 71 57 122 73 71 82 108 73 72 82 118 90 71 56 103 100 71 108 119 98 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 86 89 51 99 69 108 116 97 109 89 53 88 49 78 78 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 89 50 57 119 97 87 70 121 73 105 119 103 73 110 66 108 90 50 70 121 73 105 119 103 73 109 82 118 89 51 86 116 90 87 53 48 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 118 99 71 86 121 89 87 78 112 98 50 53 108 99 121 49 110 90 87 53 108 99 109 108 106 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 77 67 52 50 73 69 57 119 90 88 74 104 89 50 108 118 98 109 86 122 73 71 100 108 98 115 79 112 99 109 108 106 89 88 77 103 76 83 66 109 97 87 120 48 99 109 70 121 73 67 48 103 99 71 70 121 100 71 108 121 73 67 48 103 98 88 86 115 100 71 108 119 89 88 74 48 97 88 73 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 104 98 71 86 122 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 108 117 100 109 57 112 89 50 85 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 84 89 122 107 51 83 110 100 114 100 108 66 122 97 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 117 100 71 70 122 73 105 119 103 73 109 57 119 90 88 74 104 89 50 108 118 98 109 86 122 73 105 119 103 73 109 90 112 98 72 82 121 89 88 73 105 76 67 65 105 99 71 70 121 100 71 108 121 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 90 109 70 106 100 72 86 121 89 83 49 122 90 88 74 50 97 87 78 112 98 51 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 78 83 66 68 99 109 86 104 99 105 66 109 89 87 78 48 100 88 74 104 73 71 82 108 73 72 90 108 98 110 82 104 73 71 82 108 73 72 78 108 99 110 90 112 89 50 108 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 70 84 82 71 89 120 97 48 112 81 86 85 74 74 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 73 115 73 67 74 122 90 88 74 50 97 87 78 112 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 109 89 87 78 48 100 88 74 104 89 50 108 118 98 105 49 48 89 87 53 107 89 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 69 51 73 69 90 104 89 51 82 49 99 109 70 106 97 99 79 122 98 105 66 108 98 105 66 48 89 87 53 107 89 83 66 107 90 83 66 104 98 71 74 104 99 109 70 117 90 88 77 103 90 71 85 103 100 109 86 117 100 71 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 109 86 114 81 106 70 79 89 109 86 119 83 69 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 109 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 76 67 65 105 100 71 70 117 90 71 69 105 76 67 65 105 89 87 120 105 89 88 74 104 98 109 86 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 87 120 105 89 88 74 104 98 109 86 122 76 87 57 121 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 89 103 81 99 79 120 89 87 82 112 99 105 66 104 98 71 74 104 99 109 70 117 90 88 77 103 84 49 74 122 73 71 69 103 100 87 53 104 73 71 90 104 89 51 82 49 99 109 69 103 90 71 85 103 100 109 86 117 100 71 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 87 69 104 68 79 84 86 102 97 86 74 84 77 50 77 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 104 98 71 74 104 99 109 70 117 90 88 77 105 76 67 65 105 84 49 73 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 104 98 71 86 122 76 87 70 117 100 71 108 106 97 88 66 118 76 87 78 118 89 110 74 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 79 83 66 68 99 109 86 104 99 105 66 104 98 110 82 112 89 50 108 119 98 121 66 107 90 83 66 106 98 50 74 121 98 121 66 104 73 71 78 115 97 87 86 117 100 71 85 103 99 50 108 117 73 72 66 108 90 71 108 107 98 121 66 117 97 83 66 118 99 71 86 121 89 87 78 112 119 55 78 117 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 98 88 74 53 81 109 74 78 88 50 82 115 86 50 56 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 104 98 110 82 112 89 50 108 119 98 121 73 115 73 67 74 106 98 50 74 121 98 121 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 50 70 115 90 88 77 116 89 50 57 105 99 109 56 116 89 87 53 48 97 87 78 112 99 71 56 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 50 73 69 78 121 90 87 70 106 97 99 79 122 98 105 66 106 98 50 74 121 98 121 66 107 90 83 66 104 98 110 82 112 89 50 108 119 98 121 66 107 90 83 66 119 90 87 82 112 90 71 56 103 90 71 85 103 100 109 86 117 100 71 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 89 87 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 107 116 53 83 107 99 52 82 122 65 53 101 108 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 90 108 98 110 82 104 99 121 73 115 73 67 74 106 98 50 74 121 98 121 73 115 73 67 74 104 98 110 82 112 89 50 108 119 98 121 73 115 73 67 74 119 90 87 82 112 90 71 56 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 89 87 120 108 99 121 49 106 98 50 74 121 98 121 49 109 89 87 78 48 100 88 74 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 78 83 66 68 98 50 74 121 98 121 66 107 90 83 66 109 89 87 78 48 100 88 74 104 73 71 74 118 100 77 79 122 98 105 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 50 70 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 99 71 70 53 98 87 86 117 100 67 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 116 120 78 110 86 80 77 88 70 72 85 69 69 52 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 50 90 87 53 48 89 88 77 105 76 67 65 105 89 50 57 105 99 109 56 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 78 67 105 65 103 76 121 56 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 83 66 85 81 85 120 77 82 86 73 103 75 68 69 48 73 72 90 112 90 71 86 118 99 121 107 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 81 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 104 90 50 86 117 90 71 69 116 100 71 70 115 98 71 86 121 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 69 119 76 106 85 103 81 87 100 108 98 109 82 104 73 71 82 108 73 72 82 104 98 71 120 108 99 105 66 53 73 71 78 104 98 71 86 117 90 71 70 121 97 87 57 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 53 80 82 69 111 122 76 87 49 86 81 86 70 82 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 89 87 100 108 98 109 82 104 73 105 119 103 73 109 78 104 98 71 86 117 90 71 70 121 97 87 57 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 116 90 50 86 122 100 71 108 118 98 105 49 122 97 87 53 112 90 88 78 48 99 109 57 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 69 119 76 106 77 103 82 50 86 122 100 71 110 68 115 50 52 103 90 71 85 103 99 50 108 117 97 87 86 122 100 72 74 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 49 98 84 70 66 77 85 53 51 81 107 74 84 84 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 110 78 112 98 109 108 108 99 51 82 121 98 51 77 105 76 67 65 105 90 50 86 122 100 71 110 68 115 50 52 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 109 99 109 70 117 99 88 86 112 89 50 108 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 120 77 67 52 121 73 69 100 108 99 51 82 112 119 55 78 117 73 71 82 108 73 71 90 121 89 87 53 120 100 87 108 106 97 87 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 100 70 86 86 112 104 98 69 70 51 83 122 86 66 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 90 110 74 104 98 110 70 49 97 87 78 112 89 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 109 97 87 78 111 89 87 112 108 76 87 49 108 89 50 70 117 97 87 78 118 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 120 77 67 52 120 73 69 90 112 89 50 104 104 97 109 85 103 90 71 85 103 98 71 57 122 73 71 49 108 89 56 79 104 98 109 108 106 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 100 118 99 109 116 122 97 71 57 119 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 57 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 100 69 112 104 97 51 70 97 98 109 82 112 85 122 81 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 82 104 98 71 120 108 99 105 73 115 73 67 74 109 97 87 78 111 89 87 112 108 73 105 119 103 73 109 49 108 89 56 79 104 98 109 108 106 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 106 97 88 82 104 76 87 78 115 97 87 86 117 100 71 85 116 90 88 104 112 99 51 82 108 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 122 76 106 65 117 77 83 66 68 97 88 82 104 73 71 78 118 98 105 66 106 98 71 108 108 98 110 82 108 73 72 107 103 100 109 86 111 119 54 49 106 100 87 120 118 99 121 66 108 101 71 108 122 100 71 86 117 100 71 86 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 65 119 86 106 74 121 100 86 70 67 97 70 112 114 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 89 50 108 48 89 83 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 105 119 103 73 110 90 108 97 77 79 116 89 51 86 115 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 106 97 88 82 104 76 87 53 118 76 87 86 52 97 88 78 48 90 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 121 52 119 76 106 73 103 81 50 108 48 89 83 66 106 98 50 52 103 89 50 120 112 90 87 53 48 90 83 66 53 73 72 90 108 97 77 79 116 89 51 86 115 98 51 77 103 98 109 56 103 90 88 104 112 99 51 82 108 98 110 82 108 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 76 83 51 112 109 97 85 78 72 101 87 82 71 81 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 109 78 112 100 71 69 105 76 67 65 105 89 50 120 112 90 87 53 48 90 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 100 118 99 109 116 122 97 71 57 119 76 87 78 112 100 71 69 116 89 50 57 121 100 71 86 122 97 87 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 77 117 77 67 52 122 73 69 70 115 100 71 69 103 90 71 85 103 89 50 108 48 89 83 66 106 98 50 52 103 100 109 86 111 119 54 49 106 100 87 120 118 73 71 82 108 73 71 78 118 99 110 82 108 99 56 79 116 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 48 51 89 50 78 83 78 109 82 122 77 85 82 77 81 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 109 78 112 100 71 69 105 76 67 65 105 89 50 57 121 100 71 86 122 119 54 49 104 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 116 99 109 86 117 98 51 90 104 89 50 108 118 98 105 49 106 97 88 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 122 76 106 65 117 78 67 66 83 90 87 53 118 100 109 70 106 97 99 79 122 98 105 66 107 90 83 66 49 98 109 69 103 89 50 108 48 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 48 119 90 49 104 117 99 69 108 115 98 72 69 50 77 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 110 74 108 98 109 57 50 89 87 78 112 119 55 78 117 73 105 119 103 73 109 78 112 100 71 69 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 118 99 105 49 107 90 88 78 107 90 83 49 106 97 88 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 122 76 106 65 117 78 83 66 66 98 72 82 104 73 71 82 108 73 69 57 83 73 71 82 108 99 50 82 108 73 71 78 112 100 71 69 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 100 118 99 109 116 122 97 71 57 119 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 57 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 89 106 90 88 83 109 53 83 98 110 82 119 84 107 69 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 82 104 98 71 120 108 99 105 73 115 73 67 74 80 85 105 73 115 73 67 74 106 97 88 82 104 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 116 98 51 73 116 100 109 86 111 97 87 78 49 98 71 56 116 89 50 120 112 90 87 53 48 90 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 105 52 119 76 106 69 103 81 87 120 48 89 83 66 107 90 83 66 80 85 105 66 87 90 87 106 68 114 87 78 49 98 71 56 103 81 50 120 112 90 87 53 48 90 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 117 85 108 57 50 100 105 49 97 98 105 49 52 100 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 107 57 83 73 105 119 103 73 110 90 108 97 77 79 116 89 51 86 115 98 121 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 116 98 51 73 116 100 71 86 116 99 71 70 121 97 87 56 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 73 117 77 67 52 121 73 69 70 115 100 71 69 103 90 71 85 103 84 49 73 103 86 71 86 116 99 71 70 121 97 87 56 103 101 83 66 49 99 50 57 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 85 52 77 49 57 68 87 71 108 109 100 109 74 74 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 84 49 73 105 76 67 65 105 100 71 86 116 99 71 70 121 97 87 56 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 118 99 105 49 106 98 50 53 109 97 88 74 116 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 73 117 77 67 52 122 73 69 70 115 100 71 69 103 90 71 85 103 84 49 73 103 81 50 57 117 90 109 108 121 98 87 70 106 97 99 79 122 98 105 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 100 50 57 121 97 51 78 111 98 51 65 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 98 51 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 68 85 68 90 87 97 72 90 82 100 48 74 72 79 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 71 70 115 98 71 86 121 73 105 119 103 73 107 57 83 73 105 119 103 73 109 78 118 98 109 90 112 99 109 49 104 89 50 110 68 115 50 52 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 118 99 105 49 109 89 87 78 48 100 88 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 105 52 119 76 106 81 103 81 87 120 48 89 83 66 107 90 83 66 80 85 105 66 71 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 100 118 99 109 116 122 97 71 57 119 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 57 121 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 85 87 78 117 90 87 119 52 82 48 104 66 87 85 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 110 82 104 98 71 120 108 99 105 73 115 73 67 74 80 85 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 49 104 98 72 82 104 76 88 90 108 97 71 108 106 100 87 120 118 76 88 82 104 98 71 120 108 99 105 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 122 76 106 89 103 81 87 120 48 89 83 66 107 90 83 66 50 90 87 106 68 114 87 78 49 98 71 56 103 90 71 85 103 100 71 70 115 98 71 86 121 73 71 86 117 73 69 57 83 73 67 48 103 86 107 56 103 90 87 52 103 89 87 120 105 89 88 76 68 111 87 52 103 90 71 85 103 89 50 57 116 99 72 74 104 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 51 98 51 74 114 99 50 104 118 99 67 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 118 99 105 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 120 84 97 51 73 53 101 71 53 67 100 107 104 86 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 48 89 87 120 115 90 88 73 105 76 67 65 105 100 109 86 111 119 54 49 106 100 87 120 118 73 105 119 103 73 107 57 83 73 105 119 103 73 109 70 115 89 109 70 121 119 54 70 117 73 108 48 78 67 105 65 103 102 83 119 78 67 103 48 75 73 67 65 118 76 121 65 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 73 69 70 69 84 85 108 79 83 86 78 85 85 107 70 68 83 99 79 84 84 105 65 111 77 106 89 103 100 109 108 107 90 87 57 122 75 83 65 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 70 115 100 71 69 116 89 51 86 108 98 110 82 104 99 121 49 48 90 88 78 118 99 109 86 121 97 87 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 73 69 70 115 100 71 69 103 90 71 85 103 89 51 86 108 98 110 82 104 99 121 66 107 90 83 66 48 90 88 78 118 99 109 86 121 119 54 49 104 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 48 99 109 86 104 99 51 86 121 101 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 86 107 122 78 107 70 122 89 87 53 84 81 88 70 78 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 100 71 86 122 98 51 74 108 99 115 79 116 89 83 73 115 73 67 74 106 100 87 86 117 100 71 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 87 120 48 89 83 49 106 98 50 53 106 90 88 66 48 98 51 77 116 100 71 86 122 98 51 74 108 99 109 108 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 105 66 66 98 72 82 104 73 71 82 108 73 71 78 118 98 109 78 108 99 72 82 118 99 121 66 107 90 83 66 48 90 88 78 118 99 109 86 121 119 54 49 104 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 48 99 109 86 104 99 51 86 121 101 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 78 112 86 51 112 114 86 51 108 109 90 72 74 110 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 100 71 86 122 98 51 74 108 99 115 79 116 89 83 73 115 73 67 74 106 98 50 53 106 90 88 66 48 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 98 72 82 104 76 88 78 108 99 110 90 112 89 50 108 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 121 66 66 98 72 82 104 73 71 82 108 73 72 86 117 73 72 78 108 99 110 90 112 89 50 108 118 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 48 99 109 86 104 99 51 86 121 101 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 86 108 109 79 88 100 104 100 88 78 83 85 48 53 78 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 99 50 86 121 100 109 108 106 97 87 56 105 76 67 65 105 89 87 120 48 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 88 74 108 90 50 108 122 100 72 74 118 76 87 49 104 98 110 86 104 98 67 49 48 90 88 78 118 99 109 86 121 97 87 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 48 73 69 70 115 100 71 69 103 90 71 85 103 99 109 86 110 97 88 78 48 99 109 56 103 98 87 70 117 100 87 70 115 73 71 86 117 73 72 82 108 99 50 57 121 90 88 76 68 114 87 69 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 51 82 121 90 87 70 122 100 88 74 53 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 87 108 86 72 99 110 100 89 99 107 77 53 87 85 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 48 90 88 78 118 99 109 86 121 119 54 49 104 73 105 119 103 73 110 74 108 90 50 108 122 100 72 74 118 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 88 66 115 97 87 78 104 89 50 108 118 98 105 49 104 98 110 82 112 89 50 108 119 98 51 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 51 73 69 70 119 98 71 108 106 89 87 78 112 119 55 78 117 73 71 82 108 73 71 70 117 100 71 108 106 97 88 66 118 99 121 66 104 99 50 57 106 97 87 70 107 98 51 77 103 89 83 66 115 89 83 66 108 98 110 82 112 90 71 70 107 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 48 99 109 86 104 99 51 86 121 101 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 83 49 73 86 49 69 50 79 69 116 116 99 84 90 118 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 87 53 48 97 87 78 112 99 71 57 122 73 105 119 103 73 109 86 117 100 71 108 107 89 87 81 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 99 110 70 49 90 87 56 116 89 50 108 108 99 110 74 108 76 87 78 104 97 109 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 52 73 69 70 121 99 88 86 108 98 121 66 53 73 71 78 112 90 88 74 121 90 83 66 107 90 83 66 106 100 87 86 117 100 71 70 122 73 71 82 108 73 72 82 108 99 50 57 121 90 88 76 68 114 87 69 103 89 50 70 113 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 50 70 122 97 70 57 106 98 71 57 122 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 87 82 83 100 69 90 109 97 109 100 102 90 88 104 90 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 88 74 120 100 87 86 118 73 105 119 103 73 109 78 112 90 88 74 121 90 83 73 115 73 67 74 106 89 87 112 104 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 87 120 48 89 83 49 109 89 87 78 48 100 88 74 104 76 87 100 104 99 51 82 118 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 69 119 73 69 70 115 100 71 69 103 90 71 85 103 90 109 70 106 100 72 86 121 89 83 66 107 90 83 66 110 89 88 78 48 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 86 52 99 71 86 117 99 50 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 88 86 86 101 70 104 90 78 86 86 76 82 87 57 90 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 73 115 73 67 74 110 89 88 78 48 98 51 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 110 89 88 78 48 98 51 77 116 89 50 57 117 100 72 74 104 100 71 57 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 69 103 82 109 70 106 100 72 86 121 89 88 73 103 90 50 70 122 100 71 57 122 73 71 49 108 90 71 108 104 98 110 82 108 73 71 78 118 98 110 82 121 89 88 82 118 99 121 66 53 73 72 90 108 98 109 78 112 98 87 108 108 98 110 82 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 90 88 104 119 90 87 53 122 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 86 69 53 69 83 49 81 121 101 84 86 111 84 122 65 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 110 89 88 78 48 98 51 77 105 76 67 65 105 89 50 57 117 100 72 74 104 100 71 57 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 99 109 86 116 90 88 78 104 99 121 49 106 98 50 74 121 98 51 77 116 99 71 70 110 98 51 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 77 105 66 66 98 72 82 104 73 71 82 108 73 72 74 108 98 87 86 122 89 88 77 103 90 71 85 103 89 50 57 105 99 109 57 122 73 72 107 103 99 71 70 110 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 70 106 89 50 57 49 98 110 82 112 98 109 99 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 110 87 69 86 84 97 48 53 53 99 106 104 76 77 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 110 74 108 98 87 86 122 89 88 77 105 76 67 65 105 89 50 57 105 99 109 57 122 73 105 119 103 73 110 66 104 90 50 57 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 99 109 86 116 90 88 78 104 76 87 53 118 98 87 108 117 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 77 121 66 68 99 109 86 104 89 50 110 68 115 50 52 103 90 71 85 103 99 109 86 116 90 88 78 104 73 71 82 108 73 71 55 68 115 50 49 112 98 109 70 122 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 104 89 50 78 118 100 87 53 48 97 87 53 110 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 85 49 70 104 90 84 90 107 87 69 104 71 86 107 48 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 121 90 87 49 108 99 50 69 105 76 67 65 105 98 115 79 122 98 87 108 117 89 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 99 50 108 108 98 110 82 118 99 121 49 106 98 50 53 48 89 87 74 115 90 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 78 67 66 68 99 109 86 104 99 105 66 104 99 50 108 108 98 110 82 118 99 121 66 106 98 50 53 48 89 87 74 115 90 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 70 106 89 50 57 49 98 110 82 112 98 109 99 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 72 98 109 53 113 85 71 74 86 84 49 90 54 89 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 109 70 122 97 87 86 117 100 71 57 122 73 105 119 103 73 109 78 118 98 110 82 104 89 109 120 108 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 74 104 98 71 70 117 89 50 85 116 99 51 86 116 89 88 77 116 99 50 70 115 90 71 57 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 103 103 81 50 57 117 99 51 86 115 100 71 70 121 73 71 74 104 98 71 70 117 89 50 85 103 90 71 85 103 99 51 86 116 89 88 77 103 101 83 66 122 89 87 120 107 98 51 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 70 106 89 50 57 49 98 110 82 112 98 109 99 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 105 87 84 69 51 83 48 78 122 89 87 120 107 98 121 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 109 74 104 98 71 70 117 89 50 85 105 76 67 65 105 99 51 86 116 89 88 77 105 76 67 65 105 99 50 70 115 90 71 57 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 90 88 104 48 99 109 70 106 100 71 56 116 98 87 70 53 98 51 73 116 89 51 86 108 98 110 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 107 103 81 50 57 117 99 51 86 115 100 71 70 121 73 72 86 117 73 71 86 52 100 72 74 104 89 51 82 118 73 71 56 103 98 87 70 53 98 51 73 103 90 71 85 103 100 87 53 104 73 71 78 49 90 87 53 48 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 89 87 78 106 98 51 86 117 100 71 108 117 90 121 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 88 90 49 87 108 86 118 99 71 119 119 97 84 90 118 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 90 88 104 48 99 109 70 106 100 71 56 105 76 67 65 105 98 87 70 53 98 51 73 105 76 67 65 105 89 51 86 108 98 110 82 104 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 90 109 70 106 100 72 86 121 89 87 78 112 98 50 52 116 100 71 70 117 90 71 69 116 89 50 57 116 99 72 74 104 99 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 73 119 73 69 90 104 89 51 82 49 99 109 70 106 97 99 79 122 98 105 66 108 98 105 66 48 89 87 53 107 89 83 66 107 90 83 66 104 98 71 74 104 99 109 70 117 90 88 77 103 90 71 85 103 89 50 57 116 99 72 74 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 90 88 104 119 90 87 53 122 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 85 82 122 101 109 86 89 97 72 86 53 84 84 65 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 76 67 65 105 100 71 70 117 90 71 69 105 76 67 65 105 89 50 57 116 99 72 74 104 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 90 104 89 51 82 49 99 109 70 106 97 87 57 117 76 87 70 115 89 109 70 121 89 87 52 116 89 50 57 116 99 72 74 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 106 69 103 82 109 70 106 100 72 86 121 89 87 78 112 119 55 78 117 73 71 82 108 73 71 70 115 89 109 70 121 119 54 70 117 73 71 82 108 73 71 78 118 98 88 66 121 89 88 77 103 99 71 57 121 73 72 78 108 98 71 86 106 89 50 110 68 115 50 52 103 75 121 66 109 89 87 78 48 100 88 74 104 99 105 65 114 73 69 72 68 115 87 70 107 97 88 73 103 89 87 120 105 89 88 74 104 98 109 86 122 73 71 69 103 90 109 70 106 100 72 86 121 89 83 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 90 88 104 119 90 87 53 122 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 90 51 70 111 89 122 70 51 78 108 86 75 84 71 115 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 87 120 105 89 88 76 68 111 87 52 105 76 67 65 105 89 50 57 116 99 72 74 104 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 78 118 98 109 90 112 90 121 49 109 89 87 78 48 100 88 74 104 99 121 49 106 98 50 49 119 99 109 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 121 77 105 66 68 98 50 53 109 97 87 100 49 99 109 70 121 73 72 107 103 98 87 57 107 97 87 90 112 89 50 70 121 73 71 90 104 89 51 82 49 99 109 70 122 73 71 82 108 73 71 78 118 98 88 66 121 89 88 77 103 90 50 70 122 100 71 57 122 73 68 73 103 98 51 66 106 97 87 57 117 90 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 86 52 99 71 86 117 99 50 86 102 97 87 53 50 98 50 108 106 90 83 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 84 70 53 99 51 112 83 86 70 74 120 77 85 112 122 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 50 57 117 90 109 108 110 100 88 74 104 99 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 99 121 73 115 73 67 74 106 98 50 49 119 99 109 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 50 104 108 89 50 115 116 99 50 86 121 97 87 85 116 89 87 120 105 89 88 74 104 98 109 86 122 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 106 77 103 81 50 104 108 89 50 115 103 90 87 52 103 99 50 86 121 97 87 85 103 90 87 52 103 89 87 120 105 89 88 74 104 98 109 86 122 73 71 82 108 73 72 90 108 98 110 82 104 99 121 66 119 89 88 74 104 73 72 70 49 90 83 66 122 98 50 120 112 89 50 108 48 90 83 66 109 90 87 78 111 89 83 66 104 98 67 66 109 89 87 78 48 100 88 74 104 99 109 120 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 85 88 103 122 77 110 90 79 100 51 74 72 90 51 99 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 106 97 71 86 106 97 121 73 115 73 67 74 122 90 88 74 112 90 83 73 115 73 67 74 104 98 71 74 104 99 109 70 117 90 88 77 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 106 99 109 86 104 99 105 49 112 98 109 49 118 100 109 108 115 97 88 112 104 90 71 56 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 121 78 67 66 68 99 109 86 104 99 105 66 112 98 109 49 118 100 109 108 115 97 88 112 104 90 71 56 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 70 106 89 50 57 49 98 110 82 112 98 109 99 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 49 98 84 74 89 82 49 56 119 78 70 66 111 77 67 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 109 78 121 90 87 70 121 73 105 119 103 73 109 108 117 98 87 57 50 97 87 120 112 101 109 70 107 98 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 70 117 89 87 82 112 99 105 49 104 98 71 74 104 99 109 70 117 90 88 77 116 90 109 70 106 100 72 86 121 89 83 49 106 98 50 49 119 99 109 69 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 121 78 83 66 66 119 55 70 104 90 71 108 121 73 71 70 115 89 109 70 121 89 87 53 108 99 121 66 104 73 72 86 117 89 83 66 109 89 87 78 48 100 88 74 104 73 71 82 108 73 71 78 118 98 88 66 121 89 83 65 111 89 50 70 122 89 88 73 112 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 108 118 98 105 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 109 78 121 90 87 70 48 90 86 57 108 101 72 66 108 98 110 78 108 88 50 108 117 100 109 57 112 89 50 85 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 104 99 109 100 52 86 68 66 112 98 86 108 121 83 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 103 73 107 72 68 115 87 70 107 97 88 73 105 76 67 65 105 89 87 120 105 89 88 74 104 98 109 86 122 73 105 119 103 73 109 90 104 89 51 82 49 99 109 69 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 89 109 57 117 89 88 73 116 90 109 70 106 100 72 86 121 89 83 49 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 121 78 105 66 66 89 109 57 117 89 88 73 103 90 109 70 106 100 72 86 121 89 83 66 107 90 83 66 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 108 117 100 109 57 112 89 50 86 102 99 71 70 53 98 87 86 117 100 67 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 49 70 78 84 70 89 78 71 99 119 100 71 100 106 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 87 74 118 98 109 70 121 73 105 119 103 73 109 90 104 89 51 82 49 99 109 69 105 76 67 65 105 100 109 86 117 100 71 70 122 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 89 50 57 105 99 109 56 116 90 109 70 106 100 72 86 121 89 83 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 85 103 81 50 57 105 99 109 56 103 90 71 85 103 90 109 70 106 100 72 86 121 89 83 66 105 98 51 84 68 115 50 52 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 108 117 100 109 57 112 89 50 86 102 99 71 70 53 98 87 86 117 100 67 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 85 116 120 78 110 86 80 77 88 70 72 85 69 69 52 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 89 50 57 105 99 109 56 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 78 118 89 110 74 118 76 87 70 117 100 71 108 106 97 88 66 118 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 78 105 66 68 99 109 86 104 89 50 110 68 115 50 52 103 89 50 57 105 99 109 56 103 90 71 85 103 89 87 53 48 97 87 78 112 99 71 56 103 90 71 85 103 99 71 86 107 97 87 82 118 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 99 107 116 53 83 107 99 52 82 122 65 53 101 108 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 106 98 50 74 121 98 121 73 115 73 67 74 104 98 110 82 112 89 50 108 119 98 121 73 115 73 67 74 119 90 87 82 112 90 71 56 105 88 81 48 75 73 67 66 57 76 65 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 104 90 71 49 112 98 105 49 104 98 110 82 112 89 50 108 119 98 121 49 106 98 50 74 121 98 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 107 103 81 51 74 108 89 88 73 103 89 87 53 48 97 87 78 112 99 71 56 103 90 71 85 103 89 50 57 105 99 109 56 103 89 83 66 106 98 71 108 108 98 110 82 108 73 72 78 112 98 105 66 119 90 87 82 112 90 71 56 103 98 109 107 103 98 51 66 108 99 109 70 106 97 99 79 122 98 105 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 98 88 74 53 81 109 74 78 88 50 82 115 86 50 56 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 104 98 110 82 112 89 50 108 119 98 121 73 115 73 67 74 106 98 50 74 121 98 121 73 115 73 67 74 106 98 71 108 108 98 110 82 108 73 108 48 78 67 105 65 103 102 83 119 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 89 87 82 116 97 87 52 116 90 109 70 106 100 72 86 121 89 83 49 122 90 88 74 50 97 87 78 112 98 51 77 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 115 79 116 90 71 86 118 73 68 69 117 79 83 52 120 78 83 66 68 99 109 86 104 99 105 66 109 89 87 78 48 100 88 74 104 73 71 82 108 73 72 90 108 98 110 82 104 73 71 82 108 73 72 78 108 99 110 90 112 89 50 108 118 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 90 88 104 119 90 87 53 122 90 86 57 112 98 110 90 118 97 87 78 108 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 77 86 78 69 90 106 70 114 83 108 66 86 81 107 107 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 109 89 87 78 48 100 88 74 104 73 105 119 103 73 110 78 108 99 110 90 112 89 50 108 118 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 70 115 89 109 70 121 89 87 53 108 99 121 49 118 99 105 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 87 119 54 49 107 90 87 56 103 77 83 52 53 76 106 69 50 73 69 72 68 115 87 70 107 97 88 73 103 89 87 120 105 89 88 74 104 98 109 86 122 73 69 57 83 99 121 66 104 73 72 86 117 89 83 66 109 89 87 78 48 100 88 74 104 73 71 82 108 73 72 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 89 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 98 50 52 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 106 99 109 86 104 100 71 86 102 97 87 53 50 98 50 108 106 90 86 57 119 89 88 108 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 101 88 66 108 79 105 65 105 100 109 108 107 90 87 56 105 76 65 48 75 73 67 65 103 73 72 78 118 100 88 74 106 90 84 111 103 73 110 108 118 100 88 82 49 89 109 85 105 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 73 109 104 48 100 72 66 122 79 105 56 118 100 51 100 51 76 110 108 118 100 88 82 49 89 109 85 117 89 50 57 116 76 51 100 104 100 71 78 111 80 51 89 57 87 69 104 68 79 84 86 102 97 86 74 84 77 50 77 105 76 65 48 75 73 67 65 103 73 71 116 108 101 88 100 118 99 109 82 122 79 105 66 98 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 99 79 122 98 105 73 115 73 67 74 104 98 71 74 104 99 109 70 117 90 88 77 105 76 67 65 105 84 49 73 105 76 67 65 105 90 109 70 106 100 72 86 121 89 83 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 109 70 107 98 87 108 117 76 87 90 104 89 51 82 49 99 109 70 106 97 87 57 117 76 88 82 104 98 109 82 104 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 98 68 114 87 82 108 98 121 65 120 76 106 107 117 77 84 99 103 82 109 70 106 100 72 86 121 89 87 78 112 119 55 78 117 73 71 86 117 73 72 82 104 98 109 82 104 73 71 82 108 73 71 70 115 89 109 70 121 89 87 53 108 99 121 66 107 90 83 66 50 90 87 53 48 89 88 77 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 109 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 51 74 108 89 88 82 108 88 50 108 117 100 109 57 112 89 50 86 102 99 71 70 53 98 87 86 117 100 67 73 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 73 110 90 112 90 71 86 118 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 53 98 51 86 48 100 87 74 108 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 67 74 111 100 72 82 119 99 122 111 118 76 51 100 51 100 121 53 53 98 51 86 48 100 87 74 108 76 109 78 118 98 83 57 51 89 88 82 106 97 68 57 50 80 88 74 108 97 48 73 120 84 109 74 108 99 69 104 74 73 105 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 104 90 71 49 112 98 109 108 122 100 72 74 104 89 50 110 68 115 50 52 105 76 67 65 105 90 109 70 106 100 72 86 121 89 87 78 112 119 55 78 117 73 105 119 103 73 110 82 104 98 109 82 104 73 105 119 103 73 109 70 115 89 109 70 121 89 87 53 108 99 121 74 100 68 81 111 103 73 72 48 115 68 81 111 78 67 105 65 103 76 121 56 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 83 66 84 86 69 57 68 83 121 65 111 77 121 66 50 97 87 82 108 98 51 77 103 76 83 66 108 101 71 108 122 100 71 108 117 90 121 107 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 81 48 75 73 67 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 67 74 122 100 71 57 106 97 121 49 106 97 71 86 106 97 121 49 122 100 71 57 106 97 121 73 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 67 74 68 98 50 53 122 100 87 120 48 89 88 73 103 99 51 82 118 89 50 115 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 48 98 50 78 114 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 89 50 104 108 89 50 116 102 99 51 82 118 89 50 115 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 107 85 88 99 48 100 122 108 88 90 49 104 106 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 99 51 82 118 89 50 115 105 76 67 65 105 89 50 57 117 99 51 86 115 100 71 69 105 76 67 65 105 97 87 53 50 90 87 53 48 89 88 74 112 98 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 48 98 50 78 114 76 87 49 118 100 109 86 116 90 87 53 48 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 107 49 118 100 109 108 116 97 87 86 117 100 71 56 103 90 71 85 103 99 51 82 118 89 50 115 105 76 65 48 75 73 67 65 103 73 71 49 118 90 72 86 115 90 84 111 103 73 110 78 48 98 50 78 114 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 99 51 82 118 89 50 116 102 98 87 57 50 90 87 49 108 98 110 81 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 107 85 88 99 48 100 122 108 88 90 49 104 106 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 99 51 82 118 89 50 115 105 76 67 65 105 98 87 57 50 97 87 49 112 90 87 53 48 98 121 74 100 68 81 111 103 73 72 48 115 68 81 111 103 73 72 115 78 67 105 65 103 73 67 66 112 90 68 111 103 73 110 78 48 98 50 78 114 76 88 82 121 89 87 53 122 90 109 86 121 73 105 119 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 73 108 82 121 89 88 78 119 89 88 78 118 73 71 86 117 100 72 74 108 73 71 70 115 98 87 70 106 90 87 53 108 99 121 73 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 65 105 99 51 82 118 89 50 115 105 76 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 77 54 73 67 74 51 89 88 74 108 97 71 57 49 99 50 86 102 100 72 74 104 98 110 78 109 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 107 85 88 99 48 100 122 108 88 90 49 104 106 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 99 51 82 118 89 50 115 105 76 67 65 105 100 72 74 104 99 51 66 104 99 50 56 105 76 67 65 105 89 87 120 116 89 87 78 108 98 109 86 122 73 108 48 78 67 105 65 103 102 83 119 78 67 103 48 75 73 67 65 118 76 121 65 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 73 70 90 70 83 69 108 68 84 69 86 84 73 67 103 120 73 72 90 112 90 71 86 118 73 67 48 103 90 88 104 112 99 51 82 112 98 109 99 112 73 68 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 100 109 86 111 97 87 78 115 90 88 77 116 100 72 74 104 98 110 78 109 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 86 72 74 104 99 51 66 104 99 50 56 103 90 71 85 103 100 109 86 111 119 54 49 106 100 87 120 118 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 50 90 87 104 112 89 50 120 108 99 121 73 115 68 81 111 103 73 67 65 103 99 72 74 118 89 50 86 122 99 122 111 103 73 110 90 108 97 71 108 106 98 71 86 102 100 72 74 104 98 110 78 109 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 50 97 87 82 108 98 121 73 115 68 81 111 103 73 67 65 103 99 50 57 49 99 109 78 108 79 105 65 105 101 87 57 49 100 72 86 105 90 83 73 115 68 81 111 103 73 67 65 103 100 88 74 115 79 105 65 105 97 72 82 48 99 72 77 54 76 121 57 51 100 51 99 117 101 87 57 49 100 72 86 105 90 83 53 106 98 50 48 118 100 50 70 48 89 50 103 47 100 106 49 107 85 88 99 48 100 122 108 88 90 49 104 106 85 83 73 115 68 81 111 103 73 67 65 103 97 50 86 53 100 50 57 121 90 72 77 54 73 70 115 105 100 109 86 111 119 54 49 106 100 87 120 118 99 121 73 115 73 67 74 48 99 109 70 122 99 71 70 122 98 121 74 100 68 81 111 103 73 72 48 115 68 81 111 78 67 105 65 103 76 121 56 103 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 83 66 84 86 86 66 81 84 49 74 85 73 67 103 120 73 72 90 112 90 71 86 118 73 67 48 103 90 88 104 112 99 51 82 112 98 109 99 112 73 68 48 57 80 84 48 57 80 84 48 57 80 84 48 57 80 84 48 78 67 105 65 103 101 119 48 75 73 67 65 103 73 71 108 107 79 105 65 105 99 51 86 119 99 71 57 121 100 67 49 106 90 87 53 48 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 112 100 71 120 108 79 105 65 105 81 50 86 117 100 72 74 118 73 71 82 108 73 71 70 53 100 87 82 104 73 105 119 78 67 105 65 103 73 67 66 116 98 50 82 49 98 71 85 54 73 67 74 122 100 88 66 119 98 51 74 48 73 105 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 65 105 97 71 86 115 99 70 57 106 90 87 53 48 90 88 73 105 76 65 48 75 73 67 65 103 73 72 82 53 99 71 85 54 73 67 74 111 90 87 120 119 73 105 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 67 74 110 97 88 82 105 98 50 57 114 73 105 119 78 67 105 65 103 73 67 66 49 99 109 119 54 73 71 100 108 100 69 100 112 100 71 74 118 98 50 116 86 99 109 119 111 73 110 78 49 99 72 66 118 99 110 81 105 75 83 119 78 67 105 65 103 73 67 66 114 90 88 108 51 98 51 74 107 99 122 111 103 87 121 74 122 98 51 66 118 99 110 82 108 73 105 119 103 73 109 70 53 100 87 82 104 73 108 48 78 67 105 65 103 102 81 48 75 88 84 115 78 67 103 48 75 90 88 104 119 98 51 74 48 73 71 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 78 118 98 110 82 108 98 110 82 67 101 85 49 118 90 72 86 115 90 83 104 116 98 50 82 49 98 71 85 112 73 72 115 78 67 105 65 103 99 109 86 48 100 88 74 117 73 71 120 108 89 88 74 117 97 87 53 110 81 50 57 117 100 71 86 117 100 67 53 109 97 87 120 48 90 88 73 111 75 71 108 48 90 87 48 112 73 68 48 43 73 71 108 48 90 87 48 117 98 87 57 107 100 87 120 108 73 68 48 57 80 83 66 116 98 50 82 49 98 71 85 112 79 119 48 75 102 81 48 75 68 81 112 108 101 72 66 118 99 110 81 103 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 81 50 57 117 100 71 86 117 100 69 74 53 83 87 81 111 97 87 81 112 73 72 115 78 67 105 65 103 99 109 86 48 100 88 74 117 73 71 120 108 89 88 74 117 97 87 53 110 81 50 57 117 100 71 86 117 100 67 53 109 97 87 53 107 75 67 104 112 100 71 86 116 75 83 65 57 80 105 66 112 100 71 86 116 76 109 108 107 73 68 48 57 80 83 66 112 90 67 107 103 102 72 119 103 98 110 86 115 98 68 115 78 67 110 48 78 67 103 48 75 90 88 104 119 98 51 74 48 73 71 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 90 115 98 51 100 74 100 71 86 116 99 121 104 116 98 50 82 49 98 71 85 112 73 72 115 78 67 105 65 103 99 109 86 48 100 88 74 117 73 71 120 108 89 88 74 117 97 87 53 110 81 50 57 117 100 71 86 117 100 67 53 109 97 87 120 48 90 88 73 111 75 71 108 48 90 87 48 112 73 68 48 43 73 71 108 48 90 87 48 117 98 87 57 107 100 87 120 108 73 68 48 57 80 83 66 116 98 50 82 49 98 71 85 112 79 119 48 75 102 81 48 75 68 81 112 108 101 72 66 118 99 110 81 103 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 85 51 82 108 99 69 108 117 99 51 82 121 100 87 78 48 97 87 57 117 99 121 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 112 100 71 86 116 73 68 48 78 67 105 65 103 73 67 66 48 101 88 66 108 98 50 89 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 103 80 84 48 57 73 67 74 122 100 72 74 112 98 109 99 105 68 81 111 103 73 67 65 103 73 67 65 47 73 71 100 108 100 69 78 118 98 110 82 108 98 110 82 67 101 85 108 107 75 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 75 81 48 75 73 67 65 103 73 67 65 103 79 105 66 106 98 50 53 48 90 87 53 48 84 51 74 74 90 68 115 78 67 103 48 75 73 67 66 112 90 105 65 111 73 87 108 48 90 87 48 112 73 72 74 108 100 72 86 121 98 105 66 98 88 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 81 88 74 121 89 88 107 117 97 88 78 66 99 110 74 104 101 83 104 112 100 71 86 116 76 109 108 117 99 51 82 121 100 87 78 48 97 87 57 117 99 121 107 112 73 72 115 78 67 105 65 103 73 67 66 121 90 88 82 49 99 109 52 103 97 88 82 108 98 83 53 112 98 110 78 48 99 110 86 106 100 71 108 118 98 110 77 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 106 98 50 53 122 100 67 66 119 99 109 57 106 90 88 78 122 83 87 81 103 80 83 66 112 100 71 86 116 76 110 66 121 98 50 78 108 99 51 77 55 68 81 111 78 67 105 65 103 97 87 89 103 75 65 48 75 73 67 65 103 73 72 66 121 98 50 78 108 99 51 78 74 90 67 65 109 74 103 48 75 73 67 65 103 73 72 82 53 99 71 86 118 90 105 66 122 100 88 66 119 98 51 74 48 81 50 70 122 90 88 77 103 73 84 48 57 73 67 74 49 98 109 82 108 90 109 108 117 90 87 81 105 73 67 89 109 68 81 111 103 73 67 65 103 99 51 86 119 99 71 57 121 100 69 78 104 99 50 86 122 80 121 53 98 99 72 74 118 89 50 86 122 99 48 108 107 88 84 56 117 97 87 53 122 100 72 74 49 89 51 82 112 98 50 53 122 68 81 111 103 73 67 107 103 101 119 48 75 73 67 65 103 73 72 74 108 100 72 86 121 98 105 66 122 100 88 66 119 98 51 74 48 81 50 70 122 90 88 78 98 99 72 74 118 89 50 86 122 99 48 108 107 88 83 53 112 98 110 78 48 99 110 86 106 100 71 108 118 98 110 77 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 87 49 48 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 109 100 87 53 106 100 71 108 118 98 105 66 121 90 88 78 118 98 72 90 108 83 50 53 118 100 50 120 108 90 71 100 108 85 109 86 122 98 51 86 121 89 50 85 111 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 88 82 108 98 83 65 57 68 81 111 103 73 67 65 103 100 72 108 119 90 87 57 109 73 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 73 68 48 57 80 83 65 105 99 51 82 121 97 87 53 110 73 103 48 75 73 67 65 103 73 67 65 103 80 121 66 110 90 88 82 68 98 50 53 48 90 87 53 48 81 110 108 74 90 67 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 78 67 105 65 103 73 67 65 103 73 68 111 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 55 68 81 111 78 67 105 65 103 97 87 89 103 75 67 70 112 100 71 86 116 75 83 66 121 90 88 82 49 99 109 52 103 98 110 86 115 98 68 115 78 67 103 48 75 73 67 66 106 98 50 53 122 100 67 66 114 97 87 53 107 73 68 48 103 97 88 82 108 98 83 53 48 101 88 66 108 73 72 120 56 73 67 74 111 90 87 120 119 73 106 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 72 74 108 90 105 65 57 68 81 111 103 73 67 65 103 97 88 82 108 98 83 53 49 99 109 119 103 102 72 119 78 67 105 65 103 73 67 65 111 97 88 82 108 98 83 53 116 98 50 82 49 98 71 85 103 74 105 89 103 99 50 57 49 99 109 78 108 99 122 56 117 90 50 108 48 89 109 57 118 97 122 56 117 98 87 57 107 100 87 120 108 99 122 56 117 87 50 108 48 90 87 48 117 98 87 57 107 100 87 120 108 88 81 48 75 73 67 65 103 73 67 65 103 80 121 66 110 90 88 82 72 97 88 82 105 98 50 57 114 86 88 74 115 75 71 108 48 90 87 48 117 98 87 57 107 100 87 120 108 75 81 48 75 73 67 65 103 73 67 65 103 79 105 66 117 100 87 120 115 75 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 73 87 104 121 90 87 89 112 73 72 74 108 100 72 86 121 98 105 66 117 100 87 120 115 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 55 68 81 111 103 73 67 65 103 97 87 81 54 73 71 108 48 90 87 48 117 97 87 81 115 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 71 108 48 90 87 48 117 100 71 108 48 98 71 85 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 79 105 66 112 100 71 86 116 76 109 49 118 90 72 86 115 90 83 119 78 67 105 65 103 73 67 66 119 99 109 57 106 90 88 78 122 79 105 66 112 100 71 86 116 76 110 66 121 98 50 78 108 99 51 77 103 80 122 56 103 98 110 86 115 98 67 119 78 67 105 65 103 73 67 66 122 98 51 86 121 89 50 85 54 73 71 108 48 90 87 48 117 99 50 57 49 99 109 78 108 73 68 56 47 73 71 53 49 98 71 119 115 68 81 111 103 73 67 65 103 100 72 108 119 90 84 111 103 97 50 108 117 90 67 119 78 67 105 65 103 73 67 66 114 97 87 53 107 76 65 48 75 73 67 65 103 73 72 86 121 98 68 111 103 97 72 74 108 90 105 119 78 67 105 65 103 73 67 66 111 99 109 86 109 76 65 48 75 73 67 65 103 73 71 108 122 82 88 104 48 90 88 74 117 89 87 119 54 73 67 57 101 97 72 82 48 99 72 77 47 79 108 119 118 88 67 56 118 76 110 82 108 99 51 81 111 97 72 74 108 90 105 107 115 68 81 111 103 73 72 48 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 109 100 87 53 106 100 71 108 118 98 105 66 110 90 88 82 71 97 88 74 122 100 69 90 115 98 51 100 74 100 71 86 116 75 71 49 118 90 72 86 115 90 83 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 112 100 71 86 116 99 121 65 57 73 71 100 108 100 69 90 115 98 51 100 74 100 71 86 116 99 121 104 116 98 50 82 49 98 71 85 112 79 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 97 88 82 108 98 88 77 117 98 71 86 117 90 51 82 111 73 68 52 103 77 67 65 47 73 71 108 48 90 87 49 122 87 122 66 100 73 68 111 103 98 110 86 115 98 68 115 78 67 110 48 78 67 103 48 75 90 88 104 119 98 51 74 48 73 71 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 90 115 98 51 100 84 100 71 86 119 84 110 86 116 89 109 86 121 75 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 108 48 90 87 48 103 80 81 48 75 73 67 65 103 73 72 82 53 99 71 86 118 90 105 66 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 65 57 80 84 48 103 73 110 78 48 99 109 108 117 90 121 73 78 67 105 65 103 73 67 65 103 73 68 56 103 90 50 86 48 81 50 57 117 100 71 86 117 100 69 74 53 83 87 81 111 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 112 68 81 111 103 73 67 65 103 73 67 65 54 73 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 79 119 48 75 68 81 111 103 73 71 108 109 73 67 103 104 97 88 82 108 98 83 107 103 99 109 86 48 100 88 74 117 73 68 65 55 68 81 111 78 67 105 65 103 89 50 57 117 99 51 81 103 97 88 82 108 98 88 77 103 80 83 66 110 90 88 82 71 98 71 57 51 83 88 82 108 98 88 77 111 97 88 82 108 98 83 53 116 98 50 82 49 98 71 85 112 79 119 48 75 73 67 66 106 98 50 53 122 100 67 66 112 98 109 82 108 101 67 65 57 73 71 108 48 90 87 49 122 76 109 90 112 98 109 82 74 98 109 82 108 101 67 103 111 90 87 53 48 99 110 107 112 73 68 48 43 73 71 86 117 100 72 74 53 76 109 108 107 73 68 48 57 80 83 66 112 100 71 86 116 76 109 108 107 75 84 115 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 97 87 53 107 90 88 103 103 80 106 48 103 77 67 65 47 73 71 108 117 90 71 86 52 73 67 115 103 77 83 65 54 73 68 65 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 109 100 87 53 106 100 71 108 118 98 105 66 110 90 88 82 79 90 88 104 48 81 50 57 117 100 71 86 117 100 69 108 48 90 87 48 111 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 88 82 108 98 83 65 57 68 81 111 103 73 67 65 103 100 72 108 119 90 87 57 109 73 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 73 68 48 57 80 83 65 105 99 51 82 121 97 87 53 110 73 103 48 75 73 67 65 103 73 67 65 103 80 121 66 110 90 88 82 68 98 50 53 48 90 87 53 48 81 110 108 74 90 67 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 78 67 105 65 103 73 67 65 103 73 68 111 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 55 68 81 111 78 67 105 65 103 97 87 89 103 75 67 70 112 100 71 86 116 75 83 66 121 90 88 82 49 99 109 52 103 98 110 86 115 98 68 115 78 67 103 48 75 73 67 66 106 98 50 53 122 100 67 66 112 100 71 86 116 99 121 65 57 73 71 100 108 100 69 90 115 98 51 100 74 100 71 86 116 99 121 104 112 100 71 86 116 76 109 49 118 90 72 86 115 90 83 107 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 108 117 90 71 86 52 73 68 48 103 97 88 82 108 98 88 77 117 90 109 108 117 90 69 108 117 90 71 86 52 75 67 104 108 98 110 82 121 101 83 107 103 80 84 52 103 90 87 53 48 99 110 107 117 97 87 81 103 80 84 48 57 73 71 108 48 90 87 48 117 97 87 81 112 79 119 48 75 68 81 111 103 73 71 108 109 73 67 104 112 98 109 82 108 101 67 65 57 80 84 48 103 76 84 69 103 102 72 119 103 97 87 53 107 90 88 103 103 80 84 48 57 73 71 108 48 90 87 49 122 76 109 120 108 98 109 100 48 97 67 65 116 73 68 69 112 73 72 74 108 100 72 86 121 98 105 66 117 100 87 120 115 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 112 100 71 86 116 99 49 116 112 98 109 82 108 101 67 65 114 73 68 70 100 79 119 48 75 102 81 48 75 68 81 112 108 101 72 66 118 99 110 81 103 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 85 72 74 108 100 109 108 118 100 88 78 68 98 50 53 48 90 87 53 48 83 88 82 108 98 83 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 112 100 71 86 116 73 68 48 78 67 105 65 103 73 67 66 48 101 88 66 108 98 50 89 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 103 80 84 48 57 73 67 74 122 100 72 74 112 98 109 99 105 68 81 111 103 73 67 65 103 73 67 65 47 73 71 100 108 100 69 78 118 98 110 82 108 98 110 82 67 101 85 108 107 75 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 75 81 48 75 73 67 65 103 73 67 65 103 79 105 66 106 98 50 53 48 90 87 53 48 84 51 74 74 90 68 115 78 67 103 48 75 73 67 66 112 90 105 65 111 73 87 108 48 90 87 48 112 73 72 74 108 100 72 86 121 98 105 66 117 100 87 120 115 79 119 48 75 68 81 111 103 73 71 78 118 98 110 78 48 73 71 108 48 90 87 49 122 73 68 48 103 90 50 86 48 82 109 120 118 100 48 108 48 90 87 49 122 75 71 108 48 90 87 48 117 98 87 57 107 100 87 120 108 75 84 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 87 53 107 90 88 103 103 80 83 66 112 100 71 86 116 99 121 53 109 97 87 53 107 83 87 53 107 90 88 103 111 75 71 86 117 100 72 74 53 75 83 65 57 80 105 66 108 98 110 82 121 101 83 53 112 90 67 65 57 80 84 48 103 97 88 82 108 98 83 53 112 90 67 107 55 68 81 111 78 67 105 65 103 97 87 89 103 75 71 108 117 90 71 86 52 73 68 119 57 73 68 65 112 73 72 74 108 100 72 86 121 98 105 66 117 100 87 120 115 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 112 100 71 86 116 99 49 116 112 98 109 82 108 101 67 65 116 73 68 70 100 79 119 48 75 102 81 48 75 68 81 112 108 101 72 66 118 99 110 81 103 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 83 71 86 115 99 70 82 108 101 72 81 111 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 97 88 82 108 98 83 65 57 68 81 111 103 73 67 65 103 100 72 108 119 90 87 57 109 73 71 78 118 98 110 82 108 98 110 82 80 99 107 108 107 73 68 48 57 80 83 65 105 99 51 82 121 97 87 53 110 73 103 48 75 73 67 65 103 73 67 65 103 80 121 66 110 90 88 82 68 98 50 53 48 90 87 53 48 81 110 108 74 90 67 104 106 98 50 53 48 90 87 53 48 84 51 74 74 90 67 107 78 67 105 65 103 73 67 65 103 73 68 111 103 89 50 57 117 100 71 86 117 100 69 57 121 83 87 81 55 68 81 111 78 67 105 65 103 97 87 89 103 75 67 70 112 100 71 86 116 75 83 66 121 90 88 82 49 99 109 52 103 73 105 73 55 68 81 111 78 67 105 65 103 89 50 57 117 99 51 81 103 97 87 53 122 100 72 74 49 89 51 82 112 98 50 53 122 73 68 48 103 90 50 86 48 85 51 82 108 99 69 108 117 99 51 82 121 100 87 78 48 97 87 57 117 99 121 104 112 100 71 86 116 75 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 97 87 53 122 100 72 74 49 89 51 82 112 98 50 53 122 76 109 120 108 98 109 100 48 97 67 65 43 73 68 65 112 73 72 115 78 67 105 65 103 73 67 66 121 90 88 82 49 99 109 52 103 97 87 53 122 100 72 74 49 89 51 82 112 98 50 53 122 76 109 112 118 97 87 52 111 73 108 120 117 73 105 107 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 97 88 82 108 98 83 53 107 90 88 78 106 99 109 108 119 100 71 108 118 98 105 66 56 102 67 66 112 100 71 86 116 76 110 78 49 98 87 49 104 99 110 107 103 102 72 119 103 73 105 73 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 53 118 99 109 49 104 98 71 108 54 90 86 82 108 101 72 81 111 100 109 70 115 100 87 85 103 80 83 65 105 73 105 107 103 101 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 85 51 82 121 97 87 53 110 75 72 90 104 98 72 86 108 75 81 48 75 73 67 65 103 73 67 53 121 90 88 66 115 89 87 78 108 75 67 57 101 86 115 79 116 90 71 86 118 88 72 77 114 88 71 81 114 75 68 56 54 88 67 53 99 90 67 115 112 75 108 120 122 75 105 57 112 76 67 65 105 73 105 107 78 67 105 65 103 73 67 65 117 99 109 86 119 98 71 70 106 90 83 103 118 88 72 77 114 76 50 99 115 73 67 73 103 73 105 107 78 67 105 65 103 73 67 65 117 100 72 74 112 98 83 103 112 79 119 48 75 102 81 48 75 68 81 112 109 100 87 53 106 100 71 108 118 98 105 66 111 100 87 49 104 98 109 108 54 90 85 116 108 101 88 100 118 99 109 81 111 100 109 70 115 100 87 85 103 80 83 65 105 73 105 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 48 90 88 104 48 73 68 48 103 85 51 82 121 97 87 53 110 75 72 90 104 98 72 86 108 75 81 48 75 73 67 65 103 73 67 53 121 90 88 66 115 89 87 78 108 75 67 57 98 88 121 49 100 75 121 57 110 76 67 65 105 73 67 73 112 68 81 111 103 73 67 65 103 76 110 74 108 99 71 120 104 89 50 85 111 76 49 120 122 75 121 57 110 76 67 65 105 73 67 73 112 68 81 111 103 73 67 65 103 76 110 82 121 97 87 48 111 75 81 48 75 73 67 65 103 73 67 53 48 98 48 120 118 100 50 86 121 81 50 70 122 90 83 103 112 79 119 48 75 68 81 111 103 73 71 108 109 73 67 103 104 100 71 86 52 100 67 107 103 99 109 86 48 100 88 74 117 73 67 73 105 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 48 90 88 104 48 76 109 78 111 89 88 74 66 100 67 103 119 75 83 53 48 98 49 86 119 99 71 86 121 81 50 70 122 90 83 103 112 73 67 115 103 100 71 86 52 100 67 53 122 98 71 108 106 90 83 103 120 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 98 109 57 121 98 87 70 115 97 88 112 108 82 109 57 121 81 50 57 116 99 71 70 121 90 83 104 50 89 87 120 49 90 83 65 57 73 67 73 105 75 83 66 55 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 117 98 51 74 116 89 87 120 112 101 109 86 85 90 88 104 48 75 72 90 104 98 72 86 108 75 81 48 75 73 67 65 103 73 67 53 48 98 48 120 118 100 50 86 121 81 50 70 122 90 83 103 112 68 81 111 103 73 67 65 103 76 109 53 118 99 109 49 104 98 71 108 54 90 83 103 105 84 107 90 69 73 105 107 78 67 105 65 103 73 67 65 117 99 109 86 119 98 71 70 106 90 83 103 118 87 49 120 49 77 68 77 119 77 67 49 99 100 84 65 122 78 109 90 100 76 50 99 115 73 67 73 105 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 99 50 104 49 90 109 90 115 90 85 70 121 99 109 70 53 75 71 108 48 90 87 49 122 73 68 48 103 87 49 48 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 89 88 74 121 73 68 48 103 87 121 52 117 76 109 108 48 90 87 49 122 88 84 115 78 67 103 48 75 73 67 66 109 98 51 73 103 75 71 120 108 100 67 66 112 73 68 48 103 89 88 74 121 76 109 120 108 98 109 100 48 97 67 65 116 73 68 69 55 73 71 107 103 80 105 65 119 79 121 66 112 73 67 48 57 73 68 69 112 73 72 115 78 67 105 65 103 73 67 66 106 98 50 53 122 100 67 66 113 73 68 48 103 84 87 70 48 97 67 53 109 98 71 57 118 99 105 104 78 89 88 82 111 76 110 74 104 98 109 82 118 98 83 103 112 73 67 111 103 75 71 107 103 75 121 65 120 75 83 107 55 68 81 111 103 73 67 65 103 87 50 70 121 99 108 116 112 88 83 119 103 89 88 74 121 87 50 112 100 88 83 65 57 73 70 116 104 99 110 74 98 97 108 48 115 73 71 70 121 99 108 116 112 88 86 48 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 89 88 74 121 79 119 48 75 102 81 48 75 68 81 112 109 100 87 53 106 100 71 108 118 98 105 66 122 89 87 49 119 98 71 86 84 97 88 112 108 75 71 108 48 90 87 49 122 73 68 48 103 87 49 48 115 73 72 78 112 101 109 85 103 80 83 65 120 77 67 107 103 101 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 99 50 104 49 90 109 90 115 90 85 70 121 99 109 70 53 75 71 108 48 90 87 49 122 75 83 53 122 98 71 108 106 90 83 103 119 76 67 66 78 89 88 82 111 76 109 49 112 98 105 104 122 97 88 112 108 76 67 66 112 100 71 86 116 99 121 53 115 90 87 53 110 100 71 103 112 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 90 71 86 107 100 88 66 108 85 51 82 121 97 87 53 110 99 121 104 112 100 71 86 116 99 121 65 57 73 70 116 100 75 83 66 55 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 98 68 81 111 103 73 67 65 103 76 105 52 117 98 109 86 51 73 70 78 108 100 67 103 78 67 105 65 103 73 67 65 103 73 71 108 48 90 87 49 122 68 81 111 103 73 67 65 103 73 67 65 103 73 67 53 109 97 87 120 48 90 88 73 111 81 109 57 118 98 71 86 104 98 105 107 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 49 104 99 67 103 111 97 88 82 108 98 83 107 103 80 84 52 103 85 51 82 121 97 87 53 110 75 71 108 48 90 87 48 112 76 110 82 121 97 87 48 111 75 83 107 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 104 67 98 50 57 115 90 87 70 117 75 81 48 75 73 67 65 103 73 67 107 78 67 105 65 103 88 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 84 87 57 107 100 87 120 108 84 71 70 105 90 87 119 111 98 87 57 107 100 87 120 108 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 120 104 89 109 86 115 99 121 65 57 73 72 115 78 67 105 65 103 73 67 66 122 89 87 120 108 99 122 111 103 73 108 90 108 98 110 82 104 99 121 73 115 68 81 111 103 73 67 65 103 100 50 57 121 97 51 78 111 98 51 65 54 73 67 74 85 89 87 120 115 90 88 73 105 76 65 48 75 73 67 65 103 73 71 70 107 98 87 108 117 97 88 78 48 99 109 70 106 97 87 57 117 79 105 65 105 81 87 82 116 97 87 53 112 99 51 82 121 89 87 78 112 119 55 78 117 73 105 119 78 67 105 65 103 73 67 66 122 100 71 57 106 97 122 111 103 73 108 78 48 98 50 78 114 73 105 119 78 67 105 65 103 73 67 66 50 90 87 104 112 89 50 120 108 99 122 111 103 73 108 90 108 97 77 79 116 89 51 86 115 98 51 77 105 76 65 48 75 73 67 65 103 73 72 78 49 99 72 66 118 99 110 81 54 73 67 74 84 98 51 66 118 99 110 82 108 73 103 48 75 73 67 66 57 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 115 89 87 74 108 98 72 78 98 98 87 57 107 100 87 120 108 88 83 66 56 102 67 66 111 100 87 49 104 98 109 108 54 90 85 116 108 101 88 100 118 99 109 81 111 98 87 57 107 100 87 120 108 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 90 50 86 48 85 88 86 108 99 51 82 112 98 50 53 74 90 67 104 116 98 50 82 49 98 71 85 115 73 71 108 117 90 71 86 52 75 83 66 55 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 103 74 72 116 116 98 50 82 49 98 71 86 57 76 87 70 49 100 71 56 116 99 83 82 55 97 87 53 107 90 88 103 103 75 121 65 120 102 87 65 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 100 108 100 69 78 115 90 87 70 117 84 87 57 107 100 87 120 108 83 88 82 108 98 88 77 111 98 87 57 107 100 87 120 108 75 83 66 55 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 110 90 88 82 68 98 50 53 48 90 87 53 48 81 110 108 78 98 50 82 49 98 71 85 111 98 87 57 107 100 87 120 108 75 83 53 116 89 88 65 111 75 71 108 48 90 87 48 112 73 68 48 43 73 67 104 55 68 81 111 103 73 67 65 103 76 105 52 117 97 88 82 108 98 83 119 78 67 105 65 103 73 67 66 106 98 71 86 104 98 108 82 112 100 71 120 108 79 105 66 117 98 51 74 116 89 87 120 112 101 109 86 85 90 88 104 48 75 71 108 48 90 87 48 117 100 71 108 48 98 71 85 112 76 65 48 75 73 67 65 103 73 71 78 115 90 87 70 117 83 50 86 53 100 50 57 121 90 72 77 54 73 71 82 108 90 72 86 119 90 86 78 48 99 109 108 117 90 51 77 111 75 71 108 48 90 87 48 117 97 50 86 53 100 50 57 121 90 72 77 103 102 72 119 103 87 49 48 112 76 109 49 104 99 67 104 111 100 87 49 104 98 109 108 54 90 85 116 108 101 88 100 118 99 109 81 112 75 81 48 75 73 67 66 57 75 83 107 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 86 51 74 118 98 109 100 85 97 88 82 115 90 88 77 111 89 51 86 121 99 109 86 117 100 69 108 48 90 87 48 115 73 71 49 118 90 72 86 115 90 85 108 48 90 87 49 122 76 67 66 115 97 87 49 112 100 67 65 57 73 68 77 112 73 72 115 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 78 111 100 87 90 109 98 71 86 66 99 110 74 104 101 83 103 78 67 105 65 103 73 67 66 107 90 87 82 49 99 71 86 84 100 72 74 112 98 109 100 122 75 65 48 75 73 67 65 103 73 67 65 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 103 111 97 88 82 108 98 83 107 103 80 84 52 103 97 88 82 108 98 83 53 112 90 67 65 104 80 84 48 103 89 51 86 121 99 109 86 117 100 69 108 48 90 87 48 117 97 87 81 112 68 81 111 103 73 67 65 103 73 67 65 103 73 67 53 116 89 88 65 111 75 71 108 48 90 87 48 112 73 68 48 43 73 71 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 83 107 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 103 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 65 111 100 71 108 48 98 71 85 112 73 68 48 43 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 73 67 66 48 97 88 82 115 90 83 65 109 74 103 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 67 65 103 98 109 57 121 98 87 70 115 97 88 112 108 82 109 57 121 81 50 57 116 99 71 70 121 90 83 104 48 97 88 82 115 90 83 107 103 73 84 48 57 73 71 53 118 99 109 49 104 98 71 108 54 90 85 90 118 99 107 78 118 98 88 66 104 99 109 85 111 89 51 86 121 99 109 86 117 100 69 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 83 107 78 67 105 65 103 73 67 65 103 73 67 65 103 75 81 48 75 73 67 65 103 73 67 107 78 67 105 65 103 75 83 53 122 98 71 108 106 90 83 103 119 76 67 66 115 97 87 49 112 100 67 107 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 86 51 74 118 98 109 100 76 90 88 108 51 98 51 74 107 99 121 104 106 100 88 74 121 90 87 53 48 83 50 86 53 100 50 57 121 90 67 119 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 115 73 71 120 112 98 87 108 48 73 68 48 103 77 121 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 106 100 88 74 121 90 87 53 48 73 68 48 103 98 109 57 121 98 87 70 115 97 88 112 108 82 109 57 121 81 50 57 116 99 71 70 121 90 83 104 106 100 88 74 121 90 87 53 48 83 50 86 53 100 50 57 121 90 67 107 55 68 81 111 103 73 71 78 118 98 110 78 48 73 72 66 118 98 50 119 103 80 83 66 98 88 84 115 78 67 103 48 75 73 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 112 100 71 86 116 75 83 65 57 80 105 66 55 68 81 111 103 73 67 65 103 97 88 82 108 98 83 53 106 98 71 86 104 98 107 116 108 101 88 100 118 99 109 82 122 76 109 90 118 99 107 86 104 89 50 103 111 75 71 116 108 101 88 100 118 99 109 81 112 73 68 48 43 73 72 115 78 67 105 65 103 73 67 65 103 73 71 108 109 73 67 104 117 98 51 74 116 89 87 120 112 101 109 86 71 98 51 74 68 98 50 49 119 89 88 74 108 75 71 116 108 101 88 100 118 99 109 81 112 73 67 69 57 80 83 66 106 100 88 74 121 90 87 53 48 75 83 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 72 66 118 98 50 119 117 99 72 86 122 97 67 104 114 90 88 108 51 98 51 74 107 75 84 115 78 67 105 65 103 73 67 65 103 73 72 48 78 67 105 65 103 73 67 66 57 75 84 115 78 67 105 65 103 102 83 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 78 111 100 87 90 109 98 71 86 66 99 110 74 104 101 83 104 107 90 87 82 49 99 71 86 84 100 72 74 112 98 109 100 122 75 72 66 118 98 50 119 112 75 83 53 122 98 71 108 106 90 83 103 119 76 67 66 115 97 87 49 112 100 67 107 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 86 51 74 118 98 109 100 78 98 50 82 49 98 71 86 122 75 71 78 49 99 110 74 108 98 110 82 78 98 50 82 49 98 71 85 115 73 71 70 115 98 69 49 118 90 72 86 115 90 88 77 115 73 71 120 112 98 87 108 48 73 68 48 103 77 121 107 103 101 119 48 75 73 67 66 121 90 88 82 49 99 109 52 103 99 50 104 49 90 109 90 115 90 85 70 121 99 109 70 53 75 65 48 75 73 67 65 103 73 71 70 115 98 69 49 118 90 72 86 115 90 88 77 78 67 105 65 103 73 67 65 103 73 67 53 109 97 87 120 48 90 88 73 111 75 71 49 118 90 72 86 115 90 83 107 103 80 84 52 103 98 87 57 107 100 87 120 108 73 67 69 57 80 83 66 106 100 88 74 121 90 87 53 48 84 87 57 107 100 87 120 108 75 81 48 75 73 67 65 103 73 67 65 103 76 109 49 104 99 67 103 111 98 87 57 107 100 87 120 108 75 83 65 57 80 105 66 110 90 88 82 78 98 50 82 49 98 71 86 77 89 87 74 108 98 67 104 116 98 50 82 49 98 71 85 112 75 81 48 75 73 67 65 112 76 110 78 115 97 87 78 108 75 68 65 115 73 71 120 112 98 87 108 48 75 84 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 89 110 86 112 98 71 82 88 99 109 57 117 90 49 100 118 99 109 82 122 75 71 78 49 99 110 74 108 98 110 82 88 98 51 74 107 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 119 103 98 71 108 116 97 88 81 103 80 83 65 122 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 71 78 49 99 110 74 108 98 110 81 103 80 83 66 117 98 51 74 116 89 87 120 112 101 109 86 71 98 51 74 68 98 50 49 119 89 88 74 108 75 71 78 49 99 110 74 108 98 110 82 88 98 51 74 107 75 84 115 78 67 105 65 103 89 50 57 117 99 51 81 103 99 71 57 118 98 67 65 57 73 71 49 118 90 72 86 115 90 85 108 48 90 87 49 122 76 109 90 115 89 88 82 78 89 88 65 111 75 71 108 48 90 87 48 112 73 68 48 43 68 81 111 103 73 67 65 103 97 88 82 108 98 83 53 106 98 71 86 104 98 108 82 112 100 71 120 108 68 81 111 103 73 67 65 103 73 67 65 117 99 51 66 115 97 88 81 111 76 49 116 99 99 121 119 118 75 67 107 114 76 86 48 114 76 121 107 78 67 105 65 103 73 67 65 103 73 67 53 116 89 88 65 111 75 72 100 118 99 109 81 112 73 68 48 43 73 72 100 118 99 109 81 117 100 72 74 112 98 83 103 112 75 81 48 75 73 67 65 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 103 111 100 50 57 121 90 67 107 103 80 84 52 103 100 50 57 121 90 67 53 115 90 87 53 110 100 71 103 103 80 106 48 103 78 67 65 109 74 105 66 117 98 51 74 116 89 87 120 112 101 109 86 71 98 51 74 68 98 50 49 119 89 88 74 108 75 72 100 118 99 109 81 112 73 67 69 57 80 83 66 106 100 88 74 121 90 87 53 48 75 81 48 75 73 67 65 112 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 122 97 72 86 109 90 109 120 108 81 88 74 121 89 88 107 111 90 71 86 107 100 88 66 108 85 51 82 121 97 87 53 110 99 121 104 119 98 50 57 115 75 83 107 117 99 50 120 112 89 50 85 111 77 67 119 103 98 71 108 116 97 88 81 112 79 119 48 75 102 81 48 75 68 81 112 109 100 87 53 106 100 71 108 118 98 105 66 116 89 87 116 108 84 51 66 48 97 87 57 117 99 121 104 106 98 51 74 121 90 87 78 48 76 67 66 51 99 109 57 117 90 51 77 103 80 83 66 98 88 83 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 118 99 72 82 112 98 50 53 122 73 68 48 103 99 50 104 49 90 109 90 115 90 85 70 121 99 109 70 53 75 71 82 108 90 72 86 119 90 86 78 48 99 109 108 117 90 51 77 111 87 50 78 118 99 110 74 108 89 51 81 115 73 67 52 117 76 110 100 121 98 50 53 110 99 49 48 112 75 83 53 122 98 71 108 106 90 83 103 119 76 67 65 48 75 84 115 78 67 105 65 103 89 50 57 117 99 51 81 103 89 50 57 121 99 109 86 106 100 69 70 117 99 51 100 108 99 105 65 57 73 71 57 119 100 71 108 118 98 110 77 117 90 109 108 117 90 69 108 117 90 71 86 52 75 67 104 118 99 72 82 112 98 50 52 112 73 68 48 43 73 71 57 119 100 71 108 118 98 105 65 57 80 84 48 103 89 50 57 121 99 109 86 106 100 67 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 115 103 98 51 66 48 97 87 57 117 99 121 119 103 89 50 57 121 99 109 86 106 100 69 70 117 99 51 100 108 99 105 66 57 79 119 48 75 102 81 48 75 68 81 112 109 100 87 53 106 100 71 108 118 98 105 66 106 99 109 86 104 100 71 86 82 100 87 86 122 100 71 108 118 98 105 104 120 100 87 86 122 100 71 108 118 98 105 119 103 89 50 57 121 99 109 86 106 100 67 119 103 100 51 74 118 98 109 100 122 76 67 66 108 101 72 66 115 89 87 53 104 100 71 108 118 98 105 119 103 98 87 86 48 89 83 65 57 73 72 116 57 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 72 115 103 98 51 66 48 97 87 57 117 99 121 119 103 89 50 57 121 99 109 86 106 100 69 70 117 99 51 100 108 99 105 66 57 73 68 48 103 98 87 70 114 90 85 57 119 100 71 108 118 98 110 77 111 89 50 57 121 99 109 86 106 100 67 119 103 100 51 74 118 98 109 100 122 75 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 98 51 66 48 97 87 57 117 99 121 53 115 90 87 53 110 100 71 103 103 80 67 65 48 73 72 120 56 73 71 78 118 99 110 74 108 89 51 82 66 98 110 78 51 90 88 73 103 80 84 48 57 73 67 48 120 75 83 66 55 68 81 111 103 73 67 65 103 99 109 86 48 100 88 74 117 73 71 53 49 98 71 119 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 101 119 48 75 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 76 65 48 75 73 67 65 103 73 71 57 119 100 71 108 118 98 110 77 115 68 81 111 103 73 67 65 103 89 50 57 121 99 109 86 106 100 69 70 117 99 51 100 108 99 105 119 78 67 105 65 103 73 67 66 108 101 72 66 115 89 87 53 104 100 71 108 118 98 105 119 78 67 105 65 103 73 67 65 117 76 105 53 116 90 88 82 104 68 81 111 103 73 72 48 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 86 71 108 48 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 111 98 87 57 107 100 87 120 108 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 120 100 87 86 122 100 71 108 118 98 110 77 103 80 83 66 98 88 84 115 78 67 103 48 75 73 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 112 100 71 86 116 76 67 66 112 98 109 82 108 101 67 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 71 78 118 98 110 78 48 73 72 100 121 98 50 53 110 86 71 108 48 98 71 86 122 73 68 48 103 89 110 86 112 98 71 82 88 99 109 57 117 90 49 82 112 100 71 120 108 99 121 104 112 100 71 86 116 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 119 103 77 121 107 55 68 81 111 78 67 105 65 103 73 67 66 106 98 50 53 122 100 67 66 50 89 88 74 112 89 87 53 48 99 121 65 57 73 70 115 78 67 105 65 103 73 67 65 103 73 71 68 67 118 48 78 49 119 54 70 115 73 71 82 108 73 71 86 122 100 71 70 122 73 72 66 104 98 71 70 105 99 109 70 122 73 71 78 115 89 88 90 108 73 71 86 122 100 77 79 104 73 71 70 122 98 50 78 112 89 87 82 104 73 71 69 103 73 105 82 55 97 88 82 108 98 83 53 106 98 71 86 104 98 108 82 112 100 71 120 108 102 83 73 47 89 67 119 78 67 105 65 103 73 67 65 103 73 71 68 67 118 49 70 49 119 54 107 103 99 72 74 118 89 50 86 122 98 121 66 107 90 83 66 48 99 109 70 105 89 87 112 118 73 71 78 49 89 110 74 108 73 71 86 115 73 71 78 118 98 110 82 108 98 109 108 107 98 121 65 105 74 72 116 112 100 71 86 116 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 76 65 48 75 73 67 65 103 73 67 65 103 89 77 75 47 85 88 88 68 113 83 66 111 89 88 76 68 114 87 70 122 73 72 66 104 99 109 69 103 90 50 86 122 100 71 108 118 98 109 70 121 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 83 53 122 99 71 120 112 100 67 103 110 73 67 99 112 76 110 78 115 97 87 78 108 75 68 65 115 78 67 107 117 97 109 57 112 98 105 103 110 73 67 99 112 102 83 73 47 89 65 48 75 73 67 65 103 73 70 48 55 68 81 111 78 67 105 65 103 73 67 66 50 89 88 74 112 89 87 53 48 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 120 100 87 86 122 100 71 108 118 98 108 82 108 101 72 81 115 73 72 90 104 99 109 108 104 98 110 82 74 98 109 82 108 101 67 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 67 65 103 89 50 57 117 99 51 81 103 99 88 86 108 99 51 82 112 98 50 52 103 80 83 66 106 99 109 86 104 100 71 86 82 100 87 86 122 100 71 108 118 98 105 103 78 67 105 65 103 73 67 65 103 73 67 65 103 99 88 86 108 99 51 82 112 98 50 53 85 90 88 104 48 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 112 100 71 86 116 76 109 78 115 90 87 70 117 86 71 108 48 98 71 85 115 68 81 111 103 73 67 65 103 73 67 65 103 73 72 100 121 98 50 53 110 86 71 108 48 98 71 86 122 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 103 84 71 69 103 97 50 86 53 100 50 57 121 90 67 65 105 74 72 116 112 100 71 86 116 76 109 78 115 90 87 70 117 83 50 86 53 100 50 57 121 90 72 78 98 77 70 48 103 102 72 119 103 97 88 82 108 98 83 53 106 98 71 86 104 98 108 82 112 100 71 120 108 102 83 73 103 90 88 78 48 119 54 69 103 89 88 78 118 89 50 108 104 90 71 69 103 89 83 66 108 99 50 85 103 89 50 57 117 100 71 86 117 97 87 82 118 76 109 65 115 68 81 111 103 73 67 65 103 73 67 65 103 73 72 115 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 122 98 51 86 121 89 50 86 74 90 68 111 103 97 88 82 108 98 83 53 112 90 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 48 90 87 49 119 98 71 70 48 90 84 111 103 73 109 116 108 101 88 100 118 99 109 81 116 97 87 82 108 98 110 82 112 90 110 107 116 89 50 57 117 100 71 86 117 100 67 73 115 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 100 109 70 121 97 87 70 117 100 68 111 103 89 67 82 55 97 87 53 107 90 88 104 57 76 83 82 55 100 109 70 121 97 87 70 117 100 69 108 117 90 71 86 52 102 87 65 78 67 105 65 103 73 67 65 103 73 67 65 103 102 81 48 75 73 67 65 103 73 67 65 103 75 84 115 78 67 103 48 75 73 67 65 103 73 67 65 103 97 87 89 103 75 72 70 49 90 88 78 48 97 87 57 117 75 83 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 99 121 53 119 100 88 78 111 75 72 70 49 90 88 78 48 97 87 57 117 75 84 115 78 67 105 65 103 73 67 65 103 73 72 48 78 67 105 65 103 73 67 66 57 75 84 115 78 67 105 65 103 102 83 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 70 49 90 88 78 48 97 87 57 117 99 122 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 89 110 86 112 98 71 82 76 90 88 108 51 98 51 74 107 85 88 86 108 99 51 82 112 98 50 53 122 75 71 49 118 90 72 86 115 90 83 119 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 99 88 86 108 99 51 82 112 98 50 53 122 73 68 48 103 87 49 48 55 68 81 111 78 67 105 65 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 117 90 109 57 121 82 87 70 106 97 67 103 111 97 88 82 108 98 83 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 71 108 48 90 87 48 117 89 50 120 108 89 87 53 76 90 88 108 51 98 51 74 107 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 114 90 88 108 51 98 51 74 107 76 67 66 114 90 88 108 51 98 51 74 107 83 87 53 107 90 88 103 112 73 68 48 43 73 72 115 78 67 105 65 103 73 67 65 103 73 71 78 118 98 110 78 48 73 72 100 121 98 50 53 110 83 50 86 53 100 50 57 121 90 72 77 103 80 83 66 105 100 87 108 115 90 70 100 121 98 50 53 110 83 50 86 53 100 50 57 121 90 72 77 111 97 50 86 53 100 50 57 121 90 67 119 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 115 73 68 77 112 79 119 48 75 68 81 111 103 73 67 65 103 73 67 66 106 98 50 53 122 100 67 66 50 89 88 74 112 89 87 53 48 99 121 65 57 73 70 115 78 67 105 65 103 73 67 65 103 73 67 65 103 89 77 75 47 85 88 88 68 113 83 66 106 98 50 53 106 90 88 66 48 98 121 66 104 99 71 70 121 90 87 78 108 73 71 70 122 98 50 78 112 89 87 82 118 73 71 70 115 73 71 78 118 98 110 82 108 98 109 108 107 98 121 65 105 74 72 116 112 100 71 86 116 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 103 119 114 57 68 100 99 79 104 98 67 66 107 90 83 66 108 99 51 82 104 99 121 66 119 89 87 120 104 89 110 74 104 99 121 66 106 98 71 70 50 90 83 66 108 98 109 78 104 97 109 69 103 98 87 86 113 98 51 73 103 89 50 57 117 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 80 50 65 115 68 81 111 103 73 67 65 103 73 67 65 103 73 71 68 67 118 49 70 49 119 54 107 103 100 71 86 116 89 83 66 122 90 83 66 48 99 109 70 105 89 87 112 104 73 71 86 117 73 71 86 115 73 71 78 118 98 110 82 108 98 109 108 107 98 121 65 105 74 72 116 112 100 71 86 116 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 68 81 111 103 73 67 65 103 73 67 66 100 79 119 48 75 68 81 111 103 73 67 65 103 73 67 66 50 89 88 74 112 89 87 53 48 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 120 100 87 86 122 100 71 108 118 98 108 82 108 101 72 81 115 73 72 90 104 99 109 108 104 98 110 82 74 98 109 82 108 101 67 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 67 65 103 73 67 66 106 98 50 53 122 100 67 66 120 100 87 86 122 100 71 108 118 98 105 65 57 73 71 78 121 90 87 70 48 90 86 70 49 90 88 78 48 97 87 57 117 75 65 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 86 71 86 52 100 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 114 90 88 108 51 98 51 74 107 76 65 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 72 100 121 98 50 53 110 83 50 86 53 100 50 57 121 90 72 77 115 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 89 69 120 104 73 72 66 104 98 71 70 105 99 109 69 103 89 50 120 104 100 109 85 103 73 105 82 55 97 50 86 53 100 50 57 121 90 72 48 105 73 71 86 122 100 77 79 104 73 71 70 122 98 50 78 112 89 87 82 104 73 71 69 103 90 88 78 48 90 83 66 106 98 50 53 48 90 87 53 112 90 71 56 117 89 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 73 67 66 122 98 51 86 121 89 50 86 74 90 68 111 103 97 88 82 108 98 83 53 112 90 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 65 103 73 72 82 108 98 88 66 115 89 88 82 108 79 105 65 105 97 50 86 53 100 50 57 121 90 67 49 105 101 83 49 48 97 88 82 115 90 83 73 115 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 73 67 66 50 89 88 74 112 89 87 53 48 79 105 66 103 74 72 116 114 90 88 108 51 98 51 74 107 83 87 53 107 90 88 104 57 76 83 82 55 100 109 70 121 97 87 70 117 100 69 108 117 90 71 86 52 102 87 65 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 57 68 81 111 103 73 67 65 103 73 67 65 103 73 67 107 55 68 81 111 78 67 105 65 103 73 67 65 103 73 67 65 103 97 87 89 103 75 72 70 49 90 88 78 48 97 87 57 117 75 83 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 99 88 86 108 99 51 82 112 98 50 53 122 76 110 66 49 99 50 103 111 99 88 86 108 99 51 82 112 98 50 52 112 79 119 48 75 73 67 65 103 73 67 65 103 73 67 66 57 68 81 111 103 73 67 65 103 73 67 66 57 75 84 115 78 67 105 65 103 73 67 66 57 75 84 115 78 67 105 65 103 102 83 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 70 49 90 88 78 48 97 87 57 117 99 122 115 78 67 110 48 78 67 103 48 75 90 110 86 117 89 51 82 112 98 50 52 103 89 110 86 112 98 71 82 78 98 50 82 49 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 111 98 87 57 107 100 87 120 108 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 119 103 89 87 120 115 84 87 57 107 100 87 120 108 99 121 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 120 100 87 86 122 100 71 108 118 98 110 77 103 80 83 66 98 88 84 115 78 67 103 48 75 73 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 53 109 98 51 74 70 89 87 78 111 75 67 104 112 100 71 86 116 76 67 66 112 98 109 82 108 101 67 107 103 80 84 52 103 101 119 48 75 73 67 65 103 73 71 78 118 98 110 78 48 73 72 100 121 98 50 53 110 84 87 57 107 100 87 120 108 99 121 65 57 73 71 74 49 97 87 120 107 86 51 74 118 98 109 100 78 98 50 82 49 98 71 86 122 75 71 49 118 90 72 86 115 90 83 119 103 89 87 120 115 84 87 57 107 100 87 120 108 99 121 119 103 77 121 107 55 68 81 111 78 67 105 65 103 73 67 66 106 98 50 53 122 100 67 66 50 89 88 74 112 89 87 53 48 99 121 65 57 73 70 115 78 67 105 65 103 73 67 65 103 73 71 68 67 118 48 69 103 99 88 88 68 113 83 68 68 111 88 74 108 89 83 66 119 90 88 74 48 90 87 53 108 89 50 85 103 90 87 119 103 89 50 57 117 100 71 86 117 97 87 82 118 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 80 50 65 115 68 81 111 103 73 67 65 103 73 67 66 103 119 114 57 70 98 105 66 120 100 99 79 112 73 71 51 68 115 50 82 49 98 71 56 103 90 87 53 106 89 87 112 104 73 71 49 108 97 109 57 121 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 80 50 65 115 68 81 111 103 73 67 65 103 73 67 66 103 119 114 57 69 119 55 78 117 90 71 85 103 89 50 120 104 99 50 108 109 97 87 78 104 99 115 79 116 89 88 77 103 90 87 119 103 89 50 57 117 100 71 86 117 97 87 82 118 73 67 73 107 101 50 108 48 90 87 48 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 80 50 65 78 67 105 65 103 73 67 66 100 79 119 48 75 68 81 111 103 73 67 65 103 100 109 70 121 97 87 70 117 100 72 77 117 90 109 57 121 82 87 70 106 97 67 103 111 99 88 86 108 99 51 82 112 98 50 53 85 90 88 104 48 76 67 66 50 89 88 74 112 89 87 53 48 83 87 53 107 90 88 103 112 73 68 48 43 73 72 115 78 67 105 65 103 73 67 65 103 73 71 78 118 98 110 78 48 73 72 70 49 90 88 78 48 97 87 57 117 73 68 48 103 89 51 74 108 89 88 82 108 85 88 86 108 99 51 82 112 98 50 52 111 68 81 111 103 73 67 65 103 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 86 71 86 52 100 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 90 50 86 48 84 87 57 107 100 87 120 108 84 71 70 105 90 87 119 111 98 87 57 107 100 87 120 108 75 83 119 78 67 105 65 103 73 67 65 103 73 67 65 103 100 51 74 118 98 109 100 78 98 50 82 49 98 71 86 122 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 103 82 88 78 108 73 71 78 118 98 110 82 108 98 109 108 107 98 121 66 108 99 51 84 68 111 83 66 106 98 71 70 122 97 87 90 112 89 50 70 107 98 121 66 107 90 87 53 48 99 109 56 103 90 71 86 115 73 71 51 68 115 50 82 49 98 71 56 103 90 71 85 103 74 72 116 110 90 88 82 78 98 50 82 49 98 71 86 77 89 87 74 108 98 67 104 116 98 50 82 49 98 71 85 112 102 83 53 103 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 55 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 99 50 57 49 99 109 78 108 83 87 81 54 73 71 108 48 90 87 48 117 97 87 81 115 68 81 111 103 73 67 65 103 73 67 65 103 73 67 65 103 100 71 86 116 99 71 120 104 100 71 85 54 73 67 74 116 98 50 82 49 98 71 85 116 89 110 107 116 100 71 108 48 98 71 85 105 76 65 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 72 90 104 99 109 108 104 98 110 81 54 73 71 65 107 101 50 108 117 90 71 86 52 102 83 48 107 101 51 90 104 99 109 108 104 98 110 82 74 98 109 82 108 101 72 49 103 68 81 111 103 73 67 65 103 73 67 65 103 73 72 48 78 67 105 65 103 73 67 65 103 73 67 107 55 68 81 111 78 67 105 65 103 73 67 65 103 73 71 108 109 73 67 104 120 100 87 86 122 100 71 108 118 98 105 107 103 101 119 48 75 73 67 65 103 73 67 65 103 73 67 66 120 100 87 86 122 100 71 108 118 98 110 77 117 99 72 86 122 97 67 104 120 100 87 86 122 100 71 108 118 98 105 107 55 68 81 111 103 73 67 65 103 73 67 66 57 68 81 111 103 73 67 65 103 102 83 107 55 68 81 111 103 73 72 48 112 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 120 100 87 86 122 100 71 108 118 98 110 77 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 81 88 66 119 98 71 108 106 89 88 82 112 98 50 53 82 100 87 86 122 100 71 108 118 98 110 77 111 98 87 57 107 100 87 120 108 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 120 100 87 86 122 100 71 108 118 98 110 77 103 80 83 66 98 88 84 115 78 67 103 48 75 73 67 66 109 98 51 73 103 75 71 120 108 100 67 66 112 98 109 82 108 101 67 65 57 73 68 65 55 73 71 108 117 90 71 86 52 73 68 119 103 98 87 57 107 100 87 120 108 83 88 82 108 98 88 77 117 98 71 86 117 90 51 82 111 73 67 48 103 77 84 115 103 97 87 53 107 90 88 103 103 75 122 48 103 77 83 107 103 101 119 48 75 73 67 65 103 73 71 78 118 98 110 78 48 73 71 78 49 99 110 74 108 98 110 81 103 80 83 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 49 116 112 98 109 82 108 101 70 48 55 68 81 111 103 73 67 65 103 76 121 56 103 75 72 90 104 99 109 108 104 89 109 120 108 73 71 53 108 101 72 81 103 101 87 69 103 98 109 56 103 98 109 86 106 90 88 78 104 99 109 108 104 75 81 48 75 73 67 65 103 73 71 78 118 98 110 78 48 73 72 100 121 98 50 53 110 86 71 108 48 98 71 86 122 73 68 48 103 89 110 86 112 98 71 82 88 99 109 57 117 90 49 82 112 100 71 120 108 99 121 104 106 100 88 74 121 90 87 53 48 76 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 119 103 77 121 107 55 68 81 111 78 67 105 65 103 73 67 66 106 98 50 53 122 100 67 66 50 89 88 74 112 89 87 53 48 99 121 65 57 73 70 115 78 67 105 65 103 73 67 65 103 73 71 68 67 118 49 70 49 119 54 107 103 100 115 79 116 90 71 86 118 73 71 82 108 98 67 66 116 119 55 78 107 100 87 120 118 73 67 82 55 90 50 86 48 84 87 57 107 100 87 120 108 84 71 70 105 90 87 119 111 98 87 57 107 100 87 120 108 75 88 48 103 100 72 74 104 100 71 70 121 119 54 49 104 99 121 66 119 89 88 74 104 73 71 70 119 99 109 86 117 90 71 86 121 73 72 78 118 89 110 74 108 73 67 73 107 101 50 78 49 99 110 74 108 98 110 81 117 89 50 120 108 89 87 53 76 90 88 108 51 98 51 74 107 99 49 115 119 88 83 66 56 102 67 66 106 100 88 74 121 90 87 53 48 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 76 65 48 75 73 67 65 103 73 67 65 103 89 77 75 47 81 51 88 68 111 87 119 103 90 71 85 103 90 88 78 48 98 51 77 103 89 50 57 117 100 71 86 117 97 87 82 118 99 121 66 107 90 88 78 106 99 109 108 105 90 83 66 116 90 87 112 118 99 105 66 115 98 121 66 120 100 87 85 103 97 71 70 106 90 83 65 105 74 72 116 106 100 88 74 121 90 87 53 48 76 109 78 115 90 87 70 117 86 71 108 48 98 71 86 57 73 106 57 103 76 65 48 75 73 67 65 103 73 67 65 103 89 70 78 112 73 72 86 117 73 71 86 116 99 71 120 108 89 87 82 118 73 71 53 108 89 50 86 122 97 88 82 104 73 71 78 118 98 109 57 106 90 88 73 103 73 105 82 55 89 51 86 121 99 109 86 117 100 67 53 106 98 71 86 104 98 107 116 108 101 88 100 118 99 109 82 122 87 122 66 100 73 72 120 56 73 71 78 49 99 110 74 108 98 110 81 117 89 50 120 108 89 87 53 85 97 88 82 115 90 88 48 105 76 67 68 67 118 51 70 49 119 54 107 103 100 115 79 116 90 71 86 118 73 71 82 108 89 109 85 103 89 50 57 117 99 51 86 115 100 71 70 121 80 50 65 78 67 105 65 103 73 67 66 100 79 119 48 75 68 81 111 103 73 67 65 103 100 109 70 121 97 87 70 117 100 72 77 117 90 109 57 121 82 87 70 106 97 67 103 111 99 88 86 108 99 51 82 112 98 50 53 85 90 88 104 48 76 67 66 50 89 88 74 112 89 87 53 48 83 87 53 107 90 88 103 112 73 68 48 43 73 72 115 78 67 105 65 103 73 67 65 103 73 71 78 118 98 110 78 48 73 72 70 49 90 88 78 48 97 87 57 117 73 68 48 103 89 51 74 108 89 88 82 108 85 88 86 108 99 51 82 112 98 50 52 111 68 81 111 103 73 67 65 103 73 67 65 103 73 72 70 49 90 88 78 48 97 87 57 117 86 71 86 52 100 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 89 51 86 121 99 109 86 117 100 67 53 106 98 71 86 104 98 108 82 112 100 71 120 108 76 65 48 75 73 67 65 103 73 67 65 103 73 67 66 51 99 109 57 117 90 49 82 112 100 71 120 108 99 121 119 78 67 105 65 103 73 67 65 103 73 67 65 103 89 69 86 122 90 83 66 50 119 54 49 107 90 87 56 103 89 51 86 105 99 109 85 103 90 88 78 108 73 71 78 118 98 109 78 108 99 72 82 118 73 71 82 108 98 110 82 121 98 121 66 107 90 87 119 103 98 99 79 122 90 72 86 115 98 121 65 107 101 50 100 108 100 69 49 118 90 72 86 115 90 85 120 104 89 109 86 115 75 71 49 118 90 72 86 115 90 83 108 57 76 109 65 115 68 81 111 103 73 67 65 103 73 67 65 103 73 72 115 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 122 98 51 86 121 89 50 86 74 90 68 111 103 89 51 86 121 99 109 86 117 100 67 53 112 90 67 119 78 67 105 65 103 73 67 65 103 73 67 65 103 73 67 66 48 90 87 49 119 98 71 70 48 90 84 111 103 73 109 70 119 99 71 120 112 89 50 70 48 97 87 57 117 76 87 74 53 76 87 116 108 101 88 100 118 99 109 81 105 76 65 48 75 73 67 65 103 73 67 65 103 73 67 65 103 73 72 90 104 99 109 108 104 98 110 81 54 73 71 65 107 101 50 108 117 90 71 86 52 102 83 48 107 101 51 90 104 99 109 108 104 98 110 82 74 98 109 82 108 101 72 49 103 68 81 111 103 73 67 65 103 73 67 65 103 73 72 48 78 67 105 65 103 73 67 65 103 73 67 107 55 68 81 111 78 67 105 65 103 73 67 65 103 73 71 108 109 73 67 104 120 100 87 86 122 100 71 108 118 98 105 107 103 101 119 48 75 73 67 65 103 73 67 65 103 73 67 66 120 100 87 86 122 100 71 108 118 98 110 77 117 99 72 86 122 97 67 104 120 100 87 86 122 100 71 108 118 98 105 107 55 68 81 111 103 73 67 65 103 73 67 66 57 68 81 111 103 73 67 65 103 102 83 107 55 68 81 111 103 73 72 48 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 99 88 86 108 99 51 82 112 98 50 53 122 79 119 48 75 102 81 48 75 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 82 108 90 72 86 119 90 86 70 49 90 88 78 48 97 87 57 117 99 121 104 120 100 87 86 122 100 71 108 118 98 110 77 103 80 83 66 98 88 83 119 103 98 87 57 107 100 87 120 108 73 68 48 103 73 109 49 118 90 72 86 115 90 83 73 112 73 72 115 78 67 105 65 103 89 50 57 117 99 51 81 103 99 50 86 108 98 105 65 57 73 71 53 108 100 121 66 84 90 88 81 111 75 84 115 78 67 103 48 75 73 67 66 121 90 88 82 49 99 109 52 103 99 88 86 108 99 51 82 112 98 50 53 122 68 81 111 103 73 67 65 103 76 109 90 112 98 72 82 108 99 105 104 67 98 50 57 115 90 87 70 117 75 81 48 75 73 67 65 103 73 67 53 109 97 87 120 48 90 88 73 111 75 72 70 49 90 88 78 48 97 87 57 117 75 83 65 57 80 105 66 55 68 81 111 103 73 67 65 103 73 67 66 106 98 50 53 122 100 67 66 122 97 87 100 117 89 88 82 49 99 109 85 103 80 83 66 103 74 72 116 120 100 87 86 122 100 71 108 118 98 105 53 120 100 87 86 122 100 71 108 118 98 110 49 56 102 67 82 55 99 88 86 108 99 51 82 112 98 50 52 117 98 51 66 48 97 87 57 117 99 119 48 75 73 67 65 103 73 67 65 103 73 67 65 117 98 87 70 119 75 67 104 118 99 72 82 112 98 50 52 112 73 68 48 43 73 71 53 118 99 109 49 104 98 71 108 54 90 85 90 118 99 107 78 118 98 88 66 104 99 109 85 111 98 51 66 48 97 87 57 117 75 83 107 78 67 105 65 103 73 67 65 103 73 67 65 103 76 109 112 118 97 87 52 111 73 110 119 105 75 88 49 103 79 119 48 75 68 81 111 103 73 67 65 103 73 67 66 112 90 105 65 111 99 50 86 108 98 105 53 111 89 88 77 111 99 50 108 110 98 109 70 48 100 88 74 108 75 83 107 103 101 119 48 75 73 67 65 103 73 67 65 103 73 67 66 121 90 88 82 49 99 109 52 103 90 109 70 115 99 50 85 55 68 81 111 103 73 67 65 103 73 67 66 57 68 81 111 78 67 105 65 103 73 67 65 103 73 72 78 108 90 87 52 117 89 87 82 107 75 72 78 112 90 50 53 104 100 72 86 121 90 83 107 55 68 81 111 103 73 67 65 103 73 67 66 121 90 88 82 49 99 109 52 103 100 72 74 49 90 84 115 78 67 105 65 103 73 67 66 57 75 81 48 75 73 67 65 103 73 67 53 116 89 88 65 111 75 72 70 49 90 88 78 48 97 87 57 117 76 67 66 112 98 109 82 108 101 67 107 103 80 84 52 103 75 72 115 78 67 105 65 103 73 67 65 103 73 67 52 117 76 110 70 49 90 88 78 48 97 87 57 117 76 65 48 75 73 67 65 103 73 67 65 103 97 87 81 54 73 71 100 108 100 70 70 49 90 88 78 48 97 87 57 117 83 87 81 111 98 87 57 107 100 87 120 108 76 67 66 112 98 109 82 108 101 67 107 78 67 105 65 103 73 67 66 57 75 83 107 55 68 81 112 57 68 81 111 78 67 109 90 49 98 109 78 48 97 87 57 117 73 71 74 49 97 87 120 107 85 88 86 108 99 51 82 112 98 50 53 67 89 87 53 114 82 109 57 121 84 87 57 107 100 87 120 108 75 71 49 118 90 72 86 115 90 83 107 103 101 119 48 75 73 67 66 106 98 50 53 122 100 67 66 116 98 50 82 49 98 71 86 74 100 71 86 116 99 121 65 57 73 71 100 108 100 69 78 115 90 87 70 117 84 87 57 107 100 87 120 108 83 88 82 108 98 88 77 111 98 87 57 107 100 87 120 108 75 84 115 78 67 105 65 103 89 50 57 117 99 51 81 103 89 87 120 115 84 87 57 107 100 87 120 108 99 121 65 57 73 71 82 108 90 72 86 119 90 86 78 48 99 109 108 117 90 51 77 111 98 71 86 104 99 109 53 112 98 109 100 68 98 50 53 48 90 87 53 48 76 109 49 104 99 67 103 111 97 88 82 108 98 83 107 103 80 84 52 103 97 88 82 108 98 83 53 116 98 50 82 49 98 71 85 112 75 84 115 78 67 103 48 75 73 67 66 112 90 105 65 111 73 87 49 118 90 72 86 115 90 85 108 48 90 87 49 122 76 109 120 108 98 109 100 48 97 67 107 103 101 119 48 75 73 67 65 103 73 72 74 108 100 72 86 121 98 105 66 55 68 81 111 103 73 67 65 103 73 67 66 48 97 88 82 115 90 84 111 103 89 70 70 49 97 88 111 103 90 71 85 103 74 72 116 110 90 88 82 78 98 50 82 49 98 71 86 77 89 87 74 108 98 67 104 116 98 50 82 49 98 71 85 112 102 87 65 115 68 81 111 103 73 67 65 103 73 67 66 120 100 87 86 122 100 71 108 118 98 110 77 54 73 70 116 100 68 81 111 103 73 67 65 103 102 84 115 78 67 105 65 103 102 81 48 75 68 81 111 103 73 71 78 118 98 110 78 48 73 72 70 49 90 88 78 48 97 87 57 117 99 121 65 57 73 71 82 108 90 72 86 119 90 86 70 49 90 88 78 48 97 87 57 117 99 121 103 78 67 105 65 103 73 67 66 98 68 81 111 103 73 67 65 103 73 67 65 117 76 105 53 105 100 87 108 115 90 69 49 118 90 72 86 115 90 86 70 49 90 88 78 48 97 87 57 117 99 121 104 116 98 50 82 49 98 71 85 115 73 71 49 118 90 72 86 115 90 85 108 48 90 87 49 122 76 67 66 104 98 71 120 78 98 50 82 49 98 71 86 122 75 81 48 75 73 67 65 103 73 70 48 115 68 81 111 103 73 67 65 103 98 87 57 107 100 87 120 108 68 81 111 103 73 67 107 55 68 81 111 78 67 105 65 103 99 109 86 48 100 88 74 117 73 72 115 78 67 105 65 103 73 67 66 48 97 88 82 115 90 84 111 103 89 70 70 49 97 88 111 103 90 71 85 103 74 72 116 110 90 88 82 78 98 50 82 49 98 71 86 77 89 87 74 108 98 67 104 116 98 50 82 49 98 71 85 112 102 87 65 115 68 81 111 103 73 67 65 103 100 71 57 48 89 87 120 66 100 109 70 112 98 71 70 105 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 54 73 72 70 49 90 88 78 48 97 87 57 117 99 121 53 115 90 87 53 110 100 71 103 115 68 81 111 103 73 67 65 103 99 88 86 108 99 51 82 112 98 50 53 122 68 81 111 103 73 72 48 55 68 81 112 57 68 81 111 78 67 109 86 52 99 71 57 121 100 67 66 109 100 87 53 106 100 71 108 118 98 105 66 110 90 88 82 78 98 50 82 49 98 71 86 82 100 87 108 54 75 71 49 118 90 72 86 115 90 83 119 103 99 88 86 108 99 51 82 112 98 50 53 68 98 51 86 117 100 67 65 57 73 68 69 119 75 83 66 55 68 81 111 103 73 71 78 118 98 110 78 48 73 72 70 49 97 88 111 103 80 83 66 105 100 87 108 115 90 70 70 49 90 88 78 48 97 87 57 117 81 109 70 117 97 48 90 118 99 107 49 118 90 72 86 115 90 83 104 116 98 50 82 49 98 71 85 112 79 119 48 75 68 81 111 103 73 72 74 108 100 72 86 121 98 105 66 55 68 81 111 103 73 67 65 103 100 71 108 48 98 71 85 54 73 72 70 49 97 88 111 117 100 71 108 48 98 71 85 115 68 81 111 103 73 67 65 103 100 71 57 48 89 87 120 66 100 109 70 112 98 71 70 105 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 54 73 72 70 49 97 88 111 117 100 71 57 48 89 87 120 66 100 109 70 112 98 71 70 105 98 71 86 82 100 87 86 122 100 71 108 118 98 110 77 115 68 81 111 103 73 67 65 103 99 88 86 108 99 51 82 112 98 50 53 122 79 105 66 122 89 87 49 119 98 71 86 84 97 88 112 108 75 72 70 49 97 88 111 117 99 88 86 108 99 51 82 112 98 50 53 122 76 67 66 120 100 87 86 122 100 71 108 118 98 107 78 118 100 87 53 48 75 81 48 75 73 67 66 57 79 119 48 75 102 81 48 75 34 125
Write-Host "SUBIDO OK SHA: "
