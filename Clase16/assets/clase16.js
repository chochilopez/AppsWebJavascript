'use strict'
import {UsuarioModel} from '../modulos/usuario_model.js';
import {llaveroService} from '../modulos/llavero_service.js';

// La bandera o flag i ignora si es mayusculas o minusculas
let texto = 'Yo desarrollo con Javascript';
console.log(texto.match(/javascript/i));

// Pipelina | funciona como or
// La bandera o flag g matchea en todas las ocurrencias en toda la cadena
let texto2 = 'Yo desarrollo con Javascript y utilizo HTML y CSS.';
console.log(texto2.match(/Javascript|HTML|css/g));

// [a-z] matchea en secuencia de la "a" a la "z" en minusculas. 
// [A-Z] lo hace en masyusculas, y [0-9] lo hace con digitos.
console.log(texto2.match(/[a-fA-Z0-9]/g));

// El punto dentro de la regex matchea cualquier caracter
console.log(texto2.match(/./g));

// El punto escapado matchea el carcter punto. 
// Para escapar un caracter debemos anteponer la contrabarra.
console.log(texto2.match(/\./g));

// La d escapada matchea digitos.
console.log(texto2.match(/\d/g));

// La s escapada matchea espacios en blanco.
console.log(texto2.match(/\s/g));

// La b escapada matchea contra lo que este al inicio de una palabra.
console.log(texto2.match(/\bscript/g));

// el metodo match es especifico de la clase String, no existe en otras clases.
// let variableNumber = 15;
// console.log(variableNumber.match(/1/));

let encanta = 'Me encanta Javascript';
console.log(encanta.match(/(encanta|odio)\s(javascript|cocodrilo)/ig));

console.log(texto2.replace(/javascript/ig, 'PHP'));

// COLECCION Map
// Coleccion que almacena datos con el formato key-value o clave-valor
// Metodos de Map -> set() - get() - has() - delete() - clear()
// Propiedades de Map -> size

const mapa = new Map();
let carlos = {nombre: 'Carlos'};

mapa.set('Primera llave', 'Primer dato');
mapa.set(false , 'Valor falso');
mapa.set(3, 'Tercer dato');
mapa.set(carlos, 'Puedo utilizar un objeto como key.');
mapa.set(5*5, 'Puedo resolver operaciones en argumento key!');

console.log(`Mi mapa tiene ${mapa.size} elementos.`);

console.log(mapa.get('Primera llave'));
console.log(mapa.get('Segunda llave'));

console.log(mapa.has(carlos));

console.log(mapa.delete(false));

mapa.set(1, '1').set(2, '2').set(3, '3');

console.log(`Mi mapa tiene ${mapa.size} elementos.`);
console.log(mapa);

console.log(mapa.keys());
console.log(mapa.values());
console.log(mapa.entries());

mapa.forEach((llave, valor) => 
  console.log(`La llave ${llave} posee un valor de ${valor}.`)
);

// La coleccion Set no permite valores duplicados.
const conjunto = new Set();
let juan = {nombre: 'Juan'};
let maria = {nombre: 'Maria'};
let luciano = {nombre: 'Luciano'};

conjunto.add(juan);
conjunto.add(juan);
conjunto.add(juan);
conjunto.add(juan);
conjunto.add(juan);
conjunto.add(maria);

console.log(conjunto.size);

// console.log(conjunto.keys());
console.log(conjunto.values());
console.log(conjunto.entries());

// Cookies en Javascript a traves del accessor document.cookie
document.cookie = 'nombre=Gaston';
document.cookie = 'color=verde;expires=Thu, 01 Jan 1970;';

// API LocalStorage
let mensaje = 'Hola desde LocalStorage';
localStorage.setItem('mensaje', mensaje);
console.log(localStorage.getItem('mensaje'));
console.log(localStorage.key(0));
console.log(localStorage.getItem(localStorage.key(0)));

const gaston = new UsuarioModel();
gaston.nombre = 'Gaston Lopez';
gaston.direccion = 'Su casa 123';

console.log(gaston);

llaveroService.guardarEnLocal('objeto', gaston, Date.now(10000));

console.log(llaveroService.obtenerDeLocal('objeto'));















