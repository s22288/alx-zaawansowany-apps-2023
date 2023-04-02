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



function getOldest(array) {
    let oldest = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i].age > oldest.age) {
            oldest = array[i]

        }
    }
    return oldest;
}

let oldest = getOldest(people)
console.log(oldest)
