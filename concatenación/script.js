// Espera a que toda la página se cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

  // Guardamos el contenido de cada párrafo en variables de texto
  const char1 = document.getElementById("char1").textContent; // "gatos"
  const char2 = document.getElementById("char2").textContent; // "perros"
  const char3 = document.getElementById("char3").textContent; // "y caballos"

  // Guardamos el elemento <p> donde mostraremos el resultado
  let resultado = document.getElementById("resultado"); // <p id="resultado">Resultado:</p>

  // Guardamos el botón que disparará la concatenación
  const concatenar = document.getElementById("concatenar"); // <button id="concatenar">

  // Cuando se haga clic en el botón, ejecutamos la función
  concatenar.addEventListener("click", () => {

      // Concatenamos los textos y los agregamos al contenido actual de "resultado"
      // resultado.textContent += " " + char1 + " " + char2 + " " + char3; 
      // La línea anterior reemplazaría el contenido completo del <p>

      resultado.textContent += " " + char1 + " " + char2 + " " + char3; 
      // El operador "+=" añade al final del contenido existente en lugar de reemplazarlo
      // Ejemplo: 
      // Antes: "Resultado:"
      // Después de un clic: "Resultado: gatos perros y caballos"
      // Después de otro clic: "Resultado: gatos perros y caballos gatos perros y caballos"
  })
})
