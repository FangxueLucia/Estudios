document.addEventListener("DOMContentLoaded", () => {

  // Creamos una lista de nombres
  const ListaN = ["pepito", "paco", "pedro", "luis", "maria", "lucia"];

  // Buscamos el elemento donde vamos a mostrar el nombre
  const nombre = document.getElementById("nombre");

  // Buscamos el botón que genera el nombre aleatorio
  const random = document.getElementById("random");

  // Variable para guardar el índice del nombre seleccionado
  let index = 0;

  // Cuando alguien hace clic en el botón
  random.addEventListener("click", () => {

    // Generamos un número aleatorio entre 0 y la longitud de la lista de nombres
    index = Math.floor(Math.random() * ListaN.length);

    // Ponemos el nombre correspondiente al número aleatorio en el <b> de la página
    nombre.textContent = ListaN[index];
  });
});
