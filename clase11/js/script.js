// Capturando elementos del DOM
let body = document.getElementById('body');
let circulo = document.getElementById('circulo');
// console.log(circulo);
let velocidad = 50;
let margenIzquierdo = 0;

//                                Callback
body.addEventListener('keydown', function (evento) {
    console.log(evento);
    if (evento.key != 'ArrowRight' && evento.key != 'ArrowLeft' && evento.key != 'ArrowUp' && evento.key != 'ArrowDown') {
        // alert('Debe utilizar las fechas de su teclado');
        Swal.fire({
            title: "Tenga pendiente!",
            text: "Debe utilizar las fechas de su teclado!",
            icon: "error"
        });
    }

    if (evento.key === 'ArrowRight') {
        moverDerecha();
    }
    if (evento.key === 'ArrowLeft') {
        moverIzquierda();
    }
    // Asignación: Hacer que el circulo suba y baje
})


// Crear las funciones
function moverDerecha() {
    margenIzquierdo = margenIzquierdo + velocidad;
    circulo.style.marginLeft = margenIzquierdo + 'px';
}

function moverIzquierda() {
    margenIzquierdo = margenIzquierdo - velocidad;
    circulo.style.marginLeft = margenIzquierdo + 'px';
}