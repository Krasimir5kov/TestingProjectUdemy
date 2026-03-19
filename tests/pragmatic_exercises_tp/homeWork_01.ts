// Homework 01 - Simple Types

// Exercise 1: Variable swapping
// Step 1: Declare 2 variables with numbers.
// Step 2: Swap their values.
// Step 3: Log the original values and the final values.
let a:number = 5;
let b:number = 10;
const originalA:number = a;
const originalB:number = b;
a = b;
b = originalA;
console.log(`Original values: a = ${originalA}, b = ${originalB}`);
console.log(`Final values a: ${a}, b: ${b}`);
// Exercise 2: Check if a number is even or odd
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and use a logical expression to check if first variable is even.
// Step 3: Log the result
const num:number = 7;
const isEven:boolean = num % 2 === 0;
console.log(`Is the number ${num} even? ${isEven}`);
// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable and assign any number to it.
// Step 2: Declare a boolean variable and check if first variable is greater than 0.
// Step 3: Log the result
const number:number = -3;
const isPositive:boolean = number > 0;
console.log(`Is the number ${number} positive? ${isPositive}`);
// Exercise 4: Check if a string is empty (empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable is an empty string.
// Step 3: Log the result
const emptyString:string = "";
const isEmpty:boolean = emptyString === "";
console.log(`Is the string empty? ${isEmpty}`);
// Exercise 5: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if first variable starts with 'A'.
// Step 3: Log the result
const str:string = "Apple";
const startWithA:boolean = str[0] === 'A';
if (startWithA) {
    console.log(`The string "${str}" starts with the letter 'A'.`);
} else {
    console.log(`The string "${str}" does not start with the letter 'A'.`);
}

// Exercise 6: Write code calculating the ammount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare a variables: QA name (string), number of functionalities (whole number), lets accpet time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities and the total time needed to test all functionalities using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."
const qaNameIs:string = "Krasimira";
const numberOfFunctionalities:number = 40;
const timePerFunctionality:number = 2;
const totalTimeNeeded:number = numberOfFunctionalities * timePerFunctionality;
console.log(`The QA ${qaNameIs} will need ${totalTimeNeeded} hours to complete ${numberOfFunctionalities} project/s.`);


