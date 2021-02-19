/*
 * Hack Your Future, Javascript2, homework Week1
 * this file includes:
    Find the shortest word function
    Find and count the Danish letters function

*/

// Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

const reducer = (shortestWord, currentWord) => currentWord.length < shortestWord.length || shortestWord.length === 0 ? currentWord : shortestWord;

console.log(danishWords.reduce(reducer, ""));


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

    for (const key in result) {
        if (result[key] === 0) {
            delete result[key];
        }
    }
    console.log(result);

};
const danishString = "Jeg har en blå bil";
danishLetterFinder(danishString);

const danishString2 = "Blå grød med røde bær";
danishLetterFinder(danishString2);