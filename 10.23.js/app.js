console.log('Labytis');


//pirma eilute:
const nr1 = document.querySelector('#nr1');

let nr1DivsHtml = '';

for (let i = 1; i <= 7; i++) {
 // nr1DivsHtml = nr1DivsHtml + `<div>${i}</div>`; sitas sutrumpintai toliau pereina i +=
 if (i % 2) {
    nr1DivsHtml += `<div>${i}</div>`; //+= reiksme ta pati tik sutrumptinta
 } else {
    nr1DivsHtml += `<div style="background-color: skyblue;">${i}</div>`;
 }   
}

nr1.innerHTML = nr1DivsHtml;

//antra eilute:
const nr2 = document.querySelector('#nr2');

let nr2DivsHtml = '';

for (let i = 1; i <= 7; i++) {

    if (i % 2) {
       nr2DivsHtml += `<div class="blue">${i}</div>`; //+= reiksme ta pati tik sutrumptinta
    } else {
       nr2DivsHtml += `<div class="pink">${i}</div>`;
    }   
   }

   nr2.innerHTML = nr2DivsHtml;

//trecia eilute:
const word = 'andromeda';

const nr3 = document.querySelector('#nr3');

let nr3DivsHtml = '';

for (let i = 0; i < word.length; i++) {
    nr3DivsHtml += `<div>${word[i]}</div>`;
}

nr3.innerHTML = nr3DivsHtml;


//ketvirta eilute:
const span2 = document.querySelector('#nr4 span:nth-child(2)');

console.log(span2.innerText);

const spans = document.querySelectorAll('#nr4 span');

console.groupCollapsed(spans);

for (let i = 0; i < spans.length; i++) {
    spans[i].style.fontSize = ( i + 1 ) * 10 + 'px';
    spans[i].classList.add('blue');
}









// @ @ @ @ cia turim 7 sunumeruotu rutuliuku linija i sona
// darom toliau su skirtingom spalvom

// console.log('Labytis');

// const nr1 = document.querySelector('#nr1');

// let nr1DivsHtml = ''; ----> cia yra tuscias puodas i kuri desim bulves, del tos tusti skliausteliai

// for (let i = 1; i <= 7; i++) {
//  // nr1DivsHtml = nr1DivsHtml + `<div>${i}</div>`; sitas sutrumpintai toliau pereina i +=
//     nr1DivsHtml += `<div>${i}</div>`; //+= reiksme ta pati tik sutrumptinta
// }

// nr1.innerHTML = nr1DivsHtml;


// @ @ @ @ cia nuspalvinam kas antra rutuliuka skirtinga spalva

// console.log('Labytis');

// const nr1 = document.querySelector('#nr1');

// let nr1DivsHtml = '';

// for (let i = 1; i <= 7; i++) {
//  // nr1DivsHtml = nr1DivsHtml + `<div>${i}</div>`; sitas sutrumpintai toliau pereina i +=
//  if (i % 2) {
//     nr1DivsHtml += `<div>${i}</div>`; //+= reiksme ta pati tik sutrumptinta
//  } else {
//     nr1DivsHtml += `<div style="background-color: skyblue;">${i}</div>`;
//  }   
// }

// nr1.innerHTML = nr1DivsHtml;


// @ @ @ @ cia mes turim 1eilutej vienos spalvos rutuliukus, o antroj eilutej kas antras skirtingos spalvos rutuliukai 
// console.log('Labytis');

// const nr1 = document.querySelector('#nr1');

// let nr1DivsHtml = '';

// for (let i = 1; i <= 7; i++) {
//  // nr1DivsHtml = nr1DivsHtml + `<div>${i}</div>`; sitas sutrumpintai toliau pereina i +=
//  if (i % 2) {
//     nr1DivsHtml += `<div>${i}</div>`; //+= reiksme ta pati tik sutrumptinta
//  } else {
//     nr1DivsHtml += `<div style="background-color: skyblue;">${i}</div>`;
//  }   
// }

// nr1.innerHTML = nr1DivsHtml;


// const nr2 = document.querySelector('#nr2');

// let nr2DivsHtml = '';

// for (let i = 1; i <= 7; i++) {

//     if (i % 2) {
//        nr2DivsHtml += `<div class="blue">${i}</div>`; //+= reiksme ta pati tik sutrumptinta
//     } else {
//        nr2DivsHtml += `<div class="pink">${i}</div>`;
//     }   
//    }

//    nr2.innerHTML = nr2DivsHtml;