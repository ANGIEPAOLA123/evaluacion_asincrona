// Función que devuelve una Promise que se resuelve después de cierto tiempo
function delay(ms, shouldResolve) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`Promise resuelta después de ${ms} milisegundos`);
        } else {
          reject(`Promise rechazada después de ${ms} milisegundos`);
        }
      }, ms);
    });
  }
  
  // Crear tres promesas
  const promise1 = delay(1000, true); // Se resolverá después de 1 segundo
  const promise2 = delay(2000, false); // Se rechazará después de 2 segundos
  const promise3 = delay(3000, true); // Se resolverá después de 3 segundos
  
  // Usar Promise.allSettled() para obtener información sobre el estado de todas las promesas
  Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`La Promise ${index + 1} se resolvió con el valor:`, result.value);
        } else if (result.status === 'rejected') {
          console.log(`La Promise ${index + 1} fue rechazada con el motivo:`, result.reason);
        }
      });
    })
    .catch((error) => {
      console.error('Error al usar Promise.allSettled():', error);
    });
  