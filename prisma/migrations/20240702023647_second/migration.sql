/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `transporter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `transporter_name_key` ON `transporter`(`name`);
