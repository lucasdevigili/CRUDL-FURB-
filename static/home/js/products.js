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
        location.reload();
    } else {
        console.log("Deu merda");
    }
}

function add(itens) {
    localStorage.setItem(itens.nameProduct, JSON.stringify(itens));

}

function sortTable(option) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector("table");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[option].innerHTML.toLowerCase();
            y = rows[i + 1].getElementsByTagName("TD")[option].innerHTML.toLowerCase();

            if (option === 0) {
                if (x > y) {
                    shouldSwitch = true;
                    break;
                }
            } else {
                if (x < y) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function retrieveAndDisplayItems() {
    var table = document.querySelector("table");

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var item = JSON.parse(localStorage.getItem(key));

        var row = table.insertRow(-1);

        var cellName = row.insertCell(0);
        var cellCategory = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        var cellActions = row.insertCell(3);

        cellName.innerHTML = item.nameProduct;
        cellCategory.innerHTML = item.catProduct;
        cellPrice.innerHTML = item.priceProduct;

        var trashIcon = document.createElement("i");
        trashIcon.className = "fa-solid fa-trash icons";
        trashIcon.addEventListener("click", function() {
            deleteItem(key);
            location.reload();
        });
        cellActions.appendChild(trashIcon);

        var editIcon = document.createElement("i");
        editIcon.className = "fa-solid fa-pen-to-square icons";
        editIcon.addEventListener("click", function() {
            editItem(key);
            location.reload();
        });
        cellActions.appendChild(editIcon);
    }
}

document.getElementById("sortingOption").addEventListener("change", function() {
    var sortOption = this.value;
    var optionIndex;

    if (sortOption === "A - Z" || sortOption === "Z - A") {
        optionIndex = 0;
    } else if (sortOption === "Menor Valor" || sortOption === "Maior Valor") {
        optionIndex = 2;
    }

    sortTable(optionIndex);
});

window.onload = retrieveAndDisplayItems;