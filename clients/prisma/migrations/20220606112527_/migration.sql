/*
  Warnings:

  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "product";

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "code" CHAR(50),
    "name" CHAR(100),
    "unit" CHAR(50),
    "stock" INTEGER NOT NULL DEFAULT 0,
    "deal" INTEGER,
    "free" INTEGER,
    "pur_deal" INTEGER,
    "pur_free" INTEGER,
    "cost" DOUBLE PRECISION,
    "mrp" DOUBLE PRECISION,
    "pur_rate" DOUBLE PRECISION,
    "rate" DOUBLE PRECISION,
    "company" CHAR(100),
    "manufact" CHAR(100),
    "rackno" CHAR(100),
    "barcode" CHAR(100),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
