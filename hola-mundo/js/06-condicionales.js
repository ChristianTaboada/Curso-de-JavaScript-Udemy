'use strict'

// Condicional IF
// si A es igual a B, entonces haz algo
var edad = 18;
var nombre = "David Suarez";

/*
 Operadores relacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ===
Distinto: !===
*/

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad ");
    if (edad < 33) {
        console.log("Todavia eres millenial")
    } else if(edad >= 70){
        console.log('Eres anciano');
    } else {
        console.log('Ya no eres millenial')
    }
} else {
    // Es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad ");
}

/*
 operadores logicos
AND (Y): &&
OR(O): ||
Negacion: !
*/
var year = 2018;

// Negacion

if (year != 2016) {
    console.log("El año no es 2016 realmente es " + year);
    
}

// AND
if (year >= 2000 && year <= 2020) {
    console.log("Estamosen en la era actual");
    
} else {
    console.log("Estamosen en la era post moderna");
}

// OR
if (year === 2008 || year === 2018) {
    console.log("El año acaba en 8")
    
}