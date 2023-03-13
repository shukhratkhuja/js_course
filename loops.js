/*
const myArray = ['first', 'second', 'third']

myArray.forEach((element, index) => {
    console.log(element, index)
})
*/

/*
let i = 1

do {
    console.log(i)
    i++
} while (i < 5)
*/

const myObject = {
    x: 10,
    y: true,
    z: 'abc',
}

for (const key in myObject){
    console.log(key, myObject[key])
}


Object.values(myObject).forEach(value => {
    console.log(value)
})


const myArray = [true, 10, 'abc', null]

for (const element in myArray) {
    console.log(myArray[element])
}

for (const element of myArray) {
    console.log(myArray[element])
}


