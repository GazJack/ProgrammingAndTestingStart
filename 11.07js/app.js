console.log('halo');

const numbers = [-150, 410, 104, 258];

// Atspausdinti visus masyvo skaičius ul tage nr1, įdėtus į <li> elementus nuo didžiausio iki mažiausio.
 
// const nr1 = document.querySelectorAll('#nr1 div');

//  pasirenkam
const ul = document.querySelector('#nr1');
// issirusiuojam masyva
const numbersSorted = numbers.sort((a, b) => b - a);
 // dedam masyva i li taga 
numbersSorted.forEach(number => {
    // pati li elementa idedam i ul

    const li = document.createElement('li');
    li.innerText = number;
    ul.appendChild(li);
});
 
//2. Html'e nupiešti kvadratą. Paspaudus ant kvadrato jis virsta į apskritimą. Paspaudus dar kartą, vėl tampa kvadratu ir t.t.
 
// const div1 = document.querySelector('div:nth-of-type(1)');

// div1.style.height = '100px';
// div1.style.width = '100px';
// div1.style.backgroundColor = 'blue';



const div = document.createElement('div');
// cia mes duodam kaip jis atrodo dabar: su raudonu ar zaliu megstiniu, o ne vien tik su maike
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'black';
div.style.transition = 'border-radius 0.5s';
// div.style.borderRadius = '0px';
div.dataset.figurosBusena = 'kvadratas';
 
document.body.appendChild(div);
// cia jau zinom, kad jis yra su megstiniu tik atradinejam su kokiu tikslaii megstiniu pagal tai kas mums duota auksciau
div.addEventListener('click', _ => {
    if (div.dataset.figurosBusena === 'kvadratas') {
        div.style.borderRadius = '50%';
        div.dataset.figurosBusena = 'rutulys';
    } else {
        div.style.borderRadius = '0px';
        div.dataset.figurosBusena = 'kvadratas';
    }
});
 
 







//3. Sekcijoje nr2 įrašius tekstą į input laukelį ir paspaudus mygtuką, tas tekstas atsiranda sekcijoje nr2, virš input laukelio.
 
// cia kaip suprantu mes vis dar duodam ka jis turi:
const input = document.querySelector('#teksto-laukelis');
 
const h1 = document.querySelector('h1');
 
const button = document.querySelector('#mygtukas');
 
button.addEventListener('click', _ => {
    h1.innerText = input.value;
    input.value = '';
});
 

// Man tai sunkiausia dalis, suprast kada hardcodint galima kada ne 
// kuom javascript siriasi kintamojo logika nuo kintamojo reiksmes?
// „ChatGPT“ pasakė:
// ChatGPT
// JavaScript'e yra svarbus skirtumas tarp kintamojo logikos ir kintamojo reikšmės. Tai dvi skirtingos sąvokos, kurios susijusios su tuo, kaip JavaScript interpretuoja kintamąjį ir jo reikšmę.

// Kintamojo reikšmė – tai yra faktinė reikšmė, kurią kintamasis saugo. Pvz., jei turime kintamąjį let x = 10;, tai reikšmė yra 10.

// Kintamojo logika – tai yra tai, kaip JavaScript interpretuoja kintamojo reikšmę, kai ji naudojama sąlyginiuose patikrinimuose (pvz., if teiginiuose) arba kituose kontekstuose, kur reikalingas loginis vertinimas. Kai JavaScript tikrina, ar kintamasis yra „tiesa“ arba „melas“ (truthy arba falsy), jis naudoja logikos vertinimą.

// Kaip JavaScript įvertina logiką?
// JavaScript klasifikuoja reikšmes į truthy (tiesos) ir falsy (melagingos):

// Falsy reikšmės (vertinamos kaip „melagingos“):
// false
// 0
// "" (tuščias stringas)
// null

// undefined
// NaN
// Visos kitos reikšmės laikomos truthy (vertinamos kaip „tiesa“), net jei tai yra objektai, ne tušti stringai ir t.t.

// Pavyzdžiai:
// javascript
// Kopijuoti kodą
// let x = 0;
// if (x) {
//   console.log('x yra truthy');
// } else {
//   console.log('x yra falsy');  // Išves: x yra falsy
// }

// let y = "hello";
// if (y) {
//   console.log('y yra truthy');  // Išves: y yra truthy
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


const mas1 = [-45, 78, -98, 4, 87, -1];

// paskaičiuoti visų masyvo elementų sumą ir ją atspausdinti

const suma = mas1.reduce((total, num) => total + num, 0);

console.log(suma);


// surasti ir atspausdinti mažiausią masyvo skaičių with reduce

const min = mas1.reduce((min, num) => min < num ? min : num, mas1[0]);

console.log(min);

// surasti ir atspausdinti mažiausią teigiamą masyvo skaičių with reduce

const minPositive = mas1.reduce((min, num) => num > 0 && num < min ? num : min, Infinity);

console.log(minPositive);


// surasti ir atspausdinti mažiausią masyvo skaičių, kuris yra didesnis nei 10 with reduce

const minDidesnisUz10 = mas1.reduce((min, num) => num > 10 && num < min ? num : min, Infinity);

console.log(minDidesnisUz10);


const mas2 = ['antis', 'višta', 'povas', 'kiaušas', 'puodas', 'šakė'];


// surasti ir atspausdinti ilgiausią žodį masyve with reduce

const ilgiausias = mas2.reduce((ilgiausias, zodis) => zodis.length > ilgiausias.length ? zodis : ilgiausias, '');

console.log(ilgiausias);

// surasti ir atspausdinti trumpiausią žodį masyve with reduce

const trumpiausias = mas2.reduce((trumpiausias, zodis) => zodis.length < trumpiausias.length ? zodis : trumpiausias, mas2[0]);

// surasti ir atspausdinti trumpiausią, bet ilgesnį nei 5 simboliai, žodį masyve with reduce

const trumpiausiasDidesnisUz5 = mas2.reduce((trumpiausias, zodis) => {
    return (zodis.length < trumpiausias.length && zodis.length > 5) ? zodis : trumpiausias
}, mas2.find(zodis => zodis.length > 5));

console.log(trumpiausiasDidesnisUz5);

const temp1 = mas2.filter(zodis => zodis.length > 5);
const trumpiausiasDidesnisUz5WithFilter = temp1.reduce((trumpiausias, zodis) => zodis.length < trumpiausias.length ? zodis : trumpiausias, temp1[0]);

console.log(trumpiausiasDidesnisUz5WithFilter);



let trumpiausiasDidesnisUz5WithForeache = mas2.find(zodis => zodis.length > 5);

mas2.forEach(zodis => {
    if (zodis.length < trumpiausiasDidesnisUz5WithForeache.length && zodis.length > 5) {
        trumpiausiasDidesnisUz5WithForeache = zodis;
    }
});

console.log(trumpiausiasDidesnisUz5WithForeache);


let trumpiausiasDidesnisUz5WithForOnly = mas2[0];

for (let i = 0; i < mas2.length; i++) {
    if (mas2[i].length > 5) {
        trumpiausiasDidesnisUz5WithForOnly = mas2[i];
    }
}

for (let i = 0; i < mas2.length; i++) {
    if (mas2[i].length < trumpiausiasDidesnisUz5WithForOnly.length && mas2[i].length > 5) {
        trumpiausiasDidesnisUz5WithForOnly = mas2[i];
    }
}

console.log(trumpiausiasDidesnisUz5WithForOnly);


const find = mas2.find(zodis => zodis.length > 16);
const filter = mas2.filter(zodis => zodis.length > 16);

console.log('find', find);
console.log('filter', filter);