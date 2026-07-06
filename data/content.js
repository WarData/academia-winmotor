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
  return learningContent.filter(item => item.module === module);
}

export function getContentById(id) {
  return learningContent.find(item => item.id === id);
}

export function getFlowItems(module) {
  return learningContent.filter(item => item.module === module);
}

export function getStepInstructions(processId) {
  return processSteps[processId] || [];
}

export function resolveKnowledgeResource(contentId) {
  const item = getContentById(contentId);
  if (!item) return null;
  return { type: item.type, url: item.url };
}
export function getFirstFlowItem(module) {
  // Prioriza los flujos definidos explícitamente
  const flow = moduleLearningFlows[module];
  if (flow && flow.length > 0) {
    return flow[0];
  }

  // Si no hay flujo definido, usa el primer contenido del módulo
  const items = getFlowItems(module);
  return items.length > 0 ? items[0] : null;
}


// Process steps mapping
export const processSteps = {
  "create_customer": [
    "Accede al Centro de ayuda desde el menú principal",
    "Navega a la sección 'Crear cliente'",
    "Revisa el tema que necesitas",
    "Revisa la documentación disponible",
    "Contacta con soporte si necesitas ayuda adicional"
  ],
  "create_quote": [
    "Accede al Centro de ayuda desde el menú principal"
  ],
  "create_order": [
    "Accede al Centro de ayuda desde el menú principal"
  ],
  "create_invoice": [
    "Accede al Centro de ayuda desde el menú principal"
  ],
  "create_payment": [
    "Accede al Centro de ayuda desde el menú principal"
  ],
  "create_or": [
    "Accede al Centro de ayuda desde el menú principal"
  ],
  "create_treasury": [
    "Accede al Centro de ayuda desde el menú principal"
  ],
  "create_cash_close": [
    "Accede al Centro de ayuda desde el menú principal"
  ],
  "create_expense_invoice": [
    "Accede al Centro de ayuda desde el menú principal"
  ],
  "create_accounting": [
    "Accede al Centro de ayuda desde el menú principal"
  ],
  "create_invoice_payment": [
    "Accede al Centro de ayuda desde el menú principal"
  ]
};

export const moduleLearningFlows = {
  sales: [
    learningContent[0],
    learningContent[1],
    learningContent[2]
  ],
  stock: [
    learningContent[67],
    learningContent[68],
    learningContent[69]
  ],
  administracion: [
    learningContent[41],
    learningContent[42],
    learningContent[43],
    learningContent[44],
    learningContent[45]
  ],
  workshop: [
    learningContent[27],
    learningContent[28]
  ],
  vehicles: [
    learningContent[70]
  ],
  support: [
    learningContent[71]
  ]
};

export const supportCases = [
  {
    id: "login-issue",
    title: "Problema de acceso",
    keywords: ["login", "contraseña", "acceso", "usuario"],
    href: getGitbookUrl("support")
  },
  {
    id: "performance-issue",
    title: "Problema de rendimiento",
    keywords: ["lento", "rendimiento", "velocidad"],
    href: getGitbookUrl("support")
  }
];
export function getContentByModule(module) {
  return learningContent.filter((item) => item.module === module);
}

export function getContentById(id) {
  return learningContent.find((item) => item.id === id);
}

export function getFlowItems(module) {
  return moduleLearningFlows[module] || getContentByModule(module);
}

export function getFlowStepNumber(itemId) {
  const contentItem = getContentById(itemId);
  if (!contentItem?.module) return null;

  const flow = getFlowItems(contentItem.module);
  const index = flow.findIndex((item) => item.id === itemId);

  return index >= 0 ? index + 1 : null;
}

export function getNextContentItem(itemId) {
  const contentItem = getContentById(itemId);
  if (!contentItem?.module) return null;

  const flow = getFlowItems(contentItem.module);
  const index = flow.findIndex((item) => item.id === itemId);

  if (index === -1 || index === flow.length - 1) return null;
  return flow[index + 1];
}

export function getPreviousContentItem(itemId) {
  const contentItem = getContentById(itemId);
  if (!contentItem?.module) return null;

  const flow = getFlowItems(contentItem.module);
  const index = flow.findIndex((item) => item.id === itemId);

  if (index <= 0) return null;
  return flow[index - 1];
}

