import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from "./user.service";
import { userDTO } from "./DTO/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUser(): userDTO[]{
        return this.userService.getUserService();
    }

    @Get(":id")
    getSpecificUser(@Param("id") id): userDTO{
        return this.userService.getSpecificUser(Number(id));
    }

    @Post()
    postUser(@Body() user):{}{
        return this.userService.postUserService(user);
    }

    @Patch()
    patchUser(@Body() user): userDTO{
        return this.userService.updateUserService(user);
    }

    @Delete(":id")
    deleteUser(@Param("id") id): userDTO{
        return this.userService.deleteUser(Number(id));
    }
}