function calcularSalario(licenciasVentas) {
  let salarioMensual = 3500000;
  let comisionPorLicencia = 1500000;
  let impuestos = 0.05;

  let total = salarioMensual + comisionPorLicencia * licenciasVentas;
  let impuestosDeducidos = total * impuestos;
  let salarioMensualTotal = total - impuestosDeducidos;

  return salarioMensualTotal;
}

let salarioMensual = calcularSalario(2);

console.log(`El salario mensual neto del vendedor es: $${salarioMensual}`);

/////////////////////////////////////////////////////////////////////////////////////////////////

let calcularSalario1 = (licenciasVentas) => {
  let salarioMensual = 3500000;
  let comisionPorLicencia = 1500000;
  let impuestos = 0.05;

  let total = salarioMensual + comisionPorLicencia * licenciasVentas;
  let impuestosDeducidos = total * impuestos;
  let salarioMensualTotal = total - impuestosDeducidos;

  return salarioMensualTotal;
};

let salarioMensual1 = calcularSalario1(3);

console.log(`El salario mensual neto del vendedor es: $${salarioMensual1}`);
