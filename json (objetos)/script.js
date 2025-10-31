const objeto = {
  nombre1: "Fernando",
  nombre2: "Gustavo",
  nombre3: "Lucía",
  nombre4: "Halet",
  nombre5: "Javier 1",
  nombre6: "Juan",
  nombre7: "María",
  nombre8: "May",
  nombre9: "Pamela",
  nombre10: "Samuel",
  nombre11: "Andrés1",
  nombre12: "Andrés2",
  nombre13: "Christian",
  nombre14: "Dani",
  nombre15: "Edouard",
  nombre16: "Elena",
  nombre17: "Arturo",
  nombre18: "Javier2",
  nombre19: "Alonso"

};
//Crea un "objeto" que tiene distintos atributos. Para acceder a uno de los atributos de la variable,
//se coge la variable en cuestión.atributo
console.log("Mi nombre es: ", objeto.nombre3);
const atributo= "nombre3";
console.log(objeto[atributo]);


const datos = {
    nombre: "Lucía",
    apellido: "Martín",
    correo: "lmr@gmail.com",
    direccion: "Calle Ponis, 5",
    telefono: "603 941 203"

}

console.log(datos.nombre);
console.log(datos.apellido);
console.log(datos.correo);
console.log(datos.direccion);
console.log(datos.telefono);

console.log(datos.nombre + datos.apellido + ", " + datos.correo + ", " + datos.direccion + ". " + datos.telefono);
console.log(datos);

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

// Creamos un objeto llamado "pelota" con tres propiedades:
// color, textura y tamaño. Cada una tiene un valor.
const pelota = {
    color: "Lila",
    textura: "lisa",
    tamaño: "pequeña"
}

// Creamos un array (lista) con varios colores posibles
// que usaremos para cambiar el color de fondo.
const colors = ["red", "maroon", "lime", "blue", "purple"];

// Esta variable servirá para guardar un número aleatorio
// que usaremos para elegir un color de la lista "colors".
let indexColors = 0;

// Guardamos en variables los elementos del HTML con esos IDs.
// "selector" es el <select> (menú desplegable).
// "valor" es donde mostraremos el texto del objeto "pelota".
const selector = document.getElementById("selector");
const valor = document.getElementById("valor");

// Mostramos por primera vez (cuando carga la página) 
// el valor correspondiente a la opción seleccionada en el <select>.
valor.textContent = pelota[selector.value];

// Añadimos un "escuchador de eventos" al selector.
// Esto significa que cuando cambie la selección (change),
// se ejecutará la función que está dentro.
selector.addEventListener("change", () => {

    // Mostramos en la consola del navegador 
    // el valor del objeto "pelota" según la opción elegida.
    console.log(pelota[selector.value]);

    // Mostramos ese mismo valor dentro del <p id="valor">
    // Ejemplo: si elijo "textura", mostrará "lisa".
    valor.textContent = pelota[selector.value];

    // Generamos un número aleatorio entre 0 y la cantidad de colores que hay.
    // Esto servirá para elegir un color al azar.
    indexColors = Math.floor(Math.random() * colors.length);

    // Cambiamos el color de fondo del body (toda la página)
    // usando el color que corresponde al número aleatorio elegido.
    document.body.style.backgroundColor = colors[indexColors];
});



   


