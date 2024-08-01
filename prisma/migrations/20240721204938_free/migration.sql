/*
  Warnings:

  - Added the required column `delvPhone` to the `shipmentdetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `delveredTo` to the `shipmentdetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shipmentdetail` ADD COLUMN `delvPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `delveredTo` VARCHAR(191) NOT NULL;
