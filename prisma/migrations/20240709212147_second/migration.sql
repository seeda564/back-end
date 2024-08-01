/*
  Warnings:

  - You are about to drop the `_journeytotransporter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_journeytotransporter` DROP FOREIGN KEY `_journeyTotransporter_A_fkey`;

-- DropForeignKey
ALTER TABLE `_journeytotransporter` DROP FOREIGN KEY `_journeyTotransporter_B_fkey`;

-- DropTable
DROP TABLE `_journeytotransporter`;

-- AddForeignKey
ALTER TABLE `journey` ADD CONSTRAINT `journey_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
