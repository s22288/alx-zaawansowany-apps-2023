const products = [
    {
        name: 'banan',
        price: 4.99
    },
    {
        name: "chleb",
        price: 3.25
    },
    {
        name: 'ser',
        price: 7.00
    },
    {
        name: 'baton',
        price: 1.99
    }
]

suma = products.reduce(function (a, b) {
    a.price + b.price;
}, 0)

console.log(suma)

liczba = products.length

//   srednia

avg = suma / liczba
document.write(avg)