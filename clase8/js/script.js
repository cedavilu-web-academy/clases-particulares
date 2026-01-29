// Crear un  array con los dias de semana
// Crear un array con los meses del año
// Estudiar: Funciones - ciclo for - foreach - for of
// Christian Colmenares
//                     0       1         2         3         4        5         6
let diasDeSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
console.log(diasDeSemana)
let mesesDelAño = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
console.log(mesesDelAño)

// Funciones
// Existen varias formas de escribir las funciones
// Funciones declarativas - declaradas
//               Parámetro

// function saludar(nombre){
//     alert(`Bienvenido a mi sitio web  ${nombre}`);
// }

// Función expresada - expresiva - Funciones anónimas
// let saludar = function(nombre){
//     alert(`Bienvenido a mi sitio web  ${nombre}`);
// }

// Funciones arrow - Funciones flechas
// let saludar = (nombre)=>{
//     alert(`Bienvenido a mi sitio web  ${nombre}`);
// }


// Invocar la función
//      Argumento o valor
// saludar('Pedro');
// saludar('Cristian');
// saludar('Daniel');


// Crear otra función - Retorna datos
// let sumar = (valor1, valor2)=>{
//     let resultado = valor1 + valor2;
//     return resultado;
// }

// // Invocar a la funcion
// let resultadoOperacion = sumar(10,20);
// console.log(resultadoOperacion);
// console.log(sumar(50,100));


// Mecanismos para crear ciclos o bucles
// for
//  Iniciar el contador - Condición - Incremento
// Contar desde 1 a 10
console.log('Contar desde 1 a 10');
for(let i= 1; i <= 10; i++){
    console.log(i);
}
// Contar desde 10 a 1
console.log('Contar desde 10 a 1');
for(let i= 10; i >= 1; i--){
    console.log(i);
}

// foreach - Por cada
// Recurso por excelencia para recorrer arrays
console.log('Usando el foreach');
diasDeSemana.forEach(dia => {
    console.log(dia);
});

console.log('Usando el ciclo for');
for(let i=0; i < diasDeSemana.length; i++){
    console.log(diasDeSemana[i]);
}

console.log('Usando el for ... of');
for (const dia of diasDeSemana) {
    console.log(dia);
}

// Tarea: 
/*
    Crear un programa en JavaScript
    Que muestre por pantalla los meses del año
    Guaooooo
*/

// Estudiar sobre:  Objetos literales -  Eventos 
 










































