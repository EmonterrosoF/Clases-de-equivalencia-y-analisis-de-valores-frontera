// calcularDescuento.js
export const calcularDescuento = (cantidad, esMiembro) => {
  if (cantidad < 0) {
    throw new Error("La cantidad de compra no puede ser negativa.");
  }

  if (esMiembro) {
    if (cantidad <= 50) return 5; // 5% descuento para miembros en compras bajas
    if (cantidad <= 150) return 10; // 10% descuento para miembros en compras medias
    return 15; // 15% descuento para miembros en compras altas
  } else {
    if (cantidad <= 50) return 2; // 2% descuento para no miembros en compras bajas
    if (cantidad <= 150) return 5; // 5% descuento para no miembros en compras medias
    return 10; // 10% descuento para no miembros en compras altas
  }
};
