
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { Types } from "mongoose"
import { User } from "src/users/schemas/user.schema"

@Schema({
    timestamps: true
})
export class Project {
    @Prop({ trim: true })
    name: string

    @Prop({ trim: true })
    description: string

    @Prop({ trim: true })
    tasks: string
}

export const ProjectShema = SchemaFactory.createForClass(Project)
ProjectShema.virtual('users',{
    ref: 'user',
    localField: '_id',
    foreignField: 'projects'
})