// Exercise 5: Celsius to Fahrenheit converter
// Step 1: Create a variable for the temperature in Celsius.
// Step 2: Use the formula F = C * 9/5 + 32 to convert it to Fahrenheit.
// Step 3: Store the result in a variable.
// Step 4: Log the temperature in Fahrenheit.
const ceLsius:number = 25;
const fahrenheit:number = ceLsius * 9/5 + 32;
console.log(`${ceLsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);
// Part 2 — Booleans (boolean)

// Exercise 6: Login check
// Step 1: Create a boolean variable called isLoggedIn.
// Step 2: If isLoggedIn is true, log "Welcome!".
// Step 3: If isLoggedIn is false, log "Please log in".
const isLoggedIn:boolean = true;
if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please log in");
}

// Exercise 7: Entry permission
// Step 1: Create a boolean variable hasTicket with the value true.
// Step 2: Create a boolean variable isAdult with the value false.
// Step 3: Create a variable called canEnter that is true only if both variables are true.
// Step 4: Log the result of canEnter.
const hasTicket:boolean = true;
const isAdult:boolean = false;
const canEnter:boolean = hasTicket && isAdult;
console.log(`Can enter: ${canEnter}`);

// Part 3 — Strings (string)

// Exercise 8: Check if a string is empty (an empty string is "")
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable is an empty string.
// Step 3: Log the result.
const sameEmptyString:string = "";
const isSameEmpty:boolean = sameEmptyString === "";
console.log(`Is the string empty? ${isSameEmpty}`);
// Exercise 9: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable and assign any string to it.
// Step 2: Declare a boolean variable and check if the first variable starts with 'A'.
// Step 3: Log the result.
const anotherStr:string = "Apple";
const startWithAnotherA:boolean = anotherStr[0] === 'A';
if (startWithAnotherA) {
    console.log(`The string "${anotherStr}" starts with the letter 'A'.`);
} else {
    console.log(`The string "${anotherStr}" does not start with the letter 'A'.`);
}
// Exercise 10: String operations
// Step 1: Create a string variable message with the value "TypeScript is fun".
// Step 2: Log the length of the string.
// Step 3: Log the string in uppercase.
// Step 4: Log the string in lowercase.
// Step 5: Create a variable called favoriteLanguage.
// Step 6: Log the sentence using a template string: "My favorite programming language is ___".
const message:string = "TypeScript is fun";
console.log(`Length of the string: ${message.length}`);
console.log(`Uppercase :${message.toUpperCase()}`);
console.log(`Lowercase: ${message.toLowerCase()}`);
const favoriteLanguage:string = "TypeScript";
console.log(`My favorite programming language is ${favoriteLanguage}.`);
// Part 4 — BigInt (bigint)

// Exercise 11: BigInt addition
// Step 1: Create two bigint numbers.
// Step 2: Add the two bigint numbers together.
// Step 3: Log the result.
const bigInt1:bigint = 1234567890123456789012345678901234567890n;
const bigInt2:bigint = 9876543210987654321098765432109876543210n;
const bigIntSum:bigint = bigInt1 + bigInt2;
console.log(`The sum of the two bigints is: ${bigIntSum}`);
// Part 5 — Array (array)

// Exercise 12: Product of an array
// Step 1: Create an array with the numbers [10, 20, 30, 40].
// Step 2: Create a variable to store the total product.
// Step 3: Use a loop to multiply all numbers in the array.
// Step 4: Log the final product.
const numArray:number[] = [10, 20, 30, 40];
let totalProduct:number = 1;
for (const num of numArray) {
    totalProduct *= num;}
console.log(`The total product of the array is: ${totalProduct}`);
// Exercise 13: Array of student objects
// Step 1: Create an array called students.
// Step 2: Each object should contain name and grade.
// Step 3: Example objects: { name: "Alice", grade: 90 } and { name: "Bob", grade: 85 }.
// Step 4: Use a loop to go through the array.
// Step 5: Log each student's name.
const students:{name:string,grade:number}[] = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 }
];
for (const student of students) {
    console.log(`Student name: ${student.name}`);
};
// Part 6 — Functions (function)

// Exercise 14: Function with a union type
// Step 1: Create a function called printId.
// Step 2: The parameter id should accept a string or a number (string | number).
// Step 3: Inside the function, log the id value.
function printId(id:string | number): void {
    console.log(`ID: ${id}`);
}
// Exercise 15: Calculate the amount of time a QA engineer needs to test a number of functionalities
// Step 1: Declare variables: QA name (string) and number of functionalities (whole number). Assume the time needed to test one functionality is 2 hours.
// Step 2: Calculate the total time needed to test all functionalities.
// Step 3: Log the QA name, number of functionalities, and the total time needed using string interpolation like:
// "The QA {QA name} will need {total time needed} hours to complete {number of functionalities} project/s."
const qaNameString:string = "Krasimira";
const numberOfFunctionalitiesNum:number = 40;
const timePerFunctionalityNum:number = 2;
const totalTimeNeededNum:number = numberOfFunctionalitiesNum * timePerFunctionalityNum;
console.log(`The QA ${qaNameString} will need ${totalTimeNeededNum} hours to complete ${numberOfFunctionalitiesNum} project/s.`);
// Exercise 16: Union in objects
// Step 1: Create a type for a user object.
// Step 2: The object should have two properties: id and name.
// Step 3: The id property should accept either a number or a string (number | string).
// Step 4: Create one user object with a numeric id.
// Step 5: Create another user object with a string id.
type user = {
    id: number | string;
    name: string;
};
const user1:user = {
    id : 123,
    name: "Alice"
};
const user2:user = {
    id : "abc123",
    name: "Bob"
};
console.log(user1);
console.log(user2);
// Optional Exercises

// Exercise 17: Remove duplicate numbers from an array
// Step 1: Create an array with the numbers [10, 20, 10, 30, 40].
// Step 2: Remove the duplicate numbers from the array.
// Step 3: Store the result in a new array.
// Step 4: Log the new array, which should look like [10, 20, 30, 40].
const numbersWithDuplicates:number[] = [10, 20, 10, 30, 40];
const uniqueNumbers:number[] = Array.from(new Set(numbersWithDuplicates));
console.log(`Array with duplicates: ${numbersWithDuplicates}`);
console.log(`Array without duplicates: ${uniqueNumbers}`);

// Exercise 18: Find the difference between two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Find the elements that exist in arr1 but not in arr2, and in arr2 but not in arr1.
// Step 4: Store the result in a variable called difference.
// Step 5: Log the result, which should be [1, 2, 5].
const arr1:number[] = [1, 2, 3, 4];
const arr2:number[] = [3, 4, 5];
const difference:number[] = arr1.filter(x => !arr2.includes(x));
const difference2:number[] = arr2.filter(x => !arr1.includes(x));
const totalDifference:number[] = difference.concat(difference2);
console.log(`Difference between arr1 and arr2: ${totalDifference}`);
console.log(`Elements in arr1 but not in arr2: ${difference}`);
console.log(`Elements in arr2 but not in arr1: ${difference2}`);
// Exercise 19: Find the union of two arrays
// Step 1: Create an array arr1 with values [1, 2, 3, 4].
// Step 2: Create another array arr2 with values [3, 4, 5].
// Step 3: Combine both arrays into one.
// Step 4: Remove duplicate values.
// Step 5: Store the result in a variable called union.
// Step 6: Log the result, which should be [1, 2, 3, 4, 5].
const arr3:number[] = [1, 2, 3, 4];
const arr4:number[] = [3, 4, 5];
const combinedArray:number[] = arr3.concat(arr4);
const union:number[] = Array.from(new Set(combinedArray));
console.log(`Union of arr3 and arr4: ${union}`);
console.log(`Combined array: ${combinedArray}`);

