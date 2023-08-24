import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UpdateUserDTO } from '../dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('register')
    public async registerUser(@Body() body: CreateUserDTO) {
        return await this.usersService.create(body)
    }

    @Get('all')
    public async findAllUsers() {
        return await this.usersService.findAll()
    }

    @Get(':id')
    public async findUserById(@Param('id') id: string) {
        return await this.usersService.findOne(id)
    }

    @Put('edit/:id')
    public async updateUser(@Param('id') id: string, @Body() body: UpdateUserDTO) {
        return await this.usersService.update(id, body)
    }

    @Delete('delete/:id')
    public async deleteUser(@Param('id') id: string) {
        return await this.usersService.delete(id)
    }

    @Get()
    getHello(): string {
        return this.usersService.getHello();
    }
}
