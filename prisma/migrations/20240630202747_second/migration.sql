/*
  Warnings:

  - The primary key for the `company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `company` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `company` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `role` ENUM('CUSTUMER', 'ADMIN') NOT NULL DEFAULT 'CUSTUMER',
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `custumer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `profileimage` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `custumer_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `custumer` ADD CONSTRAINT `custumer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
