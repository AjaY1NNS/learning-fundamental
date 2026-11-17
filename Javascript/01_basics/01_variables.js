const accountId = 123489;
let accountName = "ajay"
var accountEmail = "ajay@gmail.com"
accountCity = "vijaywada" 

/*
when use strict mode then you get a referance error. 

ReferenceError: accountCity is not defined

it's vahavier like a var in normal mode.

*/

let accountAddress; // undefined

// accountId = 56378;
// console.log(accountId);  // TypeError: Assignment to constant variable.


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountName, accountEmail, accountCity,accountAddress]);

