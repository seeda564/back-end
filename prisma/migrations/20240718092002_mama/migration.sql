-- DropForeignKey
ALTER TABLE `city` DROP FOREIGN KEY `city_stateId_fkey`;

-- DropForeignKey
ALTER TABLE `shipment` DROP FOREIGN KEY `shipment_shipmentdetailId_fkey`;

-- DropForeignKey
ALTER TABLE `shipmentandquate` DROP FOREIGN KEY `shipmentAndQuate_quateId_fkey`;

-- DropForeignKey
ALTER TABLE `shipmentandquate` DROP FOREIGN KEY `shipmentAndQuate_shipmentdetailId_fkey`;

-- DropForeignKey
ALTER TABLE `shipmentdetail` DROP FOREIGN KEY `shipmentdetail_catogryId_fkey`;

-- DropForeignKey
ALTER TABLE `shipmentdetail` DROP FOREIGN KEY `shipmentdetail_freightId_fkey`;

-- DropForeignKey
ALTER TABLE `shipmentdetail` DROP FOREIGN KEY `shipmentdetail_itemId_fkey`;

-- DropForeignKey
ALTER TABLE `state` DROP FOREIGN KEY `state_countryId_fkey`;

-- AddForeignKey
ALTER TABLE `city` ADD CONSTRAINT `city_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `state`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `state` ADD CONSTRAINT `state_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `country`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipment` ADD CONSTRAINT `shipment_shipmentdetailId_fkey` FOREIGN KEY (`shipmentdetailId`) REFERENCES `shipmentdetail`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentAndQuate` ADD CONSTRAINT `shipmentAndQuate_shipmentdetailId_fkey` FOREIGN KEY (`shipmentdetailId`) REFERENCES `shipmentdetail`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentAndQuate` ADD CONSTRAINT `shipmentAndQuate_quateId_fkey` FOREIGN KEY (`quateId`) REFERENCES `quate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_catogryId_fkey` FOREIGN KEY (`catogryId`) REFERENCES `catogry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentdetail` ADD CONSTRAINT `shipmentdetail_freightId_fkey` FOREIGN KEY (`freightId`) REFERENCES `freight`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
