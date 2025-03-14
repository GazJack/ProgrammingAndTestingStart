const size = 'S';

if (size === 'S') {
    console.log('S');
}
if (size === 'S' || size === 'M') {
    console.log('M');
}
if (size === 'S' || size === 'M' || size === 'L') {
    console.log('L');
}
if (size === 'S' || size === 'M' || size === 'L' || size === 'XL') {
    console.log('XL');
}

// tas pats rezultatas tik kitoks uzrasymas (su switch);
switch (size) {
    case 'S':
        console.log('S');
    case 'M':
        console.log('M');
    case 'L':
        console.log('L');
    case 'XL':
        console.log('XL');
}

const letter = 'D';

//kitas pavyzdys su A, B, C:
if (letter === 'A') {
    console.log('A');
} else if (letter === 'B') {
    console.log('B');
} else if (letter === 'C') {
    console.log('C');
} else {
    console.log('D');
}

// tas pats su switch:
// jei nebutu break jis paimtu visas raides.
switch (letter) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    default:
        console.log('D');
        break;
}

console.log(1 + '1');
console.log(1 - '1');
console.log(1 - true);
console.log(1 + true);

while (true) {
    console.log('hakalakala');
    break;
}


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let moneta;

do {
    const moneta = rand(0, 1) ? 'Skaicius' : 'Herbas';
    console.log(moneta);

} while (moneta === 'S');

/* invert

== <---> !=
=== <---> !==
> <---> <=
< <---> >=
||
<---> &&

*/

let moneta1;
let moneta2;
    // saugikli rekomenduojama isideti visada, kad neuzluztu kompas nuo amzino ciklo (galim irasyti while (true) patikrinimui arba irasyti pazymetus ir palikti juos kode:
    // sita irasom --->
    let saugiklis = 50;

do {
    moneta1 = rand(0, 1) ? 'S' : 'H';
    moneta2 = rand(0, 1) ? 'S' : 'H';
    console.log(moneta1, moneta2);

    // sita irasom i {} belekurioj vietoj --->
    if (--saugiklis < 0) {
        console.log('Boom');
        break;
    }

    // } while (true);

} while (moneta1 != 'H' || moneta2 != 'H');

// cia apie Jona reikia iklijuoti

let jonasTuri = 0;
 
const mociuteDave = rand(300, 700);
 
console.log("mociute dave: " + mociuteDave)

jonasTuri += mociuteDave;
 
console.log('po gimtadienio:', jonasTuri);
 
while (jonasTuri <= 500) {
    console.log('Jonas važiuoja');
    const uzdirbo = rand(20, 100);
    jonasTuri += uzdirbo;
}
 
console.log(jonasTuri);
 
// for...in:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for...off:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

const masyvas = ['blue', 'red', 'green', 'yellow', 'black', 'white'];

for (let i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i]);    
}

for (let i in masyvas) {
    console.log(masyvas[i]);    
}

for (let color of masyvas) {
    console.log(color);    
}

const objektas = {
    color: 'blue',
    weight: 100,
    height: 200,
    width: 300
};
 
for (let kintamasis in objektas) {
    console.log(kintamasis, objektas[kintamasis]);
    
}