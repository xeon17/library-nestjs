/*
  Warnings:

  - You are about to drop the column `created_at` on the `authors` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `authors` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.
  - Added the required column `reservation_id` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "authors" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "created_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "books" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "created_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "reservation_id" INTEGER NOT NULL,
ADD COLUMN     "updated_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "created_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_date" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "reservations" (
    "id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "reserved_by_id" INTEGER NOT NULL,
    "reserved_for_id" INTEGER NOT NULL,
    "reserved_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "closed_date" TIMESTAMP(3),
    "request_date" TIMESTAMP(3),
    "closure_reason_id" INTEGER,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rent" (
    "id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "rented_by_id" INTEGER NOT NULL,
    "borrowed_by_id" INTEGER NOT NULL,
    "issue_date" TIMESTAMP(3),
    "return_date" TIMESTAMP(3),

    CONSTRAINT "Rent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cancelation_reasons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cancelation_reasons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cancelation_reasons_name_key" ON "cancelation_reasons"("name");

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_reserved_by_id_fkey" FOREIGN KEY ("reserved_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_reserved_for_id_fkey" FOREIGN KEY ("reserved_for_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_closure_reason_id_fkey" FOREIGN KEY ("closure_reason_id") REFERENCES "cancelation_reasons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_rented_by_id_fkey" FOREIGN KEY ("rented_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_borrowed_by_id_fkey" FOREIGN KEY ("borrowed_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
