// Conversion Oerations

let score = null

// console.log(typeof score);
// console.log(typeof(score));

let valueIsNumber = Number(score);

// console.log(typeof(valueIsNumber));
// console.log(valueIsNumber);

// === Number conversion ===
// 33 => 33 // number
// "33" => 33 // number
// "33ab" => NaN // number
// null => 0 // number
// true => 1 // number
// false => 0 // number


// === Boolen conversion ===

let name = false

let convetInBoolen = Boolean(name);

// console.log(typeof(convetInBoolen));
// console.log(convetInBoolen);


// " " => true
// "ajay" => true
// {} => true

// "" => false
// null => false
// undefiend => false
// 0 => false


// === String conversion ===

let email = "4895"

let convertInString = String(email);

// console.log(convertInString);
// console.log(typeof convertInString);

// its general converstion


// ======= Special Conversoin ===========

console.log(Number(undefined)) // NaN
console.log(String(undefined)) // undefined
console.log(Boolean(undefined)) // false

console.log(Number(null)) // 0
console.log(String(null)) // null
console.log(Boolean(null)) // false
// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " ajay"

let str3 = str1 + str2
// let str3 = str1 - str2 // result : NaN
// console.log(str3);

// console.log("1" + 2); // result : 12
// console.log(1 + "2"); // result : 12
// console.log("1" + 2 + 2); // result : 122
// console.log(1 + 2 + "2"); // result : 32

// Opertaions work [ "*", "/", "%", "+", "-" ]

// console.log(3 + 4 * 5 % 3);  // result: 5 // *,%,+
// console.log(3 + 20 / 5 % 3); // result: 4 // /,%,+
// console.log(3 + 20 / 5 % 3 - 6); //  result: -2 // /,%,+,-

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


let x2 = 3n;
let y2 = ++x2;

console.log({x2,y2}) // x2:4n, y2:4n

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion