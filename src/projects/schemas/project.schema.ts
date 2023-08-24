
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

@Schema({
    timestamps: true
})
export class Project {
    @Prop({trim:true})
    name: string
    
    @Prop({trim:true})
    description: string
    
    @Prop({trim:true})
    tasks: string

}

export const ProjectShema = SchemaFactory.createForClass(Project)