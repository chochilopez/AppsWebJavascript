'use strict'

function suma(a, b) {
  let suma = a + b;
  console.log(`La suma de ${a} + ${b} tiene por resultado ${suma}.`)
  return suma;
}

function contarHasta10() {
  for (let b = 1; b <= 10; b++) {
    console.log('La cuenta es:', b);
  }
}

console.log('Este es el inicio de mi script.');
console.log('Vamos a sumar 2 y 4');
console.log(suma(2,4));   // alert('Esto es un alert')
contarHasta10();

if (1 == '2') {
  console.log('Son iguales');
  console.log('Son iguales');
  console.log('Son iguales');
} else {
  console.log('No son iguales');
}

if (2 == '2') {
    console.log('Si, dos es igual a dos.');
    if (true == 'true') {
        ////
    }
}