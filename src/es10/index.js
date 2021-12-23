let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(3));

let array  = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// para eliminar strings en blanco
let hello = "     hello world       -";
console.log(hello);
console.log(hello.trimStart());

let hello = "Hello world       ";
console.log(hello);
console.log(hello.trimEnd());

///
try {
    
} catch  {
    error
}


let entries = [["name", "Jennifer"], ["age", 27]];

// convertir un arreglo en un objeto
console.log(Object.fromEntries(entries));

// objeto de tipo simbolo que me va a permitir acceder a una descripcion

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
