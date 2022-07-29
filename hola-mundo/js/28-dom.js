'use strict'

// Dom- Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}
// Conseguir elementos con un ID concreto

// var caja = document.getElementById("micaja"); esta es una manera de hacerlo
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

// Conseguir elementos por su etiqueta
/*var TodosLosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = TodosLosDivs[2].innerHTML = "Otro texto para el segundo elemento";
TodosLosDivs.forEach((valor, indice) => {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(valor);
    parrafo.appendChild(texto); 
}

)
console.log(contenidoEnTexto);
*/


// Conseguir elementos por su clase CSS


var divsRojos = document.getElementsByClassName('rojo');
var div;
for(div in divsRojos){
    if(divsRojos[div].className === "rojo"){
        divsRojos[div].style.background = "red"
    }

}


// Query selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);

