'use strict'

// Práctica 1:
// Cual te parece que es la salida de las siguientes sentencias?

// let nombre = 'Augusto';
// console.log( `Hola ${1}` );             // "Hola 1"
// console.log( `Hola ${'nombre'}` );      // "Hola nombre"
// console.log( `Hola ${nombre}` );        // Hola Augusto

// Práctica 2:
// Definí una variable por cada tipo de dato qeu vimos en clase. Que cada variable tengo un nombre descriptivo y contenga un dato del mismo tipo. Por ej:

let cadenaCaracteres = 'Esto es una cadena de caracteres.';
let numero = 4545454;
let booleano = false;
let numeroGrande = 456456456456454n;
let simbolo = Symbol('Esto es una cadena de caracteres.');
let indefinido = undefined;
let vacioDesconocido = null;

console.log(cadenaCaracteres);
console.log(numero);
console.log(booleano);
console.log(numeroGrande);
console.log(simbolo);
console.log(indefinido);
console.log(vacioDesconocido);

// Y asi sucesivamente con todos los tipos visto. Luego saca por consola cada una de las variables.

// Práctica 3:
// Utilizá el operador typeof para sacar por consola el tipo de dato de cada una de cada una de las variables que definiste en el punto anterior.

console.log(typeof cadenaCaracteres);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof numeroGrande);
console.log(typeof simbolo);
console.log(typeof indefinido);
console.log(typeof vacioDesconocido);