const objectA = {
    a: 10,
    b: true
}

const  copyOfA = objectA

console.log(objectA)
console.log(copyOfA)

copyOfA.a = 12

console.log(objectA)
console.log(copyOfA)

copyOfA.c = 'abc'

console.log(objectA)
console.log(copyOfA)