// Exercise 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person("Gamal", 27);

console.log(person1.introduce());

// Exercise 2

function describePerson(callback) {
    callback.call(person1);
}

describePerson(function () {
    console.log(this.introduce());
});

// Exercise 3

function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Finished waiting!");
        }, milliseconds);
    });
}

wait(2000).then((message) => {
    console.log(message);
});