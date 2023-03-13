let energiaSables = [1, 3, 4, 5, -2, -3, -10, -11];

function buscarSablesConEnergiaNegativa(energiaSables) {
  let contadorDeSables = 0;
  energiaSables.forEach(function (energiaSable) {
    if (energiaSable < 0) {
      contadorDeSables++;
    }
  });
  return contadorDeSables;
}

let cantidadDeSablesConEnergiaNegativa =
  buscarSablesConEnergiaNegativa(energiaSables);

console.log(
  `la cantidad de sables con energia negariva son ${cantidadDeSablesConEnergiaNegativa}`
);

///////////////////////////////////////////////////////////////////////////////////////////////

let buscarSablesConEnergiaNegativa1 = (energiaSables) => {
  let contadorDeSables = 0;
  energiaSables.forEach(function (energiaSable) {
    if (energiaSable < 0) {
      contadorDeSables++;
    }
  });
  return contadorDeSables;
};

let cantidadDeSablesConEnergiaNegativa1 =
  buscarSablesConEnergiaNegativa1(energiaSables);

console.log(
  `la cantidad de sables con energia negariva son ${cantidadDeSablesConEnergiaNegativa1}`
);
