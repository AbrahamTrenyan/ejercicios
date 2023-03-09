document.querySelector("#boton-calcular").onclick = function () {
  const salarioAnual = Number(document.querySelector("#salario-anual").value);
  const salarioMensual = calcularSalarioMensual(salarioAnual);
  document.querySelector("#salario-mensual").value = salarioMensual;
  return false;
};
function calcularSalarioMensual(salarioAnual) {
  const MESES_EN_UN_ANIO = 12;
  return salarioAnual / MESES_EN_UN_ANIO;
}
