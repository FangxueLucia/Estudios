document.addEventListener("DOMContentLoaded", () => {
  const azul = document.getElementById("azul");
  const rojo = document.getElementById("rojo");
  const amarillo = document.getElementById("amarillo");
  const morado = document.getElementById("morado");
  const naranja = document.getElementById("naranja");
  const verde = document.getElementById("verde");
  const caja = document.getElementById("caja");
  const circulo_complejo=document.getElementById("imagen");
  const colorButton=document.getElementById("colorButton");
  const body = document.body;

  azul.addEventListener("click", () => {
    caja1.style.backgroundColor = "#0000FF";
    caja2.style.backgroundColor = "beige";
    azul.style.width = "150px"; //de un tamaño base width=100px, cuando se hace click aumenta a 150px, si se selecciona otro botón, el anterior vuelve a su tamaño original de 100px
    amarillo.style.width = "100px";
    rojo.style.width = "100px";
    morado.style.width = "100px";
    naranja.style.width = "100px";
    verde.style.width = "100px";
    azul.style.color = "#FF6600";
    azul.style.backgroundColor="#0000FF";
    azul.value="Azulillo"; //con esto se cambia el texto del botón, o sea, el "value"
    morado.style.color="black";
    morado.style.backgroundColor="rgb(240 240 240)";

  });
  rojo.addEventListener("click", () => {
    caja1.style.backgroundColor = "#FF0000";
    caja2.style.backgroundColor = "beige";
    rojo.style.width = "150px";
    azul.style.width = "100px";
    amarillo.style.width = "100px";
    morado.style.width = "100px";
    naranja.style.width = "100px";
    verde.style.width = "100px";
    azul.value="Azul";
    azul.style.color="black";
    azul.style.backgroundColor="rgb(240 240 240)";
    morado.style.color="black";
    morado.style.backgroundColor="rgb(240 240 240)";

  });
  amarillo.addEventListener("click", () => {
    caja1.style.backgroundColor = "#FFFF00";
    caja2.style.backgroundColor = "beige";
    amarillo.style.width = "150px";
    azul.style.width = "100px";
    rojo.style.width = "100px";
    morado.style.width = "100px";
    naranja.style.width = "100px";
    verde.style.width = "100px";
    azul.value="Azul";
    azul.style.color="black";
    azul.style.backgroundColor="rgb(240 240 240)";
    morado.style.color="black";
    morado.style.backgroundColor="rgb(240 240 240)";
  });
  morado.addEventListener("click", () => {
    caja2.style.backgroundColor = "#6600FF";
    caja1.style.backgroundColor = "beige";
    azul.style.width = "100px";
    rojo.style.width = "100px";
    amarillo.style.width = "100px";
    morado.style.width = "150px";
    naranja.style.width = "100px";
    verde.style.width = "100px";
    morado.style.color= "#FFFF00";
    morado.style.backgroundColor="#6600FF";
    azul.value="Azul";
    azul.style.color="black";
    azul.style.backgroundColor="rgb(240 240 240)";
  });
  naranja.addEventListener("click", () => {
    caja2.style.backgroundColor = "#FF6600";
    caja1.style.backgroundColor = "beige";
    azul.style.width = "100px";
    rojo.style.width = "100px";
    amarillo.style.width = "100px";
    morado.style.width = "100px";
    naranja.style.width = "150px";
    verde.style.width = "100px";
    azul.value="Azul";
    azul.style.color="black";
    azul.style.backgroundColor="rgb(240 240 240)";
    morado.style.color="black";
    morado.style.backgroundColor="rgb(240 240 240)";
    
  });
  verde.addEventListener("click", () => {
    caja2.style.backgroundColor = "#00FF00";
    caja1.style.backgroundColor = "beige";
    azul.style.width = "100px";
    rojo.style.width = "100px";
    amarillo.style.width = "100px";
    morado.style.width = "100px";
    naranja.style.width = "100px";
    verde.style.width ="150px";
    azul.value="Azul";
    azul.style.color="black";
    azul.style.backgroundColor="rgb(240 240 240)";
    morado.style.color="black";
    morado.style.backgroundColor="rgb(240 240 240)";
  });

//   circulo_complejo.addEventListener("click", ()=>{
//     circulo_simple.src="https://mueblesgascon.com/wp-content/uploads/860f6059ee4039b256801c8dea1f3c3e-1.jpg";
//   })
  circulo_simple.addEventListener("mouseover", ()=>{
    circulo_simple.src="https://mueblesgascon.com/wp-content/uploads/860f6059ee4039b256801c8dea1f3c3e-1.jpg";
  })
  circulo_simple.addEventListener("mouseout", ()=>{
    circulo_simple.src="https://cdn.sanity.io/images/599r6htc/regionalized/5ed88457ecb696e59b440e73afeb81d906f84685-2498x1542.png?w=2498&h=1542&q=75&fit=max&auto=format";
  })

  colorButton.addEventListener("click", ()=>{
    colorButton.src="https://imgs.search.brave.com/MIhCTDlxv5FDfAYdvBq7v7fFatpIs1tdH9WHB0Y_2no/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHlocS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMTIv/VGhlLUltcG9ydGFu/Y2Utb2YtUHJpbWFy/eS1Db2xvcnMtaW4t/RGVzaWduLnBuZw";

  })
});




