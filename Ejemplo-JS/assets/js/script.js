document.addEventListener("DOMContentLoaded", () => {
  //acciones, primero se define la variable
  const enviar = document.getElementById("enviar");
  const body = document.getElementsByTagName("body");
  const desaparecer = document.getElementById("exampleFormControlTextarea1");
  const vegeta = document.getElementById("vegeta");
  const ssj = document.getElementById("ssj");
  const color = document.getElementById("color");

  enviar.addEventListener("click", () => {
    body[0].style.backgroundColor = "#333";
    desaparecer.style.display = "none";
    color.style.color = "purple";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  //acciones, definición de variable
  const azul = document.getElementById("azul");
  const rojo = document.getElementById("rojo");
  const amarillo = document.getElementById("amarillo");
  const verde = document.getElementById("verde");

  const body = document.getElementsByTagName("body");

  azul.addEventListener("click", () => {
    body[0].style.backgroundColor = "blue";
    azul.style.backgroundColor = "orange"; //como ya hay un ID directamente en el html que engloba solo ell botón, se puede cambiar el color directamente desde js
    //si se quiere poner otro botón en otro color tras haber pulsado un primer botón, se puede poner dentro el elemento del botón que se quiere poner en otro color
  });
  rojo.addEventListener("click", () => {
    body[0].style.backgroundColor = "red";
    rojo.style.backgroundColor = "green";
  });
  amarillo.addEventListener("click", () => {
    body[0].style.backgroundColor = "yellow";
    amarillo.style.backgroundColor = "purple";
  });
  verde.addEventListener("click", () => {
    body[0].style.backgroundColor = "green";
    verde.style.backgroundColor = "red";
  });
  ssj.addEventListener("click", () => {
    vegeta.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEcdKqa25AtLuZMjTJZq-P2d6_SuWx5MigQ&s";
  });

  vegeta.addEventListener("mouseover", () => {
    vegeta.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEcdKqa25AtLuZMjTJZq-P2d6_SuWx5MigQ&s";
  });
  vegeta.addEventListener("mouseout", () => {
    setTimeout(() => {
      vegeta.src =
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3HzBCgrAUsWW2mNgy2fgnQTCRxzmz5MwTUWvowVP_whDjBKdsunYzIg2zKEO-fsEKbezYcnb9jVU42lH7nRLnduUSPGVCFmIG_a5Tlhfn";
    }, 3000);
  });
  let counter=document.getElementById("contador");
    const suma=document.getElementById("suma");
    const resta=document.getElementById("resta");
    let contador=0;
    const reset=document.getElementById("reset")
    
 suma.addEventListener("click", ()=>{
         counter.textContent = contador++
    });
     resta.addEventListener("click", ()=>{
         counter.textContent = contador--
    });
    reset.addEventListener("click", ()=>{
        contador=0;
        counter.textContent=0;
    })
});
// De esta manera se puede cambiar, por ejemplo, el color de fondo con los colores establecidos en los botones






