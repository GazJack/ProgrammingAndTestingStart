const count = document.querySelector('.count');
const subtract = document.querySelector('.subtract');
const reset = document.querySelector ('.reset');
const add = document.querySelector('.add');

// pirma rasom veiksma, paskui funkcija
// galima rasyti arba count.innerHTML arba count.textContent
// su situo kodu prisideda kaip stringai:
// add.addEventListener('click', function(){
//     count.innerHTML +=1
// });

// su situo kodu prisipliusuoja skaiciai:
add.addEventListener('click', () => {
    count.innerHTML++
setColor();
});

subtract.addEventListener('click', function(){
    count.innerHTML--
    setColor();
});

reset.addEventListener('click', function(){
    count.innerHTML = 0
    setColor();
});

function setColor() {

    const reiksme = Number(count.innerHTML);

    if (reiksme < 0) {
        count.style.color = 'red';        
    } else {
        if (reiksme == 0) {
        count.style.color  = 'white';        
    }
    else if 
        (reiksme > 0) {
        count.style.color  = 'green';
        }
    }
};
