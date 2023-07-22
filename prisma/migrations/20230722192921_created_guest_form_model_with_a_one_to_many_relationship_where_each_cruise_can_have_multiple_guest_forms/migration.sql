/*
  Warnings:

  - You are about to drop the column `guestForms` on the `Cruise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cruise" DROP COLUMN "guestForms";

-- CreateTable
CREATE TABLE "GuestForm" (
    "id" TEXT NOT NULL,
    "birthDay" TEXT NOT NULL,
    "birthMonth" TEXT NOT NULL,
    "birthYear" TEXT NOT NULL,
    "citizenship" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "futureCruiseCredit" BOOLEAN NOT NULL,
    "gender" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "specialOffers" BOOLEAN NOT NULL,
    "state" TEXT NOT NULL,
    "cruiseId" TEXT NOT NULL,

    CONSTRAINT "GuestForm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GuestForm" ADD CONSTRAINT "GuestForm_cruiseId_fkey" FOREIGN KEY ("cruiseId") REFERENCES "Cruise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
