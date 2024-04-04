function validate() {
    document.getElementById("emailError").innerHTML = ""
    document.getElementById("passwordError").innerHTML = ""
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var regEX = /\S+@\S+\.\S+/;

    let statusEmail = 0
    let statusPassword = 0

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Este item é obrigatório"
    } else {
        if (!regEX.test(email)) {
            document.getElementById("emailError").innerHTML = "Email inválido!"
        } else {
            statusEmail = 1
        }
    }
    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Este item é obrigatório"
    } else {
        statusPassword = 1
    }

    if (statusEmail === 1 && statusPassword === 1) {
        localStorage.setItem("isLoggedIn", "1");
        const homePath = `${window.location.origin}/Home.html`;
        window.location.href = homePath
    }
}

function reload() {
    window.location.reload();
}