const $lis = document.querySelectorAll("li");
const numeros = [];
$lis.forEach((element) => {
  numeros.push(Number(element.textContent));
});
const suma = numeros.reduce((a, b) => {
  return a + b;
});
const promedio = suma / numeros.length;
let mayor = numeros[0];
for (i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}
let menor = numeros[0];
for (i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}
let frecuencia = {};
numeros.forEach((numero) => {
  frecuencia[numero] = frecuencia[numero] ? frecuencia[numero]++ : 1;
});
let numeroConMayorFrecuencia;
let mayorFrecuencia = 0;
for (const nro in frecuencia) {
  if (frecuencia[nro] > mayorFrecuencia) {
    numeroConMayorFrecuencia = nro;
    mayorFrecuencia = frecuencia[nro];
  }
}
document.querySelector("#promedio").innerHTML = `El promedio es de ${promedio}`;
document.querySelector("#mayor").innerHTML = `El mayor numero es ${mayor}`;
document.querySelector("#menor").innerHTML = `El menor numero es ${menor}`;
document.querySelector(
  "#mas-frecuente"
).innerHTML = `El numero que mas veces aparece es ${numeroConMayorFrecuencia}`;
