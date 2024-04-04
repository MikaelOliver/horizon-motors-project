/*
  Warnings:

  - You are about to drop the column `favorite` on the `cad_cars` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `cad_cars` table. All the data in the column will be lost.
  - You are about to drop the column `sale` on the `cad_cars` table. All the data in the column will be lost.
  - Added the required column `image` to the `cad_cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `cad_cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `cad_cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cad_cars" DROP COLUMN "favorite",
DROP COLUMN "name",
DROP COLUMN "sale",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL;
