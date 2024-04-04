// Aumentar ou diminuir o tamanho do header no scroll
window.addEventListener("scroll", function () {
    if (document.body.clientWidth <= "900px") {
        return;
    }

    var header = document.getElementById("header");
    var modal = document.getElementById("modal");

    if (window.scrollY > 0) {
        header.classList.remove("header");
        header.classList.add("headerSmall");
        modal.classList.add("modalHidden");
    } else {
        header.classList.remove("headerSmall");
        header.classList.add("header");
    }
});

// Colocar a foto de perfil caso esteja logado
var registration = document.getElementById("registration");
var valor = localStorage.getItem("isLoggedIn");

updateCadastro();

setInterval(updateCadastro, 1000);

function updateCadastro() {
    valor = localStorage.getItem("isLoggedIn");

    if (valor === "1") {
        registration.innerHTML = '<a class="userButton" href="#"><img src="./static/home/css/img/user.jpg" alt="user img" class="userImg" onclick="openModal()"></a>';
    } else {
        registration.innerHTML = '<a href="/login.html" class="registration"><i class="fa-regular fa-user"></i></a>';
    }
}

function closeUser() {
    localStorage.setItem("isLoggedIn", "0");
    modal.classList.add("modalHidden");
}

function openModal() {
    modal.classList.remove("modalHidden");
}

function modalHidden() {
    modal.classList.add("modalHidden");
}