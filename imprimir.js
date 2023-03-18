<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ab739b3ae3ff0c202f40968e078e59fc39f426f7
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
<<<<<<< HEAD
=======
=======

>>>>>>> ab739b3ae3ff0c202f40968e078e59fc39f426f7
//Archivo de Javascript

var campoTexto = document.getElementById("campoTexto");

console.log(campoTexto);


function imprimir(){
    console.log(campoTexto.value);
}

//Función limpiar valor del Campo de Texto
function limpiar(){
    campoTexto.value=" ";
<<<<<<< HEAD
>>>>>>> daacd9a817c3965ee8a6b222ae2a9c7d7a007977
}
=======

}

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

>>>>>>> ab739b3ae3ff0c202f40968e078e59fc39f426f7
