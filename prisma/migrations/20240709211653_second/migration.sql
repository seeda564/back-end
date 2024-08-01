/*
  Warnings:

  - You are about to drop the `_drivertotransporter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_drivertotransporter` DROP FOREIGN KEY `_driverTotransporter_A_fkey`;

-- DropForeignKey
ALTER TABLE `_drivertotransporter` DROP FOREIGN KEY `_driverTotransporter_B_fkey`;

-- DropTable
DROP TABLE `_drivertotransporter`;

-- AddForeignKey
ALTER TABLE `driver` ADD CONSTRAINT `driver_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
