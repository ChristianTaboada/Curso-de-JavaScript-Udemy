'use strict'

// Eventos del raton
window.addEventListener('load', function(){

    function cambiarColor(){
        console.log("Me has dado click");
        var bg = boton.style.backgroundColor;
        if(bg === "green"){
            boton.style.backgroundColor = "red";
            
        }else{
            boton.style.backgroundColor = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
    
        return true;
    }
    
    var boton = document.querySelector("#boton");
    // Evento Click
    boton.addEventListener('click',function(){
        cambiarColor();
    });
    
    // Mouse Over
    
    boton.addEventListener('mouseover', function(){
        boton.style.background = "yellow";
    });
    
    // Mouseout
    
    boton.addEventListener('mouseout', function(){
        boton.style.background = "#ccc";
    })
    
    // Focus
    var input = document.querySelector("#campo_nombre")
    input.addEventListener('focus', function(){
        console.log("[focus]Estas dentro del input");
    })
    
    // Blur
    input.addEventListener('blur', function(){
        console.log("[blur]Estas afuera del input");
    })
    // Keydown
    input.addEventListener('keydown', function(event){
        console.log("[Keydown]Pulsando esta tecla ", event.key);
    })
    //Keypress
    
    input.addEventListener('keypress', function(event){
        console.log("[Keypress]Tecla presionada ", event.key);
    })
    
    // Keyup
    
    input.addEventListener('keyup', function(event){
        console.log("[Keyup]Tecla soltada ", event.key);
    })
    
    
}) // End load
