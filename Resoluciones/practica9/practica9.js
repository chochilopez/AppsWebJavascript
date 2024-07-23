'use strict'

// Link resoluciones -> 

// Practica 1:
// -Crea una funcion que tome dos parametros. 
// -Controla que los valores ingresados sean numericos, sino saca por consola un mensaje.
// -Si son numericos, sumalos y saca el resultado por consola.
// -Proba la funcion llamandola dos veces.

function suma(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    console.log('Ocurrio un ingreso incorrecto.')
  } else {
    console.log(Number(a) + Number(b))
  }
}

suma('algo', 'nada');
suma(1234213, 213412341234);

// Practica 2:
// -Crea un array que contenga 10 posiciones, cada una de ellas con una palabra descriptiva. (Bueno, malo, aburrido, gracioso… etc)
// -Crea una funcion que pregunte al usuario por un nombre.
// -Selecciona aleatoriamente un valor del array utilizando Math.random.
// -Saca por consola el nombre mas el valor aleatorio, podes concatenar utilizando “ es “
// -Invoca la función

const palabras = ['Bueno','Malo','Aburrido','Gracioso','Insulso','Verborragico','Gesticulador','Mesurado','Ateo','Comlicado'];
function nombre() {
  return prompt('Ingresá tu nombre');
}
function numeroAleatorioEntre(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for(let a = 0; a < 10; a++) {
  let nombreUsuario = nombre();
  alert(`${nombreUsuario} es ${palabras[numeroAleatorioEntre(0, 9)]}.`)
}

// Práctica 3:
// -Crea una función llamada calculadora que reciba tres parámetros, dos valores numéricos y un operador (* + - /) .
// -Chequea que tipo de operador es, y realiza la operación correspondiente.
// -Chequea si el operador ingresado es válido, si no es válido o no se ingresa la operación por defecto debe ser la suma.
// -Llama varias veces la función, con distintos datos numéricos y diferentes signos, saca el resultado por consola.

/**
 * Realiza la correspondiente operacion algebraica entre los parametros
 * @param {Number} operando1 
 * @param {Number} operando2 
 * @param {String} operador 
 * @returns {Number} El resultado de la operacion
 */
function calculadora(operando1, operando2, operador) {
  if (isNaN(Number(operando1)) || isNaN(Number(operando2))) {
    return 'Ingreso de operadores no válidos.'
  }
  switch (operador) {
    case '-':
      return Number(operando1) - Number(operando2); 
    case '/':
      return Number(operando1) / Number(operando2); 
    case '*':
      return Number(operando1) * Number(operando2); 
    default:
      return Number(operando1) + Number(operando2); 
  }
}

console.log(calculadora('asdasd', 123123, '+'));
console.log(calculadora(9999999999, 123123, '-'));
console.log(calculadora(54654654, 123123, '*'));
console.log(calculadora(555, 0, '/'));

// Práctica 4:
// ¿Es "else" necesario?
// La siguiente función devuelve true si el parámetro edad es mayor a 18.
// De lo contrario, solicita una confirmación y devuelve su resultado:
// function chequearEdad(edad) {
//   if (edad > 18) {
//     return true;
//   } else {
//     // ...
//     return alert('Sos menor de edad');
//   }
// }
// ¿Ejecutará la función de manera diferente si se borra else?
// function chequearEdad(edad) {
//   if (edad > 18) {
//     return true;
//   } 
//   // ...
//   return alert('Sos menor de edad');
// }
// ¿Hay alguna diferencia en el comportamiento de estas dos variantes?

// Respuesta: no, no lo hay.

// Práctica 5:
// La siguiente función devuelve true si el parámetro edad es mayor que 18.
// De lo contrario, solicita una confirmación y devuelve su resultado.
// function chequearEdad(edad) {
//   if (edad > 18) {
//     return true;
//   } else {
//     return confirm('¿Tenés permiso de tus padres o tutores?');
//   }
// }
// Reescríbela para realizar lo mismo, pero sin if, en una sola linea.
// Hacé dos variantes de chequearEdad:
//   1-Usando el operador ternario
//   2-Usando OR ||

function chequearEdad(edad) {
  return edad > 18 ? true : confirm('¿Tenés permiso de tus padres o tutores?');
}

function chequearEdad2(edad) {
  return edad > 18 || confirm('¿Tenés permiso de tus padres o tutores?');
}

// Práctica 6:
// Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.
// Por ejemplo:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  return a < b ? a : b;
}

// Práctica 7:
// Escriba la función potencia(x,n) que devuelva x como potencia de n. O, en otras palabras, multiplique x por si mismo n veces y devuelva el resultado.
// potencia(3, 2) = 3 * 3 = 9
// potencia(3, 3) = 3 * 3 * 3 = 27
// potencia(1, 100) = 1 * 1 * ...* 1 = 1
// Cree una página web que solicite x y n, y luego muestre el resultado de potencia(x,n).
// La función solo debe admitir valores naturales de n: enteros desde 1

function potencia(base, exponente) {
  if (exponente >= 1) {
    let resultado = base;

    for (let iterador = 1; iterador < exponente; iterador++) {
      resultado *= base;
    }

    return resultado;
  }
  return null;
}

console.log(potencia(3, 2));                    // = 3 * 3 = 9
console.log(potencia(3, 3));                    // = 3 * 3 * 3 = 27
console.log(potencia(1, 100));                  // = 1 * 1 * ...* 1 = 1