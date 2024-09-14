import { decisiones } from '../../Decisiones/decisiones';

describe('pruebas en decisiones.js', () => {
  test('prueba funcion decisiones', () => {
    expect(decisiones()).toBe('Decisiones');
  });
});
