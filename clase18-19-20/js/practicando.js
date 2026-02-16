// Estudiar para mañana: JSON.stringify - JSON.parse - filter - map - find (Método de array)   

let amigos = [
    {
        id: 1,
        nombre: 'Pedro'
    },
    {
        id: 2,
        nombre: 'Christian'
    },
    {
        id:3,
        nombre: 'Daniel'
    }
];

console.log(amigos);
// Pasar a un archivo en formato JSON
let amigosJSON = JSON.stringify(amigos);
console.log(amigosJSON);

// Pasar de un archivo json a un objeto - Iterable
let amigosIterables = JSON.parse(amigosJSON);
console.log(amigosIterables);

// Métodos avanzados de arrays
// map - filter - reduce  (Podemos generar un nuevo array)
let numeros = [3,5,8,2,6,10,15,20,16];
// let nuevoArray = numeros.map(function(valor){
//     return valor * 2;
// })
// Otra forma de codificarlo
// let nuevoArray = numeros.map((valor)=>{
//     return valor * 2;
// })
// Otra forma - Siempre y cuando solo tengamos un único return
let nuevoArray = numeros.map((valor)=> valor * 2);

console.log(numeros);
console.log(nuevoArray);

// ----------------------------------------------------------------------
// filter
// let filtrado = numeros.filter(function(valor){
//     return valor >=5;
// })

let filtrado = numeros.filter((valor)=>{
    return valor >=5;
})

console.log(numeros);
console.log(filtrado);
// ----------------------------------------------------------------------
// reduce
let sumarValores = numeros.reduce(function(acumulador,valor){
    return acumulador + valor;
})

console.log(sumarValores);







