import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';
import { CreateProjectDTO } from '../dto/create-project.dto';
import { UpdateProjectDTO } from '../dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Post('create')
    public async registerProject(@Body() body: CreateProjectDTO) {
        return await this.projectsService.create(body)
    }

    @Get('all')
    public async findAllProjects() {
        return await this.projectsService.findAll()
    }

    @Get(':id')
    public async findProjectById(@Param('id') id: string) {
        return await this.projectsService.findOne(id)
    }

    @Put('edit/:id')
    public async updateProject(@Param('id') id: string, @Body() body: UpdateProjectDTO) {
        return await this.projectsService.update(id, body)
    }

    @Delete('delete/:id')
    public async deleteProject(@Param('id') id: string) {
        return await this.projectsService.delete(id)
    }
}
