'use strict'

// Link resoluciones -> https://drive.google.com/file/d/1K4OpiR_ZBtbT381q2eTt0VZAU1lLNYlZ/view?usp=drive_link

// Práctica 1
// -Crea una página web
// -Importa un archivo .js
// -Utiliza los 3 métodos vistos, y mostrá en consola los resultados de los métodos que devuelvan un valor. 

// alert('Esto es un dialogo de notificacion.')
// let confirmar = confirm('Este es un dialogo de confirmacion.');
// let entrada = prompt('Este es un dialogo de entrada.');

// console.log('Resultado de dialogo de confirmacion:', confirmar);
// console.log('Resultado de dialogo de entrada:', entrada);

// Práctica 2
// Sin utilizar el operador typeof te animas a decir que tpo de variables son las siguientes?
// Una vez que finalices, verifica que tus respuestas sean las correctas.

let variable1 = 'Rosario';       // string
let variable2 = "Bicicleta";     // string
let variable3 = undefined;       // undefined -> indefinido
let variable4 = null;            // object -> null -> vacio o desconocido
let variable5 = 1000;            // number
let variable6 = 1000n;           // bigint

console.log('Resultado de la variable1:', typeof variable1);
console.log('Resultado de la variable2:', typeof variable2);
console.log('Resultado de la variable3:', typeof variable3);
console.log('Resultado de la variable4:', typeof variable4);
console.log('Resultado de la variable5:', typeof variable5);
console.log('Resultado de la variable6:', typeof variable6);

// Práctica 3
// Cual sera la salida de los siguientes metodos? 

// alert( Number("   123   ") );    // 123
// alert( Number("123z") );         // NaN -> Not a Number
// alert( Number(true) );           // 1
// alert( Number(false) );          // 0

// Práctica 4
// Bien, tenemos que arreglar un código que no funciona bien

// let suma1 = Number(prompt('Para sumar dos numeros, ingresa el primero:', 1));
// let suma2 = Number(prompt('Ahora ingresa el segundo:', 2));
// let resultado = suma1 + suma2;
// alert('La suma de ' + suma1 + ' + ' + suma2 + ' es igual a: ' + resultado);   // La suma de 10 + 20 es igual a: 1020 ¿?¿?¿?¿?
// El resultado no deseado ocurre por que la salida de prompt es un string. Al sumar dos string no importa el tipo de dato que contengan se concatenaran
// Si lo que se quiere es la suma aritmetica de las dos entradas se debe castear el tipo de dato a number 
// La suma de 10 + 20 es igual a: 30 -> Solucionado

// Práctica 5
// Escribí una pagina que acepte por algún método que conozcas, el ingreso de los dos catetos de un triángulo rectángulo, y que devuelva la hipotenusa. 
// Sabemos que la hipotenusa de un triángulo rectángulo es igual la raiz cuadrada de la suma de los cuadrados de sus catetos. Podés utilizar prompt() 
// para recibir los catetos.

// let cateto1 = Number(prompt('Ingrese el primer cateto.'));
// let cateto2 = Number(prompt('Ingrese el segundo cateto.'));
// let hipotenusa = Math.sqrt(cateto1**2 + cateto2**2);
// console.log(`La hipotenusa del triangulo rectangulo con un cateto de ${cateto1} y otro de ${cateto2} es de ${hipotenusa}.`);
// Para la raiz cuadrada de la suma de los cuadrados de los catetos utilizo el metodo sqrt del objeto Math, el cual obtiene la raiz cuadrada de aquello
// que se le pase por parametro

// Práctica 6
// Declara e inicializa tres variables numéricas. Actualiza las variables utilizando operadores de asignación de la siguiente manera:
// A la primera restale la segunda.
// Multiplica la primera por la tercera.
// Reemplaza el valor de la tercera por el módulo de la tercera por la segunda.
// Imprimí los tres números por la consola.

let numero1 = 10;   
let numero2 = 20;
let numero3 = 30;
numero1 -= numero2;         // A la primera restale la segunda.
numero1 *= numero3;         // Multiplica la primera por la tercera.
numero3 %= numero2;         // Reemplaza el valor de la tercera por el módulo de la tercera por la segunda.
console.log('El numero1 tiene un valor de:', numero1);
console.log('El numero2 tiene un valor de:', numero2);
console.log('El numero3 tiene un valor de:', numero3);

// Práctica 7
// Cuál será el resultado de las siguientes sentencias. Intentá resolverlo sin codificar, luego, codificalo. Explicá el porqué del resultado. 

