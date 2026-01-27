// Trabajando con las variables
let nombre = 'Daniel';
let apellido = 'Fuentes';
let edad = 58;
let esProfesor = true;  // false - true

// Debugger - Verificar si existe algún error o no
console.log(typeof(nombre));
console.log(typeof(apellido));
console.log(typeof(edad));
console.log(typeof(esProfesor));

// Operadores: 
// Aritméticos: + - * /
// Relacionales - Comparación: > < >= <= != == ===
// Lógicos: AND (y) && - OR (o) || - NOT (no) !


// Desarrollar un programa en JavaScript, que permita pedir al usuario dos valores
// Con los valores suministrados: deben efectuar la sumatoria de los datos 
// Mostrar el resultado por la pantalla

// Opcional: Pedir al usuario el tipo de operación: sumar + restar + multiplicar + dividir
/*
    Indique valor 1:
    Indique valor 2:
    Indique operación ('sumar - restar - multiplicar - dividir')
    Debe hacer el cálculo
    Mostrar el resultado
*/

// Repasar: Variables - Operadores - Condiciones - Arreglos - Arrays - Vectores
// Solución
// Parsear los datos
// let valor1 = parseInt(prompt('Indique valor 1'));
// let valor2 = parseInt(prompt('Indique valor 2'));
// let operacion = prompt('Indique tipo de opéración: sumar - restar - multiplicar - dividir');
// console.log(operacion);

// let resultado = 0;
// // Condiciones
// // Condiciones simples - compuestas - anidadas
// if(operacion === 'sumar'){
//     resultado = valor1 + valor2;
//     document.writeln(`<h2>Al ${operacion}: ${valor1} + ${valor2} = ${resultado} </h2>`);
// }else if (operacion === 'restar'){
//     resultado = valor1 - valor2;
//     document.writeln(`<h2>Al ${operacion}: ${valor1} - ${valor2} = ${resultado} </h2>`);
// }else if(operacion === 'multiplicar'){
//     resultado = valor1 * valor2;
//     document.writeln(`<h2>Al ${operacion}: ${valor1} * ${valor2} = ${resultado} </h2>`);
// }else if(operacion === 'dividir'){
//     resultado = valor1 / valor2;
//     document.writeln(`<h2>Al ${operacion}: ${valor1} / ${valor2} = ${resultado} </h2>`);
// }else{
//     document.writeln(`Usted indicó: ${operacion} sin embargo debe indicar el tipo de opreración:sumar - restar - multiplicar - dividir`);
// }


/*
    Operadores:
    Aritméticos: (+ - * /)

    Operador de concatenación
    +

    Operador de asignación:
    =

    Relacionales - Comparación 
    > < >= <= != == (No toma en cuenta el tipo de dato) === (Si toma en cuenta el tipo de dato)

    Lógicos:
    AND - y - && - Se usa regularmente para crear RANGOS
    OR - o - || - Se usa para tener en cuenta cualquier valor de compración
    NOT - no - !  - Negación
*/

let numero1 = 10;
let numero2 = '10';
console.log(numero1 === numero2);
console.log(numero1+Number(numero2));

let numero3 = Number(prompt('Indique un número'));
let numero4 = Number(prompt('Indique otro número'));
console.log(numero3 > numero4);
// Condición compuesta
if(numero3 > numero4){
    alert(`El número: ${numero3} es mayor que el número: ${numero4}`);
}else{
    alert(`El número: ${numero4} es mayor que el número: ${numero3}`);
}

// Ejercicio:
/*
    Crear un programa en Javascript que permita calcular el aumento de sueldo de un trabajador
    
    Pedir por pantalla:
        - Nombre del trabajador
        - Apellido del trabajador
        - Sueldo actual
        - Porcentaje de aumento
    
    Calcular:
        El nuevo sueldo: 200.000 - Porcentaje de aumento del: 30%
        Monto del aumento: 60.000
        Nuevo sueldo: 260.000

    Mostrar pantalla: (<h2>)
        Nombre:
        Apellido:
        Sueldo actual:
        Porcentaje de aumento:
        Aumento:
        Nuevo sueldo:
*/

// Arrays - Vectores - Arreglos - Matrices













