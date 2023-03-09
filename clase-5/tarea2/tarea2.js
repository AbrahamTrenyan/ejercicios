document.querySelector("#ingresar").onclick = function () {
  const nombreDeUsuario = document.querySelector("#nombre-usuario").value;
  const edadDeUsuario = document.querySelector("#edad-usuario").value;
  document.querySelector(
    "#resultado"
  ).innerHTML = `Nombre: ${nombreDeUsuario} Edad: ${edadDeUsuario} `;
  document.querySelector("h1").innerHTML = `Bienvenido, ${nombreDeUsuario}`;
};
