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
const countdown = setInterval(() => {
    console.log(second);
    second--;
    if(secondc<=0){
        clearInterval(countdown)
        console.log('Countdown Finished');
    }
},1000); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Countdown Finished

/**
 * Convert array of numbers to string
 */
const numbers = [1,2,3,4]
const strings = numbers.map(String)
console.log(strings)

/**
 * Remove duplicate
 */
let fruits =["apple","mango","apple","orange","mango","mango"]; 
const removeDuplicate = fruits => [...new Set(fruits)]
console.log(removeDuplicate(fruits)) // ["apple", "mango", "orange"]

/**
 * Convert sentence to array of words
 */
const sentence = "The quick brown fox jumps over the lazy dog"
const words = sentence.split(' ')
console.log(words) // ["The","quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

/**
 * Repeat string
 */
function repeat(string, n){
    return string.repeat(n)
}
const repeatedString = repeat('abc',3)
console.log(repeatedString) // abcabcabc

/** 
   Find intersection of array
*/
const intersection = (a,b) => a.filter(x => b.includes(x))
const arrayA = [1,2,3,4,5];
const arrayB = [4,5,6,7,8];
console.log(intersection(arrayA, arrayB))

/**
 * Merge object
 */
const person = { name : "Bob" }
const details = { age : 18}

const fullDetail = {...person, ...details}
console.log(fullDetail) // { name : "Bob", age : 18}

/**
 * Redirect to new url after delay
 */
setTimeout(()=>location.href = 'https://jsmastery.pro',5000)