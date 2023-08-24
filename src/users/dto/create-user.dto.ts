import { IsEmail, IsString, IsNumber, IsOptional } from "class-validator"

export class CreateUserDTO {
    @IsString()
    @IsOptional()
    firs_name?: string
    
    @IsString()
    @IsOptional()
    last_name?: string
    
    @IsNumber()
    @IsOptional()
    age?: number

    @IsEmail()
    email: string

    @IsString()
    username: string

    @IsString()
    password: string

    @IsString()
    role: string
}