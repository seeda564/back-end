/*
  Warnings:

  - The values [ADMIN] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('CUSTUMER', 'TRANSPORTER') NOT NULL DEFAULT 'CUSTUMER';

-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
