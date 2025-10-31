const info = {
    Nombre: "Lucía",
    Apellido: "Martín",
    Edad: "25",
    Dirección: "Calle Ponis, 5",
    Correo: "lmr@gmail.com",
    Teléfono: "603 941 203"
}

const selector = document.getElementById("selector");
const valor = document.getElementById("valor");


valor.textContent = info[selector.value];

selector.addEventListener("change", ()=>{
    console.log(info[selector.value]);
    valor.textContent=info[selector.value];
})