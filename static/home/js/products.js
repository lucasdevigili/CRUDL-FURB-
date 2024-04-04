const tbody = document.querySelector('#tbody');
const nameProduct = document.querySelector("#nameProduct");
const catProduct = document.querySelector("#category");
const priceProduct = document.querySelector("#price");
const descriptProduct = document.querySelector("#descript");
const btn = document.querySelector('#btn');

let products = [];
let id;

function initializeProducts() {
    products = getProductsDB();
}

function goUp(index = 0) {
    window.scrollTo({
        top: 70,
        behavior: "smooth"
    });
    nameProduct.value = products[index].name;
    catProduct.value = products[index].category;
    priceProduct.value = products[index].price;
    descriptProduct.value = products[index].description;
    id = index;
}

function deleteProduct(index) {
    if (index >= 0 && index < products.length) {
        products.splice(index, 1);
        setProductsDB();
        loadProducts();
    } else {
        console.error("Índice inválido!");
    }
}

function insertProduct(product, index) {
    let tr = tbody.querySelector(`tr[data-index="${index}"]`);

    if (!tr) {
        tr = document.createElement('tr');
        tr.setAttribute('data-index', index);
        tbody.appendChild(tr);
    }

    tr.innerHTML = `
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        <td>
            <div class="icons">
                <i onclick="deleteProduct(${index}); return false;" class="fa-solid fa-trash"></i>
                <i onclick="goUp(${index}); return false;" class="fa-solid fa-pen-to-square"></i>
            </div>
        </td>
    `;
}

btn.onclick = e => {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("catError").innerHTML = "";
    document.getElementById("priceError").innerHTML = "";

    let statusName = 0;
    let statusCategory = 0;
    let statusPrice = 0;

    if (nameProduct.value == "") {
        document.getElementById("nameError").innerHTML = "Este item é obrigatório";
        statusName = 0;
    } else {
        statusName = 1;
    }

    if (catProduct.value == "") {
        document.getElementById("catError").innerHTML = "Este item é obrigatório";
        statusCategory = 0;
    } else {
        statusCategory = 1;
    }

    if (priceProduct.value == "") {
        document.getElementById("priceError").innerHTML = "Este item é obrigatório";
        statusPrice = 0;
    } else {
        statusPrice = 1;
    }

    if (statusName == 1 && statusCategory == 1 && statusPrice == 1) {
        if (id !== undefined) {
            products[id].name = nameProduct.value;
            products[id].category = catProduct.value;
            products[id].price = priceProduct.value;
            products[id].description = descriptProduct.value;
            
            nameProduct.value = "";
            catProduct.value = "";
            priceProduct.value = "";
            descriptProduct.value = "";
        } else {
            if (products.some(product => product.name === nameProduct.value)) {
                document.getElementById("nameError").innerHTML = "Este item já está cadastrado";
                return;
            }

            products.push({ name: nameProduct.value, category: catProduct.value, price: priceProduct.value, description: descriptProduct.value });
            
            nameProduct.value = "";
            catProduct.value = "";
            priceProduct.value = "";
            descriptProduct.value = "";
        }
    } else {
        console.log(Error);
    }

    setProductsDB();
    loadProducts();
    id = undefined;
}
function loadProducts() {
    initializeProducts();
    tbody.innerHTML = "";
    products.forEach((product, index) => {
        insertProduct(product, index);
    });
}


const getProductsDB = () => JSON.parse(localStorage.getItem('dbProducts')) ?? [];
const setProductsDB = () => localStorage.setItem('dbProducts', JSON.stringify(products));

loadProducts();