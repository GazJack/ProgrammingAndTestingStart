//1. Padaryti mygtuką, kurį paspaudus jis pranyksta.
 
// document.querySelector('#nr1').addEventListener('click', e => {
//     document.querySelector('#nr1').style.backgroundColor = 'darkred';
//     });
    
const btn1 = document.querySelector('#nr1');

// padaro, kad mygtukas isnyktu:
// btn1.addEventListener('click', _ => btn1.style.display = 'none');
// arba
// btn1.addEventListener('click', _ => btn1.style.opacity = '0');

// mygtukas isnyksta ir paspaudus ant jo dar karta vel atsiranda:
// + css: #nr1 {transition: all 1s; opacity: 1;}
btn1.addEventListener('click', _ => {
    btn1.style.opacity == 0 ? btn1.style.opacity = 1 : btn1.style.opacity = 0;
});

// bet teisingiau butu daryti toki isnykstanti ir atsirandanti mygtuka:
const btn2 = document.querySelector('#nr2');

btn2.addEventListener('click', _ => {
    console.log('paspaustas');
    if (btn2.dataset.buttonStatus == 'on') {
        btn2.style.opacity = 0;
        btn2.dataset.buttonStatus = 'off';
    } else {
        btn2.style.opacity = 1;
        btn2.dataset.buttonStatus = 'on';
    }
});

// 2. Sekcijoje nr2 sukurti 9 kvadratus. Paspaudus kvadratą jis turi pakeisti savo spalvą.
 
// cia mano bandymas:

// const nr7 = document.querySelector('#nr7');
 
// const septinta = 14; //max 11
 
// let divukai = '';
 
// for (let i = 0; i < 14; i++) {

// if (i >= septinta) 
//     divukai += `<div></div>`;
// }

// //kitas variantas (ziuret destytojo varianta 01:20):
// document.querySelector('div').addEventListener('click', e => {
//     document.querySelector('div').style.backgroundColor = 'darkred';
//     });

const settings = {
    count: 100,
    size: 100, 
    color1: 'skyblue',
    color2: 'pink'
}

const sqColors = (tagetId, settings) => {
    const target = document.querySelector('#' + targetId);
    const targetWidth = targetWidth;}

for (let i = 0; i < settings.count; i++) {
    const div = document.createElement('div');
    div.style.width = settings.size + 'px';
    div.style.height = settings.size + 'px';
    div.style.backgroundColor = settings.color1;
    div.dataset.status = '1';
    div.addEventListener(settings.event, _ => {
    if (div.dataset.status == '1') {
        div.style.backgroundColor = settings.color2;
        div.dataset.status = '2';
    } else {
        div.style.backgroundColor = settings.color1;
        div.dataset.status = '1';
    }
});
    target.appendChild(div);
};