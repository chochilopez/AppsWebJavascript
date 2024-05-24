'use strict'

// Ejercicio 1
let nombre = 'Augusto';
console.log(`Hola ${1}`); // Hola 1
console.log(`Hola ${'nombre'}`); // Hola nombre
console.log(`Hola ${nombre}`); // Hola Augusto

// Ejercicio 2
let cadena = 'Esto es texto'; // Variable de tipo String
let numero = 5; // Variable de tipo Number
let numeroGrande = 4565454n;
let estaSoleado = true; // Variable de tipo Bool
let simbolo = Symbol('Esto es texto'); // Variable de tipo Symbol
let noDefinido = undefined; // Variable de tipo Undefined
let nulo = null; // Variable de tipo Null 

// Ejercio 3
console.log(typeof cadena); // String
console.log(typeof numero); // Number
console.log(typeof numeroGrande); // Bigint
console.log(typeof estaSoleado); // Boolean
console.log(typeof simbolo); // Symbol
console.log(typeof noDefinido); // undefined
console.log(typeof nulo); // Object
