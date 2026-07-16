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
    title: "Vídeo 1.9.21 Facturación de albarán de compras por selección + facturar + añadir albaranes a factura",
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
    keywords: ["administración", "añadir", "albaranes", "factura"]
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

export const moduleQuizzes = {
  sales: {
    title: "Quiz de Ventas",
    questions: [
      {
        id: "sales-q1",
        question: "¿Qué documento se suele registrar antes de un pedido de ventas?",
        options: ["Factura", "Presupuesto", "Albarán", "Cobro"],
        correctAnswer: 1,
        explanation: "El presupuesto normalmente precede al pedido en el flujo comercial."
      },
      {
        id: "sales-q2",
        question: "¿Qué acción permite convertir un bastidor en unidad demo?",
        options: ["Cambiar tarifa", "Cambiar propietario", "Convertir a demo", "Cerrar operación"],
        correctAnswer: 2,
        explanation: "Hay un contenido específico sobre convertir un bastidor en unidad demo."
      },
      {
        id: "sales-q3",
        question: "¿Qué proceso está relacionado con el cobro de una factura?",
        options: ["create_customer", "create_payment", "create_quote", "create_order"],
        correctAnswer: 1,
        explanation: "El cobro de factura pertenece al flujo de pagos."
      },
      {
        id: "sales-q4",
        question: "¿Qué documento se graba después del presupuesto en un flujo comercial habitual?",
        options: ["Pedido", "Asiento contable", "Arqueo", "Remesa"],
        correctAnswer: 0,
        explanation: "Después del presupuesto suele venir el pedido."
      },
      {
        id: "sales-q5",
        question: "¿Qué contenido trata sobre gestión de precios y tarifas?",
        options: ["Panel de Venta Directa", "Gestión de precios y tarifas de ventas", "Alta de entidad", "Cobro de factura"],
        correctAnswer: 1,
        explanation: "Ese vídeo está centrado en precios y tarifas de ventas."
      },
      {
        id: "sales-q6",
        question: "¿Qué operación está más relacionada con datos de cliente y entidad?",
        options: ["Alta de entidad", "Facturación en tanda", "Añadir ORs a factura", "Tarifas de ventas"],
        correctAnswer: 0,
        explanation: "El alta de entidad forma parte del trabajo sobre clientes."
      },
      {
        id: "sales-q7",
        question: "¿Qué acción pertenece al flujo de create_order?",
        options: ["Grabación de un pedido de ventas", "Cobro de anticipo", "Alta de entidad", "Cambio de color"],
        correctAnswer: 0,
        explanation: "El proceso create_order corresponde al pedido de ventas."
      },
      {
        id: "sales-q8",
        question: "¿Qué vídeo está relacionado con vehículos de ocasión?",
        options: ["Pasos de una operación comercial con VO", "Tarifas de ventas", "Cobro de factura botón", "Artículos y tarifa"],
        correctAnswer: 0,
        explanation: "VO hace referencia a vehículo de ocasión."
      },
      {
        id: "sales-q9",
        question: "¿Qué proceso corresponde a la grabación de un presupuesto?",
        options: ["create_invoice", "create_quote", "create_payment", "create_customer"],
        correctAnswer: 1,
        explanation: "El presupuesto está asociado al proceso create_quote."
      },
      {
        id: "sales-q10",
        question: "¿Qué operación pertenece al área de pagos en ventas?",
        options: ["Creación cobro de anticipo", "Alta de entidad", "Gestión de accesorios", "Asignar bastidores"],
        correctAnswer: 0,
        explanation: "El cobro de anticipo forma parte del área de pagos."
      }
    ]
  },

  workshop: {
    title: "Quiz de Taller",
    questions: [
      {
        id: "workshop-q1",
        question: "¿Qué puede crearse a partir de una cita en taller?",
        options: ["Una remesa", "Una OR", "Una factura de compras", "Una cuenta de tesorería"],
        correctAnswer: 1,
        explanation: "Existe un contenido específico de alta de OR desde cita."
      },
      {
        id: "workshop-q2",
        question: "¿Qué elemento aparece en la gestión diaria del taller?",
        options: ["Agenda y calendarios", "Nóminas", "Tesorería", "Asientos contables"],
        correctAnswer: 0,
        explanation: "Uno de los vídeos trata sobre agenda de taller y calendarios."
      },
      {
        id: "workshop-q3",
        question: "¿Qué significa OR en el contexto del taller?",
        options: ["Orden de reparación", "Orden de reposición", "Operación resumida", "Oferta rápida"],
        correctAnswer: 0,
        explanation: "En taller, OR se usa como orden de reparación."
      },
      {
        id: "workshop-q4",
        question: "¿Qué contenido está relacionado con siniestros?",
        options: ["Gestión de siniestros", "Alta de entidad", "Crear inmovilizado", "Cobro de factura"],
        correctAnswer: 0,
        explanation: "Hay un vídeo específico de gestión de siniestros."
      },
      {
        id: "workshop-q5",
        question: "¿Qué contenido trata sobre el personal técnico del taller?",
        options: ["Fichaje de los mecánicos", "Creación de remesa de nóminas", "Relaciones de entidades", "Riesgo de entidades"],
        correctAnswer: 0,
        explanation: "El fichaje de los mecánicos es un contenido propio del módulo taller."
      },
      {
        id: "workshop-q6",
        question: "¿Qué opción describe una cita con vehículo de cortesía?",
        options: ["Alta de cita con vehículo de cortesía", "Alta de remesa", "Alta de servicio", "Panel de Venta Directa"],
        correctAnswer: 0,
        explanation: "Ese vídeo pertenece al flujo de citas de taller."
      },
      {
        id: "workshop-q7",
        question: "¿Qué contenido está relacionado con tiempos o baremos?",
        options: ["Alta de OR Tempario y usos", "Alta de OR Facturación", "Renovación de una cita", "Agenda de taller"],
        correctAnswer: 0,
        explanation: "El tempario se trata en un vídeo específico del módulo."
      },
      {
        id: "workshop-q8",
        question: "¿Qué puede ocurrir antes de crear una OR desde cita?",
        options: ["Registrar una cita", "Crear una remesa", "Cerrar caja", "Crear inmovilizado"],
        correctAnswer: 0,
        explanation: "Primero se trabaja la cita y luego puede derivarse en una OR."
      },
      {
        id: "workshop-q9",
        question: "¿Qué contenido corresponde a un vehículo cliente en OR?",
        options: ["Alta de OR Vehículo Cliente", "Alta de cuentas de tesorería", "Facturación en tanda", "Traspaso de vehículo"],
        correctAnswer: 0,
        explanation: "Ese contenido forma parte del bloque de ORs."
      },
      {
        id: "workshop-q10",
        question: "¿Qué tema pertenece claramente al módulo taller?",
        options: ["Gestión de franquicias", "Balance de sumas y saldos", "Alta de conceptos de tesorería", "Remesa de nóminas"],
        correctAnswer: 0,
        explanation: "La gestión de franquicias aparece en el módulo de taller."
      }
    ]
  },

  administracion: {
    title: "Quiz de Administración",
    questions: [
      {
        id: "administracion-q1",
        question: "¿Qué acción pertenece al área de tesorería?",
        options: ["Alta de cuentas de tesorería", "Alta de OR", "Traspaso de vehículo", "Agenda de taller"],
        correctAnswer: 0,
        explanation: "El módulo incluye alta de cuentas de tesorería."
      },
      {
        id: "administracion-q2",
        question: "¿Qué documento puede facturarse en tanda en administración?",
        options: ["Albaranes de compras", "Citas de taller", "Vehículos demo", "Clientes"],
        correctAnswer: 0,
        explanation: "Hay un vídeo sobre facturación en tanda de albaranes de compras."
      },
      {
        id: "administracion-q3",
        question: "¿Qué operación está relacionada con contabilidad?",
        options: ["Crear asientos contables", "Alta de cita", "Cambio de modelo", "Traspaso entre almacenes"],
        correctAnswer: 0,
        explanation: "Crear asientos contables pertenece al área contable."
      },
      {
        id: "administracion-q4",
        question: "¿Qué acción está asociada al cierre diario de caja?",
        options: ["Arqueo y cierre de caja", "Alta de OR", "Renovación de cita", "Cambio de propietario"],
        correctAnswer: 0,
        explanation: "El arqueo y cierre de cuentas de tesorería caja es parte del módulo."
      },
      {
        id: "administracion-q5",
        question: "¿Qué contenido trata sobre pagos periódicos de personal?",
        options: ["Creación de remesa de nóminas", "Agenda de taller", "Alta de bastidor demo", "Tarifas de ventas"],
        correctAnswer: 0,
        explanation: "La remesa de nóminas pertenece a administración."
      },
      {
        id: "administracion-q6",
        question: "¿Qué opción está vinculada a facturas de compras y gastos?",
        options: ["Alta de factura de gastos", "Alta de OR Facturación", "Cobro de factura botón", "Alta de entidad"],
        correctAnswer: 0,
        explanation: "Ese contenido es propio del área de administración."
      },
      {
        id: "administracion-q7",
        question: "¿Qué consulta contable aparece en el módulo?",
        options: ["Balance de sumas y saldos", "Agenda de taller", "Panel de Venta Directa", "Cambio de modelo"],
        correctAnswer: 0,
        explanation: "El balance de sumas y saldos es una consulta contable."
      },
      {
        id: "administracion-q8",
        question: "¿Qué acción se relaciona con activos fijos?",
        options: ["Crear inmovilizado", "Alta de cita", "Traspaso entre almacenes", "Gestión de accesorios"],
        correctAnswer: 0,
        explanation: "Crear inmovilizado pertenece a la parte contable/administrativa."
      },
      {
        id: "administracion-q9",
        question: "¿Qué operación está ligada a anticipos?",
        options: ["Aplicación de anticipos asociados a la entidad", "Alta de OR Tempario", "Agenda y calendarios", "Tarifas de ventas"],
        correctAnswer: 0,
        explanation: "Ese vídeo trata directamente la gestión de anticipos."
      },
      {
        id: "administracion-q10",
        question: "¿Qué acción puede hacerse sobre una factura de venta?",
        options: ["Abonar factura de ventas", "Alta de franquicia", "Cambiar bastidor", "Crear cita con cortesía"],
        correctAnswer: 0,
        explanation: "Abonar factura de ventas pertenece a administración."
      }
    ]
  },

  stock: {
    title: "Quiz de Stock",
    questions: [
      {
        id: "stock-q1",
        question: "¿Qué operación pertenece al módulo de stock?",
        options: ["Movimiento de stock", "Alta de OR", "Alta de cliente", "Cierre de caja"],
        correctAnswer: 0,
        explanation: "Movimiento de stock forma parte del módulo stock."
      },
      {
        id: "stock-q2",
        question: "¿Qué acción permite mover mercancía entre ubicaciones?",
        options: ["Traspaso entre almacenes", "Abonar factura", "Crear remesa", "Crear inmovilizado"],
        correctAnswer: 0,
        explanation: "El traspaso entre almacenes es propio de stock."
      },
      {
        id: "stock-q3",
        question: "¿Qué contenido sirve para revisar existencias?",
        options: ["Consultar stock", "Alta de entidad", "Cobro de factura", "Agenda de taller"],
        correctAnswer: 0,
        explanation: "Consultar stock es uno de los contenidos base del módulo."
      },
      {
        id: "stock-q4",
        question: "¿Cuál de estas acciones pertenece al control de inventario?",
        options: ["Movimiento de stock", "Alta de cita", "Crear asientos contables", "Cobro de anticipo"],
        correctAnswer: 0,
        explanation: "Los movimientos de stock son operaciones de inventario."
      },
      {
        id: "stock-q5",
        question: "¿Qué operación está más relacionada con logística interna?",
        options: ["Traspaso entre almacenes", "Alta de servicio", "Facturación de compras", "Fichaje de mecánicos"],
        correctAnswer: 0,
        explanation: "El traspaso entre almacenes mueve stock entre ubicaciones."
      },
      {
        id: "stock-q6",
        question: "¿Qué módulo usarías para revisar inventario disponible?",
        options: ["Stock", "Taller", "Administración", "Support"],
        correctAnswer: 0,
        explanation: "La revisión de inventario corresponde al módulo stock."
      },
      {
        id: "stock-q7",
        question: "¿Qué contenido está orientado a una consulta y no a una creación?",
        options: ["Consultar stock", "Alta de cuentas de tesorería", "Alta de OR", "Alta de entidad"],
        correctAnswer: 0,
        explanation: "Consultar stock es claramente una consulta."
      },
      {
        id: "stock-q8",
        question: "¿Qué acción afecta directamente a la ubicación de artículos?",
        options: ["Traspaso entre almacenes", "Crear remesa de nóminas", "Aplicación de anticipos", "Cambio de propietario"],
        correctAnswer: 0,
        explanation: "El traspaso modifica la ubicación del stock."
      },
      {
        id: "stock-q9",
        question: "¿Qué vídeo del módulo stock está relacionado con entradas o salidas internas?",
        options: ["Movimiento de stock", "Centro de ayuda", "Agenda de taller", "Alta de cita"],
        correctAnswer: 0,
        explanation: "El movimiento de stock cubre cambios internos de existencias."
      },
      {
        id: "stock-q10",
        question: "¿Cuál de estas opciones pertenece al módulo stock y no al de ventas?",
        options: ["Consultar stock", "Grabación de un pedido de ventas", "Cobro de factura botón", "Alta de entidad"],
        correctAnswer: 0,
        explanation: "Consultar stock pertenece al módulo stock."
      }
    ]
  },

  vehicles: {
    title: "Quiz de Vehículos",
    questions: [
      {
        id: "vehicles-q1",
        question: "¿Qué acción aparece en el módulo de vehículos?",
        options: ["Traspaso de vehículo", "Alta de tesorería", "Crear remesa", "Agenda de taller"],
        correctAnswer: 0,
        explanation: "El contenido del módulo vehicles incluye traspaso de vehículo."
      },
      {
        id: "vehicles-q2",
        question: "¿Qué módulo usarías para un cambio de posesión o ubicación de un vehículo?",
        options: ["Vehicles", "Support", "Administración", "Taller"],
        correctAnswer: 0,
        explanation: "El módulo vehicles agrupa operaciones del vehículo."
      },
      {
        id: "vehicles-q3",
        question: "¿Qué operación está directamente ligada a un vehículo completo y no a stock genérico?",
        options: ["Traspaso de vehículo", "Movimiento de stock", "Creación de remesa", "Arqueo de caja"],
        correctAnswer: 0,
        explanation: "El traspaso de vehículo actúa sobre la unidad de vehículo."
      },
      {
        id: "vehicles-q4",
        question: "¿Cuál de estas acciones corresponde al módulo vehicles?",
        options: ["Traspaso de vehículo", "Alta de OR Facturación", "Alta de servicio", "Riesgo de entidades"],
        correctAnswer: 0,
        explanation: "Es el contenido existente en ese módulo."
      },
      {
        id: "vehicles-q5",
        question: "¿Qué área funcional se centra en unidades de vehículo?",
        options: ["Vehicles", "Tesorería", "Contabilidad", "Nóminas"],
        correctAnswer: 0,
        explanation: "Vehicles se centra en operaciones sobre vehículos."
      },
      {
        id: "vehicles-q6",
        question: "¿Qué opción describe mejor el módulo vehicles?",
        options: ["Gestiona operaciones sobre vehículos", "Gestiona cierres de caja", "Gestiona citas de taller", "Gestiona remesas bancarias"],
        correctAnswer: 0,
        explanation: "El contenido visible del módulo se refiere a traspasos de vehículo."
      },
      {
        id: "vehicles-q7",
        question: "¿Cuál de estas tareas no pertenece a administración sino a vehicles?",
        options: ["Traspaso de vehículo", "Crear inmovilizado", "Alta de factura de gastos", "Crear asientos contables"],
        correctAnswer: 0,
        explanation: "El traspaso de vehículo pertenece al módulo vehicles."
      },
      {
        id: "vehicles-q8",
        question: "¿Qué contenido usarías para mover una unidad entre contextos o responsables?",
        options: ["Traspaso de vehículo", "Cobro de anticipo", "Agenda de taller", "Relaciones de entidades"],
        correctAnswer: 0,
        explanation: "El traspaso de vehículo responde a esa necesidad."
      },
      {
        id: "vehicles-q9",
        question: "¿Qué módulo no está centrado en documentos contables ni pagos?",
        options: ["Vehicles", "Administración", "Sales", "Support"],
        correctAnswer: 0,
        explanation: "Vehicles se centra en la unidad vehículo."
      },
      {
        id: "vehicles-q10",
        question: "¿Qué contenido hay actualmente en vehicles según tu archivo?",
        options: ["Traspaso de vehículo", "Centro de ayuda", "Alta de entidad", "Facturación en tanda"],
        correctAnswer: 0,
        explanation: "El contenido existente en vehicles es traspaso de vehículo."
      }
    ]
  }
};

export function getModuleQuiz(module) {
  return moduleQuizzes[module] || null;
}
