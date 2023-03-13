function recibirNombres(nave) {
  let dividirLetras = nave.split(":");
  return dividirLetras;
}

let codigo = recibirNombres("ARQ2555: fin");
console.log(codigo[1]);

/////////////////////////////////////////////////////////////////////////////////////////////////

let recibirNombres1 = (nave) => {
  let dividirLetras = nave.split(":");
  return dividirLetras;
};

let codigo1 = recibirNombres("ARQ2556: Nodin Chavdri")
console.log(codigo1[1])
