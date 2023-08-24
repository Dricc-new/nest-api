import { IsEmail, IsString, IsNumber, IsOptional } from "class-validator"

export class UpdateUserDTO {
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
    @IsOptional()
    email?: string

    @IsString()
    @IsOptional()
    username?: string

    @IsString()
    @IsOptional()
    password?: string

    @IsString()
    @IsOptional()
    role?: string

}