console.log('hai');
 

// 1. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.
const gyvuniukai = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const ulBlaBla = document.querySelector('#nr1');
gyvuniukai.forEach(gyvunaiSarase => {
    const panda = document.createElement('li');
    panda.innerText = gyvunaiSarase;
    ulBlaBla.appendChild(panda);
});

// 2. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka.
const abeceliniaiGyvunai = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];
// ------- ka jus siulytumet daryti, kad suprasciau kada koki veiksma irasyt: forEach, paskui createElement tada appendChild?? ar man visus situos zodzius ismokti mintinai ar naudoti google kiekviena karta gavus nauja uzduoti? ----------
abeceliniaiGyvunai.sort();
const antraUzduotis = document.querySelector('#nr2');
abeceliniaiGyvunai.forEach(siaipBelekoksPavadinimasCiaEina => {
    const atsivaizduosPuslapy = document.createElement('li');
    atsivaizduosPuslapy.innerText = siaipBelekoksPavadinimasCiaEina;
    antraUzduotis.appendChild(atsivaizduosPuslapy);
    localeCompare = abeceliniaiGyvunai.sort((a, b) => a.localeCompare(b, 'lt'));


});
// ---------- šuo turetu buti pries vilka. kaip tai padaryti? ----------
// ---- localeCompare = A.sort((a, b) => a.localeCompare(b, 'lt')); ----

// 3. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip

const treciosUzduotiesGyvunaiA = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];
const treciosUzduotiesGyvunaiB = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];
const treciaUzduotis = document.querySelector('#nr3');
const jungiamDuMasyvus = [...treciosUzduotiesGyvunaiA, ...treciosUzduotiesGyvunaiB];
localeCompare = jungiamDuMasyvus.sort((a, b) => a.localeCompare(b, 'lt'));
jungiamDuMasyvus.sort();
jungiamDuMasyvus.forEach(elementasKoks => {
    const gyvunuIvairove = document.createElement('li');
    gyvunuIvairove.innerText = elementasKoks;
    treciaUzduotis.appendChild(gyvunuIvairove);
});

// 4. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.

const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const ketvirtaUzduotis = document.querySelector('#nr4');
A.forEach(gyvunaiApskritimuose => {
    const divukai = document.createElement('div');
    divukai.className = 'gyvunaiMelynuoseApskritimuose';
    divukai.innerText = gyvunaiApskritimuose;
    nr4.appendChild(divukai); 
});



// for (let divusIdedam = 0; divusIdedam < 9; divusIdedam++) {
//     const divukai = document.createElement('div');
//     divukai.innerText = A[divusIdedam];
    
//     section.appendChild(divukai);    
// }





// const divusIdedam = document.createElement('div');
// ketvirtaUzduotis.innerText = (5);

// section.innerText = 1;
// div2.innerText = 2;

// div1.style.height = '100px';
// div1.style.width = '100px';
// div1.style.backgroundColor = 'blue';

// div2.style.height = '100px';
// div2.style.width = '100px';
// div2.style.backgroundColor = 'red';
// div2.style.borderRadius = '50%';









// 5. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.

const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];

const penktaUzduotis = document.querySelector('#nr5');


// 6. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.

const gyvunaiZaliuose = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const sestaUzduotis = document.querySelector('#nr6');

gyvunaiZaliuose.forEach(gyvunaiZaliuoseApskritimuose => {
    const divai = document.createElement('div');
    divai.innerText = gyvunaiZaliuoseApskritimuose;
    nr6.appendChild(divai); 
});


// 7. Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle

const septintosUzduotiesGyvunai = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];

const septintaUzduotis = document.querySelector('#nr7');

septintosUzduotiesGyvunai.forEach(gyvunaiGeltonuoseApskritimuose => {
    for (let raide of gyvunaiGeltonuoseApskritimuose)
        {const spaniukai = document.createElement('span');
        spaniukai.innerText = raide;
    

    spaniukai.style.display = 'inline-block';
    spaniukai.style.backgroundColor = 'yellow';
    spaniukai.style.borderRadius = '50%';
    spaniukai.style.width = '50px';
    spaniukai.style.height = '50px';
    spaniukai.style.lineHeight = '50px';
    spaniukai.style.textAlign = 'center';
    spaniukai.style.margin = '5px';

    septintaUzduotis.appendChild(spaniukai); 
}});












    // spaniukai.className = 'gyvunaiGeltonuoseApskritimuoseIsBMasyvo';







// 8. Html faile sukurkite du ul tagus (tiesiogiai). Į  vieną sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais, kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.

// 9. Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.

// 10. Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun


// const A = [
//     'Bebras',
//     'Zebras',
//     'Vilkas',
//     'Lapė',
//     'Barsukas',
//     'Voverė',
//     'Laukinis katinas',
//     'Šuo',
//     'Naminis katinas',
// ];

// const B = [
//     'Kalakutas',
//     'Višta',
//     'Antis',
//     'Žąsis',
//     'Ančiasnapis'
// ];

// const C = [
//     'Višta',
//     'Gaidys',
//     'Šernas',
//     'Lapė',
//     'Vilkas',
//     'Šuo dingo',
//     'Barsukas',
//     'Voverė',
//     'Šuo',
//     'Naminis katinas',
//     'Laukinis katinas',
//     'Šuo atsirado',
//     'Bebras',
//     'Ožys'
// ];








// 10 uzduociai jei norim, kad jau ten tobulai butu ir neislystu zodziai is ekrano ribu: https://www.w3schools.com/html/html5_canvas.asp
// bet cia sake jei jau labai neturim ka veikt :D