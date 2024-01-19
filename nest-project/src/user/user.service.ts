import { Body, Injectable } from '@nestjs/common';
import { userDTO } from "./DTO/user.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ){}
    
    users: userDTO[] = [
        /*{
            id: 1,
            name: "Daniel",
            lastname: "Suarez",
            edad: 19,
            email: "danielorlandosuarez14@gmail.com",
            profile: "admin"
        },
        {
            id: 2,
            name: "Orlando",
            lastname: "Lopez",
            edad: 19,
            email: "danielorlandosuarez1401@gmail.com",
            profile: "user"
        }*/
    ]

    getUserService(): userDTO[]{
        return this.users;
    }

    postUserService(req: userDTO): userDTO{
        console.log(req);
        req.id = this.users.length + 1;
        this.users.push(req);
        return req;
    }

    getSpecificUser(id: number): userDTO{
        return this.users.find((obj)=>{
            return obj.id == id;
        })
    }

    updateUserService(req: userDTO): userDTO{
        console.log(req.id);

        let user = this.users.find((obj)=>{
            return obj.id == req.id;
        });

        let index = this.users.indexOf(user);

        /*user.name = req.name;
        user.lastname = req.lastname;
        user.edad = req.edad;
        user.email = req.email;
        user.profile = req.profile;*/

        this.users[index] = user;
        return user;
    }

    deleteUser(id: number): userDTO{
        let user = this.users.find((obj)=>{
            return obj.id == id;
        });
        let index = this.users.indexOf(user);
        if(index != -1){
            this.users.splice(index, 1);
        }
        return user;
    }
}