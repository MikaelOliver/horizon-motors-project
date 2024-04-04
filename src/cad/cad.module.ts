import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { CadController } from "./cad.controller";
import { CadService } from "./cad.service";

@Module({
    imports: [PrismaModule],
    exports: [],
    controllers:[CadController],
    providers:[CadService],
})

export class CadModule{
    
}