function calcularTemperatura(temperaturaMaxima, temperaturaMinima) {
  let temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
  return temperaturaMedia;
}

console.log(`la temperatura media es de ${calcularTemperatura(30,21)}`)

/////////////////////////////////////////////////////////////////////////////////////////////////

let calcularTemperatura1 = (temperaturaMaxima, temperaturaMinima) =>{
    let temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return temperaturaMedia;
}

console.log(`la temperatura media es de ${calcularTemperatura1(30,21)}`)