/*
let a = 3
let b = 5

function sum(a, b){
    const c = a + b
    console.log(c)
}

sum(a, b)

a = 5
b = 123

sum(a, b)
*/


/*
function myFn(a, b){
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(myFn(3,5)) //  a+1+b => 9
*/

/* 
const personOne = {
    name: "James",
    age: 21
}

function increasePersonAge(person){
    person.age += 1
    return person
}

increasePersonAge(personOne)
console.log(personOne) // { name: 'James', age: 22 }

*/  // changing global object params inside of the function is not recommended


const personOne = {
    name: "James",
    age: 21
}

function increasePersonAge(person){
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne) // { name: 'James', age: 21 }
console.log(updatedPersonOne) // { name: 'James', age: 22 }