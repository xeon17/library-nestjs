/*
  Warnings:

  - You are about to drop the column `description` on the `authors` table. All the data in the column will be lost.
  - Added the required column `biography` to the `authors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "authors" DROP COLUMN "description",
ADD COLUMN     "biography" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "photo" TEXT DEFAULT '/default.png',
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "wikipedia" TEXT;
