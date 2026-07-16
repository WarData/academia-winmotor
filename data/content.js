export const moduleQuizzes = {
  sales: {
    title: "Quiz de Ventas",
    questions: [
      {
        id: "sales-q1",
        question: "¿Qué documento se graba antes de un pedido de ventas?",
        options: ["Factura", "Presupuesto", "Albarán", "Cobro"],
        correctAnswer: 1,
        explanation: "El presupuesto suele registrarse antes del pedido de ventas."
      },
      {
        id: "sales-q2",
        question: "¿Qué acción permite convertir un bastidor en unidad demo?",
        options: ["Cambio de tarifa", "Cambio de propietario", "Conversión a demo", "Cierre de caja"],
        correctAnswer: 2,
        explanation: "Existe un vídeo específico sobre convertir un bastidor a unidad demo."
      },
      {
        id: "sales-q3",
        question: "¿Qué proceso está asociado al cobro de una factura?",
        options: ["create_customer", "create_payment", "create_invoice", "create_order"],
        correctAnswer: 1,
        explanation: "El cobro de factura pertenece al flujo de pagos (create_payment)."
      },
      {
        id: "sales-q4",
        question: "¿Qué vídeo explica cómo grabar un albarán de ventas?",
        options: ["Vídeo 1.8.1", "Vídeo 1.8.2", "Vídeo 1.8.3", "Vídeo 1.6"],
        correctAnswer: 2,
        explanation: "El Vídeo 1.8.3 corresponde a la grabación de un albarán de ventas."
      },
      {
        id: "sales-q5",
        question: "¿Qué información se gestiona en el vídeo de 'Riesgo de entidades'?",
        options: ["Stock mínimo", "Riesgo crediticio del cliente", "Permisos de usuario", "Configuración de impuestos"],
        correctAnswer: 1,
        explanation: "El vídeo 1.5.4 trata el riesgo de crédito asociado a entidades (clientes)."
      },
      {
        id: "sales-q6",
        question: "¿Cuántos métodos existen para cambiar el propietario de un vehículo según el contenido?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "El Vídeo 1.3.9 explica los 2 métodos para cambiar el propietario de un vehículo."
      },
      {
        id: "sales-q7",
        question: "¿Qué proceso permite crear una factura a partir de varios albaranes a la vez?",
        options: ["Venta directa", "Facturación en tanda", "Anticipo de cobro", "Copiar y pegar"],
        correctAnswer: 1,
        explanation: "La facturación en tanda permite procesar varios albaranes de una vez."
      },
      {
        id: "sales-q8",
        question: "¿Qué vídeo trata la gestión de accesorios en operaciones?",
        options: ["Vídeo 1.3.11", "Vídeo 1.3.13", "Vídeo 1.3.14", "Vídeo 1.8.14"],
        correctAnswer: 1,
        explanation: "El Vídeo 1.3.13 cubre la gestión de accesorios en operaciones."
      },
      {
        id: "sales-q9",
        question: "¿Qué documento cubre el proceso 'create_quote'?",
        options: ["Albarán", "Pedido", "Presupuesto", "Factura"],
        correctAnswer: 2,
        explanation: "El proceso create_quote corresponde a la grabación de presupuestos de ventas."
      },
      {
        id: "sales-q10",
        question: "¿Qué módulo contiene el vídeo de 'Panel de Venta Directa'?",
        options: ["workshop", "stock", "sales", "administracion"],
        correctAnswer: 2,
        explanation: "El Panel de Venta Directa (Vídeo 1.8.14) pertenece al módulo de ventas."
      }
    ]
  },

  workshop: {
    title: "Quiz de Taller",
    questions: [
      {
        id: "workshop-q1",
        question: "¿Qué puede crearse a partir de una cita en taller?",
        options: ["Un pedido de compras", "Una OR", "Una remesa", "Un asiento contable"],
        correctAnswer: 1,
        explanation: "El Vídeo 3.0.5 cubre el alta de OR directamente desde una cita."
      },
      {
        id: "workshop-q2",
        question: "¿Qué elemento se gestiona en la agenda de taller?",
        options: ["Calendarios y citas", "Nóminas", "Tesorería", "Inmovilizado"],
        correctAnswer: 0,
        explanation: "El Vídeo 1.10.5 trata la agenda de taller y los calendarios."
      },
      {
        id: "workshop-q3",
        question: "¿Qué significa OR en el módulo de taller?",
        options: ["Orden de reparación", "Operación resumida", "Orden de reposición", "Oferta rápida"],
        correctAnswer: 0,
        explanation: "En el módulo de taller, OR significa orden de reparación."
      },
      {
        id: "workshop-q4",
        question: "¿Qué vídeo cubre la gestión de siniestros?",
        options: ["Vídeo 1.10.1", "Vídeo 1.10.2", "Vídeo 1.10.3", "Vídeo 1.10.5"],
        correctAnswer: 2,
        explanation: "El Vídeo 1.10.3 trata específicamente la gestión de siniestros en taller."
      },
      {
        id: "workshop-q5",
        question: "¿Qué tipo de cita incluye un vehículo prestado al cliente?",
        options: ["Cita con cliente existente", "Cita con cliente nuevo", "Cita con vehículo de cortesía", "Renovación de cita"],
        correctAnswer: 2,
        explanation: "El Vídeo 3.0.3 cubre el alta de cita con vehículo de cortesía."
      },
      {
        id: "workshop-q6",
        question: "¿Qué proceso pertenece a la etapa de finalización de una OR?",
        options: ["Tempario", "Confirmación", "Facturación", "Alta de cita"],
        correctAnswer: 2,
        explanation: "El Vídeo 2.0.4 corresponde a la facturación de una OR, que es la fase final."
      },
      {
        id: "workshop-q7",
        question: "¿Qué módulo incluye el fichaje de mecánicos?",
        options: ["sales", "administracion", "workshop", "stock"],
        correctAnswer: 2,
        explanation: "El Vídeo 1.10.1 sobre fichaje de mecánicos pertenece al módulo de taller."
      },
      {
        id: "workshop-q8",
        question: "¿Qué vídeo explica los usos del tempario en una OR?",
        options: ["Vídeo 2.0.1", "Vídeo 2.0.2", "Vídeo 2.0.3", "Vídeo 2.0.4"],
        correctAnswer: 1,
        explanation: "El Vídeo 2.0.2 trata el alta de OR con tempario y sus usos."
      },
      {
        id: "workshop-q9",
        question: "¿Qué proceso describe el vídeo de 'Renovación de una cita'?",
        options: ["create_invoice", "create_or", "create_payment", "check_stock"],
        correctAnswer: 1,
        explanation: "La renovación de cita pertenece al proceso create_or en el módulo workshop."
      },
      {
        id: "workshop-q10",
        question: "¿Qué vídeo cubre el alta de un vehículo de taller en una OR?",
        options: ["Vídeo 1.3.6", "Vídeo 2.0.1", "Vídeo 3.0.1", "Vídeo 1.10.5"],
        correctAnswer: 0,
        explanation: "El Vídeo 1.3.6 cubre el alta de vehículo de taller en OR y VO en albarán de compra."
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
        explanation: "El Vídeo 1.9.1 cubre el alta de cuentas de tesorería."
      },
      {
        id: "administracion-q2",
        question: "¿Qué documento puede facturarse en tanda en administración?",
        options: ["Albaranes de compras", "Citas de taller", "Vehículos demo", "Clientes"],
        correctAnswer: 0,
        explanation: "El Vídeo 1.9.20 trata la facturación en tanda de albaranes de compras."
      },
      {
        id: "administracion-q3",
        question: "¿Qué operación está relacionada con contabilidad?",
        options: ["Crear asientos contables", "Alta de cita", "Cambio de modelo", "Traspaso entre almacenes"],
        correctAnswer: 0,
        explanation: "El Vídeo 1.9.14 explica cómo crear asientos contables."
      },
      {
        id: "administracion-q4",
        question: "¿Qué vídeo cubre el arqueo y cierre de caja?",
        options: ["Vídeo 1.9.4", "Vídeo 1.9.7", "Vídeo 1.9.8", "Vídeo 1.9.12"],
        correctAnswer: 2,
        explanation: "El Vídeo 1.9.8 trata el arqueo y cierre de cuentas de tesorería caja."
      },
      {
        id: "administracion-q5",
        question: "¿Qué proceso permite crear una remesa de nóminas?",
        options: ["create_treasury", "create_accounting", "create_expense_invoice", "create_cash_close"],
        correctAnswer: 1,
        explanation: "La remesa de nóminas (Vídeo 1.9.13) pertenece al proceso create_accounting."
      },
      {
        id: "administracion-q6",
        question: "¿Qué vídeo explica cómo abonar una factura de ventas?",
        options: ["Vídeo 1.9.24", "Vídeo 1.9.25", "Vídeo 1.9.26", "Vídeo 1.9.20"],
        correctAnswer: 2,
        explanation: "El Vídeo 1.9.26 cubre cómo abonar una factura de ventas."
      },
      {
        id: "administracion-q7",
        question: "¿Qué permite consultar el vídeo sobre el balance de sumas y saldos?",
        options: ["Stock disponible", "Estado contable de cuentas", "Citas pendientes", "Vehículos en taller"],
        correctAnswer: 1,
        explanation: "El balance de sumas y saldos muestra el estado contable de las cuentas."
      },
      {
        id: "administracion-q8",
        question: "¿Qué acción describe 'casar' albaranes a una factura de compra?",
        options: ["Abonar la factura", "Añadir albaranes a una factura de compra", "Crear remesa", "Registrar anticipo"],
        correctAnswer: 1,
        explanation: "El Vídeo 1.9.25 explica cómo añadir (casar) albaranes a una factura de compra."
      },
      {
        id: "administracion-q9",
        question: "¿Qué vídeo trata la aplicación de anticipos asociados a la entidad?",
        options: ["Vídeo 1.9.4", "Vídeo 1.9.7", "Vídeo 1.9.9", "Vídeo 1.9.12"],
        correctAnswer: 1,
        explanation: "El Vídeo 1.9.7 cubre la aplicación de anticipos asociados a la entidad."
      },
      {
        id: "administracion-q10",
        question: "¿Qué vídeo explica cómo crear un inmovilizado?",
        options: ["Vídeo 1.9.14", "Vídeo 1.9.22", "Vídeo 1.9.24", "Vídeo 1.9.26"],
        correctAnswer: 2,
        explanation: "El Vídeo 1.9.24 cubre la creación de inmovilizado en administración."
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
        explanation: "Movimiento de
