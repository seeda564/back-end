/*
  Warnings:

  - You are about to drop the `_quatetoshipmentdetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shipmentdetailId` to the `quate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_quatetoshipmentdetail` DROP FOREIGN KEY `_quateToshipmentdetail_A_fkey`;

-- DropForeignKey
ALTER TABLE `_quatetoshipmentdetail` DROP FOREIGN KEY `_quateToshipmentdetail_B_fkey`;

-- AlterTable
ALTER TABLE `quate` ADD COLUMN `shipmentdetailId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_quatetoshipmentdetail`;
