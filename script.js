// different ways to declare a variable
var name = "John";
let age = 30;
const country = "USA";
var name = "Jane"; // reassigning a var variable

var i; // declaring a variable without initializing it
i=10; // assigning a value to the variable

// //let age = 25; // reassigning a let variable
// age = 25;

// country = "Canada"; // trying to reassign a const variable (this will cause an error)

console.log(name); // Output: Jane
console.log(age);
console.log(country); // Output: USA

// different data types
let isStudent = true; // boolean
let score = 95.5; // number
console.log("score:", score);
console.log("score converted to int", 
    parseInt(score)); // converting float to int
console.log("type of score:", typeof score); // Output: number
console.log("type of isStudent:", typeof isStudent); // Output: boolean
let message = "Hello, World!"; // string
console.log("message:", message);
console.log("type of message:", typeof message); // Output: string

let marks = [85, 90, 78]; // array
console.log("marks:", marks);
console.log("type of marks:", typeof marks); // Output: object
console.log("checing if marks is an array:", Array.isArray(marks)); // Output: true
let arr = [1, "two", true, [3, 4], {name: "John"}]; // array with mixed data types
console.log("first value of arr:", arr[0]);
console.log("fourth value of arr:", arr[3]);
console.log(arr[3][1])
console.log("fifth value of arr:", arr[4]);
console.log(arr[4].name);
let person = { // object
    name: "Alice",
    age: 25,
    address: {
        street: [123, "Main St", "Apt 4B"],
        city: "New York",
        zip: "10001"
    },
    arr: [1, 2, 3],
    city: "New York"
};
console.log("person:", person);
console.log("type of person:", typeof person); // Output: object
console.log("person's name:", person.name); // Output: Alice
console.log("person's street:", 
    person.address.street); // Output: 123 Main St
console.log("person's city:", person.address.city); // Output: New York
let value = "street";
console.log("person's door number:", 
    person["address"][value][0]); // Output: 123

    // example for a resume object
let resume = {
    name: "Bob",
    age: 30,
    skills: ["JavaScript", "HTML", "CSS"],
    experience: [
        {
            company: "Tech Company",
            role: "Software Engineer",
            duration: "2 years"
        },
        {
            company: "Another Company",
            role: "Frontend Developer",
            duration: "3 years"
        }
    ]
};
