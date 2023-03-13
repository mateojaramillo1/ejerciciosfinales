let alimentos = [];

function obtenerRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarTipoAleatorio() {
  let tipo;
  if (Math.random() < 0.5) {
    tipo = "animal";
  } else {
    tipo = "vegetal";
  }
  return tipo;
}

for (let i = 0; i < 300; i++) {
  let nombre = `Alimento ${i + 1}`;
  let tipo = generarTipoAleatorio();
  let nivelEnergiaAportado = obtenerRandom(100, 500);
  alimentos.push({ nombre, tipo, nivelEnergiaAportado });
}

function validarTiposyNivelDeAlimentos(callBack) {
  setTimeout(function () {
    let alimentosVegetales = alimentos.filter(function (alimento) {
      return alimento.tipo === "vegetal" && alimento.nivelEnergiaAportado > 200;
    });

    console.log(
      "Alimentos vegetales que entregan más de 200 unidades de energía:",
      alimentosVegetales
    );
    callBack(alimentosVegetales);
  }, 5000);
}

validarTiposyNivelDeAlimentos(function () {
  let sumatoriaEnergiaVegetales = 0;
  alimentos.forEach(function (alimento) {
    sumatoriaEnergiaVegetales = sumatoriaEnergiaVegetales + alimento.nivelEnergiaAportado;
  });

  console.log(
    "Sumatoria de niveles de energía de los alimentos vegetales:",
    sumatoriaEnergiaVegetales
  );
});

/////////////////////////////////////////////////////////////////////////////////////////////////


const obtenerRandom1 = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generarTipoAleatorio1 = () => {
  let tipo;
  if (Math.random() < 0.5) {
    tipo = "animal";
  } else {
    tipo = "vegetal";
  }
  return tipo;
};

for (let i = 0; i < 300; i++) {
  let nombre = `Alimento ${i + 1}`;
  let tipo = generarTipoAleatorio1();
  let nivelEnergiaAportado = obtenerRandom1(100, 500);
  alimentos.push({ nombre, tipo, nivelEnergiaAportado });
}

let validarTiposyNivelDeAlimentos1 = (callBack1) => {
  setTimeout(() => {
    let alimentosVegetales = alimentos.filter((alimento) => {
      return alimento.tipo === "vegetal" && alimento.nivelEnergiaAportado > 200;
    });

    console.log(
      "Alimentos vegetales que entregan más de 200 unidades de energía:",
      alimentosVegetales
    );
    callBack1(alimentosVegetales);
  }, 5000);
};

validarTiposyNivelDeAlimentos1(() => {
  let sumatoriaEnergiaVegetales = 0;
  alimentos.forEach((alimento) => {
    sumatoriaEnergiaVegetales = sumatoriaEnergiaVegetales + alimento.nivelEnergiaAportado;
  });

  console.log(
    "Sumatoria de niveles de energía de los alimentos vegetales:",
    sumatoriaEnergiaVegetales
  );
});

