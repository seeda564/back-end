/*
  Warnings:

  - You are about to drop the column `transporterId` on the `journey` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `journey` DROP FOREIGN KEY `journey_transporterId_fkey`;

-- AlterTable
ALTER TABLE `journey` DROP COLUMN `transporterId`;

-- CreateTable
CREATE TABLE `_journeyTotransporter` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_journeyTotransporter_AB_unique`(`A`, `B`),
    INDEX `_journeyTotransporter_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_journeyTotransporter` ADD CONSTRAINT `_journeyTotransporter_A_fkey` FOREIGN KEY (`A`) REFERENCES `journey`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_journeyTotransporter` ADD CONSTRAINT `_journeyTotransporter_B_fkey` FOREIGN KEY (`B`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
