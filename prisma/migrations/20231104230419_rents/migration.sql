/*
  Warnings:

  - You are about to drop the `Rent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_book_id_fkey";

-- DropForeignKey
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_borrowed_by_id_fkey";

-- DropForeignKey
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_rented_by_id_fkey";

-- DropTable
DROP TABLE "Rent";

-- CreateTable
CREATE TABLE "rents" (
    "id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "rented_by_id" INTEGER NOT NULL,
    "borrowed_by_id" INTEGER NOT NULL,
    "issue_date" TIMESTAMP(3),
    "return_date" TIMESTAMP(3),

    CONSTRAINT "rents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rents" ADD CONSTRAINT "rents_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rents" ADD CONSTRAINT "rents_rented_by_id_fkey" FOREIGN KEY ("rented_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rents" ADD CONSTRAINT "rents_borrowed_by_id_fkey" FOREIGN KEY ("borrowed_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
