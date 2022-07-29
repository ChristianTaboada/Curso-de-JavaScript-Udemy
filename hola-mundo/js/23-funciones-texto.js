'use strict'

// Transformaciones de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

// var busqueda = texto1.indexOf("curso");
var busqueda = texto1.search("curso"); // podes buscar y nos devuelve en donde aparece es igual a indexof
var busqueda = texto1.match("curso");  // devuelve una array con las palabras
var busqueda = texto1.lastIndexOf("curso"); // busque la ultima palabra
var busqueda = texto1.substr(14, 5); // busca la letra n° 14 y agarra las 5 letras siguientes
var busqueda = texto1.charAt(44); // busca la letra n° 44 y la saca.
var busqueda = texto1.startsWith("Victor"); // Busca las palabras, cerca del comienzo
var busqueda = texto1.endsWith("Victor"); // busca las palabras, cerca al final
var busqueda = texto1.includes("JavaScript"); // busca la palabra y entrega True/False si la encuentra o no
var busqueda = texto1.replace("JavaScript", "Symfony"); // Reemplaza el primer valor por el segundo.
var busqueda = texto1.slice(14, 22); // corta el texto, a partir del 14(primer valor, todo lo que este antes es borrado/cortado) hasta el 22(lo que viene despues es cortado)
var busqueda = texto1.split(" "); // Crea un array separadas con el separador que se coloca en los parentesis.
var busqueda = texto1.trim(); // saca los espacios que tengo por delante y por atras
console.log(busqueda);























/*
var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

console.log(dato);

// Calcular longitud

var nombre = "Victor Robles";
    nombre = ["hoa", "hola"];

console.log(nombre.length)

// Concatenar - Unir textos

// var textoTotal = texto1 + " " + texto2; Metodo 1
var textoTotal = texto1.concat(" " + texto2) // Metodo 2


console.log(textoTotal);

*/
