'use strict'

import {callbackHell} from './callback_hell.js';

callbackHell.funcionAsincrona1(() => {
  callbackHell.funcionAsincrona2(() => {
    callbackHell.funcionAsincrona3(() => {
      console.log("Todas las funciones finalizaron su ejecucion");
    });
  });
});