-- DropForeignKey
ALTER TABLE `shipmentdetail` DROP FOREIGN KEY `shipmentdetail_catogryId_fkey`;

-- DropForeignKey
ALTER TABLE `shipmentdetail` DROP FOREIGN KEY `shipmentdetail_freightId_fkey`;

-- AlterTable
ALTER TABLE `shipmentdetail` MODIFY `catogryId` INTEGER NULL,
    MODIFY `freightId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_catogryId_fkey` FOREIGN KEY (`catogryId`) REFERENCES `catogry`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_freightId_fkey` FOREIGN KEY (`freightId`) REFERENCES `freight`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
