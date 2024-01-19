import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Likes{
    @Prop()
    url: string;

    @Prop()
    numberLikes: number;
    
    @Prop()
    numberDislikes: number;
}

export const LikesSchema = SchemaFactory.createForClass(Likes);