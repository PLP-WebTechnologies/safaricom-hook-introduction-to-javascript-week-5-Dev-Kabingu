
// variables and data types
let FullName = "mercy Kabingu";
let age = 23;
let adult = age > 18;
let details = {FullName:"mercy", age:23, gender:"female", student: "yes"};
let skills = ["UI Design", "Frontend Development", "Database Management"];
// printing the data and datatype of the variables to the console.
console.log("Full Name:",FullName, "(datatype:", typeof FullName,")");
console.log("Age:", age, "(datatype:", typeof age,")");
console.log("Eligible voter:", adult, "(datatype:", typeof adult, ")");
console.log("Details:", details, "(datatype:", typeof details, ")");
console.log("Skills:", skills, "(datatype:", typeof skills,")");
console.log("skills:", skills, "(datatype:",Array.isArray(skills) ? "array": typeof skills, ")");


// Calculator
function calculator(){
    // get user inputs.
    let number1 = parseFloat(prompt("Enter First Name:"));
    let number2 = parseFloat(prompt("Enter Second Number:"));
    let operation =prompt ("Enter Operation (+, /, -, %, *):");
// check whether user enters a number or not.
    if (isNaN(number1) || isNaN(number2)) {
        console.log("Enter a valid number");
        return;
    }
let result;
// perform some basic operation
if (operation === "+"){
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
}
else if (operation === "-"){
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
}
else if (operation === "*"){
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
}
else if (operation === "%"){
    result = number1 % number2;
    console.log(`${number1} % ${number2} = ${result}`);
}
else if (operation === "/"){
    if (number2 === 0) { 
        console.log("Cannot divide by zero."); 
    } else {
         result = number1 / number2; 
         console.log(`${number1} / ${number2} = ${result}`); 
        }
}else("Choose a valid operation");
}
calculator();


// greeting
function greetUser(name){
    return `Hello, ${name}. Welcome all`
}
let userName = prompt("Enter your name:"); 
let greeting = greetUser(userName); 
document.getElementById("greeting").innerText = greeting;


// <!-- Part 2: JavaScript Control Structures -->
// checking if user is eligible for voting.

function voter (){
    let age = parseFloat(prompt("Enter your age:"));//prompt user to enter their age
    if (isNaN(age)){ //checks whether age entered is a number or not and gives appropriate response
        document.getElementById("message").innerText = "Please enter a valid age.";
        return;
    }
    if(age >= 18) {//checks if user is above the age of 18
        document.getElementById("message").innerText = "You are eligible for voting";
    }else {
        document.getElementById("message").innerText = "You are not eligible for voting";
    }
}
voter();



// Printing numbers one to ten.

function listNumbers(){
    let numbers = document.getElementById("number");
    
    for (let i = 1; i<= 10; i++){//declare a variable i which ranges from 1 to 10 and increment
        numbers.innerHTML += `<li></li>`;// increment the value of i with 1
    }
}
listNumbers();

// Part 3: Introduction to the DOM

document.querySelector("h1").innerText = "Javascript is in action"; //changes the content of h1 
let dynamicParagraph = document.getElementById("dynamic-content");
let newText = document.createElement("p");//creates a new paragraph element
newText.innerText = "This content was added dynamically using JavaScript.";
dynamicParagraph.appendChild(newText);//adds the new content to the dic container

