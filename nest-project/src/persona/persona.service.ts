import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {

  constructor(
    @InjectRepository(Persona) private readonly personaRepository: Repository<Persona>,
  ){}

  create(createPersonaDto: CreatePersonaDto) {
    this.personaRepository.save(createPersonaDto);
    return 'This action adds a new persona';
  }

  findAll(): Promise<Persona[]>{
    return this.personaRepository.find();
  }

  findOne(id: number): Promise<Persona>{
    return this.personaRepository.findOneById(id);
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    this.personaRepository.update(id, updatePersonaDto);
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    this.personaRepository.delete(id);
    return `This action removes a #${id} persona`;
  }
}
