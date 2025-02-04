console.log('NamuDarbaiNumerisDu');

function rand(min, max) {
   const minCeiled = Math.ceil(min);
   const maxFloored = Math.floor(max);
   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
   return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

// 1 Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.

const uzduotis1 = document.querySelector('.uzduotis1');
 
const linija = 4; //max 11
 
let H1 = '';

// // arba 1 uzduoti galima taip daryti: 
// let h1 = '';
// let h4 = '';
// let color = 'red';

// // cia bus su atsitiktinem spalvom:
// for (Let i = 0; i < 14; i++) {
// h1 += `<h1 style="color:${randomColor()} ">4</h1>`
// };

// for (Let i = 0; i < 14; i++) {
// h1 += `<h4>1</h4>`
// };

// uzduotis1.style.display = "flex";
// uzduotis1.innerHTML = h1 + h4;



// Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.

const uzduotis2 = document.querySelector('.uzduotis2');

let number = '';

for (let i = 0; i < 44; i++) {
   const randNumber = rand(14,44);

if (randNumber % 4 === 0) {
   number += `<span style="color: red; margin-left: 10px;">${randNumber}</span>`;
} else {
   number += `<span style="color: blue; margin-left: 10px;">${randNumber}</span>`;
}
}

uzduotis2.innerHTML = number;








// //staciakampio viduj nupiesti kvadrateliai puslapyje
// for (let i = 0; i < 11; i++) {

// if (i >= 4) {
// }
//     let H1 = 4;}


//

// const nr1 = document.querySelector('#nr1');
 
// const kiekLegoReikia = 7; //max 11
 
// let sqDivs = '';
 
// //staciakampio viduj nupiesti kvadrateliai puslapyje
// for (let i = 0; i < 11; i++) {

// if (i >= kiekLegoReikia) {
//     break; //nutraukia cikla (for) ir prasoka i pabaiga
// }
//     sqDivs += `<div>`;

// //staciakampiuose atsirado skirtingas rutuliuku skaicius
// for (let j = 0; j < 4; j++) {
//     sqDivs += `<span></span>`;
// if (j > 1 && i % 2 === 0) {
//     break;
// }

// }

// sqDivs += `</div>`

// }
 
// nr1.innerHTML = sqDivs;


// 3 ____ 14 melynu apskritimu

// const div1 = document.querySelector('div:nth-of-type(1)');

// div1.style.height = '100px';
// div1.style.width = '100px';
// div1.style.backgroundColor = 'blue';
// div1.style.borderRadius = '50%';


const nr3 = document.querySelector('#nr3');

let rutuliukai = '';

for (let i = 1; i <= 14; i++) {
 // nr1DivsHtml = nr1DivsHtml + `<div>${i}</div>`; sitas sutrumpintai toliau pereina i +=
 if (i % 0) {
   rutuliukai += `<div>${i}</div>`; //+= reiksme ta pati tik sutrumptinta
 } else {
   //  nr1DivsHtml += `<div style="background-color: blue;">${i}</div>`;
   rutuliukai += `<div style="border-radius: 50%;">${i}</div>`
 }   
//  if (i % 0) {
//    nr1DivsHtml += `<div style="background-color: blue;">${i}</div>`;
//  }
}

nr3.innerHTML = rutuliukai;


// 4

// Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus,
// išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).

const nr4 = document.querySelector('#nr4');

let rutuliai = '';

for (let i = 1; i <= 4; i++) {
   rutuliai += `<div>${i}</div>`;

   if (i==1 || i == 2 || i == 3 || i == 4) {
      rutuliai = rutuliai + `<div style="background-color: red";>${i}</div>`      
   } 

}

nr4.innerHTML = rutuliai;

// 5.Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.

const uzduotis5 = document.querySelector('.uzduotis5');

let table = `<table border = 1 cellpadding = '10'>`;

for (let i = 4; i <= 14; i++) {
   let sum = 4 * i;
   table+=`<tr><td>4*${i}</td>  <td>${sum}</td></tr>`;
};

table += `</table>`;

uzduotis5.innerHTML = table;

// 6. Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm) žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.

const uzduotis6 = document.querySelector('.uzduotis6');

let star = '';

for (let i = 1; i <= 444; i++) {
   star+= '<span>*</span>'
if (i % 44 === 0) {
   star+= `<br/>`
}
};

uzduotis6.innerHTML = star;

// 7. Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).#pamastykKaip

// cia mano bandymas :D

const nr7 = document.querySelector('#nr7');
 
const septinta = 14; //max 11
 
let divukai = '';
 
//staciakampio viduj nupiesti kvadrateliai puslapyje
for (let i = 0; i < 14; i++) {

if (i >= septinta) 
    divukai += `<div></div>`;
}

// ----------------- cia mentoriaus: ---------------------

const uzduotis777 = document.querySelector('.uzduotis777');


let size = 500;
 let kvadratas = '';

 for (let i = 0; i < 14; i++) {
   kvadratas += `<div style=" 
   width: ${size}px;
   height: ${size}px;
   position : absolute;
   background-color: ${randomColor()};
   top: ${(500-size) / 2}px;
   left: ${(500-size) / 2}px;
   "></div>`;
size -= 30; 


};
uzduotis777.style.position = 'relative';
uzduotis777.style.padding = '250px'
uzduotis777.innerHTML = kvadratas;




// let size = 500;
 
// let kvadratas2 = "";
 
// for (let i = 0; i < 14; i++) {
//     kvadratas2 += `<div style="
//     width:${size}px;
//     height:${size}px;
//     position:absolute;
//     background-color:${randomColor()};
//     top:${(500 - size) / 2}px;
//     left:${(500 - size) / 2}px;
//     "></div>`
 
//     size -= 35;
   
// }
 
// uzduotis777.style.position = "relative";
// uzduotis777.innerHTML = kvadratas2;
 






// 8 Iš simbolio &#9632; (kopijuoti visą žalią tekstą su kabliataškiu) 
// sudėliokite žalią kvadratą turintį 41x41 šių simbolių. Kad kvadratas atrodytų 
// “kvadratiškai” panaudokite css stilių ir papildomus tagus. #ciklasCikle -->

// &#9632;

const uzduotis8 = document.querySelector('.uzduotis8');

let kvadratasIsZenklu = ""
 
 
for (let i = 0; i < 41; i++) {
  let row = `<div style="display:grid; grid-template-columns: repeat(41, 1.3rem);">`
 
for (let j = 0; j < 41; j++) {
  row += `<span style= "color: green;">&#9632;</span>`
 
}
row+= `</div>`
kvadratasIsZenklu+= row
}
 
 
uzduotis8.style.position = "relative"
uzduotis8.style.marginTop = "150px"
 
uzduotis8.innerHTML =  kvadratasIsZenklu;
 
// 9.

const uzduotis9 = document.querySelector('.uzduotis9');

let kvadratasSuIstrizainem = '';

let dydis = 41;

for (let i = 0; i < dydis; i++) {
   let bla = `<div style="display:flex">`;


   for (let j = 0; j < dydis; j++) {
      let spalva = '';

      if (i === j || i + j === dydis - 1) {
         spalva = "yellow";
      }
      else {
         spalva = 'green';
      }


      
      bla += `<span style="color: ${spalva}">&#9632;</span>`;
   }
   bla += '</div>';
   kvadratasSuIstrizainem += bla;
}



uzduotis9.innerHTML = kvadratasSuIstrizainem;


