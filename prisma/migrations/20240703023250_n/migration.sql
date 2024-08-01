/*
  Warnings:

  - You are about to drop the column `shipmentdetailId` on the `catogry` table. All the data in the column will be lost.
  - You are about to drop the column `shipmentdetailId` on the `freight` table. All the data in the column will be lost.
  - Added the required column `catogryId` to the `shipmentdetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `freightId` to the `shipmentdetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `catogry` DROP FOREIGN KEY `catogry_shipmentdetailId_fkey`;

-- DropForeignKey
ALTER TABLE `freight` DROP FOREIGN KEY `freight_shipmentdetailId_fkey`;

-- AlterTable
ALTER TABLE `catogry` DROP COLUMN `shipmentdetailId`;

-- AlterTable
ALTER TABLE `freight` DROP COLUMN `shipmentdetailId`;

-- AlterTable
ALTER TABLE `shipmentdetail` ADD COLUMN `catogryId` INTEGER NOT NULL,
    ADD COLUMN `freightId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_catogryId_fkey` FOREIGN KEY (`catogryId`) REFERENCES `catogry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_freightId_fkey` FOREIGN KEY (`freightId`) REFERENCES `freight`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
