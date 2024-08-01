/*
  Warnings:

  - You are about to drop the column `freight` on the `shipmentdetail` table. All the data in the column will be lost.
  - Made the column `catogryId` on table `shipmentdetail` required. This step will fail if there are existing NULL values in that column.
  - Made the column `freightId` on table `shipmentdetail` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `shipmentdetail` DROP FOREIGN KEY `shipmentdetail_catogryId_fkey`;

-- DropIndex
DROP INDEX `shipmentdetail_freightId_fkey` ON `shipmentdetail`;

-- AlterTable
ALTER TABLE `shipmentdetail` DROP COLUMN `freight`,
    MODIFY `catogryId` INTEGER NOT NULL,
    MODIFY `freightId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_catogryId_fkey` FOREIGN KEY (`catogryId`) REFERENCES `catogry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_freightId_fkey` FOREIGN KEY (`freightId`) REFERENCES `freight`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
