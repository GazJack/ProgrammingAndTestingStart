document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    let name = document.forms["regForm"]["name"].value;
    let email = document.forms["regForm"]["email"].value;
    let age = document.forms["regForm"]["age"].value;
    let phone = document.forms["regForm"]["phone"].value;
    let password = document.forms["regForm"]["password"].value;
    let confirmPassword = document.forms["regForm"]["confirmPassword"].value;
    let errors = [];

    // Vardo patikra
    if (!name.match(/^[a-zA-Z]{3,30}$/)) {
        errors.push("Vardas turi būti nuo 3 iki 30 raidžių be skaičių ir specialių simbolių.");
    }

    // El. pašto patikra
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        errors.push("Neteisingas el. pašto formatas.");
    }

    // Amžiaus patikra
    if (age < 18 || age > 120) {
        errors.push("Amžius turi būti tarp 18 ir 120 metų.");
    }

    // Telefono numerio patikra
    if (!phone.match(/^\+\d{3} \d{3} \d{5}$/)) {
        errors.push("Neteisingas telefono numerio formatas. Reikalingas formatas: +xxx xxx xxxxx.");
    }

    // Slaptažodžio patikra
    if (!password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        errors.push("Slaptažodis turi būti bent 8 simbolių ilgio ir turėti bent vieną didžiąją raidę, mažąją raidę, skaičių ir specialų simbolį.");
    }

    // Pakartotinio slaptažodžio patikra
    if (password !== confirmPassword) {
        errors.push("Slaptažodžiai nesutampa.");
    }

    if (errors.length > 0) {
        document.getElementById("errorMsg").innerHTML = errors.join("<br>");
    } else {
        document.getElementById("errorMsg").innerHTML = "Sėkmingai užregistruota!";
    }
});