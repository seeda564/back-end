-- CreateTable
CREATE TABLE `shipmentAndQuate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quateId` INTEGER NOT NULL,
    `shipmentdetailId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `shipmentAndQuate` ADD CONSTRAINT `shipmentAndQuate_shipmentdetailId_fkey` FOREIGN KEY (`shipmentdetailId`) REFERENCES `shipmentdetail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipmentAndQuate` ADD CONSTRAINT `shipmentAndQuate_quateId_fkey` FOREIGN KEY (`quateId`) REFERENCES `quate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
