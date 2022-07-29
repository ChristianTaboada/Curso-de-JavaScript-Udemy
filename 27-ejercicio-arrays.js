'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en una array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice

*/
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li>");
});
document.write("</ul>");

}

// Pedir 6 numeros
var numeros = new Array(6);

for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un numero", 0));

}
// Mostrar array en la consola
console.log(numeros);

// Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

// Ordenar y mostrar
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, 'ordenado');

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

// Contar elementos
document.write("<h1>El array tiene: "+ numeros.length + " elementos</h1>");

// Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numero => numero === busqueda);

if(posicion && posicion != -1){
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion del a busqueda: " + posicion + "</h1>");

}else{
    document.write("<h1>NO ENCONTRADO</h1>");
}




/* Otra manera de hacerlo

var numeros = [];

for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

console.log(numeros);
*/
