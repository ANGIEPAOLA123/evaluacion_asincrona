// Función para crear una Promise que suma dos números después de 2 segundos
function sumarDosNumeros(a, b) {
    return new Promise((resolve, reject) => {
      // Verificar si ambos argumentos son números
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject(new Error('Ambos argumentos deben ser números'));
      } else {
        // Usar setTimeout para simular una operación asincrónica
        setTimeout(() => {
          const suma = a + b;
          resolve(suma);
        }, 2000); // 2000 milisegundos = 2 segundos
      }
    });
  }
  
  // Usar la función sumarDosNumeros
  sumarDosNumeros(5, 10)
    .then((resultado) => {
      console.log(`La suma es: ${resultado}`); // Imprime "La suma es: 15" después de 2 segundos
    })
    .catch((error) => {
      console.error('Error:', error.message); // No se ejecutará en este caso
    });
  
  // Ejemplo con argumentos no numéricos
  sumarDosNumeros('5', 10)
    .then((resultado) => {
      console.log(`La suma es: ${resultado}`); // No se ejecutará en este caso
    })
    .catch((error) => {
      console.error('Error:', error.message); // Imprime "Error: Ambos argumentos deben ser números"
    });
  