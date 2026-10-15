// Exercise 1: Filter Range
function filterRange(arr, a, b) {

    return arr.filter(function(num) {

        return num >= a && num < b;

    });

}

let Arr = [5, 3, 8, 1];

let filtered = filterRange(Arr, 1, 4);

console.log(filtered);
console.log(Arr);

//Exercise 2: Array and objects
let users = [
    { name: "John", age: 25 }, 
    { name: "Pete", age: 30 },
     { name: "Mary", age: 28 }
];

let names = users.map(function(user){
    return user.name;
});
console.log(names);
alert(names); // John, Pete, Mary

// Exercise 3: Get Average Age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
function getAverageAge (users){
    let totalAge = users.reduce(function(sum, user){
        return sum + user.age;
    }, 0);
    return totalAge / users.length;
} 
console.log(getAverageAge(arr).toFixed(2)); // (25 + 30 + 28) / 3 = 27.67