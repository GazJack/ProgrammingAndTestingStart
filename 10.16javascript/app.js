console.log('Hello, Bebrai!');

console.log( 1 * 3 );

const manoPirmasSkaicius = 1;
const manoAntrasSkaicius = 2;

let manoPirmojiSuma = manoPirmasSkaicius + manoAntrasSkaicius;

manoPirmojiSuma = manoPirmojiSuma + 100;

{
    let manoPirmojiSuma = 'Labas';
    console.log(manoPirmojiSuma)

{
    let manoPirmojiSuma = 'Viso gero';
    console.log(manoPirmojiSuma, typeof manoPirmojiSuma);

}
}

console.log(manoPirmojiSuma, typeof manoPirmojiSuma);

const as = {};

as.vardas = 'Jonas';
as.pavarde = 'Jonaitis';
// konstantos as negalima keisti, bet pavarde galima keisti ir ta kuri yra naujausiai parasyta taip ji ir atsivaizduos
as.pavarde = 'Petraitis';

as.apie = {};

as.apie.amzius = 20;
as.apie.miestas = 'Palanga';

console.log(as, typeof as);

const ManoH1 = document.querySelector('h1');

ManoH1.innerText = manoPirmojiSuma;

ManoH1.style.color = 'crimson';

// console.log(ManoH1);




// skaicius rasom be kabuciu, o tekstus i viengubas kabutes

// var manoPirmojiSuma = 'Labas';

// console.log('%c' + manoPirmojiSuma, 'color: red; font-size: 20px');

// var, let, const
// tik var nenaudojam, nes cia pasenes reikalas

