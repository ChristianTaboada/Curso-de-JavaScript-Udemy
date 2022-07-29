'use strict'

// BOM - Browser Object Model
function getBom(){
console.log(window.innerHeight); // tamaño de la pantalla actual
console.log(window.innerWidth); // tamaño de la pantalla actual
console.log(screen.width); // Tamaño de la pantalla de usuario ancho
console.log(screen.height); // Tamaño de la pantalla del usuario alto
console.log(window.location); // Muestra los objetos de location, esta todo lo que se puede sacar
console.log(window.location.href) // imprime la url

}

function redirect(url){
    window.location.href = url; // me redirije a otra url
}

function abrirVentana(url){ // se crea una funcion para abrir urls
    window.open(url,"","width=400,height=300"); // con esto abre una ventana aparte y ademas con unos tamaños definidos
}
getBom();