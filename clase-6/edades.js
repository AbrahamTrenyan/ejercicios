/*
TAREA: 
Empezar preguntando cuánta gente hay en el grupo familiar.    
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante. 
Al hacer click en "calcular", mostrar en un elemento pre-existente
la mayor edad, la menor edad y el promedio del grupo familiar.           

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).  
*/

function crearIntegrantes(e) {
  e.preventDefault();
  const $botonSubmit = document.querySelector("#boton-crear");
  let cantidadIntegrantes = Number(
    document.querySelector("#cantidad-integrantes").value
  );
  const $formIntegrantes = document.querySelector("#integrantes");
  for (i = 0; i < cantidadIntegrantes; i++) {
    const $divIntegrante = document.createElement("div");
    $divIntegrante.className = "integrante";
    const $inputEdad = document.createElement("input");
    $inputEdad.type = "number";
    $inputEdad.min = "0";
    $inputEdad.name = `edad${i + 1}`;
    $inputEdad.className = `edad`;
    const $labelEdad = document.createElement("label");
    $labelEdad.textContent = `Edad ${i + 1} :`;
    $divIntegrante.appendChild($labelEdad);
    $divIntegrante.appendChild($inputEdad);
    $formIntegrantes.appendChild($divIntegrante);
  }
  if (cantidadIntegrantes > 0) {
    const $botonCalcular = document.createElement("button");
    $botonCalcular.type = "submit";
    $botonCalcular.textContent = "Calcular";
    $botonCalcular.id = "boton-calcular";
    $botonCalcular.onclick = analizarDatos;
    $formIntegrantes.appendChild($botonCalcular);
    $botonSubmit.disabled = true; // Se deshabilita para que solo se pueda enviar una vez
  }
}
function analizarDatos(e) {
  e.preventDefault();
  const $inputsEdades = document.querySelectorAll(".edad");
  const edades = [];
  $inputsEdades.forEach((input) => {
    if (input.value != "") {
      edades.push(Number(input.value));
    }
  });

  const datosEdades = {
    promedio: obtenerPromedio(edades),
    mayor: obtenerMayor(edades),
    menor: obtenerMenor(edades),
  };
  mostrarResultadosEdades(datosEdades);
}
function mostrarResultadosEdades(infoEdades) {
  const $parrafo = document.querySelector("#datos-edades");
  $parrafo.textContent = `La mayor edad es ${infoEdades.mayor}, la menor edad es ${infoEdades.menor}, y el promedio es de ${infoEdades.promedio}.`;
}

document
  .getElementById("form-cantidad-integrantes")
  .addEventListener("submit", crearIntegrantes);
