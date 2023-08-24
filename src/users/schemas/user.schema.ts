import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { SchemaTypes, Types } from "mongoose"
import { ROLES } from "src/constants"
import { Project } from "src/projects/schemas/project.schema"

@Schema({
    timestamps: true
})

export class User {
    @Prop({ trim: true })
    firs_name: string

    @Prop({ trim: true })
    last_name: string

    @Prop()
    age: number

    @Prop({ unique: true, required: true, trim: true })
    email: string

    @Prop({ unique: true, required: true, trim: true })
    username: string

    @Prop({ required: true })
    password: string

    @Prop({ type: SchemaTypes.String })
    role: ROLES

    @Prop({ type: SchemaTypes.ObjectId, ref: Project.name })
    proyects: Types.ObjectId[]
}

export const UserShema = SchemaFactory.createForClass(User)