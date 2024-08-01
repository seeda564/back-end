/*
  Warnings:

  - You are about to drop the column `stateId` on the `city` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `city` DROP FOREIGN KEY `city_stateId_fkey`;

-- AlterTable
ALTER TABLE `city` DROP COLUMN `stateId`;

-- AlterTable
ALTER TABLE `state` ADD COLUMN `cityId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `state` ADD CONSTRAINT `state_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `city`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
