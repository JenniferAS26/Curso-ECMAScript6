const data = {
    frontend: "Jennifer",
    backend: "Santiago",
    design: "David"
}

// como voy a transformar este objeto a una matriz
const entries = Object.entries(data);
console.log(entries);

// para saber cuantos elementos tiene un objeto
console.log(entries.length);

// devuelve los valores de un objeto a un arreglo
const data = {
    frontend: "Jennifer",
    backend: "Santiago",
    design: "David"
}

const values = Object.values(data)
console.log(values);
console.log(values.length);

// padding
const string = "hello";
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '------'));

/* ASYNC/AWAIT */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error("Test Error"))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld(); 
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();