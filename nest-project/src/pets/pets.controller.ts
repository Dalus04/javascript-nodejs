import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PetsService } from "./pets.service"
import { petDTO } from "./DTO/pets.dto";

@Controller('pets')
export class PetsController {
    constructor(private readonly petService: PetsService) {}

    @Get()
    getPets(): petDTO[]{
        return this.petService.getPets();
    }

    @Get(":id")
    getSpecificPet(@Param("id") id): petDTO{
        return this.petService.getSpecificPet(Number(id));
    }

    @Post()
    postPet(@Body() req:petDTO): petDTO{
        return this.petService.createPet(req);
    }

    @Put()
    putPet(@Body() req:petDTO): petDTO{
        return this.petService.updatePet(req);
    }

    @Delete(":id")
    deletePet(@Param("id") id): petDTO{
        return this.petService.deletePet(Number(id));
    }
}
