//Archivo de Javascript

var campoTexto = document.getElementById("campoTexto");

console.log(campoTexto);


function imprimir(){
    console.log(campoTexto.value);
}

//Función limpiar valor del Campo de Texto
function limpiar(){
    campoTexto.value=" ";
}