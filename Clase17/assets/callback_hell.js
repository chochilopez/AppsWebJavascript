'use strict';

function funcionAsincrona1(callback) {
  setTimeout(() => {
    console.log("Funcion asincrona numero 1 finalizada.");
    callback();
  }, 1000);
}

function funcionAsincrona2(callback) {
  setTimeout(() => {
    console.log("Funcion asincrona numero 2 finalizada.");
    callback();
  }, 1000);
}

function funcionAsincrona3(callback) {
  setTimeout(() => {
    console.log("Funcion asincrona numero 3 finalizada.");
    callback();
  }, 1000);
}

export const callbackHell = {
  funcionAsincrona1,
  funcionAsincrona2,
  funcionAsincrona3
}