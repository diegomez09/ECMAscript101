// * Ventajas con ES8
// ? const objeto = {
// ? key : value
// ?}
const data = {
    frontend: 'Wero',
    backend: 'Diego',
    design: 'Andrea'
}
// ! Objeto a arreglo / matriz
// ! [
// !  [ 'frontend', 'Wero' ],
// !  [ 'backend', 'Diego' ],
// !  [ 'design', 'Andrea' ]
// ! ]
const entries = Object.entries(data)
console.log(entries);

// ! Objeto a arreglo de keys
// ! [ 'frontend', 'backend', 'design' ]
const valoresKeys = Object.keys(data);
console.log(valoresKeys);

// ! Objeto a arreglo de values
// ! [ 'Wero', 'Diego', 'Andrea' ]
const valoresObjeto = Object.values(data);
console.log(valoresObjeto);

// * Async funciton
const helloworld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Se cumplio'), 3000)
            : reject(new Error('Tronó'))
    })
};

const helloAsync = async () => {
    const hello = await helloworld();
    console.log(hello);
}

helloAsync();