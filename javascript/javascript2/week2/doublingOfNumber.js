// Doubling of number

const numbers = [4, 6, 7, 3, 2, 9, 1, 9, 3, 1, 8];

const result = numbers.filter(number => number % 2 !== 0).map(number => number * 2).filter(number => number % 2 == 0);
console.log(result);