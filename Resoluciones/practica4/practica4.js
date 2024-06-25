'use strict'

// Práctica 1
// -Crea una página web
// -Importa un archivo .js
// -Utiliza los 3 métodos vistos, y mostrá en consola los resultados de los métodos que devuelvan un valor. 

alert('Esto es un dialogo de notificacion');
let confirmacion = confirm('Este es un dialogo de confirmacion');
let entrada = prompt('Este es un dialogo de entrada.');
console.log('El resultado del dialogo de confirmacion es:', confirmacion);
console.log('El resultado del dialogo de entrada es:', entrada);

// Práctica 2
// Sin utilizar el operador typeof te animas a decir que tpo de variables son las siguientes?
// Una vez que finalices, verifica que tus respuestas sean las correctas.

let variable1 = 'Rosario';       // string
let variable2 = "Bicicleta";     // string
let variable3 = undefined;       // undefined -> indefinido
let variable4 = null;            // el resultado es object pero es null -> vacio o desconocido
let variable5 = 1000;            // number
let variable6 = 1000n;           // bigint

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);
console.log(typeof variable6);

// Práctica 3
// Cual sera la salida de los siguientes metodos? 

alert( Number("   123   ") );    // 123
alert( Number("123z") );         // NaN -> Not a Number
alert( Number(true) );           // 1 -> true es sinonimo de verdadero, correcto, prendido, 1 ...
alert( Number(false) );          // 0 -> false es sinonimo de falso, incorrecto, apagado, 0 ...

// Práctica 4
// Bien, tenemos que arreglar un código que no funciona bien

let suma1 = Number(prompt('Para sumar dos numeros, ingresa el primero:', 1));
let suma2 = Number(prompt('Ahora ingresa el segundo:', 2));
let resultado = suma1 + suma2;
alert('La suma de ' + suma1 + ' + ' + suma2 + ' es igual a: ' + resultado);    // La suma de 10 + 20 es igual a: 1020 ¿?¿?¿?¿?¿?
// El comportamiento no deseado ocurre porque la salida de prompt es un string. Si sumamos dos string se uniran ambas, o se concatenaran.
// Si lo que queremos es realizar la suma aritmetica de las dos entradas, debemos castear el tipo de dato a number.
// La suma de 10 + 20 es igual a: 1020 -> Lo solucionamos!!!!

// Práctica 5
// Escribí una pagina que acepte por algún método que conozcas, el ingreso de los dos catetos de un triángulo rectángulo, y que devuelva la hipotenusa. 
// Sabemos que la hipotenusa de un triángulo rectángulo es igual la raiz cuadrada de la suma de los cuadrados de sus catetos. Podés utilizar prompt() 
// para recibir los catetos.

let cateto1 = Number(prompt('Ingresa el primer cateto.'));
let cateto2 = Number(prompt('Ingresa el segundo cateto.'));
let hipotenusa = Math.sqrt(cateto1**2 + cateto2**2);       
// El metodo sqrt del objeto Math me permite obtener la raiz cuadrada de lo que se ingrese por parametro.
console.log(`La hipotenusa de un triangulo rectangulo con un cateto de ${cateto1} y otro de ${cateto2} es de ${hipotenusa}.`);

// Práctica 6
// Declara e inicializa tres variables numéricas. Actualiza las variables utilizando operadores de asignación de la siguiente manera:
// A la primera restale la segunda.
// Multiplica la primera por la tercera.
// Reemplaza el valor de la tercera por el módulo de la tercera por la segunda.
// Imprimí los tres números por la consola.

let numero1 = 10;
let numero2 = 5;
let numero3 = 4;

numero1 -= numero2;
numero1 * numero3;
numero3 %= numero2;

console.log(numero1);
console.log(numero2);
console.log(numero3);

// Práctica 7
// Cuál será el resultado de las siguientes sentencias. Intentá resolverlo sin codificar, luego, codificalo. Explicá el porqué del resultado. 

// 5 > 4                   // true -> es una comparacion y 5 es mayor que 4
// 'manzana' > 'banana'    // true -> es otra comparacion, y el primer caracter 'm' es mayor que 'b' segun tabla ASCII
// '2' > '12'              // true -> es otra comparacion, y el primer caracter '2' es mayor que '1' segun tabla ASCII
// undefined == null       // true -> en una comparacion abstracta undefined es igual que null
// undefined === null      // false -> en una comparacion estricta undefined es un tipo de dato diferente que null, ademas de ser diferentes valores
// null == "\n0\n"         // false -> en una comparacion absoluta, chequea que la variable no este vacia, como no lo esta ...
// null === "\n0\n"        // false -> en una comparacion estricta la cadena "\n0\n" no es lo mismo que null

console.log(5 > 4);
console.log('manzana' > 'banana');
console.log('2' > '12');
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "\n0\n");
console.log(null === "\n0\n");

// Práctica 8
// Crea una variable con tu nombre, otra con tu edad, y otra informando si podes escribir código con JavaScript o no.
// Saca por consola la siguiente sentencia, ingresando las variables donde corresponda.
// ‘Hola, mi nombre es …, tengo … años y ¿puedo escribir en JavaScript?: …’
let nombre = 'Gaston Lopez';
let edad = 41;
let escribeJS = true;
console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y ¿puedo escribir en JavaScript?: ${escribeJS}`);

// Práctica 9
// Cuál será el valor de las variables después de las ejecuciones de abajo? Resolvelo sin codificar!

let a = 1;       
let b = 1;
let c = ++a;
let d = b++; 

console.log(a);  // a vale 2
console.log(b);  // b vale 2
console.log(c);  // c vale 2 -> porque el operador unario como prefijo suma una unidad enseguida
console.log(d);  // d vale 1 -> porque el operador unario como sufijo va a sumar una unidad la proxima vez que se consulte la variable b.

// Práctica 10
// Resolvé sin codificar, cual es el valor de x?

let numeroA = 2;
let numeroX = 1 + (a *= 2); // 5 -> 1 + (2 * 2)
console.log(numeroX);

// Práctica 11
// Resolvé sin codificar, cual te parece que es el resultado de estas sentencias? Una vez que hayas terminado tu evaluación, codificalo y 
// compará los resultados.

// "" + 1 + 0       // "10"                       Se concatenan las cadenas, no hay coercion
// "" - 1 + 0     // -1                         Se coercionan "" a 0, se le resta 1 y se le suma 0
// true + false     // 1                          1 + 0
// 6 / "3"          // 2                          Coercion -> 6 / 3
// "2" * "3"        // 6                          Coercion -> 2 * 3
// 4 + 5 + "px"     // "9px"                      En primer lugar se suma 4 + 5 y luego se concatenan las cadenas
// "$" + 4 + 5      // $45                        Se concatenan las cadenas
// "4" - 2          // 2                          Coercion -> 4 - 2
// "4px" - 2        // NaN -> Not a number        Coercion -> trata de restar 2 a "4px"
// "  -9  " + 5     // "  -9  5"                  Concatena las dos cadenas
// "  -9  " - 5     // -14                        Coercion -> -9 - 5
// null + 1         // 1                          Coercion -> 0 + 1
// undefined + 1    // NaN                        Intenta sumar algo a algo indefinido
// " \t \n" - 2     // -2                         Coercion -> 0 - 2

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5 );
console.log("4" - 2  );
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);