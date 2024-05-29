// Definimos una función que retorna una Promise que se resuelve después de 1 segundo
function esperarUnSegundo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operación completada");
        }, 1000); // Espera 1 segundo (1000 milisegundos)
    });
}

// Definimos la función asincrónica que utiliza async/await
async function operacionAsincronica() {
    const resultado = await esperarUnSegundo();
    return resultado;
}

// Llamamos a la función asincrónica y mostramos el resultado en una alerta
operacionAsincronica().then((mensaje) => {
    alert(mensaje); // Muestra "Operación completada" después de 1 segundo
});
