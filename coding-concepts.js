// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: it will log 10 
// b) Verify and explain: it logged 10 because .length is counting the number of characters including the space

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: it will log an l
// b) Verify and explain: it logged an o, I was wrong because I forgot that the index starts at 0, the square brakets indicate that its looking at index

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: it will log "Ruby"
// b) Verify and explain: it logged Ruby without the "" because the variable index has a value of 1, when called in the console.log it will give the value that is in index 1 in languages

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: it will log an array with saturday and sunday in upperCase
// b) Verify and explain: it logged an error, saying that .toUpperCase is not a function, maybe .toUpperCase is only for strings

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: it will provide the word number
// b) Verify and explain: typeof provides the type of data that data.Types is and while dataTypes is an array because .length is there it will log a number
