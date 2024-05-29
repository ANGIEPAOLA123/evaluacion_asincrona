const myPromise = new Promise((resolve, reject) => {
    // Usar setTimeout para resolver la promesa después de 3 segundos
    setTimeout(() => {
      resolve("Promise resuelta");
    }, 3000);
  });
  
  myPromise.then((message) => {
    console.log(message); // Imprimirá "Promise resuelta" después de 3 segundos
  });
  