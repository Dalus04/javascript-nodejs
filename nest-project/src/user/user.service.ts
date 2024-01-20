import { Body, Injectable } from '@nestjs/common';
import { userDTO } from "./DTO/user.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ){}
    
    //users: userDTO[] = [];

    getUserService(): Promise<userDTO[]>{
        //return this.users;
        return this.userRepository.find();
    }

    async postUserService(req: userDTO): Promise<User>{
        /*console.log(req);
        req.id = this.users.length + 1;
        this.users.push(req);
        return req;*/
        const salt = await bcrypt.genSalt();
        let passwordCipher = await bcrypt.hash(req.password, salt);
        req.password = passwordCipher;
        return this.userRepository.save(req);
    }

    getSpecificUser(id: number): Promise<User>{
        /*return this.users.find((obj)=>{
            return obj.id == id;
        })*/
        return this.userRepository.findOneById(id);
    }

    updateUserService(id: number, req: userDTO){
        /*console.log(req.id);

        let user = this.users.find((obj)=>{
            return obj.id == req.id;
        });

        let index = this.users.indexOf(user);

        user.name = req.name;
        user.lastname = req.lastname;
        user.edad = req.edad;
        user.email = req.email;
        user.profile = req.profile;

        this.users[index] = user;
        return user;*/
        this.userRepository.update(id, req);
    }

    deleteUser(id: number){
        /*let user = this.users.find((obj)=>{
            return obj.id == id;
        });
        let index = this.users.indexOf(user);
        if(index != -1){
            this.users.splice(index, 1);
        }
        return user;*/
        this.userRepository.delete(id);
    }

    async findUserByName(username: string){
        return this.userRepository.findOne({where: {username}});
    }
}