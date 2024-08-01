/*
  Warnings:

  - You are about to drop the `_freighttoshipmentdetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fri` to the `shipmentdetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_freighttoshipmentdetail` DROP FOREIGN KEY `_freightToshipmentdetail_A_fkey`;

-- DropForeignKey
ALTER TABLE `_freighttoshipmentdetail` DROP FOREIGN KEY `_freightToshipmentdetail_B_fkey`;

-- AlterTable
ALTER TABLE `shipmentdetail` ADD COLUMN `freightId` INTEGER NULL,
    ADD COLUMN `fri` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_freighttoshipmentdetail`;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_freightId_fkey` FOREIGN KEY (`freightId`) REFERENCES `freight`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
