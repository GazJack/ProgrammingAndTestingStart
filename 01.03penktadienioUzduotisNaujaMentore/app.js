document.getElementById("registracijosForma").addEventListener("submit", function (e) {
    e.preventDefault(); // Neleidžia iš karto siųsti formos

    // Paima reikšmes
    const vardas = document.getElementById("vardas").value.trim();
    const elpastas = document.getElementById("elpastas").value.trim();
    const amzius = document.getElementById("amzius").value.trim();
    const telnumeris = document.getElementById("telnumeris").value.trim();
    const slaptazodis = document.getElementById("slaptazodis").value;
    const pakartotislaptazodi = document.getElementById("pakartotislaptazodi").value;

    let klaida = false;

    // Vardas tikrinimas
    if (!/^[A-Za-zĄČĘĖĮŠŲŪŽąčęėįšųūž]+$/.test(vardas)) {
        klaida = true;
        document.getElementById("vardasKlaida").textContent = "Vardas gali būti sudarytas tik iš raidžių.";
    } else {
        document.getElementById("vardasKlaida").textContent = "";
    }

    // El. paštas tikrinimas
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(lt|com)$/.test(elpastas)) {
        klaida = true;
        document.getElementById("elpastasKlaida").textContent = "El. paštas turi baigtis .lt arba .com.";
    } else {
        document.getElementById("elpastasKlaida").textContent = "";
    }
    // const email = document.getElementById('email').value;
    // const elpastas = document.getElementById('elpastas').value;
    // if (!elpastas) {
    //     document.getElementById('elpastasKlaida').textContent = 'El. paštas yra privalomas.';
    //     isValid = false;
    // } else {
    //     const emailParts = elpastas.split('@');
    //     if (emailParts.length !== 2 || !emailParts[1].includes('.')) {
    //         document.getElementById('elpastasKlaida').textContent = 'Netinkamas el. pašto formatas. Pvz.: vardas@vardas.lt';
    //         isValid = false;
    //     } 
    // }



    // const elpastas = document.getElementById('elpastas').value;
    // if (!elpastas) {
    //     document.getElementById('elpastasError').textContent = 'E-mail yra privalomas.';
    //     isValid = false;
    // } else {
    //     const elpastasParts = elpastas.split('@');
    //     if (elpastasParts.length !== 2 || !elpastasParts[1].includes('.')) {
    //         document.getElementById('elpastasError').textContent = 'Netinkamas E-mail formatas. Pvz.: vardas@vardas.lt';
    //         isValid = false;
    //     }
    // }
    





    // Telefono numeris tikrinimas
    if (!/^\+\d{8,15}$/.test(telnumeris)) {
        klaida = true;
        document.getElementById("telnumerisKlaida").textContent = "Numeris turi prasidėti + ir būti sudarytas iš skaičių.";
    } else {
        document.getElementById("telnumerisKlaida").textContent = "";
    }

    // Slaptažodžio stiprumo tikrinimas 
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d@$!%*?&.]{8,}$/;
    if (!passwordPattern.test(slaptazodis)) {
        klaida = true;
        document.getElementById("slaptazodisKlaida").textContent = "Slaptažodyje turi būti bent 8 simboliai, didžioji ir mažoji raidė, skaičius ir specialus simbolis.";
    } else {
        document.getElementById("slaptazodisKlaida").textContent = "";
    }
// cia Vitalij veikiantis:
//     if (!password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
//         errors.push("Slaptažodis turi būti bent 8 simbolių ilgio ir turėti bent vieną didžiąją raidę, mažąją raidę, skaičių ir specialų simbolį.");
//     }

    // Pakartotinas slaptažodis tikrinimas
    if (slaptazodis !== pakartotislaptazodi) {
        klaida = true;
        document.getElementById("pakartotislaptazodiKlaida").textContent = "Slaptažodžiai nesutampa.";
    } else {
        document.getElementById("pakartotislaptazodiKlaida").textContent = "";
    }

    // Jei klaidų nėra
    if (!klaida) {
        alert("Registracija sėkminga!");
        this.submit();
    }
});
