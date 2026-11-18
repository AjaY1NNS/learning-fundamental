const newDate = new Date();

// console.log(newDate);
// console.log(newDate.toString());
// console.log(newDate.toLocaleString());

// const otherDate = new Date(2023, 0, 15, 14, 30, 40)
const otherDate = new Date("2023-01-20, 3:23 PM")
// console.log(otherDate)
// console.log(otherDate.toString())
// console.log(otherDate.toLocaleString())


const myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));



const currentDate = new Date(myTimeStamp - 24*60*60*1000)
// console.log(currentDate.toString());
// console.log(currentDate.toLocaleString());

// console.log(newDate.getTime())

console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

// `${newDate.getDay()} and the time `

const _newDate = newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(_newDate)

