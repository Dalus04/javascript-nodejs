import { Body, Controller, Post } from '@nestjs/common';
import { Login } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ){}

    @Post("/login")
    async login(@Body() login: Login){
        return await this.authService.validateLogin(login);
    }
}
