// Función para validar si un valor es numérico
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  // Función para validar si un valor es alfanumérico
  function isAlphaNumeric(value) {
    return /^[a-zA-Z0-9]+$/.test(value);
  }
  
  // Función para validar si un valor es un correo electrónico
  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  
  // Función para validar si un valor es una fecha en formato yyyy-mm-dd
  function isDate(value) {
    return /^\d{4}-\d{2}-\d{2}$/.test(value);
  }
  
  // Handler para el proxy
  const validationHandler = {
    set: function(target, property, value) {
      // Validar el valor según el tipo de atributo
      if (property === 'numeric' && !isNumeric(value)) {
        console.error(`Error: "${value}" no es un valor numérico para la propiedad "${property}"`);
        return false;
      } else if (property === 'alphanumeric' && !isAlphaNumeric(value)) {
        console.error(`Error: "${value}" no es un valor alfanumérico para la propiedad "${property}"`);
        return false;
      } else if (property === 'email' && !isEmail(value)) {
        console.error(`Error: "${value}" no es un correo electrónico válido para la propiedad "${property}"`);
        return false;
      } else if (property === 'date' && !isDate(value)) {
        console.error(`Error: "${value}" no es una fecha válida para la propiedad "${property}" (Formato esperado: yyyy-mm-dd)`);
        return false;
      } else if (typeof value === 'string' && value.trim() !== value) {
        console.error(`Error: "${property}" no puede contener espacios en blanco al inicio o al final`);
        return false;
      }
  
      // Si pasa todas las validaciones, establecer el valor en el objeto original
      target[property] = value;
      return true;
    }
  };
  
  // Objeto original
  const validatedObject = new Proxy({}, validationHandler);
  
  // Ejemplos de uso del objeto proxy
  validatedObject.numeric = 123; // OK
  validatedObject.numeric = 'abc'; // Error: "abc" no es un valor numérico para la propiedad "numeric"
  
  validatedObject.alphanumeric = 'abc123'; // OK
  validatedObject.alphanumeric = 'abc 123'; // Error: "abc 123" no es un valor alfanumérico para la propiedad "alphanumeric"
  
  validatedObject.email = 'example@example.com'; // OK
  validatedObject.email = 'not_a_valid_email'; // Error: "not_a_valid_email" no es un correo electrónico válido para la propiedad "email"
  
  validatedObject.date = '2024-05-29'; // OK
  validatedObject.date = '2024/05/29'; // Error: "2024/05/29" no es una fecha válida para la propiedad "date" (Formato esperado: yyyy-mm-dd)
  
  validatedObject.test = '  test  '; // Error: "test" no puede contener espacios en blanco al inicio o al final
  