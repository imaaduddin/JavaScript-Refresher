// import { apiKey, abc } from "./utils.js";
// import apiKey from "./utils.js"

// console.log(apiKey);
// console.log(abc);


let userMessage = "Hello!";
const anotherMessage = "Hi!!";

console.log(userMessage);

function greet() {
    console.log("What is good!");
}

greet();

function greeting(messageOne, messageTwo) {
    console.log(messageOne);
    console.log(messageTwo);
}

greeting("Hi", "Hello")

const testFunc = () => {
    console.log("Test Func");
}

testFunc();

const user = {
    name: "Imaad",
    age: 27,
    greet() {
        console.log("Hello!");
    }
};

console.log(user.name);
user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello my people!");
    }
}

const firstUser = new User("Imaad", 27);
console.log(firstUser);


const days = ["Monday", "Tuesday", "Wednesday"];
console.log(days[1]);

days.push("Thursday");
console.log(days);

const index = days.findIndex((item) => {
    return item === "Thursday";
});
console.log(index);

const looping = days.map((item) => {
   return item + "!"
});
console.log(looping);

const looping2 = days.map((item) => {
    return {text: item};
 });
console.log(looping2);


const userData = ["Imaad", "Uddin"];

const firstName = userData[0];
const lastName = userData[1];

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];
const mergeArray = [...arrayOne, ...arrayTwo];
console.log(mergeArray);

const password = prompt("Your Password Please!");

if (password === "Imaad") {
    console.log("Imaad is correct!");
} else if (password === "imaad") {
    console.log("imaad works too!");
} else {
    console.log("Wrong password. Try again please!");
}

const sports = ["Football", "Basketball", "Baseball", "Tennis", "Soccer", "Golf"];
 for (const sport of sports) {
    console.log(sport);
 }

 setTimeout(() => {
    console.log("Timing out...");
 }, 2000);