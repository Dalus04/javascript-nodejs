//Encontrar el valor mayor y menor de un arreglo

function mayor_menor(arreglo){
    var min = arreglo[0];
    var max = arreglo[0];
    
    for(let i of arreglo){
        if(min>i){
            min = i;
        }
        if(max<i){
            max = i;
        }
    }

    return "Valor mayor: "+max+"\nValor menor: "+min;
}

var arreglo = [10, 20, 5, 8, 26, 7];

console.log(mayor_menor(arreglo));