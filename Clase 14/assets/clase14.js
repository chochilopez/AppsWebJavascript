'use strict'

function crearElemento (texto) {
  const contenedor = document.getElementById('contenedor');
  const parrafo = document.createElement('p');
  parrafo.textContent = texto;
  fondoAleatorio(parrafo);
  contenedor.appendChild(parrafo);
}

function eventoHTML() {
  crearElemento('Click desde evento HTML.')
}

function fondoAleatorio(elemento) {
  const red = numeroAleatorio();
  const green = numeroAleatorio();
  const blue = numeroAleatorio();
  // rgb -> Red Green Blue (0 - 255);
  elemento.style.backgroundColor = `rgb(${red},${green},${blue})`; 
}

function numeroAleatorio() {
  return Math.floor(Math.random() * 255);
}

window.onload = () => {
// Handler -> aquel que maneja el evento
const botonAtributo = document.getElementById('botonAtributo');
botonAtributo.onclick = () => crearElemento('Click desde atributo.');

// Otros eventos comunes onkeyup onkeydown onmouseover ondblclick onfocus onmouseenter

// metodo addEventListener 

const botonListener = document.getElementById('botonListener');
// addEventListener(evento pero sin "on", funcion)   addEventListener('click', function())
botonListener.addEventListener('click', () => crearElemento('Click desde listener.'));
}

// Otra manera de acceder al disparo del evento de finalizacion de carga del DOM
document.addEventListener('DOMContentLoaded', () => {
    // Eventos utiles respecto del mouse
    const caja = document.getElementById('caja');
    caja.onmouseover = () => {
      caja.style.background = 'mediumpurple';
      console.log('onmouseover')
    };
    caja.onmousedown = () => {
      caja.style.background = 'royalblue';
      console.log('onmousedown')
    };
    caja.onmouseup = () => {
      caja.style.background = 'blueviolet';
      console.log('onmouseup')
    };
    caja.ondblclick = () => {
      caja.style.background = 'darkblue';
      console.log('ondblclick')
    };
    caja.onmouseout = () => {
      caja.style.background = 'darkorange';
      console.log('onmouseout')
    };
    // caja.onmousemove = () => {
    //   console.log('onmousemove')
    // };
});


