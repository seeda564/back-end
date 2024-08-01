/*
  Warnings:

  - You are about to drop the column `freightId` on the `shipmentdetail` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `shipmentdetail` DROP FOREIGN KEY `shipmentdetail_freightId_fkey`;

-- AlterTable
ALTER TABLE `shipmentdetail` DROP COLUMN `freightId`;

-- CreateTable
CREATE TABLE `_freightToshipmentdetail` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_freightToshipmentdetail_AB_unique`(`A`, `B`),
    INDEX `_freightToshipmentdetail_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_freightToshipmentdetail` ADD CONSTRAINT `_freightToshipmentdetail_A_fkey` FOREIGN KEY (`A`) REFERENCES `freight`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_freightToshipmentdetail` ADD CONSTRAINT `_freightToshipmentdetail_B_fkey` FOREIGN KEY (`B`) REFERENCES `shipmentdetail`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
