'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Victor Robles;"
var nombres = ["Victor Robles", "Juan Lopez", "Manolo garcia", "Jose Martin", 52, true]; //con los corchetes creas la array se puden poner todos los valores como int,booleano y string
                                                                 
var lenguajes = new Array("PHP", "Js", "Go", "Java", "C#", "C", "Pascal");
/*

console.log(nombres[2]); // muestra el elemento 2
console.log(nombres.length);

var elemento = parseInt(prompt("Que elemento del array quieres??",0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que "+ nombres.length);

}else{
    alert("El usuario seleccioado es: " + nombres[elemento]);
}
*/

// una Array es una coleccion de tipos de datos dentro de una misma variable, una coleccion de datos agrupados

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i]);
}
*/

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>" + indice + " - " + elemento + "</li>");
// Es lo mismo que la acotacion anterior, solo que esta es una manera mas limpia
});

for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

// Busquedas

var busqueda = lenguajes.find(function(lenguaje)){
    return lenguaje === "PHP";

// otra manera igual a la de arriba
// var busqueda = lenguajes.find( lenguaje => lenguaje === "PHP");

}

// var precios = [10, 20, 50, 80, 12];
// var busqueda = precios.some(precio => precio >= 20);   con esto busca los precios y los compara para ver cual es mayor a 20 y me dice true


console.log(busqueda);