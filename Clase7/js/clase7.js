'use strict'

// Metodos mas utilizados de la clase Array
// Push, lo vamos a utilizar para agregar elementos a un array
const listado = ['Manzana', 'Batata', 'Tomate', 'Lechuga'];
console.log(listado);
listado.push('Naranja');
console.log(listado);

// Splice, lo puede utilizar entre cosas para agregar elementos a un array
// Como parametros recibe en primer lugar el index donde se hace la insercion, luego la cantidad de elementos
// a partir del index si se quisiera, y luego el elemento a insertar.
listado.splice(2, 0, 'Papas');
console.log(listado);

// Concat me permite concatenar dos arrays y guardarlo en nuevo
const limpieza = ['Lavandina', 'Jabon'];
const nuevoListado = listado.concat(limpieza);
console.log(nuevoListado);

// Pop elimina el ultimo elemento de un array y lo devulve
console.log('Remuevo el ultimo elemento', nuevoListado.pop());
console.log('El listado sin el ultimo elemento', nuevoListado)

// Shift elimina el primer elemento de un array y lo devulve
console.log('Remuevo el primer elemento', nuevoListado.shift());
console.log('El listado sin el primer elemento', nuevoListado)

// Splice en tanto se utiliza para eliminar cualquier cantidad elementos a partir de cualquier posicion
nuevoListado.splice(2, 2);
console.log(nuevoListado);

// Find va a a recibir como parametro una funcion flecha la caul va a retornar el primer valor que cumpla
// esa condicion.
console.log(nuevoListado.find((elemento) => elemento == 'Papas'));

// IndexOf me va a devolver el indice del primer elemento que sea igual al que se paso por parametro
console.log(nuevoListado.indexOf('Papas')); // deberia ser un numero positivo o 0
console.log(nuevoListado.indexOf('Auto')); // Si no encuentra el elemento devuelve -1

// LastIndexOf me va a devolver el index del primer elemennto que sea igual al que se paso por parametro
// pero buscando desde el final del array al inicio
nuevoListado.push('Papas');
console.log(nuevoListado);
console.log(nuevoListado.indexOf('Papas')); // Esto me devuelve la primer ocurrencia desde el inicio
console.log(nuevoListado.lastIndexOf('Papas')); // Esto me devuelve la primer ocurrencia desde el final
nuevoListado.pop();

// Sort me va a ordenar los elementos de un array de menor a mayor o alfabeticamente
nuevoListado.sort();
console.log(nuevoListado);

// Reverse me va a invertir el orden de los elementos de un array
nuevoListado.reverse();
console.log(nuevoListado);

// Arrays multidimensionales. Un array de una dimension, o vector, es simil a un edificio, donde cada
// piso puede contener un tipo de dato (pirmitivo o complejo)
const listadoCompras = ['Harina', 'Fideos', 'Aceite'];

// Un array de dos dimensiones, o matriz, va a ser analogo a que dentro de cada piso que hay el edificio
// tengo x cantidad de departamentos. Cada uno de los cuales puede almacenar un tipo de dato.
const lacteos = ['Leche', 'Queso', 'Yogurt'];
const frutas = ['Manzana', 'Pera', 'Naranja'];
const carnes = ['Pollo', 'Cerdo', 'Res'];

listadoCompras.push(lacteos, frutas, carnes);
console.table(listadoCompras);

console.log(listadoCompras[4][2]); // Naranja
console.log(listadoCompras[3][1]); // Queso

// Objetos
let auto = {
  marca: 'Ford',
  modelo: 'Galaxy',
  motor: '2.0',
  color: 'Rojo',
  asegurado: true
};

console.log(auto);
console.log('Mi auto es de color:', auto['color']); // Notacion con corchetes, no usar
console.log('El modelo de mi auto es:', auto.modelo); // Notacion con punto, usar

auto.modelo = 1998; // Actualiza el valor accediendo a la propiedad
console.log(auto);

auto.cantidadNeumaticos = 4;
console.log(auto);

// Ejemplo de practica de arrays y objetos
/*
  Crear un objeto llamado persona con tus datos (una persona tiene nombre, apellido, y documento) que 
  a su vez contenga un array llamado amigos (un amigo es una persona).
  Crea tres variables persona, cada una conteniendo un objeto, que esté compuesto por tres amigos tuyos.
  Agrega cada una de estas variables al array amigos.
  Saca el objeto por consola.
*/

let yo = {
  nombre: 'Gaston',
  apellido: 'Lopez',
  dni: 12345678,
  amigos: []
};

let amigo1 = {
  nombre: 'Marcos',
  apellido: 'Wagner',
  dni: 8888888,
  amigos: []
};

let amigo2 = {
  nombre: 'Marcos',
  apellido: 'Brauer',
  dni: 12345678,
  amigos: []
};

let amigo3 = {
  nombre: 'Diego',
  apellido: 'Keiner',
  dni: 12345678,
  amigos: []
};

// yo.amigos.push(amigo1)
// yo.amigos.push(amigo2)
// yo.amigos.push(amigo3)
yo.amigos.push(amigo1, amigo2, amigo3)

console.log(yo);

// Bucles
// While - Mientras...
let iterador = 0;
while (iterador < 10) {
  console.log(iterador++)
}
console.log('Continua el flujo del programa')

// Otro ejemplo
const amigos = ['Juan', 'Raul', 'Esteban', 'Luisa', 'Deborah']; //  length -> 5
let esAmigo = false; // Variable de control boolena
iterador = 0; // Variable de control numerica, que lleva la cantidad de vueltas
let nombreIngresado = 'Raul'; // el nombre a buscar

while (iterador < amigos.length && !esAmigo) {
  if (amigos[iterador] == nombreIngresado) {
    esAmigo = true
  }
  iterador++;
}
esAmigo ? console.log('Es amigo') : console.log('No es amigo');

// Do.. while, el codigo se ejecuta por lo menos una vez

let correcta = false; // variable de control
do {
  let contraseña1 = prompt('Ingresa tu contraseña');
  let contraseña2 = prompt('Ingresa nuevamente tu contraseña');
  contraseña1 === contraseña2 ? correcta = true : correcta = false;
  correcta ? alert('Contraseña almacenada correctamente') : alert('Las contraseñas no coinciden');
} while (!correcta)