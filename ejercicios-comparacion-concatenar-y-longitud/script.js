document.addEventListener("DOMContentLoaded", ()=>{
    let ejecutar = document.getElementById("ejecutar");
    
    
    const concatenar = document.getElementById("concatenar");
    const comparar = document.getElementById("comparar");
    const longitud = document.getElementById("longitud");
    
    ejecutar.addEventListener("click", ()=>{
        // IMPORTANTE: valor1 y valor2 se deben leer dentro del click
        // porque los inputs pueden cambiar después de que la página carga.
        // Si los declaras fuera, solo tendrías los valores iniciales (vacíos)
        let valor1 = document.getElementById("valor1").value;
        let valor2 = document.getElementById("valor2").value;
        concatenar.textContent= "Concatenación de los inputs: " + valor1 + valor2;
        comparar.textContent = "Comparación de los inputs: " + (valor1 === valor2);
        longitud.textContent = "Longitud de la concatenación de los inputs: " + valor1.length + valor2.length;
    })
})  