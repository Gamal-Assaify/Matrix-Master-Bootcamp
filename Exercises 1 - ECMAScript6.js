
// ECMAScript 6 Exercises

// =====================================================
// Exercise 1 - Object Destructuring
// =====================================================

console.log("========== Exercise 1 ==========");

let user1 = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user1;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Admin:", isAdmin);

// =====================================================
// Exercise 2 - Variable Naming
// =====================================================

console.log("\n========== Exercise 2 ==========");

let ourPlanetName = "Earth";

    
let currentVisitorName = "Merkel";

console.log("Planet:", ourPlanetName);
console.log("Visitor:", currentVisitorName);

// =====================================================
// Exercise 3 - Scope and Function Declaration
// =====================================================

console.log("\n========== Exercise 3 ==========");


let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }

    sayHi(); 
}

// =====================================================
// Exercise 4 - Object Operations
// =====================================================

console.log("\n========== Exercise 4 ==========");

let user4 = {};

user4.name = "John";

user4.surname = "Smith";

user4.name = "Pete";

delete user4.name;

console.log(user4);

// =====================================================
// Exercise 5 - Can const Objects Be Changed?
// =====================================================

console.log("\n========== Exercise 5 ==========");

const user5 = {
    name: "John"
};

user5.name = "Pete";

console.log(user5);


// =====================================================
// Exercise 6 - Sum Object Salaries
// =====================================================

console.log("\n========== Exercise 6 ==========");

let salaries = {
    Gamal: 100,
    Christine: 160,
    Artem: 130
};

let sum = 0;

for (let salary of Object.values(salaries)) {
    sum += salary;
}

console.log("Total Salaries:", sum);

// =====================================================
// Exercise 7 - Rewrite if Using Ternary Operator
// =====================================================

console.log("\n========== Exercise 7 ==========");

let a = 1;
let b = 2;

let result = (a + b < 4) ? "Below" : "Over";

console.log(result);

// =====================================================
// Exercise 8 - Multiple Ternary Operators
// =====================================================

console.log("\n========== Exercise 8 ==========");

let login = "Director";

let message =
    (login === "Employee") ? "Hello" :
    (login === "Director") ? "Greetings" :
    (login === "") ? "No login" :
    "";

console.log(message);
