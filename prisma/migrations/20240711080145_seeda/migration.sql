/*
  Warnings:

  - Added the required column `howlong` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licence` to the `driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `driver` ADD COLUMN `howlong` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `licence` VARCHAR(191) NOT NULL;
