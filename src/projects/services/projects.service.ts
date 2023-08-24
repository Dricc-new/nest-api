import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '../schemas/project.schema';
import { CreateProjectDTO } from '../dto/create-project.dto';
import { UpdateProjectDTO } from '../dto/update-project.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class ProjectsService {
    constructor(@InjectModel('Project') private projectModel: Model<Project>) { }

    // CRUD
    // return all projects
    async findAll() {
        try {
            return await this.projectModel.find()
        } catch (err) {
            throw ErrorManager.createSignatureError(err.message)
        }
    }

    // create a project
    async create(newProject: CreateProjectDTO) {
        try {
            const project = new this.projectModel(newProject)
            return await project.save()
        } catch (err) {
            throw ErrorManager.createSignatureError(err.message)
        }
    }

    // find a project
    async findOne(id: string) {
        try {
            return await this.projectModel.findById(id)
        } catch (err) {
            throw ErrorManager.createSignatureError(err.message)
        }
    }

    // remove a project
    async delete(id: string) {
        try {
            return await this.projectModel.findByIdAndDelete(id)
        } catch (err) {
            throw ErrorManager.createSignatureError(err.message)
        }
    }

    // update a project
    async update(id: string, project: UpdateProjectDTO) {
        try {
            return await this.projectModel.findByIdAndUpdate(id, project)
        } catch (err) {
            throw ErrorManager.createSignatureError(err.message)
        }
    }
}
