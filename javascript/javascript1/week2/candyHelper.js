/*
 * Hack Your Future, Javascript, homework Week2
 * this file includes:
   Candy helper 
*/

const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

const candyTable = [
    {
        candyType: "Sweet",
        pricePerGram: 0.5
    },
    {
        candyType: "Chocolate",
        pricePerGram: 0.7
    },
    {
        candyType: "Toffee",
        pricePerGram: 1.1
    },
    {
        candyType: "Chewing-gum",
        pricePerGram: 0.03
    }
];

function addCandy(candyType, weight) {
    for (let i = 0; i < candyTable.length; i++) {
        if (candyType === candyTable[i].candyType) {
            boughtCandyPrices.push(candyTable[i].pricePerGram * weight);
        }
    }
}

function canBuyMoreCandy() {
    let paidPrice = 0;
    let i = 0;
    while (i < boughtCandyPrices.length) {
        paidPrice += boughtCandyPrices[i];
        i++;
    }
    console.log(paidPrice);
    return paidPrice < amountToSpend;
}

addCandy("Chewing-gum", 4);
addCandy("Sweet", 2);
addCandy("Toffee", 4);
console.log(boughtCandyPrices);
if (canBuyMoreCandy()) {
    console.log("You can buy more, so please do!");
} else {
    console.log("Enough candy for you!");
}
console.log(amountToSpend);