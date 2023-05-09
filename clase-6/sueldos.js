/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje. 

Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

LISTO
*/
function crearInputSalario(e) {
  e.preventDefault();
  const $botonResetear = document.querySelector("#boton-resetear");
  const $botonAgregarSalario = document.createElement("button");
  $botonAgregarSalario.textContent = "Agregar salarios";
  $botonAgregarSalario.type = "button";
  $botonAgregarSalario.id = "agregar-salario";
  $botonAgregarSalario.onclick = agregarInputSalario;
  $botonResetear.parentNode.insertBefore($botonAgregarSalario, $botonResetear);
  const $botonCalcular = document.querySelector("#boton-calcular");
  $botonCalcular.addEventListener("click", analizarSalarios);
}
function agregarInputSalario(e) {
  const $integrantes = document.querySelectorAll(".integrante");
  const $inputSalarios = document.querySelectorAll(".salario");
  const inputsFaltantes = $integrantes.length - $inputSalarios.length;
  for (let i = 0; i < inputsFaltantes; i++) {
    const $integrante = $integrantes[$inputSalarios.length + i];
    const $inputSalario = document.createElement("input");
    $inputSalario.className = `salario`;
    $inputSalario.type = "number";
    $inputSalario.min = "0";
    const $labelSalario = document.createElement("label");
    $labelSalario.textContent = `Salario :`;
    const $botonQuitar = document.createElement("button");
    $botonQuitar.type = "button";
    $botonQuitar.textContent = "Quitar";
    const $botonAgregarSalario = e.target;
    $botonAgregarSalario.disabled = true;
    $botonQuitar.onclick = function () {
      $labelSalario.remove();
      $inputSalario.remove();
      $botonQuitar.remove();
      $botonAgregarSalario.disabled = false;
    };
    $integrante.appendChild($labelSalario);
    $integrante.appendChild($inputSalario);
    $integrante.appendChild($botonQuitar);
  }

  if (document.querySelectorAll("input.salario").length === 0) {
    const $botonAgregarSalario = e.target;
    $botonAgregarSalario.disabled = false;
  }
}

function analizarSalarios(e) {
  e.preventDefault();
  const $inputsSalarios = document.querySelectorAll(".salario");
  const salarios = [];
  $inputsSalarios.forEach((input) => {
    if (input.value != "") {
      salarios.push(Number(input.value));
    }
  });
  if (salarios.length > 0) {
    const datosSalarios = {
      promedio: obtenerPromedio(salarios),
      mayor: obtenerMayor(salarios),
      menor: obtenerMenor(salarios),
    };

    mostrarResultados(datosSalarios);
  }
}
function mostrarResultados(infoSalarios) {
  const $parrafo = document.querySelector("#datos-salarios");
  $parrafo.textContent = `El mayor salario es ${infoSalarios.mayor}, el menor salario es ${infoSalarios.menor}, y el promedio es de ${infoSalarios.promedio}.
    `;
}

document
  .getElementById("form-cantidad-integrantes")
  .addEventListener("submit", crearInputSalario);
