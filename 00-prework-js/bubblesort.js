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
console.log('hello')


function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i].age > arr[j].age) {
                let copy = arr[i]
                arr[i] = arr[j]
                arr[j] = copy
            }
        }
    }
    return arr
}
let sorted = sort(people)


console.log(sorted)
