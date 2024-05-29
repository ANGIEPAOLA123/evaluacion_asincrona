const fs = require('fs'); // Módulo de Node.js para el sistema de archivos

// Función para leer un archivo JSON local
function readJSONFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err); // Si hay un error al leer el archivo, rechazamos la Promise
      } else {
        try {
          const json = JSON.parse(data);
          resolve(json); // Si se puede parsear el JSON correctamente, resolvemos la Promise
        } catch (error) {
          reject(error); // Si hay un error al parsear el JSON, rechazamos la Promise
        }
      }
    });
  });
}

// Nombre del archivo JSON
const filename = 'data.json';

// Llamar a la función para leer el archivo JSON
async function fetchData() {
  try {
    const jsonData = await readJSONFile(filename);
    console.log('Datos leídos correctamente:', jsonData);
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error.message);
  }
}

// Llamar a la función para iniciar la lectura del archivo
fetchData();
