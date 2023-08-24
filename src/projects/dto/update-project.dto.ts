import { IsString, IsOptional } from "class-validator"

export class UpdateProjectDTO {
    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    tasks?: string
}