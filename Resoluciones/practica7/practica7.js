'use strict'

// Link resoluciones -> 

// Practica 1
// Crea un array con 10 elementos, por ejemplo una lista de compras.
// Agrega tres elementos, uno al principio, uno al final y otro al medio del array.
// Cambia el valor de un elemento del array.
// Elimina el último elemento del array, sacalo por consola. (Chequea como hacerlo explorando la documentación del método)
// Ordena la lista alfabéticamente
// Busca un elemento, y saca por pantalla su index.
// Crea otro array con otros elementos, combina esta lista al final de la primera.
// Encontra la ultima coincidencia de un elemento, es decir el index.

const listado = ['Papa','Pan','Sal','Azucar','Tomate','Lechuga','Cebolla','Carne','Huevo','Leche']; 
listado.unshift('Carbon');
listado.splice(5, 0, 'Leña');
listado.push('Vinagre');
listado[0] = 'Batata';
console.log(listado.pop());
listado.sort();
const listado2 = ['Caramelos', 'Chupetines', 'Pan'];
const listadoFinal = listado.concat(listado2);
console.log(listadoFinal);
console.log('La ultima ocurrencia de "Pan" es:', listadoFinal.lastIndexOf('Pan'));

// Recordemos que para agregar un elemento al incio utilizamos el metodo unshitf, para agregar al medio utilizaremos splice
// y para agregar al final utiizaremos push. splice recibe 3 parametros. El primero es el index donde se insertara el elemento
// el segundo la cantidad de elementos a borrar a partir del index, el tercero, el elemento a insertar.
// Cambio papa por batata. Chequear metodo POP. Recordemos que concat devuelve la concatenacion de dos arrays. Por ello debemos
// alamacenarle en un nuevo array. Para buscar el index de una ocurrencia tenemos dos alternativas, la primer buscar desde el inicio
// hacia atras (indexOf) o desde atras hacia adelante (lastIndexOf)

// Practica 2
// Crea un array conteniendo como dato los numero 1, 2 y 3.
// Crea otro array, almacenando el array anterior 3 veces.
// Saca por pantalla el segundo valor del segundo array.

const grilla = [1, 2, 3];
const superGrilla = [grilla, grilla, grilla];
console.log('El segundo valor del segundo array es:', superGrilla[1][1]);

// Practica 3
// Crea un objeto miAuto. Agregale 5 propiedades que creas conveniente. Pueden ser modelo, tipo, etc. Podes utilizar diferentes 
// tipos de datos como number, string y boolean.
// Agrega una variable tipo color y asignale un valopr. luego saca por consola ese valor, a traves la notacion con corchetes.
// Agrega una variable llamada venta, y asiganale un valor booleano, saca el valor por pantalla. Utiliza la notacion con punto.
// Saca marca y modelo por consola, en una sentencia.
// Saca el valor de venta por consola, en oracion completa.

let miAuto = {
  marca: 'Fiat',
  modelo: 'Punto',
  año: 2010,
  fabricacion: 'Argentina',
  precio: 13215645.54
};

miAuto.color = 'Rojo';
console.log('El color del auto es:', miAuto['color']);

miAuto.venta = true;
console.log('El auto se encuentra a la venta?', miAuto.venta ? 'SI' : 'NO');

console.log(`Mi auto es un ${miAuto.marca} ${miAuto.modelo}, y es del año ${miAuto.año}.` );
console.log(`Y si te interesa esta a la venta por ${miAuto.precio} pesos argentinos.`);

// Practica 4
// Crear un objeto llamado persona con tus datos (una persona tiene nombre, apellido, y documento) que a su vez 
// contenga un array llamado amigos (un amigo es una persona).
// Crea tres variables persona, cada una conteniendo un objeto, que esté compuesto por tres amigos tuyos.
// Agrega cada una de estas variables al array amigos.
// Saca el objeto por consola.

