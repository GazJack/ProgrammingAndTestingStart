console.log('check');

// tipai:
// Number 0 (numeris)
// String (tekstas - rasosi su kabutem)
// Object (objektas)
// Boolean (logikos reiksme true/false)
// Undefined (neapibrezta)

let A;

console.log(A, '->', typeof A);

const B = 15;

if (B > 10) {
     A = 'Daugiau nei 10'
} else {
     A = 'Ne daugiau nei 10';
}
console.log(A, '->', typeof A);

const R1 = 1 + 2;
const R2 = 1 * 2;
const R3 = 1 / 2;
const R4 = 1 - 2;

console.log(R1, R2, R3, R4);

const R5 = 0.1 + 0.2;

const R5_galutiniam = R5.toFixed(4);

console.log(R5, R5_galutiniam, '->', typeof R5_galutiniam);

const R6 = 7 % 3;

const R7 = parseInt(7 / 3);

console.log(R6. R7);

let R8 = 2;

R8++;  // R8 = R8 +1

console.log(R8);

console.log(R8++);

console.log(R8);

let R9 = 2;

let rezultatas = R9++ * ++R9; // 2 * 4

console.log(rezultatas);

S1 = 'Labas ';
S2 = 'rytas';

const S3 = S1 + S2 + ',';

console.log(S3);

let raideB = 'b';

raideB++;

console.log(raideB, '->', typeof raideB);

const isNulio = 10 / 0;

console.log(isNulio, '->', typeof isNulio);

const be = 'Bebras';

console.log(be[0] + be[1] + be[2] + be[3] + be[4] + be[5]);

console.log(be.length);

const bebras2 = 'Bebras' + 55 + 20;

console.log(bebras2);

// TRUKSTA TEKSTO