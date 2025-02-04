console.log('hai');

// sitoj paskaitoj rodos kaip konsolej rodo kiek vnt kartu mes padarem veiksma (skrolinam, spaudinejam mygtuka)

// 1 mygtuko paspaudimas atsivaizduoja konsolej
document.querySelector('#btn1').addEventListener('click' , e => {
    console.log('Button 1 clicked');
});

// 2 mygtuko paspaudimai atsivaizduoja konsolej
document.querySelector('#btn1').addEventListener('dblclick' , e => {
    console.log('Button 1 dbclicked');
});

// sukurus diva atsiranda uzrasas, kuri paspaudus jis veikia kaip mygtukas, bet enatrodo kaip mygtukas
document.querySelector('#btn2').addEventListener('click', e => {
    console.log('Button 2 clicked');
});


// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

// https://developer.mozilla.org/en-US/docs/Web/Events

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


// scrolinasi psl ir skaiciuoja skrolu skaiciu konsoleje:
window.addEventListener('scroll' , e => {
    console.log('Scrolling', window.scrollY);
});

document.querySelector('#btn2').addEventListener('scroll', e => {
    console.log('Scrolling button 2');
});
 
document.querySelector('#btn3').addEventListener('click' , e => {
    e.preventDefault();
    console.log('Link clicked');
});

document.querySelector('.tevas').addEventListener('click', e => {
document.querySelector('.tevas').style.backgroundColor = 'darkred';
});

//e.target -> kai ant jo butent spausi tik jis ir veiks

//     e.stopPropagation(); neleidzia paspaudus ant vaiko nudazyti tevini elementa, nusidazo tik vaikas
document.querySelector('.vaikas').addEventListener('click', e => {
    e.stopPropagation();
    document.querySelector('.vaikas').style.backgroundColor = 'darkblue';
});
 