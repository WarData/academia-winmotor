// data/modules.ts
// Fuente de verdad estática — espejo del modelo Prisma (Module + Video)
// youtubeId = extraído de la URL ?v=XXXX o /shorts/XXXX

export type ModuleVideo = {
  slug: string;        // identificador único del vídeo
  title: string;
  url: string;
  youtubeId: string;   // usado por el reproductor embebido
  process: string;     // módulo/proceso Winmotor, ej. "1.3"
  order: number;
};

export type ModuleHelpLink = {
  title: string;
  url: string;
};

export type ModuleItem = {
  name: string;
  slug: string;
  href: string;
  description: string;
  order: number;
  videos: ModuleVideo[];
  helplinks: ModuleHelpLink[];
};

export const modules: ModuleItem[] = [
  // ─────────────────────────────────────────────────────────────────
  // MÓDULO 1: VENTAS
  // ─────────────────────────────────────────────────────────────────
  {
    name: "Ventas",
    slug: "sales",
    href: "/academy/sales",
    order: 1,
    description:
      "Operaciones comerciales con VN/VO, accesorios, documentos de venta y cobros ligados a clientes.",
    helplinks: [
      {
        title: "Centro de Ayuda Winmotor Automoción",
        url: "https://winmotor.gitbook.io/winmotor-automocion",
      },
    ],
    videos: [
      { slug: "v-1-3-14-op-comercial-vo",    order: 1,  process: "1.3",  title: "Vídeo 1.3.14 Pasos de una operación comercial con VO",                              youtubeId: "gRMGfQYIPQc", url: "https://www.youtube.com/watch?v=gRMGfQYIPQc" },
      { slug: "v-1-3-13-accesorios-op",      order: 2,  process: "1.3",  title: "Vídeo 1.3.13 Gestión de accesorios en operaciones",                               youtubeId: "AQJE1jEXfQ",  url: "https://www.youtube.com/watch?v=AQJE1jEXfQ" },
      { slug: "v-1-3-10-op-comercial-basica",order: 3,  process: "1.3",  title: "Vídeo 1.3.10 Pasos de una operación comercial básica",                            youtubeId: "xpaBekYUKCA", url: "https://www.youtube.com/watch?v=xpaBekYUKCA" },
      { slug: "v-1-3-11-asignar-bastidores", order: 4,  process: "1.3",  title: "Vídeo 1.3.11 Asignar bastidores a operaciones comerciales",                       youtubeId: "MxMwbYHD3EU", url: "https://www.youtube.com/watch?v=MxMwbYHD3EU" },
      { slug: "v-1-3-9-cambiar-propietario", order: 5,  process: "1.3",  title: "Vídeo 1.3.9 Cambiar propietario de un vehículo - 2 métodos",                      youtubeId: "-UXObPa5wdY", url: "https://www.youtube.com/watch?v=-UXObPa5wdY" },
      { slug: "v-1-3-8-cambiar-modelo",      order: 6,  process: "1.3",  title: "Vídeo 1.3.8 Cambiar modelo de vehículo o el color",                               youtubeId: "7LsMIK6JilM", url: "https://www.youtube.com/watch?v=7LsMIK6JilM" },
      { slug: "v-1-3-7-unidad-demo",         order: 7,  process: "1.3",  title: "Vídeo 1.3.7 Convertir un bastidor a unidad demo",                                youtubeId: "57t7fakqEuk", url: "https://www.youtube.com/watch?v=57t7fakqEuk" },
      { slug: "v-1-8-1-presupuesto-ventas",  order: 8,  process: "1.8",  title: "Vídeo 1.8.1 Grabación de un presupuesto de ventas",                               youtubeId: "s2j5MX-R9Dk", url: "https://www.youtube.com/watch?v=s2j5MX-R9Dk" },
      { slug: "v-1-8-2-pedido-ventas",       order: 9,  process: "1.8",  title: "Vídeo 1.8.2 Grabación de un pedido de ventas",                                   youtubeId: "KeO13XJtS1U", url: "https://www.youtube.com/watch?v=KeO13XJtS1U" },
      { slug: "v-1-8-3-albaran-ventas",      order: 10, process: "1.8",  title: "Vídeo 1.8.3 Grabación de un albarán de ventas",                                  youtubeId: "7PDRiTFo3uY", url: "https://www.youtube.com/watch?v=7PDRiTFo3uY" },
      { slug: "v-1-8-14-panel-venta-directa",order: 11, process: "1.8",  title: "Vídeo 1.8.14 Panel de Venta Directa",                                            youtubeId: "nAimOLfmR-U", url: "https://www.youtube.com/watch?v=nAimOLfmR-U" },
      { slug: "v-1-8-15-precios-tarifas",    order: 12, process: "1.8",  title: "Vídeo 1.8.15 Gestión de precios y tarifas de ventas",                            youtubeId: "0uoztLP8fxg", url: "https://www.youtube.com/watch?v=0uoztLP8fxg" },
      { slug: "v-1-6-tarifas-ventas",        order: 13, process: "1.6",  title: "Vídeo 1.6 Tarifas de ventas",                                                    youtubeId: "c-UtkDVjhM",  url: "https://www.youtube.com/watch?v=c-UtkDVjhM" },
      { slug: "v-1-4-articulos-tarifa",      order: 14, process: "1.4",  title: "Vídeo 1.4 Artículos y tarifa de artículos",                                      youtubeId: "5Pd4kE0VN9A", url: "https://www.youtube.com/watch?v=5Pd4kE0VN9A" },
      { slug: "v-1-5-5-datos-historicos",    order: 15, process: "1.5",  title: "Vídeo 1.5.5 Datos importantes - Históricos - Tipos de pago - Cuenta contable",   youtubeId: "i86LcnRVEQ8", url: "https://www.youtube.com/watch?v=i86LcnRVEQ8" },
      { slug: "v-1-5-4-riesgo-entidades",    order: 16, process: "1.5",  title: "Vídeo 1.5.4 Riesgo de entidades",                                                youtubeId: "nJxXbnLtsB4", url: "https://www.youtube.com/watch?v=nJxXbnLtsB4" },
      { slug: "v-1-5-3-cuentas-bancarias",   order: 17, process: "1.5",  title: "Vídeo 1.5.3 Cuentas bancarias - por defecto - activa",                           youtubeId: "amCt3axI3VU", url: "https://www.youtube.com/watch?v=amCt3axI3VU" },
      { slug: "v-1-5-2-relaciones-entidades",order: 18, process: "1.5",  title: "Vídeo 1.5.2 Relaciones de entidades",                                            youtubeId: "ghTgGbROojA", url: "https://www.youtube.com/watch?v=ghTgGbROojA" },
      { slug: "v-1-5-1-alta-entidad",        order: 19, process: "1.5",  title: "Vídeo 1.5.1 Alta de entidad",                                                    youtubeId: "KjwttXdZ4Hs", url: "https://www.youtube.com/watch?v=KjwttXdZ4Hs" },
      { slug: "v-1-0-7-copiar-pegar",        order: 20, process: "1.0",  title: "Vídeo 1.0.7 Copiar y pegar entre documentos de todo tipo",                       youtubeId: "V7pImjf9_SM", url: "https://www.youtube.com/watch?v=V7pImjf9_SM" },
      { slug: "v-1-0-6-operaciones-genericas",order:21, process: "1.0",  title: "Vídeo 1.0.6 Operaciones genéricas - filtrar - partir - multipartir",            youtubeId: "Sc97JwkvPsk", url: "https://www.youtube.com/watch?v=Sc97JwkvPsk" },
      { slug: "v-1-9-15-factura-servicios",  order: 22, process: "1.9",  title: "Vídeo 1.9.15 Crear factura de venta de servicios",                               youtubeId: "1SDf1kJPUBI", url: "https://www.youtube.com/watch?v=1SDf1kJPUBI" },
      { slug: "v-1-9-17-facturacion-tanda",  order: 23, process: "1.9",  title: "Vídeo 1.9.17 Facturación en tanda de albaranes de ventas",                      youtubeId: "rekB1NbepHI", url: "https://www.youtube.com/watch?v=rekB1NbepHI" },
      { slug: "v-1-9-16-albaranes-or",       order: 24, process: "1.9",  title: "Vídeo 1.9.16 Añadir albaranes ORs a una factura de ventas",                     youtubeId: "XHC95_iRS3c", url: "https://www.youtube.com/watch?v=XHC95_iRS3c" },
      { slug: "v-1-9-9-anticipo-cobro",      order: 25, process: "1.9",  title: "Vídeo 1.9.9 Crear anticipo de cobro a cliente sin pedido ni operación",         youtubeId: "mryBbM_dlWo", url: "https://www.youtube.com/watch?v=mryBbM_dlWo" },
      { slug: "v-1-9-6-cobro-anticipo",      order: 26, process: "1.9",  title: "Vídeo 1.9.6 Creación cobro de anticipo de pedido de ventas",                    youtubeId: "rKyJG8G09zY", url: "https://www.youtube.com/watch?v=rKyJG8G09zY" },
      { slug: "v-1-9-5-cobro-factura",       order: 27, process: "1.9",  title: "Vídeo 1.9.5 Cobro de factura botón",                                            youtubeId: "Kq6uO1qGPA8", url: "https://www.youtube.com/watch?v=Kq6uO1qGPA8" },
    ],
  },
  // ─────────────────────────────────────────────────────────────────
  // MÓDULO 2: TALLER
  // ─────────────────────────────────────────────────────────────────
  {
    name: "Taller",
    slug: "workshop",
    href: "/academy/workshop",
    order: 2,
    description:
      "Gestión de órdenes de reparación, citas, mecánicos, siniestros y facturación de taller.",
    helplinks: [
      {
        title: "Centro de Ayuda Winmotor Automoción",
        url: "https://winmotor.gitbook.io/winmotor-automocion",
      },
    ],
    videos: [
      { slug: "v-1-10-5-agenda-taller",      order: 1,  process: "1.10", title: "Vídeo 1.10.5 Agenda de taller y calendarios",                                      youtubeId: "NODJ3-mUAQQ", url: "https://www.youtube.com/watch?v=NODJ3-mUAQQ" },
      { slug: "v-1-10-3-gestion-siniestros", order: 2,  process: "1.10", title: "Vídeo 1.10.3 Gestión de siniestros",                                              youtubeId: "um1A1NwBBSM", url: "https://www.youtube.com/watch?v=um1A1NwBBSM" },
      { slug: "v-1-10-2-franquicias",        order: 3,  process: "1.10", title: "Vídeo 1.10.2 Gestión de franquicias",                                             youtubeId: "7EUZalAwK5A", url: "https://www.youtube.com/watch?v=7EUZalAwK5A" },
      { slug: "v-1-10-1-fichaje-mecanicos",  order: 4,  process: "1.10", title: "Vídeo 1.10.1 Fichaje de los mecánicos",                                           youtubeId: "tJakqZndiS4", url: "https://www.youtube.com/watch?v=tJakqZndiS4" },
      { slug: "v-3-0-1-cita-cliente-existe", order: 5,  process: "3.0",  title: "Vídeo 3.0.1 Cita con cliente y vehículos existentes",                              youtubeId: "00V2ruQBhZk", url: "https://www.youtube.com/watch?v=00V2ruQBhZk" },
      { slug: "v-3-0-2-cita-no-existe",      order: 6,  process: "3.0",  title: "Vídeo 3.0.2 Cita con cliente y vehículos no existentes",                          youtubeId: "KKzfiCGydFA", url: "https://www.youtube.com/watch?v=KKzfiCGydFA" },
      { slug: "v-3-0-3-cita-cortesia",       order: 7,  process: "3.0",  title: "Vídeo 3.0.3 Alta de cita con vehículo de cortesía",                              youtubeId: "7ccR6ds1DLA", url: "https://www.youtube.com/watch?v=7ccR6ds1DLA" },
      { slug: "v-3-0-4-renovacion-cita",     order: 8,  process: "3.0",  title: "Vídeo 3.0.4 Renovación de una cita",                                             youtubeId: "0gXnpIllq60", url: "https://www.youtube.com/watch?v=0gXnpIllq60" },
      { slug: "v-3-0-5-or-desde-cita",       order: 9,  process: "3.0",  title: "Vídeo 3.0.5 Alta de OR desde cita",                                              youtubeId: "b6WJnRntpNA", url: "https://www.youtube.com/watch?v=b6WJnRntpNA" },
      { slug: "v-2-0-1-or-vehiculo-cliente", order: 10, process: "2.0",  title: "Vídeo 2.0.1 Alta de OR Vehículo Cliente",                                        youtubeId: "nR_vv-Zn-xw", url: "https://www.youtube.com/watch?v=nR_vv-Zn-xw" },
      { slug: "v-2-0-2-or-tempario",         order: 11, process: "2.0",  title: "Vídeo 2.0.2 Alta de OR Tempario y usos",                                         youtubeId: "E83_CXifvbI", url: "https://www.youtube.com/watch?v=E83_CXifvbI" },
      { slug: "v-2-0-3-or-confirmacion",     order: 12, process: "2.0",  title: "Vídeo 2.0.3 Alta de OR Confirmación",                                           youtubeId: "CP6VhvQwBG8", url: "https://www.youtube.com/watch?v=CP6VhvQwBG8" },
      { slug: "v-2-0-4-or-facturacion",      order: 13, process: "2.0",  title: "Vídeo 2.0.4 Alta de OR Facturación",                                            youtubeId: "Qcnel8GHAYI", url: "https://www.youtube.com/watch?v=Qcnel8GHAYI" },
      { slug: "v-1-3-6-alta-vehiculo-taller",order: 14, process: "1.3",  title: "Vídeo 1.3.6 Alta de vehículo de taller en OR - VO en albarán de compra",        youtubeId: "LSkr9xnBvHU", url: "https://www.youtube.com/watch?v=LSkr9xnBvHU" },
    ],
  },
    // ─────────────────────────────────────────────────────────────────
  // MÓDULO 3: ADMINISTRACIÓN Y CONTABILIDAD
  // ─────────────────────────────────────────────────────────────────
  {
    name: "Administración y Contabilidad",
    slug: "administracion",
    href: "/academy/administracion",
    order: 3,
    description:
      "Gestión de caja, pagos, cobros, apuntes contables y tesorería del negocio.",
    helplinks: [
      {
        title: "Centro de Ayuda Winmotor Automooción",
        url: "https://winmotor.gitbook.io/winmotor-automocion",
      },
    ],
    videos: [     { slug: "v-1-9-1-alta-cuentas-tesoreria",   order: 1,  process: "1.9", title: "Vídeo 1.9.1 Alta de cuentas de tesorería",                                            youtubeId: "Y36AsanSAqM", url: "https://www.youtube.com/watch?v=Y36AsanSAqM" },     { slug: "v-1-9-2-alta-conceptos-tesoreria",  order: 2,  process: "1.9", title: "Vídeo 1.9.2 Alta de conceptos de tesorería",                                         youtubeId: "CiWzkWyfdrg", url: "https://www.youtube.com/watch?v=CiWzkWyfdrg" },     { slug: "v-1-9-3-alta-servicio",             order: 3,  process: "1.9", title: "Vídeo 1.9.3 Alta de un servicio",                                                    youtubeId: "Yf9wausRSNM", url: "https://www.youtube.com/watch?v=Yf9wausRSNM" },     { slug: "v-1-9-4-registro-manual-tesoreria", order: 4,  process: "1.9", title: "Vídeo 1.9.4 Alta de registro manual en tesorería",                                   youtubeId: "ZUGrwXrC9YI", url: "https://www.youtube.com/watch?v=ZUGrwXrC9YI" },     { slug: "v-1-9-7-aplicacion-anticipos",      order: 5,  process: "1.9", title: "Vídeo 1.9.7 Aplicación de anticipos asociados a la entidad",                        youtubeId: "-HWQ68Kmq6o", url: "https://www.youtube.com/watch?v=-HWQ68Kmq6o" },     { slug: "v-1-9-8-arqueo-cierre-caja",        order: 6,  process: "1.9", title: "Vídeo 1.9.8 Arqueo y cierre de cuentas de tesorería caja",                          youtubeId: "dRtFfjg_exY", url: "https://www.youtube.com/watch?v=dRtFfjg_exY" },     { slug: "v-1-9-10-alta-factura-gastos",      order: 7,  process: "1.9", title: "Vídeo 1.9.10 Alta de factura de gastos",                                            youtubeId: "uUxXY5UKEoY", url: "https://www.youtube.com/watch?v=uUxXY5UKEoY" },     { slug: "v-1-9-11-gastos-contratos",         order: 8,  process: "1.9", title: "Vídeo 1.9.11 Facturar gastos mediante contratos y vencimientos",                    youtubeId: "TNDKT2y5hO0", url: "https://www.youtube.com/watch?v=TNDKT2y5hO0" },     { slug: "v-1-9-12-remesas-cobros-pagos",     order: 9,  process: "1.9", title: "Vídeo 1.9.12 Alta de remesas de cobros y pagos",                                    youtubeId: "gXESkNyr8K0", url: "https://www.youtube.com/watch?v=gXESkNyr8K0" },     { slug: "v-1-9-13-remesa-nominas",           order: 10, process: "1.9", title: "Vídeo 1.9.13 Creación de remesa de nóminas",                                          youtubeId: "SQae6dXHFVM", url: "https://www.youtube.com/watch?v=SQae6dXHFVM" },     { slug: "v-1-9-14-asientos-contables",       order: 11, process: "1.9", title: "Vídeo 1.9.14 Crear asientos contables",                                             youtubeId: "GnnjPbUOVzc", url: "https://www.youtube.com/watch?v=GnnjPbUOVzc" },     { slug: "v-1-9-18-balance-sumas-saldos",     order: 12, process: "1.9", title: "Vídeo 1.9.18 Consultar balance de sumas y saldos",                                  youtubeId: "bY17KCsaldo", url: "https://www.youtube.com/watch?v=bY17KCsaldo" },     { slug: "v-1-9-19-extracto-mayor-cuenta",    order: 13, process: "1.9", title: "Vídeo 1.9.19 Consultar un extracto o mayor de una cuenta",                         youtubeId: "vuZUopl0i6o", url: "https://www.youtube.com/watch?v=vuZUopl0i6o" },     { slug: "v-1-9-20-facturacion-tanda-compras",order: 14, process: "1.9", title: "Vídeo 1.9.20 Facturación en tanda de albaranes de compras",                        youtubeId: "qDszeXhuyM0", url: "https://www.youtube.com/watch?v=qDszeXhuyM0" },     { slug: "v-1-9-21-facturacion-albaran-compra",order: 15,process: "1.9", title: "Vídeo 1.9.21 Facturación de albarán de compras por selección + facturar + añadir albaranes a factura", youtubeId: "gqhc1w6UJLk", url: "https://www.youtube.com/watch?v=gqhc1w6UJLk" },     { slug: "v-1-9-22-config-facturas-compra",   order: 16, process: "1.9", title: "Vídeo 1.9.22 Configurar y modificar facturas de compras gastos 2 opciones",       youtubeId: "1yszRTRq1Js", url: "https://www.youtube.com/watch?v=1yszRTRq1Js" },     { slug: "v-1-9-23-check-serie-albaranes",    order: 17, process: "1.9", title: "Vídeo 1.9.23 Check en serie en albaranes de ventas para que solicite fecha al facturarlos", youtubeId: "Qx32vNwrGgw", url: "https://www.youtube.com/watch?v=Qx32vNwrGgw" },     { slug: "v-1-9-24-crear-inmovilizado",       order: 18, process: "1.9", title: "Vídeo 1.9.24 Crear inmovilizado",                                                   youtubeId: "um2XG_04Ph0", url: "https://www.youtube.com/watch?v=um2XG_04Ph0" },     { slug: "v-1-9-25-anadir-albaranes-factura-compra", order: 19, process: "1.9", title: "Vídeo 1.9.25 Añadir albaranes a una factura de compra (casar)",              youtubeId: "argxT0imYrI", url: "https://www.youtube.com/watch?v=argxT0imYrI" },     { slug: "v-1-9-26-abonar-factura-ventas",    order: 20, process: "1.9", title: "Vídeo 1.9.26 Abonar factura de ventas",                                             youtubeId: "ME51X4g0tgc", url: "https://www.youtube.com/watch?v=ME51X4g0tgc" },   ],
  },
];
