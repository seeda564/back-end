/*
  Warnings:

  - Added the required column `transporterId` to the `driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `driver` ADD COLUMN `transporterId` INTEGER NOT NULL;
