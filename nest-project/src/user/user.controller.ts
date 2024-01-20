import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from "./user.service";
import { userDTO } from "./DTO/user.dto";
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUser() {
        return this.userService.getUserService();
    }

    @Get(":id")
    getSpecificUser(@Param("id") id:string): Promise<User>{
        return this.userService.getSpecificUser(Number(+id));
    }

    @Post()
    postUser(@Body() user:userDTO): Promise<User>{
        return this.userService.postUserService(user);
    }

    @Patch(":id")
    patchUser(@Param("id") id:string, @Body() user){
        return this.userService.updateUserService(+id, user);
    }

    @Delete(":id")
    deleteUser(@Param("id") id:string){
        return this.userService.deleteUser(Number(+id));
    }
}