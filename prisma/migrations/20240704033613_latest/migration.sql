/*
  Warnings:

  - You are about to drop the column `itemId` on the `shipment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `shipment` DROP FOREIGN KEY `shipment_itemId_fkey`;

-- AlterTable
ALTER TABLE `shipment` DROP COLUMN `itemId`;
