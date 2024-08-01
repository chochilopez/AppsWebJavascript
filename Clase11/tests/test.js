'use strict'

// BDD primero, antes de codificar, tenemos que crear el test. 
// Especificacion, specs. Descripcion general de lo que hace la funcion
// Y deberia testear una primera funcionalidad 

describe('diferenciaAños va a recibir dos fechas y va a devolver la diferencia en años', () => {
  it('Si le ingreso dos Date devulve un entero con la dieferencia en años', () => {
    assert.equal(diferenciaAños(new Date('11/16/1982'), new Date('07/26/2024')), 41);
    assert.equal(diferenciaAños(new Date('07/26/2024'), new Date('11/16/1982')), 41);
  });

  it('Si le ingreso una sola fecha, resta le fecha con la fecha actual', () => {
    assert.equal(diferenciaAños(new Date('01/01/2000')), 24);
  });

  it('Si no ingreso datos deberia devolver null', () => {
    assert.equal(diferenciaAños(), null);
  });

  it('Si se ingresan parametros incorrectos la funcion devulve null ', () => {
    assert.equal(diferenciaAños('hola', 44), null);
  });

});