import { sources } from "./sources";

function getGitbookUrl(module) {
  const modulePath = sources.gitbook.modules[module] ?? "";
  // Si quieres eliminar solo una barra inicial:
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

// Helper functions
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
    module: "sales",
    title: "Quiz de Ventas",
    description: "Repaso del proceso comercial, presupuestos, pedidos y facturación de ventas.",
    questions: [
      {
        id: "sales-1",
        question: "¿Cuál es la finalidad principal de un presupuesto de ventas en Winmotor?",
        options: [
          "Presentar al cliente una propuesta económica antes de cerrar la operación",
          "Cerrar automáticamente la factura",
          "Eliminar el pedido de ventas",
          "Generar un asiento contable sin validación"
        ],
        correctAnswer: 0,
        explanation: "El presupuesto permite plantear al cliente la propuesta económica antes de ejecutar o confirmar la venta."
      },
      {
        id: "sales-2",
        question: "¿Qué ventaja tiene registrar correctamente un pedido de ventas?",
        options: [
          "Permite dar seguimiento comercial y documental a la operación",
          "Evita identificar al cliente",
          "Sustituye la ficha del vehículo",
          "Impide emitir albaranes"
        ],
        correctAnswer: 0,
        explanation: "El pedido estructura la operación y facilita su seguimiento posterior."
      },
      {
        id: "sales-3",
        question: "¿Por qué es importante revisar precios y tarifas antes de facturar?",
        options: [
          "Porque evita errores de importes y mejora la fiabilidad del documento",
          "Porque bloquea el historial del cliente",
          "Porque sustituye el proceso de cobro",
          "Porque elimina el stock"
        ],
        correctAnswer: 0,
        explanation: "Revisar tarifas y precios ayuda a emitir documentos correctos y coherentes."
      },
      {
        id: "sales-4",
        question: "¿Qué aporta una correcta gestión de anticipos o cobros en ventas?",
        options: [
          "Mayor control financiero y trazabilidad de la operación",
          "Eliminar la necesidad de factura",
          "Cerrar automáticamente todas las órdenes",
          "Evitar usar cuentas bancarias"
        ],
        correctAnswer: 0,
        explanation: "Los cobros y anticipos bien registrados mejoran el control administrativo y financiero."
      },
      {
        id: "sales-5",
        question: "¿Qué debe asegurarse antes de emitir una factura de ventas?",
        options: [
          "Que conceptos, importes y datos de la operación sean correctos",
          "Solo que exista conexión a internet",
          "Solo que el comercial esté asignado",
          "Que el color del vehículo coincida"
        ],
        correctAnswer: 0,
        explanation: "La revisión final evita errores y garantiza consistencia documental."
      }
    ]
  },

  workshop: {
    module: "workshop",
    title: "Quiz de Taller",
    description: "Repaso de citas, apertura de OR y gestión operativa del taller.",
    questions: [
      {
        id: "workshop-1",
        question: "¿Qué representa una OR en el módulo de taller?",
        options: [
          "El documento operativo que organiza la intervención sobre el vehículo",
          "Una factura ya cobrada",
          "Un pedido a proveedor",
          "Una remesa bancaria"
        ],
        correctAnswer: 0,
        explanation: "La OR centraliza trabajos, tiempos, piezas y seguimiento del expediente."
      },
      {
        id: "workshop-2",
        question: "¿Qué ventaja tiene crear una OR desde una cita previa?",
        options: [
          "Aprovecha la información ya registrada y agiliza la recepción",
          "Elimina la necesidad de cliente",
          "Impide usar historial",
          "Bloquea la agenda"
        ],
        correctAnswer: 0,
        explanation: "Partir de una cita permite ahorrar tiempo y mantener coherencia en el flujo."
      },
      {
        id: "workshop-3",
        question: "¿Por qué es importante reflejar correctamente el estado de la OR?",
        options: [
          "Porque muestra la situación real del trabajo dentro del taller",
          "Porque sustituye la diagnosis",
          "Porque elimina las piezas cargadas",
          "Porque evita facturar"
        ],
        correctAnswer: 0,
        explanation: "El estado de la OR sirve para conocer el avance real del expediente."
      },
      {
        id: "workshop-4",
        question: "¿Qué aporta una agenda de taller bien gestionada?",
        options: [
          "Mejor planificación de carga de trabajo y recursos",
          "Eliminar el historial del vehículo",
          "Sustituir las OR",
          "Impedir asignaciones"
        ],
        correctAnswer: 0,
        explanation: "La agenda ayuda a organizar tiempos, entradas y recursos del taller."
      },
      {
        id: "workshop-5",
        question: "¿Qué debe verificarse antes de cerrar una OR?",
        options: [
          "Que los trabajos, materiales y datos estén correctamente registrados",
          "Solo el nombre del cliente",
          "Solo la marca del vehículo",
          "Únicamente el stock del almacén"
        ],
        correctAnswer: 0,
        explanation: "La revisión final evita errores antes del cierre administrativo y económico."
      }
    ]
  },

  administracion: {
    module: "administracion",
    title: "Quiz de Administración",
    description: "Repaso de tesorería, facturas, remesas y procesos administrativos.",
    questions: [
      {
        id: "administracion-1",
        question: "¿Qué objetivo tiene registrar correctamente una factura de gastos?",
        options: [
          "Controlar documental y económicamente un gasto de la empresa",
          "Abrir una OR de taller",
          "Cerrar automáticamente una venta",
          "Eliminar los impuestos"
        ],
        correctAnswer: 0,
        explanation: "La factura de gastos permite mantener control contable y administrativo."
      },
      {
        id: "administracion-2",
        question: "¿Qué ventaja tiene una correcta gestión de tesorería?",
        options: [
          "Mejora el control de cobros, pagos y saldos",
          "Impide emitir remesas",
          "Sustituye la contabilidad",
          "Evita registrar servicios"
        ],
        correctAnswer: 0,
        explanation: "La tesorería bien organizada ayuda al control financiero diario."
      },
      {
        id: "administracion-3",
        question: "¿Para qué sirve una remesa de cobros o pagos?",
        options: [
          "Para agrupar operaciones financieras y gestionarlas de forma ordenada",
          "Para abrir clientes nuevos",
          "Para generar citas de taller",
          "Para sustituir el presupuesto"
        ],
        correctAnswer: 0,
        explanation: "Las remesas ayudan a tramitar varios movimientos de forma estructurada."
      },
      {
        id: "administracion-4",
        question: "¿Por qué es importante revisar importes e impuestos antes de confirmar documentos?",
        options: [
          "Porque evita errores fiscales y operativos",
          "Porque elimina la contabilidad",
          "Porque impide registrar proveedores",
          "Porque sustituye la aprobación"
        ],
        correctAnswer: 0,
        explanation: "La validación previa evita incidencias posteriores en gestión y fiscalidad."
      },
      {
        id: "administracion-5",
        question: "¿Qué aporta una administración bien registrada en el sistema?",
        options: [
          "Mayor trazabilidad, control y consulta posterior",
          "Menos información para el usuario",
          "Imposibilidad de auditoría",
          "Desvincular operaciones del expediente"
        ],
        correctAnswer: 0,
        explanation: "El registro correcto permite control documental, financiero y seguimiento."
      }
    ]
  },

  stock: {
    module: "stock",
    title: "Quiz de Stock",
    description: "Repaso de consulta de stock, movimientos y traspasos entre almacenes.",
    questions: [
      {
        id: "stock-1",
        question: "¿Qué permite una consulta de stock bien realizada?",
        options: [
          "Conocer disponibilidad real de artículos o materiales",
          "Cerrar facturas pendientes",
          "Emitir remesas bancarias",
          "Eliminar referencias"
        ],
        correctAnswer: 0,
        explanation: "Consultar stock correctamente ayuda a planificar operaciones y evitar errores."
      },
      {
        id: "stock-2",
        question: "¿Por qué es importante registrar un movimiento de stock?",
        options: [
          "Porque mantiene actualizado el inventario",
          "Porque sustituye al cliente",
          "Porque elimina el pedido",
          "Porque bloquea el almacén"
        ],
        correctAnswer: 0,
        explanation: "Los movimientos reflejan entradas, salidas o ajustes reales del almacén."
      },
      {
        id: "stock-3",
        question: "¿Qué aporta un traspaso entre almacenes bien documentado?",
        options: [
          "Trazabilidad y control de ubicación del material",
          "Eliminar la referencia del artículo",
          "Sustituir el proceso de compra",
          "Evitar la consulta de disponibilidad"
        ],
        correctAnswer: 0,
        explanation: "Un traspaso correcto permite saber dónde está el material y mantener coherencia de stock."
      }
    ]
  },

  vehicles: {
    module: "vehicles",
    title: "Quiz de Vehículos",
    description: "Repaso básico de operaciones relacionadas con vehículos.",
    questions: [
      {
        id: "vehicles-1",
        question: "¿Qué debe garantizar un traspaso de vehículo bien registrado?",
        options: [
          "La correcta trazabilidad documental y operativa del vehículo",
          "La eliminación del historial",
          "La anulación automática del cliente",
          "La desactivación del módulo comercial"
        ],
        correctAnswer: 0,
        explanation: "El traspaso debe mantener coherencia de datos y seguimiento del vehículo."
      },
      {
        id: "vehicles-2",
        question: "¿Por qué es importante identificar correctamente el vehículo en el sistema?",
        options: [
          "Para evitar errores en operaciones, historial y documentación",
          "Para cerrar facturas automáticamente",
          "Para sustituir el stock",
          "Para desactivar soporte"
        ],
        correctAnswer: 0,
        explanation: "La identificación correcta evita fallos en todo el circuito administrativo y operativo."
      },
      {
        id: "vehicles-3",
        question: "¿Qué aporta mantener actualizado el historial del vehículo?",
        options: [
          "Mejor seguimiento técnico y administrativo",
          "Menos trazabilidad",
          "Imposibilidad de consulta",
          "Eliminar operaciones anteriores"
        ],
        correctAnswer: 0,
        explanation: "El historial actualizado facilita contexto y continuidad en la gestión."
      }
    ]
  },

  support: {
    module: "support",
    title: "Quiz de Soporte",
    description: "Repaso de consultas, incidencias y resolución de casos de soporte.",
    questions: [
      {
        id: "support-1",
        question: "¿Qué finalidad tiene el módulo de soporte dentro de la academia?",
        options: [
          "Ayudar a resolver incidencias y dudas frecuentes del uso del sistema",
          "Facturar automáticamente todos los expedientes",
          "Abrir recepciones sin cliente",
          "Crear órdenes sin validación"
        ],
        correctAnswer: 0,
        explanation: "El soporte sirve para orientar al usuario ante problemas reales y consultas operativas."
      },
      {
        id: "support-2",
        question: "¿Qué valor tiene documentar bien una incidencia?",
        options: [
          "Facilita su análisis, seguimiento y resolución",
          "Evita que otros usuarios la entiendan",
          "Impide usar ayuda contextual",
          "Elimina el historial del caso"
        ],
        correctAnswer: 0,
        explanation: "Una buena descripción permite resolver antes y con menos errores."
      },
      {
        id: "support-3",
        question: "¿Qué se busca al consultar artículos o recursos de ayuda?",
        options: [
          "Encontrar una guía aplicable al problema detectado",
          "Cerrar la sesión del sistema",
          "Modificar el módulo de facturación",
          "Borrar el expediente del cliente"
        ],
        correctAnswer: 0,
        explanation: "Los recursos de ayuda deben orientar al usuario hacia una solución concreta."
      },
      {
        id: "support-4",
        question: "¿Por qué es útil clasificar las incidencias por tipo o síntoma?",
        options: [
          "Porque mejora la localización de soluciones y patrones repetidos",
          "Porque reemplaza todos los procesos del taller",
          "Porque evita usar búsquedas",
          "Porque desactiva el soporte"
        ],
        correctAnswer: 0,
        explanation: "Clasificar bien mejora la reutilización del conocimiento."
      },
      {
        id: "support-5",
        question: "¿Qué mejora aporta una base de soporte bien organizada?",
        options: [
          "Reduce tiempos de respuesta y dependencia de ayuda externa",
          "Elimina la necesidad de formación",
          "Impide abrir órdenes",
          "Sustituye al almacén"
        ],
        correctAnswer: 0,
        explanation: "Una base de conocimiento útil acelera la resolución de dudas e incidencias."
      }
    ]
  }
};

export function getModuleQuiz(module) {
  return moduleQuizzes[module] || null;
}
