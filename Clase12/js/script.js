'use strict'
const principal = document.getElementById('principal');
console.log(principal.innerHTML);


const h1 = document.getElementsByTagName('h1');
console.log(h1);

const h6 = document.createElement('h6');

h1[2].insertAdjacentElement("afterend", h6);  // como objeto posterior

console.log(principal.innerHTML);