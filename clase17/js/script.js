// Trabajando con las APIs
async function obtenerPersonajes(){
    // Capturar el elemento del DOM
    let listado = document.getElementById('listado');
    try {
        const uri = 'https://rickandmortyapi.com/api/character#';
        const resultado = await fetch(uri);
        const datos = await resultado.json(); 
        // console.log(datos.results);
        let personajes = datos.results;
        for (const personaje of personajes) {
            listado.innerHTML+= `
                <article class="col-12 col-md-6 col-lg-3">
                    <img class="w-100" src="${personaje.image}" alt="${personaje.name}">
                    <h3 class="text-center">${personaje.name}</h3>
                </article>
            `
        }    
    } catch (error) {
        console.log('Ufff ha ocurrido un error: ' , error.message);
    }
}

// Ejecutar la función - invocar a la función
// obtenerPersonajes();


// Capturando el boton listar
let botonListar = document.querySelector('#botonListar');
let body = document.querySelector('body');
botonListar.addEventListener('click', function(){
    body.classList.add('fondoPagina');
    obtenerPersonajes();
})

// -----------------------------------------------------------------------------
// Código para poder seleccionar los personajes
async function selectorPersonaje(){
    // Capturar el elemento del DOM
    let selectorPersonaje = document.getElementById('selectorPersonaje');
    try {
        const uri = 'https://rickandmortyapi.com/api/character#';
        const resultado = await fetch(uri);
        const datos = await resultado.json(); 
        // console.log(datos.results);
        let personajes = datos.results;
        // selectorPersonaje.innerHTML = '';
        for (const personaje of personajes) {
            selectorPersonaje.innerHTML+= `
                <option value="${personaje.name}">${personaje.name}</option>
            `
        }    
    } catch (error) {
        console.log('Ufff ha ocurrido un error: ' , error.message);
    }
}
// Invocar a la función
selectorPersonaje();