const form = document.getElementById("form")


// function verifyForm(pass1,pass2){

//     if (pass1 == pass2) {
//         return true
//     } else {return false}
// }


document.addEventListener("DOMContentLoaded", function (event) {
    console.log("domcontentloaded")
    document.getElementById("modalBtn").addEventListener("click", function (event) {
        event.preventDefault();

    });
    document.getElementById("enviar-form").addEventListener("click", (event) => {
        event.preventDefault();
        let pass1 = form.contrasena1.value;
        let pass2 = form.contrasena2.value;
        let edad = form.Edad.value
        let check = document.getElementById("terminos").checked;
        console.log(pass1);
        console.log(pass2);
        console.log("submit");


        if (pass1 === pass2) {
            if (check) {
                alert("Muy bien ahora sos maestro pokemon estoy muy orgulloso de tu logro espero que puedas encaminarte por un mundo de aventuras y seas feliz con tus amigos pokemones");
            } else {
                alert("Acepta los terminos maestro")
            }
        } else {
                alert("Pusiste mal la contraseña amigo")
            }

        })
})