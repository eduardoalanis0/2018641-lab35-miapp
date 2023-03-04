
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
}
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

let gastoTXT = document.getElementById("gasto");
let montoTXT = document.getElementById("monto");
let arreglo = document.getElementById("mostrarArreglo");

let gastos = [];

function guardar(){
    let nuevoGasto = gastoTXT.value + ": $" + montoTXT.value;
    gastos.push(nuevoGasto);

    console.log(gastos)
    
    mostrarArreglo.innerHTML = gastos;

    limpiar2();
}

function limpiar2(){
    gastoTXT.value=" ";
    montoTXT.value=" ";
}
