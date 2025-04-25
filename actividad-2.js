const numeros = [3, 7, 12, 5, 2];

//usar map y filter para crear un nuevo array con los cuadrados de los números mayores a 5
// y luego imprimirlo en la consola.
// Código en JavaScript:
// Usando map y filter para crear un nuevo array con los cuadrados de los números mayores a 5   

const cuadrados = numeros.map(num => num * num);
console.log("Cuadrados:", cuadrados);

const mayoresA5 = numeros.filter(num => num > 5);
console.log("Mayores a 5:", mayoresA5);
