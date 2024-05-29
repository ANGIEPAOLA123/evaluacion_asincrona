function cargarJSON() {
    fetch('C:\angie_repaso_asincrono\data.json') // Reemplaza 'data.json' con la ruta de tu archivo JSON local
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Muestra los datos en la consola
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
        });
}

// Añadimos un event listener al botón para cargar el archivo JSON al hacer clic
document.getElementById('boton').addEventListener('click', cargarJSON);