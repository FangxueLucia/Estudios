document.addEventListener("DOMContentLoaded", () => {
  const palabra1 = document.getElementById("palabra1").textContent;
  const palabra2 = document.getElementById("palabra2").textContent;
  const palabra3 = document.getElementById("palabra3").textContent;
  const palabra4 = document.getElementById("palabra4").textContent;

  
  const boton1= document.getElementById("boton1");
  const boton2= document.getElementById("boton2");
  const boton3= document.getElementById("boton3");
  const boton4= document.getElementById("boton4");
  
  let texto = document.getElementById("texto");
  let longitud = document.getElementById("longitud");
  let comparar = document.getElementById("comparar");
  let resultadoDelValor = document.getElementById("resultadoDelValor");
  let contador = 0;
  
  boton1.addEventListener("click",()=>{
      console.log(palabra1)
      texto.textContent += " " + palabra1;
      console.log(palabra1.length);
      longitud.textContent = "Longitud: " + palabra1.length;
    })
    boton2.addEventListener("click",()=>{
        console.log(palabra2)
        texto.textContent += " " + palabra2;
        longitud.textContent = "Longitud: " + palabra1.length + palabra2.length;
    })
    boton3.addEventListener("click",()=>{
        console.log(palabra3)
        texto.textContent += " " + palabra3;
        longitud.textContent = "Longitud: " + palabra1.length + palabra2.length + palabra3.length;
    })
    boton4.addEventListener("click",()=>{
        console.log(palabra4)
        texto.textContent += " " + palabra4;
        longitud.textContent = "Longitud: " + palabra1.length + palabra2.length + palabra3.length;
    })
    comparar.addEventListener("click", ()=>{
        const valor1 = document.getElementById("valor1").value;
        const valor2 = document.getElementById("valor2").value;
        resultadoDelValor.textContent = "El valor es: " + (valor1 === valor2);
    })
});
