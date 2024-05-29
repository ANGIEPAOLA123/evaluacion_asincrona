function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return true;
      }
    }
    return false;
  }
  
  function isGreaterThanTen(numero) {
    return numero > 10;
  }
  
  // Solicitar al usuario que ingrese números separados por comas
  const usuarioInput = prompt("Ingrese los números separados por comas ");
  
  // Convertir la entrada del usuario en un array de números
  const numero = usuarioInput.split(',').map(Number);
  
  console.log(some(numero, isGreaterThanTen)); // Devolverá true o false dependiendo de la entrada del usuario
  