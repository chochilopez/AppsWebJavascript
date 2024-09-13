/*
s -> servicio
p -> promesa
f -> funcion
l -> local
*/

function borrarDeLocal (nombre) {
  localStorage.removeItem(nombre)
}

function obtenerDeLocal (nombre) {
  const itemStr = localStorage.getItem(nombre)
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expire) {
    localStorage.removeItem(nombre)
    return null
  }
  return item
}

function obtenerDeLocalConSesion (nombre, uuid) {
  const itemStr = localStorage.getItem(nombre)
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  if (item.session === uuid) {
    return item
  } else {
    localStorage.removeItem(nombre)
    return null
  }
}

function guardarEnLocal (nombre, valor, ttl) {
  localStorage.removeItem(nombre)
  const now = new Date()
  const item = {
    value: valor,
    expire: now.getTime() + ttl
  }
  localStorage.setItem(nombre, JSON.stringify(item))
}

function guardarEnLocalConSesion (nombre, valor, uuid) {
  localStorage.removeItem(nombre)
  const item = {
    value: valor,
    session: uuid
  }
  localStorage.setItem(nombre, JSON.stringify(item))
}

export const llaveroService = {
  borrarDeLocal,
  obtenerDeLocal,
  obtenerDeLocalConSesion,
  guardarEnLocal,
  guardarEnLocalConSesion
}
