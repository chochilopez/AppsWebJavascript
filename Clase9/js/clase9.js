'use strict'

// Declaracion de funcion
function mensajeError() {
  console.log('Ocurrio un error');
}
mensajeError();

function mensajeEstandar(mensaje) {
  console.log(mensaje);
  // ingresar los estilos necesarios para que el mensaje
  // sea de algun color
  // Que ocupe posicion especifico
}
mensajeEstandar('Esto es un mensaje estandar.');
mensajeEstandar();

// Ambito de las variables
let numeroExterno = 15;

function calculadora(numero1, numero2, operacion) {
  let resultado = null;
  switch(operacion) {
    case 'suma':
      resultado = numero1 + numero2;
      break;
    case 'resta':
      resultado = numero1 - numero2;
      break;
    case 'multiplicacion':
      resultado = numero1 * numero2;
      break;
    case 'division':
      resultado = numero1 / numero2;
      break;
  }
  console.log(resultado)
}

calculadora(1, 1, 'suma');
// resultado solo existe dentro de la funcion
// console.log(resultado);

// Buenas practicas a la hora de nombrar funciones 
// -Las funcionales las anotamos con camelCase
// -El nombre debe ser descriptivo de la funciona que realiza
// Por ej: borrar(NO!) - borrarUsuario - borrarProducto.
// -Utilizar verbos el nombre
// get, show, create, delete, calculate, check ....
// mostar..... mostrarMensaje, mostrarPantalla
// obtener... obtenerColorPelo, obtenerEdad
// crear... crearUsuario.....
// revisar... revisarAutoridad, revisarSexo

// Una funcion debe hacer exactamente lo que describe
// y nada mas

function borrarUsuario(nombreUsuario) {
  // buscarUsuario(nombreUsuario);
  // si el usuario existe lo borro
  console.log('Usuario borrado');
}


function sumar(numero1 = 10, numero2 = 20) {
  console.log(numero1 + numero2);
}

sumar(2 ,4); // 6
sumar(); // NaN
sumar(9, 9, 9, 14023131, 'sjdfkjsdhf');

// En revisiones anteriores no existia esto del valor por
// defecto para un paramtro.

function resta(numero1, numero2) {
  if (numero1 === undefined || numero2 === undefined) {
    console.log('No se pasaron bien los parametros')
  } else {
    console.log(numero1 - numero2);
  }
}

resta(10, 5);
resta(1);
resta();

// Funciones que retornan un valor RETURN
function calcularAreaTriangulo(base, altura) {
  // muchas lineas y operaciones
  // muchos calculos
  // pero lo que va a la derecha de return es lo que devuelve
  // la funcion al ser ejecutada
  return (base*altura)/2;
}

let calculo = calcularAreaTriangulo(2, 3);
console.log('El area es de', calculo);

console.log(vacia())

function vacia() {
  return 'Se llamo antes de declararse';
}

// Funciones flecha
const multiplicacion = (a, b) => {
  return a*b;
}

multiplicacion(2,4);

const division = (a, b) => a / b;

// SI una funcion flecha no posee paramteros si o si debe
// llevar parentesis
let ejemplo = () => console.log('Sin parametros'); 

let resultado = (a, b, operacion) => {
  // realizo el switch
  // saco por consola el resultado
  // otras lienas...
};