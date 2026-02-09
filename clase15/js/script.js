// Trabajando con el setInterval()
let segundos = 0;
let intervalo = null;

//  1000 = 1 segundo
function iniciar(){
    intervalo = setInterval(() => {
        segundos++;
        // document.getElementById('contador').innerHTML = `<i>${segundos}</i>`;
        // document.getElementById('contador').innerText = `<i>${segundos}</i>`;
        // document.getElementById('contador').innerText = segundos;
        document.getElementById('contador').textContent = segundos;
    }, 1000);
}

function detener(){
    clearInterval(intervalo);
}

function reiniciar(){
    segundos = 0
    document.getElementById('contador').textContent = segundos;
}