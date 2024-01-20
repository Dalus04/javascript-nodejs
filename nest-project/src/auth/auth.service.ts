import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Login } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
    ){}

    async validateLogin(login: Login){
        let {username,password} = login;
        let user = await this.userService.findUserByName(username);
        
        if(!user){
            throw new UnauthorizedException("Usuario no existe");
        }
        
        let isValid = await user.validatePassword(password)
        if(!isValid){
            throw new UnauthorizedException("Password incorrecto");
        }

        console.log("Autenticado");
    }
}
