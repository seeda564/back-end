/*
  Warnings:

  - You are about to drop the column `truckId` on the `driver` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[driverId]` on the table `truck` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `driverId` to the `truck` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `driver` DROP FOREIGN KEY `driver_truckId_fkey`;

-- AlterTable
ALTER TABLE `driver` DROP COLUMN `truckId`;

-- AlterTable
ALTER TABLE `truck` ADD COLUMN `driverId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `truck_driverId_key` ON `truck`(`driverId`);

-- AddForeignKey
ALTER TABLE `truck` ADD CONSTRAINT `truck_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `driver`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
