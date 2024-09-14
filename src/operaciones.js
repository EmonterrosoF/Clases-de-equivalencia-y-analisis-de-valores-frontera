export const suma = (a, b) => a + b;

export const resta = (a, b) => a - b;

export const multiplicacion = (a, b) => a * b;

export const division = (a, b) => {
  if (b === 0) {
    throw new Error('No se puede dividir por 0');
  }

  return a / b;
};
