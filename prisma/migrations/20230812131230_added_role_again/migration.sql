-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'LIBRARIAN', 'ADMIN');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'STUDENT';
