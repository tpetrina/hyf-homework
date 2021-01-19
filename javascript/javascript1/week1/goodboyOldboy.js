/*
 * Hack Your Future, Javascript, homework Week1
 * this file includes:
  2. Goodboy-Oldboy (A dog age calculator)
*/


// 2. Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2020;
const dogYearFuture = 2027;

const dogYear = dogYearFuture - dogYearOfBirth;

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears == false) {
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".")

} else {
    console.log("Your dog will be " + (dogYear * 7) + " dog years old in " + dogYearFuture + ".")
     
}

