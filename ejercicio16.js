 // Función que retorna una Promise que se resuelve después de 1 segundo con un número específico
 function crearPromesaConNumero(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero);
        }, 1000); // Espera 1 segundo (1000 milisegundos)
    });
}

// Función para ejecutar las Promises encadenadas
function ejecutarPromesasEncadenadas() {
    crearPromesaConNumero(1)
        .then((resultado1) => {
            return crearPromesaConNumero(2).then((resultado2) => {
                return resultado1 + resultado2;
            });
        })
        .then((resultadoParcial) => {
            return crearPromesaConNumero(3).then((resultado3) => {
                return resultadoParcial + resultado3;
            });
        })
        .then((resultadoFinal) => {
            console.log("Resultado final:", resultadoFinal); // Imprime "Resultado final: 6"
            alert("Resultado final: " + resultadoFinal); // Muestra una alerta con el resultado final
        });
}

// Añadimos un event listener al botón para ejecutar las promesas encadenadas
document.getElementById('boton').addEventListener('click', ejecutarPromesasEncadenadas);