'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre
/*
var pelicula = function(nombre){
    return "La pelicula es: " + nombre; 
}

*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 7, function(dato){
    console.log("La suma es:", dato);
},
dato =>{
    console.log("La suma por dos es:",(dato*2));
});

// => esta flecha funciona igual que function() mas que todo se usa para las funciones call back