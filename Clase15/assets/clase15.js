'use strict';

// Metodos concatenados
let cadena = 'Hola';
console.log(cadena.concat(' mundo').toUpperCase().concat('!!!!'));

// Algunos metodos podemos accederlos in llamar al objeto
let numero = 14;
window.console.log(Number.isNaN(numero));   // false - is Not a Number
console.log(isNaN(numero));                 // false

// https://www.ejemplo.com/buscar-usuario/buscar?nombre=Juan Martin

let busqueda = 'https://www.ejemplo.com/buscar-usuario/buscar?nombre=Juan Martin';
let uriCodificada = encodeURI(busqueda);
console.log(uriCodificada);
let uriDecodificada = decodeURI(uriCodificada);
console.log(uriDecodificada);

// parseInt vs Number
console.log(parseInt('20'));
console.log(parseInt('20globos'));
console.log(parseInt('123ABC'));
console.log(Number('20'));
console.log(Number('20globos'));
console.log(Number('123ABC'));

// parseFloat convierte una cadena a un decimal
let decimal = '2.3.4.5';
console.log(parseFloat(decimal));

// No es lo mismo convertir una cadena utilizando Number() que new Number()
// let numerito = Number('15');
// let numeritoObjeto = new Number('15');   // NO UTILIZAR!
// console.log(numerito);
// console.log(numeritoObjeto);

// Metodos avanzados de los arrays
// Arrys.forEach 
// Ejecuta una funcion callback para cada elemento del array.
const semaforo = ['Rojo', 'Amarillo', 'Verde'];
semaforo.forEach((elemento) => console.log(elemento));

// Arrays.filter
// Filtra un array, creando una nueva, con aquellos elementos que cumplan la condicion
// establecida en la funcion callback

const variado = ['hola', 5, 'mundo', new Date(), true];
console.log(variado.filter(esCadena));

function esCadena(elemento, posicion) {
  return typeof elemento === 'string';
}

// Arrays.every
// Chequea si cada elemento del array cumple con la condicion pasada a traves de la funcion
// callback. Devuelve un tipo de dato booleano
console.log(variado.every(esCadena));

// Arrays.map
// Crea un nuevo array con los elementos modificados o no de acuerdo a lo pasado en la 
// funcion callback
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];
const cuadradoFibonacci = fibonacci.map((x) => x ** 2);
console.log(cuadradoFibonacci);

// Metodos de String
// split va a dividir una cadena de acuerdo al pattern que se pase como
// parametro
let direccion = 'Calle: Siempre Viva 123, Ciudad: Springfield, Estado: No se sabe, Pais: USA';
const arregloDireccion = direccion.split(' ', 3);
console.log(arregloDireccion);

// Parana, Oro Verde, Federacion, Federal, Chajari
// ciudades.csv Comma Separated Value -> Valores separados por coma
// Parana;Oro Verde;Federacion;Federal;Chajari
const ciudades = 'Parana;Oro Verde;Federacion;Federal;Chajari'.split(';');
console.log(ciudades);

// Arrays.join va a concatenar en una cadena de texto todos los valores 
// de un array
console.log(variado.join());
console.log(variado.join(';'));
console.log(variado.join('-'));

// toUppercase y toLowerCase pasan una cadena a mayusculas o minusculas
// respectivamente
console.log('esto esta todo en mayusculas'.toUpperCase());
console.log('ESTO ESTA TODO EN MINUSCULAS'.toLowerCase())

// Metodos de Number
// isNaN -> chequea si un dato es no numerico. Retorna un bool.
let numerito = 15;
console.log('Numerito es NaN?', isNaN(numerito)); // false
console.log('ciudades es NaN?', isNaN(ciudades));  // true
console.log('La cadena "18" es NaN', isNaN('18'));

// isFinite chequea si un dato es un valor numerico finito.
console.log('Numerito isFinite?', isFinite(numerito)); 
console.log('ciudades isFinite?', isFinite(ciudades)); 
console.log('La cadena "18" isFinite', isFinite('18'));

// toFixed determina la cantidad de decimales de un numero. Redondea si 
// es necesario
console.log((15.56).toFixed(1));
console.log((15.011111111).toFixed(2));
console.log((15).toFixed(2));

// Metodos del objeto Math
console.log(Math.round(3.9));
console.log(Math.sqrt(64));
console.log(Math.trunc(64.12));
console.log(Math.trunc(64.99));

// Te epoch -> 01 de enero de 1970 UTC
// Los formatos de fecha (en cadena) que se pasen al constructor Date deben ser al tipo de fecha
// ingles. Es decir el mes antes que los dias
let fecha = new Date('01/30/2022');
console.log(fecha.getFullYear()); 
console.log(fecha.getMonth()); 
console.log(fecha.getDate()); 
console.log(fecha.getSeconds()); 
let fecha2 = new Date(2024, 11, 16);
console.log(fecha2);