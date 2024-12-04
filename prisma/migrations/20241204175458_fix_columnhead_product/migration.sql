/*
  Warnings:

  - You are about to drop the column `finalValueQuotation` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `subtotalValueQuotation` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `taxCalueQuoatation` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `taxCalueQuoatation` on the `Quotation` table. All the data in the column will be lost.
  - Added the required column `finalValueProduct` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotalValueProduct` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxValueProduct` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxValueQuoatation` to the `Quotation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "finalValueQuotation",
DROP COLUMN "subtotalValueQuotation",
DROP COLUMN "taxCalueQuoatation",
ADD COLUMN     "finalValueProduct" INTEGER NOT NULL,
ADD COLUMN     "subtotalValueProduct" INTEGER NOT NULL,
ADD COLUMN     "taxValueProduct" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Quotation" DROP COLUMN "taxCalueQuoatation",
ADD COLUMN     "taxValueQuoatation" INTEGER NOT NULL;
