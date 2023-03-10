
const fnWithError = () => {
    throw new Error ('Some error')
}

try {
    // something
    fnWithError()
    
} catch(error){
    // works when error occured
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')