'use strict'

// Link resoluciones -> https://drive.google.com/file/d/1BCvYHQFBW_frZ6jVQ6FEL3p3XkRS7z4I/view?usp=drive_link

// Práctica 1:
// -Declarar dos variables: dividendo y divisor, asignales el valor numero que desees.
// -Declarar una variable resultado y almacenar el resultado de la division entre dividendo y divisor.
// -Mostrar el valor de resultado por consola.

let dividendo = 10;
let divisor = 2;
let resultado = dividendo / divisor;
console.log(`El resultado de realizar la operacion ${dividendo} / ${divisor} es ${resultado}.`);

// Práctica 2
// -Crear una variable que almacene el nombre de nuestro pais, como la llamarias?
// -Crear una variable que almacene el nombre del dia que transcurre. Como llamarias a esta variable?

let miPais = 'Argentina';    // Tambien podria declararse como constante, debido a que nuestro pais de nacimiento es uno
let hoy = 'Lunes';

// Práctica 3
// Examina el siguiente codigo:

// let mi$cumpleaños = '16.11.1982';
// const mi$edad = unaFuncion(mi$cumpleaños);

// Tenemos una variable con una de fecha cumpleaños, y el tiempo transcurrido, o la edad, que es una constante. Esta ultima es calculada gracias a una 
// funcion (ya mas adelante vamos a hablar de funciones), por ahora no es importante el como. A esa funcion necesitamos si o si ingresarle la fecha de 
// nacimiento en orden de  saber la edad.
// Que podes decir del nombre de la variables y su definicion?

// Sobre ambas variables podemos ver que tienen caracteres especiales, los cuales no son una buena practica al utilizar. Sobre la miCumpleaños, podria 
// declarse como const, ya que mi cumpleaños no cambia de dia, por lo tanto const MI_CUMPLEAÑOS. A este tipo de notacion se le llama SCREAMING_SNAKE_CASE
// Sobre mi$edad, es una variable de tipo let, por lo cual deberia anotarse segun el tipo camelCase, por lo tanto let miEdad
