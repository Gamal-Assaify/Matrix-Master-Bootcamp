//1 - Variables and Conditionals:
const myAge =function(age) {
    if(age >= 18){
         return "You are an adult.";
        } {
            return "You are a minor.";}

    };
console.log(myAge(20));

function inputName (name){
    if (name === "John") {
        return "Hello, John!";
    } else {
        return "You are not John.";
}};
console.log(inputName('John'));
console.log(inputName('Doe'));

//2 - Functions:

const sumNumbers =function(num1, num2) {
    return num1 + num2;
};
console.log(sumNumbers(5,10));

function reverseString(str) {
    return str.split(''). reverse().join('');
};
console.log(reverseString('Hello'));

//3 - Arrays and Loops:

const fruitList =['apple','banana','orange','grape'];
function getFruit(index){
    if (index >=0 && index <= fruitList.length -1){
        return fruitList[index];
    }};
console.log(getFruit(3));


for (let i=0; i < fruitList.length; i++){
    console.log(`I like the Fruit ${fruitList[i]}`);        
};

const arrAverage =[10,20,30,40,50];
function averageArray(arr){
    let sum = 0;
    for (let i=0; i <arrAverage.length; i++){
        sum += arrAverage[i];
        
    }
    return sum / arrAverage.length;
}
console.log(averageArray(arrAverage));

function largestNumber (arr){
    let largest = arr[0];
for (let i= 0; i<arr.length; i++){
    if (arr[i] > largest){
        largest = arr[i];
    }
}
return largest;
}
const numbers = [5, 10, 15, 20, 25];
console.log(largestNumber(numbers));

/*5-Check if a name exists in an array*/

const names = ["Ali", "Sara", "John", "Ahmed"];
function nameExists(arr, name) {

        for (let i = 0; i < arr.length; i++) {
  
        if (arr[i] === name) {
            return true;
        }
    }
    return false;
}

console.log(nameExists(names, "John")); // true
console.log(nameExists(names, "Mike")); // false

//6-Create an array of even numbers from 1 to 20
// Create an empty array

const evenNumbers = [];

for (let i = 1; i <= 20; i++) {
       if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);


// 4. Objects
// 1. Create a Book Object//

const book = {
    title: "JavaScript Basics",
    author: "John Smith",
    year: 2024
};
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Year:", book.year);

//Person Object with Function

// Create a person object
const person = {
name: "Ahmed",
age: 30,
gender: "Male"
};

// Function to display information
function displayPerson(personObj) {

// Print person's details
console.log(
`Name: ${personObj.name}, Age: ${personObj.age}, Gender: ${personObj.gender}`
);
}

displayPerson(person);
``
// Objects as Classes
// Car Object with Start Method

const car = {
make: "Toyota",
model: "Corolla",
year: 2023,


startCar: function() {
console.log("The car has started.");
}
};
car.startCar();

//Car Object with Drive Method

// Create car object
const vehicle = {
make: "Toyota",
model: "Corolla",
year: 2023,
startCar: function() {
console.log("The car has started.");
},
driveCar: function() {
console.log("The car is now driving.");
}
};
vehicle.startCar();
vehicle.driveCar();

//6. Window Object
// Alert when Button is Clicked
//<button onclick="showAlert()"> Click Me</button>
function showAlert() {
window.alert("Welcome to my webpage!");
}

// 2. Prompt User for Name

function greetUser() {
let name = window.prompt("What is your name?");
window.alert("Hello " + name + "!");
}

//7. DOM Manipulation
// Change Text in Div

//<button onclick="changeText()">Change Text</button>
//<div id="message">//

//Change div text
function changeText() {

// Select div and update text
document.getElementById("message").textContent =
"Text has been changed!";
}
//2. Add Item to a List/

//<ul id="todoList">
//<li>Study JavaScript</li>
//</ul>

//<button onclick="addItem()"> Add Item </button>

// Add new list item
function addItem() {

// Create new item
const newItem = document.createElement("li");

// Set item text
newItem.textContent = "New Task";

// Add item to list
document.getElementById("todoList")
.appendChild(newItem);
}

//3. Change Image Source

//<button onclick="changeImage()">Change Image</button>

// Change image source
function changeImage() {

// Update image path
document.getElementById("myImage").src =
"image2.jpg";
}

//4. Login Form Validation
//<form onsubmit="validateLogin(event)">

//<input type="text" id="username" placeholder="Username">

//<input type="password" id="password" placeholder="Password">

//<button type="submit"> Login </button> </form>

// <p id="result"></p>

// Validate login form
function validateLogin(event) {

// Prevent page refresh
event.preventDefault();

// Get input values
const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

// Check credentials
if (username === "admin" &&
password === "1234") {

document.getElementById("result").textContent =
"Login Successful!";
}
else {
 
document.getElementById("result").textContent =
"Invalid Username or Password!";
}};