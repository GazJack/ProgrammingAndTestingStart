console.log('Ahoi');

const nr1 = document.querySelector('#nr1');
 
const kiekLegoReikia = 7; //max 11
 
let sqDivs = '';
 
//staciakampio viduj nupiesti kvadrateliai puslapyje
for (let i = 0; i < 11; i++) {

if (i >= kiekLegoReikia) {
    break; //nutraukia cikla (for) ir prasoka i pabaiga
}
    sqDivs += `<div>`;

//staciakampiuose atsirado skirtingas rutuliuku skaicius
for (let j = 0; j < 4; j++) {
    sqDivs += `<span></span>`;
if (j > 1 && i % 2 === 0) {
    break;
}

}

sqDivs += `</div>`

}
 
nr1.innerHTML = sqDivs;

// sarasas is 5 skaiciu konsoleje

const arr1 = [1, 2, 3, 4, 'penki'];

console.log(arr1, '->', typeof arr1);

console.log(arr1[2]);

const nr2 = document.querySelector('#nr2');

let animals = '';

//ciklas nuo 0 iki saraso pabaigos
for (let i = 0; i < arr1.length; i++) {
    //paimam skaicius ir zodzius ivardintus [] auksciau
animals += `<div>${arr1[i]}</div>`
}

nr2.innerHTML = animals;



// // console.log('Ahoi');

// const nr1 = document.querySelector('#nr1');
 
 
// let sqDivs = '';
 
// //staciakampio viduj nupiesti kvadrateliai puslapyje
// for (let i = 0; i < 11; i++) {
//     sqDivs += `<div></div>`;

// //konsolej skaiciuku nuo 1 iki 3 atsirado
// for (let j = 0; j<3; j++) {
//     console.log('j:', j+1);
// }

// }
 
// nr1.innerHTML = sqDivs;

