console.log('rytoj laisva haha');

// 1. Reikia parašyti funkciją, kuri priima vieną argumentą - stringą ir tą stringą ideda į h1 tagą ir tą h1 tagą ideda į body tagą.

const fun1 = (text) => {
    const body = document.querySelector('body');
    const h1Html = `<h1>${text}</h1>`;
    body.innerHTML = h1Html;
}

fun1('Labas rytas!');

// 2. Reikia parašyti funkciją, kuri priima vieną argumentą - stringą ir tas stringas yra spalva, kuria reikia nuspalvinti h1 tagą.
 
const h1 = document.querySelector('H1:nth-of-type(1)');

h1.style.color = 'pink';

// 3. Reikia parašyti funkciją, kuri nieko nepriima, bet pakeičia h1 tago teksta į "Kaboom!".


const fun3 = () => {
    const h1 = document.querySelector('h1');
    h1.innerText = 'Kaboom!';
}

fun3();


// paskaita:

let A = 5;
let B = A; // by value / reiksminis priskyrimas

A = A + 2;

console.log(A, B);

const C = [5 , 'labas', true]; // [] -> masyvas
const D = C; // by reference / objektinis priskyrimas(as esu as, o tu esi tu)
const F = [...C]; // by copying value / kopijavimas ...

C[0] = C[0] + 2;

console.log(C, D, F);

// spread ir rest nelabai kazkuom skiriasi vienas nuo kito
// spread labiau naudojamas nei rest
// funkcija su rest ir su spread:

const fun15 = (...rest) => {
    console.log(rest[0] + rest[1]);
}
fun15(5, 8);
 
 
 
const fun16 = (a, b) => {
    console.log(a + b);
}
const spread = [5, 8];
fun16(...spread);
 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const person = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    age: 99,
    city: 'Vilnius',
    country: 'Lietuva',
    hasTail: true
}
 
const { age, city } = person;
 
 
console.log(age, city);
 
const animals = ['bebras', 'lokys', 'vilkas'];
 
const [animal1, animal2] = animals;
 
console.log(animal1, animal2);
 
const printItem = item => {
    console.log('ITEM:', item);
}
 



 
const itemsData = f => {
    const items = ['stalas', 'kede', 'lova', 'spinta'];
 
    for (let i = 0; i < items.length; i++) {
        f(items[i]);
    }
   
}
 
itemsData(printItem);

// pavercia i didziasias raides
itemsData(item => {
    console.log('ITEM:', item.toUpperCase());
});

console.log('-----------------------------------------------');

const coolItems = ['stalas', 'kede', 'lova', 'spinta'];


for (let i = 0; i < coolItems.length; i++) {
    console.log('ITEM:', coolItems[i].toUpperCase());
}
 
console.log('-----------------------------------------------');

// index ideda / skaiciu pavadinimas(item), skaicius(index)
coolItems.forEach((manoPavadinimas, skaiciuIdek, visasMasyvasVisadaTokiaEilesTvarka) => {
    console.log('PAVADINIMAS:', skaiciuIdek, manoPavadinimas.toUpperCase(), visasMasyvasVisadaTokiaEilesTvarka);
});

console.log('-----------------------------------------------');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


//

const gr = coolItems.map((myFancyItem, index) => {
    return index + ':' + myFancyItem.toUpperCase();
});

console.log('GR:', gr);

const withDivs = coolItems.map(item => {
    return `<div>${item.toUpperCase()}</div>`;
});
 
console.log('WITH DIVS:', withDivs);
 
let divs = '';
 
for (let i = 0; i < withDivs.length; i++) {
    divs += withDivs[i];
}
 
const body = document.querySelector('body');
body.innerHTML = divs;
 