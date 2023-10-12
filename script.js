/*
    Coding Challenge #1
*/

const massMark = 65
const heightMark = 6.2
const massJohn = 82
const heightJohn = 5.9

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log('Mark', BMIMark);
console.log('John', BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log('markHigherBMI', markHigherBMI);