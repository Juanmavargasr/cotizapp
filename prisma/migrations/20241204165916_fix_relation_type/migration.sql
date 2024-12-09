/*
  Warnings:

  - You are about to drop the `basicData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quotations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "basicData";

-- DropTable
DROP TABLE "quotations";

-- CreateTable
CREATE TABLE "BasicData" (
    "id" SERIAL NOT NULL,
    "coldRolledPrice" INTEGER NOT NULL,
    "stainlessSteelPrice" INTEGER NOT NULL,
    "galvanizedSteelPrice" INTEGER NOT NULL,
    "paintPrice" INTEGER NOT NULL,
    "comercializedRentability" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BasicData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quotation" (
    "id" SERIAL NOT NULL,
    "subtotalValueQuotation" INTEGER NOT NULL,
    "taxCalueQuoatation" INTEGER NOT NULL,
    "finalValueQuotation" INTEGER NOT NULL,

    CONSTRAINT "Quotation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "subtotalValueQuotation" INTEGER NOT NULL,
    "taxCalueQuoatation" INTEGER NOT NULL,
    "finalValueQuotation" INTEGER NOT NULL,
    "quotationId" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_quotationId_fkey" FOREIGN KEY ("quotationId") REFERENCES "Quotation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
