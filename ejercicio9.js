function crearEstudiante(
  nombre,
  planeta,
  edad,
  estatura,
  clasificarEstudiante
) {
  setTimeout(function () {
    let estudiante = {
      nombre: nombre,
      planeta: planeta,
      edad: edad,
      estatura: estatura,
    };
    clasificarEstudiante(estudiante.edad);
  }, 2000);
}

crearEstudiante("mateo", "marte", "11", "1.40", function (edad) {
  if (edad < 15) {
    console.log(`su edad es ${edad} tu clase sera manejo de fuerza`);
  } else {
    console.log(`su edad es ${edad} tu clase sera uso sable`);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////

let crearEstudiante1 = (
  nombre,
  planeta,
  edad,
  estatura,
  clasificarEstudiante1
) => {
  setTimeout(() => {
    let estudiante = {
      nombre: nombre,
      planeta: planeta,
      edad: edad,
      estatura: estatura,
    };
    clasificarEstudiante1(estudiante.edad);
  }, 2000);
};

crearEstudiante1("mateo", "marte", "30", "1.40", (edad) => {
  if (edad < 15) {
    console.log(`su edad es ${edad} tu clase sera manejo de fuerza`);
  } else {
    console.log(`su edad es ${edad} tu clase sera uso sable`);
  }
});
