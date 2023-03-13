let numeros = [
  -2, -5, 10, -15, 20, 25, -1, 35, -40, 
];

function numeroMasCercanoAZero(numeros) {
  let numeroMasCercano = numeros[0];
  //console.log(numeroMasCercano)
  let distanciaMasCorta = Math.abs(numeros[0]);
  //console.log(distanciaMasCorta)

  numeros.forEach(function (numero) {
    let distancia = Math.abs(numero);
    //console.log(distancia)
    if (distancia < distanciaMasCorta) {
      distanciaMasCorta = distancia;
      numeroMasCercano = numero;
      //console.log(distanciaMasCorta)
      //console.log(numeroMasCercano)
    }
  });

  return numeroMasCercano;
}

let numeroMasCercano = numeroMasCercanoAZero(numeros);
let distancia = Math.abs(numeroMasCercano);
console.log(
  `El número más cercano a cero es ${numeroMasCercano} y su distancia a cero es ${distancia}`
);


/////////////////////////////////////////////////////////////////////////////////////////////////
let numeroMasCercanoAZero1 = (numeros) => {
    let numeroMasCercano1 = numeros[0];
    let distanciaMasCorta1 = Math.abs(numeros[0]);
  
    numeros.forEach((numero) => {
      let distancia = Math.abs(numero);
      if (distancia < distanciaMasCorta1) {
        distanciaMasCorta1 = distancia;
        numeroMasCercano1 = numero;
      }
    });
  
    return numeroMasCercano1;
  }
  
  let numeroMasCercano1 = numeroMasCercanoAZero(numeros);
  let distancia1 = Math.abs(numeroMasCercano1);
  
  console.log(`El número más cercano a cero es ${numeroMasCercano1} y su distancia a cero es ${distancia1}`);
  