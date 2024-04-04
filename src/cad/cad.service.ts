import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCadDTO } from "./dto/create-cad-dto";
import { UpdateCadDTO } from "./dto/update-user-dto";

@Injectable()
export class CadService {
    constructor(private readonly prisma:PrismaService){}

    async create({model,brand, price ,year, km, description, image,}: CreateCadDTO){
        return this.prisma.cad_cars.create({
            data: {
                model,
                brand,
                price,
                year,
                km,
                description,
                image,

            }
        })
    }
    async list(){
        return this.prisma.cad_cars.findMany()
    }
    async show(id:number){
        return this.prisma.cad_cars.findUnique({
            where:{
                id,
            }
        })
    }

    async update(id:number, data:UpdateCadDTO){
        return this.prisma.cad_cars.update({
            data,
            where:{
                id,
            }
        })
    }

    async updatePartial(id:number, data:UpdateCadDTO){
        if(!(await this.show(id))){
            throw new NotFoundException(`O Usuario com o id: ${id} não foi encontrado`)
        }
        return this.prisma.cad_cars.update({
            data,
            where: {
                id,
            }
        })
    }
    async delete(id:number){
        if(!(await this.show(id))){
            throw new NotFoundException(`O Usuario com o id: ${id} não foi encontrado`)
        }
        return this.prisma.cad_cars.delete({
            where:{
                id
            }
        })
    }

    
}