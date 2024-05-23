'use strict'

// Tipos de datos
// STRING - Cadenas de caracteres

// puedo utilizar comillas simples
let simple = 'Hola';

// puedo utilizar comillas dobles
let dobles = "Hola";

// JS va interpretar que la primer comilla que utilice es la que define
// la cadena, por lo tanto, hasta que no encuentre otra igual, no cierra
// la cadena
let nombreCiudad = 'Mi ciudad se llama "Crespo"';
// Si en cambio utiliza comillas entremedio JS va interpretar que ahi
// finalizó la cadena
// let nombreMal = "Mi ciudad se llama "Crespo"";

// Backquote o comilla invertida me a permitir concatenar variables u o
// operaciones dentro de la cadena. Lo unico que hacer es ingresar el signo
// $ seguido de llaves. Por ej: ${5+4}
let numero1 = 4;
let numero2 = 5;
let cadenaConOperacion = `La operacion 5 + 4 da como resultado ${numero1+numero2}.`;
console.log(cadenaConOperacion);

// Puedo utilizar contrabarra para escapar un caracter, es decir, decirle al
// interprete que a ese caracter lo ignore
let nombreMal = "Mi ciudad se llama \"Crespo\"";
console.log(nombreMal);
let ejemploEscape = "Si yo utilizo la contrabarra seguida de la n\nvoy a producir un salto de linea";
console.log(ejemploEscape)


// NUMBER - Numeros
// Todos los valores decimales o no contenidos entre (-2 elevado a 53) - 1
// y (2 elevado a la 53) -1
// Puden ser numeros decimales con o sin coma
let entero = 15;
let conComa = 3.14;

// Puedo tener valores en sistemas de de numeracion
let binario = 0b1011; // Esto es numeros binario es 11
console.log('Numero binario',binario);
let hexadecimal = 0x3AD9;
console.log('Numero hexadecimal',hexadecimal)

// Si intento dividor algo por 0 voy a obtener el valor numerico especial Infinity
let noSePuede = 1/0;
console.log('Que paso si divido algo por 0?', noSePuede);

// Si intento realizar una operacion entre un cadena y un numero, voy a
// obtener el valor numerico especial NaN (Not a Number)
let cadena = 'Algo';
let valor = 5;
console.log('Multiplico cadena por valor:', cadena * valor); 

// BIGINT - o enteros muy grandes
let grande = 320847128930408912341234n;
let chico = 54;
// console.log('Cual es el resultado de sumar un BigInt y un Number', grande + chico);


// BOOL - o booleano
let verdadero = true;
let falso = false;
console.log('La variable verdadero es verdadera?',verdadero);
console.log('La variable falso es falsa?',falso);

// Un tipo de dato booleano se da como resultado de una comparacion
let comparacion = 5 > 50;
console.log('Es verdad que 5 es mayor que 50???', comparacion);
let miNombre = 'Gaston';
let nombrePapa = 'Juan';
let miApellido = 'Lopez';
let apellidoPapa = 'Lopez';
console.log('Me llamo igual que mi papa?', nombrePapa === miNombre);
console.log('Tengo el mismo apellido que mi papa?', apellidoPapa === miApellido);


// SYMBOL - Hace que cada sea variable sea única
let cadena1 = 'ECMAScript6';
let cadena2 = 'ECMAScript6';
console.log('Son iguales las cadenas?', cadena1 === cadena2); //true

let simbolo1 = Symbol('ECMAScript6');
let simbolo2 = Symbol('ECMAScript6');
console.log('Son iguales los symbol?', simbolo1 === simbolo2); //false

// UNDEFINED - Valor de variables que estan declaradas pero no inicializadas
let nada;
console.log('Que valor tiene nada?', nada);

nada = 'Ya no esta vacia';
console.log('Que valor tiene nada?', nada);

// NULL - Declaro que una variable esta vacia o que no se sabe que tiene
let otroNada = undefined;
let noInicializada;
console.log(otroNada === noInicializada);

let variableVacia = null;
console.log('Algo inicializado pero vacio es igual a algo no inicializado', noInicializada === variableVacia);

console.log(typeof cadena1);
console.log(typeof simbolo1);
console.log(typeof grande);
console.log(typeof numero1);
console.log(typeof verdadero);
console.log(typeof noInicializada);
console.log(typeof variableVacia);








