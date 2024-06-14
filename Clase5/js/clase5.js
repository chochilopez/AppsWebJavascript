'use strict'

// let llueve = window.confirm('Esta lloviendo?');
// if (llueve == true) {
//   // El codigo en bloque debajo de if solo se ejecutara si la expresion resulta verdadera
//   alert('Llevo paraguas');
// } else {
//   // El codigo en bloque debajo de else es opcional, se ejecutara si la expresion resulta false
//   alert('Lo dejo en casa');
// }

// Me piden un script para preguntar al usuario su edad y si es mayor que 5
// tiene que pagar 4000 y si no entra gratis.
// let edad = prompt('Cual es tu edad');
// if (Number(edad) < 5) {
//   console.log('Entra gratis')
// } else {
//   console.log('Paga 4000')
// }

// Practica
let clima = 'Caluroso';
if (clima === 'Frio') {
	console.log('Me llevo campera');
} else {
 	console.log('Salgo de remera');	
}

let variableBool = true;
console.log(variableBool) // false
if (variableBool == true) {
  console.log('Es verdad')
} else {
  console.log('no es verdad')
}

// Me piden un script para preguntar al usuario su edad y si es menor que 5
// entra gratis, si tiene entre 5 y 12 paga 2000, si tiene entre 13 y 65
// paga 4000 y si es jubilado (+ de 65) paga 3000

let edad = 65; 
if (edad < 5) { // Si es menor de 5
  console.log('Entra gratis') 
} else if (edad >= 5 && edad <= 12){  // si tiene entre 5 y 12 años
  console.log('Paga 2000') 
} else if (edad > 12 && edad <= 65){ // si tiene entre 13 y 65 años
  console.log('Paga 4000')  
} else {                    // Si no se cumple ninguna de las anteriores es jubilado
  console.log('Paga 3000')
} 

/*
  Desde un bar te solicitan que crees una página con un script donde se 
  solicite la edad del usuario.
  Convertí la respuesta a número.
  Almacena el valor en una variable.
  Si la edad es mayor que 21, puede ingresar y ademas puede comprar alcohol.
  Si es mayor de 19 puede entrar, pero no puede comprar alcohol.
  Si en cambio es menor que 19 no puede entrar
  Informa al usuario el resultado.
*/
let edadBar = prompt('Cual es tu edad');
// edadBar = 'Casa'; 

  if (edadBar > 21) {
    console.log('Puede entrar y pero puede comprar')
  } else if (edadBar > 19 && edadBar <= 21) {
    console.log('Puede entrar y pero no puede comprar')
  } else if (edadBar <= 19) {
    console.log('No puede entrar')
  } else {
    console.log('le erraste a tu edad, no podes entrar')
  }

  let edadbar = 'casa'; // 1.2 - 
  if (typeof edadbar == Number) {
    // bloque de codigo ananlizando un numero
  } else {
    // no es un tipo de dato numero
  }
