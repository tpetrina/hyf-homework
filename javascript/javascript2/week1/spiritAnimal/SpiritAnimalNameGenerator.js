/*
 * Hack Your Future, Javascript2, homework Week1
 * this file includes:
 * Spirit animal name generator
*/

// Spirit animal name generator

const innerSpiritAnimals = [
    {
        name: 'Strong Bear',
        image: "./images/Bear.jpg"
    },
    {
        name: 'Fast Cheetah',
        image: './images/Cheetah.jpg'
    },
    {
        name: 'Kind Elephant',
        image: './images/Elephant.jpg'
    },
    {
        name: 'Adaptable Fish',
        image: './images/Fish.jpg'
    },
    {
        name: 'Loyal Horse',
        image: './images/Horse.jpg'
    },
    {
        name: 'Easy-going Panda',
        image: './images/Panda.jpg'
    },
    {
        name: 'Smart Rabbit',
        image: './images/Rabbit.jpg'
    }
];

const resultImage = document.querySelector("img#result");
const userName = document.querySelector("input#User-name");
const button = document.querySelector("button#result-button");

button.addEventListener("click", result);

function result() {
    if (!userName.value) {
        alert("Please write your name");
        return;
    }
    const h2 = document.querySelector("h2");
    const randomImageIndex = parseInt(Math.random() * innerSpiritAnimals.length);
    const text = `${userName.value} - ${innerSpiritAnimals[randomImageIndex].name}`;
    h2.innerHTML = text;
    resultImage.src = innerSpiritAnimals[randomImageIndex].image;
}
