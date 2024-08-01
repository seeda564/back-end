-- CreateTable
CREATE TABLE `transporter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `yearsInBusiness` INTEGER NOT NULL,
    `cargoType` VARCHAR(191) NOT NULL,
    `goodCategory` VARCHAR(191) NOT NULL,
    `profileimage` VARCHAR(191) NOT NULL,
    `businessDescription` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `country` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',

    UNIQUE INDEX `transporter_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transporter` ADD CONSTRAINT `transporter_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
