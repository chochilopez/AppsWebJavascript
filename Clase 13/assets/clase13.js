'use strict'

// window.onload = () => {
//   const h1 = document.querySelector('h1');
//   console.dir(h1);                      
// }          

function objeto(nodo) {
  console.dir(nodo.parentNode);
}

function interruptor() {
  const foco = document.getElementById('foco'); 
  if (foco.style.display == 'block') {
    foco.style.display = 'none';
  } else {
    foco.style.display = 'block';
  }
}