/*
  Warnings:

  - Added the required column `freight` to the `shipmentdetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `shipmentdetail` DROP FOREIGN KEY `shipmentdetail_freightId_fkey`;

-- AlterTable
ALTER TABLE `shipmentdetail` ADD COLUMN `freight` VARCHAR(191) NOT NULL;
