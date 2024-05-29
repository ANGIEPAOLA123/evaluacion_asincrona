function find(array, callback) {
    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Ejecutamos el callback con el elemento actual del array
        if (callback(array[i])) {
            // Devolvemos el elemento si el callback devuelve true
            return array[i];
        }
    }
    // Si ningún callback devuelve true, devolvemos undefined
    return undefined;
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];

// Callback que busca el primer número mayor que 3
const result = find(numbers, function(element) {
    return element > 3;
});

console.log(result); // Output: 4
