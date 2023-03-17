<<<<<<< HEAD
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

let usuarioTXT = document.getElementById("usuario");
let passwordTXT = document.getElementById("password");

let p = document.getElementById("mensaje");

function login(){
    p.innerHTML = "Login correcto, " + usuarioTXT.value;

    limpiar();
}

function registro(){
    p.innerHTML = "Registro correcto, " + usuarioTXT.value;

    limpiar();
}

function limpiar(){
    usuarioTXT.value = "";
    passwordTXT.value ="";
=======
//Archivo de Javascript

var campoTexto = document.getElementById("campoTexto");

console.log(campoTexto);


function imprimir(){
    console.log(campoTexto.value);
}

//Función limpiar valor del Campo de Texto
function limpiar(){
    campoTexto.value=" ";
>>>>>>> daacd9a817c3965ee8a6b222ae2a9c7d7a007977
}