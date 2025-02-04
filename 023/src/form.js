import axios from 'axios';

// cia yra musu failas

console.log('Labuks');

const form = document.querySelector('#js-form');

const button = form.querySelector('button');

/*
<input type="text" name="email" placeholder="Email"> ===> input.name = 'email'

data.email = "email value"

data[input.name] = "email value"
*/

button.addEventListener('click', _ => {
    const data = {};

    form.querySelectorAll('input').forEach(input => {
        data[input.name] = input.value;
    });

    console.log(data);    // atvaizduoja visus zodzius ka irasom i formos langelius

    axios.post('http://localhost:3000/form-js', data)
    .then(response => {
        console.log(response);        
    })

    .catch(error => {
        console.error(error);
    });
    
});