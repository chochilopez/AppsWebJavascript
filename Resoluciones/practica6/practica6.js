'use strict'

// Link resoluciones -> 

// Practica 1
// Realizar un script para un sitio donde no está permitido el ingreso de menores de 18 años. Para ello crea una pagina web 
// donde se le pregunte al usuario su edad y le avise si puede ingresar o no.

let edad = prompt('Ingresá tu edad.');
if (edad >= 18) {
  alert('Podés ingresar.');
} else {
  alert('No podés ingresar.');
}

// Una alternativa, al ser un bloque if...else, puede ser utilizar el operador ternario.

alert(prompt('Ingresá tu edad') >= 18 ? 'Podés ingresar.' : 'No podés ingresar.');

// Entonces, si al ingresar tu edad es mayor igual que 18 se va a mostrar el 1er segmento, en cambio, si no sucede lo anterior
// se ejecuta el segundo segemento. En ambos casos si el usuario ingresa algo no permitido (no evaluable) no podrá ingresar.

// Practica 2
// Examina el siguiente código. Primero explica porqué se produce el funcionamiento no deseado, luego solucionalo.
let clima = 'Caluroso';
if (clima == 'Frio') {
	console.log('Me llevo campera');
} else {
 	console.log('Salgo de remera');	
}

// El comportamiento no deseado ocurre porque en el if, en vez de realizarse una comparacion (==) se realiza una asignacion (=) donde
// se le asigna la cadena 'Frio' a la variable clima. Como el resultanmte de una asignacion es algo, ese comprobacion da true, por lo
// tanto se ejecuta 'Me llevo campera'. Para solucionar esto solo alcanza con agregar un signo = más.

// Practica 3
// Crear una variable con un valor booleano
// Mostra el valor por consola
// Chequea si la variable es verdadera, si lo es, saca un mensaje por consola diciendo que lo es
// Agrega otro if pero esta vez antes del nombre de la varaiable antepone el signo de exclamacion !
// Con este fin chequeas si la variable es falsa, saca por mensaje mensaje acorde.
// Cambia el valor de la variable al opuesto, que sucede?

let esVerdad = true;
console.log(esVerdad);
if (esVerdad) {
  console.log('La variable es verdadera:', esVerdad);
}
if (!esVerdad) {
  console.log('La variable es falsa:', esVerdad); // No se ejecuta ya que esVerdad es true, si se ejecuta ya que la variable es falsa
}

// Practica 4
// Desde un bar te solicitan que crees una página con un script donde se solicite la edad del usuario.
// Convertí la respuesta a número.
// Almacena el valor en una variable.
// Si la edad es mayor que 21, puede ingresar y ademas puede comprar alcohol.
// Si es mayor de 19 puede entrar, pero no puede comprar alcohol.
// Si en cambio es menor que 19 no puede entrar
// Informa al usuario el resultado.

let edadCliente = Number(prompt('Ingresá tu edad.'));
if (edadCliente < 19) {
  alert('No podés ingresar.');
} else if (edadCliente >= 19 && edadCliente < 21) {
  alert('Podés ingresar, pero no podes comprar/tomar bebidas alcoholicas.');
} else if (edadCliente >= 21) {
  alert('podés ingresar.');
}

// Tener cuidado con los signos, si hay un comportamiento no deseado, seguramente un signo esta al reves.

// Practica 5
// Declarar una variable identificación y asignarle un valor booleano
// Usa el operador ternario y crea un mensaje indicando si la identificacion es positiva o negativa.
// Saca el resultado por consola

let variableBool = false;
console.log(variableBool ? 'Es verdadera' : 'Es falsa');

// Practica 6
// Crea una variable llamada precio.
// Pedile al usuario que ingrese un número entre 0 y 10
// Convertí el resultado del ingreso a tipo de dato número
// Crea una variable que con el mensaje: “Cuanto sale: “
// Utilizando la sentencia switch (y tu creatividad) realiza una escala siendo 0 algo barato o regalado y 10 algo carísimo.
// Saca por consola un mensaje concatenando la variable mensaje con el resultado del switch

let precio = Number(prompt('Ingresa un numero entre 0 y 10.'));
let mensaje = 'Cuanto sale: ';

switch (precio) {
  case 0:
    mensaje += 'Regalado';
    break;
  case 1:
    mensaje += 'Mooooy barato';
    break;
  case 2:
    mensaje += 'Una ganga';
    break;
  case 3:
    mensaje += 'No sale nada';
    break;
  case 4:
    mensaje += 'Zafa';
    break;
  case 5:
    mensaje += 'Esta a buen precio';
    break;
  case 6:
    mensaje += 'Medio salado';
    break;
  case 7:
    mensaje += 'Salado';
    break;
  case 8:
    mensaje += 'La verdad, caro';
    break;
  case 9:
    mensaje += 'Cariiiiisssssiiiiimmmmooooo';
    break;
  case 10:
    mensaje += 'Los dos ojos de la cara';
    break;
  default:
    mensaje = 'Ingresaste cualquiera.';
    break;
}
console.log(mensaje);

