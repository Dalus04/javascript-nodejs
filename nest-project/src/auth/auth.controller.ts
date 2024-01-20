import { Body, Controller, Get, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { Login } from './dto/login.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
//
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
//
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ){}
    
    @Public()
    @Post("/login")
    async login(@Body() login: Login){
        return await this.authService.validateLogin(login);
    }
    //
    @UseGuards(JwtAuthGuard)
    @Get("/profile")
    getUserProfile(@Body() req: {}){
        return req;
    }
    //
}
