'use strict'

// Link resoluciones -> 

// Practica 1:
// Creá un conversor de millas a kilómetros.
// Crea una página y un script que permita el ingreso de millas y devuelva su correspondiente conversión a kilómetros.
// Presentá al usuario un alert con el siguiente mensaje: ‘La distancia de … millas es igual a … kilometros.’
// Tené en cuenta que una milla es igual a 1.60934 kilometros.

// Ya tengo creada la pagina html y la importacion a este script. Creo un prompt en el script para pedirle al usuario las millas
// Como salvedad hay que convertir (castear) lo que nos devuelva el prompt (que es un string) a Number

let millas = Number(prompt('Ingresá la cantidad de millas.'));
let kilometros = millas * 1.60934;
alert(`La distancia de ${millas} millas es igual a ${kilometros} kilometros.`);

// Practica 2:
// Calculadora de Indice de Masa Corporal
// Creá una pagina y un script donde se reciban dos parametros, en primer lugar la altura en centimetros, luego el peso en kilos. 
// Converti los resultados a pulgadas (una pulgada es igual a 2.54 cm) y libras (2.2046 libras es igual a 1 kilo). 
// Luego calculá el IMC, para ello tenes que dividir los kilos por la altura en metros. Mostra todos los resultados en un alert.

// En primer lugar pregunto al usuario la altura en centimetros y el peso en kilogramos. Convierto luego de centimtros a pulgadas
// y de kilogramos a libras. Luego saco el IMC, que es igual a dividir kilogramos por altura en metros.

let alturaCentimetros = Number(prompt('Ingresá la altura en centimetros.'));
let pesoKilogramos = Number(prompt('Ingresá el peso en kilogramos.'));
let alturaPulgadas = alturaCentimetros * 2.54;
let pesoLibras = pesoKilogramos / 2.2046;
let alturaMetros = alturaCentimetros / 100; // Para el IMC necesito convertir de centimetros metros
let imc = pesoKilogramos / alturaMetros;
console.log(`La altura en centimetros de ${alturaCentimetros} es igual a ${alturaPulgadas} pulgadas.`);
console.log(`El peso en kilogramos de ${pesoKilogramos} es igual a ${pesoLibras} libras.`);
console.log(`El indice de masa corporal es: ${imc}.`);

// Preguntas, contestalas sin codificar.
// 1. Que tipo de dato almacena la siguiente variable?
// const c = "99"; 
// El contenido de la variable esta entre comillas, por lo tanto es un string

// 2. Que tipo de dato almacena la siguiente variable?
// const c = 16;          
// El contenido de la variable es un numero, sin n al final, por lo tanto Number

// 3. Cual cree es que esta mejor difinida, la variable 1 o la 2?
// let vacio1 = undefined; // 1
// let vacio1 = null; // 2     
// No es una buena práctica inicializar una varible con undefined, por lo tanto 2          

// 4. Cual sera la salida del siguiente script?
// let a = "Hola";
// a = "mundo";
// console.log(a);               
// La salida es "mundo". Ya que en la segunda sentencia se sobreescribe la variable

// 5. Cual sera la salida del siguiente script?
// let a = "mundo";
// let b = `Hola ${a}!`;
// console.log(b);         
// La salida es "Hola mundo!". Se concatena los que se declara en b con lo que almacena a.

// 6. Cual es el valor de a?
// let a = "Hola";
// a = prompt("mundo");  // El usuario solo apreta aceptar
// console.log(a);    
// La salida es "". Recordar que si no se ingresa nada en un prompr este devuelve una cadena vacia ("").

// 7. Cual será el valor de b?
// let a = 4;
// let b = 43;
// let c = "8";
// b++;
// console.log(b);   
// La salida es 44. Ya que en la cuarta linea se le realiza una suma unaria como sufijo.

// 8. Cual es valor de resultado?
// let resultado = 4 + 14 * 22 / 5;   
// El resultado de 4 + 14 * 22 / 5 = 4 + (14 * 22 / 5) = 65.6

// 9. Cual sera el valor de las dos variables total?
// let numero1 = 54;                            
// let numero2 = 15;
// numero1++; 
// numero2--;
// let total = ++numero1 + numero2;                // numero1 = 56 y numero2 = 14 - total = 70     
// console.log(total);                             // La salida es 70
// let total2 = 345 + 335 / 45 + total--;          // 345 + (335 / 45) + 70 = 422.44
// console.log(total2);                            // La saluda es 422.44

// 10. Cual será la salida por consola?
// const a = 4;                                     
// const b = 66;
// console.log(true || false);                      // verdadero o falso = true            
// console.log(a > 0 && b > 0);                     // a es mayor que 0 y b es mayor que 0 = true
// console.log(a == 3 && b == 44);                  // a no es igual a 3, por lo tanto no importa el resto = false
// console.log(true || false);                      // verdadero o falso = true
// console.log(a == 4 || b == 333);                 // a es igual a 4, no importa el resto, al menos uno es verdadero = true
// console.log(a == 4 || b == 66);                  // a es igual a 4, no importa el resto, al menos uno es verdadero = true

// RECORDAR
// En la comparacion lógica SI (o && o AND) ambos terminos de la comparacion deben ser verdaderos 
// en orden de que la comparacion sea verdadera
// En la comparacion lógica O (o || o OR) al menos uno de los terminos de la comparacion debe ser verdaderos 
// en orden de que la comparacion sea verdadera

