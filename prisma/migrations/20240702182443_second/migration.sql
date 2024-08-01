/*
  Warnings:

  - You are about to drop the column `cityId` on the `state` table. All the data in the column will be lost.
  - Added the required column `stateId` to the `city` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `state` DROP FOREIGN KEY `state_cityId_fkey`;

-- AlterTable
ALTER TABLE `city` ADD COLUMN `stateId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `state` DROP COLUMN `cityId`;

-- AddForeignKey
ALTER TABLE `city` ADD CONSTRAINT `city_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `state`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
