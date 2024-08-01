-- CreateTable
CREATE TABLE `company` (
    `id` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL DEFAULT 'SAS Logistics',
    `address` VARCHAR(191) NOT NULL DEFAULT 'KSA Ryad',
    `phone` VARCHAR(191) NOT NULL DEFAULT '012145525',
    `zipcode` VARCHAR(191) NOT NULL DEFAULT '+966',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
