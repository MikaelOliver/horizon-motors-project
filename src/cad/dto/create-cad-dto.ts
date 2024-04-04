import { IsBoolean, IsInt, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateCadDTO{
  @IsString()
  model: string

  @IsString()
  brand: string

  @IsString()
  price?: string 

  @IsString()
  year?: string 

  @IsString()
  km?: string 

  @IsString()
  description: string

  @IsOptional()
  image?: string

}