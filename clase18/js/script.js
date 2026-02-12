// Trabajando con localStorage - sessionStorage
// Almacenamiento Local - en el navegador del usuario
// Capturando al elemento
document.getElementById('agregar').addEventListener('click', agregar);

// Declaro las varibles
let amigos = [];



// Funciones
function agregar(){
    let nombre = prompt('Nombre de mi amig@');
    amigos.push(nombre);
    localStorage.setItem('amigos', JSON.stringify(amigos));
}

// Estudiar para mañana: JSON.stringify - JSON.parse - filter - map - find (Método de array)   
