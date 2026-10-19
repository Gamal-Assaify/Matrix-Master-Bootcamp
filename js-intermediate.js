// 1. Addition
let sum = 0;

for (let i = 200; i <= 2700; i++) {
  if (
    (i % 3 === 0 || i % 5 === 0) &&
    !(i % 3 === 0 && i % 5 === 0)
  ) {
    sum += i;
  }
}

console.log(sum);

//2. Shift the Values

let arr = [2,1,6,4,-7];
let reversed = [];

for(let i = arr.length -1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed);

//3. FizzBuzz

let result = [];

for(let i = 1, i <=135, i++){
    if(i % 3 === 0 && i % 5 === 0)
        result.push = ('FuzzBuzz');
}
    else if(i % 3 === 0) {
        result.push("Fizz");
    }

    else if(i % 5 === 0) {
        result.push("Buzz");
    }

    else {
        result.push(i);
    }
}

console.log(result);

//4. Fibonacci

let a = 0;
let b = 1;
let sum = 0;

while(a < 1000000) {
    sum += a;

    let next = a + b;
    a = b;
    b = next;
}

console.log(sum);

//5. Remove the Negative
let arr = [1,-2,4,1];
let positives = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
        positives.push(arr[i]);
    }
}

console.log(positives);

//Communist Censorship

let arr = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === "Program") {
        arr[i] = "*******";
    }
}

console.log(arr);

let bannedWord = "Program";

for(let i = 0; i < arr.length; i++) {

    if(arr[i] === bannedWord) {

        arr[i] = "*".repeat(arr[i].length);

    }
}

console.log(arr);