let yo = {
  nombre: 'Gaston',
  apellido: 'Lopez',
  dni: 123123123,
  amigos: []
}
let amigo1 = {
  nombre: 'Marcos',
  apellido: 'Salamaca',
  dni: 88888888,
  amigos: []
}
let amigo2 = {
  nombre: 'German',
  apellido: 'Paloma',
  dni: 99999999,
  amigos: []
}
let amigo3 = {
  nombre: 'Luciano',
  apellido: 'Solano',
  dni: 777777777,
  amigos: []
}
yo.amigos.push(amigo1, amigo2, amigo3);
console.log(yo);

// Practica 5
// Considera el siguiente array:
const listadoModificar = [
  'Juan',
  'Perez', 
  true, 
  35, 
  null, 
  undefined,
  {
    test: 'primero', 
    puntaje: 55
  }, 
];

// Modifica todos el array usando diferentes métodos, por ejemplo pop(), push(), shift(), y unshift(), de tal manera que quede de 
// la siguiente manera.
// [
//   'PRIMERO', 
//   'Perez', 
//   'TERCERO', 
//   'hola MUNDO',  
//   'ULTIMO'
// ]

// Podríamos tomar el siguiente camino
// -Eliminar el primer y el último elemento.
// -Agrega PRIMERO al principio del array.
// -Agrega hola MUNDO en el cuarto lugar.
// -Agrega 'TERCERO' en el tercer lugar.
// -Agrega 'ULTIMO' en el último lugar.
// Saca por consola el resultado.

listadoModificar.pop();                                   // Elimino el ultimo elemento, el objeto
listadoModificar.shift();                                 // Elimino el primer elemento, "Juan"
listadoModificar.unshift('PRIMERO');                      // Agrego "PRIMERO" al inicio del array
listadoModificar.splice(3, 0, 'hola MUNDO');              // Agrego "hola MUNDO" en el cuarto lugar
listadoModificar.splice(2, 0, 'TERCERO');                 // Agrego "TERCERO" en el tercer lugar
listadoModificar.push('ULTIMO');                          // Agrego "ULTIMOO" al final del array.
listadoModificar.splice(5, 3);                            // A partir de la posicion 5 borro 3 elementos
listadoModificar.splice(3, 1);                            // A partir de la posicion 3 borro 1 elemento
console.log(listadoModificar); 

// Solo resta eliminar 35, null y undefined (5, 6, 7). True tambien en la posicion 3


// Práctica 6
// Crea un array que va a albergar el stock de productos de y un comercio.
// Crea tres elementos productos. Un producto tiene nombre, precio y cantidad.
// Agrega estos tres elementos al array, utiliza el método correspondiente. Luego mostrá el inventario stock por consola.
// Saca por consola la cantidad de cantidad que hay del tercer producto.
// Mostrá el nombre del segundo producto.
// Mostrá el precio del primer producto.

const stock = [];
let producto1 = {
  nombre: 'Harina', 
  precio: 1234,
  cantidad: 14
};
let producto2 = {
  nombre: 'Azucar', 
  precio: 2222,
  cantidad: 10
};
let producto3 = {
  nombre: 'Sal', 
  precio: 3333,
  cantidad: 0
};
stock.push(producto1, producto2, producto3);
console.log(stock);
console.log(`Existen ${stock[2].cantidad} de unidades de ${stock[2].nombre} en stock.`);
console.log(stock[1].nombre);
console.log(stock[0].precio);

// Practica 7
// Crea un script que sea un juego de adivinar un numero.
// Genera un numero aleatorio usando el metodos Math.random() (recorda en este metodo devuelve un numero decimal 
// entre 0 y 1, multiplicalo por 10, y luego redondealo asi queda entero. utliza el metodo Math.floor() para ello.
// Crea una variable de control booleana para saber si acerto o no al numero.
// Crea una variable de control (iterador) que va a ser el valor maximo de veces que se puede intentar adivinar el número, 
// si se supera sale del bucle.
// Utiliza un bucle while donde se le pida que ingrese un número válido entre 0 y 9, convertí la entrada a number, sino 
// sucede algo inesperado (número fuera de rango o ingreso de valor no numérico) se debe pedir nuevamente que ingrese un número.
// Chequea si este numero es el correcto, si lo es proporciona una salida logica del bucle (utiliza la variable boolena)
// Si la respuesta es incorrecta informale al usuario si su respuesta fue mayor o menor que el numero X. Brindale un numero 
// finito de intentos, de manera que el bucle no sea infinito (la variable de control iterador)

