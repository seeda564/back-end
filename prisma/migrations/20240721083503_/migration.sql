/*
  Warnings:

  - You are about to drop the column `shipmentdetailId` on the `quate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `quate` DROP FOREIGN KEY `quate_shipmentdetailId_fkey`;

-- AlterTable
ALTER TABLE `quate` DROP COLUMN `shipmentdetailId`;
