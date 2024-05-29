function filter(arr, callback) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// Ejemplo de uso:
const array = [1, 2, 3, 4, 5];
const filteredArray = filter(array, function(element) {
    return element % 2 === 0; // Filtrar números pares
});
console.log(filteredArray); // Output: [2, 4]
