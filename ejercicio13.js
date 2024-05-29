// Función que crea una Promise para sumar dos números después de 3 segundos
function sumarDespuesDeTresSegundos(a, b) {
    return new Promise((resolve, reject) => {
      // Usar setTimeout para simular una operación asincrónica
      setTimeout(() => {
        const suma = a + b;
        resolve(suma);
      }, 3000); // 3000 milisegundos = 3 segundos
    });
  }
  
  // Usar la función
  sumarDespuesDeTresSegundos(5, 10).then((resultado) => {
    console.log(`La suma es: ${resultado}`); // Imprime "La suma es: 15" después de 3 segundos
    console.log('Promise resuelta'); // Imprime "Promise resuelta"
  });
  