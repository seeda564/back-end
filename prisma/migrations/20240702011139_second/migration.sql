-- CreateTable
CREATE TABLE `journey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `fromLocation` VARCHAR(191) NOT NULL,
    `toLocation` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `transporterId` INTEGER NOT NULL,

    UNIQUE INDEX `journey_transporterId_key`(`transporterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `journey` ADD CONSTRAINT `journey_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
