'use strict';

let elemento

function arrastre(elementoHTML) {
  elemento = elementoHTML;
}

function depositar(elementoHTML) {
  elementoHTML.appendChild(elemento);
}