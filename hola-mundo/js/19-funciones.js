'use strict'
/*
// Funciones
// Una función es una agrupacion reutilizable de un conjunto de instrucciones

// Defino la funcion
function calculadora(numero1, numero2, mostrar = false){

    // Conjunto de instrucciones a ejecutar
    console.log("Suma: "+ (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log(mostrar)
    console.log("*********************************");

    //return "Hola soy la calculadora!";

}
// Invocar o llamar a la función
calculadora(12, 8);
calculadora(98, 2);

for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}
*/

function porConsola(numero1, numero2){
    console.log("El numero uno: " + numero1 + " El numero dos: " + numero2);
    console.log("Suma: "+ (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("*********************************");
}

function porPantalla(numero1, numero2){
    document.write("El numero uno: " + numero1 + " El numero dos: " + numero2 + "<br>");
    document.write("Suma: " + (numero1 + numero2) + "<br>");
    document.write("Resta: " + (numero1 - numero2) + "<br>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "<br>");
    document.write("Division: " + (numero1 / numero2) + "<br>");
    document.write("***********************************************" + "<br>")
}

function calculadora(numero1, numero2, mostrar = false){
    if(mostrar === false){
        porConsola(numero1, numero2);

    }else{
        porPantalla(numero1, numero2);

    }
    return true;
}

calculadora(1, 4);
calculadora(2, 5, true);
calculadora(4, 5, true);
