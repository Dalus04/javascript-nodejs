const prompt = require("prompt-sync")();

function sumar(n1, n2) {
    return n1+n2;
}

function restar(n1, n2) {
    return n1-n2;
}

function multiplicar(n1, n2) {
    return n1*n2;
}

function dividir(n1, n2) {
    return n1/n2;
}

function modulo(n1, n2) {
    return n1%n2;
}

function potencia(n1, n2) {
    return n1**n2;
}

var num1 = prompt("Ingrese el primer numero: ");
var num2 = prompt("Ingrese el segundo numero: ");
var operacion = prompt("Ingrese la operacion (+,-,*,/,%,**): ");

num1 = Number(num1);
num2 = Number(num2);

var resultado = 0;

switch (operacion) {
    case '+':
        resultado = sumar(num1, num2);
        break;
    
    case '-':
        resultado = restar(num1, num2);

    case '*':
        resultado = multiplicar(num1, num2);

    case '/':
        resultado = dividir(num1, num2);

    case '%':
        resultado = modulo(num1, num2);

    case '**':
        resultado = potencia(num1, num2);

    default:
        break;
}

console.log(resultado);