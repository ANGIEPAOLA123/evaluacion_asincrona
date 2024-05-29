// Objeto original
const targetObject = {
    name: 'Angie',
    age: 18,
  };
  
  // Crear un objeto proxy
  const proxy = new Proxy(targetObject, {
    // Handler que define el comportamiento del proxy
    get: function(target, property, receiver) {
      console.log(`Accediendo a la propiedad "${property}"`);
      // Devolver el valor de la propiedad del objeto original
      return Reflect.get(target, property, receiver);
    },
    set: function(target, property, value, receiver) {
      console.log(`Estableciendo la propiedad "${property}" a ${value}`);
      // Establecer el valor de la propiedad en el objeto original
      return Reflect.set(target, property, value, receiver);
    },
    deleteProperty: function(target, property) {
      console.log(`Eliminando la propiedad "${property}"`);
      // Eliminar la propiedad del objeto original
      return Reflect.deleteProperty(target, property);
    }
  });
  
  // Acceder a las propiedades del proxy
  console.log(proxy.name); // Accede a la propiedad "name"
  proxy.age = 20; // Establece la propiedad "age" a 40
  console.log(proxy.age); // Accede a la propiedad "age"
  delete proxy.age; // Elimina la propiedad "age"
  console.log(proxy.age); // Accede a la propiedad "age" después de eliminarla
  
  