// 5 > 4                      // true -> comparacion -> 5 es mayor que 4
// 'manzana' > 'banana'       // true -> comparacion -> al caracter 'm' es mayor que 'b' en la tablas ASCII
// '2' > '12'                 // true -> comparacion -> al caracter '2' es mayor que '1' en la tablas ASCII
// undefined == null          // true -> en la comparacion abstracta undefined y null son iguales, debido a la coercion
// undefined === null         // false -> en la comparacion estricta son dos tipos de datos diferentes, mas alla de los valores
// null == "\n0\n"            // false -> nada o desconocido no es igual a algo o una variable que no esta vacia
// null === "\n0\n"           // false -> nada o desconocido es un tipo de dato diferente que la variable

console.log('Resultado de la comparacion: 5 > 4', 5 > 4);
console.log('Resultado de la comparacion: \'manzana\' > \'banana\'', 'manzana' > 'banana' );
console.log('Resultado de la comparacion: \'2\' > \'12\'', '2' > '12');
console.log('Resultado de la comparacion: undefined == null', undefined == null);
console.log('Resultado de la comparacion: undefined === null', undefined === null);
console.log('Resultado de la comparacion: null == "\n0\n"', null == "\n0\n");
console.log('Resultado de la comparacion: null === "\n0\n"', null === "\n0\n");

// Práctica 8
// Crea una variable con tu nombre, otra con tu edad, y otra informando si podes escribir código con JavaScript o no.
// Saca por consola la siguiente sentencia, ingresando las variables donde corresponda.
// ‘Hola, mi nombre es …, tengo … años y ¿puedo escribir en JavaScript?: …’

let miNombre = 'Gaston Lopez';
let miEdad = '41';
let puedoEscribirJs = true;
console.log(`Hola, mi nombre es ${miNombre}, tengo ${miEdad} años y ¿puedo escribir en JavaScript?: ${puedoEscribirJs}`);

// Práctica 9
// Cuál será el valor de las variables después de las ejecuciones de abajo? Resolvelo sin codificar!

let a = 1;       
let b = 1;
let c = ++a;
let d = b++; 
console.log('Valor de a:', a);      // a vale 2
console.log('Valor de b:', b);      // b vale 2
console.log('Valor de c:', c);      // c vale 2 -> al realizar la suma unaria como prefijo se suma al instante
console.log('Valor de d:', d);      // d vale 1 -> al realiza la suma unaria como sufijo se realiza la suma la siguiente vez que se acceda a la variable b

// Práctica 10
// Resolvé sin codificar, cual es el valor de x?

let numeroA = 2;
let numeroX = 1 + (a *= 2);   // 5 -> 1 + (2 * 2)
console.log('Resultado de X:', numeroX);

// Práctica 11
// Resolvé sin codificar, cual te parece que es el resultado de estas sentencias? Una vez que hayas terminado tu evaluación, codificalo y 
// compará los resultados.

// "" + 1 + 0              // "10" -> Se concatenan los tres valores, no hay coercion
// "" - 1 + 0              // -1 -> Coercion "" a 0, por lo tanto 0 - 1 + 0
// true + false            // 1 -> Coercion 1 + 0
// 6 / "3"                 // 2 -> Coercion
// "2" * "3"               // 6 -> Coercion
// 4 + 5 + "px"            // "9px" -> se suman los primeros terminos, luego se concatena con px
// "$" + 4 + 5             // $45 -> Se concatenan, mismo caso que en el primero
// "4" - 2                 // 2 -> Coercion
// "4px" - 2               // NaN -> Se intenta la coercion, falla
// "  -9  " + 5            // "  -9  5" -> Se concatenan
// "  -9  " - 5            // -14 -> Coercion
// null + 1                // 1 -> Coercion
// undefined + 1           // NaN -> Coercion, falla
// " \t \n" - 2            // -2 -> Coercion 0 - 2

console.log('Resultado de "" + 1 + 0   ', "" + 1 + 0   );
console.log('Resultado de "" - 1 + 0   ', "" - 1 + 0   );
console.log('Resultado de true + false ', true + false );
console.log('Resultado de 6 / "3"      ', 6 / "3"      );
console.log('Resultado de "2" * "3"    ', "2" * "3"    );
console.log('Resultado de 4 + 5 + "px" ', 4 + 5 + "px" );
console.log('Resultado de "$" + 4 + 5  ', "$" + 4 + 5  );
console.log('Resultado de "4" - 2      ', "4" - 2      );
console.log('Resultado de "4px" - 2    ', "4px" - 2    );
console.log('Resultado de "  -9  " + 5 ', "  -9  " + 5 );
console.log('Resultado de "  -9  " - 5 ', "  -9  " - 5 );
console.log('Resultado de null + 1     ', null + 1     );
console.log('Resultado de undefined + 1', undefined + 1);
console.log('Resultado de " \t " - 2 ', " \t " - 2 );