import { IsDate, IsEmail, IsPhoneNumber, Length, Max, Min, validate } from "class-validator";

class Persona {
    @Length(2,10)
    nombre: string;
    @Length(5,20)
    apellido: string;
    @Min(1)
    @Max(99)
    edad: number;
    @IsDate()
    fechaNacimiento: Date;
    @IsEmail()
    email: string;
    @IsPhoneNumber("PE")
    celular: string;
}

var p = new Persona();
p.nombre = "Daniel";
p.apellido = "Suarez";
p.edad = 19;
p.fechaNacimiento = new Date("04/14/2004");
p.email = "danielorlandosuarez14@gmail.com";
p.celular = "987654321";

//promesa
console.log("antes");
validate(p).then(errors =>{
    if(errors.length>0){
        console.log("Hay errores de validadcion", errors);
    }
    else{
        console.log("No hay errores");
    }
});
console.log("despues");