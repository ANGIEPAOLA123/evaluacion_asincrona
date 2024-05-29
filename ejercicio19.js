async function fetchDataAndManipulate() {
    try {
      // Realizamos una solicitud para obtener los datos del archivo JSON
      const response = await fetch('data.json');
  
      // Verificamos si la solicitud fue exitosa
      if (!response.ok) {
        throw new Error('No se pudo obtener el archivo JSON');
      }
  
      // Convertimos la respuesta a JSON
      const data = await response.json();
  
      // Manipulamos los datos recibidos
      data.forEach(item => {
        console.log(`Nombre: ${item.nombre}, Edad: ${item.edad}`);
        // Puedes hacer más manipulaciones aquí según tus necesidades
      });
  
    } catch (error) {
      console.error('Se produjo un error:', error);
    }
  }
  
  // Llamamos a la función para ejecutarla
  fetchDataAndManipulate();
  