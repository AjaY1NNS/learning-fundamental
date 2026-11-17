// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);  // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined == 0);  // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

// === 

// console.log("2" === 2);

// console.log(true < 0);  // false
// console.log(true <= 1);  // true
// console.log(true <= 0);  // false
// console.log(true == 1);  // true

// console.log("" <= false);  

// console.log(null == undefined) // true || special rule
// console.log(null === undefined) // false  || strict rule data type are diffrent 

// console.log(null < undefined) // false  || Reason numaric conversion 0 < NaN
// console.log(null <= undefined) // false || Reason numaric conversion 0 <= NaN

console.log(undefined == NaN);  // false
console.log(undefined <= NaN); // false
console.log(undefined === NaN); // false
console.log(undefined == "NaN"); // false

// ** Important rule: JavaScript mein NaN kisi bhi value ke saath relational comparison mein true nahi deta.

console.log(NaN <= 0) // false
console.log(NaN <= 234) // false
