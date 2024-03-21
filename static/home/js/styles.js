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
var valor = 1;

updateCadastro();

function updateCadastro() {
    if (valor === 0) {
        registration.innerHTML = '<a href="/login.html" class="registration"><i class="fa-regular fa-user"></i></a>';
    } else if (valor === 1) {
        registration.innerHTML = '<a class="userButton" href="#"><img src="./static/home/css/img/user.jpg" alt="user img" class="userImg" onclick="openModal()"></a>';
    }
}

function closeUser() {
    valor = 0;
    updateCadastro();
    modal.classList.add("modalHidden");
}

function openModal() {
    modal.classList.remove("modalHidden");
}

function modalHidden() {
    modal.classList.add("modalHidden");
}

