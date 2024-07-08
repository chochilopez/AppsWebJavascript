'use strict'

// Link resoluciones -> 

// Practica 1
// Realizar un script para un sitio donde no está permitido el ingreso de menores de 18 años. Para ello crea una pagina web donde se le pregunte al 
// usuario su edad y le avise si puede ingresar o no.

// Practica 2
// Examina el siguiente código. Primero explica porqué se produce el funcionamiento no deseado, luego solucionalo.
// let clima = ‘Caluroso’;
// if (clima = ‘Frio’) {
// 	console.log(‘Me llevo campera’);
// } else {
//  	console.log(‘Salgo de remera’);	
// }

// Practica 3
// Crear una variable con un valor booleano
// Mostra el valor por consola
// Chequea si la variable es verdadera, si lo es, saca un mensaje por consola diciendo que lo es
// Agrega otro if pero esta vez antes del nombre de la varaiable antepone el signo de exclamacion !
// Con este fin chequeas si la variable es falsa, saca por mensaje mensaje acorde.
// Cambia el valor de la variable al opuesto, que sucede?

// Practica 4
// Desde un bar te solicitan que crees una página con un script donde se solicite la edad del usuario.
// Convertí la respuesta a número.
// Almacena el valor en una variable.
// Si la edad es mayor que 21, puede ingresar y ademas puede comprar alcohol.
// Si es mayor de 19 puede entrar, pero no puede comprar alcohol.
// Si en cambio es menor que 19 no puede entrar
// Informa al usuario el resultado.

// Practica 5
// Declarar una variable identificación y asignarle un valor booleano
// Usa el operador ternario y crea un mensaje indicando si la identificacion es positiva o negativa.
// Saca el resultado por consola

// Practica 6
// Crea una variable llamada precio.
// Pedile al usuario que ingrese un número entre 0 y 10
// Convertí el resultado del ingreso a tipo de dato número
// Crea una variable que con el mensaje: “Cuanto sale: “
// Utilizando la sentencia switch (y tu creatividad) realiza una escala siendo 0 algo barato o regalado y 10 algo carísimo.
// Saca por consola un mensaje concatenando la variable mensaje con el resultado del switch

// Practica 7
// Chequeador de amigos
// Preguntale al usuario su nombre
// Usando un bloque switch chequea si es amigo, conocido, pariente o si no lo conoces.
// Pasa por consola el resultado

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


// Practica 9
// Crea un array conteniendo una lista de compras de 3 elementos
// Chequea la propiedad lenght
// Modifica el elemento del medio
// Saca todo el array por consola.

// Practica 10
// Crea un array con 10 elementos, por ejemplo una lista de compras.
// Agrega tres elementos, uno al principio, uno al final y otro al medio del array.
// Cambia el valor de un elemento del array.
// Elimina el último elemento del array, sacalo por consola. (Chequea como hacerlo explorando la documentación del método)
// Ordena la lista alfabéticamente
// Busca un elemento, y saca por pantalla su index.
// Crea otro array con otros elementos, combina esta lista al final de la primera.
// Encontra la ultima coincidencia de un elemento, es decir el index.

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

// 3. Cual es el resultado del siguiente código?
// let login = false;
// let mensajeSalida = "";
// let estadoUsuario = login ? mensajeSalida = "logout" : mensajeSalida = "login";
// console.log(estadoUsuario);

// 4. Cual es el resultado del siguiente código?
// const nombresUsuario = ["Miguel", "Juan", "Lucas"];
// const entrada = "Juan";
// let salida = "";
// if (userNames.indexOf(entrada) > -1) {
// 	salida = "Bienvenido usuario";
// } else {
// 	salida = "Debe loguearse";
// }
// console.log(salida + ": " + entrada);

// 5. Cual es el resultado del siguiente código?
// let miTiempo = 9;
// let salida;
// if (miTiempo >= 8 && miTiempo < 12) {
// 	salida = "A despertarse.";
// } else if (miTiempo >= 12 && miTiempo < 13) {
// 	salida = "Hora de comer";
// } else if (miTiempo >= 13 && miTiempo <= 16) {
// 	salida = "A trabajar";
// } else if (miTiempo > 16 && miTiempo < 20) {
// 	salida = "Cena";
// } else if (miTiempo >= 22) {
// 	salida = "A dormir.";
// } else {
// 	salida = "Deberías estar en la cama";
// }
// console.log(salida);

// 6. Cual es el resultado del siguiente código?
// let a = 5;
// let b = 10;
// let c = 20;
// let d = 30;
// console.log(a > b || b > a);
// console.log(a > b && b > a);
// console.log(d > b || b > a);
// console.log(d > b && b > a);

// 7. Cual es el resultado del siguiente código?
// let valor = 100;
// let mensaje = (valor > 100) ? `${valor} es mayor que 100` : `${valor} es menor igual que 100`;
// console.log(mensaje);
// let chequear = (valor % 2) ? `Impar` : `Par`;
// chequear = `${valor} is ${chequear}`;
// console.log(chequear);