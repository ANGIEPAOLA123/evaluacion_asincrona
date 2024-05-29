function findIndex(array, callback) {
    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Ejecutamos el callback con el elemento actual del array
        if (callback(array[i])) {
            // Devolvemos el índice del elemento si el callback devuelve true
            return i;
        }
    }
    // Si ningún callback devuelve true, devolvemos undefined
    return undefined;
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];

// Callback que busca el primer número mayor que 3
const index = findIndex(numbers, function(element) {
    return element > 3;
});

console.log(index); // Output: 3