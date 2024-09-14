// evaluarCredito.test.js
import { evaluarCredito } from "./evaluarCredito";

describe("Pruebas en evaluarCredito.js", () => {
  // Valores frontera
  test("Puntuación en el límite inferior del rango válido", () => {
    expect(evaluarCredito(0)).toBe("Bajo");
  });

  test('Puntuación justo en el límite superior de "Bajo"', () => {
    expect(evaluarCredito(300)).toBe("Bajo");
  });

  test('Puntuación justo en el límite inferior de "Medio"', () => {
    expect(evaluarCredito(301)).toBe("Medio");
  });

  test('Puntuación justo en el límite superior de "Medio"', () => {
    expect(evaluarCredito(700)).toBe("Medio");
  });

  test('Puntuación justo en el límite inferior de "Alto"', () => {
    expect(evaluarCredito(701)).toBe("Alto");
  });

  test("Puntuación justo en el límite superior del rango válido", () => {
    expect(evaluarCredito(1000)).toBe("Alto");
  });

  test("Puntuación fuera del rango permitido", () => {
    expect(evaluarCredito(1001)).toBe("Puntuación fuera del rango permitido.");
  });

  test("Puntuación negativa debería lanzar error", () => {
    expect(() => evaluarCredito(-1)).toThrow(
      "La puntuación no puede ser negativa."
    );
  });
});
