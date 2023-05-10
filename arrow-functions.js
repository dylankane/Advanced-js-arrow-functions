/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */



// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}

let sum = addTwoNumbers(3, 5)
console.log(sum);




// Arrow Function With Parameters

const addTwoNumbers1 = (a, b) => {
    // Code block
    return a + b;
}

let sum1 = addTwoNumbers1(3, 5)
console.log(sum1);



// Single Line Arrow Function With Parameters

// In this case since all the function body does is return a + b, we can actually remove the curly braces,
// and remove the return statement entirely, and just put a + b on the same line.
// So for simple functions, you can just put what you want to return right after the "fat arrow" on the same line.
// But if your function has more complex logic, you'll need to open a set of curly braces
// and then use the return statement like a normal function.



// const addTwoNumbers2 = (a, b) => (a + b); Also valid
const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(6, 4)
console.log(sum2);



// Implicit Returns

// For even simpler functions, such as those that only take a single parameter, you can
// leave off the first set of parentheses too.
// For example, if I want a function that just logs a message to the console
// Since there’s only one parameter, it doesn’t need the parentheses around it, but if you
// have more than one, you just wrap them with parentheses.

// If you’ve got a function that takes no parameters at all, such as this one called sayHello,
// you must use an empty set of parentheses to tell JavaScript you’re declaring a function.


const saySomething = message => console.log(message)

saySomething("Hello There!")

const sayHello = () => console.log("Hello!")

sayHello();




// Returning Multiple Lines

// Whenever an arrow function needs to return multiple lines of code, such as this one which
// returns a multi-line string, the parentheses mentioned in the implicit return function above are required.
// This goes for using an explicit return statement inside a set of curly braces, too.
// If you need to return multiple lines of code, you must wrap whatever comes after the return keyword in parentheses.

const returnMutipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
    )
    
    console.log(returnMutipleLines());