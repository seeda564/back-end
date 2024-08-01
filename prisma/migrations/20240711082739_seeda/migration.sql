/*
  Warnings:

  - Added the required column `color` to the `truck` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other` to the `truck` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `truck_name_key` ON `truck`;

-- AlterTable
ALTER TABLE `truck` ADD COLUMN `capacity` VARCHAR(191) NULL,
    ADD COLUMN `cargoType` VARCHAR(191) NULL,
    ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `make` VARCHAR(191) NULL,
    ADD COLUMN `other` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NULL;
