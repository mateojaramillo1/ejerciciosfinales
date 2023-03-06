let calcularDistancia = (x1, y1, x2, y2) => {
  let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distancia;
};

let distancia = calcularDistancia(10, 5, 20, 15);
console.log(`La distancia es de ${distancia}`);

/////////////////////////////////////////////////////////////////////////////////////////////////

function calcularDistancia1(x1, y1, x2, y2) {
  let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distancia;
}

let distanciaCalculada = calcularDistancia1(10, 2, 20, 15);

console.log(`La distancia es de ${distanciaCalculada}`);
