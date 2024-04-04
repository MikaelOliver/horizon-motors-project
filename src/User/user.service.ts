import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";
import { myFavoriteCars, cad_cars, user_login } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({name, email, user, password}: CreateUserDTO) {
        return this.prisma.user_login.create({
            data: {
                name,
                email,
                user,
                password,
            }
        })
    }

    async list(){
        return this.prisma.user_login.findMany()
    }
    async show(id:number){
        return this.prisma.user_login.findUnique({
            where:{
                id,
            }
        })
    }
    async update(id:number, data:UpdateUserDTO){
        return this.prisma.user_login.update({
            data,
            where:{
                id,
            }
        })
    }

    async updatePartial(id:number, data:UpdatePatchUserDTO){
        if(!(await this.show(id))){
            throw new NotFoundException(`O úsuario ${id} não foi encontrado`)
        }
        return this.prisma.user_login.update({
            data,
            where:{
                id,
            }
        })
    }
    async delete(id:number){
        if(!(await this.show(id))){
            throw new NotFoundException(`O úsuario ${id} não foi encontrado`)
        }
        return this.prisma.user_login.delete({
            where:{
                id
            }
        })
    }
    async favoriteCar(idUser: number, idCars: number): Promise<myFavoriteCars> {
        return this.prisma.myFavoriteCars.create({
          data: {
            idCars,
            idUser,
          },
        });
      }

      async unfavoriteCar(idUser: number, idCars: number): Promise<void> {
        await this.prisma.myFavoriteCars.deleteMany({
          where: {
            idUser,
            idCars,
          },
        });
      }

      async getFavoriteCars(idUser: number): Promise<number[]> {
        const favorites = await this.prisma.myFavoriteCars.findMany({
          where: {
            idUser,
          },
          select: {
            idCars: true,
          },
        });
        return favorites.map((favorite) => favorite.idCars);
      }

      async getClientWithFavoriteCars(idUser: number): Promise<{ user: user_login, favoriteCars: cad_cars[] }> {
        const user = await this.prisma.user_login.findUnique({
          where: {
            id: idUser,
          },
        });

        const favoriteCars = await this.prisma.myFavoriteCars.findMany({
          where: {
            idUser,
          },
          include: {
            cars: true,
          },
        }).then(favorites => favorites.map(favorite => favorite.cars));

        return { user, favoriteCars };
      }
}