/*
  Warnings:

  - A unique constraint covering the columns `[quateId]` on the table `shipmentAndQuate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `shipmentAndQuate_quateId_key` ON `shipmentAndQuate`(`quateId`);
