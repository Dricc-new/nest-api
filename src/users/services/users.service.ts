import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UpdateUserDTO } from '../dto/update-user.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    // CRUD
    // return all users
    async findAll(): Promise<User[]> {
        try {
            const users: User[] = await this.userModel.find()
            if (users.length === 0) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: "It's empty."
                })
            }
            return users
        } catch (err) {
            throw ErrorManager.createSignatureError(err.message)
        }
    }

    // create a user
    async create(newUser: CreateUserDTO) {
        try {
            const user = new this.userModel(newUser)
            return await user.save()
        } catch (err) {
            if (err.name == 'MongoServerError' && err.code == 11000) {
                throw new ConflictException('This user already exists.')
            } else
                throw ErrorManager.createSignatureError(err.message)
        }
    }

    // find a user
    async findOne(id: string): Promise<User> {
        try {
            const user = await this.userModel.findById(id)
            // if (!user) throw new ErrorManager({ type: 'BAD_REQUEST', message: "Is not found." })
            return user
        } catch (err) {
            throw ErrorManager.createSignatureError(err.message)
        }
    }

    // remove a user
    async delete(id: string) {
        try {
            return await this.userModel.findByIdAndDelete(id)
        } catch (err) {
            throw ErrorManager.createSignatureError(err.message)
        }
    }

    // update a user
    async update(id: string, user: UpdateUserDTO) {
        try {
            return await this.userModel.findByIdAndUpdate(id, user)
        } catch (err) {
            throw ErrorManager.createSignatureError(err.message)
        }
    }

    getHello(): string {
        return 'Hello World!';
    }
}
