/*
  Warnings:

  - You are about to drop the column `shipmentId` on the `catogry` table. All the data in the column will be lost.
  - You are about to drop the column `shipmentId` on the `custumer` table. All the data in the column will be lost.
  - You are about to drop the column `shipmentId` on the `freight` table. All the data in the column will be lost.
  - You are about to drop the column `distinationPlace` on the `shipment` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `shipment` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `shipment` table. All the data in the column will be lost.
  - You are about to drop the column `pickupDate` on the `shipment` table. All the data in the column will be lost.
  - You are about to drop the column `pickupPlace` on the `shipment` table. All the data in the column will be lost.
  - You are about to drop the `_itemtoshipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_quotetotransporter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quote` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[transporterId]` on the table `shipment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[custumerId]` on the table `shipment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shipmentdetailId]` on the table `shipment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `custumerId` to the `shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipmentdetailId` to the `shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transporterId` to the `shipment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_itemtoshipment` DROP FOREIGN KEY `_itemToshipment_A_fkey`;

-- DropForeignKey
ALTER TABLE `_itemtoshipment` DROP FOREIGN KEY `_itemToshipment_B_fkey`;

-- DropForeignKey
ALTER TABLE `_quotetotransporter` DROP FOREIGN KEY `_quoteTotransporter_A_fkey`;

-- DropForeignKey
ALTER TABLE `_quotetotransporter` DROP FOREIGN KEY `_quoteTotransporter_B_fkey`;

-- DropForeignKey
ALTER TABLE `catogry` DROP FOREIGN KEY `catogry_shipmentId_fkey`;

-- DropForeignKey
ALTER TABLE `custumer` DROP FOREIGN KEY `custumer_shipmentId_fkey`;

-- DropForeignKey
ALTER TABLE `freight` DROP FOREIGN KEY `freight_shipmentId_fkey`;

-- DropForeignKey
ALTER TABLE `quote` DROP FOREIGN KEY `quote_shipmentId_fkey`;

-- AlterTable
ALTER TABLE `catogry` DROP COLUMN `shipmentId`,
    ADD COLUMN `shipmentdetailId` INTEGER NULL;

-- AlterTable
ALTER TABLE `custumer` DROP COLUMN `shipmentId`;

-- AlterTable
ALTER TABLE `freight` DROP COLUMN `shipmentId`,
    ADD COLUMN `shipmentdetailId` INTEGER NULL;

-- AlterTable
ALTER TABLE `item` ADD COLUMN `shipmentdetailId` INTEGER NULL;

-- AlterTable
ALTER TABLE `shipment` DROP COLUMN `distinationPlace`,
    DROP COLUMN `image`,
    DROP COLUMN `name`,
    DROP COLUMN `pickupDate`,
    DROP COLUMN `pickupPlace`,
    ADD COLUMN `custumerId` INTEGER NOT NULL,
    ADD COLUMN `itemId` INTEGER NULL,
    ADD COLUMN `shipmentdetailId` INTEGER NOT NULL,
    ADD COLUMN `transporterId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_itemtoshipment`;

-- DropTable
DROP TABLE `_quotetotransporter`;

-- DropTable
DROP TABLE `quote`;

-- CreateTable
CREATE TABLE `shipmentdetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `pickupDate` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NULL,
    `pickupPlace` VARCHAR(191) NOT NULL,
    `distinationPlace` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `shipment_transporterId_key` ON `shipment`(`transporterId`);

-- CreateIndex
CREATE UNIQUE INDEX `shipment_custumerId_key` ON `shipment`(`custumerId`);

-- CreateIndex
CREATE UNIQUE INDEX `shipment_shipmentdetailId_key` ON `shipment`(`shipmentdetailId`);

-- AddForeignKey
ALTER TABLE `catogry` ADD CONSTRAINT `catogry_shipmentdetailId_fkey` FOREIGN KEY (`shipmentdetailId`) REFERENCES `shipmentdetail`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipment` ADD CONSTRAINT `shipment_shipmentdetailId_fkey` FOREIGN KEY (`shipmentdetailId`) REFERENCES `shipmentdetail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipment` ADD CONSTRAINT `shipment_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `transporter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipment` ADD CONSTRAINT `shipment_custumerId_fkey` FOREIGN KEY (`custumerId`) REFERENCES `custumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipment` ADD CONSTRAINT `shipment_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `freight` ADD CONSTRAINT `freight_shipmentdetailId_fkey` FOREIGN KEY (`shipmentdetailId`) REFERENCES `shipmentdetail`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item` ADD CONSTRAINT `item_shipmentdetailId_fkey` FOREIGN KEY (`shipmentdetailId`) REFERENCES `shipmentdetail`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
