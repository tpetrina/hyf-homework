/*
 * Hack Your Future, Javascript, homework Week2
 * this file includes:
  Event application program which can figures out what weekday the event is being held.
*/

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(eventDay) {
  const today = new Date();
  const result = (eventDay + today.getDay()) % 7;
  return weekdays[result];
}

console.log('The event will be held on ' + getEventWeekday(2));
console.log('The event will be held on ' + getEventWeekday(63));