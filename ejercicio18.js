// Suponiendo que el archivo JSON se llama data.json y tiene una estructura similar a esta:
/*
[
    {"nombre": "Ana", "edad": 25},
    {"nombre": "Juan", "edad": 30},
    {"nombre": "María", "edad": 20},
    {"nombre": "Pedro", "edad": 35}
]
*/

// Primero, realizamos una solicitud para obtener los datos del archivo JSON
fetch('http://localhost:8000/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    // Filtramos los elementos que cumplan ciertos criterios
    const nombresFiltrados = data.filter(item => item.nombre.startsWith('A'));
    
    // Mostramos los nombres filtrados
    nombresFiltrados.forEach(item => {
      console.log(item.nombre);
    });
  })
  .catch(error => {
    console.error('Se produjo un error:', error);
  });
