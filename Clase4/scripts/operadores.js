'use strict'
// Operadores aritmeticos
// Suma
console.log('Resultaedo de la Suma', 15 + 9); // 24

// Resta
console.log('Resultaedo de la Resta', 15 - 9); // 6

// Multiplicacion
console.log('Resultaedo de la Multiplicacion', 15 * 9); 135

// Division
console.log('Resultaedo de la Division', 15 / 9); 1.66666666667

// Potencia
console.log('Resultaedo de la Potencia', 15 ** 9); // 38443359875

// Modulo - Devuelve el resto de una division entera
/*
  Supongamos que a la hora actual 17:21 yo quisiera agregarle 416 minutos, lo
  primero que deberia hacer es saber cuantos horas hay en 416 (416 / 60),
  por lo tanto hay 6 horas en 416 minutos.
  A 17:21 le agrego 6 horas, me resta convertir el .93333 periodico de la division
*/ 
console.log('Resultaedo de modulo', 416 % 60); // 56
/* 
  De la division entera resulta que el modulo o el resto es igual a 56
  por lo tando debo sumar a la actual 6 horas con 56 minutos == 416
*/

// Operadores Unarios
// Suma unaria
let numero = 5;
numero++; // a numero le sumo 1
console.log('A 5 le hice una suma unario como sufijo', numero); // 6
numero--;
console.log('A 5 le hice una resta unario como sufijo', numero); // 5

// Suma unaria como sufijo 
// Va a sumar pero el valor lo va a mostrar la proxima que se consulte la variable
let numero2 = 1;
numero2++; // numero va a seguir valiendo uno en esta linea, hasta que se consulte nuevamente
console.log('A 1 le hice una suma unario como sufijo en la sentencia anterior', numero2); // 2
console.log('A 2 le hice una suma unario como sufijo en la sentencia actual',numero2++); // 2 Le agrego 1 pero lo va a sumar recien la proxima que vez que se consulte la variable 
console.log('Recien ahora que consulta nuevamente la variable se realiza la suma de hecho',numero2); // 3

// Suma unaria como prefijo
let numero3 = 0;
++numero3; // 1
console.log('A 0 le hice una suma unario como prefijo en la sentencia anterior', numero3); // 1
console.log('A 1 le hice una suma unario como prefijo en la sentencia actual', ++numero3); //2

// Probemos como estamos de teoria
let operando1 = 1;
let operando2 = 2;
let operando3 = 3;
console.log('A ver quien me resuelve esta cuenta:', operando1++ + ++operando2 + operando3++); // 7
console.log('A ver quien me resuelve esta cuenta:', operando1++ + ++operando2 + operando3++); // 10
console.log('A ver quien me resuelve esta cuenta:', operando1 + operando2 + operando3); // 12


// Operadores de asignacion

operando1 = operando1 + 5; // Si yo quisiera sumar 5 a una variable puedo realizarlo asi. Me da 8.
operando1 += 5; // Es igual a la sentencia anterior, pero abreviada. Me da 13

// Operadores de comparacion
// Igualdad abstracta - Coercio o la conversion implicita la realiza automaticamente JS para algunos tipos de datos
console.log(9 == '9'); // true
// Igualdad estricta - JS no solo compara los valores, sino que tambien el tipo de dato, o sea, no coerciona nada
console.log(9 === '9'); // false

// Desigualddad abstracta - Veo si son diferentes dos valores en una comparacion
console.log(9 != '9'); // false
// Desigualdad estricta
console.log(9 !== '9'); // true

console.log('9 es mayor que 5?', 9 > 5) // verdadero