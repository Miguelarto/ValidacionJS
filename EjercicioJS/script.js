

const validar = document.getElementById('formulario');

function validarEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("error-email");
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailIsValid = emailRegex.test(email);
    if (emailIsValid) {
        console.log("El email es válido.");
    } else {
        console.log("El email es incorrecto.");
        emailError.innerHTML = "El email ingresado no es válido";
        emailError.classList.add("error");
    }

}



function validarPassword() {
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("error-password");

    let passwordIsValid = password.length >= 8;
    if (passwordIsValid) {
        console.log("La contraseña es válida.");
    } else {
        console.log("La contraseña no es válida, debe tener al menos 8 caracteres.");
        passwordError.innerHTML = "La contraseña no es válida, debe tener al menos 8 caracteres.";
        passwordError.classList.add("error");
        
       
    }

}

validar.addEventListener('submit', (e)=>{
    console.log("hola")
    e.preventDefault();
    validarPassword()
    validarEmail()
});




