// dinamic import llamar piezas de codigo
const button = document.getElementById("btn");
button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise allSettled -> nos devuelve una promesa que se resuelve despues de que todas las promesas se hayan cumplido o rechazado
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

// promise all va a ser rechazada en el momento en que se rechace una de estas promesas
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))


// globalThis
console.log(window);
console.log(globalThis);

const fooo = null ?? 'default string';
console.log(fooo);

const user = {};
console.log(user?.profile?.email); // validar que algo aun no esta disponible y despues tener una opcion

if (user?.profile?.email) {
    console.log(email);
} else {
    console.log("Fail");
}