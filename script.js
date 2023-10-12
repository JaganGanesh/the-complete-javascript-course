/*
    18. Taking Decisions: if / else Statements
*/

const age = 19;
const userName = "Jackie";
const isOldEnough = 18;

if(age > isOldEnough) {
    console.log(`${userName} is old enough to take license.`);
} else {
    console.log(`${userName} is too young, wait another ${isOldEnough - age} years.`);
}