// Practica 7
// Chequeador de amigos
// Preguntale al usuario su nombre
// Usando un bloque switch chequea si es amigo, conocido, pariente o si no lo conoces.
// Pasa por consola el resultado

let nombreUsuario = prompt('Ingresá tu nombre.');

switch (nombreUsuario) {
  case 'Mario':
  case 'Juliana':
  case 'Ricardo':
  case 'Marcelo':
  case 'Luciano':
  case 'Maria':
    console.log('Es amigo');
    break;
  case 'Marco':
  case 'Julio':
  case 'Repeto':
    console.log('Es conocido');
    break;
  case 'Martin':
  case 'Adriano':
  case 'Adrina':
    console.log('Es familiar');
    break;
  default:
    console.log('No te conozco');
    break;
}

// Recordemos que podemos aceptar y procesar diferentes valores en una sentencia, esto alcanza con agrupar aquellos valores que sean
// iguales y no poner la sentencia break, si hacerlo en la ultima de la serie de igualdades.

// Practica 8
// Piedra papel o tijeras
// Este es un juego entre la computadora y el usuario, en el cual ambos realizan una elección al azar de Piedra, Papel o Tijera.
// Roca le gana a tijera, tijera a papel, papel a roca.
// Creá una versión de este juego, te dejo algunas sugerencias.
// 1. Crea un array que contenga las variables pieda, papel y tijera.
// 2. Crea una variable que genere un numero entre 0 y 2 para la computadora.
// 3. Preguntale al usuario su eleccion, tiene que ingresar el nombre.
// 4. Crea una condicion que evalue el resultado de juego.
// 5. Saca por pantalla el resultado.

const grilla = ['piedra', 'papel', 'tijera'];
let eleccionPc = Math.round(Math.random() * (2 - 0) + 0);
let eleccionUsuario = grilla.indexOf(prompt('Ingresá tu juego, puede ser "piedra", "papel" o "tijera".'));
console.log(`Numero elegido por la pc: ${eleccionPc}, juego: ${grilla[eleccionPc]}.`)
console.log(`Seleccion del usuario ${eleccionUsuario}, juego: ${grilla[eleccionUsuario]}.`)
if (eleccionUsuario == -1) {
  alert('Ingresaste un juego no válido');
} else {
  if (eleccionPc == eleccionUsuario) {   // Ambos jugadores poseen el mismo juego
    alert('Empate');                     
  } else if (eleccionPc == 0) {          // La pc posee piedra
    if (eleccionUsuario == 1) {          // El usuario posee papel
      alert('Ganaste');                           
    } else if (eleccionUsuario == 2) {   // El usuario posee tijera
      alert('Perdiste');
    }
  } else if (eleccionPc == 1) {          // La pc posee papel
    if (eleccionUsuario == 0) {          // El usuario posee piedra
      alert('Perdiste');                           
    } else if (eleccionUsuario == 2) {   // El usuario posee tijera
      alert('Ganaste');
    }
  } else if (eleccionPc == 2) {          // La pc posee tijera
    if (eleccionUsuario == 0) {          // El usuario posee piedra
      alert('Ganaste');                           
    } else if (eleccionUsuario == 1) {   // El usuario posee papel
      alert('Perdiste');
    }
  }
}

// ERROR! Solucionado :-)

// En orden de tener un valor aleatorio entre dos numeros enteros se puede utilizar el siguiente algoritmo: 
// Math.round(Math.random * (numMax - numMin) + numMin)
// Si yo quiero obtener un numero aleatorio entre 0 y 2, ellos inclusive, asimismo los valores posibles de index en la const grila
// solo debo cambiar numMax por el numero mas grande de la serie (2) y numMin por el menor (0)
// Index of buscara y devolvera el index del vector de la opcion del usuario. Recordemos que indexOf devuelve -1 sino encuentra
// dentro del vector aquello que se paso por parametro

// Practica 9
// Crea un array conteniendo una lista de compras de 3 elementos
// Chequea la propiedad lenght
// Modifica el elemento del medio
// Saca todo el array por consola.

const listaCompras = ['Fiambre', 'Queso', 'Salame'];
console.log(`La longitud del arrar grilla es de ${listaCompras.length}.`);
listaCompras.splice(1, 1, 'Gaseosa');
console.log(listaCompras);

// Para modificar un elemento de un array vamos a utilizar el metodos splice. Recordemos que splice puede recibir 3 parametros
// El primero la posicion o index donde se agregara el elemento, el segundo la cantidad de elementos a borrar a partir de esa
// posicion, y la tercera el item a ingresar. Supongamos que quiero reemplzar queso por gaseosa.

