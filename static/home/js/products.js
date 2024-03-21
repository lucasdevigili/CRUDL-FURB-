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
    document.getElementById("nameError").innerHTML = ""
    document.getElementById("catError").innerHTML = ""
    document.getElementById("priceError").innerHTML = ""

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