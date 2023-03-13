function clasificarEdadesYfiltrarlas() {
  let edades = [];
  let codigos = [];
  let edadFrecuente = { edad: 0, cantidad: 0 };

  for (let i = 0; i < 20; i++) {
    let edad = Math.floor(Math.random() * 100);
    let codigo = `codigo00${i + 1}`;
    edades.push(edad);
    codigos.push(codigo);
  }

  let almacenarEdadMayor = 0;
  edades.forEach(function (edad) {
    if (edad > almacenarEdadMayor) {
      almacenarEdadMayor = edad;
    }

    let cantidad = edades.filter(function (baseEdad) {
      return baseEdad === edad;
    }).length;
    if (cantidad > edadFrecuente.cantidad) {
      edadFrecuente.edad = edad;
      edadFrecuente.cantidad = cantidad;
    }
  });

  console.log("Edades: ", edades);
  console.log("Códigos: ", codigos);
  console.log("Edad mayor: ", almacenarEdadMayor);
  console.log("Edad más frecuente: ", edadFrecuente.edad);
  console.log("Cantidad de repeticiones: ", edadFrecuente.cantidad);
}

clasificarEdadesYfiltrarlas();


/////////////////////////////////////////////////////////////////////////////////////////////////
let clasificarEdadesYfiltrarlas1 = () => {
  let edades = [];
  let codigos = [];
  let edadFrecuente = { edad: 0, cantidad: 0 };

  for (let i = 0; i < 20; i++) {
    let edad = Math.floor(Math.random() * 100);
    let codigo = `codigo00${i + 1}`;
    edades.push(edad);
    codigos.push(codigo);
  }

  let almacenarEdadMayor = 0;
  edades.forEach((edad) => {
    if (edad > almacenarEdadMayor) {
      almacenarEdadMayor = edad;
    }

    let cantidad = edades.filter((baseEdad) => {
      return baseEdad === edad;
    }).length;
    if (cantidad > edadFrecuente.cantidad) {
      edadFrecuente.edad = edad;
      edadFrecuente.cantidad = cantidad;
    }
  });

  console.log("Edades: ", edades);
  console.log("Códigos: ", codigos);
  console.log("Edad mayor: ", almacenarEdadMayor);
  console.log("Edad más frecuente: ", edadFrecuente.edad);
  console.log("Cantidad de repeticiones: ", edadFrecuente.cantidad);
}

clasificarEdadesYfiltrarlas1();
