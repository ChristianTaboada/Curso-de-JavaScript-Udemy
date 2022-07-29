'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

// peliculas.sort();    ordena la array por orden alfabetico
// piliculas.reverse(); ordena la array del ultimo al primero(inverso)
var cine = [categorias, peliculas];
//console.log(cine[0][1]);
//console.log(cine[1][2]);

// con estro en la array cine pude buscar adentro de sus arrays lo que estaba buscando
// Arrays multidimensionales

/*
var elemento = "";
do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);

}
while(elemento != "ACABAR")

peliculas.pop(); // borra el ultimo elemento de la array

*/
// eliminar un elemento de la array
var indice = peliculas.indexOf('La verdad duele');
if(indice > -1){
    peliculas.splice(indice, 1);
}

// convertir un array en un string
var peliculas_string = peliculas.join();

// convertir un string a un array

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);
