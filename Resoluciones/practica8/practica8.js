'use strict'

// Link resoluciones -> 

// Práctica 1
// -En clase vimos un algortimo que nos permitia calcular N numeros de la sucesion de Fibonacci. Te animás a codificar 
// tu version del mismo?

// Ya hice el mio en clase!

// Práctica 2
// -En un script, utilizando el bucle for y arrays, crea 10 objetos que estén compuestos por:
//     numero: (el numero de ejecución que lleve el for)
//     par: (true o false de acuerdo si número es par o no)
// Un ejemplo de objeto sería: {numero: 2, par: true}
// -Para saber si un número es par o no, utiliza el operador ternario.
// -Mostrá el array resultante por consola.
// Ayuda: para saber si un número entero es par o no se divide por dos, si el resto de esa división es 0 es par, 
// si en cambio es 1 es impar.

const grilla = [];
for (let a = 1; a <= 10; a++) {
  grilla.push({numero: a, par: a % 2 ==0 ? 'Es par' : 'Es impar' });
}
console.log(grilla);

// Práctica 3
// -Crea un array vacío
// -Corre un bucle 10 veces, en cada iteración agrega un valor al array.
// -Saca por consola el array.
// -Utiliza el bucle for of para iterar el array y saca cada valor por consola.

const vector = [];
for (let a = 0; a < 10; a++) {
  vector.push(a);
}
console.log(vector);
for (let posicion of vector) {
  console.log('Valor en la posicion:', posicion);
}

// Práctica 4
// -Creá un objeto que contenga al menos 3 propiedades.
// -Utilizando el bucle for in, obtené los nombres de las propiedades y el valor correspondiente y sacalo por consola.
// -Crea una array que contenga los items, recorre ese array mostrando los valores con un bucle for of.

let auto = {
  marca: 'Renault',
  modelo: '21',
  año: 2009
};
for (let propiedad in auto){
  console.log(`El valor de la propiedad ${propiedad} es ${auto[propiedad]}.`);
}
const propiedadValor = Object.entries(auto);
console.log(propiedadValor);

// Recordemos que a la hora de examinar objetos teniamos tres metodos utilies dentro del objeto Object.
// El primero era Object.key() que me devolvia un array con todos los nombres de propiedades del objeto
// El segundo era Object.values() que me devolvia un array con todos los valores de las propiedades
// El tercero era Object.entries() que me devolvia un array con todas las claves-valor, o propiedad y valor

// Práctica 5
// -Creá una variable llamada salteo que almacene un numero, este valor debe ser un numero del 1 al 10.
// -Crea un bucle for que cuente hasta 10.
// -Agrega un condicional para saber si el numero de iteración corresponde al numero que se debe saltear.
// -Si lo es, seguí con la siguiente iteración.
// -A medida que vayas iterando, saca por pantalla la cuenta de iteración. Agrega esta linea como última en el bucle.
// -Una vez finalizada la ejecucion, cambia continue por break, que pasa?

let salteo = 5;
for (let a = 0; a < 10; a++) {
  if (a === salteo) {
    continue;
  }
  console.log('Iteracion nº:', a)
}

// Con continue se saltea la iteracion 5
// Si en cambio utilizamos break, finalizara el bucle

// Práctica 6
// -Escribí un script que saque por pantalla una tabla pitagorica. Para ello podes seguir, o no, los siguientes pasos.
//     Crea un array en blanco conteniendo la tabla. (10 x 10).
//     Crea un bucle padre que itere las filas.
//     Crea un bucle hijo que itere las columnas.

const tablaPitagorica = [];
for (let a = 1; a <= 10; a++) {
  tablaPitagorica[a - 1] = a;
  tablaPitagorica[a - 1] = new Array(9);
  for (let b = 1; b <= 10; b++) {
    tablaPitagorica[a - 1][b - 1] = a * b;
  }
}
console.table(tablaPitagorica);              // Utilizo el metodo table de console asi me muestra el array como tabla

// Una tabla pitagorica es la tabla de multiplicacion de la primaria
// Primer defino la tabla, ya se que es un tabla de dos dimensiones de 10x10. Por lo tanto necesito para recorrerla dos
// bucles de 10 iteraciones.
// Javascript no permite la defincion de tablas multidimensionales por defecto, para ello debemos realizar un pequeño truco
// para ello, cada vez que recorramos una fila, primero vamos a insertar o crear como primer dato un array de 10 posiciones.
// y luego escribiremos en ese array cada valor de la columna, a traves del for anidado. 
// El numero de index comienza desde 0, por eso le resto 1 al iterador, que comineza en 1

// 2. Cual es el valor de miArray, y cual sera la salida por consola?
const miArray = [1,5,7];
for(let numero in miArray){
    console.log(Number(numero));          // 1 iteracion: 1 / 2 iteracion: 5 / 3 iteracion: 7
    numero = Number(numero) + 5;          // 6 10 12
    console.log(numero);                  // 6 10 12
}
console.log(miArray);                    // 1, 5, 7

// El primer renglon muestra la primer posicion, el segundo la posicion + 5, el tercero la segunda posicion .....