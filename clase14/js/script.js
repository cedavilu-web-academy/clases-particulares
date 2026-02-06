// Capturando los elementos del DOM
let formulario = document.getElementById('formulario');
let botonEnviar = document.getElementById('botonEnviar');
let botonListar = document.getElementById('botonListar');

// console.log(formulario);

// Declarar las variables
let usuarios = [];

// Tomar el control de formulario
// formulario.addEventListener('submit', (evento) => {
botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    console.log(nombre.value);
    usuarios.push({
        nombre: nombre.value,
        apellido: apellido.value,
        email : email.value,
        password: password.value
    });
    console.log(usuarios);
    nombre.focus();
    Swal.fire({
        title: "Registro guardado!",
        text: "Registro guardado con éxito!",
        icon: "success"
    });
    // Debemos limpiar la pantalla de captura y también limpiar el valor
    nombre.innerHTML = '';
    nombre.value = '';
    apellido.innerHTML = '';
    apellido.value = '';
    email.innerHTML = '';
    email.value = '';
    password.innerHTML = '';
    password.value = '';
    // Asignación: No permitir avanzar si el campo está vacio - Validación
    // Culminar de registrar todos los campos solicitados al usuario en el formulario
    // Lograr el focus() en el nombre dispuesto en el formulario
    // Tanto al cargar como al registrar al usuario
})

// Función para listar
botonListar.addEventListener('click', function (evento) {
    evento.preventDefault();
    let tbody = document.getElementById('tbody');
    usuarios.forEach((usuario)=> {
        tbody.innerHTML += `
            <tr>
                    <th scope="row">1</th>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.email}</td>
            </tr>
        `
    });
})