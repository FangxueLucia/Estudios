// quiero que hagan un objeto “cocina”, esta cocina tiene propiedades/atributos/caractersticas/etc,
// dentro de ellas estan vitro(boolean), ingredientes (array),
// cacharros(array), cocineros(number), de manera aleatoria,
// muestren en pantalla 1 ingrediente y 1 cacharro,
// y me digan si hay vitro y cuantos cocineros hay
// esto en 1 etiqueta html

const cocina = {
  vitro: true,
  ingredientes: [
    "patatas",
    "pollo",
    "tomate",
    "especias",
    "huevos",
    "harina",
    "sal",
    "azúcar",
  ],
  cacharros: [
    "cuchara",
    "tenedor",
    "cuchillo",
    "vaso",
    "jarra",
    "sartén",
    "cazuela",
    "olla",
  ],
  cocineros: [3, 2, 1],
};

indexIngredientes = 0;
indexCacharros = 0;
indexCocineros = 0;

const buttonCocina = document.getElementById("buttonCocina");
const valor = document.getElementById("valor");

buttonCocina.addEventListener("click", () => {
  indexIngredientes = Math.floor(Math.random() * cocina.ingredientes.length);
  indexCacharros = Math.floor(Math.random() * cocina.cacharros.length);
  indexCocineros = Math.floor(Math.random() * cocina.cocineros.length);
  valor.textContent =
    "En la cocina tenemos una vitro: " +
    cocina.vitro +
    ", de ingredientes tenemos: " +
    cocina.ingredientes[indexIngredientes] +
    ", de cacharros tenemos: " +
    cocina.cacharros[indexCacharros] +
    " y cocineros tenemos: " +
    cocina.cocineros[indexCocineros];
});


console.log(cocina.ingredientes);
cocina.ingredientes[0] = "paprika";
console.log(cocina.ingredientes);
cocina.ingredientes[1] = "";
console.log(cocina.ingredientes);
delete cocina.ingredientes[1];
console.log(cocina.ingredientes);
cocina.ingredientes.push("más paprika");
console.log(cocina.ingredientes);
// cocina.pop()
console.log(cocina.ingredientes);
cocina.ingredientes.splice(1,1);
console.log(cocina.ingredientes);
cocina.ingredientes.unshift("ajo");
console.log(cocina.ingredientes);
cocina.ingredientes.shift();
console.log(cocina.ingredientes);

const paprika = '{"especie": "gato", "peso": "4kg", "color": "atigrado blanco", "personalidad": "tímida"}';
const paprikaJs = JSON.parse(paprika);
console.log(paprikaJs);
