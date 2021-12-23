// Parametros por defecto, podemos establecer ciertos valores que le pasamos a una función por defecto

// version anterior -> funciones
function newFunction(name, age, country) { 
    var name = name || 'Jennifer';
    var age = age || 27;
    var country = country || 'COL';
    console.log(name, age, country);
}

// es6 -> funciones
function newFunction2(name = 'Jennifer', age = 27, country = 'COL') {
    console.log(name, age, country);
}

newFunction2('Ricardo', 23, 'MX')

// Version anterior -> concatenacion
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6 -> concatenacion
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Version anterior -> multilinea salto de linea
let lorem = "Qui consequatur. Commidi. Ipsum vel duis yet minima \n" + "otra frase epica que necesitamos";
console.log(lorem);

// es6 -> multilinea salto de linea
let lorem2 = `otra frase epica que necesitamos
ahora es una nueva frase epica`;
console.log(lorem2);

////
let person = {
    'name': 'Jennifer', 
    'age': 32,
    'country': 'CO'
}

// Version anterior -> desestructuracion
console.log(person.name, person.age, person.country);

// es6 -> desestructuracion
let { name } = person;
console.log(name);


////
let team1 = [
    'Oscar', 
    'Julian',
    'Ricardo'
];
let team2 = [
    'Monica', 
    'Valeria',
    'Camila'
];

// es6 -> Spread Operation
let education = ['David', ...team1, ...team2];
console.log(education);

/*
    VARIABLES => elementos que queremos guardar en memoria
        LET -> Solo esta disponible en el Scope, en el bloque de codigo que va a ser llamado
        CONST -> Es una constante que no se puede reasignar
*/

// LET
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}
console.log(globalVar);

// CONST
const a = 'b';
a = 'a'

/// PROPIEDAD DE OBJETOS MEJORADA
let name = 'Jennifer'
let age = 27;

// Version anterior -> Objetos
obj = {name: name, age: age};

// es6 -> Objetos
obj2 = { name, age };
console.log(obj2);

// ARROW FUNCTIONS -> Vienen a solventar un problema particular o a trabajar con dos elementos, una sintaxis mas reducida, son funciones anonimas
const names = [
    { name: 'Camila', age: 25 },
    { name: 'Andres', age: 35 }
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ///
}
// para solo un elemento o parametro
const listOfNames4 = name => {
    ///
}

const square = num => num * num; // no neceisto return

/*
        JAVASCRIPT -> No es un lenguaje sincronico lo que quiere decir que no puede ejecutar muchos elementos al mismo tiempo, va ejecutando elemento por elemento. dos cosas no van a suceder al tiempo sino en una serie de momento diferentes se incoporaron las PROMESAS para solucionar probleas del los callbacks que se ejecutaban en cascada y no eran escalables
            PROMESAS -> Quieren decir que algo va a pasar en algun momento 
*/

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('helloooo'))
    .catch(error => console.log(error))


/* Clases, modulos y generadores */

// CLASES
class calculator { // clase
    constructor() { // constructor
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) { // metodo
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

/* Trabajar con modulos */

import { hello } from './module';

hello();

//Generator -> retorna una serie de valores segun el algoritmo definido

function* helloWorld() {
    if (true) {
        yield 'Hello';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//