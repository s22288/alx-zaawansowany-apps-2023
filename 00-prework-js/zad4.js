const products2 = [
    {
        name: 'jablko',
        category: 'fruits',
        price: 2.00
    },
    {
        name: 'kawa',
        category: 'other',
        price: 7.25
    },
    {
        name: 'banan',
        category: 'fruits',
        price: 4.99
    }
]


function calculatesum(arr) {
    let suma = 0;
    for (let element of arr) {
        suma += element.price
    }
    return suma;
}

console.log(calculatesum(products2));