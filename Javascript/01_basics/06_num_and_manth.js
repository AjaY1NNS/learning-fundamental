const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));

// console.log(balance.toString().length);

// const otherNumber = 123.8966
const otherNumber = 112.8966
// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4))  // You have to implement this method very carefully accourding you digits.

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// =================== Number Static Properties =====================
const epsilon = Number.EPSILON;  // 2-52
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991

// =================== Number Static Methods =====================
Number.isFinite()
Number.isInteger()
Number.isNaN()
Number.isSafeInteger()
Number.parseFloat()
Number.parseInt()

// =================== Number Instance Methods =====================
// 1. toExponential()
const num1 = 4356.893
console.log(num1.toExponential()) // 4.356893e+3
console.log(num1.toExponential(2)) //  4.356.89e+3

// 2. toFixed()
console.log(num1.toFixed(2)) // 4356.89

// 3. toString()  
// toString(radix), radix : An integer in the range 2 through 36 specifying the base to use for representing the number value. Defaults to 10.
console.log(num1.toString()) // 4356.893
const num2 = 254
console.log(num2.toString(2)) // binary : 11111110
console.log(num2.toString(16)) // hex : fe

// 4. toPrecision()
const num3 = 345.678
console.log(num3.toPrecision(3)) // 346
console.log(num3.toPrecision(2)) // 3.5e+2
console.log(num3.toPrecision(4)) // 345.7

// 5. toLocaleString()
const num4 = 100000000083
console.log(num4.toLocaleString()) // 100,000,000,083
console.log(num4.toLocaleString("en-IN")) // 1,00,00,00,00,083


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// get range 500 - 600

const min = 500
const max = 600

const randomNumber = Math.floor(Math.random() * (max-min +1)) + min 
console.log(randomNumber)

// Math.min()
// Math.max()
// Math.round()
// Math.ceil()
// Math.floor()
// Math.random()
// Math.abs()
// Math.pow()
