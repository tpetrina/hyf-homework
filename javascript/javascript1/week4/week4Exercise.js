// JS1 Week4 class exercises


// Fizz buzz

function fizzBuzz(firstNumber, secondNumber) {
    for (let i = 1; i < 101; i++) {
        if (i % firstNumber === 0 && i % secondNumber === 0) {
            console.log("FizzBuzz");
        } else if (i % firstNumber === 0) {
            console.log("Fizz");
        } else if (i % secondNumber === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(4, 12);

// Build a sentiment analyzer

let positiveWords = ['happy', 'awesome', 'super', 'great', 'perfect'];
let negativeWords = ['hate', 'sad', 'boring', 'bad', 'ugly'];
function getSentimentScore(sentence) {
    let sentenceWords = sentence.split(" ");
    console.log(sentenceWords);
    let score = 0;
    let positive = [];
    let negative = [];
    for (let i = 0; i < sentenceWords.length; i++) {
        if (positiveWords.includes(sentenceWords[i])) {
            {
                score += 4;
                positive.push(sentenceWords[i]);
            }
        } else if (negativeWords.includes(sentenceWords[i])) {
            {
                score -= 1;
                negative.push(sentenceWords[i]);
            };
        }
    }
    let result = {
        score: score,
        positiveWords: positive,
        negativeWords: negative,

    };
    return result;
}

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');
console.log(sentimentScoreObject);

const sentimentScoreObject2 = getSentimentScore('I hate this boring and bad weather,but I am great now ');
console.log(sentimentScoreObject2);


// Credit card number formatter

function formatCreditCardNumber(cardnumber) {
    var value = cardnumber.toString();
    const segment = [];

    for (let i = 0; i < value.length; i++) {
        segment.push(value[i]);
        if (i % 4 === 3) {
            segment.push(" ");
        };

    }

    return {
        original: cardnumber,
        formatted: segment.join(""),
    }

}

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);


// Character frequencies

let characters = {};
let charactersArray = []
function getCharacterFrequencies(ourString) {
    ourString.split("").forEach(function (x) {
        characters[x] ? characters[x]++ : characters[x] = 1;

    });
    for (const key in characters) {
        charactersArray.push({
            character: key,
            count: characters[key],
        });
    }

    return charactersArray;
};

console.log(getCharacterFrequencies('happy'));

// Palindromic substring

function isPalindromic(input) {
    let resultRev = input.split("").reverse().join("");
    return input == resultRev;
}
function palindromicSub(str) {
    let sub = "";
    let strSubSub = "";
    let palindromicResult = { length: 0 };
    for (let i = 0; i < str.length; i++) {
        sub = str.substr(i, str.length);

        for (let j = sub.length; j >= 0; j--) {
            strSubSub = sub.substr(0, j);

            if (isPalindromic(strSubSub) && strSubSub.length >= 2) {
                if (strSubSub.length > palindromicResult.length) {
                    palindromicResult = {
                        palindromicStr: strSubSub,
                        length: strSubSub.length,
                    };

                }
            }
        }

    }
    return palindromicResult;
}

console.log(palindromicSub("3345422"));
console.log(palindromicSub("Hello"));
console.log(palindromicSub("madam"));

// Credit card info

function getCardInfo(cardNumber) {
    const number = cardNumber.toString();
    const digit = number[0];
    switch (digit) {
        case "3": return "American Express";
            break;

        case "4": return "visa";
            break;

        case "5": return "Mastercard";
            break;
    };

}

console.log(getCardInfo(4781321334789876)); // 'visa'