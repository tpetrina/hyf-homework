/*
 * Hack Your Future, Javascript, homework Week2
 * this file includes:
   Weather wear program that shows what the user should wear based on the temperature.
*/

function userWear(temperature) {
    if (temperature >= 25) {
        return 'shorts and a t-shirt';
    } else if (temperature >= 15 && temperature < 25) {
        return 'Sweater'
    } else if (temperature >= 5 && temperature < 15) {
        return 'Jacket'
    } else {
        return 'Jacket, Hat and Gloves'
    }
}
console.log('It is better to wear ' + userWear(30) + ' based on the weather temperature.');
console.log('It is better to wear ' + userWear(1) + ' based on the weather temperature.');