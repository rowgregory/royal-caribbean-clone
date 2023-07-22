/*
  Warnings:

  - You are about to drop the column `userId` on the `Cruise` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cruise" DROP CONSTRAINT "Cruise_userId_fkey";

-- AlterTable
ALTER TABLE "Cruise" DROP COLUMN "userId";
