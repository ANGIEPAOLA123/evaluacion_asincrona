function map(arr, callback) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i]);
        newArray.push(result);
    }
    return newArray;
}

// Ejemplo de uso:
const array = [5, 9, 10, 14, 15];
const doubledArray = map(array, function(element) {
    return element * 3;
});
console.table(doubledArray); // Output: [2, 4, 6, 8, 10]