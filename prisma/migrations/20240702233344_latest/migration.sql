-- AlterTable
ALTER TABLE `catogry` ADD COLUMN `shipmentId` INTEGER NULL;

-- AlterTable
ALTER TABLE `custumer` ADD COLUMN `shipmentId` INTEGER NULL;

-- CreateTable
CREATE TABLE `shipment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pickupDate` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NULL,
    `pickupPlace` VARCHAR(191) NULL,
    `distinationPlace` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `freight` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `shipmentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `hight` VARCHAR(191) NULL,
    `width` VARCHAR(191) NULL,
    `weight` VARCHAR(191) NULL,
    `discription` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quote` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` VARCHAR(191) NOT NULL,
    `discription` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `shipmentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_itemToshipment` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_itemToshipment_AB_unique`(`A`, `B`),
    INDEX `_itemToshipment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_quoteTotransporter` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_quoteTotransporter_AB_unique`(`A`, `B`),
    INDEX `_quoteTotransporter_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `custumer` ADD CONSTRAINT `custumer_shipmentId_fkey` FOREIGN KEY (`shipmentId`) REFERENCES `shipment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `catogry` ADD CONSTRAINT `catogry_shipmentId_fkey` FOREIGN KEY (`shipmentId`) REFERENCES `shipment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `freight` ADD CONSTRAINT `freight_shipmentId_fkey` FOREIGN KEY (`shipmentId`) REFERENCES `shipment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quote` ADD CONSTRAINT `quote_shipmentId_fkey` FOREIGN KEY (`shipmentId`) REFERENCES `shipment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_itemToshipment` ADD CONSTRAINT `_itemToshipment_A_fkey` FOREIGN KEY (`A`) REFERENCES `item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_itemToshipment` ADD CONSTRAINT `_itemToshipment_B_fkey` FOREIGN KEY (`B`) REFERENCES `shipment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_quoteTotransporter` ADD CONSTRAINT `_quoteTotransporter_A_fkey` FOREIGN KEY (`A`) REFERENCES `quote`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_quoteTotransporter` ADD CONSTRAINT `_quoteTotransporter_B_fkey` FOREIGN KEY (`B`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
