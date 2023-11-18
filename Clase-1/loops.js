//while
var num = 1;

console.log("antes del while");
while(num<10){
    console.log("dentro del while "+num);
    num++;
}
console.log("despues del while");

//do-while
num = 1;

console.log("antes del do-while");
do{
    console.log("dentro del do-while "+num);
    num++;
}while(num<10);
console.log("despues del do-while");

//for
console.log("antes del for");
for(var i=0;i<num;i++){
    console.log("dentro del for "+i);
}
console.log("despues del for");