// Trabajando con eventos
// Capturar los elementos del DOM
// let body = document.getElementById('body');

// let body = document.querySelector('body');
// let body = document.querySelector('#body');
let body = document.querySelector('.body');
console.log(body);

// Deseo capturar los elementos que poseen una misma clase o corresponden a una misma etiqueta
let botones = document.querySelectorAll('button');
console.log(botones);


let botonOscuro = document.getElementById('botonOscuro');
let botonClaro = document.getElementById('botonClaro');

let botonMoto = document.getElementById('botonMoto');
let botonCarro = document.getElementById('botonCarro');


// Existe otra forma para capturar los elementos del DOM
// Me permite capturar por Etiqueta (h1 - h2 - p - ul - body) - por ID ('#id' ) y por clase 
// ('.clase')

// Invocando los eventos desde JavaScript
// botonOscuro.addEventListener('click', modoOscuro);
// botonClaro.addEventListener('click', modoClaro);


// Invocando los eventos desde JavaScript - De otra forma
//                                  Callback()
botonMoto.addEventListener('mouseout', function(){
    body.classList.remove('fondoCarro');
    body.classList.add('fondoMoto');
})

botonCarro.addEventListener('mouseout', function(){
    body.classList.remove('fondoMoto')
    body.classList.add('fondoCarro')
})



// Creando funciones
function modoOscuro() {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}

function modoClaro() {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
}