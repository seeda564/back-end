/*
  Warnings:

  - Added the required column `catname` to the `shipmentdetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shipmentdetail` ADD COLUMN `catname` VARCHAR(191) NOT NULL;
