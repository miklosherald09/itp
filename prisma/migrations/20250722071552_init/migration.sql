-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('PRODUCT', 'SERVICE');

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "type" "ItemType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION,
    "duration" INTEGER,
    "level" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
