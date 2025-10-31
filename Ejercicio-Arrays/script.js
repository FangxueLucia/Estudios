document.addEventListener("DOMContentLoaded", () => {
  const listaFrutas = [
    "Mango",
    "Fresa",
    "Frambuesa",
    "Plátano",
    "Manzana",
    "Pera",
    "Melocotón",
    "Ciruela",
    "Mandarina",
    "Naranja",
  ];
  const listaAcompañamiento = [
    "chocolate",
    "miel",
    "azúcar",
    "tortitas",
    "crepes",
    "yogur",
    "helado",
    "nata",
    "avena",
    "caramelo",
  ];

  const frutaSelect = document.getElementById("frutaSelect");
  const merienda = document.getElementById("merienda");
  const masRico = document.getElementById("masRico");
  const length = document.getElementById("length");
  const dameFruta = document.getElementById("dameFruta"); //id del button
  const complemento = document.getElementById("complemento"); //id del button de complento
  const dameDeMerendar = document.getElementById("dameDeMerendar"); //id del segundo button
  const longitud = document.getElementById("longitud");
  let indexFruta = 0;
  let indexComplemento = 0;

  dameFruta.addEventListener("click", () => {
    indexFruta = Math.floor(Math.random() * listaFrutas.length);
    frutaSelect.textContent = "Fruta: " + listaFrutas[indexFruta];
    merienda.textContent = "Tu merienda es: ";
  });
  complemento.addEventListener("click", () => {
    indexComplemento = Math.floor(Math.random() * listaAcompañamiento.length);
    masRico.textContent =
      "El complemento: " + listaAcompañamiento[indexComplemento];
      merienda.textContent = "Tu merienda es: ";
  });

  dameDeMerendar.addEventListener("click", () => {
    indexFruta = Math.floor(Math.random() * listaFrutas.length);
    indexComplemento = Math.floor(Math.random() * listaAcompañamiento.length);

    merienda.textContent =
      "Tu merienda es: " +
      listaFrutas[indexFruta] +
      " con " +
      listaAcompañamiento[indexComplemento];
    frutaSelect.textContent = "Fruta: ";
    masRico.textContent = "El complemento: ";
  });

  //   longitud.addEventListener("click", () => {
  //     indexFruta = Math.floor(Math.random() * listaFrutas.length);
  //     indexComplemento = Math.floor(Math.random() * listaAcompañamiento.length);

  // length.textContent =
  //   "La longitud es: " +
  //   listaFrutas[indexFruta].length +
  //   listaAcompañamiento[indexComplemento].length;
  //   });
});
