import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Login } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
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

        //definir payload
        let payload = {sub: user.id, username: user.username, rol: user.profile}

        //firmar y generar el token JWT
        let token_jwt = await this.jwtService.signAsync(payload)
        console.log("Autenticado", token_jwt);
        return {
            message: "Usuario Autenticado",
            token: token_jwt
        }
    }
}
