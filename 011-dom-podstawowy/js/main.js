console.log('start');
const pokemons = [
    {
        name: 'squirtle',
        pic: 'https://cdn.cnn.com/cnnnext/dam/assets/210226041421-02-pokemon-anniversary-design-full-169.jpg'
    },
    {
        name: 'Bulbasaur',
        pic: 'https://cdn.cnn.com/cnnnext/dam/assets/210226040722-01-pokemon-anniversary-design-full-169.jpg'
    },
    {
        name: 'Pikachu',
        pic: 'https://i.ebayimg.com/images/g/xLkAAOSwJGlgWOAB/s-l400.jpg'
    }
];
let counter = 0;

console.log(counter);

let image = document.querySelector('#sliderImage');
let nameOfPokemon = document.querySelector('#nameId');
let name = pokemons[counter].name
image.src = pokemons[counter].pic;
nameOfPokemon.innerHTML = name

// przyciski
let prev = document.querySelector('#prevId');
let next = document.querySelector('#nextId');
function nextitem() {
    counter += 1;
    if (counter === pokemons.length) {
        counter = 0;
    }
    image.src = pokemons[counter].pic;
    nameOfPokemon.innerHTML = pokemons[counter].name


}
function previous() {
    counter -= 1;
    if (counter < 0) {
        counter = pokemons.length - 1;
    }
    image.src = pokemons[counter].pic;
    nameOfPokemon.innerHTML = pokemons[counter].name

}

prev.addEventListener("click", previous);
next.addEventListener("click", nextitem);
