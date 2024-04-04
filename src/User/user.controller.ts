import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() data:CreateUserDTO ) {
        return this.userService.create(data)
    }

    @Get()
    async read() {
        return this.userService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return { user:{}, id}
    }

    @Put(':id')
    async update(@Body() data : UpdateUserDTO, @Param('id', ParseIntPipe) id:number) {
        return this.userService.update(id,data)
    }
    
    @Patch(':id')
    async updatePartial(@Body() data : UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userService.updatePartial(id, data)
    }
    @Delete(':id')
    async  delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete
    }
    @Post(':idUser/favorite-car/:idCars')
    async favoriteCar(
        @Param('idUser') idUser: string,
        @Param('idCars') idCars: string,
      ) {
        return this.userService.favoriteCar(Number(idUser), Number(idCars));
      }
    @Delete(':idUser/unfavorite-car/:carId')
      async unfavoriteCar(
        @Param('idUser') idUser: string,
        @Param('idCars') idCars: string,
      ) {
        return this.userService.unfavoriteCar(Number(idUser), Number(idCars));
      }
    @Get(':idUser/favorite-cars') //mostra somente o id
      async getFavoriteCars(@Param('idUser') idUser: string) {
        return this.userService.getFavoriteCars(Number(idUser));
      }
    @Get(':idUser/favorite') //mostra todas as informaçoes
      async listFavoriteCar(@Param('idUser', ParseIntPipe) idUser: number) {
          return this.userService.getClientWithFavoriteCars(idUser);
      }

}