'use strict'

// Practica 1:
// Creá un conversor de millas a kilómetros.
// Crea una página y un script que permita el ingreso de millas y devuelva su correspondiente conversión a kilómetros.
// Presentá al usuario un alert con el siguiente mensaje: ‘La distancia de … millas es igual a … kilometros.’
// Tené en cuenta que una milla es igual a 1.60934 kilometros.
let millas = Number(prompt('Ingresa la distancia en millas.'));
let kilometros = millas / 1.60934;
alert(`La distancia de ${millas} millas es equivalente a ${kilometros} kilometros.`);

// Practica 2:
// Calculadora de Indice de Masa Corporal
// Creá una pagina y un script donde se reciban dos parametros, en primer lugar la altura en centimetros, luego el peso en kilos. 
// Converti los resultados a pulgadas (una pulgada es igual a 2.54 cm) y libras (2.2046 libras es igual a 1 kilo). 
// Luego calculá el IMC, para ello tenes que dividir los kilos por la altura en metros. Mostra todos los resultados en un alert.

// Preguntas, contestalas sin codificar.

// 1. Que tipo de dato almacena la siguiente variable?
// const c = "99";

// 2. Que tipo de dato almacena la siguiente variable?
// const c = 16;

// 3. Cual cree es que esta mejor difinida, la variable 1 o la 2?
// let vacio1 = undefined; // 1
// let vacio1 = null; // 2

// 4. Cual sera la salida del siguiente script?
// let a = "Hola";
// a = "mundo";
// console.log(a);

// 5. Cual sera la salida del siguiente script?
// let a = "mundo";
// let b = `Hola ${a}!`;
// console.log(b);

// 6. Cual es el valor de a?
// let a = "Hola";
// a = prompt("mundo");  // El usuario solo apreta aceptar
// console.log(a);

// 7. Cual será el valor de b?
// let a = 4;
// let b = 43;
// let c = "8";
// b++;
// console.log(b);

// 8. Cual es valor de resultado?
// let resultado = 4 + 14 * 22 / 5;

// 9. Cual sera el valor de las dos variables total?
// let numero1 = 54;
// let numero2 = 15;
// numero1++;
// numero2--;
// let total = ++numero1 + numero2;
// console.log(total);
// let total2 = 345 + 335 / 45 + total--;
// console.log(total2);

// 10. Cual será la salida por consola?
// const a = 4;
// const b = 66;
// console.log(a > 0 && b > 0);
// console.log(a == 3 && b == 44);
// console.log(true || false);
// console.log(a == 4 || b == 333);
// console.log(a == 4 || b == 66);

