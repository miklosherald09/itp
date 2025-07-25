/*
  Warnings:

  - You are about to drop the `OffersItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "OffersItem";

-- CreateTable
CREATE TABLE "OfferItem" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OfferItem_pkey" PRIMARY KEY ("id")
);
