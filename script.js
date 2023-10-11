/*
    13. Basic Operators
*/

const currentYear = 2023;
const ageJagan = currentYear - 1993;

console.log('Age:', ageJagan);

// Operators
console.log(ageJagan * 2, ageJagan / 2, ageJagan ** 2);

const firstName = "Jagan";
const lastName = "Ganesh";
console.log(firstName + ' ' + lastName);

// Assignment Operators
let dataX = 10 + 5; // 15
dataX += 10;        // 15 + 10
dataX *= 10;        // 25 * 10
dataX++;            // 250 + 1
dataX--;            // 251 - 1
console.log(dataX);

// Comparison Operators
console.log(currentYear > ageJagan);
console.log(currentYear < ageJagan);
console.log(currentYear >= ageJagan);
console.log(currentYear <= ageJagan);