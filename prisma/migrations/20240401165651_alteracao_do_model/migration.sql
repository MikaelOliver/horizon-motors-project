/*
  Warnings:

  - You are about to drop the column `favorite` on the `cad_cars` table. All the data in the column will be lost.
  - Changed the type of `idUser` on the `myFavoriteCars` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idCars` on the `myFavoriteCars` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "cad_cars" DROP COLUMN "favorite";

-- AlterTable
ALTER TABLE "myFavoriteCars" DROP COLUMN "idUser",
ADD COLUMN     "idUser" INTEGER NOT NULL,
DROP COLUMN "idCars",
ADD COLUMN     "idCars" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "myFavoriteCars" ADD CONSTRAINT "myFavoriteCars_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user_login"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myFavoriteCars" ADD CONSTRAINT "myFavoriteCars_idCars_fkey" FOREIGN KEY ("idCars") REFERENCES "cad_cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
