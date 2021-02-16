const objeto = {
    name: 'Diego',
    edad: 22,
    country: 'MX'
};
// ! Extraemos solo la llave de datos que nos importa
let { country, ...all } = objeto;
console.log(country, all);

// ? Concatenar objetos
const person = {
    name: 'Oscar',
    age: 32
};

const personInformation = {
    ...person,
    country: 'MX'
};
console.log(`personInformation: `, personInformation);

// * Promesa con set time out
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => {
                resolve('Hello World!');
            }, 3000)
            : reject(new Error('Test Error'));
    });
};

helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));

// * Expresion regular con grupos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);