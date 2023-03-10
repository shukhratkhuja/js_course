/*
const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton)
*/

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 300,
    height: 200,
}

const button = {
    ...buttonInfo,
    ...buttonStyle
}
console.table(button)

