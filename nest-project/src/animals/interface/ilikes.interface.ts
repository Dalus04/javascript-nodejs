import { Document } from "mongoose";

export interface ILikes extends Document{
    url: string;
    numberLikes: number;
    numberDislikes: number;
}