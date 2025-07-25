import { PrismaClient } from "@prisma/client";
import { users } from "./user";
import { items } from "./item";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  await prisma.item.createMany({
    data: items,
    skipDuplicates: true,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
