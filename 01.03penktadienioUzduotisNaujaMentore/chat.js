document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let isValid = true;
    
    // Vardas
    let name = document.getElementById('name').value;
    if (name.length < 2 || name.length > 30 || !/^[a-zA-Z]+$/.test(name)) {
      document.getElementById('nameError').textContent = 'Vardas turi būti ilgesnis nei 2 simboliai, bet ne ilgesnis nei 30, ir tik iš raidžių.';
      isValid = false;
    } else {
      document.getElementById('nameError').textContent = '';
    }
  
    // El. paštas
    let email = document.getElementById('email').value;
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      document.getElementById('emailError').textContent = 'Įveskite galiojantį el. pašto adresą.';
      isValid = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }
  
    // Amžius
    let age = new Date(document.getElementById('age').value);
    let ageDiff = new Date().getFullYear() - age.getFullYear();
    if (ageDiff < 18 || ageDiff > 120) {
      document.getElementById('ageError').textContent = 'Amžius turi būti tarp 18 ir 120 metų.';
      isValid = false;
    } else {
      document.getElementById('ageError').textContent = '';
    }
  
    // Telefono numeris
    let phone = document.getElementById('phone').value;
    if (!/^\+?\d{1,4}[\s\-]?\(?\d{1,4}?\)?[\s\-]?\d{1,4}[\s\-]?\d{1,4}$/.test(phone)) {
      document.getElementById('phoneError').textContent = 'Telefonas turi atitikti formatą: +xxx xxx xxxxx.';
      isValid = false;
    } else {
      document.getElementById('phoneError').textContent = '';
    }
  
    // Slaptažodis
    let password = document.getElementById('password').value;
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
      document.getElementById('passwordError').textContent = 'Slaptažodis turi būti bent 8 simboliai, su didžiąja ir mažąja raide, skaičiumi ir simboliu.';
      isValid = false;
    } else {
      document.getElementById('passwordError').textContent = '';
    }
  
    // Pakartotinas slaptažodis
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Slaptažodžiai nesutampa.';
      isValid = false;
    } else {
      document.getElementById('confirmPasswordError').textContent = '';
    }
  
    if (isValid) {
      document.getElementById('successMessage').textContent = 'Registracija sėkminga!';
    }
  });
  