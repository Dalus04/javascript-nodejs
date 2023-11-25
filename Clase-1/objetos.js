let daniel = {
    'nombre': "Daniel",
    'apellido': "Suarez",
    'edad': 19,
    'sexo': 'M',
    'masculino': true,
    'femenino': false,
    nombreCompleto: function(){
        return this.nombre + " "+this.apellido;
    }
};

console.log(daniel.nombreCompleto());

class Persona{
    nombre;
    apellido;
    direccion;
    fechaNacimiento;

    constructor(nombre, apellido, direccion, fechaNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
    }

    saludar(){
        return "hola";
    }
}

for(propiedad in daniel){
    console.log(daniel[propiedad]);
}

let p1 = new Persona("Daniel", "Suarez", "Guadalupe", "14/04/2004");
console.log(p1);
/*
console.log(p1.nombre);
console.log(p1["nombre"]);

console.log(daniel.nombre);
console.log(daniel["nombre"]);*/