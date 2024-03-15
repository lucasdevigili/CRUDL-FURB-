window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 0) {
        header.classList.remove("header");
        header.classList.add("headerSmall");
    } else {
        header.classList.remove("headerSmall");
        header.classList.add("header");
    }
});


 var cadastro = document.getElementById("cadastro");
 var valor = 1;

 if (valor === 0) {
     cadastro.innerHTML = '<a href="/LogIn.html" class="cadastro"><i class="fa-regular fa-user"></i></a>';
 } else if (valor === 1) {
     cadastro.innerHTML = '<a class="userButton"><img src="static/img/Imagem do WhatsApp de 2024-03-07 à(s) 09.21.29_6e6542a2.jpg" alt="user img" class="userImg" onclick="teste()"></a>';
 }

 function teste() {
    alert('teste')
 }

function getItens() {
    var nameProduct = document.querySelector("#nameProduct").value;
    var catProduct = document.querySelector("#category").value;
    var priceProduct = document.querySelector("#price").value;
    var descriptProduct = document.querySelector("#descript").value;

    var itens = {
        nameProduct: nameProduct,
        catProduct: catProduct,
        priceProduct: priceProduct,
        descriptProduct: descriptProduct
    };
    validate(itens);
    return itens;
}

function validate(itens) {
    let statusName = 0
    let statusCategory = 0
    let statusPrice = 0

    if (itens.nameProduct == "") {
        document.getElementById("nameError").innerHTML = "Este item é obrigatório"
        statusName = 0
    } else if (localStorage.getItem(itens.nameProduct) != null) {
        document.getElementById("nameError").innerHTML = "Este item já está cadastrado"
    } else {
        statusName = 1
    }

    if (itens.catProduct == "") {
        document.getElementById("catError").innerHTML = "Este item é obrigatório"
        statusCategory = 0
    } else {
        statusCategory = 1
    }

    if (itens.catProduct == "") {
        document.getElementById("priceError").innerHTML = "Este item é obrigatório"
        statusPrice = 0
    } else {
        statusPrice = 1
    }

    if (statusName == 1 && statusCategory == 1 && statusPrice == 1) {
        add(itens);
    } else {
        console.log("Deu merda");
    }
}

function add(itens) {
    localStorage.setItem(itens.nameProduct, JSON.stringify(itens));
}