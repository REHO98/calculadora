function resto(dividendo, divisor) {
    if (divisor === 0) {
      return "No se puede dividir por cero";
    }
    return dividendo % divisor;
  }
  
  module.exports = resto;  