let planetas = [
  {
    nombrePlaneta: "luna",
    latitud: 1737929,
    longitud: 1138373,
    nivelOxigeno: -1,
    volumenAgua: 100,
  },
  {
    nombrePlaneta: "tierra",
    latitud: 1445667,
    longitud: 11237637,
    nivelOxigeno: 100,
    volumenAgua: 100,
  },
];

sumarDeVolumenAgua();
sumarNivelDeOxigenoYMultiplicarX100();
calcularPlanetasConOxigenoNegativo();
calcularPlanetasSinNivelDeAgua();

////////////////////////////////////////////////////



function sumarDeVolumenAgua() {
  let sumaDeVolumenAgua = 0;
  planetas.forEach(function (planeta) {
    sumaDeVolumenAgua = sumaDeVolumenAgua + planeta.volumenAgua;
  });

  console.log(`la suma del volumen del agua es de ${sumaDeVolumenAgua} `);
  return sumaDeVolumenAgua;
}

function sumarNivelDeOxigenoYMultiplicarX100() {
  let sumaNivelDeOxigeno = 0;
  planetas.forEach(function (planeta) {
    sumaNivelDeOxigeno = sumaNivelDeOxigeno + planeta.nivelOxigeno;
  });
  let resultadoDeMultiplicarNivelDeOxigeno = sumaNivelDeOxigeno * 100;

  console.log(
    `la suma del nivel de oxigeno X 100 es de ${resultadoDeMultiplicarNivelDeOxigeno} `
  );
  return resultadoDeMultiplicarNivelDeOxigeno;
}

function calcularPlanetasConOxigenoNegativo() {
  let resultadoPlanetasConOxigenoNegativo = planetas.find(function (planeta) {
    if (planeta.nivelOxigeno < 0) {
      console.log(
        `El planeta ${planeta.nombrePlaneta} tiene un nivel de oxígeno negativo. ademas cuenta con estas caracteristicas latitud: ${planeta.latitud} longitud: ${planeta.longitud} nivel de oxigeno: ${planeta.nivelOxigeno} volumen de agua: ${planeta.volumenAgua}`
      );
    }
  });
  return resultadoPlanetasConOxigenoNegativo;
}

function calcularPlanetasSinNivelDeAgua() {
  let PlanetasSinNivelDeAgua = planetas.find(function (planeta) {
    if (planeta.volumenAgua === 0) {
      console.log(
        `El planeta ${planeta.nombrePlaneta} no tiene volumen de agua. ademas cuenta con estas caracteristicas latitud: ${planeta.latitud} longitud: ${planeta.longitud} nivel de oxigeno: ${planeta.nivelOxigeno} volumen de agua: ${planeta.volumenAgua}`
      );
    }
  });
  return PlanetasSinNivelDeAgua;
}

/////////////////////////////////////////////////////////////////////////////////////////////////




let sumarDeVolumenAgua1 = () => {
  let sumaDeVolumenAgua = 0;
  planetas.forEach((planeta) => {
    sumaDeVolumenAgua += planeta.volumenAgua;
  });

  console.log(`la suma del volumen del agua es de ${sumaDeVolumenAgua} `);
  return sumaDeVolumenAgua;
};

let sumarNivelDeOxigenoYMultiplicarX1001 = () => {
  let sumaNivelDeOxigeno = 0;
  planetas.forEach((planeta) => {
    sumaNivelDeOxigeno += planeta.nivelOxigeno;
  });
  let resultadoDeMultiplicarNivelDeOxigeno = sumaNivelDeOxigeno * 100;

  console.log(
    `la suma del nivel de oxigeno X 100 es de ${resultadoDeMultiplicarNivelDeOxigeno} `
  );
  return resultadoDeMultiplicarNivelDeOxigeno;
};

let calcularPlanetasConOxigenoNegativo1 = () => {
  let resultadoPlanetasConOxigenoNegativo = planetas.find((planeta) => {
    if (planeta.nivelOxigeno < 0) {
      console.log(
        `El planeta ${planeta.nombrePlaneta} tiene un nivel de oxígeno negativo. ademas cuenta con estas caracteristicas latitud: ${planeta.latitud} longitud: ${planeta.longitud} nivel de oxigeno: ${planeta.nivelOxigeno} volumen de agua: ${planeta.volumenAgua}`
      );
    }
  });
  return resultadoPlanetasConOxigenoNegativo;
};

let calcularPlanetasSinNivelDeAgua1 = () => {
  let PlanetasSinNivelDeAgua = planetas.find((planeta) => {
    if (planeta.volumenAgua === 0) {
      console.log(
        `El planeta ${planeta.nombrePlaneta} no tiene volumen de agua. ademas cuenta con estas caracteristicas latitud: ${planeta.latitud} longitud: ${planeta.longitud} nivel de oxigeno: ${planeta.nivelOxigeno} volumen de agua: ${planeta.volumenAgua}`
      );
    }
  });
  return PlanetasSinNivelDeAgua;
};

sumarDeVolumenAgua1();
sumarNivelDeOxigenoYMultiplicarX1001();
calcularPlanetasConOxigenoNegativo1();
calcularPlanetasSinNivelDeAgua1();