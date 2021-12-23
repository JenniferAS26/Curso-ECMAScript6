const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
// version anterior -> replace
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

// es12 -> replace
const replacedString2 = string.replaceAll("JavaScript", "Python"); // no me funciona
console.log(replacedString2);

class Message {
    #show(val) { // para hacerlo privado
        console.log(val);
    };
    get #add(val) { // esctructura privada
        //
    }
}

const message = new Message();
message.show("Hola!");

// Promise any no me funciona
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))

class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);