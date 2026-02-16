// Trabajando con localStorage - sessionStorage - CRUD - ABM
// Create - Read - Update - Delete

// setItem -> Guardar en el storage
// getItem -> Leer el storage
// removeItem -> Borrar el elemento del storage
// clear -> Limpiar todo el storage


// Almacenamiento Local - en el navegador del usuario
// Capturando al elemento
document.getElementById('agregar').addEventListener('click', agregar);
document.getElementById('listar').addEventListener('click', listar);
document.getElementById('modificar').addEventListener('click', modificar)
document.getElementById('eliminar').addEventListener('click', eliminar);
document.getElementById('eliminarTodos').addEventListener('click', eliminarTodos);
// Declaro las varibles

let amigos;
// console.log(amigos);

if (JSON.parse(localStorage.getItem('amigos')) === null) {
    amigos = [];
    // console.log(amigos);
} else {
    amigos = JSON.parse(localStorage.getItem('amigos'));
    // console.log(amigos);
}

// console.log(amigos);


// Funciones
// Agregar datos al localStorage
function agregar() {
    let nombre = prompt('Nombre de mi amig@');
    amigos.push(nombre);
    localStorage.setItem('amigos', JSON.stringify(amigos));
}

// Estudiar para mañana: JSON.stringify - JSON.parse - filter - map - find (Método de array)   
// Listar los datos
function listar() {
    amigos = JSON.parse(localStorage.getItem('amigos'));
    if (amigos.length === 0) {
        alert('No hay registros a mostrar');
    } else {
        let listado = document.getElementById('listado');
        listado.innerHTML = '';
        for (const amigo of amigos) {
            listado.innerHTML += `
        <li>${amigo} </li>
       `
        }
    }

}

function modificar() {
    amigos = JSON.parse(localStorage.getItem('amigos'));
    if (amigos === null) {
        alert('No hay registros para modificar');
    } else {

        let nombreACambiar = prompt('Indique el nombre que quiere cambiar');
        let nuevoNombre = prompt('Indique el nuevo nombre');
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === nombreACambiar) {
                amigos[i] = nuevoNombre
            }
        }
        localStorage.setItem('amigos', JSON.stringify(amigos));
        // Investigar y practicar sobre el método: find() -  foreach - for of
    }

}

function eliminar() {
    amigos = JSON.parse(localStorage.getItem('amigos'));
    if (amigos.length === 0) {
        alert('No hay registros para eliminar')
    } else {
        let nombreAEliminar = prompt('Indique el nombre a eliminar');
        // Utilizando filter
        let nuevoArrayAmigos = amigos.filter((amigo) => {
            return amigo !== nombreAEliminar;
        })
        localStorage.setItem('amigos', JSON.stringify(nuevoArrayAmigos));
        alert(`Registro eliminado: ${nombreAEliminar}`);
    }
}

function eliminarTodos() {
    amigos = JSON.parse(localStorage.getItem('amigos'));
    localStorage.clear();
    alert('Registros eliminados satisfactoriamente!!!');
}