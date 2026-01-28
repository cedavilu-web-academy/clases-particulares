// Ejercicio:
/*
    Crear un programa en Javascript que permita calcular el aumento de sueldo de un trabajador
    
    Pedir por pantalla:
        - Nombre del trabajador - nombre
        - Apellido del trabajador - apellido
        - Sueldo actual - sueldoActual
        - Porcentaje de aumento - porcentajeAumento
    
    Calcular:
        El nuevo sueldo: 200.000 - Porcentaje de aumento del: 30%
        Monto del aumento: 60.000 - montoAumento
        Nuevo sueldo: 260.000 - nuevoSueldo

    Mostrar pantalla: (<h2>)
        Nombre:
        Apellido:
        Sueldo actual:
        Porcentaje de aumento:
        Aumento:
        Nuevo sueldo:
*/
// Arrays - Vectores - Arreglos - Matrices
// Array vacio
// let miFamilia = [];
// Tipos de datos: String - Number - Boolean - Array - Objeto - Undefind - Null
//                  0        1        2       3
let miFamilia = ['Gloria','Indira','Victor','Luis'];
console.log(typeof(miFamilia));
console.log(miFamilia);
console.log(miFamilia[1]);
console.log(miFamilia[4]);

miFamilia[4] = 'Yelena';
console.log(miFamilia[4]);

miFamilia[0] = 'Zulay';
console.log(miFamilia);

// Funciones para los arrays: 
// push(); - Almacenar datos al fial del array
// pop() - Sacar el último elemento del array
// length - Cantidad de elementos del array

miFamilia.push('Henry');
console.log(miFamilia);

//  Crear un programa, que solicite por pantalla:
// Pedir el dato:Nombre de amistades
// Guardar en el array: amigos
// imprimir en la consola el resultado
// Enviado por Pedro

// Pedir al usuario la cantidad de amigos a registrar
let cantidadAmigos = 0;
let contadorAmigos = 1;
let amigos=[];

cantidadAmigos = Number(prompt('Cantidad de amigos a registrar:'));
while (contadorAmigos <= cantidadAmigos) {
    let nombreDeAmigo= prompt("indique el nombre de su amigo aca:")
    amigos.push(nombreDeAmigo);
    alert('Amigo regitrado de forma exitosa!!!');
    contadorAmigos++;
}

console.log(amigos)

// Ciclos - Bucles repetitivos
// while - do while - for - foreach - for of - for in - filter - map - reduce

//  Funciones

//  Objetos literales
console.log('Usando el while');
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    // contador = contador + 1;
    // contador+=2;
    contador++;
}

// do while
console.log('Usando el do while');
let numero = 11;
do {
    console.log(numero);
    numero++;
} while (numero <=10);

// El do while, lo podemos usar para validar datos

// Crear un  array con los dias de semana
// Crear un array con los meses del año
// Estudiar: Funciones - ciclo for - foreach - for of










































