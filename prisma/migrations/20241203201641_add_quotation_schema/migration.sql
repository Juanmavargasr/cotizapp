-- CreateTable
CREATE TABLE "quotations" (
    "id" SERIAL NOT NULL,
    "subtotalValueQuotation" INTEGER NOT NULL,
    "taxCalueQuoatation" INTEGER NOT NULL,
    "finalValueQuotation" INTEGER NOT NULL,

    CONSTRAINT "quotations_pkey" PRIMARY KEY ("id")
);
