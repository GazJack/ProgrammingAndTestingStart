const uzduotis1 = document.querySelector(".select1");
const uzduotis2 = document.querySelector(".select2");
const uzduotis3 = document.querySelector(".select3");
const uzduotis4 = document.querySelector(".select4");
const uzduotis5 = document.querySelector(".select5");
const uzduotis6 = document.querySelector(".select6");
const uzduotis7 = document.querySelector(".select7");
const uzduotis8 = document.querySelector(".select8");
const uzduotis9 = document.querySelector(".select9");
const uzduotis10 = document.querySelector(".select10");





const rand = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
 
  console.log('ka????');

  if (true/false) {
    
  }

  // kintamasis -> let arba const

 // const skaicius = -5; -> jei reikia konkretu skaiciu irasyt arba:

 const skaicius = rand(-1000, 1000);

 console.log(skaicius); //atvaizduoja konsolej

 if (skaicius > 0) {
    uzduotis1.innerText = `Skaičius ${skaicius} yra teigiamas`    
 }

//else if rasosi pats paskutinis
// else if (){}
// else {}

 else if (skaicius < 0) {
    uzduotis1.innerText = `Skaičius ${skaicius} yra neigiamas`    
 }

 else {
    uzduotis1.innerText = `Skaičius yra nulis`
 }

// jau turejom skaicius tai turim keisti pavadinima

 const skaicius1 = rand(0, 1000);
 
 console.log(skaicius1);

// % liekana, po jo nurodom is kokio skaiciaus norim dalinti ir jei po jo nenorim liekanos rasom === 0

 if (skaicius1 % 2 === 0) {
uzduotis2.innerText = `Skaičius ${skaicius1} yra lyginis`    
 }
 
 else {
    uzduotis2.innerText = `Skaičius ${skaicius1} yra nelyginis`  
 }

// 2 uzduotis
const temp = rand(-30,100);

if (temp <0) {
     uzduotis3.innerText = `Temperatūra ${temp} yra neigiama`
}
else if (temp >= 0 && temp <= 30 ) {
    uzduotis3.innerText = `Temperatūra ${temp} yra tarp nulio ir trisdešimties`
} 
else {
    uzduotis3.innerText = `Temperatūra ${temp} yra virš trisdešimt`
}


// if (temp > 0) {
//     uzduotis3.innerText = `Temperatūra ${temp} yra teigiama`
// }
// else if (temp < 0) {
//     uzduotis3.innerText = `Temperatūra ${temp} yra neigiama`
// }
// else {
//     uzduotis3.innerText = `Temperatūra yra nulis`
// }



// 5: Skaiciu palyginimas
// Aprasymas: sukurk du kintamuosius a ir b. Naudok if, kad palygintum ju reiksmes ir atspausdintum, kuris yra didesnis arba jei jie yra lygus.
// Pavyzdys: Jei a = 10 ir 2 = 20, konsoleje turetu atsirasti tekstas "Skaicius b yra didesnis".

const skaicius5 = rand(1000, 2000);
const skaicius50 = rand(1000, 2000);

console.log(skaicius5, skaicius50);

if (skaicius5 > skaicius50) {
uzduotis5.innerText = `Skaičius ${skaicius5} yra didesnis už ${skaicius50}`    
}
else if (skaicius5 < skaicius50) {
    uzduotis5.innerText = `Skaičius ${skaicius50} yra didesnis už ${skaicius5}`    
}
else {
    uzduotis5.innerText = `Skaičius ${skaicius5} yra lygus ${skaicius50}`
}

// Užduotis 4: Amžiaus tikrinimas
// Aprašymas: Sukurk kintamąjį amzius ir patikrink, ar amžius yra mažesnis nei 18, tarp 18 ir 65, ar virš 65. Atspausdink rezultatą.
// Pavyzdys: Jei amzius = 70, konsolėje turėtų atsirasti tekstas „Asmuo yra pensinio amžiaus“.

// Užduotis 6: Pasiūlymas pirkėjui
// Aprašymas: Sukurk kintamąjį suma. Jei suma mažesnė nei 100, pasiūlyk „Įsigyk daugiau prekių“. Jei suma tarp 100 ir 500, parašyk „Jūs gaunate nuolaidą!“. Jei virš 500, parašyk „Jūs gaunate papildomą dovaną!“.
// Pavyzdys: Jei suma = 250, konsolėje turėtų atsirasti tekstas „Jūs gaunate nuolaidą!“.
 
 
 
 
 
// Užduotis 7: Vardų patikrinimas
// Aprašymas: Sukurk kintamąjį vardas. Jei vardas yra „Jonas“, atspausdink „Labas, Jonai!“, jei „Ona“ – „Labas, Ona!“, o kitu atveju – „Labas, [vardas]!“.
// Pavyzdys: Jei vardas = „Ona“, konsolėje turėtų atsirasti tekstas „Labas, Ona!“.
 
 
 
 
// Užduotis 8: Egzaminų rezultatas
// Aprašymas: Sukurk kintamąjį rezultatas. Jei rezultatas didesnis nei 90, parašyk „Puiku!“, jei tarp 60 ir 90 – „Gerai!“, jei žemiau 60 – „Nepakanka!“.
// Pavyzdys: Jei rezultatas = 85, konsolėje turėtų atsirasti tekstas „Gerai!“.
 
 
 
 
 
// Užduotis 9: Darbo valandos
// Aprašymas: Sukurk kintamąjį valandos. Jei valandos reikšmė tarp 9 ir 17 (imtinai), parašyk „Dabar darbo laikas“, kitu atveju – „Ne darbo laikas“.
// Pavyzdys: Jei valandos = 14, konsolėje turėtų atsirasti tekstas „Dabar darbo laikas“.
 
 
 
 
// Užduotis 10: Studentų balai
// Aprašymas: Sukurk kintamuosius studentas1 ir studentas2. Patikrink, kuris iš jų gavo daugiau balų, ir atspausdink atitinkamą pranešimą.
// Pavyzdys: Jei studentas1 = 75 ir studentas2 = 85, konsolėje turėtų atsirasti tekstas „Studentas 2 gavo daugiau balų“.
 
 