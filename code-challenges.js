// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:
// name: funct1
// input: a number
// output: a string that says if the given number is below, above or at the boiling point
// process: condtionals and string interpolation
const funct1 = (temperature) =>{
    if (temperature < 212) {
        return `${temperature} is below boiling point`
    } else if (temperature > 212) {
        return `${temperature} is above boiling point`
    } else if (temperature === 212) {
        return `${temperature} is at boiling point`     
    } else {
        return 'Try again'
    }
}
console.log(funct1(temperature1))
console.log(funct1(temperature2))
console.log(funct1(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// input: two arrays
// output: the length of both arrays combined
// process: create a console.log and put .length at the end of both arrays and a +
console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
// input: a string
// output: that string but reversed
// process 1: first I want to try using the reverse method on the string (didn't work)
// console.log(currentCohort.reverse) <---- that didn't work 
// process 2: split the words to turn them into and array, then reverse the array, and then remove the spaces
// console.log(currentCohort.split()) 
// console.log(currentCohort.reverse()) --> this didnt work either
//process 3: trying the split and reverse methods but adding quotation marks on the split part
// console.log(currentCohort.split("")) <-- this worked and turned each word into a value in an array
// console.log(currentCohort.reverse()) <-- this didnt work and keeps telling me that there reverse is not a function so that means that it is not recognizing currentCohort as an array
//process 4: trying the split and reverse methods but creating a new variable to store the new split array
var splitCohort = currentCohort.split("")
console.log(splitCohort.reverse()) 
//this worked but now I need to turn the array into a string
console.log(splitCohort.join("")) //<-- I had to look in the syllabus because without the "" it gave me the string with , 

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code: 
// input: a given value in an array
// output: the last index of the given value
// process: using lastIndexOf() in console.log
console.log(numberOfConnections.lastIndexOf(42))
console.log(numberOfConnections.lastIndexOf(10))



