console.log('app.js');

function getRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floow(max);
    return Math.floor(Math.random)() * 
    (maxFloored - minFloored)
}


// 1. Sukurti funkciją, kuri priima 2 kintamuosius ir grąžina jų didesnį.
// salyga(a > b) klaustukas visada? jei salyga yra true bus irasomas atsakymas iskart po klaustuko, o jei false atsakymas bus parasytas esantis antras po klaustuko (po dvitaskio)
const function1 = (a, b) => {
    const rez = (a > b) ? a : b;
    return rez;
}
// jei taip irasysim tada 25 konsolej atsivaizduos: 
// console.log(function1(25, 18));

console.log(function1(1, 18));

// cia tas pats tik parasyta su ifais:
// const functionif = (a, b) => {
//     if (a > b) {
//         return a;        
//     } else {   
//         return b;
//     }
// }

// 2. Sukurti funkciją, kuri priima 2 stringus ir grąžina trumpesnį.
const function2 = (a, b) => {
    if (a.length < b.length) {
        return a;
    }
    return b;
}

console.log(function2('ilgesnis', 'trumpas'));


// 3. Sukurti funkciją, kuri priima 2 kintamuosius. 
// Jeigu didesnis pirmas grąžina 1, jeigu didesnis antras 
// grąžina -1, jeigu lygūs grąžina 0.
 
const fun3 = (a, b) => {
    if (a > b ) {
        return 1;
    } else if (b > a){
        return -1;
    }
        return 0;
}
console.log(fun3(8, 8));
 
//  // arba nauju budu:
//  const fun31 = (a, b) => {
//     return a === b ? 0 : (a > b ? 1 : -1)
// } 
// console.log(fun31(25,88));


// nauji bairiai be return, nes jei rasom vienoj eilutej return pasidaro automatiskai:
function funSum1(a, b) {
    return a + b;
}
 
const funSum2 = function (a, b) {
    return a + b;
}
 
const funSum3 = (a, b) => {
    return a + b;
}
 
const funSum4 = (a, b) => a + b;
 
 
console.log(funSum4(2, 3));


// sekantis:
function funBig1(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig2 = function (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig3 = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig4 = (a, b) => a > b ? a : b;

// nezinau kaip teisingai irasyt cia: console.log(funBig4());

// console.log(funBig4());

// ketvirtas budas:
function funStrLen1(a) {
    return a.length;
}
 
const funStrLen2 = function (a) {
    return a.length;
}
 
const funStrLen3 = (a) => {
    return a.length;
}
 
const funStrLen4 = a => a.length;
 
// bla

 
function FunReturnLabas1() {
    return 'labas';
}
 
const FunReturnLabas2 = function () {
    return 'labas';
}
 
const FunReturnLabas3 = () => {
    return 'labas';
}
 
const FunReturnLabas4 = () => 'labas';
 
console.log(FunReturnLabas4());

// dar

const fun3sum1 = (a, b, c = 20) => {
    return a + b + c;
}
 
// console.log(fun3sum1(1));
console.log(fun3sum1(1, 2));
console.log(fun3sum1(1, 2, 3));
 

// const funSumMany1 = (a, b, ...rest) => {
//     console.log(rest);
//     return a + b;
// }
 
 
// console.log(funSumMany1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
 
// dar

const funSumMany1 = (a, b, ...rest) => {
    console.log(rest);
 
    let sumAll = 0;
    for (let i = 0; i < rest.length; i++) {
        sumAll += rest[i];
       
    }
    return a + b + sumAll;
}
 
console.log(funSumMany1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
