function imprimirNumeros(desde, hasta) {
    let numero = desde;
    const intervalo = setInterval(() => {
        console.log(numero);
        if (numero === hasta) {
            clearInterval(intervalo);
        }
        numero++;
    }, 1000);
}

// Uso:
imprimirNumeros(5, 10);



function imprimirNumeros(desde, hasta) {
    let numero = desde;
    function imprimir() {
        console.log(numero);
        if (numero < hasta) {
            numero++;
            setTimeout(imprimir, 1000);
        }
    }
    imprimir();
}

// Uso:
imprimirNumeros(1, 5);

