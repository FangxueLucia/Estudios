document.addEventListener("DOMContentLoaded", () => {
  //variables
  const char1 = document.getElementById("char1").textContent; //Los
  const char2 = document.getElementById("char2").textContent; //ponis
  const char3 = document.getElementById("char3").textContent; //son
  const char4 = document.getElementById("char4").textContent; //demonios

  //elementos donde se muestra el resultado
  let resultado = document.getElementById("resultado"); //<p id="resultado">Resultado:</p>
  let longitud = document.getElementById("longitud"); //<p id="longitud">Longitud:</p>
  
  //botón que hará que se dispare la concatenación en el caso de <concatenar>, o el nuevo texto <nuevoTexto>
  const concatenar = document.getElementById("concatenar"); //<button id="concatenar">
  const nuevoTexto = document.getElementById("nuevoTexto"); // <button id="nuevoTexto">

  //Cuando se pulsa "click" se ejecuta la función
  concatenar.addEventListener("click", () => {
    //tras hacer "click", en el resultado: se muestra la concatencación hecha.
    resultado.textContent +=
      " " + char1 + " " + char2 + " " + char3 + " " + char4;
    //esto es para que en la consola se sepa la longitud de la concatenación, que es 33.
    console.log(resultado.textContent.length);
    //tras hacer "click", en longitud: se muestra la longitud de la concatenación.
    longitud.textContent += resultado.textContent.length;
  });

  nuevoTexto.addEventListener("click", ()=>{
    resultado.textContent = "Resultado:" + "Los ponis son muy monos"; //cambia el contenido del texto por el que se ha puesto aquí
  })
});
