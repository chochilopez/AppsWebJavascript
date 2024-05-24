'use strict'

// Los metodos de la clase Windows
// El primero de ellos alert()
// https://developer.mozilla.org/es/docs/Web/API/Window/alert
let mensaje = 'Esto es un mensaje para el usuario';
alert(mensaje);

// El segundo metodo es confirm()
// https://developer.mozilla.org/es/docs/Web/API/Window/confirm

// if (confirm('Estas aprendiendo')) {
//   alert('Me alegro que estes aprendiendo.');
// } else {
//   alert('Que lastima.');
// }

let dialogoConfirm = confirm('Mensaje');
console.log(typeof dialogoConfirm);

// El tercer metodo es prompt()
// https://developer.mozilla.org/es/docs/Web/API/Window/

let nombre = prompt('Decime tu nombre');
alert('Me alegro de conocerte ' + nombre);

let dividendo = prompt('Ingresa el dividendo');
let divisor = prompt('Ingresa el divisor');
console.log('El resultado de la operacion es:', dividendo / divisor);

let numero1 = prompt('Ingresa el primer numero de la suma'); // 45
let numero2 = prompt('Ingresa el segundo numero de la suma'); // 55
console.log('El resultado de la operacion es:', Number(numero1) + Number(numero2)); //4555


let miEdad = 45;
let añoActual = '2024';
let estoyCasado = true;
let miNombre = 'Gaston'; 

console.log(Number(añoActual)); // 2024
console.log(Boolean(añoActual)); // true
console.log(Number(miNombre)); // NaN
console.log('El año que viene va a ser el:', añoActual + 1); // 20241
console.log('El año que viene va a ser el:', Number(añoActual) + 1); // 2025