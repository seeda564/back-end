-- DropForeignKey
ALTER TABLE `quate` DROP FOREIGN KEY `quate_transporterId_fkey`;

-- AddForeignKey
ALTER TABLE `quate` ADD CONSTRAINT `quate_transporterId_fkey` FOREIGN KEY (`transporterId`) REFERENCES `transporter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
