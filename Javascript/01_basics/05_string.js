// String Operations

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

//*******************************************************************************************

const stringOne = "ajay"
const stringTwo = 60

// console.log(stringOne + " " + stringTwo);

// using backtatics

// console.log(`Hello ${stringOne}, your total amount is : ${stringTwo}`);


const str = new String("hello ajay this is a javascript")


// 1. length
// console.log(`String Total Length : ${str.length}`); // result : 31

// 2. charAt(arg) => arg : pass string index value, return : charector
// console.log(str.charAt(6)) //  result : a

// 3. concat() => merge strings
const str1 = "ajay", str2 = "vijay", str3 = "raja"
const str4 = str1.concat(", ",str2,", ",str3, ".");
// console.log(str4);  // result : ajay, vijay, raja.

// 4. endsWith(arg) => arg : pass string or charector, return : boolen if end matched 
// endsWith(searchString)
// endsWith(searchString, endPosition)
const ytr = "ajay this is your book ?"
// console.log(ytr.endsWith("your")) // false
// console.log(ytr.endsWith("?")) // true
// console.log(ytr.endsWith("book ?")) // true
// console.log(ytr.endsWith("this", 9)) // true

// 5. includes()
// includes(searchString)
// includes(searchString, position), position : after that position string found or not
// console.log(str.includes("is")) // true
// console.log(str.includes("is", 7)) // true
// console.log(str.includes("is", 8)) // true
// console.log(str.includes("is", 9)) // true
// console.log(str.includes("is", 10)) // true
// console.log(str.includes("is", 11)) // true
// console.log(str.includes("is", 12)) // true
// console.log(str.includes("is", 13)) // true
// console.log(str.includes("is", 14)) // true
// console.log(str.includes("is", 15)) // true
// console.log(str.includes("is", 16)) // true
// console.log(str.includes("is", 17)) // false
// console.log(str.includes("is", 18)) // false

// 6. indexOf
// indexOf(searchString)
// indexOf(searchString, position) 
// return : index, -1
// console.log(str.indexOf("java")) // 21
// console.log(str.indexOf("java", 7)) // 21
// console.log(str.indexOf("java", 22)) // -1

// 7. lastIndexOf()
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// 8. match(), matchAll()
// match(regexp)
// matchAll(regexp)

// const regExp = /[a-z]/g;
// console.log(str.match(regExp));
// console.log([...str.matchAll(regExp)]);

// 9. replace(), replaceAll()

// 10. search()

// 11. split()
// split(separator)
// split(separator, limit)
// const __str = "This-is-my-code";
// console.log(__str.split("-")) //[ 'This', 'is', 'my', 'code' ]
// console.log(__str.split("-", 3)) // [ 'This', 'is', 'my' ]


// 12. slice()
// slice(indexStart)
// slice(indexStart, indexEnd)
// const _str = "This is my code.";
// console.log(_str.slice(2)) //  is is my code.
// console.log(_str.slice(2,6)) // is is


// 13. substring()

// 14. localeCompare()

// 15. toLocalLowerCase()

// 16 toLocalUpperCase()

// 17. toLowerCase()

// 18. toUpperCase()

// 19. toString()

// 20. trim()

// 21. padEnd()

// 22. padStart()


