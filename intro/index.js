// In NodeJs we use regular JavaScript expression
// And run with command "node filename.js"
console.log("Hello Node Js wkwk");

// function expression with arrow function syntax (ES6)
var certainFunc = () => {
    console.log("You've called a function");
}

var funcWithParams = (a, b) => {
    console.log(`You've called a function with params ${a} and ${b}`)
}

certainFunc();
funcWithParams(2, 3);

// some global objects : setTimeout, setInterval, __dirname, __filename
// for more objects please refer to https://nodejs.org/api/globals.html

setTimeout(() => {
    console.log("This will appear after 3000 ms");
}, 3000);

setInterval(() => {
    console.log("This will appear every 3000 ms");
}, 3000);

// get root directory
console.log(__dirname);

// get this file directory
console.log(__filename);
