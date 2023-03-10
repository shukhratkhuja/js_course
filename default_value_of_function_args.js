/* 
function multByFactor(value, multiplier = 1){
    return value * multiplier
}

multByFactor(10, 2) // 20
multByFactor(5) // 5
*/

const newPost = (post, addedAt=Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Bogdan',
}

console.log(newPost(firstPost))