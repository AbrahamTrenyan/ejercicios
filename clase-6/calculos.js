function obtenerMayor(array) {
  let mayor = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}
function obtenerMenor(array) {
  let menor = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }
  return menor;
}
function obtenerPromedio(array) {
  const suma = array.reduce((a, b) => a + b);
  return suma / array.length;
}
