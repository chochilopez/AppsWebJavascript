'use strict'

let nombreUsuario = prompt('Ingresa tu nombre de usuario');
let contraseña = '';

if (nombreUsuario == 'Administrador') {
  contraseña = prompt('Ingresa tu contrseña');
  if (contraseña == 'ElMejor') {
    alert('Acceso concedido');
  } else if (contraseña != 'ElMejor' && contraseña != null) {
    alert('Contraseña incorrecta')
  } else {
    alert('Cancelado')
  }
} else if (nombreUsuario != 'Administrador' && nombreUsuario != null) {
  alert('No te conozco', nombreUsuario);
} else {
  alert('Cancelado');
}