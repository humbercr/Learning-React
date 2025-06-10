
console.log("Hola Mundo");

const nombre = "Juan";
const apellido = "Perez";

const nombreCompleto = ` Hola Mundo ${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo(nombre) {
  return "Hola Mundo " + nombre;
}

console.log(`Este es un texto: ${getSaludo()}`);