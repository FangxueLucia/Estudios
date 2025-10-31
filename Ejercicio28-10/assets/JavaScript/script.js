

// Espera a que toda la página se cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------
  // ELEMENTOS DEL DOM
  // ------------------------------
  let result = document.getElementById("Resultado"); // Elemento <h3> donde mostraremos los resultados
  const multiplicar = document.getElementById("multiplicar"); // Botón multiplicar
  const sumar = document.getElementById("suma"); // Botón suma
  const restar = document.getElementById("resta"); // Botón resta
  const dividir = document.getElementById("dividir"); // Botón dividir

  // ------------------------------
  // VARIABLES
  // ------------------------------
  const variable1 = 2; // Primer número de ejemplo
  const variable2 = 8; // Segundo número de ejemplo
  const variable3 = 10; // Tercer número de ejemplo

  // ------------------------------
  // OPERACIONES
  // ------------------------------
  const suma = variable1 + variable2; // 2 + 8 = 10
  const multiplicacion = variable1 * variable2; // 2 * 8 = 16
  const resta = variable3 - variable2; // 10 - 8 = 2
  const division = variable3 / variable1; // 10 / 2 = 5

  let resultado = 0; 
  // Nota: esta variable no se usa realmente, 
  // el <h3 id="Resultado"> es el que mostrará el resultado.

  // ------------------------------
  // EVENTOS: qué pasa al hacer clic en cada botón
  // ------------------------------
  sumar.addEventListener("click", () => {
    result.textContent = suma; // Muestra la suma en el <h3>
  });

  multiplicar.addEventListener("click", () => {
    result.textContent = multiplicacion; // Muestra la multiplicación en el <h3>
  });

  restar.addEventListener("click", () => {
    result.textContent = resta; // Muestra la resta en el <h3>
  });

  dividir.addEventListener("click", () => {
    result.textContent = division; // Muestra la división en el <h3>
  });

});



