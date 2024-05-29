function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

// Ejemplo de uso:
const array = [2, 4, 6, 8, 10];
const allEven = every(array, function(element) {
    return element % 2 === 0; // Comprobar si todos los elementos son pares
});
console.log(allEven); // Output: true
