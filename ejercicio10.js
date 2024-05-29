function takeWhile(array, callback) {
    const resultado = [];
    for (let elemento of array) {
      if (!callback(elemento)) {
        break;
      }
      resultado.push(elemento);
    }
    return resultado;

  }
  const numeros = [1, 2, 3, 4, 5];

  const isMenorQueTres = (numero) => numero <= 3;
  
  const tomados = takeWhile(numeros, isMenorQueTres);
  
  console.table(tomados); // [1, 2]
  