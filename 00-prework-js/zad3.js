const products = [
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


let cena = products.filter(p => p.category == 'fruits').reduce((sum, cur) => sum + cur.price, 0);

console.log(cena)