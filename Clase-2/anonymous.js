function slaudar() {
    console.log('Hola');
    return "mundo";
}

saludar = function(){
    console.log("otro saludo");
}

console.log(saludar());

function func2(arg, fn){
    fn(arg);
}

function saludar2(nom) {
    console.log("Hola "+nom)
}

(function(){
    console.log("Dentro de una fucnion")
})();

//Inmediately invoked Function Expression - IIFE