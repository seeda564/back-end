/*
  Warnings:

  - Added the required column `transporterId` to the `journey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transportername` to the `journey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `journey` ADD COLUMN `transporterId` INTEGER NOT NULL,
    ADD COLUMN `transportername` VARCHAR(191) NOT NULL;
