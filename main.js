// obtenemos los inputs de ambos formularios
const name1 = document.getElementById("name1");
const lastname1 = document.getElementById("lastname1");
const birthdate1 = document.getElementById("birthdate1");
const name2 = document.getElementById("name2");
const lastname2 = document.getElementById("lastname2");
const birthdate2 = document.getElementById("birthdate2");

const form1 = document.getElementById("form-cont1");
form1.addEventListener("change", () => {
    const birthdateInput = document.getElementById("birthdate1");
    const birthdate = new Date(birthdateInput.value);
    const now = new Date();
    const diffMs = now - birthdate;
    const age = Math.floor(diffMs / (365 * 24 * 60 * 60 * 1000));

    name2.value = name1.value;
    lastname2.value = lastname1.value;
    birthdate2.value = birthdate1.value;
    if (age < 18) {
        alert("Tienes que ser mayor de edad :P. Tienes " + age + " años.");
    } else if (age < 0) {
        alert("Tienes que ingresar una fecha valida.");
    }
});
