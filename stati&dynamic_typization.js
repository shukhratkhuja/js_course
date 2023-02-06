
/*
String a = 'abc'

int b = 11

b = 'xyz' //Error

*/  //Not Js



/*
a = 'abc' //String

a = 19 //Number
*/  //dynamically typed



/*
function a(){
    console.log('Hey there !')
}

a() // 'Hey there !'

a = 10

a() // Uncaught TypeError: a si not a function
*/ 


const a = () => {
    console.log('Hey there !')
}

a() // 'Hey there !'

a = 10 // Uncaught TypeError: Assignment to constant variable

a() 


