/*
  Warnings:

  - Added the required column `email` to the `Cruise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cruise" ADD COLUMN     "email" TEXT NOT NULL;
