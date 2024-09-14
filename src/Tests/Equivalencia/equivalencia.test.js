import { equivalencia } from '../../Equivalencia/equivalencia';

describe('pruebas en equivalencia.js', () => {
  test('prueba funcion equivalencia', () => {
    expect(equivalencia()).toBe('Equivalencia');
  });
});
