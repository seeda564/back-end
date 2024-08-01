/*
  Warnings:

  - You are about to drop the column `shipmentdetailId` on the `item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_shipmentdetailId_fkey`;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `shipmentdetailId`;

-- AlterTable
ALTER TABLE `shipmentdetail` ADD COLUMN `itemId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
