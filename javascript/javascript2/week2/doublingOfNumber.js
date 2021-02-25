// Doubling of number

/*let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]*/

const numbers = [4, 6, 7, 3, 2, 9, 1, 9, 3, 1, 8];

const result = numbers.filter(number => number % 2 !== 0).map(number => number * 2).filter(number => number % 2 == 0);
console.log(result);