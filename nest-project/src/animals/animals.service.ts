import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ILikes } from './interface/ilikes.interface';
import { CreateLikesDto } from './dto/create-likes.dto';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel('Likes') private likesModel:Model<ILikes>){};

  async create(createLikesDto: CreateLikesDto): Promise<ILikes>{
    const like = await new this.likesModel(createLikesDto);
    return like.save();
    //return 'This action adds a new animal';
  }

  async findAll() {
    const like = await this.likesModel.find();
    return like;
    //return `This action returns all animals`;
  }

  async findOne(id: string) {
    return await this.likesModel.findById(id);
    //return `This action returns a #${id} animal`;
  }

  async update(id: string, updateLikesDto: CreateLikesDto) {
    return await this.likesModel.findByIdAndUpdate(id, updateLikesDto);
    //return `This action updates a #${id} animal`;
  }

  async remove(id: string) {
    return await this.likesModel.findByIdAndDelete(id);
    //return `This action removes a #${id} animal`;
  }
}
