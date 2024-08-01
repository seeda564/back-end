/*
  Warnings:

  - You are about to drop the column `shipmentdetailId` on the `quate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `quate` DROP COLUMN `shipmentdetailId`;

-- CreateTable
CREATE TABLE `_quateToshipmentdetail` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_quateToshipmentdetail_AB_unique`(`A`, `B`),
    INDEX `_quateToshipmentdetail_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_quateToshipmentdetail` ADD CONSTRAINT `_quateToshipmentdetail_A_fkey` FOREIGN KEY (`A`) REFERENCES `quate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_quateToshipmentdetail` ADD CONSTRAINT `_quateToshipmentdetail_B_fkey` FOREIGN KEY (`B`) REFERENCES `shipmentdetail`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
