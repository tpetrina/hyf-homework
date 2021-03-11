/**
 * Create a site where a user can search for any word.
 * When searching a word the application will find a gif using the searched word
 */

const apiKey = "bBtRWXZkGjwHe4foBOekmvNNANNdaCzc";
const searchGifInput = document.getElementById("search-box");
const gifNumberInput = document.getElementById("gif-number");
const searchBtn = document.getElementById("searchButton");
const imageGallery = document.querySelector(".gif-holder");

function cleanItems(item) {
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }
}

searchBtn.addEventListener("click", () => {
    if (!searchGifInput.value) {
        alert("Please put your search word");
        return;
    }
    if (gifNumberInput.value) {

        cleanItems(imageGallery);
        findGiphy(apiKey, searchGifInput.value.trim().toLocaleLowerCase(), gifNumberInput.value);

    } else {
        cleanItems(imageGallery);
        findGiphy(apiKey, searchGifInput.value.trim().toLocaleLowerCase());
    }

});

function findGiphy(key, name, limit = 27) {

    fetch(`https://api.giphy.com/v1/gifs/search?q=${name}&api_key=${key}&limit=${limit}&offset=0&rating=G&lang=en`)
        .then(response => response.json())
        .then(GifImages => {
            console.log(GifImages);

            GifImages.data.forEach(gif => {
                const img = document.createElement("img");
                img.src = gif.images.fixed_height.url;
                imageGallery.appendChild(img);
            });

        });
}





