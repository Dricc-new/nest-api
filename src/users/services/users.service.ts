import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UpdateUserDTO } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    // CRUD
    // return all users
    async findAll() {
        return await this.userModel.find()
    }

    // create a user
    async create(newUser: CreateUserDTO) {
        const user = new this.userModel(newUser)
        return await user.save()
    }

    // find a user
    async findOne(id: string) {
        return this.userModel.findById(id)
    }

    // remove a user
    async delete(id: string) {
        return this.userModel.findByIdAndDelete(id)
    }

    // update a user
    async update(id: string, user: UpdateUserDTO) {
        return this.userModel.findByIdAndUpdate(id, user)
    }

    getHello(): string {
        return 'Hello World!';
    }
}
