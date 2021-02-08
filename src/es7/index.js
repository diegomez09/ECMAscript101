let numbers = [1,2,4,7,6];
//primer parametro posicion del array 
//  donde se empieza a buscar
//segundo parametro a partir de cual
//  posicion buscará en el arreglo
if(numbers.includes(7,5)){
    console.log('Si lo trae');
}else{
    console.log('No se encontró');
}

let base = 4;
let exponente = 3;
let result = base ** exponente;
console.log(result);