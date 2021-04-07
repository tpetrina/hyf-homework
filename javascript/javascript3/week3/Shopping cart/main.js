const productsUl = document.getElementById("ul");
const Cart = document.querySelector(".Shopping-basket");
const selectElement = document.getElementById("product-options");
const addButton = document.getElementById("add-to-cart");
const totalPrice = document.getElementById("total");
const currencyInput = document.getElementById("currency");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(currency) {
        console.log(currency);
        if (currency === "EUR") {
            return this.price * 0.13;
        } else if (currency === "AUD") {
            return this.price * 0.21;
        } else if (currency === "USD") {
            return this.price * 0.16;
        } else if (currency === "DKK") {
            return this.price * 1;
        }
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        console.log(product);
        this.products.push(product);
    }

    removeProduct(product) {
        this.products = this.products.filter(item => item !== product);
    }

    searchProduct(productName) {
        productName = productName.trim().toLocaleLowerCase();
        return this.products.filter(product => product.name === productName);
    }

    getTotal(selectedCurrency) {
        return this.products.reduce((accumulator, product) => accumulator + product.convertToCurrency(selectedCurrency), 0);
    }

    renderProducts(selectedCurrency) {

        productsUl.innerHTML = "";
        Cart.style.visibility = "visible";
        this.products.forEach(product => {
            const productLi = document.createElement("li");
            productLi.classList.add("list-item");
            productLi.innerHTML = `Name: ${product.name}<br/>Price: ${product.convertToCurrency(selectedCurrency)}`;
            totalPrice.innerHTML = `Total price: ${this.getTotal(selectedCurrency)}`;

            const removeButton = document.createElement("button");
            removeButton.innerText = "Remove";
            productLi.appendChild(removeButton);
            productsUl.appendChild(productLi);
            removeButton.addEventListener("click", () => {
                this.removeProduct(product);
                totalPrice.innerHTML = `Total price: ${this.getTotal(selectedCurrency)}`;
                this.renderProducts(selectedCurrency);
            })
        })

    }

    getUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor((Math.random() * 10) + 1)}`)
            .then(response => response.json())
            .then((data) => {
                document.getElementById("username").innerHTML = `Welcome ${data.username}`;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const shoppingCart = new ShoppingCart();
shoppingCart.getUser();

let myProducts = [
    new Product("flat-screen", 5000),
    new Product("Monitor", 3000),
    new Product("PC", 2500),
    new Product("playstation", 6000),
    new Product("keyboard", 600),
    new Product("speaker", 2600),
    new Product("cable", 400),
    new Product("adapter", 500),
    new Product("charger", 100),
    new Product("game controller", 200)
];

function renderProductsDropDown() {
    myProducts.forEach((product) => {
        const option = document.createElement("option");
        option.innerHTML = `${product.name}`;
        option.value = `${product.name}`;
        selectElement.appendChild(option);
    });
}
renderProductsDropDown();

addButton.addEventListener("click", () => {
    if (!selectElement.value) {
        alert("Please select a product!");
        return;
    }
    const product = myProducts.find(product => {
        return product.name === selectElement.value;
    })
    shoppingCart.addProduct(product);
    shoppingCart.renderProducts(currencyInput.value);
});

currencyInput.addEventListener("change", () => {
    shoppingCart.renderProducts(currencyInput.value);
})