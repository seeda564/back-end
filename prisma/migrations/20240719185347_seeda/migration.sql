/*
  Warnings:

  - A unique constraint covering the columns `[shipmentdetailId]` on the table `quate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shipmentdetailId` to the `quate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quate` ADD COLUMN `shipmentdetailId` INTEGER NOT NULL,
    ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `shipmentandquate` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `shipmentdetail` ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- CreateIndex
CREATE UNIQUE INDEX `quate_shipmentdetailId_key` ON `quate`(`shipmentdetailId`);

-- AddForeignKey
ALTER TABLE `quate` ADD CONSTRAINT `quate_shipmentdetailId_fkey` FOREIGN KEY (`shipmentdetailId`) REFERENCES `shipmentdetail`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
