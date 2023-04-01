console.log('wiadomosc')
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

let suma = 0;
products.forEach((prod) => {
    suma += prod.price;
})
console.log(suma);