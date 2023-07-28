/*
  Warnings:

  - You are about to drop the column `countriesVisitring` on the `Cruise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cruise" DROP COLUMN "countriesVisitring",
ADD COLUMN     "countriesVisiting" TEXT[];
