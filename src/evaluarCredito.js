// evaluarCredito.js
export const evaluarCredito = (puntuacion) => {
  if (puntuacion < 0) {
    throw new Error("La puntuación no puede ser negativa.");
  }
  if (puntuacion <= 300) return "Bajo";
  if (puntuacion <= 700) return "Medio";
  if (puntuacion <= 1000) return "Alto";
  return "Puntuación fuera del rango permitido.";
};
