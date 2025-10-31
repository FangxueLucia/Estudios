document.addEventListener("DOMContentLoaded", () => {
  //declarar el contenido de los <p> como variables
  const char1 = document.getElementById("char1").textContent; //el
  const char2 = document.getElementById("char2").textContent; //gato
  const char3 = document.getElementById("char3").textContent; //negro
  const char4 = document.getElementById("char4").textContent; //duerme
  const char5 = document.getElementById("char5").textContent; //tranquilo
  const char6 = document.getElementById("char6").textContent; //sobre
  const char7 = document.getElementById("char7").textContent; //la
  const char8 = document.getElementById("char8").textContent; //calida
  const char9 = document.getElementById("char9").textContent; //alfombra
  const char10 = document.getElementById("char10").textContent; //roja

  let resultado = document.getElementById("resultado"); //donde se guardará la concatenación

  const concatenar = document.getElementById("concatenar"); //botón que hará posible la concatencación

  concatenar.addEventListener("click", () => {
    resultado.textContent += char1+" "+char2+" "+char3+" "+char4+" "+char5+" "+char6+" "+char7+" "+char8+" "+char9+" "+char10;
  });
});
