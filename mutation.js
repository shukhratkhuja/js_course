/*
const a = 10
let b = a

b = 30

console.log(a)  // 10
console.log(b)  // 30
*/



/*
const person = {
    name: 'Bob',
    age: 12,
}

person.age = 22
person.isAdult = true

console.log(person.age) // 22
console.log(person.isAdult) // true
*/



/*
const person = {
    name: 'Bob',
    age: 12,
}

const person2 = person

person2.age = 24
person2.isAdult = true

console.log(person) // { name: 'Bob', age: 24, isAdult: true }

console.log(person2) // { name: 'Bob', age: 24, isAdult: true }
*/



/* //method 1
const person = {
    name: 'Sam',
    age: 25,
}

const person2 = Object.assign({}, person)

person2.age = 32

console.log(person) //{ name: 'Sam', age: 25 }

console.log(person2) //{ name: 'Sam', age: 32 }

*/



/*
const person = {
    name: 'Sam',
    age: 25,
    account: {
        username: 'James Bond',
        password: 'a;lskdjf;alksjdf'
    }
}

const person2 = Object.assign({}, person)

person2.age = 26
person2.account.username = 'Agent 007'

console.log(person) // { name: 'Sam', age: 25, account: { username: 'Agent 007', password: 'a;lskdjf;alksjdf' } }

console.log(person2) // { name: 'Sam', age: 26, account: { username: 'Agent 007', password: 'a;lskdjf;alksjdf' } }

*/



/*
const person = {
    name: 'Sam',
    age: 25,
}

const person2 = {...person}

person2.name = 'Alice'

console.log(person) //{ name: 'Sam', age: 25 }

console.log(person2) //{ name: 'Alice', age: 25 }

*/


const person = {
    name: 'Sam',
    age: 25,
    account: {
        username: 'James Bond',
        password: 'a;lskdjf;alksjdf'
    }
}


const person2 = {...person}


person2.name = 'Ali'
person2.account.password = 'qwer134oeruq1'

console.log(person) // { name: 'Sam', age: 25, account: { username: 'James Bond', password: 'qwer134oeruq1' } }
console.log(person2) // { name: 'Ali', age: 25, account: { username: 'James Bond', password: 'qwer134oeruq1' } }