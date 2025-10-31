// Voy a explicar cada línea como si se lo dijera a un niño pequeño.
// Las líneas de código originales no se cambian; solo añado comentarios para que se entiendan.

// Aquí creamos una cajita llamada "lista" y dentro ponemos 4 cosas: tres palabras y un número.
const lista=["hola", "como", "estas", 3];

// Miramos lo que hay dentro de la cajita y lo enseñamos en la consola (como decirlo en voz alta para el programador).
console.log(lista)

// Ahora decimos: "La primera cosa de la cajita (posición 0) será 'pamela'".
// Recuerda: la primera posición se llama 0, no 1. Es como contar desde 0.
lista[0]="pamela";

// Volvemos a enseñar en voz alta lo que hay dentro de la cajita para ver el cambio.
console.log(lista);

// Aquí vaciamos la primera posición: ponemos una cadena vacía "". Es como borrar el nombre pero dejar el lugar.
lista[0]="";

// Miramos otra vez la cajita para ver que ahora el primer lugar está vacío (""), pero sigue existiendo.
console.log(lista);

// "delete lista[0]" quita completa la primera posición. Es como sacar la cajita de ese hueco.
// Después de esto, el lugar queda como un hueco vació (undefined) en la lista.
delete lista[0];

// Enseñamos la cajita para ver que ahora el primer hueco ya no tiene valor.
console.log(lista);

// "push" agrega una cosa nueva al final de la lista. Aquí añadimos la palabra "holi" al final.
lista.push("holi")

// Miramos la lista para ver la nueva palabra al final.
console.log(lista);

// "pop" quita la última cosa de la lista. Es como quitar lo que pusimos al final.
lista.pop()

// Miramos la lista otra vez para ver que la última palabra se fue.
console.log(lista)

// "splice(0, 1)" significa: desde la posición 0, quita 1 elemento.
// Es como decir: borra el primer cajita y mueve lo demás.
lista.splice(0, 1)

// Miramos para ver cómo quedó la lista después de quitar el primer elemento.
console.log(lista)

// "splice(1, 1)" significa: desde la posición 1, quita 1 elemento.
// Cuidado: si la lista tiene menos elementos, puede que no quite nada.
lista.splice(1, 1)

// Miramos de nuevo para ver el resultado.
console.log(lista)

// "unshift" pone algo al principio de la lista. Aquí ponemos "hola de nuevo" en la primera posición.
lista.unshift("hola de nuevo")

// Miramos la lista para ver la nueva palabra al inicio.
console.log(lista)

// "shift" quita el primer elemento de la lista. Es como sacar la primera cajita.
lista.shift()

// Miramos la lista final después de quitar el primer elemento.
console.log(lista)


//////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Aquí tenemos un texto (una cadena) que parece una receta de información.
// Tiene tres datos: tamaño, peso y cantidad.
// Pero ojo: aún no es un objeto, solo es un texto con comillas.
const texto='{"tamaño":"5m", "peso":"5kg", "cantidad":5}';


// Aquí usamos JSON.parse para convertir ese texto en un "objeto de verdad" que JavaScript pueda entender.
// Es como transformar una receta escrita en papel en una caja con cosas que puedes tocar.
// El segundo parámetro (null) y el tercero (10) no hacen nada en este caso.
const jsonTraducido= JSON.parse(texto, null, 10)


// Ahora mostramos el objeto en la consola para ver cómo se ve convertido.
console.log(jsonTraducido);


// Aquí usamos JSON.stringify para hacer lo contrario: convertir el objeto otra vez en texto.
// Es como volver a escribir la receta en papel.
console.log(JSON.stringify(jsonTraducido))

const paprika = '{"especie": "gato", "peso": "4kg", "color": "atigrado blanco", "personalidad": "tímida"}';
const paprikaJs = JSON.parse(paprika);
console.log(paprikaJs);
