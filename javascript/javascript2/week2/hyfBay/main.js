console.log("Script loaded");

function renderProducts(products) {
    // your code here

    let productsUl = document.createElement("ul");

    products.forEach(product => {
        let productLi = document.createElement("li");

        let header = document.createElement("h1");
        let productPrice = document.createElement("p");
        let productRating = document.createElement("p");

        header.innerHTML = product.name;
        productPrice.innerHTML = `Price : ${product.price}`;
        productRating.innerHTML = `Rating : ${product.rating}`;

        productLi.appendChild(header);
        productLi.appendChild(productPrice);
        productLi.appendChild(productRating);

        productsUl.appendChild(productLi);
    });

    let productsDiv = document.getElementById("products-list");
    productsDiv.innerHTML = "";
    productsDiv.appendChild(productsUl);
}

let sortedProducts = [];

// Searching for products by name
const textBoxInput = document.getElementById("product-name");
textBoxInput.addEventListener("keyup", searchByName);

function searchByName() {
    const inputValue = textBoxInput.value;
    if (maxPriceInput.value) {
        sortedProducts = products.filter(product => product.name.includes(inputValue) && product.price <= maxPriceInput.value);
        renderProducts(sortedProducts);
        return;
    }
    sortedProducts = products.filter(product => product.name.includes(inputValue));
    renderProducts(sortedProducts);
}

// Filter products based on max price
const maxPriceInput = document.getElementById("Max-price");
maxPriceInput.addEventListener("keyup", function () {
    const inputPrice = maxPriceInput.value;
    if (textBoxInput.value) {
        searchByName();
        return;
    }
    sortedProducts = products.filter(product => product.price <= inputPrice);
    renderProducts(sortedProducts);
});

// Sort the products

const sortOptions = document.getElementById("sort-options");
sortOptions.addEventListener("change", function () {
    let sortedList = [];
    if (sortOptions.value === "popular") {
        sortedList = sortedProducts.sort((a, b) => a.rating > b.rating ? -1 : 1);
    } else if (sortOptions.value === "cheap") {
        sortedList = sortedProducts.sort((a, b) => a.price < b.price ? -1 : 1);
    } else if (sortOptions.value === "expensive") {
        sortedList = sortedProducts.sort((a, b) => a.price > b.price ? -1 : 1);
    }
    renderProducts(sortedList);
});

const products = getAvailableProducts();
renderProducts(products);
