/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `catogry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `catogry_name_key` ON `catogry`(`name`);
