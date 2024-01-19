import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('persona')
@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  @ApiOperation({summary: 'Add a new persona'})
  @ApiBody({
    type: CreatePersonaDto,
    description: "JSON persona"
  })
  @ApiResponse({status: 201, description: 'persona created', type: CreatePersonaDto})
  @ApiResponse({status: 500, description: 'error'})
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personaService.create(createPersonaDto);
  }

  @Get()
  @ApiOperation({summary: 'Get list persona'})
  findAll() {
    return this.personaService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Get persona by id'})
  @ApiResponse({status: 404, description: 'No se encuentra'})
  async findOne(@Param('id') id: string) {
    return await this.personaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(+id, updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(+id);
  }
}
