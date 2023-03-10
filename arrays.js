
/*
const myArray = [1,2,3]
console.log(myArray)

const myArray2  = new Array(1,2,3)
console.log(myArray2)
*/

// Array methods

// pop - removes last element
// unshift - removes first element 
// shift - add element to the beginning

const myArray = [1,2,3]
console.log(myArray)

/*
myArray.forEach(el => console.log(el*2))
console.log(myArray)
*/

const oldArray = myArray.forEach(el => el * 2)
const newArray = myArray.map(el => el * 3)
const newArray2 = myArray.map(el => {return el * 4})
const newArray3 = myArray.map(function(el) {return el * 5})

console.log(oldArray)
console.log(newArray2)
console.log(newArray3)
console.log(newArray)
console.log(myArray)