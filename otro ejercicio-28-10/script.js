// Espera a que toda la página se cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

  // Buscamos el elemento donde mostraremos el resultado
  const result = document.getElementById("Resultado");

  // Buscamos el botón que hará la suma
  const nuevasuma = document.getElementById("nuevasuma");

  // Cuando se haga clic en el botón, ejecutamos esta función
  nuevasuma.addEventListener("click", () => {

    // Tomamos los números del HTML y los convertimos de texto a número
    const numero1 = parseInt(document.getElementById("numero1").textContent); // "2" -> 2
    const numero2 = parseInt(document.getElementById("numero2").textContent); // "4" -> 4
    const numero3 = parseInt(document.getElementById("numero3").textContent); // "6" -> 6

    // Sumamos los tres números
    const suma = numero1 + numero2 + numero3;

    // Mostramos la suma en el <h3> con id="Resultado"
    result.textContent = suma; // Ejemplo: 2+4+6 = 12
  });

  // Variable inicializada en 0 (en este código no se usa)
  let resultado = 0;
});

