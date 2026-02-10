// Capturar un elemento del DOM
let listado = document.getElementById('listado');
// Trabajando con las APIs
// FETCH() - Promises
//               URI

fetch('https://picsum.photos/v2/list')
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) => {
        console.log(datos);
        datos.forEach(foto => {
            listado.innerHTML += `
            <article class="col-12 col-md-6 col-lg-3">
                <img  class="w-100" src="${foto.download_url}" alt="${foto.author}"/>
                <h4>${foto.author} </h4>
            </article>
        `
        });
    })
    .catch((error) => {
        console.error('Ufff ha ocurrido un error: ', error);
    })

    