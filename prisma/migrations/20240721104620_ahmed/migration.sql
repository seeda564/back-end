/*
  Warnings:

  - Added the required column `custumerId` to the `shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transporterId` to the `shipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shipment` ADD COLUMN `custumerId` INTEGER NOT NULL,
    ADD COLUMN `transporterId` INTEGER NOT NULL;
