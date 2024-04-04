import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CadService } from "./cad.service";
import { CreateCadDTO } from "./dto/create-cad-dto";
import { UpdateCadDTO } from "./dto/update-user-dto";
import { UpdatePatchCadDTO } from "./dto/update-patch-user-dto";

@Controller('register')
export class CadController {

    constructor(private readonly cadService: CadService){}

    @Post()
    async create(@Body() data:CreateCadDTO ) {
        return this.cadService.create(data)
    }

    @Get()
    async read() {
        return this.cadService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return { user:{}, id}
    }

    @Put(':id')
    async update(@Body() data : UpdateCadDTO, @Param('id', ParseIntPipe) id:number) {
        return this.cadService.update(id,data)
    }
    
    @Patch(':id')
    async updatePartial(@Body() data : UpdatePatchCadDTO, @Param('id', ParseIntPipe) id: number) {
        return this.cadService.updatePartial(id, data)
    }
    @Delete(':id')
    async  delete(@Param('id', ParseIntPipe) id: number) {
        return this.cadService.delete
    }


}