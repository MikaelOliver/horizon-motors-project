/*
  Warnings:

  - Added the required column `favorite` to the `cad_cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cad_cars" ADD COLUMN     "favorite" BOOLEAN NOT NULL;
