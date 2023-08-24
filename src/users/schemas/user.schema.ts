import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

@Schema({
    timestamps: true
})
export class User {
    @Prop({trim:true})
    firs_name: string
    
    @Prop({trim:true})
    last_name: string
    
    @Prop()
    age: number
    
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    email: string
    
    @Prop({
        unique: true,
        required: true,
        trim:true
    })
    username: string
    
    @Prop({
        required: true
    })
    password: string
    
    @Prop()
    role: string
    
    @Prop()
    projects_include:string
}

export const UserShema = SchemaFactory.createForClass(User)