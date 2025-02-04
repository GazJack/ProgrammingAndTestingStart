// let slideIndex = 0;
// const slides = document.querySelectorAll('.card');
// const dots = document.querySelectorAll('.dot');
// const next = document.getElementById('next');
// const prev = document.getElementById('prev');

let slideIndex = 0; // Pradinis skaidrės indeksas
const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let intervalID;


// Rodo skaidrę pagal indeksą
if (slides.length > 0) {
    slides[slideIndex].classList.add('active');
    dots[slideIndex].style.opacity = '0.1';
    // slideIndex++;
}

function showSlides(slideIndex){

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].style.opacity = '0.3';
    });

    // slides[slideIndex].classList.add('active');
    //dots[i].style.opacity = '1';

    slides[slideIndex].classList.add('active');
        dots[slideIndex].style.opacity = '1';

    };


// let intervalID = setInterval(function(){
//     if(slideIndex >= slides.length){
//         slideIndex = 0;
//     }
//     showSlides(slideIndex);
//     slideIndex++;
// }, 3000);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slideIndex = i;
        showSlides(slideIndex)
    })
})

prev.addEventListener('click', () => {
    clearInterval(intervalID);
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
});

// Dešinės rodyklės paspaudimo įvykiai
next.addEventListener('click', () => {
    clearInterval(intervalID);  // Sustabdykite intervalą
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex)
});