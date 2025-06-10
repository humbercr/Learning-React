const person = {
  name: "Juan",
  apellido: "Perez",
  edad: 20,
  direccion: {
    ciudad: "Madrid",
    zip: 29001,
    lat: 14.3232,
  }
};


const persona2 = { ...person };

persona2.name = "Pedro";

console.log(person);
console.log(persona2);