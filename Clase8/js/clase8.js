'use strict'

// CASO DE ESTUDIO
// La sucesion Fibonacci es una sucesion de numeros que comienzan con el 0 y el 1 y luego, cada
// numero es igual a la suma de los dos anterios de la sucesion.
// 0 1 1 2 3 5 8 13 21 ....

const fibonacci = [];
let cantidadSucesion = 25;
while (fibonacci.length < cantidadSucesion && cantidadSucesion > 3) {
  if (fibonacci.length === 0) {
    fibonacci.push(0);
    fibonacci.push(1);
  }
  let numero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(numero);
};
console.log(fibonacci)

// Primera iteracion
// [0] [1] [1]
//  0   1   2
//  Length = 3

// Segunda iteracion
// [0] [1] [1] [2]
//  0   1   2   3
//  Length = 4

// Tercera iteracion
// [0] [1] [1] [2] [3]
//  0   1   2   3   4
//  Length = 5

// Bucle for
// en la condicion tenemos en primer lugar la variable de congtrol o iterador, en segundo lugar la condicion a evaluar
// y en tercer lugar lo que se va a ejecutar une vez la iteracion

for (let i = 0; i < 10; i++) { // -1 -2 -3 -4 ...........
  console.log(i);
  // 2 segunda sentencia
  // 3 segunda sentencia
  // 4 segunda sentencia

  // Ultima sentencia
  // Se ejecuta lo que esta el tercer parametro 
}

// 1 Flujo del bucle for
// 2 Primero se inicializa la variable de control
// 3 Luego se va a chequear la condicion
// 4 Si es falsa se continua con el normal flujo
// 5 Si es verdadera, se ejecuta lo que esta en el bloque
// 6 Al finalizar el bloque se va a ejecutar la tercer sentencia que pase en el for (i++)
// 7 Volvemos al paso 3

// BUCLES ANIDADOS
const batallaNaval = [];
for (let fila = 1; fila <= 10; fila++) {
  batallaNaval[fila] = [];
  for (let columna = 1; columna <= 10; columna++) {
    batallaNaval[fila][columna] = 'AGUA';
  }
}
// let buquesUsuario = 0;
// let filaBuque = null;
// let columnaBuque = null;
// while (buquesUsuario < 3) {
//   filaBuque = Number(prompt('Ingresa el numero de fila'))
//   columnaBuque = Number(prompt('Ingresa el numero de columna'))
//   batallaNaval[filaBuque].splice(columnaBuque, 1, 'Buque')
//   buquesUsuario++;
// }

// prompt preguntando fila y columna
// if fila y columa === agua o  fila y columa === TOCADO erraste
// else if fila y columa === buque -> hundido fila y columa = TOCADO

// console.table(batallaNaval)


// Bucle for of
const vector = ['Rojo', 'Verde', 'Azul']; // length = 3
for (let iterador = 0; iterador < vector.length; iterador++) {
  console.log('Recorrido en un for:', vector[iterador])
}

for (let posicionDelArray of vector) {
  console.log('Recorrido en un for of:', posicionDelArray);
}

const auto = {
  modelo: "Vento",
  fabricante: "Volkswagen",
  año: 2005,
  color: "Rojo",
}
// for (let propiedad in auto) {
//   console.log(propiedad);
// }

// for (let propiedad in auto) {
//   console.log(auto[propiedad]);
// }

for (let propiedad in auto) {
  console.log(propiedad + ':' + auto[propiedad]);
}







const autos = [
  auto,
  {
    modelo: "208",
    fabricante: "Peugeot",
    año: 2019,
    color: "Azul",
  },
  {
    modelo: "Punto",
    fabricante: "Fiat",
    año: 2018,
    color: "Verde",
  }
];

