'use strict'

// // Ejercicio 1
// // Metodo 1
// alert('Este es el primer metodo visto');
// // Metodo 2
// let resultadoConfirm = confirm('Acepta o rechaza?');
// console.log(resultadoConfirm);
// // Metodo 3
// let nombre = prompt('Ingresa tu nombre');
// console.log(nombre);

// Ejercicio 2
let variable1 = 'Rosario'; // String
let variable2 = "Bicicleta"; // String
let variable3 = undefined; // Undefined
let variable4 = null; // Object
let variable5 = 1000; // Number 
let variable6 = 1000n; // Bigint

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);
console.log(typeof variable6);

// Ejercicio 3
console.log( Number("   123   ") ); // 123
console.log( Number("123z") ); // NaN - Not a Number
console.log( Number(true) ); // 1 , tambien es sinonimo de prendido, o de correcto   
console.log( Number(false) ); // 0, tambien es sinonimo de apagado, o de incorrecto 
console.log( Number('false') );

// Ejercicio 4
// Arreglar este codigo para poder sumar
// let a = prompt('Para sumar dos numeros, ingresa el primero:', 1);
// let b = prompt('Ahora ingresa el segundo:', 2);
// let resultado = Number(a) + Number(b);
// console.log(resultado);

// Ejercicio 5
// Calculador de hipotenusa
let cateto1 = prompt('Ingresa el cateto 1:', 2);
let cateto2 = prompt('Ingresa el cateto 2:', 3);
let hipotenusa = Math.sqrt(Number(cateto1)**2 + Number(cateto2)**2);
console.log('Hipotenusa -> ', hipotenusa);

// Ejercicio 6
let numero1 = 5;
let numero2 = 10;
let numero3 = 33;

numero1 -= numero2; // A la primera restale la segunda. Utilizo operadores de asignacion.
numero1 *= numero3;// Multiplica la primera por la tercera.
numero3 %= numero2;// Reemplaza el valor de la tercera por el módulo de la tercera por la segunda.
console.log(numero1); // Imprimí los tres números por la consola.
console.log(numero2);
console.log(numero3);

// Ejercicio 9
let a = 1; // 1
let b = 1; // 1
let c = ++a; // 2
let d = b++; // 1
console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
console.log(d); // 1

// Ejercicio 10
let numA = 2;
let x = 1 + (numA *= 2); // 1 + (2*2)
console.log(x);
console.log(numA);


