/*
 * Hack Your Future, Javascript, homework Week2
 * this file includes:
  Flight booking program with fullname and Formal fullname function.
*/

function getFullname(firstname, surname, useFormalName) {
  const fullName = firstname + ' ' + surname;
  return useFormalName ? 'Lord ' + fullName : fullName;
}
const fullname1 = getFullname("Hanieh", "Farjami", false);
console.log(fullname1);

const fullname2 = getFullname("Reza", "Farjami", true);
console.log(fullname2);