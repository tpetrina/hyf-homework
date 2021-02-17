/*
 * Hack Your Future, Javascript2, homework Week1
 * this file includes:
    Find the shortest word function
    Find and count the Danish letters function

*/

// Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function wordFinder(list) {
    let shortestWord = list[0];

    list.forEach(element => {
        if (shortestWord.length > element.length) {
            shortestWord = element;
        }

    });

    return {
        shortestWord,
        "length": shortestWord.length,
    };
}
console.log(wordFinder(danishWords));

//Find and count the Danish letters

function danishLetterFinder(sentence) {

    let countå = (sentence.match(/å/gi) || []).length;
    let countæ = (sentence.match(/æ/gi) || []).length;
    let countø = (sentence.match(/ø/gi) || []).length;
    let total = countå + countæ + countø;
    let result = {
        total,
        å: countå,
        æ: countæ,
        ø: countø
    }
    console.log(result);

};
const danishString = "Jeg har en blå bil";
danishLetterFinder(danishString);

const danishString2 = "Blå grød med røde bær";
danishLetterFinder(danishString2);



