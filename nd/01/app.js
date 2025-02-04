console.log('Pradedam!');

const rand = function getRandomInt(min, max) {const minCeiled = Math.ceil(min);const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}; 
    // The maximum is exclusive and the minimum is inclusive}
 

// 1

const tagH1 = document.querySelector('h1');

tagH1.innerText = 1;

const tagH2 = document.querySelector('h2');

tagH2.innerText = 2;

const tagH3 = document.querySelector('h3');

tagH3.innerText = 3;

const tagH4 = document.querySelector('h4');

tagH4.innerText = 4;

// 2

const div1 = document.querySelector('div:nth-of-type(1)');
const div2 = document.querySelector('div:nth-of-type(2)');

// div1.innerText = 1;
// div2.innerText = 2;

div1.style.height = '100px';
div1.style.width = '100px';
div1.style.backgroundColor = 'blue';

div2.style.height = '100px';
div2.style.width = '100px';
div2.style.backgroundColor = 'red';
div2.style.borderRadius = '50%';


// 3 Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite
// atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės.
// Kintamuosius ir gautą rezultatą įrašykite į atitinkamus span tagus, esančius 
 // section tage su id=go3.

const kintamasisPirmas = rand(0,4);
console.log('A:', kintamasisPirmas);

const kintamasisAntras = rand(0,4);
console.log('B:', kintamasisAntras);

const span = document.querySelector('#go3 span:nth-of-type(1)');
span.innerText = kintamasisPirmas;

const span2 = document.querySelector('#go3 span:nth-of-type(2)');
span2.innerText = kintamasisAntras;

const span3 = document.querySelector('#go3 span:nth-of-type(3)');
// span3.innerText = suma;




// 4

// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 50 iki 200. Iš section tage su id=go4 esančių div tagų padarykite 
// atitinkamo dydžio (px) apskritimus. Apskritimai turi būti išdėlioti eilute nuo mažiausio iki didžiausio.

const kintamasisTrecias = rand (50, 200);
console.log(kintamasisTrecias);

const kintamasisKetvirtas = rand (50, 200);
console.log(kintamasisKetvirtas);

const kintamasisPenktas = rand (50, 200);
console.log(kintamasisPenktas);

const div3 = document.querySelector('#go4 div:nth-of-type(1)');
// div3.innerText = kintamasisTrecias;

const div4 = document.querySelector('#go4 div:nth-of-type(2)');
// div4.innerText = kintamasisKetvirtas;

const div5 = document.querySelector('#go4 div:nth-of-type(3)');
// div5.innerText = kintamasisPenktas;

const section_4 = document.querySelector('section#go4');

section_4.style.display = 'flex';
div3.style.height = '40px';
div3.style.width = '40px';
div3.style.backgroundColor = 'pink';
div3.style.borderRadius = '50%';

div4.style.height = '75px';
div4.style.width = '75px';
div4.style.backgroundColor = 'pink';
div4.style.borderRadius = '50%';

div5.style.height = '100px';
div5.style.width = '100px';
div5.style.backgroundColor = 'pink';
div5.style.borderRadius = '50%';

//kaip juos perkelti i viena eilute? -su flex






// function suma(kintamasisPirmas, kintamasisAntras) {
//     return kintamasisPirmas + kintamasisAntras;
// }


// let rezultatas = suma;
// console.log('Suma:', rezultatas);

// span3.innerText = suma;

// let suma;

// let didziausias;

// let maziausias;
// __________________________

// if (A < B) {
//     console.log('B yra didesnis');
// } else if ( A > B ) {
//     console.log('A yra didesnis')
// } else {
//     console.log('lygu');
// }
 
// // const Z = rand(1, 100);
// // const X = rand(1, 100);
// // const Y = rand(1, 100);
 
 
// const Z = 100;
// const X = 200;
// const Y = 200;

// console.log('Z:', Z, 'X:', X, 'Y:', Y);

// if (Z > X) {
//     if (Z > Y) {
//         console.log('Z didziausas');
//     } else if (Z == Y) {
//         console.log('Y ir Z didziausas');
//     } else {
//         console.log('Y didziausas');
//     }
// } else if (X > Z) {
//     if (X > Y) {
//         console.log('X didziausas');
//     } else if (X == Y) {
//         console.log('X ir Y didziausas');
//     } else {
//         console.log('Y didziausas');
//     }
// }
// else if (Z == X) {
//     if (Z > Y) {
//         console.log('Z ir X didziausi');
//     } else if (Z == Y) {
//         console.log('Z, X ir Y lygus 1');
//     } else {
//         console.log('Y didziausas');
//     }
// }



// const tagOne = 1;

// tagOne.innerText = 1;



// 5

const penktaUzduotis = rand (-10, 10);

console.log(penktaUzduotis);

const penktuteUzduotis = rand(-10, 10);

console.log(penktuteUzduotis);

const penktieneUzduotis = rand (-10, 10);

console.log(penktieneUzduotis);

const span51 = document.querySelector('#go5 span:nth-of-type(1)');

span51.innerText = penktaUzduotis;

const span52 = document.querySelector('#go5 span:nth-of-type(2)');

span52.innerText = penktuteUzduotis;

const span53 = document.querySelector('#go5 span:nth-of-type(3)');

span53.innerText = penktieneUzduotis;


// for (let i < 0; i = 0; i > 0) {
//     // bulve = bulve + '<div>' + i + '</div>';

// if (i == 5 || i == 7)
// {
//     penktaUzduotis = penktaUzduotis + `<div style="color:red";>${i}</div>`
// } else {
// penktaUzduotis = penktaUzduotis + `<div>${i}</div>`;
// }

// penktaUzduotis = penktaUzduotis + `<div>${i}</div>`
// }


//kaip nuspalvinti?




// 6 span find

const span6 = document.querySelector('section#go6 [data-amount] span');

span6.innerText = 6;

