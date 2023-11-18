//console.log("Hola mundo");

var nombre = 'Daniel';
var apellido = "Suarez";

function saludar(){
    let nombre = "Orlando";
    let apellido = "Lopez";
    console.log("Hola "+nombre+" "+apellido);
}

const edad = 19;
saludar();
console.log(nombre);
console.log(apellido);
//edad = 20;
var verdadero = true;
var falso = false;
var x = null;
var y = undefined;
console.log(verdadero);
console.log(falso);
console.log(x);
console.log(y);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 1n);
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);
var a = Symbol("hola");
console.log(a);