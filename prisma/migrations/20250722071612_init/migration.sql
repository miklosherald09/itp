/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Item";

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "type" "ItemType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION,
    "duration" INTEGER,
    "level" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);
