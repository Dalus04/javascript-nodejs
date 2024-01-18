import { Body, Injectable } from '@nestjs/common';
import { userDTO } from "./DTO/user.dto";

@Injectable()
export class UserService {

    getUserService():string{
        return "User list";
    }

    postUserService(@Body() req):{}{
        console.log(req);
        return{
            name: "Daniel",
            lastname: "Suarez",
            email: "danielorlandosuarez14@gmail.com",
            profile: "admin"
        };
    }

    patchUserService(id:string, req:userDTO): userDTO{
        console.log(id, req.email);
        let user = new userDTO();
        user.name = "Orlando";
        user.lastname = "Suarez"
        user.edad = 19;
        user.email = "danielorlandosuarez14@gmail.com"
        return user;
    }
}