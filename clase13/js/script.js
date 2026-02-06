// Capturando los elementos del DOM
let formulario = document.getElementById('formulario');
// console.log(formulario);

// Declarar las variables
let usuarios = [];

// Tomar el control de formulario
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let nombre = document.getElementById('nombre');
    console.log(nombre.value);
    usuarios.push({
        nombre: nombre.value
    });
    console.log(usuarios);
    Swal.fire({
        title: "Registro guardado!",
        text: "Registro guardado con éxito!",
        icon: "success"
    });
    // Debemos limpiar la pantalla de captura y también limpiar el valor
    nombre.innerHTML = '';
    nombre.value = '';
    nombre.focus();
    // Asignación: No permitir avanzar si el campo está vacio - Validación
    // Culminar de registrar todos los campos solicitados al usuario en el formulario
    // Lograr el focus() en el nombre dispuesto en el formulario
    // Tanto al cargar como al registrar al usuario
})