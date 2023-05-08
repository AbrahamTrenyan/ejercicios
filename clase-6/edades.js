/*
TAREA: 
Empezar preguntando cuánta gente hay en el grupo familiar.    
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante. 
Al hacer click en "calcular", mostrar en un elemento pre-existente
la mayor edad, la menor edad y el promedio del grupo familiar.           

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).  
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje. 

Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

LISTO
*/
function agregarInputSalario(e) {
  const $inputSalario = document.createElement("input");
  $inputSalario.className = `salario`;
  $inputSalario.type = "number";
  $inputSalario.min = "0";
  const $labelSalario = document.createElement("label");
  $labelSalario.textContent = `Salario :`;
  const $botonQuitar = document.createElement("button");
  $botonQuitar.type = "button";
  $botonQuitar.textContent = "Quitar";
  const $integrante = e.target.parentNode;
  const $botonAgregarSalario = $integrante.querySelector("#agregar-salario");
  if ($integrante.querySelectorAll("input.salario").length === 0) {
    $integrante.appendChild($labelSalario);
    $integrante.appendChild($inputSalario);
    $integrante.appendChild($botonQuitar);
    $botonAgregarSalario.disabled = true;
  }
  $botonQuitar.onclick = function () {
    $labelSalario.remove();
    $inputSalario.remove();
    $botonQuitar.remove();
    $botonAgregarSalario.disabled = false;
  };
}
function crearIntegrantes(e) {
  e.preventDefault();
  const $botonSubmit = document.querySelector("#boton-crear");
  let cantidadIntegrantes = Number(
    document.querySelector("#cantidad-integrantes").value
  );
  const $formIntegrantes = document.querySelector("#integrantes");
  for (i = 0; i < cantidadIntegrantes; i++) {
    const $divIntegrante = document.createElement("div");
    const $inputEdad = document.createElement("input");
    $inputEdad.type = "number";
    $inputEdad.min = "0";
    $inputEdad.name = `edad${i + 1}`;
    $inputEdad.className = `edad`;
    const $labelEdad = document.createElement("label");
    $labelEdad.textContent = `Edad ${i + 1} :`;
    const $botonAgregarSalario = document.createElement("button");
    $botonAgregarSalario.textContent = "Agregar salario";
    $botonAgregarSalario.type = "button";
    $botonAgregarSalario.id = "agregar-salario";
    $botonAgregarSalario.onclick = agregarInputSalario;
    $divIntegrante.appendChild($labelEdad);
    $divIntegrante.appendChild($inputEdad);
    $formIntegrantes.appendChild($divIntegrante);
    $divIntegrante.appendChild($botonAgregarSalario);
  }
  if (cantidadIntegrantes > 0) {
    const $botonCalcular = document.createElement("button");
    $botonCalcular.type = "submit";
    $botonCalcular.textContent = "Calcular";
    $formIntegrantes.appendChild($botonCalcular);
    $botonSubmit.disabled = true; // Se deshabilita para que solo se pueda enviar una vez
  }
}
function analizarDatos(e) {
  e.preventDefault();
  const $inputsEdades = document.querySelectorAll(".edad");
  const $inputsSalarios = document.querySelectorAll(".salario");
  const edades = [];
  $inputsEdades.forEach((input) => {
    if (input.value != "") {
      edades.push(Number(input.value));
    }
  });
  const salarios = [];
  $inputsSalarios.forEach((input) => {
    if (input.value != "") {
      salarios.push(Number(input.value));
    }
  });
  const datosEdades = {
    promedio: obtenerPromedio(edades),
    mayor: obtenerMayor(edades),
    menor: obtenerMenor(edades),
  };
  const datosSalarios = {
    promedio: obtenerPromedio(salarios),
    mayor: obtenerMayor(salarios),
    menor: obtenerMenor(salarios),
  };

  mostrarResultados(datosEdades, datosSalarios);
}
function mostrarResultados(infoEdades, infoSalarios) {
  const $parrafo = document.querySelector("#datos");
  $parrafo.textContent = `La mayor edad es ${infoEdades.mayor}, la menor edad es ${infoEdades.menor}, y el promedio es de ${infoEdades.promedio}.

  El mayor salario es ${infoSalarios.mayor}, el menor salario es ${infoSalarios.menor}, y el promedio es de ${infoSalarios.promedio}.
  `;
}

document
  .getElementById("form-cantidad-integrantes")
  .addEventListener("submit", crearIntegrantes);
const $formEdades = document.getElementById("integrantes");
$formEdades.addEventListener("submit", analizarDatos);
