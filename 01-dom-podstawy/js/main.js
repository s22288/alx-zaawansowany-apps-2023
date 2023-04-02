console.log('main')
let el = document.querySelector('#butid')

console.log(el.innerText)

let form = document.querySelector('form')
form.classList.add('my-form')

// --zad 3


let inputs = document.querySelectorAll("input")
inputs[0].value = "nowytext"
inputs[1].value = "drugi nowy text"
const messages = [
    {
        author: 'Pawel',
        message: 'Ale dzisiaj super dzien'
    },
    {
        author: "Magda",
        message: "Zimno jest"
    }
]
let list = document.querySelector('ul')
for (m of messages) {
    list.innerHTML += `<ul>${m.author}</ul>`
}
inputs[0].classList.add('klasa')

console.log(inputs[0].className)