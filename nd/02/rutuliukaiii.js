console.log('rutuliukai rutuliai');

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

for (let i = 0; i < 444; i++) {
    const rutuliukaiRutuliukuose = document.createElement('div');
    rutuliukaiRutuliukuose.className = 'circle';
    rutuliukaiRutuliukuose.style.backgroundColor = randomColor();
    const rutuliukaiRutuliukuoseDydis = rand(44, 144);
    rutuliukaiRutuliukuose.style.width = `${rutuliukaiRutuliukuoseDydis}px`;
    rutuliukaiRutuliukuose.style.height = `${rutuliukaiRutuliukuoseDydis}px`;
    const positionX = rand(0, screenWidth - rutuliukaiRutuliukuoseDydis);
    const positionY = rand(0, screenHeight - rutuliukaiRutuliukuoseDydis);
    rutuliukaiRutuliukuose.style.left = `${positionX}px`;
    rutuliukaiRutuliukuose.style.top = `${positionY}px`
    document.body.appendChild(rutuliukaiRutuliukuose);
}



// for (let i = 0; i < 444; i++) {
//     const rutuliukaiRutuliukuose = document.createElement('div');
//     rutuliukaiRutuliukuose.className = 'circle';
//     rutuliukaiRutuliukuose.style.backgroundColor = randomColor();
//     const rutuliukaiRutuliukuoseDydis = rand(44, 144);
//     rutuliukaiRutuliukuose.style.width = `${rutuliukaiRutuliukuoseDydis}px`;
//     rutuliukaiRutuliukuose.style.height = `${rutuliukaiRutuliukuoseDydis}px`;
//     const positionX = rand(0, screenWidth);
//     const positionY = rand(0, screenHeight);
//     rutuliukaiRutuliukuose.style.left = `${positionX}px`;
//     rutuliukaiRutuliukuose.style.top = `${positionY}px`
//     document.body.appendChild(rutuliukaiRutuliukuose);
// }



