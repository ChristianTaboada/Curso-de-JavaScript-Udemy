'use strict'

function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);


// la variable hola_mundo no esta definida en el ambito global del programa, por lo tanto solo se puede usar adentro de la funcion
// se puede usar una variable declarada afuera y usarla adentro de la funcion
// 