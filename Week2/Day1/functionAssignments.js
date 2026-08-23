/* Task 1: Function Declaration
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
<name>!" to the console */

function userProfile(name){
    console.log(`Hello, ${name}`);
}

/* Task 2: Arrow Function
Create an arrow function named `double` that takes a number as a parameter and returns
double its value.  */
const double = (num) => {return num*2}

/* Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
after 2 seconds.  */
const anonymousFunc = function(){
    setTimeout(function (){
        console.log(`This message is delayed by 2 seconds`);
    }, 2000);
}

/* Task 4: Callback Function
Create a function named `getUserData` that takes a callback function as a parameter. Inside
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
that should print “Call Back Function” after 3 seconds.
Call the `getUserData` function and log message using the callback function.  */
function getUserData(callBackFunction){
console.log("I'm Fetching data here");
setTimeout(() => callBackFunction(),2000)
}

const printme = () =>{
    console.log(`This is a callback function with a time dealy of 2 seconds`);
}

// Task1
userProfile(`Madhu`);
// Task 2
console.log(double(9));
// Task 3
anonymousFunc();
// Task 4
getUserData(printme);