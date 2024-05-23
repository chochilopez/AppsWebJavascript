'use strict'
// Igualdad estricta
console.log(5 === 5);         // true
console.log(5 === '5');       // false (tipos diferentes de datos)
console.log(true === true);   // true
console.log(true === 1);      // false (tipos diferentes de datos)

// Igualdad abstracta
console.log(5 == 5);          // true
console.log(5 == '5');        // true (coercionado al mismo tipo de dato)
console.log(true == true);    // true
console.log(true == 1);       // true (coercionado al mismo tipo de dato)