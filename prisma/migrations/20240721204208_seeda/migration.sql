/*
  Warnings:

  - Added the required column `driverId` to the `quate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `truckId` to the `quate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quate` ADD COLUMN `driverId` INTEGER NOT NULL,
    ADD COLUMN `truckId` INTEGER NOT NULL;
