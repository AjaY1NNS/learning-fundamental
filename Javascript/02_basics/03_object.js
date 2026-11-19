// singletone
// Object.create()

// Object literals

const symKey = Symbol("key1")


let obj = {
	name : "Ajay",
	"full name" : "Ajay Pratap Singh",
	[symKey] : "userkey",
	age : 20,
	email : "ajay.google.com",
	loggedIn : false,
	lastLoggedIn : ["monday", "friday"]
}

// console.log(obj);

// console.log(obj.name)
// console.log(obj["email"])
// console.log(obj["full name"])
// console.log(obj[symKey])

// Object.freeze(obj)

obj.name = "vijay"

// console.log(obj);

const greeting = function (){
	console.log("Hello Ajay")
}

obj["myfun"] =greeting

console.log(obj.myfun());
console.log(obj.location);

