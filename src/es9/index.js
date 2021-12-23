// OPERADOR DE REPOSO -> puede estraer las propiedades de un objeto que aun no se ha construido
const obj = {
    name: 'Jennifer', 
    age: 27,
    country: 'CO'
}

// operador de reposo
// let { name, ...all } = obj;
// console.log(name, all);

let { country, ...all } = obj;
console.log(all);

const obj = {
    name: 'Jennifer', 
    age: 27,
}

const obj1 = {
    ...obj,
    country: 'CO'
}

console.log(obj1);

// Promise.finally => cuando ha terminado el llamado y poder ejecutar alguna logica segun sea el caso
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error("Test Error"))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizo"))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);