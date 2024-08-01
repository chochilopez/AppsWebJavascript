'use strict'

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum)
    return [];
  else {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.push(startNum);
    return countArray;
  }
};

console.log(rangeOfNumbers(1,5))

/**
 * En esta funcion se suman dos numeros
 * @param {number} a El primer numerador
 * @param {number} b El segundo numerador
 * @returns El resultado de la suma de a y b
 */
function suma(a, b) {
  let suma = a + b;
  console.log(`La suma de ${a} + ${b} tiene por resultado ${suma}.`)
  return suma;
}


// La clase es el molde
class Persona {                                               // UpperCamelCase 
  nombre;
  apellido;
  edad;

  constructor(nombre = 'N', apellido = 'N', edad = 0) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${nombre} y mi apellido ${apellido}.`); 
  }
}

let persona1 = new Persona('Diego','De la Vega', 40);    // {nombre: 'Diego',apellido: 'De la Vega',edad 40}
let persona2 = new Persona();                            // {nombre: 'N',apellido: 'N',edad 0}
console.log(persona1);                                   // {nombre: 'Diego',apellido: 'De la Vega',edad 40}
console.log('Hola como estas', persona1.nombre)          // 'Hola como estas Diego'
persona1.saludar();                                      // Arrays.sort()