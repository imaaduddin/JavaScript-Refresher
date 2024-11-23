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
