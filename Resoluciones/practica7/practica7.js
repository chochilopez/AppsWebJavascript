'use strict'

// Practica 1
// Crea un array con 10 elementos, por ejemplo una lista de compras.
// Agrega tres elementos, uno al principio, uno al final y otro al medio del array.
// Cambia el valor de un elemento del array.
// Elimina el último elemento del array, sacalo por consola. (Chequea como hacerlo explorando la documentación del método)
// Ordena la lista alfabéticamente
// Busca un elemento, y saca por pantalla su index.
// Crea otro array con otros elementos, combina esta lista al final de la primera.
// Encontra la ultima coincidencia de un elemento, es decir el index.

// Practica 2
// Crea un array conteniendo como dato los numero 1, 2 y 3.
// Crea otro array, almacenando el array anterior 3 veces.
// Saca por pantalla el segundo valor del segundo array.

// Practica 3
// Crea un objeto miAuto. Agregale 5 propiedades que creas conveniente. Pueden ser modelo, tipo, etc. Podes utilizar diferentes tipos de datos como number, string y boolean.
// Agrega una variable tipo color y asignale un valopr. luego saca por consola ese valor, a traves la notacion con corchetes.
// Agrega una variable llamada venta, y asiganale un valor booleano, saca el valor por pantalla. Utiliza la notacion con punto.
// Saca marca y modelo por consola, en una sentencia.
// Saca el valor de venta por consola, en oracion completa.

// Practica 4
// Crear un objeto llamado persona con tus datos (una persona tiene nombre, apellido, y documento) que a su vez contenga un array llamado amigos (un amigo es una persona).
// Crea tres variables persona, cada una conteniendo un objeto, que esté compuesto por tres amigos tuyos.
// Agrega cada una de estas variables al array amigos.
// Saca el objeto por consola.

// Practica 5
// Considera el siguiente array:
// const listado = [
//   'Juan',
//   'Perez', 
//   true, 
//   35, 
//   null, 
//   undefined,
//   {
//     test: 'primero', 
//     puntaje: 55
//   }, 
// ]

// Modifica todos el array usando diferentes métodos, por ejemplo pop(), push(), shift(), y unshift(), de tal manera que quede de la siguiente manera.
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

// Práctica 6
// Crea un array que va a albergar el stock de productos de y un comercio.
// Crea tres elementos productos. Un producto tiene nombre, precio y cantidad.
// Agrega estos tres elementos al array, utiliza el método correspondiente. Luego mostrá el inventario stock por consola.
// Saca por consola la cantidad de cantidad que hay del tercer producto.
// Mostrá el nombre del segundo producto.
// Mostrá el precio del primer producto.

// Practica 7
// Crea un script que sea un juego de adivinar un numero.
// Genera un numero aleatorio usando el metodos Math.random() (recorda en este metodo devuelve un numero decimal entre 0 y 1, multiplicalo por 10, y luego redondealo asi queda entero. utliza el metodo Math.floor() para ello.
// Crea una variable de control booleana para saber si acerto o no al numero.
// Crea una variable de control (iterador) que va a ser el valor maximo de veces que se puede intentar adivinar el número, si se supera sale del bucle.
// Utiliza un bucle while donde se le pida que ingrese un número válido entre 1 y 9, convertí la entrada a number, sino sucede algo inesperado (número fuera de rango o ingreso de valor no numérico) se debe pedir nuevamente que ingrese un número.
// Chequea si este numero es el correcto, si lo es proporciona una salida logica del bucle (utiliza la variable boolena)
// Si la respuesta es incorrecta informale al usuario si su respuesta fue mayor o menor que el numero X. Brindale un numero finito de intentos, de manera que el bucle no sea infinito (la variable de control iterador)

// Practica 8
// Utilizando un bucle do…while crea un script donde se chequee que un usuario ingrese su contraseña dos veces, chequeando que ambos input sean iguales.
// Crea una variable booleana de control.
// Crea una variable iteradora donde se limite el maximo de intentos.
// Pregunta al usuario su contraseña, en un prompt.
// Pedile que la reingrese, en otro prompt.
// Compara que ambas sean iguales, si lo son brinda una salida logica, sino lo son repeti la operacion. 

// Preguntas, respondelas sin codificar.
// -Se puede definir la palabra reservada para definir un array, se puede modificar una propiedad?
// -Cual es la propiedad que contiene la longitud de un array.
// -Cuál será la salida por consola:
//   const listado = [1,3,5,6,8,9,15];
//   console.log(listado.indexOf(0));
//   console.log(listado.indexOf(3));
// -Cómo podés reemplazar el segundo elemento del listado anterior por el valor 4.
// -Cual es la salida por consola:
//   const listado2 = [];
//   listado2[10] = 'prueba'
//   console.log(listado2);
//   console.log(listado2[2]);
// -Cual es la salida por consola:
//   const listado3 = [3,6,8,9,3,55,553,434];
//   listado3.sort();
//   listado3.length = 0;
//   console.log(listado3[0]);