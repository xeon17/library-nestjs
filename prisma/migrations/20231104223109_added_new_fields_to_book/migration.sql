-- AlterTable
ALTER TABLE "books" ADD COLUMN     "quantity_count" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "rented_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "reserved_count" INTEGER NOT NULL DEFAULT 0;
