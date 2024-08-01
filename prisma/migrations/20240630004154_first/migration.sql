-- CreateTable
CREATE TABLE `company` (
    `id` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL DEFAULT ' SAS logistics',
    `address` VARCHAR(191) NOT NULL DEFAULT ' 1st Floor, 5th Main, ryah, Saudi Arabia, 560034',
    `phone` VARCHAR(191) NOT NULL DEFAULT '0123456789',
    `zipcode` VARCHAR(191) NOT NULL DEFAULT '+966',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
