-- CreateTable
CREATE TABLE `truck` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `trucknumber` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `transporterId` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',

    UNIQUE INDEX `truck_name_key`(`name`),
    UNIQUE INDEX `truck_trucknumber_key`(`trucknumber`),
    UNIQUE INDEX `truck_transporterId_key`(`transporterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `driver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `transporterId` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `truckId` INTEGER NOT NULL,

    UNIQUE INDEX `driver_name_key`(`name`),
    UNIQUE INDEX `driver_transporterId_key`(`transporterId`),
    UNIQUE INDEX `driver_truckId_key`(`truckId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `truck` ADD CONSTRAINT `truck_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `driver` ADD CONSTRAINT `driver_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `driver` ADD CONSTRAINT `driver_truckId_fkey` FOREIGN KEY (`truckId`) REFERENCES `truck`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
