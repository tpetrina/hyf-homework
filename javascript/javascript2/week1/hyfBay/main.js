console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

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

    let body = document.querySelector("body");
    body.appendChild(productsUl);
}

renderProducts(products); // This should create the ul and the li's with the individual products details