let numeroAleatorio = Math.floor(Math.random() * 10);
console.log('Numero aleatorio:', numeroAleatorio)
let acerto = false;
let iterador = 0;
while (!acerto && iterador < 5) {
  let numero = Number(prompt('Adivina el numero, ingresa un numero entre 0 y 9'));
  if (isNaN(numero)) {
    console.log('Entrada no valida');
  } else if (numero >= 0 && numero <= 9) {                          // Si el usuario realiza una entrada correcta
    if (numero === numeroAleatorio) {                               // Si el usuario acerta
      alert('Acertaste');
      acerto = true;                                                // AL cambiar al valor de acerto se sale del bucle
    } else {
      alert('No acertaste')
    }
  } 
  iterador++;
}


// Este while va a ejecutar su codigo mientras la variable acerto sea falsa e iterador no sea mayor igual que 5 
// SI trato de castear cualquiera cosa que no sea numero el metodo Number va a devolver NaN

// Practica 8
// Utilizando un bucle do…while crea un script donde se chequee que un usuario ingrese su contraseña dos veces, 
// chequeando que ambos input sean iguales.
// Crea una variable booleana de control.
// Crea una variable iteradora donde se limite el maximo de intentos.
// Pregunta al usuario su contraseña, en un prompt.
// Pedile que la reingrese, en otro prompt.
// Compara que ambas sean iguales, si lo son brinda una salida logica, sino lo son repeti la operacion. 

let iguales = false;
let iterador2 = 0;
do {
  let contraseña = prompt('Ingresá tu contraseña.');
  let confirmacion = prompt('Confirmá tu contraseña.');
  if (contraseña === confirmacion && contraseña != '') {           // Pregunto ademas si la contraseña no esta vacia
    alert('Se cambio correctamente la contraseña');
    iguales = true;
  } else {
    alert('Las contraseñas no coinciden o estan vacias.');
  }
  iterador2++;
} while (!iguales && iterador2 < 5)               // mientras no iguales sea false e iterador sea menor que 5


// Preguntas, respondelas sin codificar.
// -Se puede utilizar la palabra reservada const para definir un array? Se puede, luego de asignado el valor inicial, 
// modificar un valor dentro del array. // Mal formulada la pregunta - Respuesta: Si y si
// -Cual es la propiedad que contiene la longitud de un array.            // Arrays.lenght()
// -Cuál será la salida por consola:
//   const listado = [1,3,5,6,8,9,15];
//   console.log(listado.indexOf(0));                                     // 0 no esta en el array, por lo tanto -1
//   console.log(listado.indexOf(3));                                     // 1
// -Cómo podés reemplazar el segundo elemento del listado anterior por el valor 4.  // listado.splice(1, 1, 4)
// -Cual es la salida por consola:
//   const listado2 = [];
//   listado2[10] = 'prueba'                                            // Crea un array de 11 posiciones, con la onceava = 'prueba
//   console.log(listado2);                                             // [, , , , , , , , , , ,'prueba'];
//   console.log(listado2[2]);                                          // Si no esta definido -> undefined
// -Cual es la salida por consola:
//   const listado3 = [3,6,8,9,3,55,553,434];             
//   listado3.sort();                                                   // [3,3,6,8,9,55,434,553]
//   listado3.length = 0;                                               // al asignar 0 al length el array queda vacio
//   console.log(listado3[0]);                                          // undefined (el array esta vacio)