// Practica 10
// Crea un array con 10 elementos, por ejemplo una lista de compras.
// Agrega tres elementos, uno al principio, uno al final y otro al medio del array.
// Cambia el valor de un elemento del array.
// Elimina el último elemento del array, sacalo por consola. (Chequea como hacerlo explorando la documentación del método)
// Ordena la lista alfabéticamente
// Busca un elemento, y saca por pantalla su index.
// Crea otro array con otros elementos, combina esta lista al final de la primera.
// Encontra la ultima coincidencia de un elemento, es decir el index.

const listadoLibreria = ['Hojas a4', 'Lapices', 'Biromes', 'Liquid', 'Clips', 'Abrochadora', 'Hojas a4', 'Post-It', 'Ojales', 'Goma'];
listadoLibreria.splice(2, 1, 'Fibras');
console.log(listadoLibreria.pop());
listadoLibreria.sort();
console.log(listadoLibreria.indexOf('Abrochadora'));        // deberia devolver 5
const otroListado = ['Hojas a3', 'Tinta'];
const nuevoListadoLibreria = listadoLibreria.concat(otroListado);
console.log(nuevoListadoLibreria);
console.log(nuevoListadoLibreria.indexOf('Hojas a4'));      // A modo de ejemplo muestro el primer index de Hojas a4 -> 0
console.log(nuevoListadoLibreria.lastIndexOf('Hojas a4'));  // Busco la ultima ocurrencia -> 6

// Recordemos que el elemento pop saca el ultimo elemento de un array, ademas lo devuelve
// Recordemos que para concatenar dos arrays utilizamos el metodo concat
// Recorda que para encontrar la ultima coincidencia, es decir de atras para adelante, utilizamos lastIndexOf

// Preguntas, responde sin codificar:
// 1. Cual es el resultado del siguiente código:
// const q = '1';
// let respuesta = null;
// switch (q) {
// 	case '1':
// 		respuesta = "uno";
// 		break;
// 	case 1:
// 		respuesta = 1;
// 		break;
// 	case 2:
// 		respuesta = "esta es la correcta";
// 		break;
// 	default:
// 		respuesta = "no funciona";
// }
// console.log(respuesta);

// Salida: "1"

// 2. Cual es el resultado del siguiente código?
// const q = 1;
// let respuesta = null;
// switch (q) {
// 	case '1':
// 		respuesta = "uno";
// 		break;
// 	case 1:
// 		respuesta = 1;
// 		break;
// 	case 2:
// 		respuesta = "esta es la correcta";
// 		break;
// 	default:
// 		respuesta = "no funciona";
// }
// console.log(respuesta);

// Salida: 1

// 3. Cual es el resultado del siguiente código?
// let login = false;
// let mensajeSalida = "";
// let estadoUsuario = login ? mensajeSalida = "logout" : mensajeSalida = "login";   // login
// console.log(estadoUsuario);

// Salida: login

// 4. Cual es el resultado del siguiente código?
// const nombresUsuario = ["Miguel", "Juan", "Lucas"];
// const entrada = "Juan";
// let salida = "";
// if (userNames.indexOf(entrada) > -1) {         // userNames.indexOf(entrada) = 1
// 	salida = "Bienvenido usuario";
// } else {
// 	salida = "Debe loguearse";
// }
// console.log(salida + ": " + entrada);

// Salida: "Bienvenido usuario: Juan"

// 5. Cual es el resultado del siguiente código?
// let miTiempo = 9;
// let salida;
// if (miTiempo >= 8 && miTiempo < 12) {                    // miTiempo es mayor que 8 y menor que 12
// 	salida = "A despertarse.";
// } else if (miTiempo >= 12 && miTiempo < 13) {            // false
// 	salida = "Hora de comer";
// } else if (miTiempo >= 13 && miTiempo <= 16) {           // false
// 	salida = "A trabajar";
// } else if (miTiempo > 16 && miTiempo < 20) {             // false
// 	salida = "Cena";
// } else if (miTiempo >= 22) {                             // false
// 	salida = "A dormir.";
// } else {
// 	salida = "Deberías estar en la cama";
// }
// console.log(salida);

// Salida: A despertarse.

// 6. Cual es el resultado del siguiente código?
// let a = 5;
// let b = 10;
// let c = 20;
// let d = 30;
// console.log(a > b || b > a);           // 5 es mayor que 10 o 10 es mayor que 5 -> true
// console.log(a > b && b > a);           // 5 es mayor que 10 y 10 es mayor que 5 -> false
// console.log(d > b || b > a);           // 30 es mayor que 10 o 10 es mayor que 5 -> true
// console.log(d > b && b > a);           // 30 es mayor que 10 y 10 es mayor que 5 -> true

// 7. Cual es el resultado del siguiente código?
let valor = 100;
let mensaje2 = (valor > 100) ? `${valor} es mayor que 100` : `${valor} es menor igual que 100`;
console.log(mensaje2);              // Salida: 100 es menor igual que 100
let chequear = (valor % 2) ? `Impar` : `Par`;        // valor % 2 = 0 // 0 == false
chequear = `${valor} is ${chequear}`;   // 100 is Par
console.log(chequear);                  // Salida: 100 is Par