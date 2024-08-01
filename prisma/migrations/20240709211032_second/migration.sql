/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `driver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `driver` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `driver_email_key` ON `driver`(`email`);
