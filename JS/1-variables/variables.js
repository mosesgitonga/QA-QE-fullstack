let age = 25;
const schoolName = 'Greenwood High';
const studentsList = [];
// let is blocked scoped and can be reassigned.
// const is block scoped but cannot be reassigned
// var is function scoped instead of block scoped therefore can lead to bugs

// const #taxRate = 0.16; is incorrent because it should only start with letter, underscore or dollar sign

let MyVariableName = 'Javascript'

/**
 * // output
 * 
 * console.log(typeof "Hello"); --> string
 * console.log(typeof 99); --> Number
 * console.log(typeof true); -- boolean
 * console.log(typeof undefined);  --> undefined
 */


/**
 * let data = ["Kenya", 34, false, { country: "USA" }, null]; --> The data type is object.
 */

//big int
let n = 220303030394932020303n
console.log(n)

const person = {name: "moses", age: "22", city: "nairobi"} // created an object person
console.log(person)

person.email = 'moses@gmail.com'
console.log(person)
const myArray = ['apple', 'orange', 'mango']

secondElement = myArray[1]
console.log(secondElement)



//console.log("5" + 2) --> "52"
//console.log("5" - 2) --> 3

// converting strings to numbers

const num = "100"
parseInt(num)
console.log(!isNaN(num)) // checking if it is a number - true if it is a number

// converting number to string 
const str = 50
str.toString

console.log(5 + true) // --> 6