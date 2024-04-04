-- CreateTable
CREATE TABLE "myFavoriteCars" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idCars" INTEGER NOT NULL,

    CONSTRAINT "myFavoriteCars_pkey" PRIMARY KEY ("id")
);
