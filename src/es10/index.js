// * devolver una matriz con una submatriz aplanada, 
// * recibe como argunmento la profundidad
let arreglo = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(arreglo.flat(1));

// * mapear cada elemento, luego pasarle una funcion y aplanar
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// * Quitar espacios de un string y solo dejar caracteres
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

// * array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))