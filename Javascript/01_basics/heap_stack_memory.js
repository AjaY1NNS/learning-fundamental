// ************** Stack and Heap Memory **********************

// Stack (Primitive), Heap (Non-Primitive)


let name = "ajay";

let anotherName = name;

console.log(anotherName); // ajay

anotherName = "vijay"

console.log(anotherName); // vijay
console.log(name); // ajay


let userOne = {
	name : "raj",
	email : "raj@google.com"
}

let userTwo = userOne;

userTwo.email = "vijay@google.com"

console.log(userOne.email) 
console.log(userTwo.email) 


// Drawing referance heap
// https://excalidraw.com/#json=-abdTndg3lRhn3KcnoEGB,_5nBPL4lWeWwk2HdpyWEHw