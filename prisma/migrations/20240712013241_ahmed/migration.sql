/*
  Warnings:

  - You are about to drop the `_transportertotruck` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `transporterId` to the `truck` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_transportertotruck` DROP FOREIGN KEY `_transporterTotruck_A_fkey`;

-- DropForeignKey
ALTER TABLE `_transportertotruck` DROP FOREIGN KEY `_transporterTotruck_B_fkey`;

-- AlterTable
ALTER TABLE `truck` ADD COLUMN `transporterId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_transportertotruck`;

-- AddForeignKey
ALTER TABLE `truck` ADD CONSTRAINT `truck_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
