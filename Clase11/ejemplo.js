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
  constructor(nombre = 'N', apellido = 'N', edad = 0) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y mi apellido ${this.apellido}.`); 
  }
}

let persona1 = new Persona('Diego','De la Vega', 40);    // {nombre: 'Diego',apellido: 'De la Vega',edad 40}
let persona2 = new Persona();                            // {nombre: 'N',apellido: 'N',edad 0}
let persona3 = new Persona();                            // Y no estuviera declaro el ningun valor por defecto, 
                                                         // todas las variables serian undefined
console.log(persona1);                                   // {nombre: 'Diego',apellido: 'De la Vega',edad 40}
console.log('Hola como estas', persona1.nombre)          // 'Hola como estas Diego'
persona1.saludar();                                      // Arrays.sort()


// ENCAPSULACION
class Perro {
  // Propiedades
  #nombre;                                  // #private
  #raza;
  #edad;

  // Constructor
  constructor(nombre, raza, edad) {
    if (edad > 10) {
      this.#nombre = nombre;
      this.#raza = raza;
      this.#edad = edad;
    }
  }

  // Metodos
  describir() {
    console.log(`EL perrito se llama ${this.#nombre}, es de raza ${this.#raza} y tiene ${this.#edad} años.`)
  }
}

let perro = new Perro('Mailo', 'Yorkshire Terrier', 8);
perro.describir();

// 
class Gato {
  // Propiedades
  #nombre;                                  // #private
  #raza;
  #edad;
  #vacunas;

  // Constructor
  constructor(nombre, raza, edad, vacunas) {
    this.#nombre = nombre;
    this.#raza = raza;
    this.#edad = edad;
    this.#vacunas = [];
  }

  // Accessors -> Metodos getters y setters
  get getNombre() {
    return this.#nombre;
  }
  get getRaza() {
    return this.#nombre;
  }
  get getEdad() {
    return this.#nombre;
  }

  set setNombre(nombre) {
    this.#nombre = nombre;
  }
  set setRaza(raza) {
    this.#raza = raza;
  }
  set setEdad(edad) {
    this.#edad = edad;
  }


  // Metodos
  describir() {
    console.log(`El gatito se llama ${this.#nombre}, es de raza ${this.#raza} y tiene ${this.#edad} años.`)
  }
}

let gatito = new Gato('Felipe', 'Angora', 5);
gatito.describir();
console.log('Mi gatito se llama: ', gatito.getNombre);
gatito.setNombre = 'Ricardito';
console.log('Mi gatito se llama: ', gatito.getNombre);

// HERENCIA RESPECTO DE CLASES DE VEHICULO - palabra reservada extends

// Clase padre
class Vehiculo {
  #marca;
  #modelo
  #color
  constructor(marca, modelo, color) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
  }
}

// Clase hija
class Moto extends Vehiculo {
  #cilindrada;
  #rayos;
  constructor(marca, modelo, color, cilindrada, rayos) {
    super(marca, modelo, color);                  // Esta creacion la delegamos a la clase padre
    this.#cilindrada = cilindrada;
    this.#rayos = rayos;
  }

  // ACCESSORS
  get getCilindrada() {
    return this.#cilindrada;
  }
  set setCilindrada(cilindrada) {
    this.#cilindrada = cilindrada;
  }
}

// Clase hija
class Auto extends Vehiculo {
  #puertas
  constructor(marca, modelo, color, puertas) {
    super(marca, modelo, color);
    this.#puertas = puertas;
  }
}

class Hibrido extends Auto {
  #cantidadBaterias
  constructor(marca, modelo, color, puertas, cantidadBaterias) {
    super(marca, modelo, color, puertas);
    this.#cantidadBaterias = cantidadBaterias;
  }
}

let moto = new Moto('Ducatti', '905', 'Rojo', '1000cc');
let auto = new Auto('Ford', 'Focus', 'Negro', 5);
let hibrido = new Hibrido('Honda', 'Prius', 'Blanco', 5, 10);

console.log(hibrido);


