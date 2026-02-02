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

// Existe otra forma para capturar los elementos del DOM
// Me permite capturar por Etiqueta (h1 - h2 - p - ul - body) - por ID ('#id' ) y por clase 
// ('.clase')
