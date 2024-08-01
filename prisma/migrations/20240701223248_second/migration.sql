/*
  Warnings:

  - You are about to drop the column `transporterId` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `transporterId` on the `truck` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `driver` DROP FOREIGN KEY `driver_transporterId_fkey`;

-- DropForeignKey
ALTER TABLE `truck` DROP FOREIGN KEY `truck_transporterId_fkey`;

-- AlterTable
ALTER TABLE `driver` DROP COLUMN `transporterId`;

-- AlterTable
ALTER TABLE `truck` DROP COLUMN `transporterId`;

-- CreateTable
CREATE TABLE `_transporterTotruck` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_transporterTotruck_AB_unique`(`A`, `B`),
    INDEX `_transporterTotruck_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_driverTotransporter` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_driverTotransporter_AB_unique`(`A`, `B`),
    INDEX `_driverTotransporter_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_transporterTotruck` ADD CONSTRAINT `_transporterTotruck_A_fkey` FOREIGN KEY (`A`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_transporterTotruck` ADD CONSTRAINT `_transporterTotruck_B_fkey` FOREIGN KEY (`B`) REFERENCES `truck`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_driverTotransporter` ADD CONSTRAINT `_driverTotransporter_A_fkey` FOREIGN KEY (`A`) REFERENCES `driver`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_driverTotransporter` ADD CONSTRAINT `_driverTotransporter_B_fkey` FOREIGN KEY (`B`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
