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
let old = people[0];

people.forEach(
    p => {
        if (p.age > old.age) {
            old = p
        }
    }
)
console.log(old)


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

let sorted = people.sort((a, b) => a.age - b.age)
let maxwiek = sorted[people.length - 1]
console.log(maxwiek)
