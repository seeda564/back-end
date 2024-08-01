/*
  Warnings:

  - You are about to drop the column `custumerId` on the `shipment` table. All the data in the column will be lost.
  - You are about to drop the column `transporterId` on the `shipment` table. All the data in the column will be lost.
  - Added the required column `quateId` to the `shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custumerId` to the `shipmentdetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `shipment` DROP FOREIGN KEY `shipment_custumerId_fkey`;

-- DropForeignKey
ALTER TABLE `shipment` DROP FOREIGN KEY `shipment_transporterId_fkey`;

-- AlterTable
ALTER TABLE `shipment` DROP COLUMN `custumerId`,
    DROP COLUMN `transporterId`,
    ADD COLUMN `quateId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `shipmentdetail` ADD COLUMN `custumerId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `quate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `transporterId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `shipment` ADD CONSTRAINT `shipment_quateId_fkey` FOREIGN KEY (`quateId`) REFERENCES `quate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quate` ADD CONSTRAINT `quate_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `transporter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_custumerId_fkey` FOREIGN KEY (`custumerId`) REFERENCES `custumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
