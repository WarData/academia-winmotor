const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando ingesta...");

  const data = [
    {
      title: "Crear inventario",
      content: "Guía básica para crear inventario en Winmotor",
      type: "article"
    },
    {
      title: "Mover stock entre almacenes",
      content: "Proceso para transferir stock entre ubicaciones",
      type: "article"
    },
    {
      title: "Gestión de servicios",
      content: "Cómo gestionar servicios en el sistema",
      type: "article"
    }
  ];

  for (const item of data) {
    await prisma.knowledgeItem.create({
      data: item
    });
  }

  console.log("Ingesta completada");
}

main()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
