// --zad1
const people = [
    {
        name: "Michał",
        age: 12
    },
    {
        name: "Damian",
        age: 10
    },
    {
        name: "Wiktoria",
        age: 14
    },
    {
        name: "Agata",
        age: 8
    }
]
let myself = {
    name: 'Michal',
    age: 23
}
people.push(myself)
// console.log(people)

// moje dane
let mydata = people[people.length - 1]
console.log(mydata)