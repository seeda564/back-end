/*
  Warnings:

  - Added the required column `shipmentdetailId` to the `quate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quate` ADD COLUMN `shipmentdetailId` INTEGER NOT NULL;
