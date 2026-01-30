// Christian Colmenares
//                     0       1         2         3         4        5         6
let mesesDelAño = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
console.log(mesesDelAño)


// Tarea: 
/*
    Crear un programa en JavaScript
    Que muestre por pantalla los meses del año
    Guaooooo
*/

// Estudiar sobre:  Objetos literales -  Eventos 
 
// Solución del ejercicio
document.writeln('<ol>');
mesesDelAño.forEach(mes => {
    document.writeln(`<li>${mes}</li>`);
});
document.writeln('</ol>');
// Asignación: Refactorizar el código, pero ahora utilizando: for - for of


// Objetos literales
// Un objeto posee: Propiedades - Características - Atributos (Funciones - Métodos - Procedure)
let persona = {
    nombre: 'Daniel',
    apellido: 'Fuentes',
    email: 'cedavilu@gmail.com',
    direccion : 'Perú - Lima'
}

console.log(persona);
document.writeln(`<h2>Hola mi nombre es: ${persona.nombre} ${persona.apellido} </h2>`);

// Array de objetos - Arreglos de objetos - Estructura de datos
let arrayPersonas = [
    {
        nombre: 'Daniel',
        apellido: 'Fuentes',
        email: 'cedavilu@gmail.com',
        direccion : 'Perú - Lima'   
    },
    {
        nombre: 'Pedro',
        apellido: 'Pimentel',
        email: 'pedro@gmail.com',
        direccion : 'Argentina'   
    },
    {
        nombre: 'Cristian',
        apellido: 'Colmenarez',
        email: 'cristian@gmail.com',
        direccion : 'Argentina'   
    }
];

console.log(arrayPersonas);
// Mostrar por pantalla los nombres y apellidos de cada usuario
document.writeln(`<h2>Listado de usuarios </h2>`);
document.writeln('<ul>');
arrayPersonas.forEach(persona => {
    document.writeln(`<li>${persona.nombre} ${persona.apellido}</li>`);
});
document.writeln('</ul>');

// Asignación: Resolver el ejercicio utilizando for - for of

// Desde JavaScript podemos: Cambiar el contenido de los elementos del DOM (Modelo Objeto Documento) - Aplicar CSS a los elementos - Aplicar clases a los elementos.

// Debemos primero capturar al elemento del DOM
// Capturar elementos del DOM: ID (#) - CLASES ( . ) - ETIQUETA (h1, h2,p ul, ol)
// Capturando elementos utilizando el id
let titulo = document.getElementById('titulo');
let boton = document.getElementById('boton');


console.log(titulo);
// Variando el contenido del elemento capturado
titulo.innerHTML = 'Bienvenid@ al curso de JavaScript';

// Podemos cambiar o aplicar CSS al elemento capturado
// titulo.style.color = 'white';
// titulo.style.textAlign = 'center';
// titulo.style.fontFamily = 'arial';
// titulo.style.fontSize = '50px';
// titulo.style.padding = '20px';
// titulo.style.backgroundColor = 'teal';

// Aplicando CSS desde JavaScript por medio de una clase
// Eventos
boton.addEventListener('click', ()=>{
    titulo.classList.add('destacado');
    // titulo.style.color = 'white';
    // titulo.style.textAlign = 'center';
    // titulo.style.fontFamily = 'arial';
    // titulo.style.fontSize = '50px';
    // titulo.style.padding = '20px';
    // titulo.style.backgroundColor = 'teal';
})

// Asignación: Deben lograr que al hacer click sobre el boton, también se debe cambiar el fondo de color negro y las letras de color blanco.



// Estudiar: Eventos - Teclado - mouse - Librerias para JavaScript





































