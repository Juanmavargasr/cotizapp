-- CreateTable
CREATE TABLE "basicData" (
    "id" SERIAL NOT NULL,
    "coldRolledPrice" INTEGER NOT NULL,
    "stainlessSteelPrice" INTEGER NOT NULL,
    "galvanizedSteelPrice" INTEGER NOT NULL,
    "paintPrice" INTEGER NOT NULL,
    "comercializedRentability" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "basicData_pkey" PRIMARY KEY ("id")
);
