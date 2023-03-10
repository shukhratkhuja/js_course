
/*
let a;
let b;

function myFn(){
    let b 
    a = true
    b = 10
    console.log(b) // 10
}

myFn()

console.log(a) // true
console.log(b) // undefined
*/

const a = 5

function myFn(){
    function innerFn(){
        console.log(a) // 5
    }
    innerFn()
}

myFn()