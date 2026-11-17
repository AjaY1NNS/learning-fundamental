//  ********** Primitive ***************

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 34565435766543567547n

// console.log(typeof bigNumber)
// console.log(bigNumber)

// big number safe represantaion : 2^53-1


// ************** Reference (Non primitive) ***********

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3
