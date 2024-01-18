import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from "./user.service";
import { userDTO } from "./DTO/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUser():string{
        return this.userService.getUserService();
    }

    @Post()
    postUser(@Body() req):{}{
        return this.userService.postUserService(req);
    }

    @Patch(":id")
    patchUser(@Param("id") id, @Body() req): userDTO{
        return this.userService.patchUserService(id, req);
    }
}