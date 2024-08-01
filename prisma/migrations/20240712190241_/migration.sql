/*
  Warnings:

  - A unique constraint covering the columns `[quateId]` on the table `shipment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `shipment_quateId_key` ON `shipment`(`quateId`);
