-- CreateTable
CREATE TABLE "DigitalCurrency" (
    "id" SERIAL NOT NULL,
    "coin" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "initialDate" TEXT NOT NULL,
    "minimumTradingValue" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "DigitalCurrency_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DigitalCurrency_coin_key" ON "DigitalCurrency"("coin");
