//* Definir parametros por defecto en el método
// function newfunction(name = "Diego", age = 22, country = "MX") {
//     console.log(name, age, country);
// }
// newfunction();

//* Concatenar strings
// let hello = "Hello";
// let world = "World";
// let epicPhrase = `${hello} ${world}`
// console.log(epicPhrase);

//* Añadir saltos de linea en un solo string
// let lorem = "Enveses la vida no es como keremos\n" + "segunda frase epica"
// console.log(lorem);
// let lorem2 = `otra frase epica de ecmascript 6
// con el espacio en el string del lorem2
// ultimo espacio`
// console.log(lorem2);

//* Acceder a las propiedades de un objeto
// let person = {
//     'name': 'Diego',
//     'age': 22,
//     'country': 'MX'
// }
// console.log(person.name, person.age);

// let { name, age, country } = person;
// console.log(name, age, country);

//* Unir arreglos en la declaracion de otro arreglo
// let team1 = ['Said', 'Julian', 'Ricardo'];
// let team2= ['Val', 'Jes','Mel'];
// let education = ['David',...team1,...team2];
// console.log(education);

//* Scope de var y let
// {
//     var variableVar = 'ola'
// }
// {
//     let variabelLet = 'let'
// }
// console.log(variableVar);
// console.log(variabelLet);

//* Variables constantes que no se pueden modificar
// const a = 'b';
// a = 'c'; <= Tira error
// console.log(a);