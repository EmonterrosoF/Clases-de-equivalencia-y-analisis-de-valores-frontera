// calcularDescuento.test.js
import { calcularDescuento } from "./calcularDescuento";

describe("Pruebas en calcularDescuento.js", () => {
  // Valores frontera
  test("Descuento para miembro con cantidad 0 (límite inferior de compras bajas)", () => {
    expect(calcularDescuento(0, true)).toBe(5);
  });

  test("Descuento para miembro con cantidad 50 (límite superior de compras bajas)", () => {
    expect(calcularDescuento(50, true)).toBe(5);
  });

  test("Descuento para miembro con cantidad 51 (límite inferior de compras medias)", () => {
    expect(calcularDescuento(51, true)).toBe(10);
  });

  test("Descuento para miembro con cantidad 150 (límite superior de compras medias)", () => {
    expect(calcularDescuento(150, true)).toBe(10);
  });

  test("Descuento para miembro con cantidad 151 (límite inferior de compras altas)", () => {
    expect(calcularDescuento(151, true)).toBe(15);
  });

  test("Descuento para no miembro con cantidad 0 (límite inferior de compras bajas)", () => {
    expect(calcularDescuento(0, false)).toBe(2);
  });

  test("Descuento para no miembro con cantidad 50 (límite superior de compras bajas)", () => {
    expect(calcularDescuento(50, false)).toBe(2);
  });

  test("Descuento para no miembro con cantidad 51 (límite inferior de compras medias)", () => {
    expect(calcularDescuento(51, false)).toBe(5);
  });

  test("Descuento para no miembro con cantidad 150 (límite superior de compras medias)", () => {
    expect(calcularDescuento(150, false)).toBe(5);
  });

  test("Descuento para no miembro con cantidad 151 (límite inferior de compras altas)", () => {
    expect(calcularDescuento(151, false)).toBe(10);
  });

  test("Cantidad negativa debería lanzar error", () => {
    expect(() => calcularDescuento(-1, true)).toThrow(
      "La cantidad de compra no puede ser negativa."
    );
  });
});
