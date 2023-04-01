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
];
let len = products.length;
let avg = (products.reduce((a, b) => a += b.price, 0)) / len
console.log(avg)
