/**
 * Get current date and time
 */

const currentDate = new Date()
console.log(` Current date is {currentDate}`)

/**
 * Find max number in array
 */
var numbers = [1,2,3,4,5]
const max_number = Math.max(...numbers)
console.log(`Maximum number is ${max_number}`)

/**
 * Shuffle array
 */
var shuffle_array = numbers.sort(() => Math.random() - 0.5)

/**
 * Generate random number between 1 and 10 
 */

var random_numbers = Math.floor(Math.random()*10) + 1;
console.log (random_numbers)

/**
 * Convert string to lower case
 */
var lowercase_string = "Hello World".toLocaleLowerCase();
console.log(`Lower case string is ${lowercase_string}`);

/**
 * Check if even or odd number
 */
var result = (n) => (n%2 == 0) 
var x = 3;
if (result(x)) {
    console.log(`${x} is even number.`)
}else {
    console.log(`${x} is odd number.`)
}

/**
 * Create a simple 10 second countdown timer
 */
let second = 10 
