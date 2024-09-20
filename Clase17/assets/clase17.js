'use strict'

// import {callbackHell} from './callback_hell.js';

console.log('Mi script se esta ejecutando con normalidad.');
// El bloque try catch para el tratamiento de errores
// ERRORES COMUNES
// ERROR -> Error genérico
// SYNTAX_ERROR -> Error de sintaxis codigo
// REFERENCE_ERROR -> cuando llamamos una variable que no esta inicializada
// TYPE_ERROR -> cuando queremos una realizar un operacion con un tipo de dato incorrecto
// RANGE_ERROR -> cuando se supera el valor de un  rango numerico
try {
  console.log('Dentro de try, previo al error.');
  // throw new Error('ERROR CATASTROFICO');
  console.log('Dentro de try, luego del error.');
} catch (error) {
  console.log('Mi codigo falló catastreoficamente, pero por no se interrumpio');
  console.log(`Excepción: ${error}`);
}
console.log('Mi script sigue ejecutandose con normalidad.');

// Ejemplo de Callback
function hacerAlgo(callback) {
  console.log('Ejecuto algo y luego ejecuto el callback.')
  callback();
}
function decirHola() {  
  console.log('Hola'); 
}
function decirChau() {  
  console.log('Chau'); 
}
hacerAlgo(decirHola);
hacerAlgo(decirChau);


// Ejemplo de callback
function imprimirPorConsola(dato) {
  console.log(dato);
}
function buscarDatosTiempo(tiempo, queHagoConLosDatosDelTiempo) {
  setTimeout(() => {
    let respuesta = `El tiempo ${tiempo} va a estar soleado.`;
    queHagoConLosDatosDelTiempo(respuesta);
  }, 3000)
}

buscarDatosTiempo('22/09/2024', imprimirPorConsola);

// Promesas en Javascript
let promesa = new Promise((resolve, reject) => {
  // Ejemplo de consulta a la api de tiempo
  let numeroX = 2
  setTimeout(() => {
    if (numeroX > 5) {
      resolve(numeroX);
    }
    reject('No tiene valor deseado')
  }, 3000)
});

// LLego al resolve a traves then
// LLego al reject a traves de catch
promesa.then((respuesta) => {
  console.log('Se resolvio la promesa, con un valor de',respuesta);
}).catch((error) => {
  console.log(error);
})

// Uso de async-await
function amigoHabla() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (new Date() % 2 == 0) 
        resolve('Te hablo.');
      reject('No te hablo.')
    }, 3000)
  })
}

async function pedirAMiAmigoQueHable() {
  try {
    const variable = await amigoHabla();
    console.log(variable);
  } catch(error) {
    console.log(error)
  }
}

pedirAMiAmigoQueHable();


// Ejemplo de solicitud de un servidor
function buscarDioses() {
  return new Promise((res, rej) => {
    fetch("https://thegreekmythapi.vercel.app/api/gods")
    .then((resultado) => {
      return res(resultado);
    })
    .catch((error) => {
      return rej(error);
    })
  })
}

async function imprimirDioses() {
  try {
    const consulta = await buscarDioses();
      console.log(consulta)
  } catch(error) {
    console.error(error);
  }
}

imprimirDioses();

// callbackHell.funcionAsincrona1(() => {
//   callbackHell.funcionAsincrona2(() => {
//     callbackHell.funcionAsincrona3(() => {
//       console.log("Todas las funciones finalizaron su ejecucion");
//     });
//   });
// });


