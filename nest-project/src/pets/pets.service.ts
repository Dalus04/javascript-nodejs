import { Injectable } from '@nestjs/common';
import { petDTO } from './DTO/pets.dto';

@Injectable()
export class PetsService {

    listPets: petDTO[] = [
        {
            id: 1,
            type: "dog",
            name: "Doki",
            sex: "male"
        },
        {
            id: 2,
            type: "dog",
            name: "Kiara",
            sex: "female"
        }
    ]

    getPets(): petDTO[]{
        return this.listPets;
    }

    getSpecificPet(id:number): petDTO{
        return this.listPets.find((obj)=>{
            return obj.id = id;
        });
    }

    createPet(pet: petDTO): petDTO{
        pet.id = this.listPets.length + 1;
        this.listPets.push(pet);
        return pet;
    }

    updatePet(pet: petDTO): petDTO{
        let id = pet.id;
        let p = this.listPets.find((obj)=>{
            return obj.id === id;
        });
        let index = this.listPets.indexOf(p);
        if(index != -1){
            this.listPets[index] = pet;
        }

        return pet;
    }

    deletePet(id: number): petDTO{
        let p = this.listPets.find((obj)=>{
            return obj.id === id;
        });
        
        let index = this.listPets.indexOf(p);
        
        if(index != -1){
            this.listPets.splice(index, 1);
        }

        return p;
    }
}