export function getHelpText(itemId) {
  const item = getContentById(itemId);
  if (!item) {
    return "Consulta la ayuda contextual de este módulo para ampliar información.";
  }

  return (
    item.helpText ||
    item.description ||
    "Consulta la ayuda contextual de este módulo para ampliar información."
  );
}

export function getStepInstructions(item) {
  if (!item) return [];
  const processId = typeof item === "string" ? item : item?.process;
  return processSteps[processId] || [];
}

export function resolveKnowledgeResource(item) {
  if (!item) return { kind: null, href: null };

  const resolved = typeof item === "string" ? getContentById(item) : item;
  if (!resolved) return { kind: null, href: null };

  return {
    kind: resolved.type === "help" ? "help" : "video",
    href: resolved.url || null,
    title: resolved.title,
    module: resolved.module || null
  };
}

export function getFirstFlowItem(module) {
  const flow = getFlowItems(module);
  return flow.length > 0 ? flow[0] : null;
}

export function getLastFlowItem(module) {
  const flow = getFlowItems(module);
  return flow.length > 0 ? flow[flow.length - 1] : null;
}

export const moduleQuizzes = {
  recepcion: {
    module: "recepcion",
    title: "Quiz de Recepción",
    description: "Repaso del flujo de atención inicial, apertura y gestión operativa en recepción.",
    questions: [
      {
        id: "recepcion-1",
        question: "¿Cuál es el objetivo principal del proceso de recepción en el taller?",
        options: [
          "Registrar al cliente y su vehículo correctamente antes de iniciar el trabajo",
          "Emitir la factura final automáticamente",
          "Cerrar la orden sin validaciones",
          "Asignar piezas sin diagnóstico"
        ],
        correctAnswer: 0,
        explanation: "La recepción sirve para recoger bien los datos, detectar la necesidad del cliente y dejar trazabilidad desde el inicio."
      },
      {
        id: "recepcion-2",
        question: "¿Qué dato debe verificarse siempre antes de continuar con la apertura?",
        options: [
          "La matrícula o identificación correcta del vehículo",
          "El color favorito del cliente",
          "La campaña comercial activa",
          "El usuario de redes sociales del asesor"
        ],
        correctAnswer: 0,
        explanation: "La correcta identificación del vehículo evita errores posteriores en presupuesto, historial y facturación."
      },
      {
        id: "recepcion-3",
        question: "¿Por qué es importante anotar con precisión la incidencia descrita por el cliente?",
        options: [
          "Porque ayuda al diagnóstico y evita malentendidos",
          "Porque reemplaza la orden de reparación",
          "Porque elimina la necesidad de revisar el vehículo",
          "Porque impide usar recambios"
        ],
        correctAnswer: 0,
        explanation: "Una descripción clara de la incidencia mejora el trabajo del taller y la comunicación con el cliente."
      },
      {
        id: "recepcion-4",
        question: "¿Qué ventaja aporta seguir un flujo de recepción estructurado en Winmotor?",
        options: [
          "Mejora el control del proceso y la trazabilidad",
          "Evita registrar al cliente",
          "Impide consultar el historial",
          "Sustituye el trabajo del técnico"
        ],
        correctAnswer: 0,
        explanation: "El sistema permite ordenar pasos, consultar información previa y dejar el expediente correctamente preparado."
      },
      {
        id: "recepcion-5",
        question: "¿Qué debe quedar claro al finalizar la recepción?",
        options: [
          "Qué se solicita, qué vehículo entra y en qué estado se registra",
          "Solo el nombre del asesor",
          "Solo el precio final de la factura",
          "Únicamente el stock del almacén"
        ],
        correctAnswer: 0,
        explanation: "El cierre correcto de la recepción deja claro el punto de partida del trabajo del taller."
      }
    ]
  },

  presupuestos: {
    module: "presupuestos",
    title: "Quiz de Presupuestos",
    description: "Repaso del proceso de elaboración, revisión y aprobación de presupuestos.",
    questions: [
      {
        id: "presupuestos-1",
        question: "¿Cuál es la finalidad de un presupuesto en Winmotor?",
        options: [
          "Presentar al cliente una propuesta económica antes de ejecutar trabajos",
          "Cerrar automáticamente la reparación",
          "Eliminar la orden de trabajo",
          "Crear un albarán de compra"
        ],
        correctAnswer: 0,
        explanation: "El presupuesto formaliza costes previstos de mano de obra, piezas y operaciones."
      },
      {
        id: "presupuestos-2",
        question: "¿Qué debe revisarse antes de enviar un presupuesto al cliente?",
        options: [
          "Conceptos, importes y coherencia de las operaciones incluidas",
          "Solo el logotipo del documento",
          "La contraseña del usuario",
          "El fondo del escritorio del PC"
        ],
        correctAnswer: 0,
        explanation: "Validar líneas, importes y desglose evita errores económicos y reclamaciones."
      },
      {
        id: "presupuestos-3",
        question: "¿Qué beneficio tiene separar correctamente piezas y mano de obra?",
        options: [
          "Aporta claridad al cliente y mejor control interno",
          "Impide imprimir el documento",
          "Hace innecesaria la aprobación",
          "Borra el historial del vehículo"
        ],
        correctAnswer: 0,
        explanation: "Un presupuesto bien desglosado facilita comprensión, aprobación y seguimiento."
      },
      {
        id: "presupuestos-4",
        question: "¿Qué debe ocurrir antes de ejecutar trabajos adicionales no contemplados?",
        options: [
          "Actualizar o ampliar el presupuesto y obtener conformidad",
          "Facturarlos sin avisar",
          "Cerrar el expediente",
          "Eliminar las líneas antiguas sin registro"
        ],
        correctAnswer: 0,
        explanation: "Las ampliaciones deben quedar documentadas y aceptadas por el cliente."
      },
      {
        id: "presupuestos-5",
        question: "¿Qué aporta tener presupuestos bien registrados en el sistema?",
        options: [
          "Trazabilidad comercial y control del proceso de aprobación",
          "Menos información para el cliente",
          "Imposibilidad de modificar importes",
          "Sustitución total de la facturación"
        ],
        correctAnswer: 0,
        explanation: "El registro permite consultar versiones, aprobaciones y evolución del trabajo."
      }
    ]
  },

  ordenes: {
    module: "ordenes",
    title: "Quiz de Órdenes de reparación",
    description: "Repaso de creación, seguimiento y cierre operativo de órdenes.",
    questions: [
      {
        id: "ordenes-1",
        question: "¿Qué representa una orden de reparación en el sistema?",
        options: [
          "El documento operativo que organiza y sigue los trabajos del vehículo",
          "Una factura ya cobrada",
          "Un vale de descuento",
          "Una consulta de almacén"
        ],
        correctAnswer: 0,
        explanation: "La orden centraliza operaciones, tiempos, piezas y estado del trabajo."
      },
      {
        id: "ordenes-2",
        question: "¿Por qué es importante asignar correctamente los trabajos en una orden?",
        options: [
          "Porque mejora el control técnico y administrativo",
          "Porque elimina la necesidad de diagnóstico",
          "Porque impide añadir piezas",
          "Porque evita usar el historial"
        ],
        correctAnswer: 0,
        explanation: "Una orden bien estructurada facilita ejecución, seguimiento y facturación posterior."
      },
      {
        id: "ordenes-3",
        question: "¿Qué debe reflejar el estado de una orden?",
        options: [
          "La situación real del trabajo dentro del taller",
          "Solo la opinión del cliente",
          "Únicamente el coste de recambios",
          "El color del vehículo"
        ],
        correctAnswer: 0,
        explanation: "El estado debe servir para saber si está abierta, en proceso, pendiente o finalizada."
      },
      {
        id: "ordenes-4",
        question: "¿Qué ventaja aporta consultar el historial desde una orden?",
        options: [
          "Contexto técnico y administrativo sobre intervenciones anteriores",
          "Bloquear el presupuesto",
          "Borrar las observaciones",
          "Duplicar automáticamente la factura"
        ],
        correctAnswer: 0,
        explanation: "El historial ayuda a tomar decisiones con mejor información."
      },
      {
        id: "ordenes-5",
        question: "¿Qué debe hacerse antes de dar por terminada una orden?",
        options: [
          "Verificar que los trabajos y cargos estén correctamente registrados",
          "Eliminar la información del cliente",
          "Cerrar caja",
          "Crear otra orden vacía"
        ],
        correctAnswer: 0,
        explanation: "El control final evita omisiones y asegura consistencia antes del cierre."
      }
    ]
  },

  facturacion: {
    module: "facturacion",
    title: "Quiz de Facturación",
    description: "Repaso del proceso de generación y validación de facturas.",
    questions: [
      {
        id: "facturacion-1",
        question: "¿Cuál es el objetivo de la facturación en Winmotor?",
        options: [
          "Convertir los trabajos y materiales registrados en un documento de cobro correcto",
          "Abrir recepciones nuevas",
          "Sustituir el presupuesto",
          "Eliminar la orden original"
        ],
        correctAnswer: 0,
        explanation: "La factura recoge y formaliza económicamente lo realizado al cliente."
      },
      {
        id: "facturacion-2",
        question: "¿Qué debe comprobarse antes de emitir una factura?",
        options: [
          "Que los conceptos, importes e impuestos sean correctos",
          "Solo el tamaño de la fuente",
          "La velocidad de internet",
          "El nombre del técnico en mayúsculas"
        ],
        correctAnswer: 0,
        explanation: "La revisión previa evita errores fiscales y operativos."
      },
      {
        id: "facturacion-3",
        question: "¿Por qué es importante que la factura esté vinculada al expediente correcto?",
        options: [
          "Porque asegura trazabilidad con la orden y el cliente",
          "Porque impide imprimirla",
          "Porque elimina el IVA",
          "Porque evita registrar pagos"
        ],
        correctAnswer: 0,
        explanation: "La vinculación correcta permite auditoría y consulta posterior."
      },
      {
        id: "facturacion-4",
        question: "¿Qué ventaja tiene que piezas y mano de obra lleguen bien desde la orden?",
        options: [
          "Reduce errores y agiliza la emisión de la factura",
          "Impide aplicar impuestos",
          "Obliga a rehacer la recepción",
          "Bloquea el cierre del día"
        ],
        correctAnswer: 0,
        explanation: "Cuando la información de origen está bien, la facturación es más rápida y fiable."
      },
      {
        id: "facturacion-5",
        question: "¿Qué se consigue con una facturación bien gestionada?",
        options: [
          "Cobro correcto, control documental y mejor seguimiento administrativo",
          "Ocultar operaciones al cliente",
          "Anular el historial del vehículo",
          "Evitar registrar datos fiscales"
        ],
        correctAnswer: 0,
        explanation: "Una buena facturación mejora control interno y atención al cliente."
      }
    ]
  },

  recambios: {
    module: "recambios",
    title: "Quiz de Recambios",
    description: "Repaso sobre consulta, asignación y control de piezas y materiales.",
    questions: [
      {
        id: "recambios-1",
        question: "¿Qué objetivo tiene la gestión de recambios en el proceso del taller?",
        options: [
          "Controlar piezas necesarias, disponibilidad y asignación correcta",
          "Cerrar facturas sin revisión",
          "Sustituir la recepción del vehículo",
          "Evitar el uso del almacén"
        ],
        correctAnswer: 0,
        explanation: "La gestión de recambios garantiza que el trabajo disponga del material adecuado."
      },
      {
        id: "recambios-2",
        question: "¿Por qué es importante seleccionar correctamente la referencia de una pieza?",
        options: [
          "Para evitar errores de suministro o montaje",
          "Para cambiar el cliente asignado",
          "Para cancelar la orden",
          "Para ocultar el stock"
        ],
        correctAnswer: 0,
        explanation: "Una referencia incorrecta puede provocar retrasos, devoluciones y fallos en la reparación."
      },
      {
        id: "recambios-3",
        question: "¿Qué aporta consultar disponibilidad o stock antes de comprometer una intervención?",
        options: [
          "Permite planificar mejor los tiempos del taller",
          "Hace innecesario el presupuesto",
          "Sustituye la diagnosis",
          "Bloquea la orden de trabajo"
        ],
        correctAnswer: 0,
        explanation: "Conocer la disponibilidad ayuda a coordinar promesas de entrega y carga de trabajo."
      },
      {
        id: "recambios-4",
        question: "¿Qué relación tienen los recambios con la rentabilidad del expediente?",
        options: [
          "Influyen directamente en el coste y margen del trabajo",
          "No tienen impacto económico",
          "Solo afectan al diseño del documento",
          "Solo sirven para imprimir etiquetas"
        ],
        correctAnswer: 0,
        explanation: "El control de piezas y precios es clave para la rentabilidad."
      },
      {
        id: "recambios-5",
        question: "¿Qué debe evitarse al cargar recambios en una orden?",
        options: [
          "Duplicidades o piezas incorrectas",
          "Registrar la descripción",
          "Consultar el stock",
          "Relacionar la pieza con el trabajo"
        ],
        correctAnswer: 0,
        explanation: "Evitar duplicidades mantiene limpio el expediente y previene errores de cobro."
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
