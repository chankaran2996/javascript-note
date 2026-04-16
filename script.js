// // different ways to declare a variable
// var name = "John";
// let age = 30;
// const country = "USA";
// var name = "Jane"; // reassigning a var variable

// var i; // declaring a variable without initializing it
// i=10; // assigning a value to the variable

// // //let age = 25; // reassigning a let variable
// // age = 25;

// // country = "Canada"; // trying to reassign a const variable (this will cause an error)

// console.log(name); // Output: Jane
// console.log(age);
// console.log(country); // Output: USA

// // different data types
// let isStudent = true; // boolean
// let score = 95.5; // number
// console.log("score:", score);
// console.log("score converted to int", 
//     parseInt(score)); // converting float to int
// console.log("type of score:", typeof score); // Output: number
// console.log("type of isStudent:", typeof isStudent); // Output: boolean
// let message = "Hello, World!"; // string
// console.log("message:", message);
// console.log("type of message:", typeof message); // Output: string

// let marks = [85, 90, 78]; // array
// console.log("marks:", marks);
// console.log("type of marks:", typeof marks); // Output: object
// console.log("checing if marks is an array:", Array.isArray(marks)); // Output: true
// let arr = [1, "two", true, [3, 4], {name: "John"}]; // array with mixed data types
// console.log("first value of arr:", arr[0]);
// console.log("fourth value of arr:", arr[3]);
// console.log(arr[3][1])
// console.log("fifth value of arr:", arr[4]);
// console.log(arr[4].name);
// let person = { // object
//     name: "Alice",
//     age: 25,
//     address: {
//         street: [123, "Main St", "Apt 4B"],
//         city: "New York",
//         zip: "10001"
//     },
//     arr: [1, 2, 3],
//     city: "New York"
// };
// console.log("person:", person);
// console.log("type of person:", typeof person); // Output: object
// console.log("person's name:", person.name); // Output: Alice
// console.log("person's street:", 
//     person.address.street); // Output: 123 Main St
// console.log("person's city:", person.address.city); // Output: New York
// let value = "street";
// console.log("person's door number:", 
//     person["address"][value][0]); // Output: 123

//     // example for a resume object
// let resume = {
//     name: "Bob",
//     age: 30,
//     skills: ["JavaScript", "HTML", "CSS"],
//     experience: [
//         {
//             company: "Tech Company",
//             role: "Software Engineer",
//             duration: "2 years"
//         },
//         {
//             company: "Another Company",
//             role: "Frontend Developer",
//             duration: "3 years"
//         }
//     ]
// };

// function in javascript
// function declaration
// function sample() {
//     console.log("This is a sample function.");
// }
// // function calling
// sample();
// sample();

// // function with parameters
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// let name = "Charlie";
// greet("Alice");
// greet("Bob");
// greet(name);

// function with default parameters
// function greetWithDefault(name = "Guest") {
//     console.log("Hello, " + name + "!");
// }
// greetWithDefault();
// greetWithDefault("David");

// function with return value
// function add(a, b) {
//     return a + b;
// }

// let sum = add(5, 10);
// console.log("Sum:", sum); // Output: Sum: 15

// different type of functions
// function expression
// let multiply = function(a, b) {
//     return a * b;
// }
// let product = multiply(5, 10);
// console.log("Product:", product); // Output: Product: 50
// console.log("Product:", multiply(5, 10)); // Output: Product: 50

// arrow function
// let divide = (a, b) => {
//     if (b === 0) {
//         return "Cannot divide by zero";
//     }
//     return a / b;
// }
// let quotient = divide(10, 2);
// console.log("Quotient:", quotient); // Output: Quotient: 5
// console.log("Quotient:", divide(10, 0)); // Output: Quotient: Cannot divide by zero

// let add = (a,b) => {
//     return a + b;
// }
// console.log("Add:", add(5, 10)); // Output: Sum: 15

// let sum = (a, b) => a + b; // concise body syntax
// console.log("Sum:", sum(5, 10)); // Output: Sum: 15

// iife function (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE.");
})();

