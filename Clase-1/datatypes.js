var num1 = 10;
var num2 = 5;

//tipos de datos numericos
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1**num2);
console.log(num1/num2);
console.log(num1%num2);
/*console.log(++num1);
console.log(num1++);
console.log(num1);
console.log(--num1);*/

var nombre = "Daniel"
var apellido = "Suarez"
console.log(nombre**3);

//condicionales
console.log(num2>num1);

if(num2>num1)
{
    console.log("num 1 es mayor");
}
else if(num1%num2 == 0)
{
    console.log("no hay residuo");
}
else{
    console.log("num 2 es mayor");
}

var igual = num1==num2?"Si es igual":"No es igual"
console.log(igual);

if(num1>num2 && num1%num2==0)
{
    console.log("Se cumple los dos");
}

if(num2>num1 || num1%num2==0)
{
    console.log("Se cumple uno o los dos");
}

num3 = '10';
if(num1 == num3)
{
    console.log("== es igual");
}

if(num1 === num3)
{
    console.log("=== es igual");
}else{
    console.log("=== no es igual");
}