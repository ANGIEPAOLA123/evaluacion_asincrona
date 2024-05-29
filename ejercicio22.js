// Función simulada que realiza una llamada asincrónica
function asyncFunction(item) {
    return new Promise((resolve, reject) => {
      // Simulando una operación asincrónica, por ejemplo, una solicitud HTTP
      setTimeout(() => {
        // Simulamos un éxito o un fallo aleatorio
        const randomSuccess = Math.random() >= 0.5;
        if (randomSuccess) {
          resolve(`Procesado correctamente: ${item}`);
        } else {
          reject(`Error al procesar: ${item}`);
        }
      }, Math.random() * 2000); // Simulamos un tiempo de respuesta aleatorio
    });
  }
  
  // Lista de elementos a procesar
  const items = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5'];
  
  // Función asincrónica que procesa los elementos uno por uno
  async function processItems() {
    for (const item of items) {
      try {
        const result = await asyncFunction(item);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  // Llamar a la función para comenzar a procesar los elementos
  processItems();
  