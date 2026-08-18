/* Classroom Assignment: Conditional Statements
Learning Objective:
Learn if-else and switch case
Expected Completion Time:
Best Case: 15 minutes
Average Case: 20 minutes
Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.
Assignment Requirements:
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript
Hints to Solve:
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For
`runTests`, use a `switch` statement to handle different `testType` values, including a default case.
Expected Outcome:
Upon completion, you should be able to:
- Understand and implement different conditional statements using Javascript*/

let browser = `Chrome`;
let testType = `sanity`;

function launchBrowser(browser){
    if(browser === "Chrome"){
        console.log("The Chrome Browser is opened");
    }else if(browser === "Firefox"){
        console.log("The FireFox browser is opened");
    }else if(browser === "Safari"){
        console.log("The Safari Browser is opened");
    }else{
        console.log("The "+browser+" is opened");
    }
}

function runTests(testType){
    switch(testType){
        case `regression`:
        case "Regression":
        case 'REGRESSION':
            console.log("The Given Test Type is: Regression");
            break;
        case `sanity`:
        case "Sanity":
        case 'SANITY':
            console.log("The Given Test Type is: Sanity");
            break;
        case `functional`:
        case "Functional":
        case 'FUNCTIONAL':
            console.log("The Given Test Type is: Functional");
            break;
        default :
            console.log("The Given test Type is: Smoke");            
    }
}

launchBrowser(browser);
runTests(testType);