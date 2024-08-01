-- DropForeignKey
ALTER TABLE `custumer` DROP FOREIGN KEY `custumer_userId_fkey`;

-- AddForeignKey
ALTER TABLE `custumer` ADD CONSTRAINT `custumer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
