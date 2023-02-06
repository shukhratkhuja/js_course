const post  = {
    title: 'My post',
    likesQty: 4
}

console.log(post)

json_text = JSON.stringify(post)

console.log(json_text)

const json_object = JSON.parse(json_text)
console.log(json_object)