// Función para crear una Promise que se resuelve después de un intervalo de tiempo
function createPromiseWithDelay(delay, message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  
  // Crear tus propias Promises
  const promise1 = createPromiseWithDelay(2000, 'Primera Promise resuelta'); // Se resuelve después de 2 segundos
  const promise2 = createPromiseWithDelay(3000, 'Segunda Promise resuelta'); // Se resuelve después de 3 segundos
  const promise3 = createPromiseWithDelay(4000, 'Tercera Promise resuelta'); // Se resuelve después de 4 segundos
  
  // Utilizar Promise.all para mostrar un mensaje cuando todas las Promises se hayan resuelto
  Promise.all([promise1, promise2, promise3])
    .then((messages) => {
      console.log('Todas las Promises se han resuelto:');
      messages.forEach((message) => {
        console.log(message);
      });
    })
    .catch((error) => {
      console.error('Algo salió mal:', error);
    });
  