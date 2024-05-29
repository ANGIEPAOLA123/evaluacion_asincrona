function dropWhile(array, callback) {
    // Encontramos el índice del primer elemento que no cumple la condición del callback
    let dropIndex = 0;
    while (dropIndex < array.length && callback(array[dropIndex])) {
        dropIndex++;
    }
    // Devolvemos un nuevo array a partir del primer elemento que no cumple la condición
    return array.slice(dropIndex);
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];

// Callback que descarta los elementos mientras sean menores o iguales a 3
const result = dropWhile(numbers, function(element) {
    return element <= 3;
});

console.table(result); // Output: [4, 5]